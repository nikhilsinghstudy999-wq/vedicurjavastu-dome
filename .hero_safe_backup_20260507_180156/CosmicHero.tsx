'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LuxuryHeroButton from '@/features/shared/components/ui/LuxuryHeroButton';
import Mandala3D from '@/features/shared/components/Mandala3D';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';

export function CosmicHero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
    if (videoRef.current) {
      videoRef.current.load();
      // Ensure smooth looping
      const vid = videoRef.current;
      const handleEnded = () => { vid.currentTime = 0; vid.play().catch(() => {}); };
      vid.addEventListener('ended', handleEnded);
      return () => vid.removeEventListener('ended', handleEnded);
    }
  }, []);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Static video background (no fallback image, webm only) ── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/home/lucknow.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-nidra-indigo/70 via-nidra-indigo/40 to-transparent" />
      </div>

      {/* ── Foreground Content ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16 sm:mt-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 lg:gap-12">
          {/* Left text block */}
          <div className="flex-1 max-w-2xl text-left lg:pr-8">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">
                {t('hero.title1')}
              </span>
              <br />
              <span className="text-prakash-gold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 block">
                {t('hero.title2')}
              </span>
            </h1>
            <p className="font-sans text-sm sm:text-base md:text-lg text-white/80 mt-4 sm:mt-6 max-w-xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <LuxuryHeroButton href="/bookings" variant="primary" className="text-sm sm:text-base px-6 py-3">
                {t('hero.cta1')}
              </LuxuryHeroButton>
              <LuxuryHeroButton href="/free-tools" variant="secondary" className="!text-white border-white hover:bg-white/10 text-sm sm:text-base px-6 py-3">
                {t('hero.cta2')}
              </LuxuryHeroButton>
            </div>
          </div>

          {/* Right mandala */}
          <div className="flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Mandala3D />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
        <span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto">
          <span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" />
        </span>
      </div>
    </motion.section>
  );
}
export default CosmicHero;
