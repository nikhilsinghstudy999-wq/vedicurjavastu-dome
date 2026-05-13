'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import BlogCard from '@/features/blog/components/BlogCard';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';

export function SacredArchives() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined
  );
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const { items: posts, loading } = useRealtimeContent<any>('blog_posts');
  const latestPosts = posts.filter((p: any) => p.is_published).slice(0, 3);

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { y } : undefined}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-vastu-stone/10 via-white to-vastu-parchment/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />
      <div className="absolute top-20 left-[5%] w-40 h-40 border border-prakash-gold/10 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-20 right-[5%] w-60 h-60 border border-dashed border-sacred-saffron/10 rounded-full animate-rotate-reverse" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
          <div>
            <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Sacred Archives</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-nidra-indigo mt-3">Wisdom from the Vedic Tradition</h2>
            <p className="text-nidra-indigo/60 mt-2 max-w-xl">Explore articles on Vastu Shastra, numerology, and Vedic astrology written by Vastuvid KK Nagaich.</p>
          </div>
          <Link href="/insights" className="inline-flex items-center gap-2 text-prakash-gold font-medium hover:underline">
            View all posts
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post: any, i: number) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes rotate-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rotate-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        .animate-rotate-slow { animation: rotate-slow 40s linear infinite; }
        .animate-rotate-reverse { animation: rotate-reverse 35s linear infinite; }
      `}</style>
    </motion.section>
  );
}
export default SacredArchives;
