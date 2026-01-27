import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type {
  AuthContextType,
  AuthState,
  UserProfile,
  Permission,
  UserRole
} from '../types/auth';

// Permission mapping by role
const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  super_admin: [
    'quotes:create', 'quotes:read', 'quotes:update', 'quotes:delete',
    'agents:read', 'agents:manage', 'agency:settings', 'agency:billing',
    'reports:view', 'admin:users', 'admin:agencies'
  ],
  agency_owner: [
    'quotes:create', 'quotes:read', 'quotes:update', 'quotes:delete',
    'agents:read', 'agents:manage', 'agency:settings', 'agency:billing', 'reports:view'
  ],
  agency_admin: [
    'quotes:create', 'quotes:read', 'quotes:update', 'quotes:delete',
    'agents:read', 'agents:manage', 'reports:view'
  ],
  agent: ['quotes:create', 'quotes:read', 'quotes:update']
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>({
    user: null,
    profile: null,
    session: null,
    loading: true,
    error: null,
  });

  // Fetch user profile from database
  const fetchProfile = useCallback(async (userId: string): Promise<UserProfile | null> => {
    if (!isSupabaseConfigured()) return null;

    const { data, error } = await supabase
      .from('profiles')
      .select(`
        *,
        agency:agencies(*)
      `)
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
      return null;
    }

    return data as UserProfile;
  }, []);

  // Update last login timestamp
  const updateLastLogin = useCallback(async (userId: string) => {
    if (!isSupabaseConfigured()) return;

    await supabase
      .from('profiles')
      .update({ last_login_at: new Date().toISOString() })
      .eq('id', userId);
  }, []);

  // Initialize auth state
  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setState(prev => ({ ...prev, loading: false }));
      return;
    }

    let mounted = true;

    // Safety timeout to prevent infinite loading
    const safetyTimeout = setTimeout(() => {
      if (mounted) {
        setState(prev => {
          if (prev.loading) {
            console.warn('Auth initialization timed out, setting loading to false');
            return { ...prev, loading: false };
          }
          return prev;
        });
      }
    }, 3000);

    const initializeAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) throw error;

        if (session?.user && mounted) {
          const profile = await fetchProfile(session.user.id);
          setState({
            user: session.user,
            profile,
            session,
            loading: false,
            error: null,
          });
        } else if (mounted) {
          setState(prev => ({ ...prev, loading: false }));
        }
      } catch (error) {
        if (mounted) {
          console.error('Auth initialization error:', error);
          setState(prev => ({
            ...prev,
            loading: false,
            error: (error as Error).message,
          }));
        }
      }
    };

    initializeAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;

        if (event === 'SIGNED_IN' && session?.user) {
          const profile = await fetchProfile(session.user.id);
          await updateLastLogin(session.user.id);
          setState({
            user: session.user,
            profile,
            session,
            loading: false,
            error: null,
          });
        } else if (event === 'SIGNED_OUT') {
          setState({
            user: null,
            profile: null,
            session: null,
            loading: false,
            error: null,
          });
        } else if (event === 'TOKEN_REFRESHED' && session) {
          setState(prev => ({ ...prev, session }));
        }
      }
    );

    return () => {
      mounted = false;
      clearTimeout(safetyTimeout);
      subscription.unsubscribe();
    };
  }, [fetchProfile, updateLastLogin]);

  // Sign in
  const signIn = useCallback(async (email: string, password: string) => {
    if (!isSupabaseConfigured()) {
      throw new Error('Authentication is not configured');
    }

    setState(prev => ({ ...prev, loading: true, error: null }));

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setState(prev => ({ ...prev, loading: false, error: error.message }));
      throw error;
    }
  }, []);

  // Sign out
  const signOut = useCallback(async () => {
    if (!isSupabaseConfigured()) return;

    setState(prev => ({ ...prev, loading: true }));

    const { error } = await supabase.auth.signOut();

    if (error) {
      setState(prev => ({ ...prev, loading: false, error: error.message }));
      throw error;
    }
  }, []);

  // Reset password (send email)
  const resetPassword = useCallback(async (email: string) => {
    if (!isSupabaseConfigured()) {
      throw new Error('Authentication is not configured');
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });

    if (error) throw error;
  }, []);

  // Update password
  const updatePassword = useCallback(async (newPassword: string) => {
    if (!isSupabaseConfigured()) {
      throw new Error('Authentication is not configured');
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) throw error;
  }, []);

  // Update profile
  const updateProfile = useCallback(async (data: Partial<UserProfile>) => {
    if (!state.user) throw new Error('Not authenticated');
    if (!isSupabaseConfigured()) {
      throw new Error('Authentication is not configured');
    }

    const { error } = await supabase
      .from('profiles')
      .update(data)
      .eq('id', state.user.id);

    if (error) throw error;

    // Refresh profile
    const profile = await fetchProfile(state.user.id);
    setState(prev => ({ ...prev, profile }));
  }, [state.user, fetchProfile]);

  // Refresh profile
  const refreshProfile = useCallback(async () => {
    if (!state.user) return;

    const profile = await fetchProfile(state.user.id);
    setState(prev => ({ ...prev, profile }));
  }, [state.user, fetchProfile]);

  // Check permission
  const hasPermission = useCallback((permission: Permission): boolean => {
    if (!state.profile) return false;
    return ROLE_PERMISSIONS[state.profile.role]?.includes(permission) ?? false;
  }, [state.profile]);

  // Check role
  const hasRole = useCallback((roles: UserRole | UserRole[]): boolean => {
    if (!state.profile) return false;
    const roleArray = Array.isArray(roles) ? roles : [roles];
    return roleArray.includes(state.profile.role);
  }, [state.profile]);

  // Check agency membership
  const isAgencyMember = useCallback((agencyId: string): boolean => {
    if (!state.profile) return false;
    if (state.profile.role === 'super_admin') return true;
    return state.profile.agency_id === agencyId;
  }, [state.profile]);

  const value: AuthContextType = {
    ...state,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    updateProfile,
    refreshProfile,
    hasPermission,
    hasRole,
    isAgencyMember,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
