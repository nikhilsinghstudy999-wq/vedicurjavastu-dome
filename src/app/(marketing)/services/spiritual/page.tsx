import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function SpiritualSpacesPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>

        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0020] via-[#1a0040] to-[#0a0020] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.07),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-violet-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Extensive Framework · विस्तृत ढांचा</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-violet-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Spiritual Spaces</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Pratima Vastu · Prateek Vastu · Poojan & Havan · Havanlogy · Devata Vastu · Vastu Shanti · Meditation & Yoga Space Design · Temple Architecture</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">9 sacred spiritual Vastu practices for temples, meditation halls, pooja rooms, yoga studios & retreats — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-violet-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Spiritual Audit</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </div>
        </section>

        {/* ── VASTU PURUSHA MANDALA ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint for Worship</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">The Vastu Purusha Mandala – 81‑Grid Spiritual Architecture</h2><p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">For temples and sacred spaces, the Paramasayika Mandala (9×9 grid) places the Garbhagriha at the Brahmasthan. NE (Ishanya) is governed by Jupiter and the Water element — the abode of divine energy.</p></div>
          </div>
        </section>

        {/* ── 9 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 9 Sacred Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Authentic Vedic Practices for Temples, Pooja Rooms & Meditation Spaces</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Each practice performed at an astrologically determined Muhurta.</p></div>
            <div className="space-y-16">
              {[
                {num:'01',title:'Pratima Vastu (Idol & Deity Placement)',desc:'Idols face West so devotee faces East. Ganesha, Durga, Lakshmi face West. Shiva Linga tip faces East. Hanuman faces South. Idols 2‑9 inches on raised platform, 1‑inch gap from wall. Eyes at devotee chest level. Marble preferred; avoid clay, plastic, glass. Brihat‑samhita Chapter 60: idol installation in temples.',features:['West‑facing idols','1‑inch gap from wall','2‑9 inch idol height','Chest‑level eye placement','Marble idols preferred'],color:'#FFD700'},
                {num:'02',title:'Prateek Vastu (Sacred Symbol Placement)',desc:'9 powerful symbols: Swastik (good fortune), Om (cosmic vibration), Lotus (purity), Trishul (protection), Namaste, Conch, Kalash, Fish, Lamp. Trishakti Yantra (Om+Swastik+Trishul) above main door. Shri Yantra in East/NE worshipped regularly. Symbols balance Pancha Mahabhutas.',features:['Swastik at front gate','Om in meditation corners','Trishakti above main door','Shri Yantra in E/NE','9 symbols balance 5 elements'],color:'#C88A5D'},
                {num:'03',title:'Devata Vastu (Deity Placement & Temple Architecture)',desc:'NE corner primary placement. Morning sunlight enters — considered pure and energizing. Low ceiling with pyramid‑shaped roof. Wooden structure preferred. Double‑shutter doors. Brahmasthan also sacred for mandir. Never South, basement, behind toilet, or under staircase.',features:['NE corner primary','Pyramid/gopura ceiling','Wooden structure','Double‑shutter doors','Never South/basement/stairs'],color:'#FF9933'},
                {num:'04',title:'Poojan & Havan (Sacred Fire Rituals)',desc:'Havan cleanses aura of the house. Ghee, herbs, sacred materials offered into fire with Vedic mantras. Fire destroys harmful bacteria. Includes Ganapati Poojan, Navagraha Shanti, Kalash Poojan, Havan, Mangal Aarti. Agni bestows health, wealth, peace, prosperity.',features:['Ghee & herb Havan','Ganapati & Navagraha','Kalash Sthapana','Medicinal smoke disinfection','Mangal Aarti conclusion'],color:'#C10000'},
                {num:'05',title:'Havanlogy (The Science of Fire Rituals)',desc:'Thermal energy of fire as drug delivery system. Smoke from ghee, samagri, wood creates pesticide effect removing airborne bacteria. Ash enriches soil. 40‑herb Vastu Shanti samagri. Purpose‑specific compositions: Vastu Shanti, Griha Pravesh, Navagraha, Lakshmi Havan.',features:['Thermal energy purification','40‑herb Vastu Shanti samagri','Airborne bacteria elimination','Drug delivery via smoke','Purpose‑specific samagri'],color:'#EF4444'},
                {num:'06',title:'Vastu Shanti Puja (Space Energisation)',desc:'Pacifies Vastu Purush. Ganapati, Navagraha, Kalash Poojan, Havan, Mangal Aarti. Vastu Shanti Mantra invokes acceptance, health, happiness. Balances five elements. Transforms space into sanctuary of positive energy and divine protection.',features:['Vastu Purush pacification','Ganapati+Navagraha+Kalash','Sacred Havan with mantras','Five‑element balancing','Vastu dosha neutralisation'],color:'#8B5CF6'},
                {num:'07',title:'Meditation & Yoga Space Design',desc:'NE or centre ideal for meditation and yoga. Water element zone — fountain or flowers in glass bowl. Natural daylight uplifts mood. Soft blues, greens, pastels. Natural materials: silk, cotton, wool, wood, bamboo. Beeswax candles purify air. Shoes removed before entering. Altar in NE honors divine.',features:['NE or centre location','Water feature in NE','Soft blue/green/pastel','Natural materials','Clutter‑free & shoes removed'],color:'#10B981'},
                {num:'08',title:'Temple Construction (Garbhagriha, Mandapa & Shikhara)',desc:'Garbhagriha at magnetic north centre. Shikhara rises above with golden ratio. Mandapa with Navagraha column grid (9 squares). Parikrama circumambulatory path. Nagara or Dravida style per Shilpa Shastras and Vastu Sastras.',features:['Garbhagriha at magnetic N','Mandapa with Navagraha grid','Shikhara golden ratio','Parikrama path','Shilpa+Vastu Sastra compliant'],color:'#6366F1'},
                {num:'09',title:'Spiritual Space Maintenance & Daily Ritual Protocol',desc:'Diya lit morning and evening. Kalash water changed daily before 9 AM. Fresh flowers daily — marigold, lotus, jasmine, rose. Camphor or sandalwood incense during aarti. Brass bell rung. NE immaculately clean — wipe with salt water. Broken idols replaced immediately. Pooja room exclusively for spiritual practices.',features:['Diya morning & evening','Daily Kalash water change','Fresh flowers daily','Brass bell during aarti','Exclusive spiritual use'],color:'#F59E0B'},
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

        {/* ── POOJA ROOM DIRECTION GUIDE ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Pooja Room Direction & Idol Placement Guide</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {item:'Best Location',detail:'Northeast (Ishan Kona). East or North acceptable. Centre (Brahmasthan) also auspicious.',color:'#FFD700'},
                {item:'Avoid Locations',detail:'South, Southeast, bathroom‑adjacent, under staircase, basement, bedroom. Never share wall with toilet.',color:'#EF4444'},
                {item:'Pooja Room Structure',detail:'Low ceiling with pyramid roof. Wooden double‑shutter doors. Threshold at entrance. Square or rectangular.',color:'#10B981'},
                {item:'Idol Facing Direction',detail:'Ganesha/Lakshmi/Durga face West. Shiva Linga tip East. Hanuman South. Idols 1 inch from wall on raised platform.',color:'#FF9933'},
                {item:'Idol Size & Material',detail:'2‑9 inches. Eyes at chest level. Marble preferred. Avoid clay, plastic, glass. Never broken idols.',color:'#8B5CF6'},
                {item:'Colours & Lighting',detail:'White, light yellow, light blue, cream. Soft natural light. Ghee diya morning & evening.',color:'#06B6D4'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.item}</h3><p className="text-xs text-nidra-indigo/60 mt-1">{item.detail}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── SACRED SYMBOLS TABLE ── */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Sacred Symbols</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">The 9 Most Powerful Vastu Symbols — Where and Why</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {symbol:'Swastik',direction:'Front gate / Main door',purpose:'Security, good fortune, divine protection. Red or yellow.',color:'#EF4444'},
                {symbol:'Om',direction:'Pooja room / Meditation corner',purpose:'Cosmic vibration, spiritual grounding, emotional equilibrium.',color:'#FFD700'},
                {symbol:'Trishul',direction:'Above main door / Pooja room',purpose:'Protection from divine, physical, mental afflictions.',color:'#6366F1'},
                {symbol:'Shri Yantra',direction:'East or Northeast',purpose:'Wealth manifestation, financial obstacle removal.',color:'#FF9933'},
                {symbol:'Kalash',direction:'Main entrance / Pooja room',purpose:'Fertility, prosperity, auspicious beginning with coconut and mango leaves.',color:'#10B981'},
                {symbol:'Lotus',direction:'Northeast direction',purpose:'Purity, enlightenment, renewal, creativity.',color:'#EC4899'},
                {symbol:'Tortoise',direction:'North (metal) / SW (crystal)',purpose:'Stability, longevity, protection. Resilience symbol.',color:'#06B6D4'},
                {symbol:'Fish',direction:'North direction',purpose:'Career development, financial improvement, abundance.',color:'#F59E0B'},
                {symbol:'Conch (Shankh)',direction:'Pooja room / NE corner',purpose:'Sound purification, negative energy dispersion.',color:'#C88A5D'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.symbol}</h3><p className="text-xs text-nidra-indigo/50 mt-1 mb-2"><strong>Place:</strong> {item.direction}</p><p className="text-xs text-nidra-indigo/60">{item.purpose}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── REMEDIES WITHOUT DEMOLITION ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Non‑Invasive Corrections</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Remedies for Spiritual Space Doshas</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {title:'Pooja Room Wrong Direction',desc:'Copper pyramid in NE corner. Mirror on N/E wall. Vastu yantra for energy balance. Immaculately clean.',color:'#FFD700'},
                {title:'Pooja Room Under Staircase',desc:'Copper pyramid between staircase and ceiling. Crystal grid in NE of mandir. Brightly lit. Brass Vastu plate beneath.',color:'#C88A5D'},
                {title:'Sharing Wall with Toilet',desc:'Copper pyramid on shared wall. Toilet door closed. Vastu Purush Yantra in NE. No cleaning supplies near pooja space.',color:'#EF4444'},
                {title:'Broken/Improper Idols',desc:'Immediately replace. Gangajal purification. Copper Kalash in front of mandir. Vastu Shanti mantras.',color:'#FF9933'},
                {title:'Dark/Poorly Ventilated',desc:'Soft yellow lighting or oil lamp daily. Exhaust fan. Ghee lamp at sunrise and sunset. Strategic mirrors.',color:'#10B981'},
                {title:'Cluttered Mandir',desc:'Avoid two same‑deity idols. Exclusive spiritual use. Closed cabinets below platform for discreet storage.',color:'#8B5CF6'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.title}</h3><p className="text-xs text-nidra-indigo/60">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0020] via-[#1a0040] to-[#0a0020] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-violet-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Let Vastuvid K.K. Nagaich Consecrate Your Sacred Space</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Book a private spiritual Vastu consultation covering all 9 sacred practices — performed personally by a 4th‑generation Vastu Guru with 20+ years of clinical practice and 2 Lakh+ clients worldwide.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-violet-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">Schedule Your Spiritual Audit →</Link>
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
