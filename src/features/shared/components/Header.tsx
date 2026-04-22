'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './ui/LanguageSwitcher';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const menuItems = [
    { key: 'home', label: 'Home', href: '/' },
    { key: 'freeAITools', label: 'Free AI Tools', href: '/free-tools' },
    { key: 'services', label: 'Services', href: '/services' },
    { key: 'bookings', label: 'Virtual Consult', href: '/bookings' },
    { key: 'blogs', label: 'Blogs', href: '/insights' },
    { key: 'testimonials', label: 'Testimonials', href: '/client-stories' },
    { key: 'about', label: 'About', href: '/about' },
  ];

  return (
    <>
      <style>{`
        @keyframes headerGradient { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .header-gradient { background:linear-gradient(135deg,#F5E6D3,#FFDAB9,#FFB347,#FF8C00,#E25822,#C10000); background-size:300% 300%; animation:headerGradient 12s ease infinite; }
        .pearl-btn { --bg:#eab308; border-radius:50px; background:var(--bg); box-shadow:inset 0 0.1rem 0.3rem #fff6,inset 0 -0.05rem 0.15rem #0000004d,inset 0 -0.15rem 0.3rem #fff6,0 0.2rem 0.4rem #0003; display:inline-flex; align-items:center; justify-content:center; text-decoration:none; }
        .pearl-btn .wrap { font-size:12px; font-weight:700; color:#fff; padding:5px 12px; }
        .pearl-btn:hover { box-shadow:inset 0 0.15rem 0.2rem #ffffff80,inset 0 -0.05rem 0.15rem #0006,inset 0 -0.2rem 0.4rem #fff9,0 0.3rem 0.6rem #0000004d; }
      `}</style>
      <header className="fixed top-0 left-0 right-0 w-full z-50 header-gradient shadow-md border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-1.5 flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0 z-50">
            {!imgError ? <Image src="/logo/logo.png" alt="VedicUrja" width={140} height={35} className="h-6 sm:h-7 lg:h-8 w-auto object-contain" onError={() => setImgError(true)} priority /> : <span className="font-serif text-lg text-white font-bold">VedicUrja<span className="text-yellow-400">.</span></span>}
          </Link>
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-2.5 ml-4">
            {menuItems.map(item => (
              <Link key={item.key} href={item.href} className="pearl-btn">
                <div className="wrap"><p>{item.label}</p></div>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2.5 sm:gap-3 z-50">
            <LanguageSwitcher />
            <div className="hidden sm:block">
              <Link href="/contact" className="pearl-btn">
                <div className="wrap"><p>Consult Acharya</p></div>
              </Link>
            </div>
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center text-white border border-white/20 bg-white/5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-orange-600 via-red-600 to-red-900">
          <div className="h-[100dvh] w-full overflow-y-auto flex flex-col p-5 pb-10">
            <div className="flex justify-between items-center mb-6">
              {!imgError ? <Image src="/logo/logo.png" alt="VedicUrja" width={140} height={35} className="h-7 w-auto object-contain" onError={() => setImgError(true)} /> : <span className="font-serif text-xl text-white font-bold">VedicUrja.</span>}
              <button onClick={() => setMobileMenuOpen(false)} className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-white/10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <nav className="flex flex-col gap-3 mb-6">
              {menuItems.map(item => (
                <Link key={item.key} href={item.href} onClick={() => setMobileMenuOpen(false)} className="pearl-btn w-full">
                  <div className="wrap !text-center"><p className="!justify-center text-[15px]">{item.label}</p></div>
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-white/20">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="pearl-btn w-full">
                <div className="wrap !text-center !py-3"><p className="!justify-center text-lg uppercase">Consult Acharya</p></div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
