import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function PyramidologyPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>

        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.10),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-amber-300/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Advance Treatments · उन्नत उपचार</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-amber-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Pyramidology</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Copper Pyramid Grids · Brass Pyramid Arrays · Crystal Pyramid Placement · 9‑Pyramid Cosmic Energy Array · Bedroom & Workplace Installations · Dosha Zone Correction · Health & Wealth Amplification</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">Sacred pyramid energy correction — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO — for homes, offices, factories, and spiritual spaces.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-amber-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Pyramid Consultation</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </div>
        </section>

        {/* ── PYRAMID SCIENCE ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Geometry of Power</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Pyramid Architecture – The World's Most Powerful Energy‑Amplification Structure</h2><p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">The pyramid shape is a proven energy‑amplification geometry. Copper pyramids are the most powerful non‑structural Vastu remedy — the apex absorbs geopathic forces from all eight directions, stores in its centre, and neutralises effects.</p></div>
          </div>
        </section>

        {/* ── 9 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Sacred Pyramid Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Authentic Pyramidology for Vastu Correction & Energy Amplification</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Each practice deploys precision‑engineered pyramids — copper for grounding, brass for prosperity, crystal for emotional balance.</p></div>
            <div className="space-y-16">
              {[
                {num:'01',title:'The 9‑Pyramid Cosmic Energy Array – Whole‑House Correction',desc:'Nine energised copper pyramids installed at pre‑determined geometric points across the property creating a cosmic energy grid. Centre + 4 corners + 4 entrances. Complete dosha neutralisation. Permanent — no ongoing maintenance.',features:['9 copper pyramids at geometric points','Centre + 4 corners + 4 entrances','Complete whole‑house dosha neutralisation','Cosmic prana field generation','Permanent — no ongoing maintenance'],color:'#FFD700'},
                {num:'02',title:'Copper Pyramid (Tamba) – Earth Element & Grounding',desc:'Copper is an excellent electrical conductor. Copper pyramids placed at dosha points absorb and redirect negative earth energies, creating a Faraday‑type protective field. Best in SW for stability, SE for fire activation, under bed for deep sleep.',features:['Electrical conductor – earth grounding','SW zone for stability & relationships','Under‑bed placement for sleep','Geopathic stress neutralisation','Faraday‑type protective field'],color:'#C88A5D'},
                {num:'03',title:'Brass Pyramid (Peetal) – Space Element & Financial Activation',desc:'Brass pyramids amplify the space (Akash) element, governing prosperity and expansion. Placed in North (Kuber zone) for wealth, NW for communication, above cash counter for commercial spaces.',features:['Akash (space) element amplification','North zone for wealth & career','NW zone for communication','Above cash counters in offices','Amplification hub for copper arrays'],color:'#10B981'},
                {num:'04',title:'Crystal Pyramid (Sphatik) – Emotional Balance & NE Activation',desc:'Crystal pyramids activate the Northeast (Ishanya) — the most sacred zone governed by Jupiter and water element. Enhances spiritual connection, clarity, emotional equilibrium. Recommended for meditation rooms and study areas.',features:['NE (Ishanya) zone spiritual activation','Jupiter + water element alignment','Emotional equilibrium & clarity','Children\'s study & creativity zones','Harmonising complement to copper arrays'],color:'#8B5CF6'},
                {num:'05',title:'Parad (Mercury) Pyramid – Most Potent Dosha Neutraliser',desc:'Solidified liquid mercury — the most powerful Vastu dosha neutraliser. Parad pyramids balance and harmonise the aura, abolishing negative energy from severe defects. Used for NE toilets, under‑staircases, illness‑prone spaces.',features:['Solidified mercury – most potent remedy','Severe defect neutralisation (NE toilet)','Aura harmonisation & negativity abolition','Mantra‑energised before placement','For spaces with illness/financial distress'],color:'#C0C0C0'},
                {num:'06',title:'Bedroom & Sleep‑Zone Pyramid Placement Protocol',desc:'Copper pyramid under mattress aligned to magnetic north improves sleep quality, reduces anxiety, neutralises geopathic stress below the bed. Crystal pyramid on bedside calms mind. Dual pyramids for couples balance.',features:['Under‑mattress copper pyramid','Magnetic north alignment for sleep','Crystal on bedside for mental calm','Dual pyramids for relationship harmony','Children\'s NW brass pyramid for grounding'],color:'#EC4899'},
                {num:'07',title:'Commercial & Workplace Pyramid Deployment',desc:'Owner cabin: brass pyramid SW facing NE. Accounts: copper pyramid SE for fire element. Reception: crystal pyramid NE for first impressions. Dispatch: brass pyramid NW for swift movement. Measurable sales & profit increases reported.',features:['Owner cabin: brass pyramid SW→NE','Accounts: copper pyramid SE','Reception: crystal pyramid NE','Dispatch: brass pyramid NW','Measurable sales & profit increases'],color:'#FF9933'},
                {num:'08',title:'Pyramid Yantra Grid – Combined Pyramid + Sacred Geometry',desc:'Copper pyramid above Vastu Purusha Yantra (alignment). Brass pyramid above Shri Yantra (wealth). Crystal pyramid above Navagraha Yantra (planetary balance). Multi‑dimensional energy correction at physical + metaphysical levels.',features:['Copper pyramid + Vastu Purusha Yantra','Brass pyramid + Shri Yantra for wealth','Crystal pyramid + Navagraha Yantra','Physical + metaphysical energy layers','Most comprehensive non‑structural remedy'],color:'#6366F1'},
                {num:'09',title:'Pyramid Maintenance, Re‑Energisation & Annual Renewal',desc:'Pyramids accumulate absorbed negative energy. Copper/brass: monthly salt‑water cleansing + 3‑4 hours sunlight discharge. Crystal: moonlight cleansing. Annual Vastu Shanti Havan re‑energisation. 6‑month pyramid rotation recommended.',features:['Monthly salt‑water cleansing for Cu/Brass','Sunlight discharge: 3‑4 hours','Crystal pyramid moonlight cleansing','Annual Vastu Shanti Havan re‑energisation','6‑month pyramid rotation recommended'],color:'#F59E0B'},
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

        {/* ── PYRAMID TYPES QUICK REFERENCE ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Pyramid Material Guide – Which Pyramid for Which Purpose?</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {material:'Copper Pyramid',element:'Earth (Prithvi)',uses:'Grounding, stability, geopathic stress neutralisation, under‑bed, SW corner, heavy machinery. EMF protection.',color:'#C88A5D'},
                {material:'Brass Pyramid',element:'Space (Akash)',uses:'Wealth attraction, Kuber zone, cash counter, business premises, communication zones, NW placement.',color:'#FFD700'},
                {material:'Crystal Pyramid',element:'Water (Jal)',uses:'Spiritual connection, emotional balance, NE zone, meditation room, children\'s study. Calming energies.',color:'#8B5CF6'},
                {material:'Parad Pyramid',element:'All Elements',uses:'Most potent dosha neutraliser. Severe defects, illness‑prone spaces, financial distress, negative energy abolition.',color:'#C0C0C0'},
                {material:'9‑Pyramid Array',element:'All 5 Elements',uses:'Whole‑house correction. Centre + 4 corners + 4 entrances. Complete dosha neutralisation. Permanent energy grid.',color:'#FF9933'},
                {material:'Pyramid‑Yantra Grid',element:'All + Metaphysical',uses:'Copper + Vastu Purusha Yantra. Brass + Shri Yantra. Crystal + Navagraha Yantra. Multi‑dimensional correction.',color:'#6366F1'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.material}</h3><p className="text-xs text-nidra-indigo/50 mt-1 mb-2"><strong>Element:</strong> {item.element}</p><p className="text-xs text-nidra-indigo/60">{item.uses}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── DOCUMENTED BENEFITS ── */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Documented Benefits</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Clinically Observed Benefits of Pyramid Therapy</h2></div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {benefit:'Improved Sleep Quality',detail:'Copper pyramids under mattress neutralise geopathic stress. Pyramidal copper energy re‑balances energies promoting deep, peaceful sleep.',color:'#10B981'},
                {benefit:'Reduced Anxiety & Mental Clarity',detail:'Crystal pyramids in NE corner or meditation space create calming environment. Pyramid acts as cosmic antenna absorbing mental noise.',color:'#8B5CF6'},
                {benefit:'Financial Flow & Opportunity',detail:'Brass pyramids in North (Kuber zone) activate wealth energy. Documented across multiple commercial Vastu consultations.',color:'#FFD700'},
                {benefit:'Geopathic Stress Neutralisation',detail:'Copper pyramids and rods create Faraday‑type protective field. 92% of cancer patients in Dr. Nieper\'s study were geopathically stressed.',color:'#C10000'},
                {benefit:'Relationship Harmony',detail:'Dual copper pyramids on either side of bed align energy fields of both partners. SW brass pyramid stabilises earth element.',color:'#EC4899'},
                {benefit:'Dosha Correction Without Demolition',detail:'Parad pyramid placed above NE toilet permanently neutralises dosha on energetic plane — without relocating or breaking walls.',color:'#C88A5D'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.benefit}</h3><p className="text-xs text-nidra-indigo/60">{item.detail}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-amber-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Let Vastuvid K.K. Nagaich Design Your Pyramid Energy Grid</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Book a private Pyramidology consultation — performed personally by a 4th‑generation Vastu Guru, MBA, Ex‑CEO with 20+ years of clinical practice and 2 Lakh+ clients worldwide.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-amber-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">Schedule Your Pyramid Consultation →</Link>
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
