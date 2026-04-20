import { createBrowserClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;

const createDummyClient = (): SupabaseClient => {
  const dummyPromise = Promise.resolve({ data: [], error: null });
  return {
    from: () => ({
      select: () => ({ order: () => dummyPromise, eq: () => dummyPromise, single: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }) }),
      insert: () => dummyPromise,
      update: () => dummyPromise,
      delete: () => dummyPromise,
      upsert: () => dummyPromise,
    }),
    channel: () => ({ on: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }) }),
    auth: {
      getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      signOut: () => Promise.resolve({ error: null }),
      signInWithPassword: () => Promise.resolve({ data: { user: null }, error: null }),
      signInWithOAuth: () => Promise.resolve({ error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      exchangeCodeForSession: () => Promise.resolve({ data: { user: null, session: null }, error: null }),
      signUp: () => Promise.resolve({ data: { user: null, session: null }, error: null }),
    },
    storage: {
      from: () => ({
        upload: () => Promise.resolve({ error: null }),
        getPublicUrl: () => ({ data: { publicUrl: '' } }),
      }),
    },
    rpc: () => Promise.resolve({ data: null, error: null }),
  } as unknown as SupabaseClient;
};

export const getSupabase = (): SupabaseClient => {
  if (typeof window === 'undefined') {
    return createDummyClient();
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.error('❌ Supabase URL or Anon Key missing. Check .env.local');
    // Return a client that will throw clear errors on use
    return {
      from: () => { throw new Error('Supabase credentials not configured. Please check environment variables.'); }
    } as any;
  }

  if (!_supabase) {
    _supabase = createBrowserClient(url, key, {
      cookieOptions: {
        name: 'sb-auth',
        maxAge: 60 * 60 * 24 * 30,
        domain: '',
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      },
    });
  }
  return _supabase;
};

export const supabase = getSupabase();
