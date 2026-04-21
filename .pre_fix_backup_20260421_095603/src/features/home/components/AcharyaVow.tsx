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
  id: 'fallback',
  section_key: 'acharya_vow',
  title: 'Guided by Lineage, Driven by Results',
  subtitle: 'Our Sacred Vow',
  description: 'For over four decades, our family has preserved the authentic Vastu Shastra traditions.',
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

  if (loading) return <div className="py-24 text-center">Loading...</div>;
  if (!data.is_published) return null;

  return (
    <motion.section 
      ref={ref}
      style={isMounted ? { opacity, y } : undefined}
      className="py-16 sm:py-24 md:py-32 overflow-hidden bg-gradient-to-br from-vastu-parchment via-white to-vastu-stone/20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div style={isMounted ? { scale } : undefined} className="relative order-2 md:order-1">
            <div className="relative h-[350px] sm:h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-prakash-gold/30">
              <Image src="/images/home/acharya-portrait.jpg" alt="Acharya" fill className="object-contain sm:object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-nidra-indigo/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <p className="font-serif text-xl sm:text-2xl drop-shadow-lg">Vastuvid KK Nagaich</p>
                <p className="text-xs sm:text-sm opacity-90 drop-shadow">4th Generation Vastu Guru</p>
              </div>
            </div>
          </motion.div>
          <motion.div style={isMounted ? { y } : undefined} className="order-1 md:order-2">
            <span className="text-sacred-saffron uppercase tracking-widest text-xs sm:text-sm font-semibold">{data.subtitle}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-4 mb-4 sm:mb-6 leading-tight">{data.title}</h2>
            <p className="text-base sm:text-lg text-nidra-indigo/80 mb-6 leading-relaxed">{data.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={data.button_link || '#'} className="luxury-button text-center shadow-lg hover:shadow-xl transition-shadow">
                {data.button_text}
              </Link>
              <Link href="/about" className="border-b-2 border-prakash-gold text-nidra-indigo font-medium text-center sm:text-left pb-1 hover:text-sacred-saffron transition-colors">
                Read Our Story →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
export default AcharyaVow;
