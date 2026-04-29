'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './ui/LanguageSwitcher';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';
import { useNavigation } from '@/features/shared/contexts/NavigationContext';

export default function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { startNavigation } = useNavigation();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Only main page navigations trigger the progress bar
  const mainPageKeys: Set<string> = new Set([
    'home', 'about', 'services', 'freeAITools',
    'bookings', 'blogs', 'collaborate', 'testimonials',
  ]);

  const menuItems = [
    { key: 'home',         href: '/' },
    { key: 'about',        href: '/about' },
    { key: 'services',     href: '/services' },
    { key: 'freeAITools',  href: '/free-tools' },
    { key: 'bookings',     href: '/bookings' },
    { key: 'blogs',        href: '/insights' },
    { key: 'collaborate',  href: '/collaborate' },
    { key: 'testimonials', href: '/client-stories' },
  ];

  const handleMainNavClick = (itemKey: string) => {
    if (mainPageKeys.has(itemKey)) {
      startNavigation();
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes headerGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .header-gradient {
          background: linear-gradient(135deg, #FFDAB9, #FFB347, #FF8C00, #E25822, #C10000, #5D4037);
          background-size: 300% 300%;
          animation: headerGradient 14s ease infinite;
        }
        .pearl-btn {
          --bg: #eab308;
          border-radius: 50px;
          background: var(--bg);
          box-shadow: inset 0 0.1rem 0.3rem rgba(255,255,255,0.6), inset 0 -0.05rem 0.15rem rgba(0,0,0,0.3), inset 0 -0.15rem 0.3rem rgba(255,255,255,0.4), 0 0.2rem 0.4rem rgba(0,0,0,0.2);
          display: inline-flex; align-items: center; justify-content: center;
          text-decoration: none; transition: all 0.2s ease; border: 0; outline: none; cursor: pointer;
        }
        .pearl-btn .wrap { font-size:12px; font-weight:700; color:#fff; padding:5px 12px; border-radius:inherit; }
        .pearl-btn:hover { box-shadow: inset 0 0.15rem 0.2rem rgba(255,255,255,0.8), inset 0 -0.05rem 0.15rem rgba(0,0,0,0.5), inset 0 -0.2rem 0.4rem rgba(255,255,255,0.9), 0 0.3rem 0.6rem rgba(0,0,0,0.3); }
        .pearl-btn:active { transform:translateY(2px); box-shadow: inset 0 0.1rem 0.2rem rgba(255,255,255,0.5), inset 0 -0.05rem 0.15rem rgba(0,0,0,0.5), inset 0 -0.15rem 0.3rem rgba(255,255,255,0.4), 0 0.1rem 0.3rem rgba(0,0,0,0.2); }
        .collab-btn { --bg: #7C3AED; }
        .testim-btn { --bg: #DC2626; }
        .consult-btn {
          background: linear-gradient(135deg, #7C3AED, #C10000);
          color: #fff; font-weight: 700; font-size: 13px; padding: 8px 20px;
          border-radius: 50px; box-shadow: 0 4px 15px rgba(193,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3);
          transition: all 0.3s ease; white-space: nowrap; letter-spacing: 0.02em;
        }
        .consult-btn:hover { box-shadow:0 6px 25px rgba(193,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.4); transform:translateY(-1px); }
        .header-scrolled { padding-top:2px; padding-bottom:2px; box-shadow:0 4px 20px rgba(0,0,0,0.25); }
      `}</style>

      <header className={`fixed top-0 left-0 right-0 w-full z-50 header-gradient border-b border-white/10 transition-all duration-300 ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container mx-auto px-3 lg:px-6 py-1.5 flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center flex-shrink-0 z-50" onClick={() => handleMainNavClick('home')}>
            {!imgError ? (
              <Image src="/logo/logo.png" alt="VedicUrja" width={140} height={35} className="h-6 sm:h-7 lg:h-8 w-auto object-contain" onError={() => setImgError(true)} priority />
            ) : (
              <span className="font-serif text-lg text-white font-bold tracking-wide">VedicUrja<span className="text-yellow-400">.</span></span>
            )}
          </Link>

          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 ml-2">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => handleMainNavClick(item.key)}
                className={`pearl-btn ${item.key === 'collaborate' ? 'collab-btn' : ''} ${item.key === 'testimonials' ? 'testim-btn' : ''}`}
              >
                <div className="wrap"><p>{t(`header.${item.key}`) || item.key}</p></div>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 z-50 flex-shrink-0">
            <LanguageSwitcher />
            <Link href="/contact" className="hidden sm:inline-flex consult-btn">
              Consult Vastuvid ji
            </Link>
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden w-8 h-8 rounded-md flex items-center justify-center text-white border border-white/20 bg-white/5 hover:bg-white/10 transition">
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
              <button onClick={() => setMobileMenuOpen(false)} className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-white/10"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg></button>
            </div>
            <nav className="flex flex-col gap-3 mb-6">
              {menuItems.map((item) => (
                <Link key={item.key} href={item.href} onClick={() => handleMainNavClick(item.key)} className="pearl-btn w-full">
                  <div className="wrap !text-center"><p className="!justify-center text-[15px]">{t(`header.${item.key}`) || item.key}</p></div>
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-white/20 flex flex-col gap-3">
              <Link href="/collaborate" onClick={() => handleMainNavClick('collaborate')} className="pearl-btn w-full collab-btn">
                <div className="wrap !text-center !py-3"><p className="!justify-center text-lg">Collaborate</p></div>
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="pearl-btn w-full">
                <div className="wrap !text-center !py-3"><p className="!justify-center text-lg uppercase">Consult Vastuvid ji</p></div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
