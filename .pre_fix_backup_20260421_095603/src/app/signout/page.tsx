'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    const doSignOut = async () => {
      await supabase.auth.signOut();
      router.push('/');
    };
    doSignOut();
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-vastu-parchment">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-nidra-indigo font-serif">Signing you out...</p>
      </div>
    </div>
  );
}
