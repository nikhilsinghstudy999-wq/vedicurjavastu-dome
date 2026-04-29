import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function NumerologyNamakaranPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>

        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a2e] via-[#1a1a4e] to-[#0f0f2a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,119,6,0.08),transparent_50%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-blue-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Advance Treatments · उन्नत उपचार</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-blue-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Numerology & Namakaran</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Janam Namakaran · Vyavsay Namakaran · Business Numerology · Nakshatra Pada Syllable Matching · Muhurat for Namakaran · Name Correction for Adults</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">6 sacred naming practices — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO. Namakaran, one of the 16 sacred Vedic Samskaras, aligns identity with cosmic vibration.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-blue-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Namakaran Consultation</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </div>
        </section>

        {/* ── NAMAKARAN SCIENCE ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Science of Naming</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Namakaran – One of the 16 Sacred Vedic Samskaras</h2><p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">For over 5,000 years, Indian families have consulted the Nakshatra to identify the sacred syllable for a child's name. Codified in the Brihat Parashara Hora Shastra, this system provides 108 unique starting sounds — each with distinct cosmic resonance.</p></div>
          </div>
        </section>

        {/* ── 6 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Six Sacred Naming Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Complete Namakaran Protocol</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">From newborn naming to business numerology — six precise interventions derived from the Brihat Parashara Hora Shastra.</p></div>
            <div className="space-y-16">
              {[
                {num:'01',title:'Janam Namakaran (Newborn Naming Ceremony – 10th/11th/12th Day Samskara)',desc:'Performed on the 10th, 11th, or 12th day after birth. Precise calculation of Janma Nakshatra and Pada. Selection from 108 sacred syllables. Havan with Nakshatra‑specific mantras. Name formally whispered into child\'s right ear, ritually sealing into destiny.',features:['Precise Janma Nakshatra & Pada','108 sacred syllables selection','Havan with Nakshatra‑specific mantras','Name whispered into right ear','Aligns identity with cosmic blueprint'],color:'#2563EB'},
                {num:'02',title:'Vyavsay Namakaran (Business & Brand Naming)',desc:'A business, like a person, has a birth moment — incorporation date and time. Vyavsay Namakaran applies identical Nakshatra naming principles to businesses, brands, products. Vastuvid has named hundreds of businesses guiding each through the complete protocol.',features:['Incorporation date Nakshatra','Business syllable from 108 options','Brand name vibration analysis','Logo & domain name alignment','Muhurat for business launch'],color:'#7C3AED'},
                {num:'03',title:'Business Numerology (12‑Point Audit)',desc:'Comprehensive 12‑point business numerology audit: name number, incorporation date, office address digits, phone numbers, website domain. Identifies which numbers support growth and which create hidden obstacles. Corrective adjustments prescribed.',features:['12‑point business numerology audit','Name number compatibility check','Phone & address digit analysis','Pricing structure alignment','Launch & event date Muhurat'],color:'#0891B2'},
                {num:'04',title:'Nakshatra Pada Syllable Matching (108 Sacred Sounds)',desc:'Complete 27 Nakshatras × 4 Padas = 108 syllable system. Each syllable carries specific vibrational frequency harmonising with cosmic energy. Ashwini: Chu, Che, Cho, La. Bharani: Lee, Lu, Le, Lo. Krittika: A, I, U, E. And so on for all 27 Nakshatras. Navamsha (D‑9 chart) cross‑reference for deeper spiritual alignment.',features:['All 27 Nakshatras with 4 Padas','108 sacred syllables mapped','Navamsha (D‑9 chart) cross‑reference','Physical and spiritual alignment','Direct from Brihat Parashara Hora Shastra'],color:'#D97706'},
                {num:'05',title:'Muhurat for Namakaran (Auspicious Timing for Naming)',desc:'Nakshatra‑aligned Muhurat calculation considering Tithi, Vaar, and planetary transits. Current Dasha period integration. Performing ceremony at correct Muhurat multiplies name\'s positive effects; poorly timed ceremony can diminish them.',features:['Nakshatra‑aligned Muhurat','Tithi and Vaar consideration','Planetary transit analysis','Dasha period integration','Ceremony ritual guidance'],color:'#059669'},
                {num:'06',title:'Name Correction for Adults (Gradual Transition Protocol)',desc:'Adults whose names were given without Nakshatra consultation may experience persistent challenges. Original name retained as middle/secondary name while new Nakshatra‑aligned primary name introduced. Gradual 3‑6 month transition allowing energy field adaptation.',features:['Nakshatra calculation from birth','New syllable selection','Gradual transition protocol','Legal name change guidance','3‑6 month monitored adaptation'],color:'#DC2626'},
              ].map((p,i)=>(
                <div key={i} className={`flex flex-col ${i%2===0?'lg:flex-row':'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start`}>
                  <div className="lg:w-1/3 flex-shrink-0">
                    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/90 via-white/70 to-white/50 backdrop-blur-md border border-prakash-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-center">
                      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" style={{backgroundColor:p.color}}/>
                      <div className="text-6xl font-bold mt-4 mb-2" style={{color:p.color}}>{p.num}</div>
                      <h3 className="font-serif text-xl text-nidra-indigo font-bold">{p.title.split('(')[0].trim()}</h3>
                      <p className="text-xs text-nidra-indigo/50 mt-1">{p.title.match(/\(.*?\)/)?.[0]?.replace(/[()]/g,'')}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-nidra-indigo/70 leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">{p.features.map((f,j)=><span key={j} className="text-xs px-3 py-1.5 rounded-full border" style={{borderColor:p.color+'30',backgroundColor:p.color+'08',color:p.color}}>{f}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE 27 NAKSHATRA SYLLABLE CHART ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">108 Sacred Syllables</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">27 Nakshatras – Complete Syllable Chart</h2></div>
            <div className="overflow-hidden rounded-2xl border border-prakash-gold/15">
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead><tr className="bg-gradient-to-r from-blue-500/10 to-prakash-gold/10"><th className="py-3 px-2 text-left font-serif text-nidra-indigo">#</th><th className="py-3 px-2 text-left font-serif text-nidra-indigo">Nakshatra</th><th className="py-3 px-2 text-center font-serif text-nidra-indigo">Pada 1</th><th className="py-3 px-2 text-center font-serif text-nidra-indigo">Pada 2</th><th className="py-3 px-2 text-center font-serif text-nidra-indigo">Pada 3</th><th className="py-3 px-2 text-center font-serif text-nidra-indigo">Pada 4</th></tr></thead>
                  <tbody>
                    {[
                      ['1','Ashwini','Chu','Che','Cho','La'],['2','Bharani','Lee','Lu','Le','Lo'],['3','Krittika','A','I','U','E'],['4','Rohini','O','Va','Vi','Vu'],['5','Mrigashira','Ve','Vo','Ka','Ki'],['6','Ardra','Ku','Gha','Ng','Chh'],['7','Punarvasu','Ke','Ko','Ha','Hi'],['8','Pushya','Hu','He','Ho','Da'],['9','Ashlesha','Di','Du','De','Do'],['10','Magha','Ma','Mi','Mu','Me'],['11','Purva Phalguni','Mo','Ta','Ti','Tu'],['12','Uttara Phalguni','Te','To','Pa','Pi'],['13','Hasta','Pu','Sha','Na','Tha'],['14','Chitra','Pe','Po','Ra','Ri'],['15','Swati','Ru','Re','Ro','Ta'],['16','Vishakha','Ti','Tu','Te','To'],['17','Anuradha','Na','Ni','Nu','Ne'],['18','Jyeshtha','No','Ya','Yi','Yu'],['19','Mula','Ye','Yo','Ba','Bi'],['20','Purva Ashadha','Bu','Dha','Bha','Dha'],['21','Uttara Ashadha','Be','Bo','Ja','Ji'],['22','Shravana','Ju','Je','Jo','Gha'],['23','Dhanishta','Ga','Gi','Gu','Ge'],['24','Shatabhisha','Go','Sa','Si','Su'],['25','Purva Bhadrapada','Se','So','Da','Di'],['26','Uttara Bhadrapada','Du','Tha','Jna','Da'],['27','Revati','De','Do','Cha','Chi'],
                    ].map((r,i)=>(<tr key={i} className={i%2===0?'bg-white/40 border-t border-prakash-gold/10':'bg-vastu-stone/20 border-t border-prakash-gold/10'}>{r.map((c,j)=><td key={j} className={j===0?'py-2 px-2 text-nidra-indigo/40 text-xs':j===1?'py-2 px-2 font-medium text-nidra-indigo/80 text-xs':'py-2 px-2 text-center text-prakash-gold font-medium'}>{c}</td>)}</tr>))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-nidra-indigo/40 mt-3 text-center">Source: Brihat Parashara Hora Shastra, Chapters 96‑97; cross‑referenced with DrikPanchang and RVA Astrologers.</p>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#1a1a4e] to-[#0f0f2a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-blue-400/30 via-white/10 to-prakash-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Discover Your Auspicious Name</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Book a consultation with Vastuvid K.K. Nagaich for a complete Namakaran analysis — including Nakshatra calculation, syllable selection, and the sacred naming ceremony. 20+ years of clinical practice, 2 Lakh+ clients worldwide.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-blue-500 via-prakash-gold to-sacred-saffron text-white font-bold rounded-full shadow-[0_10px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_50px_rgba(217,119,6,0.5)] transition-all text-lg">Book Your Namakaran Consultation</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SmoothScroll>
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
    </>
  );
}
