'use client';
import { useEffect, useState, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import type { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase/client';

interface Profile {
  id: string;
  full_name: string;
  avatar_url: string | null;
  coins: number;
  role: 'client' | 'admin';
}

// Global state for session sharing across components
let globalSession: Session | null = null;
let globalProfile: Profile | null = null;
const subscribers = new Set<() => void>();

function subscribe(cb: () => void): () => void {
  subscribers.add(cb);
  return () => subscribers.delete(cb);
}

function notifySubscribers() {
  subscribers.forEach(cb => cb());
}

// Initialize the auth listener once (client‑side only)
if (typeof window !== 'undefined') {
  // Initial session fetch
  supabase.auth.getSession().then(({ data: { session } }) => {
    globalSession = session;
    if (session?.user) {
      supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()
        .then(({ data }) => {
          globalProfile = data;
          notifySubscribers();
        });
    } else {
      globalProfile = null;
      notifySubscribers();
    }
  });

  // Single auth state listener
  supabase.auth.onAuthStateChange(async (event, session) => {
    globalSession = session;
    if (session?.user) {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      globalProfile = data;
    } else {
      globalProfile = null;
    }
    notifySubscribers();
  });
}

export function useAuth(requiredRole?: 'client' | 'admin') {
  const [user, setUser] = useState<User | null>(globalSession?.user ?? null);
  const [profile, setProfile] = useState<Profile | null>(globalProfile);
  const [loading, setLoading] = useState(!globalSession);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleChange = () => {
      setUser(globalSession?.user ?? null);
      setProfile(globalProfile);
      setLoading(false);
    };

    // Subscribe to global changes
    const unsubscribe = subscribe(handleChange);

    // If already have session, ensure loading is false
    if (globalSession !== undefined) {
      setLoading(false);
    }

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (loading) return;
    if (!user && requiredRole && !pathname.includes('/signin')) {
      router.push('/signin');
    } else if (user && requiredRole && profile?.role !== requiredRole) {
      router.push('/');
    }
  }, [user, profile, loading, requiredRole, router, pathname]);

  return { user, profile, loading };
}
