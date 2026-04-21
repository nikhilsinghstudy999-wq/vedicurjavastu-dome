'use client';
import { motion } from 'framer-motion';
export function CommunityCounter3D() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block">
      <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-prakash-gold/40 shadow-2xl">
        <div className="flex items-center gap-4">
          <span className="text-prakash-gold text-2xl">✦</span>
          <span className="font-serif text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">80k+</span>
          <span className="text-white/80 text-lg uppercase tracking-wider">Community</span>
          <span className="text-prakash-gold text-2xl">✦</span>
        </div>
      </div>
    </motion.div>
  );
}
