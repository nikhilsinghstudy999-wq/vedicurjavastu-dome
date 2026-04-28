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

  const { items: posts } = useRealtimeContent<any>('blog_posts');
  const latestPosts = posts.filter((p: any) => p.is_published).slice(0, 3);

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { y } : undefined}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Deep glass-morphism background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-[#F7F0E6] to-[#FDFBF7]" />
      
      {/* Floating glass orbs */}
      <div className="absolute top-20 left-[8%] w-72 h-72 rounded-full bg-gradient-to-br from-prakash-gold/8 to-sacred-saffron/5 backdrop-blur-3xl border border-white/40 shadow-[0_20px_60px_rgba(232,185,96,0.15)] animate-float-slow" />
      <div className="absolute bottom-20 right-[5%] w-96 h-96 rounded-full bg-gradient-to-tl from-sacred-saffron/5 to-kumkuma-red/3 backdrop-blur-3xl border border-white/30 shadow-[0_20px_60px_rgba(193,0,0,0.08)] animate-float-slow-reverse" />
      <div className="absolute top-1/2 left-[30%] w-48 h-48 rounded-full bg-gradient-to-tr from-nidra-indigo/3 to-prakash-gold/5 backdrop-blur-2xl border border-white/20 animate-float-medium" />

      {/* Vedic decorative lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header with glass card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6"
        >
          <div className="relative">
            {/* Decorative gold line */}
            <div className="absolute -left-4 top-2 w-1 h-12 bg-gradient-to-b from-prakash-gold to-sacred-saffron rounded-full" />
            <span className="text-sacred-saffron uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold ml-2">
              Sacred Archives
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 leading-tight">
              Wisdom from the{' '}
              <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">
                Vedic Tradition
              </span>
            </h2>
            <p className="text-nidra-indigo/60 mt-3 max-w-xl text-sm sm:text-base">
              Explore articles on Vastu Shastra, numerology, and Vedic astrology written by Vastuvid KK Nagaich.
            </p>
          </div>

          {/* Premium 3D View All button */}
          <Link href="/insights">
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-prakash-gold/20 via-white/40 to-sacred-saffron/10 backdrop-blur-xl rounded-full border border-prakash-gold/30 shadow-[0_8px_25px_rgba(200,138,93,0.15)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.25)] transition-all duration-500"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <span className="text-nidra-indigo font-medium text-sm tracking-wide">View all posts</span>
              <motion.svg
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-5 h-5 text-prakash-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
              {/* Button glass overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </Link>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {latestPosts.map((post: any, i: number) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(15px, -15px) rotate(2deg); }
          66% { transform: translate(-10px, -8px) rotate(-1deg); }
        }
        @keyframes float-slow-reverse {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-15px, 10px) rotate(-2deg); }
          66% { transform: translate(10px, -5px) rotate(1deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-8px, -12px); }
        }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-slow-reverse { animation: float-slow-reverse 15s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 8s ease-in-out infinite; }
      `}</style>
    </motion.section>
  );
}
export default SacredArchives;
