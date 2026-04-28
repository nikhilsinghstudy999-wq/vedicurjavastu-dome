import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function NewConstructionVastuPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>

        {/* ═══════════════════════════════════════════════════════════════
            HERO – deep amber/brown/gold, full viewport
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0a00] via-[#3a1a00] to-[#1a0a00]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.08),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-amber-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
              Extensive Framework · विस्तृत ढांचा
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-amber-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">New Construction Vastu</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">
              Bhoomi Puja · Shilanyas (Foundation Stone) · Garbh Vinyas (Foundation Deposit) · Ratna Sthapna (Nav-Ratna Embedment) · Dhatu Adhyay (Metal Installation) · Vastu Planning & Blueprint Audit · Griha Pravesh · Vastu Shanti
            </p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">
              9 sacred new construction practices — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO — for homes, temples, offices & institutions built from the ground up. 「8†L16-L23」「10†L30-L38」「13†L7-L10」
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-amber-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                Book Construction Audit
              </Link>
              <Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                Explore Practices ↓
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            VASTU PURUSHA MANDALA – CONSTRUCTION APPLICATION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint Before a Single Brick</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                The Five Essential Vastu Ceremonies of the Matsya Purana
              </h2>
              <p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                The Matsya Purana prescribes five essential ceremonies for every new construction: "The first of them begin with <strong>sutra-pada</strong> or measuring of the site plan; the second relates to the raising of the main pillar; the third is performed when the door of the main entrance is fixed; the fourth takes place after the house is completed at the time of <strong>grhapravesa</strong>; the fifth may be performed whenever there is an occasion for <strong>vastu-santi</strong>." The main foundation pillar must be raised on a sila or stone block under which ratna or precious jewels have been deposited — a practice codified over two millennia ago and still performed by Vastuvid K.K. Nagaich today. 「8†L16-L23」「10†L14-L20」「10†L30-L38」
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            THE 9 SACRED NEW CONSTRUCTION PRACTICES
            ═══════════════════════════════════════════════════════════════ */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 9 Sacred Practices</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
                Authentic Vedic Practices for New Construction – From Foundation to Housewarming
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
                Each practice is a precise Vedic intervention — grounded in the Matsya Purana, Mayamatam, Manasara, and the Brihat Samhita — performed personally by Vastuvid K.K. Nagaich at astrologically determined Muhurtas.
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  num: '01',
                  title: 'Bhoomi Puja (Bhumi Pujan – Site Purification & Foundation Stone)',
                  desc: '"The area should be cleaned in the morning after taking a bath. Gangajal must be used for cleansing and purification purposes. Create the 64‑part drawing, which represents different deities (Vastu Purusha), in the northeast corner of the construction site." The ritual invokes Vastu Purush, Goddess Bhoomi, Pancha Boothas, and Dikpalas — removing all Vastu doshas and negative energies. A silver idol of the snake god (Naga) is worshipped: "The deity Sheshnaag governs the earth — his blessings are sought for construction and protection." The ceremony includes Ganesh Puja, Kalash Sthapana, Sankalpa, Shatkarma, Pran Pratishtha, and Havan. Auspicious months: Baisakh, Shravan, Margshirsh, and Falgun. 「11†L5-L8」「11†L16-L19」「11†L28-L33」「6†L28-L30」',
                  features: ['NE corner: 64‑part Vastu Purusha drawing', 'Gangajal site purification', 'Naga (snake) deity silver idol worship', 'Kalash Sthapana with mango leaves & coconut', 'Havan with ghee & sacred herbs'],
                  color: '#10B981',
                },
                {
                  num: '02',
                  title: 'Shilanyas (Foundation Stone Laying – Sutra‑Pada & Muhurta Ceremony)',
                  desc: '"It is called silanyasa or \'foundation laying ceremony\' which is the muhurat. The first of them begin with sutra‑pada or measuring of the site plan; the second relates to the raising of the main pillar." The foundation stone is placed in the Southwest corner of the excavated trenches. "The main foundation pillar should be raised on a sila or stone block under which some ratna or precious jewels have been deposited." Sutra‑pada divides the site into equal squares — 64 (Manduka), 81 (Paramasayika), or 100 — by making deep marks on the ground. The ceremony includes Ganesh Puja, Sankalpa, Kalash Sthapana, and Bhoomi Devi worship. This is the second of five essential Vastu ceremonies described in the Matsya Purana. 「8†L16-L23」「10†L14-L20」「10†L30-L38」',
                  features: ['Sutra‑pada: 64/81/100‑square site division', 'Foundation stone placement SW corner', 'Ratna deposit under foundation pillar', 'Ganesh Puja & Sankalpa', 'Muhurta selection by planetary transit'],
                  color: '#C88A5D',
                },
                {
                  num: '03',
                  title: 'Garbh Vinyas / Garbhanyasa (Foundation Deposit – Womb Arrangement Ritual)',
                  desc: '"The laying of a foundation isn\'t merely an engineering process; it is a consecration of space." The excavation depth matches the plinth height. The pit is packed with seven sacred types of earth — sourced from riverbanks, mountains, anthills, cow paths, and spiritually charged locations. "In the four cardinal directions and the center, different sacred roots and plants are placed — white lotus in the center, blue lotus in the east, water‑lily in the south, fragrant grass in the west, and gunja plant in the north." Eight types of grains representing abundance are added in specific directional zones. Sacred metals (gold, silver, iron, copper) and divine symbols (Vishnu\'s disc, Shiva\'s trident, Om symbol) are deposited in geometrically designed plots. The site is washed with panchagavya, and Vedic mantras invoking Brahma, Vishvakarman, and guardian deities are chanted. 「13†L10-L17」「13†L19-L24」「13†L24-L31」「12†L17-L33」',
                  features: ['7 sacred earths deposit (river, mountain, anthill)', 'Cardinal plants: white lotus, blue lotus, water‑lily', '8 grains + gold, silver, iron, copper metals', 'Panchagavya site purification', 'Vastu Purusha awakening mantra chanting'],
                  color: '#FFD700',
                },
                {
                  num: '04',
                  title: 'Ratna Sthapna – Ratnadhyaya (Nav‑Ratna Gemstone Embedment under Flooring)',
                  desc: '"Ratnadhyaya therapy — placement of 9 Ratnas [Nav‑Ratnas] — involves embedding Gem‑stones under the floor of the house." Nine certified gemstones — Ruby (Manik), Pearl (Moti), Red Coral (Moonga), Emerald (Panna), Yellow Sapphire (Pukhraj), Diamond (Heera), Blue Sapphire (Neelam), Hessonite (Gomed), Cat\'s Eye (Lahasuniya) — are embedded at specific directional points as per the Vastu Purusha Mandala. "The proper placement of semi‑precious original gemstones is also very effective." The Mayamatam, Aprajitpruchha, and Manasara all contain chapters on Ratnadhyaya detailing the directions, ruling planets, specific gems, and mantras. "Gems possess earth energy which soothes, nourishes, heals and binds." A copper Swastika is placed alongside the gemstones for additional energisation. 「14†L3-L9」「14†L21-L28」「14†L30-L33」',
                  features: ['9 certified Nav‑Ratna gemstones embedment', 'Mayamatam directional placement protocol', 'Copper Swastika co‑placement', 'Planetary mantra energisation', 'Original or semi‑precious as per budget'],
                  color: '#EF4444',
                },
                {
                  num: '05',
                  title: 'Dhatu Adhyay (Panch‑Dhatu Metal Installation – Copper, Brass, Silver Strips)',
                  desc: '"Ratna or precious metals — gold, silver, copper, brass, and iron — are deposited at specific directional points during foundation to create a conductive energy grid beneath the structure." Copper strips are embedded in floor grooves to seal or redirect negative energy at incorrect entrances and zone imbalances. "The purpose of this Space Surgery technique is to block any unfavourable activity permanently without demolition." Brass strips for space element correction, silver for spiritual amplification, and copper for earth element conduction. The ancient practice of Dhatu Sthapna creates a permanent Faraday‑type protective field beneath the building — one of the most enduring Vastu corrections available during the construction window.「14†L7-L9」「14†L11-L14」',
                  features: ['Panch‑Dhatu: gold, silver, copper, brass, iron', 'Copper strips for earth element conduction', 'Brass strips for space element correction', 'Faraday‑type permanent energy grid', 'Floor‑groove embedment — invisible post‑construction'],
                  color: '#FF9933',
                },
                {
                  num: '06',
                  title: 'Vastu Planning & Blueprint Audit (64‑Grid Overlay on Architectural Plans)',
                  desc: '"Vastu audit includes analysis, diagnosis, recommendations, and follow‑up." Before construction begins, Vastuvid K.K. Nagaich overlays the Vastu Purusha Mandala (64‑grid) onto your architectural blueprint. Room placement is audited against directional prescriptions: "The main building should align with the main directions for optimal energy alignment. Open spaces should ideally be in the north and east, while heavy structures can be built in the south or west." The 16‑zone directional analysis (32 entrances) ensures the main entrance falls on a positive pada. The Brahmasthan (center) must remain open — "SW heavier, NE lighter and open" is the cardinal rule. Floor slope is verified: SW highest → NE lowest. 「4†L32-L35」「4†L17-L19」「7†L24-L27」「1†L13-L15」',
                  features: ['64‑grid Mandala overlay on blueprints', '16‑zone + 32‑entrance directional analysis', 'Brahmasthan center kept open', 'SW highest → NE lowest slope verification', 'Room‑by‑room directional compliance audit'],
                  color: '#6366F1',
                },
                {
                  num: '07',
                  title: 'Construction Phase Rituals (Door Fixing Ceremony & Main Pillar Raising)',
                  desc: '"The third special ceremony is to be performed on the day when the door of the main entrance to the house is fixed in position." The main entrance door is the most critical element — its exact position is determined by the 32‑entrance pada analysis. The door must be the largest in the house, open inward, and never creak. The threshold (Dehali) receives a special puja invoking Maa Lakshmi. "The second ceremony relates to the raising of the main pillar" — the primary structural column is raised on a consecrated stone block with ratna deposits beneath it. Construction should begin from the Northeast and progress towards the Southwest. "Start digging from the northeast and progress towards the southwest — this aligns with the natural energy flow."「10†L23-L26」「7†L18-L20」「8†L18-L21」',
                  features: ['Door fixing ceremony: 32‑pada entrance analysis', 'Main pillar raising on consecrated stone + ratna', 'Construction NE → SW progression', 'Dehali (threshold) Lakshmi invocation', 'Door largest in house, opens inward'],
                  color: '#F59E0B',
                },
                {
                  num: '08',
                  title: 'Griha Pravesh – Apoorva Griha Pravesh (First‑Time Housewarming Ceremony)',
                  desc: '"The fourth ceremony takes place after the house is completed and at a time of grhapravesa." Apoorva Griha Pravesh applies to newly constructed homes — entering for the very first time. The ceremony includes: entering at the most auspicious Muhurta, carrying the sacred fire (Agni) — traditionally a pot with burning coconut or camphor — into the new home, performing Ganesh Puja, Kalash Puja, Navagraha Shanti, Vastu Puja, and sacred Havan with ghee and herbs. The milk‑boiling tradition — where milk overflows from the pot — symbolises "an abundance of wealth." The home\'s roof must be complete, doors fitted with shutters. Traditionally performed at an astrologically determined Muhurta. 「10†L26-L29」「9†L24-L30」',
                  features: ['Apoorva Griha Pravesh: first‑time entry', 'Sacred fire carrying into new home', 'Milk‑boiling abundance ceremony', 'Ganesh + Kalash + Navagraha + Vastu Puja', 'Muhurta by planetary transit'],
                  color: '#EC4899',
                },
                {
                  num: '09',
                  title: 'Vastu Shanti Puja & Post‑Construction Harmonisation (Ongoing Energy Maintenance)',
                  desc: '"The fifth may be performed whenever there is an occasion for vastu‑santi." Vastu Shanti is the ritual for pacifying Vastu Purusha and rectifying any architectural flaws or imbalances (Vastu Dosha). "It ensures harmony, prosperity, and peace for the residents by seeking blessings from the eight directions (Dikpalas), the nine planets (Navagrahas), and the Vastu Purusha." The ritual combines Ganapati Poojan, Navagraha Shanti, Kalash Poojan, Havan, and Mangal Aarti. "The various medicinal ingredients in the smoke from the havan disinfect and purify the air." This puja is recommended post‑construction — and annually thereafter — to sustain the protective energy field established through the nine construction practices. 「10†L28-L31」「9†L18-L24」「4†L4-L7」',
                  features: ['Vastu Purusha pacification ritual', 'Dikpala (8‑direction) + Navagraha blessings', 'Kalash Poojan & sacred Havan', 'Medicinal smoke air purification', 'Annual renewal recommended'],
                  color: '#8B5CF6',
                },
              ].map((p, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start`}>
                  <div className="lg:w-1/3 flex-shrink-0">
                    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/90 via-white/70 to-white/50 backdrop-blur-md border border-prakash-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-center">
                      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" style={{ backgroundColor: p.color }} />
                      <div className="text-6xl font-bold mt-4 mb-2" style={{ color: p.color }}>{p.num}</div>
                      <h3 className="font-serif text-xl text-nidra-indigo font-bold">{p.title.split('(')[0].trim()}</h3>
                      <p className="text-xs text-nidra-indigo/50 mt-1">{p.title.match(/\(.*?\)/)?.[0]?.replace(/[()]/g, '')}</p>
                    </div>
                  </div>
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
            CONSTRUCTION PHASE CHECKLIST
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Construction Quick Reference</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                The 5‑Ceremony Sequence — Matsya Purana Construction Timeline
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                "Certain definite ceremonies are performed at auspicious moments before the work is started." — Matsya Purana, Chapter 84. 「10†L14-L18」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { phase: 'Phase 1: Pre‑Construction', tasks: 'Bhoomi Puja (NE corner). Sutra‑pada (64‑grid marking). Shilanyas (foundation stone SW). Garbh Vinyas (foundation deposit center). Ratna Sthapna (Nav‑Ratna embedment). Dhatu Adhyay (metal strip installation). Muhurta selection for all ceremonies.', color: '#10B981' },
                { phase: 'Phase 2: Foundation Digging', tasks: 'Start from NE, progress towards SW. SW wall thickest, thinnest in NE. Foundation pit depth = plinth height. Well‑burnt bricks prescribed (Matsya Purana). No cement‑like substances mentioned in traditional texts.', color: '#FFD700' },
                { phase: 'Phase 3: Main Pillar & Walls', tasks: 'Main pillar raised on consecrated stone + ratna. Walls thicker in South & West. NE walls thinner. Door fixing ceremony (third Matsya Purana ceremony). Main door largest, opens inward.', color: '#FF9933' },
                { phase: 'Phase 4: Roof & Flooring', tasks: 'SW highest point → NE lowest slope. Roof complete before Griha Pravesh. Flooring slope towards East/North. More windows in N & E walls. Open outward.', color: '#C88A5D' },
                { phase: 'Phase 5: Completion', tasks: 'Griha Pravesh (Apoorva — first entry). Sacred fire carried in. Milk‑boiling ceremony. Vastu Shanti Puja (pacification). Annual renewal recommended. Brahmasthan kept open & clutter‑free.', color: '#8B5CF6' },
                { phase: 'Key Dimensions', tasks: 'Room corners: 90° exactly. Foundation at least 4½ inches per brick. Door height = 2× width (traditional ratio). 64‑grid for domestic, 81‑grid for temples. Plot square or rectangular preferred.', color: '#6366F1' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.phase}</h3>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed mt-1">{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            REMEDIES WITHOUT DEMOLITION — FOR CONSTRUCTION‑PHASE ONLY
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Construction‑Phase Corrections</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Permanent Vastu Corrections — Only Possible During Construction
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                The construction phase is the single window for permanent Vastu corrections — once the concrete sets, these corrections require demolition. 「14†L7-L9」「14†L30-L33」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'Nav‑Ratna Embedment', desc: '9 certified gemstones placed at precise directional points under flooring — a permanent energy grid that cannot be retrofitted without breaking floors. Ruby (Sun‑East), Pearl (Moon‑NW), Coral (Mars‑South), Emerald (Mercury‑North), Yellow Sapphire (Jupiter‑NE), Diamond (Venus‑SE), Blue Sapphire (Saturn‑West), Hessonite (Rahu‑SW), Cat\'s Eye (Ketu‑Center).', color: '#EF4444' },
                { title: 'Copper/Brass Strip Grid', desc: 'Metal strips embedded in floor grooves create a conductive Faraday‑type barrier. Copper for earth element zones, brass for space element areas, silver for spiritual amplification. "The purpose is to block unfavourable activity permanently." Once flooring is laid, these strips are invisible.', color: '#FFD700' },
                { title: 'Foundation Ratna Deposit', desc: 'Precious jewels, gold, silver, copper, and grain deposits placed in the foundation pit before the main pillar is raised. "The main foundation pillar should be raised on a sila under which ratna have been deposited." This is the most ancient permanent Vastu correction.', color: '#FF9933' },
                { title: 'Directional Soil Correction', desc: 'Seven sacred earths from riverbanks, mountains, anthills, and cow paths are placed in the foundation pit — each at specific cardinal points. "The bottom of the pit should be covered with various kinds of soil." This soil composition creates the energetic foundation of the entire structure.', color: '#10B981' },
                { title: 'Copper Swastika + Yantra', desc: 'A copper Swastika — "the most energetic symbol in the world" — energises deficient zones. Placed alongside gemstones under flooring. Combined with Vastu Purush Yantra and Sri Yantra for comprehensive space energisation before walls go up.', color: '#8B5CF6' },
                { title: 'Brahmasthan Consecration', desc: 'The center of the building — Brahmasthan — receives special consecration during Garbh Vinyas: white lotus root, specific mantras, and a dedicated copper Kalash. "The center must remain open — SW heavier, NE lighter." This is the energy axis of the entire building.', color: '#C88A5D' },
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00] via-[#3a1a00] to-[#1a0a00] bg-[length:400%_400%] animate-[gradientLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-amber-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Let Vastuvid K.K. Nagaich Guide Your Construction from Foundation to Housewarming
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    The construction phase is the single window for permanent Vastu corrections. Once concrete sets, Nav‑Ratna embedment, copper strip grids, and foundation deposits become impossible without demolition. Book a private New Construction Vastu consultation — covering all 9 sacred practices: Bhoomi Puja, Shilanyas, Garbh Vinyas, Ratna Sthapna, Dhatu Adhyay, Vastu Planning & Blueprint Audit, Construction Phase Rituals, Griha Pravesh, and Vastu Shanti — performed personally by a 4th‑generation Vastu Guru, MBA, Ex‑CEO with 20+ years of clinical practice and 2 Lakh+ clients worldwide. 「8†L16-L23」「13†L7-L10」「14†L30-L33」
                  </p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-amber-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
                    Schedule Your Construction Audit →
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
