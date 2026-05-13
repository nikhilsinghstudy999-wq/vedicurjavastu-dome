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
  id: 'acharya_vow',
  section_key: 'acharya_vow',
  title: 'The Only Vastu Expert in India with Tantra, MBA & 4‑Generation Lineage',
  subtitle: 'The Sacred Vow of Vastuvid K.K. Nagaich',
  description: 'Trained Tantra Sadhak who personally performs every ritual. MBA & former CEO – maps Vastu defects directly to business metrics. Rooted in an unbroken Guru‑Shishya Parampara from the Siddh Peeth of the Himalaya. 100M+ views, 80K+ followers, 2L+ clients across 50+ countries.',
  button_text: 'Discover Our Lineage',
  button_link: '/about',
  is_published: true,
};

export function AcharyaVow() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const { scrollYProgress } = useScroll(isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const { items, loading } = useRealtimeContent<HomeSection>('home_sections', 'order_index');
  const data = items.find(i => i.section_key === 'acharya_vow') || fallbackData;

  if (loading) return <div className="py-24 text-center"><div className="w-8 h-8 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin mx-auto" /></div>;
  if (!data.is_published) return null;

  return (
    <motion.section ref={ref} style={isMounted ? { opacity, y } : undefined}
      className="py-20 sm:py-28 md:py-36 overflow-hidden bg-gradient-to-br from-[#FDFBF7] via-[#FFF9F0] to-[#F4EFE6] relative"
      aria-labelledby="acharya-vow-title">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-prakash-gold/10 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-sacred-saffron/10 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
          <motion.div style={isMounted ? { scale } : undefined} className="relative order-2 md:order-1">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-prakash-gold/30">
              <div className="relative h-[400px] sm:h-[500px] md:h-[550px] w-full">
                <Image src="/images/home/acharya-portrait.jpg" alt="Vastuvid K.K. Nagaich – 4th Generation Vastu Guru, Tantra Sadhak, MBA, former CEO" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-nidra-indigo/40 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl drop-shadow-lg tracking-tight">Vastuvid K.K. Nagaich</p>
                <p className="text-sm sm:text-base opacity-90 drop-shadow mt-1 tracking-wider uppercase">4th Generation · Tantra Sadhak · MBA · Ex‑CEO</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              {[
                { svg: 'search', text: '100M+ Views' },
                { svg: 'people', text: '80K+ Followers' },
                { svg: 'check', text: '2L+ Clients' },
                { svg: 'globe', text: '50+ Countries' },
              ].map((stat, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                  className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-prakash-gold/40 shadow-md text-sm font-bold text-nidra-indigo">
                  {/* inline SVG icon */}
                  {stat.svg === 'search' && <svg className="w-4 h-4 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-1.48 1.48l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1114 9.5 4.505 4.505 0 019.5 14z"/></svg>}
                  {stat.svg === 'people' && <svg className="w-4 h-4 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>}
                  {stat.svg === 'check' && <svg className="w-4 h-4 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>}
                  {stat.svg === 'globe' && <svg className="w-4 h-4 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>}
                  <span>{stat.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div style={isMounted ? { y } : undefined} className="order-1 md:order-2">
            <span className="text-sacred-saffron uppercase tracking-[0.25em] text-xs sm:text-sm font-bold">{data.subtitle}</span>
            <h2 id="acharya-vow-title" className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-nidra-indigo mt-4 mb-6 leading-tight">{data.title}</h2>
            <p className="text-base sm:text-lg text-nidra-indigo/80 leading-relaxed mb-8 max-w-xl">{data.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={data.button_link || '/about'} className="luxury-button text-center shadow-lg hover:shadow-xl transition-shadow">{data.button_text}</Link>
              <Link href="/about" className="border-b-2 border-prakash-gold text-nidra-indigo font-medium pb-1 hover:text-sacred-saffron transition-colors self-start">Read Our Full Story →</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
export default AcharyaVow;
