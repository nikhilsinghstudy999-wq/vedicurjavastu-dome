#!/bin/bash
# redesign_blog_page.sh – Replaces InsightsPage and BlogCard with elegant versions.

echo "📝 Redesigning blog page..."

# 1. Replace BlogCard component with elegant version (stylish topic label, glassmorphism)
cat > src/features/blog/components/BlogCard.tsx << 'EOF'
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/types/admin';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link href={`/insights/${post.slug}`} className="block h-full">
        <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-prakash-gold/20 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
          {/* Category badge – elegant gold gradient */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-prakash-gold/90 to-sacred-saffron/90 text-white shadow-md">
              {post.category}
            </span>
          </div>

          {/* Image area */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-nidra-indigo/5 to-prakash-gold/5">
            {post.featured_image ? (
              <img 
                src={post.featured_image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-prakash-gold/30 flex items-center justify-center">
                  <span className="text-3xl font-serif text-prakash-gold/50">ॐ</span>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-center gap-2 text-xs text-nidra-indigo/50 mb-3">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.read_time} min read
              </span>
              <span className="w-1 h-1 rounded-full bg-prakash-gold/40" />
              <span>By {post.author_name || 'Vastuvid KK Nagaich'}</span>
            </div>

            <h3 className="font-serif text-xl text-nidra-indigo font-bold mb-2 line-clamp-2 group-hover:text-prakash-gold transition-colors">
              {post.title}
            </h3>

            <p className="text-sm text-nidra-indigo/60 line-clamp-3 mb-4">
              {post.excerpt}
            </p>

            <div className="flex items-center text-prakash-gold text-sm font-medium">
              Read More
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
EOF

echo "✅ Updated BlogCard.tsx"

# 2. Replace InsightsPage with elegant version (clean header, simple category filter)
cat > src/features/blog/components/InsightsPage.tsx << 'EOF'
'use client';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import AnimatedText, { GradientText } from '@/features/shared/components/AnimatedText';
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

  return (
    <>
      <SoundController />
      <Header />
      <main className="relative bg-vastu-parchment">
        {/* Hero section – simple, elegant */}
        <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white to-vastu-parchment">
          <div className="container mx-auto px-6 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-sacred-saffron uppercase tracking-[0.3em] text-sm font-semibold"
            >
              Wisdom from the Vedic Tradition
            </motion.span>
            <AnimatedText 
              text="Sacred Archives" 
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-nidra-indigo mt-4 mb-4" 
            />
            <GradientText 
              text="Ancient Knowledge for Modern Living" 
              className="font-serif text-xl sm:text-2xl md:text-3xl block" 
            />
            <p className="text-base text-nidra-indigo/60 max-w-2xl mx-auto mt-4">
              Explore articles on Vastu Shastra, numerology, and Vedic astrology — written by Vastuvid KK Nagaich.
            </p>
          </div>
        </section>

        {/* Category filter – simple, elegant */}
        <section className="py-8 border-b border-prakash-gold/10">
          <div className="container mx-auto px-6">
            <CategoryFilter 
              categories={categories} 
              activeCategory={activeCategory} 
              onSelect={setActiveCategory} 
            />
          </div>
        </section>

        {/* Blog grid – elegant cards */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="w-12 h-12 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" />
              </div>
            ) : filteredPosts.length === 0 ? (
              <p className="text-center text-nidra-indigo/60 py-20">No articles found in this category.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
EOF

echo "✅ Updated InsightsPage.tsx"

# 3. Ensure CategoryFilter component has elegant styling (no changes needed, but we can update it for consistency)
# The existing CategoryFilter is already elegant – keep as is.

echo ""
echo "🎉 Blog page redesigned! Now run: rm -rf .next && npm run build"