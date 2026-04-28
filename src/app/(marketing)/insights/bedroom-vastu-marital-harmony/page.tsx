import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <article className="pt-28 pb-20 min-h-screen">

          {/* ── Luxury Hero ── */}
          <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#0d1b2a] via-[#1b2d4a] to-nidra-indigo/95 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,180,255,0.10),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="absolute top-0 right-4 sm:right-10 w-28 h-28 sm:w-36 sm:h-36 opacity-25 pointer-events-none">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 45 Q50 10 75 45 L75 85 L25 85 Z" fill="none" stroke="#E8B960" strokeWidth="1.5" opacity="0.5"/>
                  <rect x="40" y="60" width="20" height="25" rx="2" fill="none" stroke="#E8B960" strokeWidth="1.2" opacity="0.5"/>
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#E8B960" strokeWidth="0.8" opacity="0.4">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="35s" repeatCount="indefinite"/>
                  </circle>
                  <text x="50" y="55" textAnchor="middle" fontSize="10" fill="#E8B960" fontFamily="serif">SW</text>
                </svg>
              </div>

              <Link href="/insights" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                Back to Archives
              </Link>

              <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Vastu Science</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>9 min read</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>By Vastuvid KK Nagaich</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                Bedroom Vastu —{' '}
                <span className="bg-gradient-to-r from-blue-400 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">
                  Marital Harmony and Restful Sleep
                </span>
              </h1>
              <p className="text-lg text-white/60 max-w-3xl">
                How bedroom placement, bed direction, mirror positioning, and colour therapy determine the quality of your sleep, the health of your marriage, and the emotional stability of your entire household — backed by magnetic field research and clinical case studies.
              </p>
            </div>
          </section>

          {/* ── Article Body ── */}
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="prose prose-lg prose-stone max-w-none">

              <p className="lead text-xl text-nidra-indigo/70 leading-relaxed">
                We spend approximately one‑third of our lives in the bedroom — more time than in any other single room. The bedroom is where the body repairs itself, where the subconscious processes the day, and where the most intimate bonds of marriage are either strengthened or strained. In Vastu Shastra, the master bedroom is not merely a sleeping chamber — it is the energetic anchor of the entire household. When aligned correctly, it stabilises relationships, deepens sleep, and fosters emotional security. When misaligned, it can cause insomnia, marital discord, chronic anxiety, and even fertility challenges. National Sleep Foundation data confirms that sleep environment directly impacts sleep quality, with direction, light, and electromagnetic fields playing measurable roles. This guide presents the complete Vastu framework for bedroom design — all grounded in published research and two decades of clinical practice.
              </p>

              {/* ── Section 1: Ideal Location ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-blue-400 to-indigo-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">The Master Bedroom — South‑West, the Anchor of Stability</h2>
                </div>
                <p>Vastu Shastra prescribes the <strong>South‑West (Nairutya) corner</strong> as the unequivocally ideal location for the master bedroom. This direction is governed by the Earth element (Prithvi) — the heaviest, most stable of the five elements — and is associated with Lord Nairutya, the deity of strength, protection, and rootedness. The master bedroom in the SW provides the adults of the household with the energetic grounding they need to make sound decisions, maintain emotional equilibrium, and sustain a stable marriage.</p>
                <p>Modern building science concurs: the SW quadrant receives the most stable, cumulative solar radiation in the northern hemisphere. Walls in this direction act as thermal mass, absorbing heat slowly by day and releasing it gradually at night. The resulting temperature stability — fewer temperature fluctuations through the night — is a known contributor to uninterrupted, restorative sleep. Multiple studies have demonstrated that stable thermal environments improve sleep efficiency and reduce nocturnal awakenings.</p>

                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-200">
                    <h3 className="font-serif text-lg text-blue-800 font-bold mb-2">Children's Bedrooms</h3>
                    <p className="text-sm text-nidra-indigo/70">Place children in the <strong>North‑West</strong> (stimulates growth, learning, and leadership) or <strong>West</strong> (calms excess energy, improves focus). Children should never sleep in the South‑East — the fire zone — as this can cause aggression, restlessness, and difficulty concentrating in school.</p>
                  </div>
                  <div className="p-4 bg-red-50/50 rounded-2xl border border-red-200">
                    <h3 className="font-serif text-lg text-red-800 font-bold mb-2">Elderly Parents / Guests</h3>
                    <p className="text-sm text-nidra-indigo/70">The <strong>South</strong> direction is ideal for elderly family members, providing stability and health support. The <strong>North</strong> is acceptable for short‑term guest stays but should never be used as a permanent bedroom — it belongs to Kuber, the God of Wealth, and using it for sleeping drains financial energy.</p>
                  </div>
                </div>
              </div>

              {/* ── Section 2: Sleeping Direction ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Sleeping Direction — The Science of Magnetic Alignment</h2>
                </div>
                <p>The direction in which you place your head while sleeping is, arguably, the single most important Vastu decision in the bedroom. The human body is not electrically neutral — it contains iron‑rich blood (haemoglobin), and the brain and heart generate measurable electromagnetic fields. The Earth itself is a giant magnet, with field lines running from the geographic South Pole to the geographic North Pole.</p>
                <p>Sleeping with the <strong>head towards the South</strong> aligns the body's own magnetic polarity with the Earth's natural field. The head (positive pole) faces South (magnetic positive); the feet (negative pole) face North (magnetic negative). This alignment places the body in electromagnetic harmony with the planet — reducing stress on the cardiovascular system, lowering blood pressure, and promoting the deepest possible sleep.</p>

                <div className="mt-5 p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-prakash-gold/20 mb-4">
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">The National Sleep Foundation's Position</h3>
                  <p className="text-sm text-nidra-indigo/70">The NSF acknowledges this alignment as beneficial, noting that sleeping head‑south "mirrors the natural flow of the Earth's magnetic field, helping promote calm, restorative sleep." A paper published in the <em>Journal of Alternative and Complementary Medicine</em> found that participants sleeping head‑south experienced <strong>approximately 25% improvement in sleep quality</strong> and significantly reduced blood pressure fluctuations compared to those sleeping head‑north.</p>
                </div>

                <div className="p-5 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-200">
                  <h3 className="font-serif text-lg text-red-800 font-bold mb-2">Never Sleep Head‑North</h3>
                  <p className="text-sm text-nidra-indigo/70">Sleeping with the head towards the North places the body's magnetic field in opposition to the Earth's — like two positive ends of a magnet forced together. This subtle but persistent electromagnetic stress manifests as disturbed sleep, morning headaches, nightmares, and a sense of exhaustion even after a full night's rest. The human body, over years of this alignment, experiences chronic low‑grade cardiovascular stress. In Vedic belief, the North is the direction from which the soul departs the body at death — sleeping head‑north is considered an invitation to this energy.</p>
                </div>
              </div>

              {/* ── Section 3: Mirror Dosha ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-pink-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">The Mirror Dosha — Why It's the #1 Cause of Marital Discord</h2>
                </div>
                <p>If there is one Vastu rule that even sceptics acknowledge after personal experience, it is this: <strong>never place a mirror directly opposite the bed</strong>. The mirror acts as an energy reflector — it bounces the couple's own energy back at them, creating a feedback loop that amplifies disagreements, creates a sense of being watched (a third entity in the relationship), and — in documented cases — has been linked to infidelity and separation.</p>

                <div className="mt-4 space-y-4">
                  <div className="p-4 bg-white/70 rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">Why It Happens</h3>
                    <p className="text-sm text-nidra-indigo/70">When you see your sleeping reflection, your subconscious mind perceives another person — a shadow self — sharing the marital space. Over months and years, this creates a subconscious pattern of infidelity, distrust, and emotional distance. Vastuvid K.K. Nagaich has counseled countless couples whose relationships immediately improved after removing or covering the bedroom mirror.</p>
                  </div>
                  <div className="p-4 bg-white/70 rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">The Fix</h3>
                    <p className="text-sm text-nidra-indigo/70">If removing the mirror is not possible (built‑in wardrobes, for example), cover it completely at night with a cloth curtain. During the day, ensure it reflects only positive, beautiful objects — never the bed, never a toilet door, and never an empty wall. A mirror on the North or East wall, reflecting the room's beauty, is auspicious. A mirror on the South or West wall, reflecting the bed, is a dosha.</p>
                  </div>
                </div>
              </div>

              {/* ── Section 4: Electronics & EMF ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-green-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Electronics and EMF — The Invisible Sleep Disruptor</h2>
                </div>
                <p>Televisions, laptops, mobile phones, Wi‑Fi routers, and even digital alarm clocks emit electromagnetic radiation (EMF) that is now scientifically linked to disrupted sleep architecture. The National Sleep Foundation's 2022 Sleep in America Poll found that <strong>57% of adults who keep electronic devices in the bedroom report significantly poorer sleep quality</strong> than those who do not. Nearly 60% of adults sleep with their phones next to their beds — a habit that exposes the brain to EMF and blue light during the critical hours of melatonin production.</p>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50/50 rounded-2xl border border-green-200">
                    <h3 className="font-serif text-base text-green-800 font-bold mb-2">Recommended Practice</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>Remove all electronics from the bedroom entirely</li><li>If unavoidable, switch off and cover devices 60 minutes before sleep</li><li>Keep mobile phones at least 6 feet from the bed</li><li>Use battery‑operated alarm clocks — not plugged‑in digital ones</li></ul>
                  </div>
                  <div className="p-4 bg-red-50/50 rounded-2xl border border-red-200">
                    <h3 className="font-serif text-base text-red-800 font-bold mb-2">What the NSF Poll Found</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>58% of adults sleep with phones next to their bed</li><li>57% of device‑in‑bedroom users report significantly poorer sleep</li><li>40% bring devices into the bedroom within 30 minutes of sleep</li><li>44% leave notifications on overnight</li></ul>
                  </div>
                </div>
              </div>

              {/* ── Section 5: Colour Therapy ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-pink-400 to-rose-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Colour Therapy for the Bedroom</h2>
                </div>
                <p>The bedroom requires colours that soothe the nervous system and promote intimacy. Bright, activating colours (reds, oranges, neons) that work well in kitchens and living rooms are disastrous in bedrooms. The Times of India and A360 Architects converge on the same Vastu recommendations:</p>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50/50 rounded-2xl border border-green-200">
                    <h3 className="font-serif text-base text-green-800 font-bold mb-2">Ideal Colours</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>Light Pink — fosters love and tenderness</li><li>Peach — warm, soothing, ideal for marital harmony</li><li>Soft Earth Tones — grounding, stability, deep rest</li><li>Cream / Beige — neutral, calming, universally harmonious</li><li>Pastel Green — gentle healing energy</li></ul>
                  </div>
                  <div className="p-4 bg-red-50/50 rounded-2xl border border-red-200">
                    <h3 className="font-serif text-base text-red-800 font-bold mb-2">Avoid These</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>Bright Red — overstimulates, causes arguments</li><li>Dark Blue / Navy — too cool, suppresses warmth</li><li>Black — absorbs energy, creates heaviness and depression</li><li>Grey — dulls emotional connection</li><li>Bright Orange — activates fire, disturbs sleep</li></ul>
                  </div>
                </div>
              </div>

              {/* ── Section 6: Case Study ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-sacred-saffron to-kumkuma-red" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Case Study — The Couple Who Removed a Mirror and Saved Their Marriage</h2>
                </div>
                <p>A couple in their early 40s, married 15 years, consulted Vastuvid K.K. Nagaich after three years of escalating conflict that neither could explain. They had a successful business, healthy children, and no external stressors. The Vastu audit revealed three bedroom doshas: a full‑length mirror directly opposite the bed, an SE‑corner master bedroom (fire zone, inducing nightly agitation), and both partners sleeping head‑north.</p>
                <p>The remedies were applied in a single day: the mirror was covered with a curtain, the bed was rotated 180 degrees (head‑south), and a heavy earth‑element crystal grid was placed in the SW of the room to stabilise the fire energy. Within <strong>two weeks</strong>, the couple reported that their nightly arguments — which had become a predictable ritual — simply stopped. Within three months, they described their marriage as stronger than it had been in a decade. The husband's chronic insomnia, which he had treated with medication for five years, resolved completely within the first month.</p>
              </div>

              {/* ── Conclusion ── */}
              <div className="mt-12 p-8 bg-gradient-to-br from-vastu-stone/30 to-white rounded-3xl border border-prakash-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-blue-400 to-sacred-saffron" />
                  <h2 className="font-serif text-2xl text-nidra-indigo">Conclusion — Your Bedroom Is Your Sanctuary</h2>
                </div>
                <p>The bedroom is where your body heals, your marriage deepens, and your subconscious processes the emotional residue of the day. Every element — the direction of the room, the orientation of your head, the presence or absence of mirrors, the colours on the walls, the devices on your nightstand — contributes to a cumulative energetic effect that either supports or sabotages your most fundamental needs. The remedies are simple, the science is clear, and the results — as thousands of clients have discovered — are often immediate.</p>
                <p className="font-medium">Vastuvid K.K. Nagaich provides comprehensive bedroom Vastu audits as part of every residential consultation — including directional analysis, dosha identification, mirror placement correction, and personalised remedy prescriptions.</p>
              </div>

            </div>

            {/* ── Author Bio ── */}
            <div className="mt-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-sacred-saffron flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div>
              <div>
                <p className="font-serif text-lg text-nidra-indigo font-bold">Vastuvid KK Nagaich</p>
                <p className="text-sm text-nidra-indigo/60">4th Generation Vastu Guru | MBA | Ex‑CEO | 20+ Years Clinical Practice | 2 Lakh+ Clients Worldwide</p>
              </div>
            </div>
          </div>
        </article>
      </SmoothScroll>
    </>
  );
}
