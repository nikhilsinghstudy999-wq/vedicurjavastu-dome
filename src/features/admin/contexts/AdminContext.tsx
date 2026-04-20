'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/lib/supabase/client';

interface AdminContextType {
  isAdmin: boolean;
  loading: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const check = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.user) {
          if (mounted) { setIsAdmin(false); setLoading(false); }
          return;
        }
        const { data: profile } = await supabase.from('profiles').select('role').eq('id', session.user.id).single();
        if (mounted) { setIsAdmin(profile?.role === 'admin'); }
      } catch {
        if (mounted) setIsAdmin(false);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    check();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mounted) return;
      if (event === 'SIGNED_OUT') setIsAdmin(false);
      else if (session?.user) {
        const { data: profile } = await supabase.from('profiles').select('role').eq('id', session.user.id).single();
        setIsAdmin(profile?.role === 'admin');
      }
    });

    return () => { mounted = false; subscription.unsubscribe(); };
  }, []);

  return <AdminContext.Provider value={{ isAdmin, loading }}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider');
  return ctx;
}
