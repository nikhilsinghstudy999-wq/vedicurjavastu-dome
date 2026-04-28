import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';

export default function VirtualConsultPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <main className="pt-32 pb-20 min-h-screen bg-vastu-parchment text-center">
          <h1 className="font-serif text-4xl text-nidra-indigo capitalize">Virtual consult</h1>
          <p className="mt-4 text-nidra-indigo/60">Detailed information coming soon.</p>
          <p className="mt-2 text-sm">
            <a href="/bookings" className="text-prakash-gold underline">Book a consultation</a> to learn more.
          </p>
        </main>
      </SmoothScroll>
    </>
  );
}
