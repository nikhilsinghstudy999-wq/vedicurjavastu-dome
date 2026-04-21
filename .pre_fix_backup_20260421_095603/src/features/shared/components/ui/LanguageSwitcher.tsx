'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'english', name: 'English', flag: '🇬🇧' },
  { code: 'hindi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'spanish', name: 'Español', flag: '🇪🇸' },
  { code: 'french', name: 'Français', flag: '🇫🇷' },
  { code: 'german', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'chinese_simplified', name: '中文', flag: '🇨🇳' },
  { code: 'japanese', name: '日本語', flag: '🇯🇵' },
  { code: 'arabic', name: 'العربية', flag: '🇸🇦' },
  { code: 'russian', name: 'Русский', flag: '🇷🇺' },
  { code: 'portuguese', name: 'Português', flag: '🇵🇹' },
  { code: 'italian', name: 'Italiano', flag: '🇮🇹' },
  { code: 'korean', name: '한국어', flag: '🇰🇷' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('english');
  const [mounted, setMounted] = useState(false);
  const [isTranslatorReady, setIsTranslatorReady] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  // Check if translate.js is loaded
  useEffect(() => {
    setMounted(true);
    
    // Get saved language preference
    const savedLang = localStorage.getItem('vedicurja_language');
    if (savedLang) setCurrentLang(savedLang);

    // Wait for translate.js to be ready
    const checkTranslator = () => {
      if (typeof window !== 'undefined' && (window as any).translate) {
        setIsTranslatorReady(true);
        // Set initial language
        try {
          (window as any).translate.changeLanguage(currentLang);
        } catch (e) {
          console.warn('Could not set initial language:', e);
        }
      } else {
        setTimeout(checkTranslator, 200);
      }
    };
    checkTranslator();
  }, [currentLang]);

  const handleLanguageChange = useCallback(async (langCode: string) => {
    if (isChanging) return;
    setIsChanging(true);
    
    setCurrentLang(langCode);
    setIsOpen(false);
    localStorage.setItem('vedicurja_language', langCode);

    if (typeof window !== 'undefined' && (window as any).translate) {
      try {
        (window as any).translate.changeLanguage(langCode);
      } catch (error) {
        console.warn('Translation failed, will reload page to apply language.');
        // Fallback: reload page with language preference
        window.location.reload();
      }
    } else {
      // Translator not ready, store preference and reload
      window.location.reload();
    }
    
    setTimeout(() => setIsChanging(false), 300);
  }, [isChanging]);

  if (!mounted) return null;

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isChanging}
        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-prakash-gold/30 text-nidra-indigo hover:bg-prakash-gold/10 transition ${isChanging ? 'opacity-50 cursor-wait' : ''}`}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium">{currentLanguage.name}</span>
        <span className="text-xs">{isChanging ? '...' : '▼'}</span>
      </button>
      <AnimatePresence>
        {isOpen && !isChanging && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-prakash-gold/30 overflow-hidden min-w-[200px] max-h-80 overflow-y-auto"
          >
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-prakash-gold/10 transition ${
                  currentLang === lang.code ? 'bg-prakash-gold/20' : ''
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {!isTranslatorReady && mounted && (
        <div className="absolute top-full right-0 mt-2 text-xs text-nidra-indigo/60 bg-white/80 px-3 py-1 rounded-full">
          Loading translator...
        </div>
      )}
    </div>
  );
}
