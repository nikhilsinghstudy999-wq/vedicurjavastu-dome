import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function CommercialVastuPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>

        {/* ═══════════════════════════════════════════════════════════════
            HERO – deep navy/maroon, full viewport
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a3a5c] to-[#0a1628]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.06),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-emerald-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
              Extensive Framework · विस्तृत ढांचा
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-emerald-400 bg-clip-text text-transparent">Commercial Vastu</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">
              Pratishthan Vastu · Kuber Zone Activation · Cash Counter Alignment · Owner Seating · Employee Productivity Grid · Entrance Correction · Business Puja & Havan
            </p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">
              9 sacred commercial Vastu practices, performed by Vastuvid K.K. Nagaich — 4th generation Guru, MBA, Ex‑CEO — for offices, shops, showrooms, factories & institutions. 「6†L8-L13」「7†L8-L13」「8†L5-L7」
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-emerald-500 text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                Book Commercial Audit
              </Link>
              <Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                Explore Practices ↓
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            64‑GRID VASTU PURUSHA – COMMERCIAL APPLICATION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint for Business</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                The Vastu Purusha Mandala – 64‑Grid Commercial Architecture
              </h2>
              <p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                For commercial and institutional buildings, Vastu Shastra prescribes the <strong>Manduka Mandala</strong> — an 8×8 grid of 64 squares (padas), where the Vastu Purusha lies with his head in the northeast (Ishanya), feet in the southwest (Nairutya), right arm in the southeast (Agneya), and left arm in the northwest (Vayavya). Each of the 64 squares is governed by a specific deity. For towns and large commercial complexes, the 64‑grid is the prescribed standard, while the 81‑grid (Paramasaayika Mandala) is reserved for temples. 「24†L4-L8」「24†L14-L18」「24†L40-L42」
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            THE 9 SACRED COMMERCIAL VASTU PRACTICES
            ═══════════════════════════════════════════════════════════════ */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 9 Sacred Practices</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
                Authentic Vedic Pujas for Business Growth & Financial Stability
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
                Each practice is a precise Vedic intervention, performed at an astrologically determined Muhurta, to align your commercial space with cosmic forces governing wealth, leadership, and growth.
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  num: '01',
                  title: 'Ganapati Puja & Lakshmi Puja (Business Opening Ceremony)',
                  desc: 'The foremost deities for any commercial venture. Lord Ganesha is worshipped first — "the foremost deity and must be worshiped prior to starting any new venture" — to remove all obstacles. Goddess Lakshmi is then invoked for financial prosperity and wealth attraction. The idols of Lord Ganesha and Goddess Lakshmi should be installed on the right-hand side or in the North-East corner of the shop. This dual puja is the foundation of every new office, shop, showroom, factory, or restaurant inauguration. 「7†L14-L17」「8†L22-L24」「10†L15-L16」',
                  features: ['Ganesh Puja for obstacle removal', 'Lakshmi Puja for prosperity', 'Idol placement NE or right side', 'Prasad distribution to all staff', 'Muhurta selection by planetary transit'],
                  color: '#E8B960',
                },
                {
                  num: '02',
                  title: 'Kuber Yantra Sthapana (Wealth Zone Activation)',
                  desc: 'The Kuber Yantra is placed on the North wall (Kubera zone) near the accounts desk. "The north direction is associated with wealth and career." The yantra must be made of metal — copper or silver is preferred — and should be placed at eye level behind the accounts desk facing East or North. An energised Kuber Yantra "increases the flow of finances and boosts financial stability." The cash locker should be in the South-West, opening towards North, ensuring accumulated wealth is protected and flows inward. 「3†L5-L8」「14†L3-L8」「13†L14-L19」',
                  features: ['North wall Kuber Yantra installation', 'Copper/silver metal yantra preferred', 'Cash locker SW opening North', 'Daily ghee lamp & incense activation', 'Accounts desk facing East/North'],
                  color: '#10B981',
                },
                {
                  num: '03',
                  title: 'Shri Yantra / Mahalakshmi Yantra (Geometric Prosperity)',
                  desc: 'The Shri Yantra (Sri Chakra) is considered the geometric essence of prosperity and harmony. It should be placed in the East or North-East (Ishanya) on a clean platform above waist height, preferably on a yellow or white cloth, with one triangle point facing East. The best material is crystal (sphatik) or panchadhātu. "If the yantra is worshipped regularly, then there is immense growth in business." The yantra must never be placed under beams, near toilets, or on vibrating surfaces. 「13†L7-L14」「28†L4-L7」「28†L30-L36」',
                  features: ['East/NE placement above waist height', 'Crystal or panchadhātu material', 'Triangle point facing East', 'Daily sankalpa (intention) ritual', 'Light ghee lamp in front of yantra'],
                  color: '#FFD700',
                },
                {
                  num: '04',
                  title: 'Vastu Puja & Havan (Space Purification & Elemental Balancing)',
                  desc: 'Before occupying any new commercial space, Vastu Puja aligns the premises with Vastu principles for harmony. The ritual includes Kalash Sthapana, Vastu Purusha invocation via specific mantras, and Havan — offering ghee, herbs, and sacred materials into the fire while chanting mantras. "Havan (Fire Ritual) – Offering sacred items into the fire while chanting mantras." This purifies the five elements, removes pre-existing Vastu doshas, and creates a spiritually charged environment for business operations. 「15†L4-L10」「4†L4-L9」「30†L4-L8」',
                  features: ['Kalash Sthapana & Vastu Purusha invocation', 'Ghee & herb Havan purification', 'Five-element balancing', 'Removal of pre-existing doshas', 'Space energisation for business success'],
                  color: '#C10000',
                },
                {
                  num: '05',
                  title: 'Navagraha Shanti Puja (Planetary Balance for Business)',
                  desc: 'The nine planetary deities are appeased through Navagraha Puja to neutralise malefic planetary influences that may impact business. "Navagraha Shanti Puja eliminates various physical, mental, and financial issues." This puja "clears obstacles in business or professional life, promoting economic growth and success." The ritual includes specific mantra chanting for each of the nine planets — particularly Saturn (Shani), Rahu, and Ketu — which most commonly obstruct business progress. 「23†L4-L9」「23†L44-L48」「19†L6-L8」',
                  features: ['9 planetary deity appeasement', 'Saturn/Rahu/Ketu obstruction removal', 'Specific mantra for each planet', 'Homa (fire ritual) included', 'Financial & professional growth'],
                  color: '#6366F1',
                },
                {
                  num: '06',
                  title: 'Vyapar Vriddhi Puja (Business Growth & Expansion Ritual)',
                  desc: '"Vyapar Vriddhi Puja is a powerful Vedic ritual to remove business obstacles, balance planetary and Vastu energies, and attract sustained growth, prosperity, and protection." This specialised puja is designed for existing businesses facing stagnation, declining sales, or operational challenges. It combines Ganesh-Lakshmi worship with specific Vyapar Vriddhi mantras, Havan, and the installation of Sampurna Vyapaar Vriddhi Yantra in the business premises. 「19†L26-L31」「28†L8-L12」',
                  features: ['Ganesh-Lakshmi worship for stagnation', 'Vyapar Vriddhi mantra chanting', 'Sampurna Vyapaar Vriddhi Yantra installation', 'Havan for energy renewal', 'Sustained growth & protection'],
                  color: '#F59E0B',
                },
                {
                  num: '07',
                  title: 'Griha Pravesh / Office Opening Puja (Space Inauguration)',
                  desc: '"Griha Pravesam is a pooja done to signify officially start residing at a new house or using a new office/factory." The ceremony includes the traditional milk-boiling ritual — where milk overflows from the pot, symbolising "an abundance of wealth" — coconut breaking, Kalash Puja, and sacred Havan. The office roof must be complete, doors fitted, and the Muhurta selected astrologically. BJP\'s Delhi state unit performed Griha Pravesh and sacred Havan rituals at their new office in 2025. 「17†L10-L13」「17†L4-L9」「17†L34-L37」',
                  features: ['Milk-boiling prosperity ritual', 'Coconut breaking', 'Kalash Puja & sacred Havan', 'Muhurta by planetary transit', 'Formal space inauguration'],
                  color: '#EC4899',
                },
                {
                  num: '08',
                  title: 'Subh Labh - Riddhi Siddhi Sthapana (Auspicious Symbol Activation)',
                  desc: '"Auspicious symbols such as a Swastika should be marked and \'Shubh-Labh\'; \'Riddhi-Siddhi\' words written on the wall in the shop." The entrance should be decorated with mango leaves, banana leaves, coconuts, and flowers. The Swastik symbol drawn above the entrance, Pooja Room, and cash counter attracts wealth and prosperity. Riddhi-Siddhi represents the two attendants of Lord Ganesha — symbolising spiritual accomplishment and material success. "The entrance should be decorated with auspicious symbols like Shubh Labh, Riddhi-Siddhi, and Swastik. This helps remove Vastu dosh and enhances good luck." 「10†L16-L18」「7†L21-L23」「18†L41-L44」',
                  features: ['Swastik mark above entrance', 'Shubh-Labh wall inscription', 'Mango/banana leaf door decoration', 'Riddhi-Siddhi symbol placement', 'Vastu dosha removal via symbols'],
                  color: '#FF9933',
                },
                {
                  num: '09',
                  title: 'Vastu Shanti Puja & Annual Renewal (Ongoing Energy Maintenance)',
                  desc: '"Hindus perform the Vastu Shanti Pooja ritual to bring fortune, wealth, success, & good health." This annual cleansing ritual combines Vastu Purusha invocation, Kalash Sthapana, Gangajal sprinkling, Ashoka leaf placement at the main door, and sacred Havan with ghee and herbs. "It clears off bad energy and fosters harmony in the workplace." For businesses, this puja is recommended annually — especially after significant events like ownership changes, major losses, renovation, or during Dhanteras/Diwali. 「30†L21-L25」「30†L26-L31」「26†L27-L31」',
                  features: ['Annual energy purification', 'Kalash Sthapana & Gangajal sprinkling', 'Ashoka leaf & Swastik door placement', 'Ghee & herb Havan', 'Recommended annually or after major events'],
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
            DIRECTIONAL ZONE CHECKLIST
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Commercial Vastu Zone‑by‑Zone Checklist
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                Divine Vastu (worldofdivinevastu.com) & DNA India commercial Vastu guidelines — verified for offices, shops, and factories.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { zone: 'Main Entrance', dir: 'North, East, or NE', tip: 'Largest door; opens inward; Swastik/Om/Shubh-Labh symbols; no threshold (door-sill); avoid SE/NW/SW entrance. Singhmukhi (broad front, narrow rear) shape is auspicious for commercial. 「10†L3-L8」「10†L11-L13」「8†L13-L17」', color: '#E8B960' },
                { zone: 'Owner\'s Cabin', dir: 'Southwest', tip: 'Face North or East while seated; southwest provides stability, authority, and clear decision-making. Avoid sitting directly in line with door. Strong wall behind. 「6†L11-L13」「7†L30-L32」「8†L32」', color: '#C88A5D' },
                { zone: 'Cash Counter', dir: 'North', tip: 'Face North or East; cash box along South wall opening North. Mirror inside locker reflects and symbolically doubles wealth. Never leave cash box empty. 「1†L10-L14」「1†L18-L20」「29†L4-L8」', color: '#10B981' },
                { zone: 'Reception', dir: 'Northeast', tip: 'Receptionist faces North or East. Reception desk left of entrance, cash counter right of reception. Northeast must stay clutter-free and light. 「21†L11-L14」「7†L47-L49」「10†L31-L32」', color: '#6366F1' },
                { zone: 'Marketing / Sales', dir: 'Northwest', tip: 'Marketing department in Northwest for communication and client flow. All sales staff sit NW facing East/North. Wind chimes with 5‑6 rods activate air element. 「10†L29-L30」「7†L44」「21†L17-L19」', color: '#06B6D4' },
                { zone: 'Accounts / Finance', dir: 'Southeast', tip: 'Accounts files in SE corner shelf. Computer room in SE. Avoid water features, blue/black colours in SE — they extinguish the fire element, causing cash crunches. 「10†L28-L29」「10†L35-L36」「12†L17-L20」', color: '#EF4444' },
                { zone: 'Conference Room', dir: 'Northwest or West', tip: 'Head of table faces East or North. No beams above the table. West side meeting hall for effective negotiations. 「11†L27-L28」「8†L13」', color: '#8B5CF6' },
                { zone: 'Employee Workstations', dir: 'East or North facing', tip: 'All staff perform best seated in East/North direction. Senior employees in South, juniors in West. Field staff in NW. Never sit under a beam — increases stress. 「21†L4-L8」「21†L17-L21」「21†L40-L42」', color: '#F59E0B' },
                { zone: 'Inventory / Storage', dir: 'Southwest', tip: 'Heavy items, raw materials, dead stock in SW. Finished goods in NW for quick dispatch. SW zone must feel heavy and grounded — never keep it empty or light. 「9†L23-L25」「10†L25-L27」', color: '#EC4899' },
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
            PLOT SHAPE GUIDE
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Plot Selection</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Gaumukhi vs Singhmukhi — Which Shape for Your Business?
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                DNA India, Squareyards & 99acres converge on the same principles — Shermukhi (Lion Face) is the recommended commercial shape. 「8†L13-L17」「25†L4-L9」「25†L21-L27」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl border border-emerald-200/30">
                <h3 className="font-serif text-xl text-emerald-700 font-bold mb-3">Singhmukhi (Lion Face) — Auspicious for Commercial</h3>
                <p className="text-sm text-nidra-indigo/70 leading-relaxed">
                  Width more in front, less in rear. "If the width of a shop or commercial office is more in the front and less in the rear, the shape is called Singhmukhi, it is auspicious and beneficial for commercial purposes." Symbolises a lion entering — power, courage, control. Attracts customers through the broader entrance. Best for shops, showrooms, and retail. 「8†L15-L17」「25†L21-L27」
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-amber-50/30 rounded-2xl border border-amber-200/30">
                <h3 className="font-serif text-xl text-amber-700 font-bold mb-3">Gaumukhi (Cow Face) — Better for Residential</h3>
                <p className="text-sm text-nidra-indigo/70 leading-relaxed">
                  Width less in front, more in rear. "If a shop or commercial office has the width in the front less than that in the rear, it is known as Gaumukhi shape. Such shapes cause legal problems and threat from government agencies." Square and rectangular shapes are always auspicious. 「8†L13-L15」「10†L3-L5」
                </p>
              </div>
            </div>
            <p className="text-xs text-nidra-indigo/40 text-center mt-4">
              Sources: DNA India (2018); Squareyards Gaumukhi & Shermukhi Guide (2023); 99acres (2021); Divine Vastu Commercial Tips
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
                Remedies Without Demolition — Proven Commercial Corrections
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                "Yes, in most cases we use non‑structural remedies like elemental metal strips (copper, brass, lead), pyramids, colour balancing, crystals, yantras and directional programming." — KP Tripathi, Vastu Expert 「2†L5-L9」「12†L29-L40」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'Elemental Metal Strips', desc: 'Copper strips (Earth) or brass strips (Space) embedded in the floor to seal or cut negative areas like toilets in NE or North. Purpose: permanently block anti‑activity without demolition. Used for entrance correction, toilet dosha, and zone sealing. 「2†L4-L9」「12†L31-L33」', color: '#E8B960' },
                { title: 'Vastu Pyramids', desc: 'Copper for grounding tech-heavy areas, crystal for emotional calm, brass for financial zones. Strategically placed to enhance weak zones (NE) or neutralise negative fields near incorrect entrances. "Place copper pyramid under mattress" for cosmic energy. 「32†L4-L8」「32†L16-L21」「12†L33-L35」', color: '#FF9933' },
                { title: 'Colour Therapy', desc: 'Light green (growth) and yellow (prosperity) in office decor. Green/blue in North for opportunities; red/pink in SE for cash flow. Avoid dark colours — "they induce lethargy and sleepiness." Light green, light blue, light orange recommended. 「31†L4-L9」「31†L45-L51」「6†L18-L19」', color: '#10B981' },
                { title: 'Crystal Ball & Wind Chimes', desc: 'Crystal ball in SE to activate financial energy. Wind chimes with 5‑6 rods in NW for communication and client attraction. "The sound vibrations break stagnant energy patterns." Crystals have mystic healing power. 「6†L20」「32†L46-L49」', color: '#6366F1' },
                { title: 'Water Features', desc: 'Aquarium with 9 gold fish + 1 black fish in NE corner. Small tabletop fountain in NE or East — visible from reception, inward flow. "Water flowing from north to east is very good." Change water daily for sustained positive energy. 「27†L4-L8」「27†L10-L13」「13†L31-L35」', color: '#06B6D4' },
                { title: 'Mirror Placement', desc: 'A mirror inside the cash locker door — when opened, it reflects the money, symbolically doubling wealth. Place mirror on North or East wall. Never place mirror opposite the main door or reflecting negative spaces. 「29†L4-L8」「29†L26-L31」', color: '#EC4899' },
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1a3a5c] to-[#0a1628] bg-[length:400%_400%] animate-[gradientLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-emerald-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Let Vastuvid K.K. Nagaich Transform Your Business
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Every commercial space has a unique energy signature. Book a private commercial Vastu consultation — covering all 9 sacred pujas, zone‑by‑zone audit, owner seating optimisation, employee productivity alignment, and personalised remedies — performed personally by a 4th‑generation Vastu Guru with 20+ years of clinical practice, an MBA, and Ex‑CEO credentials. 「6†L5-L8」「7†L4-L13」「8†L4-L7」
                  </p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-emerald-500 text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
                    Schedule Your Commercial Audit →
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
