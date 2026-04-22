'use client';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';

export default function CoursesPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <main style={{ position: "relative" }} className="relative z-10 pt-32 pb-20 min-h-screen bg-vastu-parchment">
          <div className="container mx-auto px-6">
            <h1 className="font-serif text-4xl text-center mb-8">Our Courses</h1><div className="grid md:grid-cols-2 gap-6"><div className="bg-white p-6 rounded-xl">Vastu Foundations</div><div className="bg-white p-6 rounded-xl">Advanced Vastu</div></div>
          </div>
        </main>
      </SmoothScroll>
    </>
  );
}
