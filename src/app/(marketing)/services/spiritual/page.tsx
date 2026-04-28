import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function SpiritualSpacesPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>

        {/* ═══════════════════════════════════════════════════════════════
            HERO – deep spiritual indigo/violet/purple
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0020] via-[#1a0040] to-[#0a0020]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.07),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-violet-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
              Extensive Framework · विस्तृत ढांचा
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-violet-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Spiritual Spaces</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">
              Pratima Vastu · Prateek Vastu · Poojan & Havan · Havanlogy · Devata Vastu · Vastu Shanti · Meditation & Yoga Space Design · Temple Architecture
            </p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">
              9 sacred spiritual Vastu practices for temples, meditation halls, pooja rooms, yoga studios & retreats — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO.「8†L3-L8」「9†L8-L11」「10†L3-L9」
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-violet-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                Book Spiritual Audit
              </Link>
              <Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                Explore Practices ↓
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            VASTU PURUSHA MANDALA – SPIRITUAL APPLICATION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint for Worship</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                The Vastu Purusha Mandala – 64‑Grid Spiritual Architecture
              </h2>
              <p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                For temples and sacred spaces, Vastu Shastra prescribes the <strong>Manduka Mandala</strong> (8×8 grid of 64 squares). The Garbhagriha (sanctum sanctorum) is placed at the heart — the Brahmasthan — where Lord Brahma presides. The Northeast (Ishanya) is the abode of divine energy, governed by Jupiter (Brihaspati) and the Water element. "Jupiter is the lord of the North-East and this direction is called Ishan Kona or Abode of God." The temple's shikhara rises above the Garbhagriha, aligned to magnetic north to channel cosmic energy.「9†L18-L19」「6†L14-L20」「0†L4-L8」
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            THE 9 SACRED SPIRITUAL VASTU PRACTICES
            ═══════════════════════════════════════════════════════════════ */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 9 Sacred Practices</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
                Authentic Vedic Practices for Temples, Pooja Rooms & Meditation Spaces
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
                Each practice is a precise Vedic intervention — performed at an astrologically determined Muhurta — to design, consecrate, and sustain sacred spaces that amplify divine energy.
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  num: '01',
                  title: 'Pratima Vastu (Idol & Deity Placement in Temples & Pooja Rooms)',
                  desc: '"The photos and idols of god to be worshiped in the pooja room are to face either the East or the West." Lord Ganesha, Goddess Durga, and Goddess Lakshmi should face West — so the devotee faces East while praying. The Shiva Linga tip must face East. Hanuman idols face South. "Place the gods\' idols and images on a raised platform or stand, making sure they don\'t touch the wall or the floor." Maintain at least a 1‑inch gap between the idol and the wall for air circulation and spiritual flow. "Idols should not be taller than 9 inches or smaller than 2 inches." The eyes of the idol should be at the devotee\'s chest level. Marble idols are most recommended; avoid clay, plastic, or glass. The Brihat‑samhita dedicates Chapter 60 entirely to the installation of idols in temples.「1†L5-L8」「11†L23-L26」「11†L29-L31」「12†L17-L24」「12†L26-L27」',
                  features: ['West‑facing idols for East‑facing devotee', '1‑inch gap from wall for airflow', '2‑9 inch idol height specification', 'Chest‑level eye placement', 'Marble idols preferred'],
                  color: '#FFD700',
                },
                {
                  num: '02',
                  title: 'Prateek Vastu (Sacred Symbol Placement – Swastik, Om, Trishul, Shri Yantra)',
                  desc: '"To shield the house from negativity and draw wealth, Vastu experts propose arranging red or yellow Swastik signs at the front gate." The nine most powerful Vastu symbols are: Swastik (good fortune), Om (cosmic vibration, peace), Lotus (purity), Trishul (divine, physical, and mental protection), Namaste, Conch (Shankh), Kalash (prosperity), Fish (abundance), and Lamp (enlightenment). The Trishakti Yantra combining Om + Swastik + Trishul placed above the main door "is believed to protect the home from negative energy and spread a positive atmosphere." The Shri Yantra — the most powerful sacred geometry — placed in the East or Northeast and worshipped regularly "is said to bring wealth and help clear financial obstacles." Symbols placed in pooja rooms, living rooms, and meditation nooks balance the five elements.「2†L4-L9」「2†L27-L32」「13†L19-L22」「13†L48-L52」',
                  features: ['Swastik at front gate for wealth', 'Om in meditation corners for peace', 'Trishakti Yantra above main door', 'Shri Yantra in East/NE for prosperity', '9 symbols balance Pancha Mahabhutas'],
                  color: '#C88A5D',
                },
                {
                  num: '03',
                  title: 'Devata Vastu (Deity Placement & Home Temple Architecture)',
                  desc: '"The northeast direction (Ishan Kona) is the most auspicious for a pooja room. This direction is considered the source of divine energy and helps channel spiritual vibrations across the house." Morning sunlight — "which is considered pure and energizing" — enters from this direction, making it ideal for meditation and worship. The pooja room should have "a low ceiling with a pyramid‑shaped roof" to create symmetry and maximise positive vibrations. The structure should be of wood — "wood enhances the look of any space... and is regarded as Vastu‑friendly." Double‑shutter doors are preferred. The centre of the house (Brahmasthan) is also a sacred zone for designing a mandir. "Designing a mandir in the Brahmasthan brings prosperity and good health." Never place the pooja room in the South, basement, behind a toilet wall, or under a staircase.「8†L11-L13」「10†L11-L17」「9†L33-L36」「8†L21-L27」「10†L24-L27」',
                  features: ['NE corner primary placement', 'Pyramid or gopura‑shaped ceiling', 'Wooden structure preferred', 'Double‑shutter wooden doors', 'Never South, basement, or under stairs'],
                  color: '#FF9933',
                },
                {
                  num: '04',
                  title: 'Poojan & Havan (Sacred Fire Rituals for Space Purification)',
                  desc: '"Performing havan during the gruhapravesam pooja can help cleanse the aura of the house and purify it with positive energy. The herbs used during the havan emanate smoke which purifies the surroundings." Havan is a sacred fire ritual where offerings of ghee, herbs, and sacred materials are poured into the fire while chanting Vedic mantras. "Fire destroys all the bacteria that are harmful to the human body." The ritual includes Ganapati Poojan, Navagraha Shanti, Kalash Poojan, Havan, and Mangal Aarti. "The various medicinal ingredients in the smoke from the havan disinfect and purify the air within." Agni — the fire god — is the ultimate purifier and processor. When pleased, "he bestows health, wealth, peace and prosperity."「3†L5-L8」「4†L5-L8」「4†L12-L15」「3†L14-L17」',
                  features: ['Ghee & herb Havan purification', 'Ganapati & Navagraha Poojan', 'Kalash Sthapana ritual', 'Medicinal smoke air disinfection', 'Mangal Aarti conclusion'],
                  color: '#C10000',
                },
                {
                  num: '05',
                  title: 'Havanlogy (The Science of Fire Rituals – Vedic Air & Energy Purification)',
                  desc: '"Havan, a sacred fire ceremony in Hinduism, creates a positive environment by balancing cosmic energies, generating positive vibrations, and fostering spiritual and physical well‑being." The science behind Havan (Hawana‑Vidhi) is profound: the thermal energy of fire acts as a drug delivery system — "the offerings made to the sacred fire are said to purify the environment as well as the people around." The smoke from ghee, samagri (herbal mixture), and wood creates a pesticide‑like effect, removing airborne bacteria. "Earth attracts minerals due to heat" — the ash residue enriches the soil. The ritual fire "purifies the surrounding by cleansing all impurities in the bodies of everyone present, both physical and psychic." Havanlogy — the Vedic science of sacred fire — prescribes specific samagri compositions for each purpose: Vastu Shanti (40 Ayurvedic herbs), Griha Pravesh, Navagraha, and Lakshmi Havan.「4†L5-L10」「4†L17-L21」「4†L27-L32」「4†L34-L37」「4†L43-L48」',
                  features: ['Thermal energy purification', '40‑herb Vastu Shanti samagri', 'Airborne bacteria elimination', 'Drug delivery via smoke inhalation', 'Purpose‑specific samagri compositions'],
                  color: '#EF4444',
                },
                {
                  num: '06',
                  title: 'Vastu Shanti Puja (Space Energisation & Vastu Purush Pacification)',
                  desc: '"Vastu Shanti is a sacred Hindu ritual dedicated to pacifying the presiding deity of the house — Vastu Purush (वास्तु पुरुष)." This ceremony aims to restore peace, prosperity, and spiritual harmony. The ritual includes Ganapati Poojan, Navagraha Shanti, Kalash Poojan, Havan, and Mangal Aarti. The Vastu Shanti Mantra — "Om Vaastoshpate Prati Jaanidyasmaan..." — invokes the Vastu deity to accept the dwelling, grant health and happiness, and bring peace to all two‑legged and four‑legged beings. "Vastu Shanti Puja blends mantras, fire rituals, and sacred geometry to awaken divine protection and balance the five elements — Earth, Water, Fire, Air, and Space." The puja creates a "positive energy field" that neutralises Vastu doshas and transforms the space into "a sanctuary of positive energy, balance, and divine protection."「16†L11-L16」「16†L17-L20」「7†L4-L9」「7†L17-L20」「7†L30-L34」',
                  features: ['Vastu Purush invocation & pacification', 'Ganapati + Navagraha + Kalash Poojan', 'Sacred Havan with Vastu mantras', 'Five‑element balancing', 'Vastu dosha neutralisation'],
                  color: '#8B5CF6',
                },
                {
                  num: '07',
                  title: 'Meditation & Yoga Space Design (Dhyan Kaksh & Yog Kaksh Vastu)',
                  desc: '"Both the northeast and the center of your home or your room are considered ideal locations for meditation and yoga. The northeast sector is always a sacred zone. Its element is water, so a water feature — such as a fountain or beautiful flowers floating in a glass bowl of clear water — can enhance this space." Natural light is essential: "Daylight uplifts moods and creates a serene atmosphere for mindfulness." Calming colours are crucial: soft blues, greens, pastels, white, and light yellow — "avoid bright or overpowering colours." The space must be clutter‑free. Natural materials — silk, cotton, wool, wood, bamboo — "have the right energy for this space." Beeswax candles purify the air. "Remove your shoes before entering your yoga area... This marks it as a separate area that will stay clean and honored." An altar in the northeast of the room honors the divine. Windows for fresh air and prana flow are essential.「14†L7-L12」「15†L26-L29」「15†L31-L34」「14†L27-L29」「14†L18-L22」',
                  features: ['NE or centre location ideal', 'Water feature in NE corner', 'Soft blue/green/pastel colours', 'Natural materials (wood, cotton, silk)', 'Clutter‑free, shoes removed'],
                  color: '#10B981',
                },
                {
                  num: '08',
                  title: 'Temple Construction (Garbhagriha, Mandapa & Shikhara Architecture)',
                  desc: '"The shrine building often includes a circumambulatory passage for parikrama, a mandapa congregation hall, and sometimes an antarala antechamber and porch between garbhagriha and mandapa." The Garbhagriha — the innermost sanctum where the primary deity resides — is placed at the centre of the temple, aligned to magnetic north. The shikhara (spire) rises above it, crowned by a kalasha. The mandapa is the congregation hall where devotees gather. "Four basalt stone columns divides the Sabhamandapa into nine squares — Navagraha — creating a spiritual base for the Sanctum." The temple must be built in the Nagara or Dravida style, following the Shilpa Shastras and Vastu Sastras. The proportions follow the golden ratio. "Each structure was designed to incorporate various Vastu principles — maintaining a golden ratio in design, of square base and height of structure."「6†L22-L25」「6†L14-L20」「6†L50-L54」「5†L50-L54」',
                  features: ['Garbhagriha at magnetic north centre', 'Mandapa with Navagraha column grid', 'Shikhara following golden ratio', 'Parikrama circumambulatory path', 'Shilpa Shastra + Vastu Sastra compliance'],
                  color: '#6366F1',
                },
                {
                  num: '09',
                  title: 'Spiritual Space Maintenance & Daily Ritual Protocol (Nitya Pooja Vidhi)',
                  desc: '"Light a diya in front of the idols every morning and evening. Keep the pooja room clutter‑free and organised. Clean the pooja room and idols daily." Change water in the Kalash every morning before 9 AM. Offer fresh flowers — marigold, lotus, jasmine, rose — replacing them daily. Burn natural camphor or sandalwood incense during aarti. Ring a brass or panchadhatu bell during morning and evening aarti. The northeast corner must remain immaculately clean — wipe surfaces daily with water containing a pinch of sea salt. Never place shoes, dustbins, or cleaning equipment in the NE zone. Replace broken or chipped idols immediately — "damaged idols or pictures can attract negative energy." The pooja room must be used exclusively for spiritual practices — not for storage, sleeping, or any other activity.「12†L34-L37」「10†L42-L44」「11†L32-L35」「11†L37-L39」',
                  features: ['Diya lit morning & evening', 'Daily Kalash water change', 'Fresh flowers replaced daily', 'Brass bell during aarti', 'Exclusive spiritual use — no storage'],
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
            POOJA ROOM DIRECTION + IDOL PLACEMENT QUICK REFERENCE
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Pooja Room Direction & Idol Placement Guide
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                Housing.com, ASBL, Livspace, HouseGyan & Times Now converge on identical principles.「8†L11-L13」「10†L11-L17」「9†L17-L20」「12†L12-L15」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { item: 'Best Location', detail: 'Northeast (Ishan Kona). East or North acceptable. Centre (Brahmasthan) also auspicious. "Placing the pooja room in the northeast helps align your spiritual space with the Earth\'s magnetic field."', color: '#FFD700' },
                { item: 'Avoid Locations', detail: 'South (aggression), Southeast (stress), bathroom‑adjacent (contamination), under staircase (suppression), basement, bedroom. Never share wall with toilet or kitchen.', color: '#EF4444' },
                { item: 'Pooja Room Structure', detail: 'Low ceiling with pyramid or gopura‑shaped roof. Wooden double‑shutter doors. Threshold at entrance. Square or rectangular shape. Dedicated space — not storage.', color: '#10B981' },
                { item: 'Idol Facing Direction', detail: 'Ganesha/Lakshmi/Durga face West (devotee faces East). Shiva Linga tip faces East. Hanuman faces South. Idols 1 inch from wall. On raised platform, never on floor.', color: '#FF9933' },
                { item: 'Idol Size & Material', detail: '2‑9 inches height. Eyes at devotee\'s chest level. Marble preferred. Avoid clay, plastic, glass. Never keep broken/chipped idols. One idol per deity. No overcrowding.', color: '#8B5CF6' },
                { item: 'Colours & Lighting', detail: 'White (purity), light yellow (positivity), light blue (tranquility), cream (calmness). Soft natural light. Ghee diya lit morning & evening. "Use light and gentle colours."', color: '#06B6D4' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.item}</h3>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SACRED SYMBOLS TABLE
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Sacred Symbols</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                The 9 Most Powerful Vastu Symbols — Where and Why
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                Times of India (2025), IndiaMART & Jagran converge on these nine symbols.「13†L19-L22」「2†L27-L32」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { symbol: 'Swastik', direction: 'Front gate / Main door', purpose: 'Security, good fortune, divine protection. Red or yellow. Draw or sticker at entrance to block negativity.', color: '#EF4444' },
                { symbol: 'Om', direction: 'Pooja room / Meditation corner', purpose: 'Cosmic vibration, spiritual grounding, emotional equilibrium. "The Om symbol emits positive energy into and around your home."', color: '#FFD700' },
                { symbol: 'Trishul', direction: 'Above main door / Pooja room', purpose: 'Protection from divine, physical, and mental afflictions. Trishakti Yantra (Om+Swastik+Trishul) for main door.', color: '#6366F1' },
                { symbol: 'Shri Yantra', direction: 'East or Northeast', purpose: 'Wealth manifestation, financial obstacle removal. "Regular worship for greatest advantages." Crystal or panchadhatu material.', color: '#FF9933' },
                { symbol: 'Kalash', direction: 'Main entrance / Pooja room', purpose: 'Fertility, prosperity, auspicious beginning. Filled with water, coconut, mango leaves. Attracts celestial blessings.', color: '#10B981' },
                { symbol: 'Lotus', direction: 'Northeast direction', purpose: 'Purity, enlightenment, renewal, creativity. Lotus art or décor in NE inspires optimism and internal power.', color: '#EC4899' },
                { symbol: 'Tortoise', direction: 'North (metal) / SW (crystal)', purpose: 'Stability, longevity, protection. Metal in North for career; crystal in SW for grounding. Resilience symbol.', color: '#06B6D4' },
                { symbol: 'Fish', direction: 'North direction', purpose: 'Career development, financial improvement, abundance. Paintings, décor, or living aquarium with 9 fish.', color: '#F59E0B' },
                { symbol: 'Conch (Shankh)', direction: 'Pooja room / NE corner', purpose: 'Sound purification, negative energy dispersion. Blown during aarti. "Om" resonance cleanses the environment.', color: '#C88A5D' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.symbol}</h3>
                  <p className="text-xs text-nidra-indigo/50 mt-1 mb-2"><strong>Place:</strong> {item.direction}</p>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed">{item.purpose}</p>
                </div>
              ))}
            </div>
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
                Remedies for Spiritual Space Doshas — No Demolition Required
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'Pooja Room in Wrong Direction', desc: 'Place a copper pyramid in the NE corner of the room. Use a mirror on North/East wall to reflect light. "Install a Vastu yantra to balance energy in the pooja space." Keep the space immaculately clean.', color: '#FFD700' },
                { title: 'Pooja Room Under Staircase', desc: 'Install a copper pyramid between the staircase ceiling and the room. Place a crystal grid in the NE corner of the mandir. Keep the space brightly lit at all times. A brass Vastu plate beneath the mandir corrects suppressed energy.', color: '#C88A5D' },
                { title: 'Pooja Room Sharing Wall with Toilet', desc: 'Copper pyramid or crystal grid on shared wall. Keep toilet door permanently closed. Place Vastu Purush Yantra in the NE of the pooja room. Never store cleaning supplies near pooja space.', color: '#EF4444' },
                { title: 'Broken or Improper Idol Placement', desc: 'Immediately replace broken idols. Use Gangajal to purify the space. Place a copper Kalash with water and mango leaves in front of the mandir. Energise with Vastu Shanti mantras.', color: '#FF9933' },
                { title: 'Dark / Poorly Ventilated Pooja Room', desc: '"Use soft, yellow lighting or an oil lamp that burns daily." Install a small exhaust fan. A ghee lamp at sunrise and sunset compensates for lack of natural light. Use mirrors strategically.', color: '#10B981' },
                { title: 'Multiple Deities / Cluttered Mandir', desc: 'Avoid two idols of the same deity. Keep the mandir clutter‑free. "The pooja room must be used exclusively for spiritual practices — not for storage." Install closed cabinets below the platform for discreet puja material storage.', color: '#8B5CF6' },
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0020] via-[#1a0040] to-[#0a0020] bg-[length:400%_400%] animate-[gradientLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-violet-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Let Vastuvid K.K. Nagaich Consecrate Your Sacred Space
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Every temple, pooja room, and meditation space has a unique divine signature. Book a private spiritual Vastu consultation — covering all 9 sacred practices: Pratima Vastu, Prateek Vastu, Devata Vastu, Poojan & Havan, Havanlogy, Vastu Shanti Puja, Meditation & Yoga Space Design, Temple Architecture, and Daily Ritual Protocol — performed personally by a 4th‑generation Vastu Guru, MBA, Ex‑CEO with 20+ years of clinical practice and 2 Lakh+ clients worldwide.
                  </p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-violet-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
                    Schedule Your Spiritual Audit →
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
