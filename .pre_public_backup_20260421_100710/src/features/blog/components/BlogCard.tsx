'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/types/admin';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const imageUrl = post.featured_image || null;
  
  // 3D animated placeholder when no image
  const renderThumbnail = () => {
    if (imageUrl) {
      return (
        <img
          src={imageUrl}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      );
    }
    // 3D animated placeholder with sacred geometry
    return (
      <div className="w-full h-full bg-gradient-to-br from-sacred-saffron/20 via-prakash-gold/30 to-kumkuma-red/20 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="relative w-20 h-20"
        >
          <div className="absolute inset-0 rounded-full border-4 border-prakash-gold/40" />
          <div className="absolute inset-2 rounded-full border-2 border-dashed border-sacred-saffron/60" />
          <div className="absolute inset-4 rounded-full border border-kumkuma-red/50" />
          <span className="absolute inset-0 flex items-center justify-center text-3xl">ॐ</span>
        </motion.div>
      </div>
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8, rotateY: 3 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-prakash-gold/20 hover:border-prakash-gold/50 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Link href={`/insights/post?slug=${post.slug}`} className="block">
        <div className="h-52 overflow-hidden relative">
          {renderThumbnail()}
          <div className="absolute inset-0 bg-gradient-to-t from-nidra-indigo/40 via-transparent to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="bg-prakash-gold/90 text-nidra-indigo text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3 text-xs text-nidra-indigo/50">
            <span>{post.read_time} min read</span>
            <span>•</span>
            <span>By {post.author_name || 'Acharya'}</span>
          </div>
          <h3 className="font-serif text-xl text-nidra-indigo mb-3 group-hover:text-sacred-saffron transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-nidra-indigo/60 line-clamp-3 mb-4">{post.excerpt}</p>
          <span className="inline-flex items-center text-prakash-gold text-sm font-medium group-hover:translate-x-1 transition-transform">
            Read More <span className="ml-1">→</span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
