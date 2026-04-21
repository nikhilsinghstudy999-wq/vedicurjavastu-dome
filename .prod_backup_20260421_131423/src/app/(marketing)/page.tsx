'use client';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { CosmicHero } from '@/features/home/components/CosmicHero';
import { TrustMarquee } from '@/features/home/components/TrustMarquee';
import { AcharyaVow } from '@/features/home/components/AcharyaVow';
import { SacredServices } from '@/features/home/components/SacredServices';
import { FreeAITools } from '@/features/home/components/FreeAITools';
import { VirtualConsultCTA } from '@/features/home/components/VirtualConsultCTA';
import { SacredArchives } from '@/features/home/components/SacredArchives';
import { GlobalPresence } from '@/features/home/components/GlobalPresence';
import { SocialMediaFeed } from '@/features/home/components/SocialMediaFeed';
import SocialCommunityShowcase from '@/features/home/components/SocialCommunityShowcase';
import FAQSection from '@/features/testimonials/components/FAQSection';
import { FinalCTA } from '@/features/home/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <CosmicHero />
          <TrustMarquee />
          <AcharyaVow />
          <SacredServices />
          <div id="free-tools"><FreeAITools /></div>
          <VirtualConsultCTA />
          <SacredArchives />
          <GlobalPresence />
          <SocialMediaFeed />
          <SocialCommunityShowcase />
          <FAQSection />
          <FinalCTA />
        </main>
      </SmoothScroll>
    </>
  );
}
