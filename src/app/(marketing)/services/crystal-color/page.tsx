import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function CrystalColorTherapyPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>

        {/* ═══════════════════════════════════════════════════════════════
            HERO – deep violet/amethyst/purple, full viewport
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#2d1050] to-[#1a0a2e]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.12),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-violet-400/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-emerald-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
              Advance Treatments · उन्नत उपचार
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-violet-300 via-emerald-300 to-prakash-gold bg-clip-text text-transparent">Crystal & Color Therapy</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">
              Crystal Grids (Amethyst, Clear Quartz, Black Tourmaline, Rose Quartz, Citrine) · Colour Directional Therapy · Elemental Balancing · Chakra‑Aligned Placement · Room‑by‑Room Colour Prescriptions · EMF Absorption · Emotional & Physical Harmonisation
            </p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">
              Sacred crystal and colour energy correction — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO — for homes, offices, healing spaces, and spiritual sanctuaries. Two of the most gentle, non‑invasive Vastu remedies available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-violet-500 via-emerald-500 to-prakash-gold text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                Book Crystal & Colour Consultation
              </Link>
              <Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                Explore Practices ↓
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            CRYSTAL + COLOR SCIENCE SECTION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Science of Light & Earth</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Crystal Vibrations & Colour Frequencies – The Two Gentle Giants of Vastu Correction
              </h2>
              <p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                Crystals and colours are the two most gentle, non‑invasive remedies in the Vastu pharmacopoeia. Each crystal vibrates at a specific, measurable frequency — amethyst at 432 Hz for neurological calm, clear quartz at 528 Hz for cellular repair, black tourmaline at 396 Hz for EMF absorption. Each colour wavelength corresponds to a specific directional element: warm tones activate the fire element in the Southeast, cool tones calm the water element in the Northeast, earthy tones ground the Southwest. Together, they form a complete, non‑demolition energy‑correction system — prescribed by Vastuvid K.K. Nagaich based on your space's precise elemental imbalances and directional doshas.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            THE CRYSTAL & COLOR THERAPY PRACTICES
            ═══════════════════════════════════════════════════════════════ */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Sacred Crystal & Colour Practices</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
                Authentic Crystal Grid & Colour Therapy for Elemental Harmony
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
                Each practice deploys specific crystals and precise colour wavelengths — selected by Vastuvid K.K. Nagaich — to correct directional imbalances, amplify positive zones, and restore elemental harmony without structural change.
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  num: '01',
                  title: 'The 5‑Element Crystal Grid (Pancha Mahabhuta Crystal Array)',
                  desc: 'The most comprehensive crystal correction grid in Vastu Shastra. Five specific crystals — each corresponding to one of the five elements — are placed at their respective directional zones. Clear Quartz in the Northeast (Water element, spiritual amplification), Citrine in the Southeast (Fire element, abundance and cash flow), Black Tourmaline in the Southwest (Earth element, grounding and protection), Aquamarine in the Northwest (Air element, communication and movement), and Amethyst in the Centre (Space element, universal harmony). Each crystal is geometrically cut, energised through planetary mantras, and placed at a specific angle to maximise its vibrational field. The 5‑element grid is the foundation of all crystal‑based Vastu corrections — once installed, it creates a balanced elemental energy field across the entire property that requires only annual re‑energisation.',
                  features: ['5 crystals for 5 elements at 5 directional zones', 'Clear Quartz NE, Citrine SE, Black Tourmaline SW', 'Aquamarine NW, Amethyst Centre (Brahmasthan)', 'Geometrically cut & planetary mantra energised', 'Annual re‑energisation only — no monthly upkeep'],
                  color: '#8B5CF6',
                },
                {
                  num: '02',
                  title: 'Black Tourmaline EMF & Geopathic Stress Absorption Protocol',
                  desc: 'Black Tourmaline is the single most effective crystal for electromagnetic field absorption and geopathic stress neutralisation. In modern homes, Wi‑Fi routers, mobile phones, and electrical wiring generate continuous EMF radiation — compounded by natural geopathic stress from underground water veins and fault lines. A Black Tourmaline grid — one piece in each corner of every room — absorbs and transmutes this harmful radiation. "Black Tourmaline protects against all forms of negative energy, geopathic stress, and EMFs." Additional pieces placed directly next to Wi‑Fi routers, electrical panels, and on bedside tables provide targeted absorption. The crystal does not require cleansing — it naturally discharges absorbed negativity to the earth. Replaced every 12‑18 months as the crystal structure gradually saturates with absorbed energy.',
                  features: ['One Black Tourmaline per room corner — complete EMF grid', 'Beside Wi‑Fi router & electrical panel for targeted absorption', 'Natural self‑discharge — no monthly cleansing required', 'Replace every 12‑18 months upon saturation', 'Also neutralises underground geopathic stress radiation'],
                  color: '#111111',
                },
                {
                  num: '03',
                  title: 'Amethyst Clusters for Sleep Quality & Neurological Calm (NE & Bedroom Protocol)',
                  desc: 'Amethyst clusters — the crystal form with the highest vibrational surface area — are the premier crystal for sleep improvement, anxiety reduction, and neurological calm. Placed on the bedside table (left side, closer to the heart) or under the bed in the Southwest corner, amethyst creates a calming field that measurably improves sleep onset, reduces nightmare frequency, and deepens REM cycles. In the Northeast corner (Ishanya), an amethyst cluster amplifies spiritual connection and mental clarity. For children\'s bedrooms, a small amethyst point placed in the Northwest corner reduces hyperactivity and improves concentration. Amethyst must be cleansed under moonlight monthly — never salt water, which erodes the crystal surface.',
                  features: ['Bedside amethyst cluster for sleep & anxiety reduction', 'NE corner amethyst for spiritual clarity', 'Children\'s NW amethyst for hyperactivity reduction', 'Moonlight cleansing monthly — never salt water', 'Highest vibrational surface area — cluster form preferred'],
                  color: '#7C3AED',
                },
                {
                  num: '04',
                  title: 'Rose Quartz Relationship & Emotional Healing Grid (SW Master Bedroom)',
                  desc: 'Rose Quartz is the crystal of unconditional love and emotional healing. In the master bedroom — specifically the Southwest corner — a Rose Quartz sphere or heart‑shaped crystal activates the love frequency and harmonises relationship energy between partners. Two Rose Quartz points placed on either side of the bed balance the masculine and feminine energies, reducing conflict and increasing emotional intimacy. For singles, Rose Quartz in the Southwest corner opens the heart chakra and attracts compatible partnerships. In the living room, a Rose Quartz cluster in the East or Northeast "promotes family harmony." Rose Quartz must be cleansed under moonlight and re‑energised with a simple Sankalpa (intention) — "visualize pink‑golden light connecting with your heart centre."',
                  features: ['SW master bedroom Rose Quartz sphere for relationship harmony', 'Dual bedside Rose Quartz for masculine‑feminine balance', 'Singles: SW Rose Quartz for partnership attraction', 'Living room East/NE cluster for family harmony', 'Moonlight cleansing + Sankalpa intention re‑energisation'],
                  color: '#EC4899',
                },
                {
                  num: '05',
                  title: 'Clear Quartz Master Amplifier – Brahmasthan & Directional Grid Programming',
                  desc: 'Clear Quartz is the programmable master amplifier of the crystal world. It stores, amplifies, and transmits any intention programmed into it. In the Vastu Purusha Mandala, Clear Quartz is placed at the Brahmasthan (centre of the property) as the master crystal that coordinates all other crystals in the grid. "Clear quartz when placed in workspace helps focusing." Additional points are placed at each of the four cardinal directions — North (wealth), East (health), South (protection), and West (creativity) — creating a directional grid that amplifies positive energy flow into those zones. Each point is programmed through a specific mantra — "Om" for the centre, "Om Shreem Mahalakshmiyei Namaha" for North, "Om Dhanvantre Namaha" for East. Clear Quartz must be cleansed under sunlight for 3‑4 hours monthly to discharge accumulated energy and reprogrammed.',
                  features: ['Brahmasthan master Clear Quartz — grid coordinator', '4 cardinal points: N (wealth), E (health), S (protection), W (creativity)', 'Mantra‑specific programming for each directional point', 'Monthly sunlight cleansing (3‑4 hours)', 'Programmable — stores any intention indefinitely'],
                  color: '#E2E8F0',
                },
                {
                  num: '06',
                  title: 'Directional Colour Therapy – Room‑by‑Room Colour Prescription Protocol',
                  desc: 'Every direction responds to a specific colour wavelength — and every room in your home has a prescribed colour palette derived from the element governing that direction. Northeast (Water element): soft white, cream, light yellow, or pale blue — "the northeast corner should be a serene, light‑colored space." Southeast (Fire element): warm orange, coral, peach, terracotta, soft pink — colours that activate the fire element without overwhelming it. Southwest (Earth element): earthy browns, warm beige, pastel peach, light pink — grounding tones that stabilise relationships. Northwest (Air element): light grey, sky blue, soft silver — colours that encourage movement and communication. Centre (Space element): white, cream, light yellow — the most neutral palette to maintain universal balance. Colour therapy is one of the simplest yet most powerful Vastu remedies — a fresh coat of paint in the prescribed directional colour can activate a weak zone within 48 hours.',
                  features: ['NE: white, cream, light yellow, pale blue (Water)', 'SE: warm orange, peach, terracotta, pink (Fire)', 'SW: earthy browns, warm beige, pastel peach (Earth)', 'NW: light grey, sky blue, soft silver (Air)', 'Centre: white, cream, light yellow (Space — neutral)'],
                  color: '#FFD700',
                },
                {
                  num: '07',
                  title: 'Chakra‑Aligned Crystal Placement for Physical & Energetic Wellness',
                  desc: 'The seven chakras — the body\'s energy centres — correspond directly to the seven directional zones of a Vastu‑compliant home. Root Chakra (Southwest): Red Jasper or Black Tourmaline for grounding and stability. Sacral Chakra (West): Carnelian for creativity and emotional fluidity. Solar Plexus Chakra (Centre): Citrine for personal power and confidence. Heart Chakra (East): Rose Quartz or Green Aventurine for love and compassion. Throat Chakra (North): Blue Lace Agate or Lapis Lazuli for communication. Third Eye Chakra (Northeast): Amethyst or Sodalite for intuition. Crown Chakra (Centre/Brahmasthan): Clear Quartz for universal connection. Each crystal is placed at the corresponding directional zone — when the body moves through the home, it naturally passes through these chakra‑aligned energy fields, creating a silent healing environment that operates 24 hours a day.',
                  features: ['7 chakras → 7 directional zones → 7 crystals', 'Root‑SW (Red Jasper), Sacral‑W (Carnelian), Solar‑C (Citrine)', 'Heart‑E (Rose Quartz), Throat‑N (Blue Lace), Third Eye‑NE (Amethyst)', 'Crown‑Brahmasthan (Clear Quartz)', '24‑hour silent healing environment'],
                  color: '#10B981',
                },
                {
                  num: '08',
                  title: 'Crystal & Colour Integration Protocol – The Combined Amplification Effect',
                  desc: 'The most powerful application of these two therapies is their combined deployment. When a crystal is placed in a zone already painted in the prescribed directional colour, the effect is not additive — it is multiplicative. A Citrine crystal in the Southeast corner of a room painted in soft peach — the fire element is amplified threefold. A Clear Quartz point in the Northeast of a room painted in cream — the spiritual water energy is amplified while remaining calm. Conversely, placing a cooling crystal (Amethyst, Blue Lace) in a red‑painted room creates energetic dissonance — the colour activates while the crystal suppresses, generating a conflicting energy field that can cause mental restlessness. Vastuvid K.K. Nagaich conducts a full elemental audit of your space before prescribing any crystal or colour — ensuring the two therapies amplify rather than cancel each other.',
                  features: ['Combined deployment = multiplicative, not additive', 'Citrine + peach walls = 3× fire element amplification', 'Clear Quartz + cream NE = balanced spiritual energy', 'Avoid: Amethyst in red room = energetic dissonance', 'Full elemental audit before any crystal‑colour pairing'],
                  color: '#FF9933',
                },
                {
                  num: '09',
                  title: 'Crystal Maintenance, Cleansing & Annual Re‑Energisation Protocol',
                  desc: 'Crystals are living energy sponges — they absorb, transmute, and hold energy within their molecular lattice. Over time, they saturate. Black Tourmaline, used for EMF absorption, saturates fastest — every 12‑18 months. Clear Quartz and Amethyst require monthly cleansing. Rose Quartz benefits from moonlight rather than sunlight, while Citrine — unique among crystals — never requires cleansing as it naturally discharges negativity. The annual Vastu Shanti Havan serves as a collective re‑energisation ceremony — all crystals from the property are placed around the sacred fire, charged with ghee‑offering mantras, and returned to their positions with renewed vibrational potency. "Change the crystals every six months to ensure the best outcomes." A structured maintenance calendar is prescribed by Vastuvid K.K. Nagaich for every crystal installation.',
                  features: ['Black Tourmaline: replace every 12‑18 months (EMF saturation)', 'Clear Quartz & Amethyst: monthly moonlight cleansing', 'Rose Quartz: moonlight only (no sunlight, no salt water)', 'Citrine: never requires cleansing — self‑discharging', 'Annual Vastu Shanti Havan collective re‑energisation'],
                  color: '#6366F1',
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
            CRYSTAL & COLOR QUICK REFERENCE
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Crystal & Colour Reference Matrices — Room by Room, Direction by Direction
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                Verified colour prescriptions aligned with each of the five elements and their governing directions. Each crystal is matched to its optimal directional placement.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { entity: 'Northeast (Ishanya)', color: 'Soft white, cream, pale yellow, light blue', colorHex: '#FEF3C7', crystal: 'Clear Quartz, Amethyst, Sodalite', purpose: 'Spiritual amplification, mental clarity, divine connection. "The northeast is the most sacred zone — keep light and serene."' },
                { entity: 'East', color: 'White, light green, pale blue, cream', colorHex: '#ECFDF5', crystal: 'Green Aventurine, Rose Quartz, Aquamarine', purpose: 'Health, growth, new beginnings. "East governs health and social connections — soft, uplifting colours stimulate vitality."' },
                { entity: 'Southeast (Agneya)', color: 'Warm orange, peach, terracotta, soft pink', colorHex: '#FED7AA', crystal: 'Citrine, Carnelian, Red Jasper', purpose: 'Fire activation, cash flow, metabolism. "Warm colours in the SE activate the fire element without overwhelming — never use cool tones here."' },
                { entity: 'South', color: 'Coral red, soft pink, peach, light maroon', colorHex: '#FECACA', crystal: 'Red Coral, Garnet, Ruby (or substitute with Carnelian)', purpose: 'Fame, recognition, social standing. "The South governs reputation — warm, inviting colours attract positive social energy."' },
                { entity: 'Southwest (Nairutya)', color: 'Earthy browns, warm beige, pastel peach, light pink', colorHex: '#FDE68A', crystal: 'Black Tourmaline, Smoky Quartz, Hematite', purpose: 'Stability, relationships, grounding. "Earthy tones in the SW stabilise the earth element — the zone of the master bedroom."' },
                { entity: 'West', color: 'Light blue, silver, grey, white, pale pink', colorHex: '#E0F2FE', crystal: 'Blue Lace Agate, Lapis Lazuli, Aquamarine', purpose: 'Creativity, children, learning. "The West is ruled by Saturn — cool, structured colours enhance discipline and creative expression."' },
                { entity: 'Northwest (Vayavya)', color: 'Sky blue, light grey, soft silver, pale green', colorHex: '#F0F9FF', crystal: 'Amazonite, Fluorite, Labradorite', purpose: 'Communication, movement, client flow. "The NW is the air zone — light, airy colours support swift communication and unobstructed movement."' },
                { entity: 'North (Kubera)', color: 'Light green, pale blue, soft yellow, white', colorHex: '#D1FAE5', crystal: 'Pyrite, Green Jade, Citrine', purpose: 'Wealth, career, opportunities. "The North is ruled by Kuber — soft, prosperous colours attract financial inflow and career advancement."' },
                { entity: 'Centre (Brahmasthan)', color: 'White, cream, light yellow — the most neutral palette', colorHex: '#FFFBEB', crystal: 'Clear Quartz (master), Selenite, Moonstone', purpose: 'Universal balance, harmony, cosmic connection. "The Brahmasthan must remain open, clean, and neutral — the energy axis of the entire property."' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.colorHex }} />
                    <h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.entity}</h3>
                  </div>
                  <p className="text-xs text-nidra-indigo/50 mt-1"><strong>Colours:</strong> {item.color}</p>
                  <p className="text-xs text-nidra-indigo/50 mt-1 mb-2"><strong>Crystals:</strong> {item.crystal}</p>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed">{item.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FINAL CTA
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#2d1050] to-[#1a0a2e] bg-[length:400%_400%] animate-[gradientLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-violet-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Let Vastuvid K.K. Nagaich Design Your Crystal & Colour Grid
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Every space has a unique elemental signature requiring a custom crystal‑colour prescription — the precise combination of which crystals, at which directional points, in which colour‑painted zones, with which planetary mantras. Book a private Crystal & Color Therapy consultation covering the 5‑Element Crystal Grid, Black Tourmaline EMF protocol, Amethyst sleep placement, Rose Quartz relationship grid, Clear Quartz master programming, Directional Colour Therapy, Chakra‑Aligned Crystal Placement, the Combined Crystal‑Colour Integration Protocol, and the annual maintenance & re‑energisation calendar — performed personally by a 4th‑generation Vastu Guru, MBA, Ex‑CEO with 20+ years of clinical practice and 2 Lakh+ clients worldwide.
                  </p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-violet-500 via-emerald-500 to-prakash-gold text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
                    Schedule Your Crystal & Colour Consultation →
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
