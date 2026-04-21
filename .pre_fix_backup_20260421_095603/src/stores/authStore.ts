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

  useAuthStore.getState().initialize();
