'use client';
import { useAuthStore } from '@/stores/authStore';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '@/features/shared/components/ui/LanguageSwitcher';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';

export default function Header() {
  const { t } = useLanguage();
  const { user, profile } = useAuthStore();
  const signOut = useAuthStore((state) => state.signOut);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const menuItems = [
    { key: 'home', href: '/' },
    { key: 'freeAITools', href: '/free-tools' },
    { key: 'services', href: '/services' },
    { key: 'bookings', href: '/bookings' },
    { key: 'blogs', href: '/insights' },
    { key: 'testimonials', href: '/client-stories' },
    { key: 'about', href: '/about' },
  ];

  const handleSignOut = () => {
    setProfileMenuOpen(false);
    setMobileMenuOpen(false);
    signOut();
  };

  const avatarUrl = profile?.avatar_url;
  const userInitial = profile?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U';
  const isAdmin = profile?.role === 'admin';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes headerGradient { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .header-gradient { background:linear-gradient(135deg,#F5E6D3,#FFDAB9,#FFB347,#FF8C00,#E25822,#C10000); background-size:300% 300%; animation:headerGradient 12s ease infinite; }
        .pearl-btn { --bg:#eab308; --radius:50px; outline:none; cursor:pointer; border:0; position:relative; border-radius:var(--radius); background-color:var(--bg); transition:all 0.2s ease; box-shadow:inset 0 0.1rem 0.3rem rgba(255,255,255,0.4),inset 0 -0.05rem 0.15rem rgba(0,0,0,0.3),inset 0 -0.15rem 0.3rem rgba(255,255,255,0.4),0 0.2rem 0.4rem rgba(0,0,0,0.2); display:inline-flex; align-items:center; justify-content:center; text-decoration:none; }
        .pearl-btn .wrap { font-size:12px; font-weight:700; color:#fff; padding:5px 12px; border-radius:inherit; position:relative; overflow:hidden; display:block; width:100%; }
        .pearl-btn .wrap p span:nth-child(2) { display:none; }
        .pearl-btn:hover .wrap p span:nth-child(1) { display:none; }
        .pearl-btn:hover .wrap p span:nth-child(2) { display:inline-block; }
        .pearl-btn .wrap p { display:flex; align-items:center; justify-content:center; gap:5px; margin:0; transition:all 0.2s ease; transform:translateY(2%); mask-image:linear-gradient(to bottom,white 40%,transparent); -webkit-mask-image:linear-gradient(to bottom,white 40%,transparent); }
        .pearl-btn:hover { box-shadow:inset 0 0.15rem 0.2rem rgba(255,255,255,0.5),inset 0 -0.05rem 0.15rem rgba(0,0,0,0.4),inset 0 -0.2rem 0.4rem rgba(255,255,255,0.6),0 0.3rem 0.6rem rgba(0,0,0,0.3); }
        .pearl-btn:active { transform:translateY(2px); box-shadow:inset 0 0.1rem 0.2rem rgba(255,255,255,0.5),inset 0 -0.05rem 0.15rem rgba(0,0,0,0.5),inset 0 -0.15rem 0.3rem rgba(255,255,255,0.4),0 0.1rem 0.3rem rgba(0,0,0,0.2); }
      `}} />
      <header className="fixed top-0 left-0 right-0 w-full z-50 header-gradient shadow-md border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-1.5 flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0 z-50">
            {!imgError ? <Image src="/logo/logo.png" alt="VedicUrja" width={140} height={35} className="h-6 sm:h-7 lg:h-8 w-auto object-contain" onError={() => setImgError(true)} priority /> : <span className="font-serif text-lg text-white font-bold tracking-wide">VedicUrja<span className="text-yellow-400">.</span></span>}
          </Link>
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-2.5 ml-4">
            {menuItems.map((item) => <Link key={item.key} href={item.href} className="pearl-btn"><div className="wrap"><p><span>✦</span><span>✧</span>{t(`common.${item.key}`)}</p></div></Link>)}
          </nav>
          <div className="flex items-center gap-2.5 sm:gap-3 z-50">
            <LanguageSwitcher />
            {user ? (
              <div className="relative">
                <button onClick={() => setProfileMenuOpen(!profileMenuOpen)} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-[1.5px] border-white/60 hover:border-yellow-400 shadow-sm transition-all">
                  {avatarUrl ? <Image src={avatarUrl} alt="Profile" width={32} height={32} className="object-cover" /> : <div className="w-full h-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">{userInitial}</div>}
                </button>
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-3 bg-gray-50 border-b border-gray-100"><p className="font-bold text-gray-900 text-sm">{profile?.full_name || 'User'}</p><p className="text-xs text-gray-500 mt-0.5 truncate">{user.email}</p></div>
                    <div className="py-1.5 flex flex-col gap-1 px-2">
                      <Link href="/dashboard" onClick={() => setProfileMenuOpen(false)} className="pearl-btn w-full !bg-orange-500"><div className="wrap"><p><span>✦</span><span>✧</span>Dashboard</p></div></Link>
                      <Link href="/terms" onClick={() => setProfileMenuOpen(false)} className="pearl-btn w-full !bg-orange-500"><div className="wrap"><p><span>✦</span><span>✧</span>Terms</p></div></Link>
                      {isAdmin && <Link href="/admin" onClick={() => setProfileMenuOpen(false)} className="pearl-btn w-full !bg-red-600"><div className="wrap"><p><span>✦</span><span>✧</span>Admin Panel</p></div></Link>}
                      <button onClick={handleSignOut} className="pearl-btn w-full !bg-gray-700"><div className="wrap"><p><span>✦</span><span>✧</span>Sign Out</p></div></button>
                    </div>
                  </div>
                )}
              </div>
            ) : <Link href="/signin" className="hidden sm:inline-flex pearl-btn"><div className="wrap"><p><span>✦</span><span>✧</span>Sign In</p></div></Link>}
            <div className="hidden sm:block"><Link href="/contact" className="pearl-btn"><div className="wrap"><p><span>✦</span><span>✧</span>Consult Vastuvid ji</p></div></Link></div>
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center text-white border border-white/20 bg-white/5 hover:bg-white/10"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16"/></svg></button>
          </div>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-orange-600 via-red-600 to-red-900">
          <div className="h-[100dvh] w-full overflow-y-auto flex flex-col p-5 pb-10">
            <div className="flex justify-between items-center mb-6">
              {!imgError ? <Image src="/logo/logo.png" alt="VedicUrja" width={140} height={35} className="h-7 w-auto object-contain" onError={() => setImgError(true)} /> : <span className="font-serif text-xl text-white font-bold">VedicUrja.</span>}
              <button onClick={() => setMobileMenuOpen(false)} className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-white/10"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg></button>
            </div>
            <div className="flex-1 flex flex-col">
              {user && <div className="mb-6 p-4 bg-white/10 border border-white/20 rounded-xl text-white"><p className="font-bold text-base">{profile?.full_name || 'User'}</p><p className="text-sm text-white/70 truncate">{user.email}</p></div>}
              <nav className="flex flex-col gap-3 mb-6">{menuItems.map((item) => <Link key={item.key} href={item.href} onClick={() => setMobileMenuOpen(false)} className="pearl-btn w-full"><div className="wrap !text-center"><p className="!justify-center text-[15px]"><span>✦</span><span>✧</span>{t(`common.${item.key}`)}</p></div></Link>)}</nav>
              <div className="mt-auto pt-6 border-t border-white/20 flex flex-col gap-3">
                {user ? (
                  <>
                    <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="pearl-btn w-full"><div className="wrap !text-center"><p className="!justify-center text-[15px]"><span>✦</span><span>✧</span>Dashboard</p></div></Link>
                    <Link href="/terms" onClick={() => setMobileMenuOpen(false)} className="pearl-btn w-full"><div className="wrap !text-center"><p className="!justify-center text-[15px]"><span>✦</span><span>✧</span>Terms</p></div></Link>
                    {isAdmin && <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="pearl-btn w-full !bg-red-600"><div className="wrap !text-center"><p className="!justify-center text-[15px]"><span>✦</span><span>✧</span>Admin Panel</p></div></Link>}
                    <button onClick={handleSignOut} className="pearl-btn w-full !bg-gray-800 mt-2"><div className="wrap !text-center"><p className="!justify-center text-[15px]"><span>✦</span><span>✧</span>Sign Out</p></div></button>
                  </>
                ) : (
                  <>
                    <Link href="/signin" onClick={() => setMobileMenuOpen(false)} className="pearl-btn w-full"><div className="wrap !text-center"><p className="!justify-center text-[15px]"><span>✦</span><span>✧</span>Sign In</p></div></Link>
                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)} className="pearl-btn w-full"><div className="wrap !text-center"><p className="!justify-center text-[15px]"><span>✦</span><span>✧</span>Create Account</p></div></Link>
                  </>
                )}
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="pearl-btn w-full mt-4"><div className="wrap !text-center !py-3"><p className="!justify-center text-lg uppercase tracking-wide"><span>✦</span><span>✧</span>Consult Vastuvid ji</p></div></Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
