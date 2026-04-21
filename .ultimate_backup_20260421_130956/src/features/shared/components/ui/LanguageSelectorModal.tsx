'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '@/features/shared/contexts/LanguageContext';

const languages: { code: Language; name: string; flag: string; nativeName: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳', nativeName: 'हिन्दी' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
  { code: 'fr', name: 'French', flag: '🇫🇷', nativeName: 'Français' },
];

export default function LanguageSelectorModal() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already selected a language
    const hasSelected = localStorage.getItem('language-selected');
    if (!hasSelected) {
      setIsOpen(true);
    }
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language-selected', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full border border-prakash-gold/30"
          >
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🌍</div>
              <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Choose Your Language</h2>
              <p className="text-nidra-indigo/60 text-sm mt-2">Select your preferred language to continue</p>
            </div>
            <div className="space-y-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-prakash-gold/20 hover:border-prakash-gold hover:bg-prakash-gold/5 transition-all group"
                >
                  <span className="text-3xl">{lang.flag}</span>
                  <div className="flex-1 text-left">
                    <span className="block font-medium text-nidra-indigo group-hover:text-prakash-gold transition-colors">
                      {lang.name}
                    </span>
                    <span className="text-sm text-nidra-indigo/50">{lang.nativeName}</span>
                  </div>
                  {language === lang.code && (
                    <span className="text-prakash-gold text-xl">✓</span>
                  )}
                </button>
              ))}
            </div>
            <p className="text-xs text-center text-nidra-indigo/40 mt-6">
              You can change your language anytime using the switcher in the header.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
