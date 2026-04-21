'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'common.home': 'Home',
    'common.freeAITools': 'Free AI Tools',
    'common.services': 'Services',
    'common.bookings': 'Virtual Consult',
    'common.blogs': 'Blogs',
    'common.testimonials': 'Testimonials',
    'common.about': 'About',
    'common.consult': 'Consult Acharya',
  },
  hi: {
    'common.home': 'होम',
    'common.freeAITools': 'मुफ्त AI उपकरण',
    'common.services': 'सेवाएं',
    'common.bookings': 'वर्चुअल परामर्श',
    'common.blogs': 'ब्लॉग',
    'common.testimonials': 'प्रशंसापत्र',
    'common.about': 'हमारे बारे में',
    'common.consult': 'आचार्य से परामर्श',
  },
  es: {
    'common.home': 'Inicio',
    'common.freeAITools': 'Herramientas IA',
    'common.services': 'Servicios',
    'common.bookings': 'Consulta Virtual',
    'common.blogs': 'Blogs',
    'common.testimonials': 'Testimonios',
    'common.about': 'Acerca de',
    'common.consult': 'Consultar',
  },
  fr: {
    'common.home': 'Accueil',
    'common.freeAITools': 'Outils IA',
    'common.services': 'Services',
    'common.bookings': 'Consultation Virtuelle',
    'common.blogs': 'Blogs',
    'common.testimonials': 'Témoignages',
    'common.about': 'À propos',
    'common.consult': 'Consulter',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load from cookie/localStorage
    const saved = localStorage.getItem('language') as Language;
    if (saved && ['en', 'hi', 'es', 'fr'].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Also set cookie for server-side (if needed)
    document.cookie = `language=${lang};path=/;max-age=31536000`;
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
