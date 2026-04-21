'use client';
import { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import AnimatedText from '@/features/shared/components/AnimatedText';
import Mandala3D from '@/features/shared/components/Mandala3D';
import FloatingParticles from '@/features/shared/components/svg/FloatingParticles';
import TestimonialCard from '@/features/testimonials/components/TestimonialCard';
import CategoryFilter from '@/features/testimonials/components/CategoryFilter';
import FAQSection from '@/features/testimonials/components/FAQSection';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';
import { Testimonial } from '@/types/admin';

const categories = ['All', 'India', 'Global'];

// Instagram Reel Embeds (simplified HTML that Instagram's script will enhance)
const instagramReels = [
  { id: 'DXMejXjkk5D', permalink: 'https://www.instagram.com/reel/DXMejXjkk5D/' },
  { id: 'DW-oXZ3yhUx', permalink: 'https://www.instagram.com/reel/DW-oXZ3yhUx/' },
  { id: 'DWx3t_Dku3u', permalink: 'https://www.instagram.com/reel/DWx3t_Dku3u/' },
  { id: 'DWik3DZkvZk', permalink: 'https://www.instagram.com/reel/DWik3DZkvZk/' },
  { id: 'DWT4z9nEgVs', permalink: 'https://www.instagram.com/reel/DWT4z9nEgVs/' },
  { id: 'DUQW6z5kqIO', permalink: 'https://www.instagram.com/reel/DUQW6z5kqIO/' },
];

function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-vastu-parchment via-white to-vastu-parchment">
      <Mandala3D />
      <FloatingParticles />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sacred-saffron uppercase tracking-[0.3em] text-sm mb-4 block">Real Stories from Around the World</motion.span>
        <AnimatedText text="Words of Gratitude" className="font-serif text-5xl md:text-7xl lg:text-8xl text-nidra-indigo mb-6" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg md:text-xl text-nidra-indigo/70 max-w-2xl mx-auto">
          Discover how VedicUrja has transformed spaces and lives across India and beyond.
        </motion.p>
      </div>
    </section>
  );
}

function TrustStats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '500+', label: 'Satisfied Clients' },
            { value: '15+', label: 'Countries Served' },
            { value: '4.9 ★', label: 'Average Rating' },
            { value: '40+', label: 'Years of Lineage' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-vastu-parchment to-white rounded-2xl border border-prakash-gold/30 shadow-lg"
            >
              <div className="text-4xl font-serif font-bold text-nidra-indigo">{stat.value}</div>
              <div className="text-sm text-nidra-indigo/60 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script if not already present
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Process embeds after script loads or if already loaded
    const processEmbeds = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    // If script already loaded, process immediately
    if ((window as any).instgrm) {
      processEmbeds();
    } else {
      // Wait for script to load
      const checkInterval = setInterval(() => {
        if ((window as any).instgrm) {
          clearInterval(checkInterval);
          processEmbeds();
        }
      }, 200);
      return () => clearInterval(checkInterval);
    }
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-vastu-parchment overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl sm:text-4xl text-center text-nidra-indigo mb-4"
        >
          Social Reviews
        </motion.h2>
        <p className="text-center text-nidra-indigo/60 mb-8 max-w-2xl mx-auto">
          See what our community shares on Instagram
        </p>

        {/* Mobile‑first horizontal scroll */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {instagramReels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="flex-shrink-0 w-[300px] sm:w-[360px] snap-start"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-prakash-gold/20">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={`${reel.permalink}?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{ background: '#FFF', border: 0, borderRadius: 3, boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: 1, maxWidth: 540, minWidth: 326, padding: 0, width: '99.375%' }}
                >
                  <div style={{ padding: 16 }}>
                    <a href={`${reel.permalink}?utm_source=ig_embed&utm_campaign=loading`} style={{ background: '#FFFFFF', lineHeight: 0, padding: 0, textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 40, marginRight: 14, width: 40 }}></div>
                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                          <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 100 }}></div>
                          <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 60 }}></div>
                        </div>
                      </div>
                      <div style={{ padding: '19% 0' }}></div>
                      <div style={{ display: 'block', height: 50, margin: '0 auto 12px', width: 50 }}>
                        <svg width="50" height="50" viewBox="0 0 60 60" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-511,-20)" fill="#000"><path d="M556.869,30.41C554.814,30.41 553.148,32.076 553.148,34.131C553.148,36.186 554.814,37.852 556.869,37.852C558.924,37.852 560.59,36.186 560.59,34.131C560.59,32.076 558.924,30.41 556.869,30.41M541,60.657C535.114,60.657 530.342,55.887 530.342,50C530.342,44.114 535.114,39.342 541,39.342C546.887,39.342 551.658,44.114 551.658,50C551.658,55.887 546.887,60.657 541,60.657M541,33.886C532.1,33.886 524.886,41.1 524.886,50C524.886,58.899 532.1,66.113 541,66.113C549.9,66.113 557.115,58.899 557.115,50C557.115,41.1 549.9,33.886 541,33.886M565.378,62.101C565.244,65.022 564.756,66.606 564.346,67.663C563.803,69.06 563.154,70.057 562.106,71.106C561.058,72.155 560.06,72.803 558.662,73.347C557.607,73.757 556.021,74.244 553.102,74.378C549.944,74.521 548.997,74.552 541,74.552C533.003,74.552 532.056,74.521 528.898,74.378C525.979,74.244 524.393,73.757 523.338,73.347C521.94,72.803 520.942,72.155 519.894,71.106C518.846,70.057 518.197,69.06 517.654,67.663C517.244,66.606 516.755,65.022 516.623,62.101C516.479,58.943 516.448,57.996 516.448,50C516.448,42.003 516.479,41.056 516.623,37.899C516.755,34.978 517.244,33.391 517.654,32.338C518.197,30.938 518.846,29.942 519.894,28.894C520.942,27.846 521.94,27.196 523.338,26.654C524.393,26.244 525.979,25.756 528.898,25.623C532.057,25.479 533.004,25.448 541,25.448C548.997,25.448 549.943,25.479 553.102,25.623C556.021,25.756 557.607,26.244 558.662,26.654C560.06,27.196 561.058,27.846 562.106,28.894C563.154,29.942 563.803,30.938 564.346,32.338C564.756,33.391 565.244,34.978 565.378,37.899C565.522,41.056 565.552,42.003 565.552,50C565.552,57.996 565.522,58.943 565.378,62.101M570.82,37.631C570.674,34.438 570.167,32.258 569.425,30.349C568.659,28.377 567.633,26.702 565.965,25.035C564.297,23.368 562.623,22.342 560.652,21.575C558.743,20.834 556.562,20.326 553.369,20.18C550.169,20.033 549.148,20 541,20C532.853,20 531.831,20.033 528.631,20.18C525.438,20.326 523.257,20.834 521.349,21.575C519.376,22.342 517.703,23.368 516.035,25.035C514.368,26.702 513.342,28.377 512.574,30.349C511.834,32.258 511.326,34.438 511.181,37.631C511.035,40.831 511,41.851 511,50C511,58.147 511.035,59.17 511.181,62.369C511.326,65.562 511.834,67.743 512.574,69.651C513.342,71.625 514.368,73.296 516.035,74.965C517.703,76.634 519.376,77.658 521.349,78.425C523.257,79.167 525.438,79.673 528.631,79.82C531.831,79.965 532.853,80.001 541,80.001C549.148,80.001 550.169,79.965 553.369,79.82C556.562,79.673 558.743,79.167 560.652,78.425C562.623,77.658 564.297,76.634 565.965,74.965C567.633,73.296 568.659,71.625 569.425,69.651C570.167,67.743 570.674,65.562 570.82,62.369C570.966,59.17 571,58.147 571,50C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></svg>
                      </div>
                      <div style={{ paddingTop: 8 }}>
                        <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: 14, fontWeight: 550, lineHeight: '18px' }}>View this post on Instagram</div>
                      </div>
                    </a>
                    <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, lineHeight: '17px', marginBottom: 0, marginTop: 8, overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      <a href={`${reel.permalink}?utm_source=ig_embed&utm_campaign=loading`} style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }} target="_blank">A post shared by VedicUrja (@vedicurja)</a>
                    </p>
                  </div>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{ __html: `.scrollbar-hide::-webkit-scrollbar{display:none;}` }} />
      </div>
    </section>
  );
}

