import Header from '@/features/shared/components/Header';
import Link from 'next/link';

export default function VisheshUpayePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#FDF8F0] via-white to-[#FDF8F0]">

        {/* ───── Hero ───── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1A2A3A] via-[#2E3B4E] to-[#1A2A3A] py-24 sm:py-32">
          <div className="absolute inset-0 bg-[url('/images/home/mandala-bg.webp')] bg-cover bg-center opacity-10" />
          <div className="relative container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#E8B960]/20 rounded-full mb-6 border border-[#E8B960]/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#E8B960] rounded-full animate-pulse" />
              <span className="text-[#E8B960] font-semibold tracking-[0.2em] uppercase text-sm">
                विशेष उपाय
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight">
              विशेष उपाय-1
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8">
              प्राचीन वैदिक ज्ञान पर आधारित शक्तिशाली उपाय, जो आपके जीवन में सकारात्मक ऊर्जा का संचार करेगा
            </p>
            <div className="flex justify-center gap-3 text-sm text-white/50">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                प्रमाणिक विधि
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                तुरंत प्रभाव
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                गोपनीय
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FDF8F0] to-transparent" />
        </section>

        {/* ───── Video ───── */}
        <section className="container mx-auto px-4 -mt-8 relative z-10 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E8B960]/20 p-1">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black">
              <video
                className="absolute inset-0 w-full h-full"
                poster="/images/vishesh-upaye-poster.jpg"
                controls
                preload="auto"
                playsInline
              >
                <source
                  src="https://uw1eurcnoeucxhtb.public.blob.vercel-storage.com/jj.mp4"
                  type="video/mp4"
                />
                <p className="text-white text-center p-8">
                  आपका ब्राउज़र वीडियो का समर्थन नहीं करता।
                </p>
              </video>
            </div>
          </div>
          <p className="text-center mt-4 text-sm text-gray-400">
            👆 उपरोक्त वीडियो में पूर्ण विधि दिखाई गई है
          </p>
        </section>

        {/* ───── Benefits / Info ───── */}
        <section className="container mx-auto px-4 py-20 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'लाभ', desc: 'जीवन में सुख, शांति और समृद्धि का आगमन' },
              { title: 'विधि', desc: 'सरल एवं प्रभावी वैदिक प्रक्रिया' },
              { title: 'समय', desc: 'नियमित अभ्यास से शीघ्र परिणाम' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-[#E8B960]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#E8B960] text-xl font-serif">{i+1}</span>
                </div>
                <h3 className="font-serif text-xl text-[#1A2A3A] mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───── CTA ───── */}
        <section className="container mx-auto px-4 py-16 max-w-3xl text-center">
          <div className="bg-gradient-to-br from-white to-[#FDF8F0] rounded-3xl p-10 border border-[#E8B960]/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8B960]/5 rounded-bl-full" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2A3A] mb-4 relative">
              संपूर्ण समाधान हेतु संपर्क करें
            </h2>
            <p className="text-gray-500 mb-8 relative">
              हमारे विशेषज्ञ आपकी व्यक्तिगत समस्या का समाधान प्रदान करेंगे
            </p>
            <Link
              href="/bookings"
              className="relative inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#E8B960] to-[#C9A03E] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg group"
            >
              परामर्श बुक करें
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
