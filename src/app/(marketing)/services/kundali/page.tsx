import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function KundaliAnalysisPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>

        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0020] via-[#1a0050] to-[#0a0020] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.09),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-violet-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Advance Treatments · उन्नत उपचार</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-violet-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Kundali Analysis</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Vedic Nadi Jyotish · Janam Kundali · Vimshottari Dasha · Gochar Transit · Raj & Dhana Yogas · Shadbala · Navagraha Shanti · Gemstone & Rudraksha · Kundali Matching · Business Muhurat</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">9 sacred Kundali analysis practices — performed personally by Vastuvid K.K. Nagaich, 4th generation Vastu Guru, MBA, Ex‑CEO, trained in Nadi Jyotish under direct Guru‑Shishya Parampara, 20+ years of clinical practice.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-violet-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Kundali Consultation</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </div>
        </section>

        {/* ── SIDEREAL ZODIAC ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint of Your Life</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">The Sidereal Zodiac – Nakshatra, Dasha & Karmic Blueprint</h2><p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">Vedic astrology uses the <strong>sidereal zodiac</strong> based on actual star positions. A Janam Kundali integrates 27 Nakshatras, Vimshottari Dasha (120‑year cycle), and karmic indicators revealing your personality, challenges, and destiny.</p></div>
          </div>
        </section>

        {/* ── 9 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 9 Sacred Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Authentic Vedic Kundali Analysis – From Birth Chart to Business Muhurat</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Each practice grounded in Brihat Parashara Hora Shastra (BPHS), Phaladeepika, and Saravali — performed personally by Vastuvid K.K. Nagaich.</p></div>
            <div className="space-y-16">
              {[
                {num:'01',title:'Janam Kundali Creation & 12‑Bhava Analysis',desc:'Full Janam Kundali using exact date, time, place. 15‑20 page report including Lagna Chart, Navamsa Chart, planetary degrees, Vimshottari Dasha timeline. All 12 Bhavas analysed: Self, Wealth, Siblings, Home, Children, Health, Marriage, Longevity, Fortune, Career, Gains, Liberation. All doshas verified.',features:['Exact date/time/place based','15‑20 page printed report','Lagna + Navamsa + degrees','12‑Bhava deep‑dive analysis','All doshas verification'],color:'#FFD700'},
                {num:'02',title:'Shadbala Calculation (Sixfold Planetary Strength)',desc:'BPHS Shadbala measures each planet across six dimensions: Sthana Bala (positional), Dig Bala (directional), Kala Bala (temporal), Cheshta Bala (motional), Naisargika Bala (natural), Drik Bala (aspectual). Score in Rupas. 480+ = strong; <350 = weak. Foundation for all remedy prescriptions.',features:['BPHS 6‑dimension scoring','Sthana+Dig+Kala+Cheshta+Naisargika+Drik','Rupa‑based precise measurement','480+ strong / 350− weak','Foundation for all remedies'],color:'#6366F1'},
                {num:'03',title:'Vimshottari Dasha Period Analysis & Gochar Transits',desc:'120‑year Vimshottari cycle distributed among 9 planets based on Moon\'s nakshatra at birth. Each Mahadasha subdivided into Antardasha, Pratyantardasha, Sookshma Dasha, Prana Dasha — timing events to specific weeks. Gochar analysis of Saturn, Jupiter, Rahu/Ketu for 1‑5 years ahead.',features:['120‑year Dasha cycle','Mahadasha→Antardasha→Pratyantar','BPHS Phaladeepika interpretation','Gochar: Saturn/Jupiter/Rahu‑Ketu 5‑year','Week‑level event timing'],color:'#FF9933'},
                {num:'04',title:'Yogas Identification – 10 Raj & Dhana Yogas',desc:'10 most powerful yogas: Akhand Samrajya Yoga (authority), Neecha Bhanga Raj Yoga (rags‑to‑riches), Dhana Yoga (wealth), Sreenatha Yoga (leadership), Viparita Raja Yoga (triumph over adversity), Gaja Kesari Yoga (wisdom & fame), Parivartana Yoga, Ruchaka Yoga, Bhadra Yoga, Hamsa Yoga. Each time‑activated through specific Dasha periods.',features:['10 Raj & Dhana Yoga identification','Akhand Samrajya, Neecha Bhanga, Gaja Kesari','Time‑activation via Dasha periods','Career, wealth & authority potential','Golden window prediction'],color:'#F59E0B'},
                {num:'05',title:'Nav‑Ratna Gemstone Prescription & Rudraksha Therapy',desc:'Each planet corresponds to a gemstone: Ruby (Sun), Pearl (Moon), Red Coral (Mars), Emerald (Mercury), Yellow Sapphire (Jupiter), Diamond (Venus), Blue Sapphire (Saturn), Hessonite (Rahu), Cat\'s Eye (Ketu). Exact weight, metal, finger, day, mantra prescribed. Rudraksha: 1‑21 Mukhi beads per planetary matching.',features:['Nav‑Ratna: Ruby to Cat\'s Eye','Exact weight, metal, finger, day','Rudraksha: 1‑21 Mukhi matching','Nakshatra‑based Rudraksha','Shadbala‑verified necessity check'],color:'#10B981'},
                {num:'06',title:'Mantra, Yantra & Remedial Puja Prescription',desc:'Planet‑specific mantras: Sun, Moon, Mars, Jupiter, Saturn, Rahu, Ketu. Navagraha Yantra set energised through rituals. Mantra chanting protocol: 48‑day mandala cycles (27 nakshatras × 9 planets × 12 signs). Gemstone + Rudraksha + Mantra integration.',features:['Planet‑specific mantra prescription','Navagraha Yantra energisation','48‑day mandala chanting protocol','Gemstone+Rudraksha+Mantra integration','Rahu‑Ketu special guidance'],color:'#8B5CF6'},
                {num:'07',title:'Kundali Matching (8 Koota 36‑Point Guna Milan)',desc:'8 Kootas: Varna (1pt), Vashya (2pt), Tara (3pt), Yoni (4pt), Graha Maitri (5pt), Gana (6pt), Bhakoot (7pt), Nadi (8pt). 18pt acceptable, 24‑26pt recommended. Mangal & Nadi Dosha separate analysis. Dasha sync + Navamsa chart comparison for complete compatibility.',features:['8 Koota (36‑point) Guna Milan','Nadi(8pt)+Bhakoot(7pt)+Gana(6pt)','18pt acceptable / 24‑26pt recommended','Mangal & Nadi Dosha separate','Dasha sync + Navamsa comparison'],color:'#EC4899'},
                {num:'08',title:'Muhurat Selection – Auspicious Timing for Life & Business',desc:'Electional astrology (Muhurt) for: naming child, education start, marriage, house construction, Griha Pravesh, product launches, hirings, dealmaking. Abhijit Muhurta — 24 minutes at solar noon — the most auspicious daily window. Business Muhurt ensures venture begins under favorable planetary energies.',features:['Abhijit Muhurat: 24‑min daily window','Business launch & product release','Marriage & Griha Pravesh Muhurat','Naming ceremony & education dates','BPHS electional astrology principles'],color:'#06B6D4'},
                {num:'09',title:'Astro Vastu Integration – Personalised Space Design',desc:'Based on date of birth, ruling planet, nakshatra, antar dasha, and maha dasha: most suitable pada for entrance, negative zones, wealth zone, career growth zone, education zone, health zone, bedroom zone, confidence zone, success zone. No two people have exactly the same chart — Astro Vastu is uniquely personalised.',features:['Ruling planet + Nakshatra zone mapping','Personalised entrance pada','Wealth vs negative zone identification','Career, study, health, sleep zones','Individualised — unique per birth chart'],color:'#C10000'},
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

        {/* ── 12 BHAVAS & 9 PLANETS QUICK REFERENCE ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">12 Bhavas & 9 Planets – The Complete Kundali Reference</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {item:'1st House (Tanu)',detail:'Self, personality, physical body, character, fame, Lagna. Ascendant lord most important.',color:'#FFD700'},
                {item:'2nd House (Dhana)',detail:'Wealth, family, speech, food, accumulated assets. Venus and Jupiter bring financial abundance.',color:'#10B981'},
                {item:'3rd House (Sahaja)',detail:'Siblings, courage, communication, short journeys. Mars here gives fearless initiative.',color:'#FF9933'},
                {item:'4th House (Bandhu)',detail:'Mother, home, property, vehicle, emotional foundation. Moon strengthens domestic life.',color:'#06B6D4'},
                {item:'5th House (Putra)',detail:'Children, intellect, romance, past‑life merit. Jupiter creates Putra Yoga for progeny.',color:'#F59E0B'},
                {item:'6th House (Ripu)',detail:'Health, disease, enemies, debt, daily routine. Strong Saturn defeats competition.',color:'#EF4444'},
                {item:'7th House (Kalatra)',detail:'Marriage, partnership, business alliances, spouse traits. Venus creates enduring relationships.',color:'#EC4899'},
                {item:'8th House (Ayush)',detail:'Longevity, transformation, research, occult, inheritance. Dusthana — challenges catalysing growth.',color:'#8B5CF6'},
                {item:'9th House (Bhagya)',detail:'Fortune, dharma, guru, long journeys, higher learning. Trikona — house of divine grace.',color:'#6366F1'},
                {item:'10th House (Karma)',detail:'Career, profession, status, authority, public image. Kendra — power house for achievement.',color:'#C10000'},
                {item:'11th House (Labha)',detail:'Gains, income, aspirations, network. Upachaya — house that improves with time and effort.',color:'#D97706'},
                {item:'12th House (Vyaya)',detail:'Expenditure, foreign travel, liberation, isolation, spiritual practice. Ketu gives meditative tendencies.',color:'#0891B2'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.item}</h3><p className="text-xs text-nidra-indigo/60 mt-1">{item.detail}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── VEDIC REMEDIES ── */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Vedic Remedies</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">6 Planetary Correction Methods – Personalised to Your Shadbala</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {title:'Gemstone Prescription',desc:'Specific weight (ratti), metal, finger, day, and energising mantra for each of the 9 planets.',color:'#FFD700'},
                {title:'Rudraksha Therapy',desc:'1 to 21 Mukhi beads based on Nakshatra, current Dasha, and afflicted houses.',color:'#10B981'},
                {title:'Mantra Japa',desc:'Planet‑specific mantras for 48‑day mandala cycles. 108, 1,008, or 10,008 repetitions.',color:'#6366F1'},
                {title:'Yantra Installation',desc:'Navagraha Yantra set energised and placed at precise directions. Unique geometry per purpose.',color:'#FF9933'},
                {title:'Navagraha Shanti Havan',desc:'Pacifies planetary afflictions, strengthens benefic planets, increases positive influence.',color:'#C10000'},
                {title:'Colour, Charity & Fasting',desc:'Colour therapy per planet. Saturday fasting for Saturn. Donation of specific weekday items.',color:'#8B5CF6'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.title}</h3><p className="text-xs text-nidra-indigo/60">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0020] via-[#1a0050] to-[#0a0020] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-violet-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Let Vastuvid K.K. Nagaich Read Your Cosmic Blueprint</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Book a private Kundali consultation covering all 9 sacred practices — performed personally by a 4th‑generation Vastu Guru, MBA, Ex‑CEO, trained in Nadi Jyotish under direct Guru‑Shishya Parampara, with 20+ years of clinical practice and 2 Lakh+ clients worldwide.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-violet-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">Schedule Your Kundali Consultation →</Link>
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
