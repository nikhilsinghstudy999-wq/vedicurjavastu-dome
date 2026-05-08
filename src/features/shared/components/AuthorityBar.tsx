'use client';
import { motion } from 'framer-motion';

export default function AuthorityBar() {
  return (
    <section className="py-10 bg-gradient-to-r from-nidra-indigo via-sacred-saffron/10 to-nidra-indigo border-b border-prakash-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/90 text-sm sm:text-base font-medium">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
            <span className="text-prakash-gold text-xl">🔥</span> <span className="font-bold">100M+</span> Views
          </motion.span>
          <span className="hidden sm:inline text-white/20">|</span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex items-center gap-2">
            <span className="text-prakash-gold text-xl">📱</span> <span className="font-bold">80K+</span> Followers
          </motion.span>
          <span className="hidden sm:inline text-white/20">|</span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-2">
            <span className="text-prakash-gold text-xl">👥</span> <span className="font-bold">2L+</span> Clients
          </motion.span>
          <span className="hidden sm:inline text-white/20">|</span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center gap-2">
            <span className="text-prakash-gold text-xl">🌐</span> <span className="font-bold">50+</span> Countries
          </motion.span>
        </div>
      </div>
    </section>
  );
}
