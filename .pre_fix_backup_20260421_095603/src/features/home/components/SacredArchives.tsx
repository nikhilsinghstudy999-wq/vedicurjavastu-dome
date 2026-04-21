'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';
import BlogCard from '@/features/blog/components/BlogCard';

export function SacredArchives() {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined
  );
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const { items: posts, loading, refetch } = useRealtimeContent<any>('blog_posts', 'published_at', false);
  const latestPosts = posts.filter((p: any) => p.is_published).slice(0, 3);

  if (loading) return <div className="py-24 text-center">Loading Archives...</div>;

  return (
    <motion.section 
      ref={ref} 
      style={isMounted ? { y } : undefined}
      className="py-24 bg-vastu-stone/20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl text-nidra-indigo">From the Sacred Archives</h2>
            <p className="text-nidra-indigo/60">Wisdom from the Vedic tradition</p>
          </div>
          <Link href="/insights" className="text-prakash-gold hover:underline">View all →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post: any, i: number) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
export default SacredArchives;
