'use client';
import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';

export function useAuth(requiredRole?: 'client' | 'admin') {
  const { user, profile, isLoading, isInitialized, initialize } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const redirectAttempted = useRef(false);

  useEffect(() => {
    if (!isInitialized) {
      initialize();
    }
  }, [isInitialized, initialize]);

  useEffect(() => {
    if (!isInitialized || isLoading) return;
    if (redirectAttempted.current) return;

    if (!user && requiredRole && !pathname.includes('/signin')) {
      redirectAttempted.current = true;
      router.replace('/signin');
    } else if (user && requiredRole && profile?.role !== requiredRole) {
      redirectAttempted.current = true;
      router.replace('/');
    }
  }, [user, profile, isLoading, isInitialized, requiredRole, router, pathname]);

  return { user, profile, loading: isLoading || !isInitialized };
}
