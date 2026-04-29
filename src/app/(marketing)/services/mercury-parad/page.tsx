import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function MercuryParadPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>

        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#2d2d44] to-[#0f0f1a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(192,192,192,0.10),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-prakash-gold/8 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Advance Treatments · उन्नत उपचार</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-silver-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Mercury / Parad Therapy</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Parad Shivling Sthapna · Parad Pyramid Placement · Parad Keel Installation · Parad Gutika & Bracelet · Siddh Parad Ashtasanskar · Parad Yantra Energization · Parad Dhatu Adhyay · Parad Kavach Strips · Parad Lakshmi‑Ganesh Idols</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">9 sacred Parad (Mercury) practices — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO. Parad, revered as the seed of Lord Shiva, is the most potent and auspicious metal in Vedic spiritual science.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-silver-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Parad Consultation</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </div>
        </section>

        {/* ── PARAD SCIENCE ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Seed of Lord Shiva</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Parad – The Most Potent & Auspicious Metal in Vedic Spiritual Science</h2><p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">Parad (Mercury), purified through the 8‑stage Ashtasanskar of the Parad Samhita, neutralises severe Vastu doshas, attracts prosperity, protects against negative energies, and awakens Kundalini Shakti. The Brahma Purana states worshipping a Parad Shivling grants all worldly pleasures and Moksha.</p></div>
          </div>
        </section>

        {/* ── 9 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Nine Sacred Parad Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Complete Mercury Therapy Protocol</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Rooted in the Brahma Purana, Shiva Purana, Parad Samhita, and Ras Ratna Samuccaya.</p></div>
            <div className="space-y-16">
              {[
                {num:'01',title:'Parad Shivling Sthapna (Mercury Shivling Installation in Northeast)',desc:'The Parad Shivling, made from purified and solidified mercury through the Ashtasanskar, emits strong spiritual vibrations that purify the entire space. Installed in NE (Ishanya). Daily Rudra Abhishek. Equivalent to worshipping 108 stone Shivlings.',features:['Northeast (Ishanya) installation','Daily Rudra Abhishek','Ghee lamp at sunrise & sunset','Equivalent to 108 stone Shivlings','Attracts prosperity, clears negativity'],color:'#C0C0C0'},
                {num:'02',title:'Parad Pyramid Placement (Energy Harmonization & Aura Balancing)',desc:'The Parad Pyramid balances and harmonises the aura. Four corners represent truth, peacefulness, wisdom, seriousness. Pointed apex signifies tri‑level divine power. Placed in any dosha zone, it neutralises negative energy permanently. Best at office desk or study table.',features:['4 corners: Truth, Peace, Wisdom','Pointed apex: tri‑level divine power','Best at office/study desk','Between W‑SW for academic excellence','Balances & harmonises aura permanently'],color:'#B8860B'},
                {num:'03',title:'Parad Keel Installation (Mercury Protection Spikes at Entry Points)',desc:'Parad Keel (Mercury Spike), approximately 1.5 inches, 15‑20 grams. Embedded at entry points creating a protective shield blocking negative energies. Placed at four foundation corners to correct Vastu defects and balance energy flow. Attracts prosperity, promotes peace and harmony.',features:['Embedded at main entrance threshold','4 foundation corners','Blocks negative energies, evil eye','Stabilises energetic foundation','Attracts prosperity & peace'],color:'#A9A9A9'},
                {num:'04',title:'Parad Gutika and Bracelet (Personal Spiritual Protection)',desc:'Prepared with 8 Samskaras from the Parad Samhita, works directly on Sahasrara Chakra. Strengthens willpower, enhances concentration. Affects pineal gland, assists Kundalini awakening and deepens meditation. Available as single Gutika, bracelet, or 108+1 Mala.',features:['Works on Sahasrara (Crown) Chakra','Enhances willpower, concentration','Assists Kundalini awakening','Gutika, bracelet, or 108+1 Mala','Removes fears & negative thought patterns'],color:'#708090'},
                {num:'05',title:'Siddh Parad Ashtasanskar (8‑Stage Purification from Parad Samhita)',desc:'Raw mercury possesses 8 impurities (Doshas) and 7 external coverings. The Parad Samhita prescribes 18 processes, of which the first 8 constitute Ashtasanskar: Svedana, Mardana, Murchana, Utthapana, Patana, Bodhana, Niyamana, Deepana. Only mercury undergoing all 8 stages becomes Siddh Parad.',features:['Svedana: steam purification','Mardana: trituration with herb acids','Murchana: making Parad faint','Utthapana: directional energy elevation','Patana, Bodhana, Niyamana, Deepana'],color:'#808080'},
                {num:'06',title:'Parad Yantra Energization (Shri Yantra & Vastu Yantra Activation)',desc:'When a Yantra is crafted from Parad and energised through specific mantras, it generates powerful vibrations that purify the aura. Parad Shri Yantra (9 interlocking triangles) in NE attracts wealth, harmony, spiritual growth while neutralising vastu defects.',features:['Parad Shri Yantra: 9 triangles','Place in Northeast or Brahmasthan','Liquid mercury energisation','Neutralises Vastu & planetary doshas','Attracts wealth, harmony, spiritual growth'],color:'#BDB76B'},
                {num:'07',title:'Parad Dhatu Adhyay (Foundation Metal Embedment with Mercury)',desc:'Vedic practice of embedding mercury alongside other metals (Panch Dhatu) into the foundation. Mercury represents Budh, governing communication and intellect. Creates permanent energetic correction at structural level. Recommended for new constructions and renovations.',features:['Mercury embedment with Panch Dhatu','Permanent structural correction','Governs communication, intellect','For new construction & renovation','Balances elemental energies from ground'],color:'#696969'},
                {num:'08',title:'Parad Kavach Strips (Boundary Wall Mercury Protection)',desc:'Thin mercury‑based protective elements embedded into boundary walls at four cardinal directions. Functions as energetic shield preventing negative external influences. Corrects energy disturbances from irregular plot shapes. Combined with copper strips for comprehensive protection.',features:['4 cardinal boundary wall points','Protective energetic shield','Prevents negative external influences','Combined with copper strips','Corrects irregular plot disturbances'],color:'#778899'},
                {num:'09',title:'Parad Lakshmi‑Ganesh Idols (Prosperity & Obstacle Removal)',desc:'Siddh Parad Lakshmi and Ganesh idols, crafted from purified mercury, are among the most auspicious sacred objects. Installed in NE direction, they attract prosperity, remove obstacles, and provide protection. Energised through Pran Pratishtha ritual. Daily worship with ghee lamp and incense.',features:['Northeast installation','Pran Pratishtha energisation','Attracts prosperity, removes obstacles','Protection from negative energies','Daily worship with ghee lamp & incense'],color:'#DAA520'},
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

        {/* ── SCRIPTURAL REFERENCE ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Scriptural Foundation</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Scriptural Foundation of Parad Therapy</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {text:'Brahma Purana',desc:'Worshipping a Parad Shivling grants all worldly pleasures and Moksha.'},
                {text:'Shiva Purana',desc:'Parad Shivling equals 108 stone Shivlings; Lakshmi, Shiva, and Kuber reside where it is worshipped.'},
                {text:'Parad Samhita',desc:'Prescribes Ashtasanskar — the 8‑stage purification transforming raw mercury into Siddh Parad.'},
                {text:'Ras Ratna Samuccaya',desc:'Confirms properly prepared Parad as the most auspicious, capable of transmuting metals and healing diseases.'},
              ].map((s,i)=>(<div key={i} className="p-5 bg-white/70 rounded-2xl border border-prakash-gold/15 text-center"><h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{s.text}</h3><p className="text-xs text-nidra-indigo/60">{s.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d2d44] to-[#0f0f1a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-silver-400/30 via-white/10 to-prakash-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Experience the Power of Parad</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Book a consultation with Vastuvid K.K. Nagaich for a personalised Parad prescription and sacred installation — performed personally by a 4th‑generation Vastu Guru with 20+ years of clinical practice and 2 Lakh+ clients worldwide.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-silver-500 via-prakash-gold to-sacred-saffron text-white font-bold rounded-full shadow-[0_10px_40px_rgba(192,192,192,0.3)] hover:shadow-[0_20px_50px_rgba(218,165,32,0.5)] transition-all text-lg">Book Your Parad Consultation</Link>
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
