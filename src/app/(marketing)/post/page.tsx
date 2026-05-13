'use client';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';

export default function PostPage() {
  return (
    <>
      <SoundController />
      <Header />
      
        <main style={{ position: "relative" }} className="relative z-10 pt-32 pb-20 min-h-screen bg-vastu-parchment">
          <div className="container mx-auto px-6">
            <h1 className="font-serif text-4xl text-center mb-8">Post</h1><p className="text-center">Coming soon.</p>
          </div>
        </main>
      
    </>
  );
}
