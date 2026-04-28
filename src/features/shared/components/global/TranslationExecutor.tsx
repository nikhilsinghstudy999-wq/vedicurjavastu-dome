'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';
import { translatePage } from '@/lib/translationManager';

export default function TranslationExecutor() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const prevPath = useRef(pathname);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    translatePage();
  }, []);

  useEffect(() => {
    if (!mounted.current) return;
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;
      setTimeout(() => translatePage(), 200);
    }
  }, [pathname]);

  return null;
}
