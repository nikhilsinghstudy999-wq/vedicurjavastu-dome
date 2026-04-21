'use client';

import { useAuth } from '@/features/auth/hooks/useAuth';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, ReactNode } from 'react';

interface AuthGuardProps {
  children: ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

export default function AuthGuard({ 
  children, 
  requireAuth = true, 
  redirectTo = '/signin' 
}: AuthGuardProps) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loading) return;
    if (requireAuth && !user) {
      const redirectUrl = new URL(redirectTo, window.location.origin);
      redirectUrl.searchParams.set('redirect', pathname);
      router.push(redirectUrl.toString());
      return;
    }
    if (!requireAuth && user) {
      router.push('/dashboard');
      return;
    }
  }, [user, loading, requireAuth, redirectTo, router, pathname]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="w-12 h-12 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}
