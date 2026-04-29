import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function CrystalColorTherapyPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>

        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#2d1050] to-[#1a0a2e] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.12),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-violet-400/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-emerald-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Advance Treatments · उन्नत उपचार</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-violet-300 via-emerald-300 to-prakash-gold bg-clip-text text-transparent">Crystal & Color Therapy</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Crystal Grids (Amethyst, Clear Quartz, Black Tourmaline, Rose Quartz, Citrine) · Colour Directional Therapy · Elemental Balancing · Chakra‑Aligned Placement · Room‑by‑Room Colour Prescriptions · EMF Absorption · Emotional & Physical Harmonisation</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">Sacred crystal and colour energy correction — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO — for homes, offices, healing spaces, and spiritual sanctuaries.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-violet-500 via-emerald-500 to-prakash-gold text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Crystal & Colour Consultation</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </div>
        </section>

        {/* ── CRYSTAL + COLOR SCIENCE ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Science of Light & Earth</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Crystal Vibrations & Colour Frequencies – The Two Gentle Giants of Vastu Correction</h2><p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">Crystals vibrate at specific frequencies — amethyst at 432 Hz for neurological calm, clear quartz at 528 Hz for cellular repair, black tourmaline at 396 Hz for EMF absorption. Each colour wavelength corresponds to a directional element, forming a complete non‑demolition energy‑correction system.</p></div>
          </div>
        </section>

        {/* ── 9 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Sacred Crystal & Colour Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Authentic Crystal Grid & Colour Therapy for Elemental Harmony</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Each practice deploys specific crystals and precise colour wavelengths selected by Vastuvid K.K. Nagaich.</p></div>
            <div className="space-y-16">
              {[
                {num:'01',title:'The 5‑Element Crystal Grid (Pancha Mahabhuta Crystal Array)',desc:'5 crystals for 5 elements at 5 directional zones: Clear Quartz NE (Water, spiritual amplification), Citrine SE (Fire, abundance), Black Tourmaline SW (Earth, grounding), Aquamarine NW (Air, communication), Amethyst Centre (Space, universal harmony). Each geometrically cut and planetary mantra energised. Annual re‑energisation only.',features:['5 crystals for 5 elements','Clear Quartz NE, Citrine SE, Black Tourmaline SW','Aquamarine NW, Amethyst Centre','Geometrically cut & mantra energised','Annual re‑energisation only'],color:'#8B5CF6'},
                {num:'02',title:'Black Tourmaline EMF & Geopathic Stress Absorption Protocol',desc:'The single most effective crystal for EMF absorption and geopathic stress neutralisation. One Black Tourmaline in each corner of every room creates an EMF absorption grid. Beside Wi‑Fi routers and electrical panels. Natural self‑discharge — no monthly cleansing. Replace every 12‑18 months upon saturation.',features:['One per room corner – complete EMF grid','Beside Wi‑Fi router & electrical panel','Natural self‑discharge – no monthly cleansing','Replace every 12‑18 months upon saturation','Also neutralises geopathic stress radiation'],color:'#111111'},
                {num:'03',title:'Amethyst Clusters for Sleep Quality & Neurological Calm',desc:'Amethyst clusters — the crystal form with highest vibrational surface area — placed on bedside table (left side) or under bed in SW corner. Measurably improves sleep onset, reduces nightmares, deepens REM cycles. NE corner amethyst amplifies spiritual clarity. Children\'s NW amethyst reduces hyperactivity. Moonlight cleansing monthly.',features:['Bedside amethyst cluster for sleep','NE corner amethyst for spiritual clarity','Children\'s NW amethyst for hyperactivity','Moonlight cleansing monthly','Highest vibrational surface area'],color:'#7C3AED'},
                {num:'04',title:'Rose Quartz Relationship & Emotional Healing Grid',desc:'Rose Quartz sphere in SW master bedroom activates love frequency and harmonises relationship energy. Dual bedside Rose Quartz balances masculine‑feminine energies. Singles: SW Rose Quartz for partnership attraction. Living room East/NE cluster for family harmony. Moonlight cleansing + Sankalpa re‑energisation.',features:['SW master bedroom sphere for harmony','Dual bedside for masculine‑feminine balance','Singles: SW for partnership attraction','Living room E/NE for family harmony','Moonlight + Sankalpa intention'],color:'#EC4899'},
                {num:'05',title:'Clear Quartz Master Amplifier – Brahmasthan & Directional Grid',desc:'Clear Quartz is the programmable master amplifier storing and transmitting any intention. Brahmasthan master crystal coordinates all other crystals. 4 cardinal points: N (wealth), E (health), S (protection), W (creativity). Mantra‑specific programming for each directional point. Monthly sunlight cleansing 3‑4 hours.',features:['Brahmasthan master – grid coordinator','4 cardinal points: N, E, S, W','Mantra‑specific directional programming','Monthly sunlight cleansing (3‑4h)','Programmable – stores any intention'],color:'#E2E8F0'},
                {num:'06',title:'Directional Colour Therapy – Room‑by‑Room Prescription Protocol',desc:'NE: white, cream, light yellow, pale blue (Water). SE: warm orange, peach, terracotta, pink (Fire). SW: earthy browns, warm beige, pastel peach (Earth). NW: light grey, sky blue, soft silver (Air). Centre: white, cream, light yellow (Space). A fresh coat of paint in the prescribed colour can activate a weak zone within 48 hours.',features:['NE: white, cream, pale blue (Water)','SE: warm orange, peach, pink (Fire)','SW: earthy browns, beige (Earth)','NW: light grey, sky blue (Air)','Centre: white, cream (Space – neutral)'],color:'#FFD700'},
                {num:'07',title:'Chakra‑Aligned Crystal Placement for Physical & Energetic Wellness',desc:'7 chakras → 7 directional zones → 7 crystals. Root‑SW (Red Jasper), Sacral‑W (Carnelian), Solar‑C (Citrine), Heart‑E (Rose Quartz), Throat‑N (Blue Lace Agate), Third Eye‑NE (Amethyst), Crown‑Brahmasthan (Clear Quartz). Silent 24‑hour healing environment.',features:['7 chakras → 7 zones → 7 crystals','Root‑SW, Sacral‑W, Solar‑C, Heart‑E','Throat‑N, Third Eye‑NE, Crown‑Brahmasthan','24‑hour silent healing environment'],color:'#10B981'},
                {num:'08',title:'Crystal & Colour Integration Protocol – The Combined Amplification Effect',desc:'Combined deployment is multiplicative. Citrine + peach walls in SE = 3× fire element amplification. Clear Quartz + cream NE = balanced spiritual energy. Avoid: Amethyst in red room = energetic dissonance. Full elemental audit before any crystal‑colour pairing ensures therapies amplify rather than cancel.',features:['Combined deployment = multiplicative','Citrine + peach walls = 3× fire amplification','Clear Quartz + cream NE = balanced spiritual','Avoid: Amethyst in red room = dissonance','Full elemental audit before any pairing'],color:'#FF9933'},
                {num:'09',title:'Crystal Maintenance, Cleansing & Annual Re‑Energisation Protocol',desc:'Black Tourmaline: replace every 12‑18 months (EMF saturation). Clear Quartz & Amethyst: monthly moonlight cleansing. Rose Quartz: moonlight only (no sunlight, no salt water). Citrine: never requires cleansing (self‑discharging). Annual Vastu Shanti Havan collective re‑energisation for all crystals.',features:['Black Tourmaline: replace 12‑18 months','Clear Quartz & Amethyst: monthly moonlight','Rose Quartz: moonlight only','Citrine: never requires cleansing','Annual Vastu Shanti Havan re‑energisation'],color:'#6366F1'},
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

        {/* ── CRYSTAL & COLOR QUICK REFERENCE ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Crystal & Colour Reference Matrices — Room by Room, Direction by Direction</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {entity:'Northeast (Ishanya)',color:'Soft white, cream, pale yellow, light blue',crystal:'Clear Quartz, Amethyst, Sodalite',purpose:'Spiritual amplification, mental clarity, divine connection.',colorHex:'#FEF3C7'},
                {entity:'East',color:'White, light green, pale blue, cream',crystal:'Green Aventurine, Rose Quartz, Aquamarine',purpose:'Health, growth, new beginnings.',colorHex:'#ECFDF5'},
                {entity:'Southeast (Agneya)',color:'Warm orange, peach, terracotta, soft pink',crystal:'Citrine, Carnelian, Red Jasper',purpose:'Fire activation, cash flow, metabolism.',colorHex:'#FED7AA'},
                {entity:'South',color:'Coral red, soft pink, peach, light maroon',crystal:'Red Coral, Garnet, Carnelian',purpose:'Fame, recognition, social standing.',colorHex:'#FECACA'},
                {entity:'Southwest (Nairutya)',color:'Earthy browns, warm beige, pastel peach, light pink',crystal:'Black Tourmaline, Smoky Quartz, Hematite',purpose:'Stability, relationships, grounding.',colorHex:'#FDE68A'},
                {entity:'West',color:'Light blue, silver, grey, white, pale pink',crystal:'Blue Lace Agate, Lapis Lazuli, Aquamarine',purpose:'Creativity, children, learning.',colorHex:'#E0F2FE'},
                {entity:'Northwest (Vayavya)',color:'Sky blue, light grey, soft silver, pale green',crystal:'Amazonite, Fluorite, Labradorite',purpose:'Communication, movement, client flow.',colorHex:'#F0F9FF'},
                {entity:'North (Kubera)',color:'Light green, pale blue, soft yellow, white',crystal:'Pyrite, Green Jade, Citrine',purpose:'Wealth, career, opportunities.',colorHex:'#D1FAE5'},
                {entity:'Centre (Brahmasthan)',color:'White, cream, light yellow — neutral palette',crystal:'Clear Quartz (master), Selenite, Moonstone',purpose:'Universal balance, harmony, cosmic connection.',colorHex:'#FFFBEB'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="flex items-center gap-2 mb-2"><div className="w-4 h-4 rounded-full" style={{backgroundColor:item.colorHex}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.entity}</h3></div><p className="text-xs text-nidra-indigo/50 mt-1"><strong>Colours:</strong> {item.color}</p><p className="text-xs text-nidra-indigo/50 mt-1 mb-2"><strong>Crystals:</strong> {item.crystal}</p><p className="text-xs text-nidra-indigo/60">{item.purpose}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#2d1050] to-[#1a0a2e] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-violet-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Let Vastuvid K.K. Nagaich Design Your Crystal & Colour Grid</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Every space has a unique elemental signature. Book a private Crystal & Color Therapy consultation — performed personally by a 4th‑generation Vastu Guru, MBA, Ex‑CEO with 20+ years of clinical practice and 2 Lakh+ clients worldwide.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-violet-500 via-emerald-500 to-prakash-gold text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">Schedule Your Crystal & Colour Consultation →</Link>
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
