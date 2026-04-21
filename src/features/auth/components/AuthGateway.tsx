'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useAuthStore } from '@/stores/authStore';

type AuthMode = 'signin' | 'signup';

export default function AuthGateway({ children }: { children: React.ReactNode }) {
  const { user, isLoading, isInitialized, initialize } = useAuthStore();
  const [mode, setMode] = useState<'auth' | 'ready'>('ready');
  const [authMode, setAuthMode] = useState<AuthMode>('signin');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => { if (!isInitialized) initialize(); }, [isInitialized, initialize]);

  useEffect(() => {
    if (isLoading || !isInitialized) return;
    if (typeof window !== 'undefined' && localStorage.getItem('vedicurja_skip_auth') === 'true') {
      setMode('ready');
      return;
    }
    if (!user) setMode('auth');
    else setMode('ready');
  }, [user, isLoading, isInitialized]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault(); setError(''); setBusy(true);
    try {
      const identifier = email || phone;
      if (!identifier) throw new Error('Email or phone is required');
      const { error } = await supabase.auth.signInWithPassword({ 
        email: email || `${phone}@phone.user`, 
        password 
      });
      if (error) throw error;
    } catch (err: any) { setError(err.message); } finally { setBusy(false); }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault(); setError(''); setBusy(true);
    try {
      if (!name) throw new Error('Full name is required');
      const identifier = email || phone;
      if (!identifier) throw new Error('Email or phone is required');
      const { error } = await supabase.auth.signUp({
        email: email || `${phone}@phone.user`,
        password,
        options: { data: { full_name: name, phone } },
      });
      if (error) throw error;
      setAuthMode('signin');
      alert('Account created! Please sign in.');
    } catch (err: any) { setError(err.message); } finally { setBusy(false); }
  };

  if (isLoading || !isInitialized) {
    return <div className="fixed inset-0 z-50 flex items-center justify-center bg-vastu-parchment"><div className="w-10 h-10 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" /></div>;
  }

  if (mode === 'auth') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">
          <div className="flex mb-6 border-b">
            <button onClick={() => setAuthMode('signin')} className={`flex-1 py-3 text-center font-medium transition ${authMode === 'signin' ? 'text-prakash-gold border-b-2 border-prakash-gold' : 'text-gray-400'}`}>Sign In</button>
            <button onClick={() => setAuthMode('signup')} className={`flex-1 py-3 text-center font-medium transition ${authMode === 'signup' ? 'text-prakash-gold border-b-2 border-prakash-gold' : 'text-gray-400'}`}>Sign Up</button>
          </div>

          {authMode === 'signin' ? (
            <form onSubmit={handleSignIn} className="space-y-4">
              <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-3 border rounded-xl" />
              <div className="relative"><div className="absolute inset-0 flex items-center"><div className="w-full border-t" /></div><span className="relative flex justify-center"><span className="bg-white px-3 text-gray-400 text-sm">or</span></span></div>
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 border rounded-xl" />
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full p-3 border rounded-xl" />
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <button type="submit" disabled={busy} className="w-full luxury-button py-3">{busy ? 'Signing in...' : 'Sign In'}</button>
              <p className="text-center text-sm text-gray-500">Don't have an account? <button type="button" onClick={() => setAuthMode('signup')} className="text-prakash-gold">Sign Up</button></p>
            </form>
          ) : (
            <form onSubmit={handleSignUp} className="space-y-4">
              <input type="text" placeholder="Full Name *" value={name} onChange={e => setName(e.target.value)} required className="w-full p-3 border rounded-xl" />
              <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-3 border rounded-xl" />
              <div className="relative"><div className="absolute inset-0 flex items-center"><div className="w-full border-t" /></div><span className="relative flex justify-center"><span className="bg-white px-3 text-gray-400 text-sm">or</span></span></div>
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 border rounded-xl" />
              <input type="password" placeholder="Password *" value={password} onChange={e => setPassword(e.target.value)} required className="w-full p-3 border rounded-xl" />
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <button type="submit" disabled={busy} className="w-full luxury-button py-3">{busy ? 'Creating account...' : 'Sign Up'}</button>
              <p className="text-center text-sm text-gray-500">Already have an account? <button type="button" onClick={() => setAuthMode('signin')} className="text-prakash-gold">Sign In</button></p>
            </form>
          )}

          <button onClick={() => { localStorage.setItem('vedicurja_skip_auth', 'true'); setMode('ready'); }} className="w-full mt-4 text-sm text-gray-400 hover:text-gray-600 transition">Continue as Guest</button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
