'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useAuth } from '@/features/auth/hooks/useAuth';

export default function AuthGateway({ children }: { children: React.ReactNode }) {
  const { user, profile, loading } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (localStorage.getItem('vedicurja_skip_auth') === 'true') {
      setShowAuth(false);
      setShowLanguage(false);
      return;
    }
    if (!user) {
      setShowAuth(true);
      setShowLanguage(false);
    } else if (!localStorage.getItem('vedicurja_language')) {
      setShowAuth(false);
      setShowLanguage(true);
    } else {
      setShowAuth(false);
      setShowLanguage(false);
    }
  }, [user, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      if (isSignUp) {
        const { error: err } = await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } });
        if (err) throw err;
      } else {
        const { error: err } = await supabase.auth.signInWithPassword({ email, password });
        if (err) throw err;
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const handleGoogle = async () => {
    setBusy(true);
    await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/auth/callback` } });
  };

  const handleGuest = () => {
    localStorage.setItem('vedicurja_skip_auth', 'true');
    setShowAuth(false);
  };

  const handleLanguage = (lang: string) => {
    localStorage.setItem('vedicurja_language', lang);
    setShowLanguage(false);
  };

  if (loading) {
    return <div className="fixed inset-0 z-50 flex items-center justify-center bg-vastu-parchment"><div className="w-8 h-8 border-3 border-prakash-gold border-t-transparent rounded-full animate-spin" /></div>;
  }

  return (
    <>
      {showAuth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6">
            <h2 className="font-serif text-2xl text-center text-nidra-indigo mb-4">{isSignUp ? 'Create Account' : 'Sign In'}</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              {isSignUp && <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required className="w-full p-3 border rounded-xl" />}
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-3 border rounded-xl" />
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full p-3 border rounded-xl" />
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <button type="submit" disabled={busy} className="w-full luxury-button py-3 disabled:opacity-50">
                {busy ? <span className="flex items-center justify-center gap-2"><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Please wait...</span> : (isSignUp ? 'Sign Up' : 'Sign In')}
              </button>
            </form>
            <div className="relative my-4"><div className="absolute inset-0 flex items-center"><div className="w-full border-t" /></div><div className="relative flex justify-center"><span className="bg-white px-3 text-gray-500 text-sm">or</span></div></div>
            <button onClick={handleGoogle} disabled={busy} className="w-full flex items-center justify-center gap-2 p-3 border rounded-xl hover:bg-gray-50">Google</button>
            <p className="text-center mt-4 text-sm">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"} <button type="button" onClick={() => setIsSignUp(!isSignUp)} className="text-prakash-gold">{isSignUp ? 'Sign In' : 'Sign Up'}</button>
            </p>
            <button type="button" onClick={handleGuest} className="w-full mt-3 text-sm text-gray-500">Continue as Guest</button>
          </div>
        </div>
      )}

      {showLanguage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl p-6">
            <h2 className="font-serif text-2xl text-center mb-4">Choose Language</h2>
            <div className="grid grid-cols-2 gap-3">
              {['English', 'Hindi'].map(lang => (
                <button key={lang} onClick={() => handleLanguage(lang === 'English' ? 'en' : 'hi')} className="p-4 border rounded-xl text-lg">{lang}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      {!showAuth && !showLanguage && children}
    </>
  );
}
