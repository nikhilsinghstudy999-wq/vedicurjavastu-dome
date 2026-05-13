'use client';

import dynamic from 'next/dynamic';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Header from '@/features/shared/components/Header';
import { CosmicHero } from '@/features/home/components/CosmicHero';

// Lazy‑load below‑fold sections for instant above‑fold paint
const AcharyaVow = dynamic(() => import('@/features/home/components/AcharyaVow').then(m => ({ default: m.AcharyaVow })));
const SacredServices = dynamic(() => import('@/features/home/components/SacredServices').then(m => ({ default: m.SacredServices })));
const FreeAITools = dynamic(() => import('@/features/home/components/FreeAITools').then(m => ({ default: m.FreeAITools })));
const GlobalPresence = dynamic(() => import('@/features/home/components/GlobalPresence').then(m => ({ default: m.GlobalPresence })));
const FinalCTA = dynamic(() => import('@/features/home/components/FinalCTA').then(m => ({ default: m.FinalCTA })));

export default function HomePage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <main className="relative bg-vastu-parchment">
        <CosmicHero />
        <AcharyaVow />
        <SacredServices />
        <FreeAITools />
        <GlobalPresence />
        <FinalCTA />
      </main>
    </>
  );
}