export default function ClientStoriesPage() {
  const { items: testimonials, loading } = useRealtimeContent<Testimonial>('testimonials', 'order_index');
  const publishedTestimonials = testimonials.filter(t => t.is_published);
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const indianStates = ['Delhi', 'Maharashtra', 'Karnataka', 'Uttar Pradesh', 'Madhya Pradesh', 'Gujarat', 'Tamil Nadu', 'West Bengal', 'Rajasthan', 'Kerala', 'Punjab', 'Haryana', 'Telangana', 'Odisha', 'Bihar', 'Assam', 'Himachal Pradesh', 'Uttarakhand', 'Jammu & Kashmir', 'Jharkhand', 'Chhattisgarh', 'Goa', 'India'];

  const filteredTestimonials = useMemo(() => {
    return publishedTestimonials.filter(t => {
      const matchesCategory = activeCategory === 'All' 
        ? true 
        : activeCategory === 'India' 
          ? indianStates.some(state => t.location.includes(state))
          : !indianStates.some(state => t.location.includes(state));
      
      const matchesSearch = searchQuery === '' || 
        t.client_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [publishedTestimonials, activeCategory, searchQuery]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="w-12 h-12 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <HeroSection />
          <TrustStats />
          
          <section className="py-12 bg-vastu-stone/20">
            <div className="container mx-auto px-6">
              <CategoryFilter 
                categories={categories} 
                activeCategory={activeCategory} 
                onSelect={setActiveCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>
          </section>

          <SocialReviewsSection />

          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              {filteredTestimonials.length === 0 ? (
                <p className="text-center text-nidra-indigo/60 py-12">No testimonials found. Try a different search.</p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {filteredTestimonials.map((t, i) => (
                    <TestimonialCard key={t.id} testimonial={t} index={i} />
                  ))}
                </div>
              )}
            </div>
          </section>

          <FAQSection />

          <section className="relative py-32 bg-nidra-indigo text-white text-center overflow-hidden">
            <Mandala3D />
            <div className="container mx-auto px-6 relative z-10">
              <AnimatedText text="Experience the Transformation" className="font-serif text-4xl md:text-6xl mb-6 text-white" />
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">Join thousands of satisfied clients who have found harmony through VedicUrja.</p>
              <Link href="/contact" className="bg-prakash-gold hover:bg-sacred-saffron text-nidra-indigo font-bold px-10 py-5 rounded-full text-lg transition">
                Book Your Consultation
              </Link>
            </div>
          </section>
        </main>
      </SmoothScroll>
    </>
  );
}
