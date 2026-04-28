'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import LuxuryHeroButton from '@/features/shared/components/ui/LuxuryHeroButton';
import Mandala3D from '@/features/shared/components/Mandala3D';
import { useLanguage } from '@/features/shared/contexts/LanguageContext';

export function CosmicHero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useLanguage();

  // ── Mouse‑based parallax ──
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });  // lower stiffness = smoother
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(springY, [0, 1], [4, -4]);
  const rotateY = useTransform(springX, [0, 1], [-4, 4]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Poster / Fallback image (shown until video loads) ── */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home/lucknow-fallback.jpg')",
          opacity: videoLoaded ? 0 : 1,
          transition: 'opacity 0.6s ease',
        }}
      />

      {/* ── Parallax video layer with will‑change for smooth GPU rendering ── */}
      <motion.div
        className="absolute"
        style={{
          top: '-6%',
          left: '-6%',
          width: '112%',
          height: '112%',
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/home/lucknow-fallback.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
          >
            <source src="/videos/home/lucknow.mp4" type="video/mp4" />
            <source src="/videos/home/lucknow.webm" type="video/webm" />
          </video>
        ) : (
          <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/home/lucknow-fallback.jpg')" }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-nidra-indigo/70 via-nidra-indigo/40 to-transparent" />
      </motion.div>

      {/* ── Foreground Content ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16 sm:mt-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 lg:gap-12">
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
          <div className="flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Mandala3D />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
        <span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto">
          <span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" />
        </span>
      </div>
    </motion.section>
  );
}
export default CosmicHero;
