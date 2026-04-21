'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';

export default function ConfirmPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Verifying your email...');

  useEffect(() => {
    const handleCodeExchange = async () => {
      // The code is automatically exchanged by detectSessionInUrl
      // We just need to check if a session exists after the redirect
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        setStatus('error');
        setMessage(error.message);
        return;
      }
      
      if (session) {
        setStatus('success');
        setMessage('Authentication successful! Redirecting to dashboard...');
        setTimeout(() => router.push('/dashboard'), 1500);
      } else {
        // If no session, maybe the code is still in URL? Fallback to manual exchange.
        const code = searchParams.get('code');
        if (code) {
          const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
          if (exchangeError) {
            setStatus('error');
            setMessage(exchangeError.message);
          } else {
            setStatus('success');
            setMessage('Authentication successful! Redirecting to dashboard...');
            setTimeout(() => router.push('/dashboard'), 1500);
          }
        } else {
          setStatus('error');
          setMessage('No authentication code found. Please try signing in again.');
        }
      }
    };

    handleCodeExchange();
  }, [router, searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-vastu-parchment">
      <div className="text-center">
        {status === 'loading' && (
          <>
            <div className="w-12 h-12 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="font-serif text-xl text-nidra-indigo">{message}</p>
          </>
        )}
        {status === 'success' && (
          <>
            <div className="text-6xl mb-4">✅</div>
            <p className="font-serif text-xl text-nidra-indigo">{message}</p>
          </>
        )}
        {status === 'error' && (
          <>
            <div className="text-6xl mb-4">❌</div>
            <p className="font-serif text-xl text-nidra-indigo">{message}</p>
            <button
              onClick={() => router.push('/signin')}
              className="mt-6 luxury-button px-6 py-3"
            >
              Return to Sign In
            </button>
          </>
        )}
      </div>
    </div>
  );
}
