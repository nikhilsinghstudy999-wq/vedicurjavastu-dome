'use client';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import AnimatedText, { GradientText } from '@/features/shared/components/AnimatedText';
import Mandala3D from '@/features/shared/components/Mandala3D';
import BlogCard from '@/features/blog/components/BlogCard';
import CategoryFilter from '@/features/blog/components/CategoryFilter';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';
import { BlogPost } from '@/types/admin';

export default function InsightsPage() {
  const { items: posts, loading } = useRealtimeContent<BlogPost>('blog_posts');
  const publishedPosts = posts.filter(p => p.is_published);
  const categories = useMemo(() => ['All', ...Array.from(new Set(publishedPosts.map(p => p.category)))], [publishedPosts]);
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredPosts = activeCategory === 'All' ? publishedPosts : publishedPosts.filter(p => p.category === activeCategory);

  if (loading) return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-12 h-12 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <main className="relative bg-vastu-parchment">
          {/* Premium Hero with small rotating mandala */}
          <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-vastu-parchment via-white to-vastu-parchment">
            {/* Background mandala – small and rotating */}
            <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 opacity-30 pointer-events-none">
              <Mandala3D />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sacred-saffron uppercase tracking-[0.3em] text-sm mb-4 block"
              >
                Wisdom from the Vedic Tradition
              </motion.span>

              <AnimatedText
                text="Sacred Archives"
                className="font-serif text-5xl md:text-7xl lg:text-8xl text-nidra-indigo mb-4"
              />

              <GradientText
                text="Ancient Knowledge for Modern Living"
                className="font-serif text-2xl md:text-3xl mb-6 block"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-nidra-indigo/70 max-w-2xl mx-auto"
              >
                Explore in‑depth articles on Vastu Shastra, numerology, and Vedic astrology — written by Vastuvid K.K. Nagaich and updated regularly with authentic, actionable insights.
              </motion.p>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-10 bg-vastu-stone/20">
            <div className="container mx-auto px-4 sm:px-6">
              <CategoryFilter categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />
            </div>
          </section>

          {/* Blog Grid */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              {filteredPosts.length === 0 ? (
                <p className="text-center text-nidra-indigo/60 py-12">No articles found in this category.</p>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, i) => (
                    <BlogCard key={post.id} post={post} index={i} />
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
      </SmoothScroll>
    </>
  );
}
