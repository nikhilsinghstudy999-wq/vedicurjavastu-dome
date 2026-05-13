'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';

interface HomeSection {
  id: string;
  section_key: string;
  title: string;
  subtitle: string;
  description: string;
  button_text: string;
  button_link: string;
  is_published: boolean;
}

const fallbackData: HomeSection = {
  id: 'luxury_vow_fallback',
  section_key: 'acharya_vow',
  title: 'Guided by an Unbroken Lineage, Delivering Unmatched Results',
  subtitle: 'The Sacred Vow of a 4th Generation Vastu Guru',
  description: 'Vastuvid KK Nagaich is the only Vastu authority in India who is a trained Tantra Sadhak, MBA, former CEO, and lineage‑certified across four generations. For over two decades, he has personally performed every ritual and guided 2 Lakh+ clients across 50+ countries. His Instagram reels have crossed 100 million views, making him the most‑watched Vastu expert globally.',
  button_text: 'Discover Our Lineage',
  button_link: '/about',
  is_published: true,
};

export function AcharyaVow() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined
  );
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const { items, loading } = useRealtimeContent<HomeSection>('home_sections', 'order_index');
  const data = items.find(item => item.section_key === 'acharya_vow') || fallbackData;

  if (loading) return <div className="py-24 text-center" aria-label="Loading Acharya’s Vow"><div className="w-8 h-8 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin mx-auto" /></div>;
  if (!data.is_published) return null;

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { opacity, y } : undefined}
      className="py-20 sm:py-28 md:py-36 overflow-hidden bg-gradient-to-br from-[#FDFBF7] via-[#FFF9F0] to-[#F4EFE6] relative"
      aria-labelledby="acharya-vow-title"
    >
      {/* Subtle mandala outlines */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-prakash-gold/10 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-sacred-saffron/10 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Image + Stat Badges (stacked) */}
          <motion.div
            style={isMounted ? { scale } : undefined}
            className="relative order-2 md:order-1 flex flex-col items-center"
          >
            {/* Portrait card – original clear style */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-prakash-gold/30">
              <div className="relative h-[400px] sm:h-[500px] md:h-[550px] w-full">
                <Image
                  src="/images/home/acharya-portrait.jpg"
                  alt="Vastuvid KK Nagaich - 4th Generation Vastu Guru, Tantra Sadhak, and MBA"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Original gradient overlay – darkens bottom only */}
                <div className="absolute inset-0 bg-gradient-to-t from-nidra-indigo/40 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl drop-shadow-lg tracking-tight">
                  Vastuvid K.K. Nagaich
                </p>
                <p className="text-sm sm:text-base opacity-90 drop-shadow mt-1 tracking-wider uppercase">
                  4th Generation · Tantra Sadhak · MBA · Ex‑CEO
                </p>
              </div>
            </div>

            {/* Stat badges – now below the image, cleanly separated */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              {[
                { icon: '🔥', text: '100M+ Views' },
                { icon: '📱', text: '80K+ Followers' },
                { icon: '👥', text: '2L+ Clients' },
                { icon: '🌐', text: '50+ Countries' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-prakash-gold/40 shadow-md text-sm font-bold text-nidra-indigo"
                >
                  <span className="text-lg">{stat.icon}</span>
                  <span>{stat.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Luxury Content */}
          <motion.div
            style={isMounted ? { y } : undefined}
            className="order-1 md:order-2"
          >
            <span className="text-sacred-saffron uppercase tracking-[0.25em] text-xs sm:text-sm font-bold">
              {data.subtitle}
            </span>
            <h2
              id="acharya-vow-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-nidra-indigo mt-4 mb-6 leading-tight"
            >
              {data.title}
            </h2>
            <p className="text-base sm:text-lg text-nidra-indigo/80 leading-relaxed mb-8 max-w-xl">
              {data.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Tantra Sadhak – Performs Rituals Himself',
                'MBA & Ex‑CEO – Business‑Oriented Vastu',
                '4th Generation Lineage Certified',
                'Trusted by 2 Lakh+ Clients Worldwide',
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-prakash-gold text-xl mt-0.5">✦</span>
                  <span className="text-nidra-indigo/80 text-sm sm:text-base">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={data.button_link || '/about'}
                className="luxury-button text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                {data.button_text}
              </Link>
              <Link
                href="/about"
                className="border-b-2 border-prakash-gold text-nidra-indigo font-medium pb-1 hover:text-sacred-saffron transition-colors self-start"
              >
                Read Our Full Story →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default AcharyaVow;
