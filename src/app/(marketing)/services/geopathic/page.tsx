import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function GeopathicStressPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>

        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0000] via-[#3a0000] to-[#1a0000] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,80,80,0.08),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/6 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-red-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Advance Treatments · उन्नत उपचार</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-red-400 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Geopathic Stress</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Geology · EMF & Geomagnetic Scanning · Copper Rod Installation · Pyramid & Crystal Therapy · Furniture Relocation · Plant‑Based Purification · Radon Detection · Hartmann & Curry Grid Mapping</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">9 sacred geopathic stress practices — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO — for homes, offices, factories & institutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-red-500 via-prakash-gold to-sacred-saffron text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Geopathic Audit</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </div>
        </section>

        {/* ── HARTMANN & CURRY GRIDS ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Invisible Blueprint of Suffering</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">The Hartmann & Curry Grids — Earth's Geomagnetic Matrix</h2><p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">Dr. Ernst Hartmann and Dr. Manfred Curry independently discovered intersecting grids of geomagnetic lines. Where Hartmann, Curry, and underground water veins intersect, a vortex of geopathic disturbance forms — the invisible zones where prolonged exposure weakens the immune system.</p></div>
          </div>
        </section>

        {/* ── 9 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 9 Sacred Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Authentic Vedic Practices for Geopathic Stress Detection & Neutralisation</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Each practice uses specialised instruments and traditional dowsing techniques refined by Vastuvid K.K. Nagaich.</p></div>
            <div className="space-y-16">
              {[
                {num:'01',title:'The Vilsbiburg Protocol — Baron von Pohl\'s 1929 Cancer Mapping',desc:'In 1929, von Pohl mapped geopathic stress lines in Vilsbiburg and found 100% correlation between cancer deaths and underground water vein crossings. Dr. Hans Nieper found 92% of cancer patients and 75% of MS patients were geopathically stressed. Over 85% of cancer deaths are linked to GS exposure.',features:['1929 Vilsbiburg 100% cancer correlation','Dr. Nieper: 92% cancer, 75% MS GS+','Dr. Hartmann: cancer = location disease','85%+ cancer deaths linked to GS','200ft underground vein mapping'],color:'#C10000'},
                {num:'02',title:'Copper L‑Rod Dowsing (Geopathic Zone Detection & Mapping)',desc:'Dowsing with copper L‑rods remains the oldest and most reliable detection method. Rods cross involuntarily over underground water veins, fault lines, or grid intersections. Von Pohl scale (0‑16) quantifies intensity. Vastuvid trained under three Guru‑Shishya lineages.',features:['Copper L‑rod dowsing','Von Pohl scale 0‑16','Hartmann & Curry grid mapping','Underground water vein depth','Full property zone mapping'],color:'#E8B960'},
                {num:'03',title:'Gauss Meter & EMF Detection (Quantitative Measurement)',desc:'Normal background: 25‑65 µT. Geopathic stress zones: 100+ µT. Trifield TF2 multi‑spectrum EMF detection. Man‑made radiation from power lines, Wi‑Fi, mobile towers compounds natural GS — termed technopathic stress.',features:['Gauss meter: 25‑65 µT normal','100+ µT = GS zone','Trifield TF2 EMF detection','Technopathic stress identification','Wi‑Fi, tower & power line mapping'],color:'#FF9933'},
                {num:'04',title:'Biomedical Validation — GDV Gas Discharge Visualization (2025)',desc:'Randomised, double‑blinded trial with 52 persons. Statistically significant differences in physical area of glow between geopathic vs neutral zones. Deficits in lymphatic, cardiovascular, and pineal systems were documented. Peer‑reviewed biomedical journal publication.',features:['52‑person double‑blinded trial','Statistically significant glow reduction','Lymphatic, cardiovascular, pineal deficits','Geowave harmonization demonstrated','Peer‑reviewed publication'],color:'#6366F1'},
                {num:'05',title:'Copper Rod Installation (Geopathic Stress Neutraliser)',desc:'18‑24 inch energised copper rods driven at stress‑line entry points. Faraday‑type effect redirects harmful radiation. South corner placement for intersecting veins. Mantra‑energised before installation. Multiple rods for large zones.',features:['18‑24 inch energised copper rods','Faraday‑type radiation redirection','South corner & entry placement','Multiple rods for intersecting veins','Mantra‑energised installation'],color:'#10B981'},
                {num:'06',title:'Pyramid & Crystal Grid Therapy',desc:'Octagonal copper pyramids absorb geopathic forces from all 8 directions. Brass pyramids for financial zones. Crystal grids: black tourmaline (EMF absorption), amethyst (neurological calm), clear quartz (amplification), smoky quartz (detoxification).',features:['Octagonal copper pyramid (8‑direction)','Brass pyramid for financial zones','Black tourmaline EMF absorption','Amethyst for neurological calming','Clear quartz + smoky quartz'],color:'#8B5CF6'},
                {num:'07',title:'Furniture Relocation & Sleep Zone Optimisation',desc:'Move bed/work desk 3‑5 feet from mapped GS line. During sleep the brain sends regeneration signals — GS exposure during sleep is most damaging. Children instinctually avoid GS zones — odd sleep angles and refusal to sleep in room are key indicators.',features:['Bed relocation 3‑5 feet from GS','Work desk repositioning','Children\'s instinctive avoidance','Sleep‑walking as GS indicator','Immediate health improvement'],color:'#F59E0B'},
                {num:'08',title:'Plant‑Based Purification & Rock Salt Absorption',desc:'Snake plant (SE/S) purifies air. Areca palm (E/NE) reduces stress. Peace lily (E/N/NE) for emotional healing. Rock salt in glass bowls absorbs negative vibrations — replace every 10 days. Multiple Tulsi (basil) plants neutralise GS.',features:['Snake plant SE/S for purification','Areca palm E/NE for stress','Peace lily E/N/NE for healing','Rock salt bowls – 10‑day cycle','Tulsi for natural GS neutralisation'],color:'#06B6D4'},
                {num:'09',title:'EMF Shielding & Technopathic Stress Reduction (Digital Sunset)',desc:'EMF‑shielding bed canopies, curtains, paint. Switch off Wi‑Fi at night. Mobile phones 6 feet from beds. Digital sunset: all wireless devices off 60 minutes before sleep. Grounding mats and periodic Gauss meter reassessment.',features:['EMF‑shielding bed canopy','Wi‑Fi off at night','Phone 6‑foot distance','Digital sunset: 60‑min pre‑sleep','Periodic Gauss reassessment'],color:'#EF4444'},
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

        {/* ── HEALTH SYMPTOMS CHECKLIST ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Health Reference</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Geopathic Stress Symptoms — What to Look For</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {category:'Sleep Disorders',symptoms:'Insomnia, restless sleep, nightmares, waking 2‑3 AM, waking exhausted, bruxism, sleep‑walking.',color:'#EF4444'},
                {category:'Chronic Fatigue',symptoms:'Constant tiredness, low energy, drowsiness, waking un‑refreshed. Adrenal gland overtime compensation.',color:'#F59E0B'},
                {category:'Immune Dysfunction',symptoms:'Frequent illnesses, slow recovery, repeated infections, auto‑immune flare‑ups, not responding to treatment.',color:'#C10000'},
                {category:'Neurological',symptoms:'Brain fog, difficulty concentrating, memory loss, depression, anxiety, mood swings, aggression.',color:'#8B5CF6'},
                {category:'Pain & Inflammation',symptoms:'Persistent headaches, migraines, joint pains, arthritis, rheumatism, back problems.',color:'#FF9933'},
                {category:'Children\'s Indicators',symptoms:'Refusing to sleep in room, sleep‑walking, waking at odd angles, tiredness, poor schoolwork, bed‑wetting.',color:'#06B6D4'},
                {category:'Reproductive',symptoms:'Unexplained infertility, recurrent miscarriages, difficulty conceiving, menstrual irregularities, cot deaths.',color:'#EC4899'},
                {category:'Physical Indicators',symptoms:'Cats sleeping in specific spots, ants/wasps/bees nests, twisted tree growth, gaps in hedges, lightning‑struck trees.',color:'#10B981'},
                {category:'Building Indicators',symptoms:'Cracked plaster, damp patches, recurring mould, machinery breakdowns in specific zones, sick building syndrome.',color:'#6366F1'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.category}</h3><p className="text-xs text-nidra-indigo/60 mt-1">{item.symptoms}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── DETECTION METHODS ── */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Detection Methods</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">5 Proven Geopathic Stress Detection Methods</h2></div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {method:'Copper L‑Rod Dowsing',detail:'The oldest and most reliable method. Two copper L‑shaped rods cross involuntarily over underground water veins and grid intersections. Von Pohl used this to map the Vilsbiburg cancer clusters.',color:'#E8B960'},
                {method:'Gauss Meter (Magnetometer)',detail:'Measures local magnetic field strength in microtesla (µT). Normal: 25‑65 µT. GS zones: 100+ µT or sharp fluctuations. Provides quantitative validation of dowsing results.',color:'#6366F1'},
                {method:'EMF Meter (Trifield TF2)',detail:'Measures electromagnetic field radiation from man‑made sources. Combined with Gauss meter for complete picture of natural + man‑made radiation.',color:'#10B981'},
                {method:'Radon Detector',detail:'Radon is the second leading cause of lung cancer globally (WHO). Geological fault lines and granite‑rich regions emit radon. Detectors placed 48‑72 hours.',color:'#EF4444'},
                {method:'Thermal Imaging & Universal Scanner',detail:'Detects temperature anomalies in walls and floors caused by underground water flow. Correlates with dowsing and magnetometer readings for visual confirmation.',color:'#8B5CF6'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.method}</h3><p className="text-xs text-nidra-indigo/60 mt-1">{item.detail}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── REMEDIES WITHOUT DEMOLITION ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Non‑Invasive Corrections</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Remedies Without Demolition — 7 Proven GS Correction Techniques</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {title:'Copper Rod Installation',desc:'18‑24 inch rods, mantra‑energised, driven at stress‑line entry points. Faraday‑type effect redirects radiation.',color:'#FFD700'},
                {title:'Pyramid Placement',desc:'Octagonal copper pyramids under beds/desks. Brass pyramids for financial zones. Harmonizes energy.',color:'#FF9933'},
                {title:'Crystal Grid Therapy',desc:'Black tourmaline for EMF, amethyst for neurological calm, clear quartz for amplification, smoky quartz for detox.',color:'#8B5CF6'},
                {title:'Furniture Relocation',desc:'Shift bed/desk 3‑5 feet from GS line. Most immediate remedy with dramatic health improvements.',color:'#10B981'},
                {title:'Rock Salt Absorption',desc:'Glass bowls in corners absorb negative vibrations and EMF energy. Replace every 10 days.',color:'#06B6D4'},
                {title:'Plant‑Based Purification',desc:'Snake plant, areca palm, peace lily, Tulsi placed in specific directions according to element.',color:'#EC4899'},
                {title:'EMF Shielding & Digital Sunset',desc:'EMF‑shielding bed canopies. Wi‑Fi off at night. Phones 6 feet from beds. 60‑min pre‑sleep device off.',color:'#EF4444'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.title}</h3><p className="text-xs text-nidra-indigo/60">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#3a0000] to-[#1a0000] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-red-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Let Vastuvid K.K. Nagaich Detect & Neutralise Your Geopathic Stress</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Book a private geopathic stress audit covering all 9 sacred practices — performed personally by a 4th‑generation Vastu Guru with 20+ years of clinical practice and 2 Lakh+ clients worldwide.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-red-500 via-prakash-gold to-sacred-saffron text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">Schedule Your Geopathic Audit →</Link>
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
