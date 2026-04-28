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
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
      style={{ perspective: 1200 }}
    >
      <Link href={`/insights/${post.slug}`}>
        <motion.div
          whileHover={{ 
            rotateX: 5, 
            rotateY: -6, 
            translateZ: 30,
            scale: 1.03 
          }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative bg-gradient-to-br from-white/70 via-white/50 to-vastu-stone/40 backdrop-blur-xl rounded-[28px] overflow-hidden border border-white/40 shadow-[0_10px_40px_rgba(26,42,58,0.08),0_2px_8px_rgba(26,42,58,0.04)] hover:shadow-[0_25px_60px_rgba(200,138,93,0.2),0_8px_20px_rgba(200,138,93,0.1)] transition-shadow duration-500"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Metallic border glow */}
          <div className="absolute inset-0 rounded-[28px] border border-prakash-gold/20 group-hover:border-prakash-gold/40 transition-colors duration-500" />
          
          {/* Image area with glass overlay */}
          <div className="relative h-56 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-nidra-indigo/20 via-prakash-gold/20 to-sacred-saffron/20" />
            
            {post.featured_image ? (
              <img 
                src={post.featured_image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="relative w-24 h-24"
                >
                  <div className="absolute inset-0 rounded-full border-2 border-prakash-gold/40" />
                  <div className="absolute inset-2 rounded-full border border-dashed border-sacred-saffron/30" />
                  <div className="absolute inset-4 rounded-full border border-kumkuma-red/20" />
                  <span className="absolute inset-0 flex items-center justify-center text-4xl font-serif text-nidra-indigo/40">ॐ</span>
                </motion.div>
              </div>
            )}
            
            {/* Glass overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-nidra-indigo/30 via-transparent to-transparent" />
            
            {/* Category badge with glass effect */}
            <div className="absolute top-4 left-4" style={{ transform: 'translateZ(40px)' }}>
              <div className="backdrop-blur-md bg-white/60 border border-white/50 rounded-full px-4 py-1.5 shadow-lg">
                <span className="text-xs font-bold text-nidra-indigo uppercase tracking-widest">
                  {post.category}
                </span>
              </div>
            </div>
          </div>

          {/* Content area with 3D depth */}
          <div className="p-6" style={{ transform: 'translateZ(25px)' }}>
            {/* Meta info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5 text-xs text-nidra-indigo/50">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.read_time} min read</span>
              </div>
              <span className="w-1 h-1 bg-prakash-gold/40 rounded-full" />
              <span className="text-xs text-nidra-indigo/50">By {post.author_name || 'Acharya'}</span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl text-nidra-indigo mb-3 group-hover:text-sacred-saffron transition-colors duration-300 line-clamp-2 leading-tight">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-nidra-indigo/60 line-clamp-2 mb-5 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Read More link with animated arrow */}
            <div className="flex items-center text-prakash-gold text-sm font-medium group/link">
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">Read More</span>
              <motion.svg 
                className="ml-2 w-4 h-4"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </div>
          </div>

          {/* Shine effect on hover */}
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
        </motion.div>
      </Link>
    </motion.article>
  );
}
