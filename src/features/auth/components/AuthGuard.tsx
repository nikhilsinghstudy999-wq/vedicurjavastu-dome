'use client';

import GlobalLoader from '@/features/shared/components/ui/GlobalLoader';
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
    return <GlobalLoader isLoading={true} message="Verifying session..." />;
  }

  return <>{children}</>;
}
