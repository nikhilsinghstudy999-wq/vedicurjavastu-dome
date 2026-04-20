'use client';
import { motion } from 'framer-motion';
import { Testimonial } from '@/types/admin';

export default function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  // Generate a unique gradient based on index
  const gradients = [
    'linear-gradient(135deg, #FF9933 0%, #C10000 100%)',
    'linear-gradient(135deg, #C10000 0%, #E8B960 100%)',
    'linear-gradient(135deg, #E8B960 0%, #FF9933 100%)',
    'linear-gradient(135deg, #1A2A3A 0%, #C10000 100%)',
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="h-full rounded-2xl p-[2px] shadow-lg hover:shadow-xl transition-shadow"
      style={{ background: gradient }}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 h-full flex flex-col">
        {/* Rating stars */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-base ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
            >
              ★
            </span>
          ))}
          {testimonial.verified && (
            <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              ✓ Verified
            </span>
          )}
        </div>

        {/* Testimonial content */}
        <p className="text-nidra-indigo/80 text-sm leading-relaxed italic flex-1 mb-4">
          "{testimonial.content}"
        </p>

        {/* Author info */}
        <div className="border-t border-prakash-gold/20 pt-3">
          <p className="font-serif font-bold text-nidra-indigo text-base">
            {testimonial.client_name}
          </p>
          <p className="text-xs text-nidra-indigo/60 uppercase tracking-wider">
            {testimonial.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
