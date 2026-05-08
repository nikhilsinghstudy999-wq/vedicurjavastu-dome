'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './ui/LanguageSwitcher';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';
import { useNavigation } from '@/features/shared/contexts/NavigationContext';

/* ═══════════════════════════════════════════════════════════════════════════
   DROPDOWN DATA
   ═══════════════════════════════════════════════════════════════════════════ */
const servicesDropdown = [
  { name: 'Residential Vastu', href: '/services/residential' },
  { name: 'Commercial Vastu', href: '/services/commercial' },
  { name: 'Industrial Vastu', href: '/services/industrial' },
  { name: 'Land Selection', href: '/services/land' },
  { name: 'Spiritual Spaces', href: '/services/spiritual' },
  { name: 'New Construction', href: '/services/new-construction' },
  { name: 'Geopathic Stress', href: '/services/geopathic' },
  { name: 'Kundali Analysis', href: '/services/kundali' },
  { name: 'Pyramidology', href: '/services/pyramidology' },
  { name: 'Crystal & Color Therapy', href: '/services/crystal-color' },
  { name: 'Mercury / Parad Therapy', href: '/services/mercury-parad' },
  { name: 'Numerology & Namakaran', href: '/services/numerology-namakaran' },
  { name: 'Mobile Numerology', href: '/services/mobile-numerology' },
  { name: 'Mirrorology', href: '/services/mirrorology' },
  { name: 'Yantra & Mantra Therapy', href: '/services/yantra-mantra' },
  { name: 'Virtual Consult', href: '/bookings' },
];
const freeToolsDropdown = [
  { name: 'AI Kundali', href: '/free-tools/kundali' },
  { name: 'Daily Horoscope', href: '/free-tools/daily-horoscope' },
  { name: 'Name Suggestion', href: '/free-tools/name-suggestion' },
];
const insightsDropdown = [
  { name: 'All Insights', href: '/insights' },
  { name: 'Science of Vastu', href: '/insights/science-of-vastu' },
  { name: 'Numerology Beginners', href: '/insights/numerology-beginners' },
  { name: 'Remedies Without Demolition', href: '/insights/remedies-without-demolition' },
  { name: 'Main Entrance Vastu', href: '/insights/vastu-main-entrance-door' },
  { name: 'Kitchen Vastu', href: '/insights/kitchen-vastu-health-wealth' },
  { name: 'Bedroom Vastu', href: '/insights/bedroom-vastu-marital-harmony' },
  { name: 'Commercial Vastu Office', href: '/insights/commercial-vastu-office-layout' },
  { name: 'Geopathic Stress', href: '/insights/geopathic-stress-hidden-enemy' },
  { name: 'Nakshatra Names', href: '/insights/nakshatra-name-suggestions-guide' },
  { name: 'Panch Mahabhutas', href: '/insights/panch-mahabhutas-five-elements' },
  { name: 'Spiritual Vastu', href: '/insights/spiritual-vastu-pooja-room-design' },
];

/* ═══════════════════════════════════════════════════════════════════════════
   NAV ITEM – mobile-friendly, white dropdown text
   ═══════════════════════════════════════════════════════════════════════════ */
