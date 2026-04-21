#!/bin/bash
# =============================================================================
# VEDICURJA – DEPENDENCY‑FREE i18n FIX (NO MORE ERRORS)
# =============================================================================
set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}     FIXING i18n – SIMPLE CONTEXT, NO EXTERNAL LIBS${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# -----------------------------------------------------------------------------
# 1. Remove all react-i18next packages and related files
# -----------------------------------------------------------------------------
echo -e "${YELLOW}🧹 Removing react-i18next and cleaning up...${NC}"
npm uninstall i18next react-i18next i18next-browser-languagedetector i18next-http-backend --save 2>/dev/null || true
rm -rf src/lib/i18n 2>/dev/null || true
rm -f src/features/shared/components/global/TranslateLoader.tsx 2>/dev/null || true
rm -f src/features/shared/components/ui/LanguageSelectorModal.tsx 2>/dev/null || true

# -----------------------------------------------------------------------------
# 2. Create simple, self‑contained LanguageContext
# -----------------------------------------------------------------------------
echo -e "${YELLOW}📝 Creating simple LanguageContext...${NC}"
mkdir -p src/features/shared/contexts

cat > src/features/shared/contexts/LanguageContext.tsx << 'EOF'
'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'es' | 'fr';

// Import translation files statically
import en from '@/locales/en/common.json';
import hi from '@/locales/hi/common.json';
import es from '@/locales/es/common.json';
import fr from '@/locales/fr/common.json';

const translations: Record<Language, any> = { en, hi, es, fr };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && ['en', 'hi', 'es', 'fr'].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.cookie = `language=${lang};path=/;max-age=31536000`;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
EOF

# -----------------------------------------------------------------------------
# 3. Move translation JSON files to a location we can import from
# -----------------------------------------------------------------------------
echo -e "${YELLOW}📁 Setting up translation files...${NC}"
mkdir -p src/locales/en src/locales/hi src/locales/es src/locales/fr

# English
cat > src/locales/en/common.json << 'EOF'
{
  "header": {
    "home": "Home",
    "freeAITools": "Free AI Tools",
    "services": "Services",
    "bookings": "Virtual Consult",
    "blogs": "Blogs",
    "testimonials": "Testimonials",
    "about": "About",
    "consult": "Consult Acharya"
  },
  "hero": {
    "title1": "Ancient Wisdom.",
    "title2": "Modern Precision.",
    "subtitle": "Guided by Vastuvid KK Nagaich.",
    "cta1": "Consult Vastuvid",
    "cta2": "Explore Free Tools"
  },
  "footer": {
    "about": "VedicUrja – Ancient Wisdom. Modern Precision.",
    "copyright": "© 2026 VedicUrja. All rights reserved."
  },
  "common": {
    "loading": "Loading...",
    "submit": "Submit"
  }
}
EOF

# Hindi
cat > src/locales/hi/common.json << 'EOF'
{
  "header": {
    "home": "होम",
    "freeAITools": "मुफ्त AI उपकरण",
    "services": "सेवाएं",
    "bookings": "वर्चुअल परामर्श",
    "blogs": "ब्लॉग",
    "testimonials": "प्रशंसापत्र",
    "about": "हमारे बारे में",
    "consult": "आचार्य से परामर्श"
  },
  "hero": {
    "title1": "प्राचीन ज्ञान।",
    "title2": "आधुनिक परिशुद्धता।",
    "subtitle": "वास्तुविद केके नागाइच द्वारा निर्देशित।",
    "cta1": "वास्तुविद से परामर्श",
    "cta2": "मुफ्त उपकरण देखें"
  },
  "footer": {
    "about": "वैदिकऊर्जा – प्राचीन ज्ञान। आधुनिक परिशुद्धता।",
    "copyright": "© 2026 वैदिकऊर्जा। सर्वाधिकार सुरक्षित।"
  },
  "common": {
    "loading": "लोड हो रहा है...",
    "submit": "जमा करें"
  }
}
EOF

# Spanish
cat > src/locales/es/common.json << 'EOF'
{
  "header": {
    "home": "Inicio",
    "freeAITools": "Herramientas IA",
    "services": "Servicios",
    "bookings": "Consulta Virtual",
    "blogs": "Blogs",
    "testimonials": "Testimonios",
    "about": "Acerca de",
    "consult": "Consultar"
  },
  "hero": {
    "title1": "Sabiduría Ancestral.",
    "title2": "Precisión Moderna.",
    "subtitle": "Guiado por Vastuvid KK Nagaich.",
    "cta1": "Consultar",
    "cta2": "Herramientas Gratis"
  },
  "footer": {
    "about": "VedicUrja – Sabiduría Ancestral. Precisión Moderna.",
    "copyright": "© 2026 VedicUrja. Todos los derechos reservados."
  },
  "common": {
    "loading": "Cargando...",
    "submit": "Enviar"
  }
}
EOF

# French
cat > src/locales/fr/common.json << 'EOF'
{
  "header": {
    "home": "Accueil",
    "freeAITools": "Outils IA",
    "services": "Services",
    "bookings": "Consultation Virtuelle",
    "blogs": "Blogs",
    "testimonials": "Témoignages",
    "about": "À propos",
    "consult": "Consulter"
  },
  "hero": {
    "title1": "Sagesse Ancienne.",
    "title2": "Précision Moderne.",
    "subtitle": "Guidé par Vastuvid KK Nagaich.",
    "cta1": "Consulter",
    "cta2": "Outils Gratuits"
  },
  "footer": {
    "about": "VedicUrja – Sagesse Ancienne. Précision Moderne.",
    "copyright": "© 2026 VedicUrja. Tous droits réservés."
  },
  "common": {
    "loading": "Chargement...",
    "submit": "Envoyer"
  }
}
EOF

# -----------------------------------------------------------------------------
# 4. Update LanguageSwitcher to use our simple context
# -----------------------------------------------------------------------------
echo -e "${YELLOW}🔄 Updating LanguageSwitcher...${NC}"
cat > src/features/shared/components/ui/LanguageSwitcher.tsx << 'EOF'
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '@/features/shared/contexts/LanguageContext';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-prakash-gold/30 text-nidra-indigo hover:bg-prakash-gold/10 transition"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium hidden sm:inline">{currentLanguage.name}</span>
        <span className="text-xs">▼</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-prakash-gold/30 overflow-hidden min-w-[160px]"
          >
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-prakash-gold/10 transition ${
                  language === lang.code ? 'bg-prakash-gold/20' : ''
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
EOF

# -----------------------------------------------------------------------------
# 5. Update Header to use useLanguage hook
# -----------------------------------------------------------------------------
echo -e "${YELLOW}🔄 Updating Header...${NC}"
cat > src/features/shared/components/Header.tsx << 'EOF'
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './ui/LanguageSwitcher';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';

export default function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
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
                <div className="wrap"><p><span>✦</span><span>✧</span>{t(`header.${item.key}`)}</p></div>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2.5 sm:gap-3 z-50">
            <LanguageSwitcher />
            <div className="hidden sm:block">
              <Link href="/contact" className="pearl-btn">
                <div className="wrap"><p><span>✦</span><span>✧</span>{t('header.consult')}</p></div>
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
                  <div className="wrap !text-center"><p className="!justify-center text-[15px]"><span>✦</span><span>✧</span>{t(`header.${item.key}`)}</p></div>
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-white/20">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="pearl-btn w-full">
                <div className="wrap !text-center !py-3"><p className="!justify-center text-lg uppercase"><span>✦</span><span>✧</span>{t('header.consult')}</p></div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
EOF

# -----------------------------------------------------------------------------
# 6. Update root layout to include LanguageProvider (already there, but ensure clean)
# -----------------------------------------------------------------------------
echo -e "${YELLOW}🧹 Cleaning root layout...${NC}"
cat > src/app/layout.tsx << 'EOF'
import Footer from '@/features/shared/components/Footer';
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/features/shared/contexts/LanguageContext";
import LenisSmoothScroll from "@/features/shared/components/global/LenisSmoothScroll";
import { GlobalSoundProvider } from "@/features/shared/components/global/GlobalSoundProvider";
import { fontSerif, fontSans, fontMono } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "VedicUrja | Ancient Wisdom, Modern Precision",
  description: "Global Vastu Consultancy rooted in authentic Vedic tradition.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSerif.variable} ${fontSans.variable} ${fontMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-vastu-parchment text-nidra-indigo antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <GlobalSoundProvider>
              <LenisSmoothScroll>
                {children}
              </LenisSmoothScroll>
            </GlobalSoundProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
EOF

# -----------------------------------------------------------------------------
# 7. Remove any remaining references to react-i18next in other files
# -----------------------------------------------------------------------------
echo -e "${YELLOW}🧽 Scrubbing react-i18next imports...${NC}"
find src -type f \( -name "*.ts" -o -name "*.tsx" \) -exec sed -i "/react-i18next/d" {} \; 2>/dev/null || true
find src -type f \( -name "*.ts" -o -name "*.tsx" \) -exec sed -i "/useTranslation/d" {} \; 2>/dev/null || true

# -----------------------------------------------------------------------------
# 8. Rebuild
# -----------------------------------------------------------------------------
echo -e "${YELLOW}🔨 Rebuilding...${NC}"
rm -rf .next out
npm run build

echo -e "${GREEN}✅ Build successful! Site is production‑ready with dependency‑free i18n.${NC}"
echo "Deploy the 'out/' folder to Hostinger."