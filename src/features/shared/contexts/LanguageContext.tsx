'use client';
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

export type Language = 'en' | 'hi';

/* ── Header translations (English + Hindi) ── */
const headerDict: Record<string, Record<Language, string>> = {
  home:          { en: 'Home', hi: 'होम' },
  about:         { en: 'About', hi: 'हमारे बारे में' },
  services:      { en: 'Services', hi: 'सेवाएं' },
  freeAITools:   { en: 'Free AI Tools', hi: 'मुफ्त AI उपकरण' },
  bookings:      { en: 'Bookings', hi: 'बुकिंग' },
  blogs:         { en: 'Blogs', hi: 'ब्लॉग' },
  collaborate:   { en: 'Collaborate', hi: 'सहयोग करें' },
  testimonials:  { en: 'Testimonials', hi: 'प्रशंसापत्र' },
  consult:       { en: 'Consult Acharya', hi: 'आचार्य से परामर्श' },
};

/* ── Hero translations (used for dictionary‑based 3D text) ── */
const heroDict: Record<string, Record<Language, string>> = {
  'hero.title1': { en: 'Ancient Wisdom.', hi: 'प्राचीन ज्ञान।' },
  'hero.title2': { en: 'Modern Precision.', hi: 'आधुनिक परिशुद्धता।' },
  'hero.subtitle': { en: 'Guided by Vastuvid KK Nagaich.', hi: 'वास्तुविद केके नागाइच द्वारा निर्देशित।' },
  'hero.cta1': { en: 'Consult Vastuvid', hi: 'वास्तुविद से परामर्श' },
  'hero.cta2': { en: 'Explore Free Tools', hi: 'मुफ्त उपकरण देखें' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

let reloadLock = false;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved === 'hi') setLanguageState(saved);
    reloadLock = false;
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    const currentLang = localStorage.getItem('language') as Language;
    if (lang !== currentLang && !reloadLock) {
      reloadLock = true;
      localStorage.setItem('language', lang);
      document.cookie = `language=${lang};path=/;max-age=31536000`;
      window.location.reload();
      return;
    }
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.cookie = `language=${lang};path=/;max-age=31536000`;
  }, []);

  const t = useCallback((key: string): string => {
    // Check header keys (prefix "header.")
    if (key.startsWith('header.')) {
      const sub = key.substring(7); // remove "header."
      return (headerDict[sub]?.[language]) || (headerDict[sub]?.en) || sub;
    }
    // Check hero keys
    const tr = heroDict[key];
    if (tr?.[language]) return tr[language];
    if (tr?.en) return tr.en;
    return key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
