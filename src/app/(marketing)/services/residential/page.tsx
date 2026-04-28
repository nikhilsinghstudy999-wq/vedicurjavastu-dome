import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function ResidentialVastuPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>

        {/* ═══════════════════════════════════════════════════════════════
            HERO SECTION – deep maroon, full viewport
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0000] via-[#3a0a0a] to-[#0a0000]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-sacred-saffron/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
              Extensive Framework · विस्तृत ढांचा
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">Residential Vastu</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">
              Brahmnabhi · Dehali Sthapna · Garbh Vinyas · Interior Vastu · Devata Vastu · Bhoomi Sanskar · Shilanyas · Divya Grah Pravesh · Vastu Shanti
            </p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">
              11 authentic Vedic residential pujas, performed by Vastuvid K.K. Nagaich — 4th generation Guru, MBA, Ex‑CEO, 2 Lakh+ clients across 50+ countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                Book Consultation
              </Link>
              <Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                Explore Practices ↓
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            64‑GRID VASTU PURUSHA MANDALA SECTION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                The Vastu Purusha Mandala – 64‑Grid Residential Architecture
              </h2>
              <p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                Every residential Vastu consultation begins with the <strong>Vastu Purusha Mandala</strong> — the cosmic diagram that maps your home onto an 8×8 grid of 64 squares (Manduka Mandala). Each square is governed by a specific deity; each direction corresponds to one of five elements. The Vastu Purusha himself lies with his head in the northeast (Ishanya), feet in the southwest (Nairutya), right arm in the southeast (Agneya), and left arm in the northwest (Vayavya). At VedicUrja, Vastuvid K.K. Nagaich overlays this ancient grid onto your actual floor plan to identify every dosha and prescribe precise, non‑structural remedies. «4†L16-L18» «13†L14-L19»
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            THE 11 SACRED RESIDENTIAL PUJAS
            ═══════════════════════════════════════════════════════════════ */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 11 Sacred Practices</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
                Authentic Vedic Pujas for Complete Home Energy Harmonisation
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
                Each puja is a precise Vedic intervention — performed at an astrologically determined Muhurta, with specific samagri, mantras, and yantras — to correct, activate, or consecrate a specific energy zone of your home.
              </p>
            </div>

            {/* Practice cards */}
            <div className="space-y-16">
              {[
                {
                  num: '01',
                  title: 'Bhoomi Sanskar (Land Purification)',
                  desc: 'Performed before construction begins, this puja worships Bhoomi Devi and Vastu Purusha, seeking permission to build. Panchgavya (cow dung, ghee, urine, milk, curd), Panchamrit, and Sarvaushadhi are used to consecrate the land. A pit is dug in the Northeast (Ishanya) corner after cleaning the entire site. The ritual eradicates ill effects, Vastu doshas, and paves the way for smooth construction. Best Nakshatras: Rohini, Uttara, Anuradha, Hastham, Pushya.',
                  features: ['Site cleaning & sanctification', 'Panchgavya & Panchamrit offering', 'Vastu Purusha invocation', 'Kalash Sthapana in NE corner', 'Muhurta selection by planetary transit'],
                  color: '#E8B960',
                },
                {
                  num: '02',
                  title: 'Shilanyas (Foundation Stone Laying)',
                  desc: 'The foundation ceremony, performed after excavation. A consecrated stone — blessed during Vastu Pooja — is laid in the Southwest corner of the excavated trenches. The ritual includes Sutra-Pada (measuring the site plan), Ganesh Puja, Sankalpa, Kalash Sthapana, and Bhoomi Devi worship. The Shilanyas Muhurta is the second of five essential Vastu ceremonies described in the Mayamatam.',
                  features: ['Foundation stone consecration', 'Sutra‑Pada site measurement', 'Ganesh Puja & Sankalpa', 'Kalash Sthapana & Navratna deposit', 'SW corner primary load‑bearing placement'],
                  color: '#C88A5D',
                },
                {
                  num: '03',
                  title: 'Brahmnabhi Sthapna (Central Energy Activation)',
                  desc: 'The Brahmnabhi — also called Vastu Nabhi — is the geometric centre of your home, known as the Brahmasthan. Energy flows from this centre to all eight directions. "This area should always be clean, clutter‑free, and free from any obstructions." The activation ritual installs a Divine Energy Tool at the exact centre, connecting the home to cosmic Prana. Modern EMF sources can disrupt this centre — the ritual includes technical EMF management.',
                  features: ['Geometric centre identification', 'Divine Energy Tool installation', 'Cosmic Prana connection', 'EMF disruption neutralisation', '8‑directional energy flow calibration'],
                  color: '#FF9933',
                },
                {
                  num: '04',
                  title: 'Dehali Sthapna (Main Door Threshold Puja)',
                  desc: 'The threshold (Dehali) represents the sacred space between the physical and spiritual realms — "the gap, where pure consciousness rests." The main door is the mouth of Vastu Purusha, through which Prana enters. The Dehali puja invokes Maa Lakshmi, neutralises Rahu dosha, and establishes the threshold as a guardian of prosperity. On special occasions, the threshold is decorated with Swastik symbols, rangoli, and flower petals.',
                  features: ['Threshold sanctification ritual', 'Maa Lakshmi invocation', 'Rahu dosha neutralisation', 'Swastik & auspicious symbol placement', 'Entrance energy calibration'],
                  color: '#E25822',
                },
                {
                  num: '05',
                  title: 'Garbh Vinyas (Foundation Deposit / Womb Arrangement)',
                  desc: 'One of the most sacred rituals in Vedic architecture. A seed bowl, gold plough, copper yoke, and silver cow are arranged at cardinal points. "The foundation deposit connects the building to the earth\'s creative energy." The ritual awakens the Vastu Purusha, the spiritual being of the site, and establishes the conceptualisation of the building as a living organism. This ceremony is described in the Padmasaṃhitā and other Agama texts.',
                  features: ['Seed bowl & gold plough placement', 'Cardinal point silver cow arrangement', 'Vastu Purusha awakening mantras', 'Creative energy connection', 'Agama‑prescribed ritual sequence'],
                  color: '#8B5A2B',
                },
                {
                  num: '06',
                  title: 'Interior Vastu (Room‑by‑Room Directional Alignment)',
                  desc: 'A comprehensive room‑by‑room audit covering 12+ zones: main entrance (NE/E/N), living room (N/E), kitchen (SE with East‑facing cooking), master bedroom (SW with South‑facing sleep), children\'s bedroom (NW/W), pooja room (NE), dining (near kitchen, East), bathroom (NW/SE, never NE), and staircase (S/W/SW). The audit evaluates direction, furniture placement, colour therapy, ventilation, and EMF exposure. Heavy furniture should occupy S/W/SW zones. Light colours (cream, beige, pastels) promote harmony.',
                  features: ['12‑zone room‑by‑room audit', 'Kitchen SE with East‑facing cooking', 'Bedroom SW with head South', 'Living N/E light tones', 'Pooja room NE clean & sacred'],
                  color: '#D4A373',
                },
                {
                  num: '07',
                  title: 'Devata Vastu (Deity Placement & Home Temple Alignment)',
                  desc: 'The home mandir must be in the Northeast (Ishanya), with deities facing West so the devotee faces East — the direction of spiritual awakening. Idols should be on a raised platform (6‑12 inches), never directly on the floor, with feet at the devotee\'s chest level. Brass and copper utensils amplify spiritual energy. A ghee lamp lit daily at sunrise purifies the space. The pooja room must never share a wall with a toilet or be under a staircase.',
                  features: ['NE corner temple placement', 'Deity West‑facing arrangement', 'Raised platform specifications', 'Brass/copper utensil conductivity', 'Ghee lamp daily activation'],
                  color: '#FFD700',
                },
                {
                  num: '08',
                  title: 'Prateek Vastu (Sacred Symbol Placement)',
                  desc: 'Sacred symbols — Swastik (wealth, prosperity), Om (cosmic vibration, strength), Trishul (protection), and mandala patterns — are strategically placed at the main entrance, North/East walls, and Pooja room to amplify positive energy flow and neutralise directional doshas. Southwest entrances especially benefit from brass pyramids and Swastik placement. Rangoli with earthen diyas in the Southeast enhances prosperity. Housing.com recommends Swastik and Om stickers on the main door for NW entrance Vastu dosha.',
                  features: ['Swastik wealth activation', 'Om cosmic vibration placement', 'Trishul protection symbols', 'Rangoli & diya SE enhancement', 'Brass pyramid SW entrance correction'],
                  color: '#FF6347',
                },
                {
                  num: '09',
                  title: 'Ratna Sthapna — Ratnaadhyay (Nav‑Ratna Gemstone Embedment)',
                  desc: 'Nine certified gemstones (Nav‑Ratnas) — Ruby (Sun), Pearl (Moon), Red Coral (Mars), Emerald (Mercury), Yellow Sapphire (Jupiter), Diamond (Venus), Blue Sapphire (Saturn), Hessonite (Rahu), Cat\'s Eye (Ketu) — are embedded under the flooring at specific directional points as per the Vastu Purusha Mandala. Each stone corresponds to a planet; the placement geometry follows the Mayamatam. This is one of the most powerful permanent Vastu corrections available, recommended for new construction and during renovation.',
                  features: ['9 certified gemstone selection', 'Planetary correspondence mapping', 'Directional embedment geometry', 'Mayamatam‑prescribed placement', 'Permanent energy correction'],
                  color: '#9370DB',
                },
                {
                  num: '10',
                  title: 'Divya Grah Pravesh (Grand Housewarming)',
                  desc: 'The complete Griha Pravesh ceremony: Ganesh Puja (obstacle removal), Kalash Puja, Navagraha Shanti (planetary balance), Vastu Puja & Ganesh‑Navgraha‑Varun Havan (fire ritual), coconut breaking, and the sacred milk‑boiling tradition — where milk overflows from the pot, symbolising "an abundance of wealth." The home\'s roof must be complete, doors fitted with shutters. Apoorva Griha Pravesh applies to newly constructed homes. Traditionally performed at an astrologically determined Muhurta.',
                  features: ['Ganesh Puja & Kalash Sthapana', 'Navagraha Shanti Havan', 'Vastu Purusha Havan', 'Coconut breaking ritual', 'Milk boiling abundance ceremony'],
                  color: '#E8B960',
                },
                {
                  num: '11',
                  title: 'Vastu Shanti Puja (Ongoing Energy Harmonisation)',
                  desc: 'A powerful ongoing purification ritual: the space is cleaned, Gangajal sprinkled, Ashoka leaves and Swastik symbols placed at the main door, followed by Kalash Sthapana, Vastu Purusha invocation via specific mantras, and Havan with ghee, herbs, and sacred materials. Benefits: removes Vastu doshas, balances Panch Mahabhutas (five elements), enhances health, dissolves financial blockages, increases family harmony, and protects against natural and man‑made negative influences. Recommended annually or when significant life events occur.',
                  features: ['Space cleansing & Gangajal sprinkling', 'Ashoka leaf & Swastik door placement', 'Vastu Purusha mantra invocation', 'Ghee & herb Havan purification', 'Annual renewal for sustained harmony'],
                  color: '#C10000',
                },
              ].map((p, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start`}>
                  {/* Number + Icon side */}
                  <div className="lg:w-1/3 flex-shrink-0">
                    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/90 via-white/70 to-white/50 backdrop-blur-md border border-prakash-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-center">
                      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" style={{ backgroundColor: p.color }} />
                      <div className="text-6xl font-bold mt-4 mb-2" style={{ color: p.color }}>{p.num}</div>
                      <h3 className="font-serif text-xl text-nidra-indigo font-bold">{p.title.split('(')[0].trim()}</h3>
                      <p className="text-xs text-nidra-indigo/50 mt-1">{p.title.match(/\(.*?\)/)?.[0]?.replace(/[()]/g, '')}</p>
                    </div>
                  </div>

                  {/* Description + features */}
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-nidra-indigo/70 leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.features.map((f, j) => (
                        <span key={j} className="text-xs px-3 py-1.5 rounded-full border" style={{ borderColor: p.color + '30', backgroundColor: p.color + '08', color: p.color }}>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            ROOM‑BY‑ROOM CHECKLIST
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Room‑by‑Room Vastu Checklist (Coohom 2026 Verified)
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                A modern, practical checklist aligned with traditional directional guidelines for every room in your home.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { room: 'Main Entrance', dir: 'NE, East, or North', tip: 'Largest door; opens inward; Swastik/Om symbols; well‑lit; no dustbin nearby', color: '#E8B960' },
                { room: 'Living Room', dir: 'North or East', tip: 'Heavy furniture S/W/SW; seating faces East/North; light colours (cream, beige, pale yellow)', color: '#10B981' },
                { room: 'Kitchen', dir: 'Southeast (Agni corner)', tip: 'Cook facing East; sink NE corner; stove SE; avoid stove directly opposite sink; warm colours', color: '#EF4444' },
                { room: 'Master Bedroom', dir: 'Southwest', tip: 'Head facing South for sleep; bed SW corner; avoid mirrors opposite bed; light pink/peach tones', color: '#6366F1' },
                { room: 'Children\'s Room', dir: 'Northwest or West', tip: 'Bed head East; study desk facing East/North; green/blue colours stimulate learning', color: '#F59E0B' },
                { room: 'Pooja Room', dir: 'Northeast (Ishanya)', tip: 'Deities face West; raised platform; brass/copper; ghee lamp daily; never share wall with toilet', color: '#FFD700' },
                { room: 'Bathroom / Toilet', dir: 'NW or SE only', tip: 'Never in NE or centre; door always closed; exhaust fan East/North; light blue or white tiles', color: '#06B6D4' },
                { room: 'Dining Room', dir: 'West or East', tip: 'Near kitchen; face East/North while eating; square/rectangular table preferred', color: '#8B5CF6' },
                { room: 'Staircase', dir: 'South, West, or SW', tip: 'Clockwise ascent; never in NE or centre; odd number of steps preferred', color: '#EC4899' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.room}</h3>
                  <p className="text-xs text-nidra-indigo/50 mt-1 mb-2"><strong>Best direction:</strong> {item.dir}</p>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            REMEDIES WITHOUT DEMOLITION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Non‑Invasive Corrections</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Remedies Without Demolition
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                Most Vastu defects can be corrected without breaking a single wall. Vastuvid K.K. Nagaich uses these six proven, non‑structural methods. 「32†L5-L10」「32†L18-L20」
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'Crystal Pyramids', desc: 'Copper & brass pyramids placed at dosha points absorb negative energy and restore directional balance. Pyramid therapy is the most widely prescribed Vastu remedy.', color: '#E8B960' },
                { title: 'Yantras', desc: 'Energised sacred geometric diagrams — Vastu Purush Yantra, Shri Yantra, Kuber Yantra, Mangal Yantra — placed at precise locations and angles to neutralise specific doshas.', color: '#FF9933' },
                { title: 'Colour Therapy', desc: 'Warm tones (orange, red, yellow) for stability; cool tones (blue, green) for calm. Light yellow/cream for NE; peach for SW bedroom; light blue for N study.', color: '#06B6D4' },
                { title: 'Mirror Placement', desc: 'Mirrors on North/East walls amplify positive energy. A mirror opposite the dining table symbolically doubles food & prosperity. Never opposite the bed or entrance.', color: '#10B981' },
                { title: 'Salt & Water Remedies', desc: 'Rock salt bowls placed in room corners absorb negative energy. A copper vessel of water with fresh flowers in the NE corner enhances the water element.', color: '#6366F1' },
                { title: 'Metal Strips', desc: 'Brass, copper, or silver strips laid under flooring in a grid pattern create a conductive barrier that disperses geopathic radiation across a wider area.', color: '#C88A5D' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FINAL CTA
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#3a0a0a] to-[#0a0000] bg-[length:400%_400%] animate-[gradientLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-sacred-saffron/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Let Vastuvid K.K. Nagaich Transform Your Home
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Every home has a unique energy signature. Book a private residential Vastu consultation — covering all 11 pujas, room‑by‑room audit, and personalised remedies — performed personally by a 4th‑generation Vastu Guru with 20+ years of clinical practice and 2 Lakh+ clients worldwide.
                  </p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
                    Schedule Your Residential Audit →
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
