'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './ui/LanguageSwitcher';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';
import { useNavigation } from '@/features/shared/contexts/NavigationContext';
import '@/styles/mobile-menu.css';

const servicesDropdown = [
  { name: 'Residential Vastu', href: '/services/residential' },
  { name: 'Commercial Vastu', href: '/services/commercial' },
  { name: 'Industrial Vastu', href: '/services/industrial' },
  { name: 'Land Selection', href: '/services/land' },
  { name: 'New Construction', href: '/services/new-construction' },
  { name: 'Kundali Analysis', href: '/services/kundali' },
  { name: 'Numerology & Namakaran', href: '/services/numerology-namakaran' },
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

function DrawerItem({ label, href, dropdown, onClose }: {
  label: string; href: string; dropdown?: { name: string; href: string }[]; onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const { startNavigation } = useNavigation();
  const handleClick = (e: React.MouseEvent) => {
    if (dropdown) { e.preventDefault(); setOpen(!open); return; }
    startNavigation(); onClose();
  };
  return (
    <div className="border-b border-white/8 last:border-0">
      <Link href={href} onClick={handleClick}
        className="flex items-center justify-between px-6 py-4 text-white hover:bg-white/8 transition-colors group">
        <span className="font-medium text-base tracking-wide">{label}</span>
        {dropdown && (
          <motion.svg animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}
            className="w-5 h-5 opacity-50 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
          </motion.svg>
        )}
      </Link>
      <AnimatePresence>
        {open && dropdown && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }} className="overflow-hidden bg-white/4">
            {dropdown.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => { startNavigation(); onClose(); }}
                className="block px-10 py-3 text-sm text-white/65 hover:text-prakash-gold hover:bg-white/5 transition-colors">
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { startNavigation } = useNavigation();

  /* ───── SCROLL LOCK (body + html + Lenis) ───── */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      if (window.__lenis) window.__lenis.stop();
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (window.__lenis) window.__lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (window.__lenis) window.__lenis.start();
    };
  }, [menuOpen]);

  const handleNav = (href?: string) => { startNavigation(); setMenuOpen(false); };

  return (
    <>
      <style>{`
      <header className="header-bar">
        <div className="flex items-center flex-shrink-0"><LanguageSwitcher /></div>
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center" onClick={() => handleNav()}>
          {!imgError ? <Image src="/logo/logo.png" alt="VedicUrja" width={160} height={40} className="h-8 sm:h-10 w-auto object-contain" onError={() => setImgError(true)} priority />
          : <span className="font-serif text-xl sm:text-2xl text-white font-bold tracking-wide drop-shadow-lg">VedicUrja<span className="text-yellow-400">.</span></span>}
        </Link>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link href="/contact" className="cta-btn hidden sm:inline-flex">Consult Vastuvid ji</Link>
          <button onClick={() => setMenuOpen(true)} className="menu-btn" aria-label="Open menu"><span /></button>
        </div>
      </header>
      <div className="header-spacer" />

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="side-overlay" onClick={() => setMenuOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.4, ease: [0.23,1,0.32,1] }}
              className="side-drawer">
              <div className="side-drawer-header">
                {!imgError ? <Image src="/logo/logo.png" alt="VedicUrja" width={120} height={30} className="h-6 w-auto object-contain" onError={() => setImgError(true)} />
                : <span className="font-serif text-lg text-white font-bold">VedicUrja<span className="text-yellow-400">.</span></span>}
                <button onClick={() => setMenuOpen(false)} className="close-btn">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <nav className="flex-1 py-2">
                <DrawerItem label={t('header.home')||'Home'} href="/" onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('header.about')||'About'} href="/about" onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('header.services')||'Services'} href="/services" dropdown={servicesDropdown} onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('header.freeAITools')||'Free AI Tools'} href="/free-tools" dropdown={freeToolsDropdown} onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('header.bookings')||'Bookings'} href="/bookings" onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('header.blogs')||'Blogs'} href="/insights" dropdown={insightsDropdown} onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('header.collaborate')||'Collaborate'} href="/collaborate" onClose={() => setMenuOpen(false)} />
                <DrawerItem label={t('header.testimonials')||'Testimonials'} href="/client-stories" onClose={() => setMenuOpen(false)} />

                <div className="drawer-standalone">
                  <Link href="/services/remedies" onClick={() => handleNav()}>
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    Remedies
                    <span className="badge bg-emerald-500/20 text-emerald-300 ml-auto">5 Therapies</span>
                  </Link>
                </div>
                <div className="drawer-standalone">
                  <Link href="/services/rituals" onClick={() => handleNav()}>
                    <svg className="w-5 h-5 text-sacred-saffron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/></svg>
                    Rituals
                    <span className="badge bg-sacred-saffron/20 text-sacred-saffron ml-auto">Puja & Havan</span>
                  </Link>
                </div>
              </nav>
              <div className="drawer-footer">
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="block w-full text-center py-4 rounded-full text-base uppercase tracking-wide font-bold text-white cta-btn">Consult Vastuvid ji</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
