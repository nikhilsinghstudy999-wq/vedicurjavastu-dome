'use client';
'use client';
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
  title: "India's Most‑Viewed Vastu Authority",
  subtitle: '100M+ Views. 2 Lakh+ Clients. 50+ Countries.',
  description: 'Vastuvid KK Nagaich — the only Vastu Guru who is a 4th‑generation lineage holder, Tantra Sadhak, MBA, and former CEO. His personal rituals and deep business acumen have transformed thousands of lives worldwide.',
  button_text: 'Consult the Master',
  button_link: '/contact',
  secondary_button_text: 'Explore Free Tools',
  secondary_button_link: '/free-tools',
  is_published: true,
};

export function CosmicHero() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200">
      <div className="absolute inset-0 bg-gradient-to-br from-nidra-indigo via-sacred-saffron/10 to-kumkuma-red/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-nidra-indigo via-sacred-saffron/10 to-kumkuma-red/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-nidra-indigo via-sacred-saffron/10 to-kumkuma-red/20" />
        <div className="text-purple-800 text-center">Loading...</div>
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
      {/* Pure CSS gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F3FF] via-[#E9D8FF] to-[#D4C1EC]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(160,120,200,0.12),transparent_60%)]" />

      <motion.div style={isMounted ? { y } : undefined} className="container mx-auto px-4 sm:px-6 relative z-10 mt-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <p className="font-serif text-2xl sm:text-3xl text-purple-800/80 mb-3 tracking-wide">
              प्राचीन ज्ञान · शाश्वत सद्भाव
            </p>
            <p className="text-base sm:text-lg text-purple-700/70 mb-4 italic">
              Ancient Wisdom · Eternal Harmony
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-nidra-indigo mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">
                {heroData.title || fallbackHero.title}
              </span>
              <br />
              <span className="text-prakash-gold text-2xl sm:text-3xl md:text-4xl mt-2 block">
                {heroData.subtitle || fallbackHero.subtitle}
              </span>
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-nidra-indigo/80 max-w-xl mx-auto lg:mx-0 mb-8">
              Vastuvid K.K. Nagaich – 4th generation Vastu Guru, Tantra Sadhak, MBA, former CEO. Rooted in the Guru‑Shishya Parampara, he personally performs every ritual and has transformed over 2 Lakh lives across 50+ countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <LuxuryHeroButton href={primaryLink} variant="primary">{primaryText}</LuxuryHeroButton>
              {secondaryText && secondaryLink && (
                <LuxuryHeroButton href={secondaryLink} variant="secondary">{secondaryText}</LuxuryHeroButton>
              )}
            </div>
          </div>
          <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 relative mx-auto lg:mx-0">
            <CommunityCounter3D />
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto">
          <span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" />
        </span>
      </div>
    </motion.section>
  );
}
export default CosmicHero;
