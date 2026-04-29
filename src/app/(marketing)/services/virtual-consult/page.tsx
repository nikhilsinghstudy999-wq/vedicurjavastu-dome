import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>

        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#000a10] via-[#001a30] to-[#000a10]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.07),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-teal-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
              Vedic Applications · वैदिक अनुप्रयोग
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-teal-400 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Virtual Consult</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">
              60‑Min Personalised Live Session · Screen‑Share Floor Plan Analysis · Post‑Session Written Report · Priority Follow‑Up Booking · Covers All Vastu Services
            </p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">
              Performed by Vastuvid K.K. Nagaich — 4th generation Vastu Guru, MBA, Ex‑CEO, 20+ years clinical practice, 2 Lakh+ clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-teal-400 text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                Book Consultation
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                ← All Services
              </Link>
            </div>
          </div>
        </section>

        {/* PLACEHOLDER IMAGE */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <img 
              src="/images/services/virtual-consult/hero-placeholder.svg" 
              alt="Virtual Consult" 
              className="w-full rounded-3xl shadow-lg opacity-70"
            />
          </div>
        </section>

        {/* DETAILED CONTENT COMING SOON */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mb-6">
              Detailed Virtual Consult Information Being Prepared
            </h2>
            <p className="text-nidra-indigo/60 max-w-2xl mx-auto mb-8 leading-relaxed">
              Our team is crafting a comprehensive, web‑researched guide covering every practice, puja, and remedy for Virtual Consult. 
              For immediate consultation with Vastuvid K.K. Nagaich, please book a session below.
            </p>
            <Link href="/bookings" className="luxury-button">
              Schedule Your Virtual Consult Audit →
            </Link>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-[#000a10] via-[#001a30] to-[#000a10] bg-[length:400%_400%] animate-[gradientLoop_12s_ease_infinite]">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-teal-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Let Vastuvid K.K. Nagaich Guide Your Virtual Consult
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Book a private consultation today — performed personally by a 4th‑generation Vastu Guru with 20+ years of clinical practice and 2 Lakh+ clients worldwide.
                  </p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-teal-400 text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
                    Schedule Your Consultation →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </SmoothScroll>
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
        @keyframes gradientLoop { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      `}</style>
    </>
  );
}
