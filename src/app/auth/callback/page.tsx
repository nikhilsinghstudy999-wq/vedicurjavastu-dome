'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      if (!code) { setError('No authorization code found.'); return; }

      try {
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
        if (exchangeError) throw exchangeError;

        let attempts = 0;
        const maxAttempts = 15;

        const checkSession = async (): Promise<boolean> => {
          const { data: { session } } = await supabase.auth.getSession();
          if (session) { router.replace('/'); return true; }
          return false;
        };

        if (await checkSession()) return;

        const interval = setInterval(async () => {
          attempts++;
          if (await checkSession()) { clearInterval(interval); return; }
          if (attempts >= maxAttempts) {
            clearInterval(interval);
            setError('Session not established after multiple attempts.');
          }
        }, 250);
      } catch (err: any) {
        console.error('Callback error:', err);
        setError(err.message);
      }
    };

    handleCallback();
  }, [router, searchParams]);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-vastu-parchment">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
          <p className="text-red-600 mb-4">Authentication Error</p>
          <p className="text-nidra-indigo/70">{error}</p>
          <button onClick={() => router.push('/signin')} className="mt-6 luxury-button">Return to Sign In</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-vastu-parchment">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-nidra-indigo font-serif">Completing sign in...</p>
      </div>
    </div>
  );
}
