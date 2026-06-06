import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import Link from 'next/link';

export default function VisheshUpayePage() {
  return (
    <>
      <Header />
      <SmoothScroll>
        <main className="min-h-screen bg-gradient-to-b from-vastu-parchment to-white">
          {/* Hero */}
          <div className="bg-gradient-to-r from-nidra-indigo via-sacred-saffron/20 to-nidra-indigo py-20">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-6 py-2 bg-prakash-gold/20 rounded-full text-prakash-gold font-semibold tracking-wider mb-4">
                विशेष उपाय
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-nidra-indigo">
                विशेष उपाय-1
              </h1>
            </div>
          </div>

          {/* Video player – local first, jsDelivr fallback */}
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-prakash-gold/30 bg-black">
              <video
                id="vishesh-video"
                className="absolute inset-0 w-full h-full"
                poster="/images/vishesh-upaye-poster.jpg"
                controls
                preload="metadata"
                playsInline
              >
                {/* 1st source: local Vercel file (works if deployed correctly) */}
                <source src="/videos/Vedicvastuurja.mp4" type="video/mp4" />
                {/* 2nd source: jsDelivr CDN (always works, no signup) */}
                <source
                  src="https://cdn.jsdelivr.net/gh/nikhilsinghstudy999-wq/vedicurjavastu-dome@main/public/videos/Vedicvastuurja.mp4"
                  type="video/mp4"
                  data-fallback="true"
                />
                <p className="text-white text-center p-8">
                  आपका ब्राउज़र वीडियो का समर्थन नहीं करता।
                </p>
              </video>

              {/* Automatic fallback to CDN if local fails */}
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    const video = document.getElementById('vishesh-video');
                    const localSource = video.querySelector('source:not([data-fallback])');
                    const cdnSource = video.querySelector('source[data-fallback]');

                    // If the local source fails, switch to CDN immediately
                    localSource.addEventListener('error', () => {
                      console.log('Local video unavailable – switching to jsDelivr CDN');
                      localSource.remove();
                      video.load();
                    });

                    // Prefer CDN if local is slow (optional)
                    video.addEventListener('canplay', () => {
                      if (video.networkState === 3 && !video.currentSrc.includes('jsdelivr')) {
                        // Loading stalled; try CDN
                        localSource.remove();
                        video.load();
                      }
                    });
                  `,
                }}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
            <div className="bg-white/80 rounded-3xl p-8 border border-prakash-gold/30 shadow-xl">
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mb-4">
                संपूर्ण समाधान के लिए संपर्क करें
              </h2>
              <Link
                href="/bookings"
                className="inline-block px-10 py-4 bg-gradient-to-r from-sacred-saffron to-prakash-gold text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
              >
                परामर्श बुक करें →
              </Link>
            </div>
          </div>
        </main>
      </SmoothScroll>
    </>
  );
}
