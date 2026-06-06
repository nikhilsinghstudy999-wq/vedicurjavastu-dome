import Header from '@/features/shared/components/Header';
import Footer from '@/features/shared/components/Footer';
import Link from 'next/link';

export default function VisheshUpayePage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-gradient-to-b from-vastu-parchment via-white to-vastu-parchment overflow-hidden">
        
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 text-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-prakash-gold/5 blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-sacred-saffron/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-prakash-gold bg-prakash-gold/10 rounded-full">
              विशेष प्रस्ताव
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-nidra-indigo mb-6 leading-tight">
              विशेष <span className="text-prakash-gold">उपाय</span>
            </h1>
            <p className="text-lg md:text-xl text-nidra-indigo/70 max-w-2xl mx-auto">
              वैदिक ज्योतिष एवं वास्तु के अद्भुत समाधान – सीधे आपके सामने।
            </p>
          </div>
        </section>

        {/* Video Section – 4:3, proven autoplay */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-prakash-gold/30 bg-black/5">
              <div className="aspect-[4/3] w-full bg-black/10">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controlsList="nodownload"
                  poster="/images/home/lucknow-fallback.webp"
                >
                  <source src="/videos/Vedicvastuurja.mp4" type="video/mp4" />
                  {/* Fallback message */}
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Glass reflection effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 text-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-prakash-gold/30">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-nidra-indigo mb-4">
                पूर्ण समाधान के लिए
              </h2>
              <p className="text-lg text-nidra-indigo/70 mb-8">
                व्यक्तिगत परामर्श और विस्तृत रिपोर्ट के लिए आज ही संपर्क करें।
              </p>
              <Link
                href="/bookings"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
              >
                <span>परामर्श बुक करें</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
