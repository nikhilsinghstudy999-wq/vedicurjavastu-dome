import { create } from 'zustand';
import { supabase } from '@/lib/supabase/client';
import type { User, Session } from '@supabase/supabase-js';

interface Profile {
  id: string;
  full_name: string;
  avatar_url: string | null;
  coins: number;
  role: 'client' | 'admin';
}

interface AuthState {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  isLoading: boolean;
  isInitialized: boolean;
  initialize: () => Promise<void>;
  signOut: () => void;
}

const DEFAULT_ADMIN = { email: 'admin99899@vedicurja.local', password: 'admin99899' };
let adminSignInAttempted = false;

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  profile: null,
  session: null,
  isLoading: true,
  isInitialized: false,

  initialize: async () => {
    if (get().isInitialized) return;

    const timeoutId = setTimeout(() => {
      set({ isLoading: false, isInitialized: true });
    }, 2000);

    try {
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        set({
          user: session.user,
          profile,
          session,
          isLoading: false,
          isInitialized: true,
        });
      } else {
        // Attempt automatic admin sign-in only once
        if (!adminSignInAttempted) {
          adminSignInAttempted = true;
          try {
            const { data } = await supabase.auth.signInWithPassword(DEFAULT_ADMIN);
            if (data.user) {
              const { data: profile } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', data.user.id)
                .single();
              set({
                user: data.user,
                profile,
                session: data.session,
                isLoading: false,
                isInitialized: true,
              });
              return;
            }
          } catch {
            // Ignore auto-login failure
          }
        }
        set({
          user: null,
          profile: null,
          session: null,
          isLoading: false,
          isInitialized: true,
        });
      }
    } catch {
      set({
        user: null,
        profile: null,
        session: null,
        isLoading: false,
        isInitialized: true,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    // Listen for auth changes
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        set({ user: session.user, profile, session, isLoading: false });
      } else if (event === 'SIGNED_OUT') {
        set({ user: null, profile: null, session: null, isLoading: false });
      }
    });
  },

  signOut: () => {
    set({ user: null, profile: null, session: null, isLoading: false });
    if (typeof window !== 'undefined') {
      localStorage.removeItem('vedicurja_skip_auth');
      window.location.href = '/';
    }
    supabase.auth.signOut().catch(console.error);
  },
}));

if (typeof window !== 'undefined') {
  useAuthStore.getState().initialize();
}
