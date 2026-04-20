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
      
      if (!code) {
        setError('No authorization code found.');
        return;
      }

      try {
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
        
        if (exchangeError) {
          console.error('Code exchange error:', exchangeError);
          setError(exchangeError.message);
          return;
        }

        // Small delay to ensure session is fully persisted
        await new Promise(resolve => setTimeout(resolve, 200));

        const next = searchParams.get('next') || '/';
        router.replace(next);
      } catch (err: any) {
        console.error('Callback error:', err);
        setError(err.message || 'Authentication failed.');
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
          <button
            onClick={() => router.push('/signin')}
            className="mt-6 luxury-button"
          >
            Return to Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-vastu-parchment">
      <div className="text-center">
        <div className="w-10 h-10 border-3 border-prakash-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-nidra-indigo font-serif">Signing you in...</p>
      </div>
    </div>
  );
}
