import type { User, Session } from '@supabase/supabase-js';

// User roles enum
export type UserRole = 'super_admin' | 'agency_owner' | 'agency_admin' | 'agent';

// Permission names
export type Permission =
  | 'quotes:create'
  | 'quotes:read'
  | 'quotes:update'
  | 'quotes:delete'
  | 'agents:read'
  | 'agents:manage'
  | 'agency:settings'
  | 'agency:billing'
  | 'reports:view'
  | 'admin:users'
  | 'admin:agencies';

// Agency type (tenant)
export interface Agency {
  id: string;
  name: string;
  slug: string;
  phone?: string;
  email?: string;
  website?: string;
  street_address?: string;
  city?: string;
  state?: string;
  state_code?: string;
  zip?: string;
  is_active: boolean;
  subscription_tier: 'free' | 'premium' | 'enterprise';
  subscription_expires_at?: string;
  created_at: string;
  updated_at: string;
}

// User profile type
export interface UserProfile {
  id: string;
  agency_id?: string;
  agency?: Agency;
  role: UserRole;
  first_name: string;
  last_name: string;
  phone?: string;
  avatar_url?: string;
  license_number?: string;
  license_state?: string;
  years_experience: number;
  bio?: string;
  languages: string[];
  specialties: string[];
  carriers: string[];
  is_active: boolean;
  is_verified: boolean;
  email_verified_at?: string;
  notification_preferences: {
    email: boolean;
    sms: boolean;
  };
  created_at: string;
  updated_at: string;
  last_login_at?: string;
}

// Auth state
export interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  session: Session | null;
  loading: boolean;
  error: string | null;
}

// Auth context type
export interface AuthContextType extends AuthState {
  // Auth actions
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updatePassword: (newPassword: string) => Promise<void>;
  // Profile actions
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  refreshProfile: () => Promise<void>;
  // Permission checks
  hasPermission: (permission: Permission) => boolean;
  hasRole: (roles: UserRole | UserRole[]) => boolean;
  isAgencyMember: (agencyId: string) => boolean;
}

// Login credentials
export interface LoginCredentials {
  email: string;
  password: string;
}