function NavItem({ label, href, dropdown, isMobile, onNavigate }: {
  label: string; href: string; dropdown?: { name: string; href: string }[]; isMobile: boolean; onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleClick = (e: React.MouseEvent) => {
    if (dropdown && !isMobile) return;
    if (dropdown && isMobile) { e.preventDefault(); setOpen(!open); return; }
    onNavigate();
  };
  const handleMouseEnter = () => { if (isMobile) return; if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpen(true); };
  const handleMouseLeave = () => { if (isMobile) return; timeoutRef.current = setTimeout(() => setOpen(false), 200); };
  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href={href} onClick={handleClick} className="nav-link inline-flex no-underline group">
        <span>{label}{dropdown && <svg className="ml-1 w-3 h-3 inline-block opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/></svg>}</span>
      </Link>
      <AnimatePresence>
        {open && dropdown && (
          <motion.div initial={{ opacity: 0, y: -4, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -4, scale: 0.98 }} transition={{ duration: 0.15, ease: [0.23,1,0.32,1] }}
            className={isMobile 
              ? 'mt-2 space-y-1 bg-black/20 backdrop-blur-xl rounded-2xl p-3 border border-white/15'
              : 'absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white/98 backdrop-blur-2xl rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-prakash-gold/20 overflow-hidden z-50'}>
            <div className="max-h-72 overflow-y-auto py-2">
              {dropdown.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => { onNavigate(); setOpen(false); }} 
                  className={isMobile
                    ? 'block px-5 py-3 text-base text-white hover:bg-white/15 rounded-xl transition-colors font-medium'
                    : 'block px-5 py-2.5 text-sm text-nidra-indigo hover:bg-prakash-gold/10 hover:text-sacred-saffron transition-colors font-medium whitespace-nowrap'}>
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN HEADER
   ═══════════════════════════════════════════════════════════════════════════ */
export default function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { startNavigation } = useNavigation();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const desktopMenuItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'services', href: '/services', dropdown: servicesDropdown },
    { key: 'freeAITools', href: '/free-tools', dropdown: freeToolsDropdown },
    { key: 'bookings', href: '/bookings' },
    { key: 'blogs', href: '/insights', dropdown: insightsDropdown },
    { key: 'collaborate', href: '/collaborate' },
    { key: 'testimonials', href: '/client-stories' },
  ];

  const handleNavigate = () => { startNavigation(); setMobileMenuOpen(false); };

  return (
    <>
      <style>{`
        @keyframes headerGradient { 0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%} }
        @keyframes lineLoop { 0%{background-position:0% 50%}100%{background-position:300% 50%} }

        .header-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          height: 60px;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #4A0E4E, #C10000, #06B6D4, #FF8C00, #4A0E4E);
          background-size: 400% 400%;
          animation: headerGradient 14s ease infinite;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .header-bar::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #C10000, #06B6D4, #7C3AED, #FF8C00, #C10000);
          background-size: 300% 100%;
          animation: lineLoop 6s linear infinite;
        }

        .header-spacer {
          height: 60px;
        }

        .nav-link {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          padding: 8px 14px;
          border-radius: 50px;
          letter-spacing: 0.01em;
          transition: all 0.2s ease;
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        }
        .nav-link:hover {
          background: rgba(255,255,255,0.15);
          color: #FFD700;
        }

        .cta-btn {
          font-size: 13px;
          font-weight: 700;
          padding: 9px 20px;
          border-radius: 50px;
          background: linear-gradient(135deg, #C10000, #FF8C00);
          color: #fff;
          white-space: nowrap;
          letter-spacing: 0.02em;
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 4px 16px rgba(193,0,0,0.45);
          transition: all 0.25s ease;
          text-decoration: none;
          display: inline-flex;
        }
        .cta-btn:hover {
          box-shadow: 0 6px 24px rgba(193,0,0,0.65);
          transform: translateY(-1px);
        }

        /* ── MOBILE OPTIMIZATIONS ── */
        @media (max-width: 640px) {
          .header-bar { height: 56px; }
          .header-spacer { height: 56px; }
          .nav-link { 
            font-size: 14px;
            padding: 10px 16px;
          }
          .cta-btn { 
            font-size: 13px;
            padding: 10px 20px;
          }
        }

        @media (min-width: 1024px) {
          .nav-link { font-size: 14px; padding: 9px 16px; }
          .cta-btn { font-size: 14px; padding: 10px 24px; }
        }
      `}</style>

      {/* HEADER BAR */}
      <header className="header-bar">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0 mr-3" onClick={handleNavigate}>
            {!imgError ? (
              <Image src="/logo/logo.png" alt="VedicUrja" width={120} height={30} className="h-6 sm:h-7 w-auto object-contain" onError={() => setImgError(true)} priority />
            ) : (
              <span className="font-serif text-base sm:text-lg text-white font-bold tracking-wide drop-shadow-lg">VedicUrja<span className="text-yellow-400">.</span></span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {desktopMenuItems.map((item) => (
              <NavItem key={item.key} label={t(`header.${item.key}`) || item.key} href={item.href} dropdown={item.dropdown} isMobile={false} onNavigate={handleNavigate} />
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-3">
            <LanguageSwitcher />
            <Link href="/contact" className="hidden sm:inline-flex cta-btn">Consult Vastuvid ji</Link>
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-white border border-white/20 bg-white/10 hover:bg-white/20 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* SPACER */}
      <div className="header-spacer" />

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] overflow-y-auto"
            style={{
              background: 'linear-gradient(135deg, #2D0A3C, #6B0F0F, #064E60, #8B4500, #2D0A3C)',
              backgroundSize: '400% 400%',
              animation: 'headerGradient 10s ease infinite',
            }}>
            <div className="min-h-[100dvh] w-full flex flex-col p-5 pb-10">
              <div className="flex justify-between items-center mb-8">
                {!imgError ? <Image src="/logo/logo.png" alt="VedicUrja" width={110} height={28} className="h-6 w-auto object-contain" onError={() => setImgError(true)} /> : <span className="font-serif text-xl text-white font-bold">VedicUrja.</span>}
                <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-white/15 hover:bg-white/25 transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <nav className="flex flex-col gap-2.5 mb-6">
                {desktopMenuItems.map((item) => (
                  <NavItem key={item.key} label={t(`header.${item.key}`) || item.key} href={item.href} dropdown={item.dropdown} isMobile={true} onNavigate={handleNavigate} />
                ))}
              </nav>
              <div className="mt-auto pt-6 border-t border-white/20">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center py-4 rounded-full text-lg uppercase tracking-wide font-bold text-white cta-btn">Consult Vastuvid ji</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
