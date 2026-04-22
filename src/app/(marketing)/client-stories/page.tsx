'use client';
import { useState, useMemo } from 'react';
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
import { googleReviews } from '@/data/googleReviews';

export default function ClientStoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', '5★', '4★'];

  const filteredReviews = useMemo(() => {
    return googleReviews.filter(review => {
      const matchesSearch = review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            review.text.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' ? true :
                              activeCategory === '5★' ? review.rating === 5 :
                              review.rating === 4;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <main style={{ position: "relative" }} className="relative bg-vastu-parchment">
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
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              {filteredReviews.length === 0 ? (
                <p className="text-center text-nidra-indigo/60 py-12">No reviews found.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredReviews.map((review, i) => (
                    <TestimonialCard key={i} review={review} index={i} />
                  ))}
                </div>
              )}
            </div>
          </section>
          <FAQSection />
          <FinalCTA />
        </main>
      </SmoothScroll>
    </>
  );
}

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
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="text-center p-6 bg-gradient-to-br from-vastu-parchment to-white rounded-2xl border border-prakash-gold/30 shadow-lg">
              <div className="text-4xl font-serif font-bold text-nidra-indigo">{stat.value}</div>
              <div className="text-sm text-nidra-indigo/60 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 bg-nidra-indigo text-white text-center overflow-hidden">
      <Mandala3D />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedText text="Experience the Transformation" className="font-serif text-4xl md:text-6xl mb-6 text-white" />
        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">Join thousands of satisfied clients who have found harmony through VedicUrja.</p>
        <Link href="/bookings" className="bg-prakash-gold hover:bg-sacred-saffron text-nidra-indigo font-bold px-10 py-5 rounded-full text-lg transition">
          Book Your Consultation
        </Link>
      </div>
    </section>
  );
}
