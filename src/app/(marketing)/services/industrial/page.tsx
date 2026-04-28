import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function IndustrialVastuPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>

        {/* ═══════════════════════════════════════════════════════════════
            HERO – deep industrial navy/grey, full viewport
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.05),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-cyan-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
              Extensive Framework · विस्तृत ढांचा
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-cyan-400 bg-clip-text text-transparent">Industrial Vastu</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">
              Bhoomi Sanskar · Shilanyas · Vishwakarma Puja · Machinery Placement · Fire Zone Activation · Navagraha Shanti · Worker Productivity · Finished Goods Dispatch
            </p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">
              8 sacred industrial Vastu practices for factories, manufacturing plants, warehouses, GIDC/MIDC plots — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO.「0†L5-L8」「0†L5-L8」「1†L28-L34」
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-cyan-500 text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                Book Industrial Audit
              </Link>
              <Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                Explore Practices ↓
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            VASTU PURUSHA MANDALA – INDUSTRIAL APPLICATION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint for Industry</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                The Vastu Purusha Mandala – 64‑Grid Industrial Application
              </h2>
              <p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                For factories and industrial units, Vastu Shastra prescribes the Paramasayika Mandala (9×9 grid of 81 squares) or the Manduka Mandala (8×8 grid of 64 squares). The industrial plot is mapped onto this cosmic grid: Northeast (Ishanya) must remain light and open for water elements and administration; Southwest (Nairutya) bears the heaviest load — heavy machinery, raw materials, and overhead tanks; Southeast (Agneya) houses all fire elements — boilers, furnaces, generators, transformers; Northwest (Vayavya) governs movement — finished goods, dispatch, and air-driven utilities.「0†L5-L8」「0†L5-L8」「1†L28-L34」
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            THE 8 SACRED INDUSTRIAL VASTU PRACTICES
            ═══════════════════════════════════════════════════════════════ */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 8 Sacred Practices</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
                Authentic Vedic Pujas for Industrial Safety, Productivity & Growth
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
                Each practice is a precise Vedic intervention, performed at an astrologically determined Muhurta, to align your factory, plant, or industrial unit with cosmic forces governing safety, production, and expansion.
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  num: '01',
                  title: 'Bhoomi Puja / Factory Sthapana Puja (Industrial Groundbreaking)',
                  desc: '"Factory Sthapana Puja, also known as the Bhoomi Puja or Vastu Puja for industrial establishments, is a significant ritual performed before the inauguration or commencement of operations in a new factory or industrial setup." This puja invokes the blessings of Vastu Purush, Bhoomi Devi, and the Pancha Bhootas (five elements) to ensure peace, prosperity, safety, and smooth functioning. The ritual is performed at the Northeast corner of the site and includes Sankalpa, Ganesh Puja, Kalash Sthapana, and Havan. The four auspicious months for Bhoomi Puja are Baisakh, Shravan, Kartik, and Margshirsh.「2†L5-L10」「13†L10-L15」「2†L16-L20」',
                  features: ['Northeast corner ritual site', 'Vastu Purush & Bhoomi Devi invocation', 'Pancha Bhoota balancing', 'Sankalpa & Kalash Sthapana', 'Muhurta selection by planetary transit'],
                  color: '#E8B960',
                },
                {
                  num: '02',
                  title: 'Shilanyas (Foundation Stone Laying for Industrial Construction)',
                  desc: 'The Shilanyas ceremony — the ritual laying of the foundation stone — is one of the most crucial Vastu ceremonies for any industrial construction. "The first foundation stone on the plot should be kept on the South-Eastern side." The ritual includes Sutra-Pada (measuring the site plan), Ganesh Puja, and the sanctification of five bricks (worshipped as Nanda, Bhadra, Jaya, Rikta, and Purna) laid in the foundation pit. A consecrated stone is placed in the Southwest corner of the excavated trenches. The ceremony substitutes the earlier practice of Ishtika-nyasa.「8†L9-L14」「5†L32-L38」「1†L10-L15」',
                  features: ['SE corner first foundation stone', '5 consecrated bricks (Nanda-Purna)', 'Sutra-Pada site measurement', 'SW corner consecrated stone placement', 'Ganesh Puja & Sankalpa'],
                  color: '#C88A5D',
                },
                {
                  num: '03',
                  title: 'Vishwakarma Puja (Divine Protection for Machinery & Tools)',
                  desc: '"Lord Vishwakarma is regarded as the originator of mechanical sciences, Vastu Shastra, and creative craftsmanship." Celebrated annually on Kanya Sankranti, this puja is the most important ritual for factories, manufacturing units, and workshops. "The puja day begins with cleaning and arranging machines, vehicles, and instruments. Flowers, tilak, and prayers are offered to them before work pauses for rituals." The puja removes Vastu doshas, protects machinery and equipment, ensures worker safety, and enhances industrial prosperity. All tools and machines are worshipped — "working community and craftsmen worship their tools and usually refrain from using them on this auspicious occasion."「0†L9-L14」「9†L4-L9」「9†L40-L47」',
                  features: ['Annual Kanya Sankranti celebration', 'Machine & tool worship & cleaning', 'Worker safety blessing', 'Industrial prosperity & growth', 'Removes Vastu doshas from factory'],
                  color: '#FF9933',
                },
                {
                  num: '04',
                  title: 'Navagraha Shanti Puja & Havan (Planetary Balance for Industrial Harmony)',
                  desc: '"Navagraha Puja – Appeasing the nine planetary deities for positive influences." This ritual is combined with Vastu Puja to ensure the factory space aligns with Vastu principles. The Havan (fire ritual) involves offering ghee, herbs, and sacred materials into the fire while chanting mantras. Navagraha Shanti "pacifies malefic planets and strengthens benevolent planets, resulting in removal of obstacles in professional life." For industrial plants, this puja neutralises the planetary obstructions that cause equipment breakdowns, labour disputes, and production delays. "It makes the surroundings very positive and cheerful."「6†L4-L8」「6†L15-L19」「6†L20-L25」',
                  features: ['9 planetary deity appeasement', 'Ghee & herb Havan purification', 'Malefic planet neutralisation', 'Equipment breakdown prevention', 'Labour harmony & dispute resolution'],
                  color: '#6366F1',
                },
                {
                  num: '05',
                  title: 'Vastu Puja & Havan (Space Purification for Sick Units)',
                  desc: '"If any industrial unit is constructed as per Vaastu principles or the Vaastu defects of a sick unit are corrected, then certainly excellent results are seen." This comprehensive purification ritual includes Kalash Sthapana, Vastu Purusha invocation via specific mantras, Gangajal sprinkling across all zones, and a full Havan with ghee and sacred herbs. "Friendly Vastu has a positive effect on the work atmosphere, quality of work, quality of production, productivity, and profitability." For sick industrial units — those facing frequent breakdowns, quality issues, labour unrest, or declining output — this puja combined with directional remedies is the most powerful intervention.「3†L22-L27」「0†L22-L34」「14†L4-L8」',
                  features: ['Kalash Sthapana & Vastu Purusha invocation', 'Gangajal sprinkling across all zones', 'Ghee & herb Havan', 'Sick unit revival', 'Productivity & quality restoration'],
                  color: '#C10000',
                },
                {
                  num: '06',
                  title: 'Vastu Shanti Puja & Annual Renewal (Ongoing Industrial Energy Maintenance)',
                  desc: '"Vastu Shanti Puja is a sacred Vedic ritual performed to remove Vastu dosha (architectural or directional imbalance) from a property." This annual ritual combines Ganapati Puja, Navagraha Puja, Kalash Sthapana, and specific ceremonies to appease Vastu Purush. "Vastu Dosh Nivaran Puja should be performed to remove Vastu faults of any place — may it be Home, Office, Showroom, or a factory." For industrial units, annual Shanti Puja is recommended — especially after ownership changes, major accidents, significant expansions, or when production metrics decline without apparent cause.「14†L16-L20」「14†L21-L25」「14†L39-L44」',
                  features: ['Annual energy purification', 'Ganapati & Navagraha Puja', 'Vastu Purush appeasement', 'Kalash Sthapana renewal', 'Post-accident / expansion ritual'],
                  color: '#8B5CF6',
                },
                {
                  num: '07',
                  title: 'Worker Placement & Energy Direction (Productivity Alignment)',
                  desc: '"Workers facing to energy direction brings much more production." In industrial Vastu, worker placement is as critical as machinery placement. Workers operating heavy machinery should face East or North for maximum efficiency and safety. The production head should sit in the Southwest, facing East or North. Field staff and dispatch teams should be based in the Northwest (Vayavya). "Warm fire corner brings much more productivity for the business." Natural light on the factory floor boosts employee productivity and eliminates fatigue. "By strategically orienting workstations, machinery, and other elements according to Vastu guidelines, you can optimize productivity, minimize disruptions, and foster a supportive work atmosphere."「7†L14-L15」「7†L21-L27」「3†L12-L17」',
                  features: ['Workers face East/North for efficiency', 'Production head SW facing East', 'Field staff NW for movement energy', 'Natural light for fatigue reduction', 'Workstation orientation optimization'],
                  color: '#10B981',
                },
                {
                  num: '08',
                  title: 'Vastu Yantra Sthapana & Industrial Remedies (Non‑Structural Correction)',
                  desc: '"Yes, in most cases we use non‑structural remedies like elemental metal strips (copper, brass, lead), pyramids, colour balancing, crystals, yantras and directional programming of cabins and departments." Around 70–80% of industrial Vastu issues can be corrected through layout adjustments and directional remedies. Elemental metal strips — copper for earth imbalances, brass for space — are embedded at zone boundaries to seal or redirect negative energy. Vastu pyramids correct weak zones. Colour therapy activates specific directions. Yantras installed at critical junctions (main gate, production floor, owner\'s cabin) provide permanent, non‑demolition correction. "A professional Vastu consultant rectifies Vastu dosh without demolition, provided you have a professional taking care of your space."「16†L5-L10」「3†L12-L17」「16†L46-L49」',
                  features: ['Copper/brass/lead metal strips', 'Zone‑based pyramid placement', 'Colour therapy for directional activation', 'Yantra installation at critical junctions', '70-80% fixable without demolition'],
                  color: '#F59E0B',
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
            ZONE‑BY‑ZONE INDUSTRIAL CHECKLIST
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Industrial Vastu Zone‑by‑Zone Checklist
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                Verified across 99acres (2024), Housing.com, Squareyards, Aunkar Vastu, and Industrial Vastu expert guidelines.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { zone: 'Main Entrance Gate', dir: 'North, East, or NE', tip: 'Auspicious for profit flow. "Main entrance should be in North, East, or NE to invite positive energy." Gate large enough for goods movement; opens inward clockwise. Avoid SW/NW entrance. Wide gates on two sides recommended for large plots.「4†L11-L17」「4†L27-L32」「4†L6-L10」', color: '#E8B960' },
                { zone: 'Heavy Machinery', dir: 'Southwest, West, South', tip: 'All heavy machinery and plants in SW/S/W for stability and fewer breakdowns. "Northeast and centers of the building should be avoided for placing anything heavy." Light machinery in North & East.「0†L5-L8」「0†L5-L8」「1†L28-L34」「1†L4-L8」', color: '#C88A5D' },
                { zone: 'Boilers / Furnaces / Generators', dir: 'Southeast (Agni)', tip: 'All fire elements — boilers, ovens, furnaces, generators, transformers, chimneys, electric meters — must be in the SE corner. "The heat zone or the burners should be in the Southeast corner." Never place water sources in SE.「1†L4-L8」「1†L19-L21」「0†L25-L27」', color: '#EF4444' },
                { zone: 'Raw Material Storage', dir: 'Southwest, West, South', tip: '"Raw materials should be stored in the West" or South. Heavy raw materials in SW for stability. Liquid raw materials in North-Northeast. Scrap and waste in NW corner; garbage in SW pit.「10†L5-L8」「12†L31-L35」「12†L14-L18」', color: '#6366F1' },
                { zone: 'Finished Goods Dispatch', dir: 'Northwest (Vayavya)', tip: '"Finished goods move faster if they are placed in the wind zone (NW) of the factory." The NW direction governs movement and air — ideal for dispatch, packing, and shipping. Semi-finished goods (WIP) in West.「12†L41-L47」「7†L13-L14」「1†L13-L15」', color: '#F59E0B' },
                { zone: 'Administrative Office', dir: 'North or East', tip: 'Office building in North or East. MD/Owner sits in SW facing North/East. Accounts in SE. Front office/reception in NE. Workers face East/North for maximum productivity. Natural light essential.「1†L28-L34」「11†L10-L14」「11†L6-L9」', color: '#10B981' },
                { zone: 'Slope & Floor Design', dir: 'NE downward, SW upward', tip: '"Sloping of floors should be towards East, North and Northeast sides and never towards South, West." Thicker walls in South & West. Building height equal or shorter in East/North than South/West.「11†L6-L9」「11†L27-L31」「11†L47-L50」', color: '#06B6D4' },
                { zone: 'ETP / Water / Utilities', dir: 'West or NW, never NE', tip: 'ETP (Effluent Treatment Plant), compressors, chilling plants in West or NW. Overhead water tank in SW. Underground water tank in NE. "The NE zone must remain open and light — heavy utilities here cause structural affliction."「15†L4-L9」「15†L22-L26」「0†L22-L25」', color: '#8B5CF6' },
                { zone: 'Security / Guard Room', dir: 'Near main gate, SE or NW', tip: 'Guard room at SE side of East gate, or NW side of North gate. Boundary walls taller in South & West. Barbed wire in East & North boundaries. Plot shape: square or rectangular preferred; avoid irregular shapes.「4†L6-L10」「12†L11-L13」「11†L14-L17」', color: '#EC4899' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.zone}</h3>
                  <p className="text-xs text-nidra-indigo/50 mt-1 mb-2"><strong>Direction:</strong> {item.dir}</p>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            PLOT SHAPE + SLOPE GUIDE
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Plot Selection</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Industrial Plot Shape, Slope & Boundary Design
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                99acres (2024), Squareyards (2022), Housing.com & Industrial Vastu experts converge on these principles.「11†L14-L17」「11†L6-L9」「11†L27-L31」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl border border-emerald-200/30">
                <h3 className="font-serif text-xl text-emerald-700 font-bold mb-3">Ideal Plot Shape & Slope</h3>
                <p className="text-sm text-nidra-indigo/70 leading-relaxed">
                  Square or rectangular plots are preferred. "If sloped, the land should incline from South to North to optimise dry and moist zones." High in Southwest, low in Northeast. "The sloping of floors should be towards East, North and Northeast sides — and never towards South, West." Roads on at least two sides with wide gates. Thicker boundary walls in South & West; thinner in North & East for positive energy flow.「11†L14-L17」「11†L6-L9」「11†L27-L31」
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-amber-50/30 rounded-2xl border border-amber-200/30">
                <h3 className="font-serif text-xl text-amber-700 font-bold mb-3">Avoidable Industrial Plot Defects</h3>
                <p className="text-sm text-nidra-indigo/70 leading-relaxed">
                  Avoid plots near stagnant water, pollution sources, or cemeteries. Irregular shapes (triangular, L‑shaped) create directional energy voids. Southwest corner must be exactly 90°. Missing or cut Northeast corners "disrupt the flow of vital energies." The ETP, compressor room, or heavy utilities must never occupy the NE zone — a common industrial Vastu error that causes structural affliction and production instability.「11†L14-L17」「15†L4-L9」「7†L44-L50」
                </p>
              </div>
            </div>
            <p className="text-xs text-nidra-indigo/40 text-center mt-4">
              Sources: 99acres Factory Layout Guide (2024); Squareyards Factory Vastu (2022); Housing.com Industrial Vastu Tips; Aunkar Vastu Industrial Layout (2026)
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            REMEDIES WITHOUT DEMOLITION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Non‑Invasive Corrections</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Remedies Without Demolition — 70‑80% Fixable Without Structural Change
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                "Yes, in most cases we use non‑structural remedies like elemental metal strips (copper, brass, lead), pyramids, colour balancing, crystals, yantras and directional programming of cabins and departments." — KP Tripathi, Vastu Expert「16†L5-L10」「3†L12-L17」「3†L28-L31」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'Elemental Metal Strips', desc: 'Copper strips (Earth) or brass strips (Space) embedded in floor grooves to seal or redirect negative energy at incorrect entrances, toilet doshas, and zone imbalances. "The purpose of this Space Surgery technique is to block any unfavourable activity permanently without any demolition."「16†L5-L10」「16†L38-L45」', color: '#E8B960' },
                { title: 'Vastu Pyramids', desc: 'Copper pyramids for grounding tech-heavy areas, crystal pyramids for energy balancing, brass pyramids for financial zones. "Strategically placed to enhance weak zones (NE) or neutralise negative fields near incorrect entrances." 9‑pyramid cosmic energy arrays recommended for large industrial floors.「16†L5-L10」「0†L5-L8」', color: '#FF9933' },
                { title: 'Colour Therapy & Directional Painting', desc: 'Light green in East for growth, yellow in North for wealth, white/cream in NE for clarity, warm orange in SE for fire activation. "Avoid dark colours — they induce lethargy and sleepiness." Paint east walls with green shades.「3†L34-L38」「3†L28-L31」', color: '#10B981' },
                { title: 'Crystal Grids & Wind Chimes', desc: 'Clear quartz grid in NE for energy amplification. "Wind chimes with 5‑6 rods in NW encourage positive communication and client flow. The sound vibrations break stagnant energy patterns." Amethyst clusters in SW for grounding.「0†L5-L8」', color: '#6366F1' },
                { title: 'Yantra Installation', desc: 'Vastu Purush Yantra in NE for overall alignment. Shri Yantra in accounts for prosperity. Kuber Yantra in North for wealth flow. Mangal Yantra in South for accident prevention. "Each yantra must be energised through specific mantras before placement."「16†L5-L10」', color: '#06B6D4' },
                { title: 'Directional Programming', desc: 'Reprogramming cabin layouts, workstation orientation, and department zones without structural change. "Layout-based correction (without unnecessary demolition) — customized remedies based on factory structure." Combined approach of traditional Vastu + modern industrial engineering.「3†L12-L17」「16†L46-L49」', color: '#EC4899' },
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] bg-[length:400%_400%] animate-[gradientLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-cyan-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Let Vastuvid K.K. Nagaich Transform Your Factory
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Every industrial unit has a unique energy signature. Book a private industrial Vastu consultation — covering all 8 sacred pujas, zone‑by‑zone audit, machinery placement optimisation, worker productivity alignment, and personalised non‑structural remedies — performed personally by a 4th‑generation Vastu Guru, MBA, Ex‑CEO with 20+ years of clinical practice and 2 Lakh+ clients worldwide.「3†L22-L27」「16†L5-L10」
                  </p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-cyan-500 text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
                    Schedule Your Industrial Audit →
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
