import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import Link from 'next/link';
import Image from 'next/image';

export default function VisheshUpayePage() {
  return (
    <>
      <Header />
      <SmoothScroll>
        <main className="min-h-screen bg-gradient-to-b from-vastu-parchment via-white to-vastu-parchment">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-nidra-indigo via-sacred-saffron/20 to-nidra-indigo py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="inline-block px-6 py-2 bg-prakash-gold/20 rounded-full mb-6">
                <span className="text-prakash-gold font-semibold tracking-wider">विशेष उपाय</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-nidra-indigo mb-4">
                विशेष उपाय-1
              </h1>
              <p className="text-nidra-indigo/70 text-lg max-w-2xl mx-auto">
                प्राचीन वैदिक विधियों पर आधारित विशेष समाधान
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl border border-prakash-gold/30 bg-black">
              <video
                className="absolute inset-0 w-full h-full object-contain"
                poster="/images/vishesh-upaye-poster.jpg"
                controls
                preload="none"
                playsInline
              >
                <source src="/videos/Vedicvastuurja.mp4" type="video/mp4" />
                <source src="/videos/Vedicvastuurja.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* CTA Section */}
          <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
            <div className="bg-gradient-to-br from-white/90 to-vastu-stone/30 rounded-3xl p-8 border border-prakash-gold/30 shadow-xl">
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mb-4">
                संपूर्ण समाधान के लिए संपर्क करें
              </h2>
              <p className="text-nidra-indigo/70 text-lg mb-8">
                व्यक्तिगत मार्गदर्शन और विस्तृत उपाय हेतु आज ही बुक करें।
              </p>
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
