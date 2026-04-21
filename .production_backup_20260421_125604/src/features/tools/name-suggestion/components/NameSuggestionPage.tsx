'use client';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
export default function NameSuggestionPage() {
  return (
    <>
      <Header /><SmoothScroll>
        <main className="pt-28 pb-20 px-6 min-h-screen bg-vastu-parchment text-center">
          <motion.h1 className="font-serif text-4xl text-nidra-indigo mb-4">Name Suggestion</motion.h1>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto">Please <a href="/bookings" className="text-prakash-gold underline">book a consultation</a> for personalized name suggestions based on Nakshatra.</p>
        </main>
      </SmoothScroll>
    </>
  );
}
