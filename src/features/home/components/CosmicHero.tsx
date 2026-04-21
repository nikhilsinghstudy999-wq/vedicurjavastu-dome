'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LuxuryHeroButton from '@/features/shared/components/ui/LuxuryHeroButton';
import { CommunityCounter3D } from './CommunityCounter3D';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';

interface HeroSection {
  id: string;
  section_key: string;
  title: string;
  subtitle: string;
  description: string;
  button_text: string;
  button_link: string;
  secondary_button_text?: string | null;
  secondary_button_link?: string | null;
  is_published: boolean;
}

const fallbackHero: HeroSection = {
  id: 'fallback',
  section_key: 'hero',
  title: 'Ancient Wisdom.',
  subtitle: 'Modern Precision.',
  description: 'Guided by Vastuvid KK Nagaich, rooted in the sacred geometry of Uttar Pradesh.',
  button_text: 'Consult Vastuvid',
  button_link: '/contact',
  secondary_button_text: 'Explore Free Tools',
  secondary_button_link: '/free-tools',
  is_published: true,
};

export function CosmicHero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Preload video
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start start', 'end start'] } : undefined
  );
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);

  const { items, loading } = useRealtimeContent<HeroSection>('home_sections', 'order_index');
  const heroData = items.find(item => item.section_key === 'hero' && item.is_published) || fallbackHero;

  if (loading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-nidra-indigo via-sacred-saffron/5 to-kumkuma-red/10">
        <div className="text-white text-center">Loading...</div>
      </section>
    );
  }

  if (!heroData.is_published) return null;

  const primaryText = heroData.button_text || fallbackHero.button_text;
  const primaryLink = heroData.button_link || fallbackHero.button_link;
  const secondaryText = heroData.secondary_button_text;
  const secondaryLink = heroData.secondary_button_link;

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { opacity } : undefined}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background with Fallback Image */}
      <div className="absolute inset-0 w-full h-full">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src="/videos/home/lucknow.mp4" type="video/mp4" />
          </video>
        ) : (
          // Fallback drone image of Indian city
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/home/lucknow-fallback.jpg')" }}
          />
        )}
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-nidra-indigo/70 via-nidra-indigo/40 to-transparent" />
      </div>

      <motion.div style={isMounted ? { y } : undefined} className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-20">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
          <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">
            {heroData.title || fallbackHero.title}
          </span>
          <br />
          <span className="text-prakash-gold">{heroData.subtitle || fallbackHero.subtitle}</span>
        </h1>
        <p className="font-sans text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 px-4">
          {heroData.description || fallbackHero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <LuxuryHeroButton href={primaryLink} variant="primary">
            {primaryText}
          </LuxuryHeroButton>
          {secondaryText && secondaryLink && (
            <LuxuryHeroButton href={secondaryLink} variant="secondary">
              {secondaryText}
            </LuxuryHeroButton>
          )}
        </div>
        <CommunityCounter3D />
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto">
          <span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" />
        </span>
      </div>
    </motion.section>
  );
}
export default CosmicHero;
