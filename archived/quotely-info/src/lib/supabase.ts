import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isConfigured) {
  console.warn(
    'Missing Supabase environment variables. Auth features will not work. ' +
    'Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env.local file.'
  );
}

// Create a mock client when not configured to prevent crashes
const createMockClient = () => {
  const mockAuth = {
    getSession: async () => ({ data: { session: null }, error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async () => ({ data: { user: null, session: null }, error: new Error('Auth not configured') }),
    signOut: async () => ({ error: null }),
    resetPasswordForEmail: async () => ({ error: new Error('Auth not configured') }),
    updateUser: async () => ({ data: { user: null }, error: new Error('Auth not configured') }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
  };

  const mockFrom = () => ({
    select: () => ({ eq: () => ({ single: async () => ({ data: null, error: null }) }) }),
    update: () => ({ eq: async () => ({ error: null }) }),
  });

  return {
    auth: mockAuth,
    from: mockFrom,
  } as unknown as SupabaseClient;
};

// Only create a real client if properly configured
export const supabase: SupabaseClient = isConfigured
  ? createClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        auth: {
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: true,
          storage: typeof window !== 'undefined' ? window.localStorage : undefined,
          storageKey: 'quotely-auth',
          flowType: 'pkce',
        },
      }
    )
  : createMockClient();

// Check if Supabase is configured
export const isSupabaseConfigured = (): boolean => {
  return Boolean(supabaseUrl && supabaseAnonKey);
};

// Helper to get current session
export const getCurrentSession = async () => {
  if (!isSupabaseConfigured()) return null;
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) throw error;
  return session;
};

// Helper to get current user
export const getCurrentUser = async () => {
  if (!isSupabaseConfigured()) return null;
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
};
