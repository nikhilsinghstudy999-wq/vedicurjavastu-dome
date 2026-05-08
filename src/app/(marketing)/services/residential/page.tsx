'use client';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import GuruAuthority from '@/features/shared/components/GuruAuthority';
import WhyChooseUs from '@/features/shared/components/luxury/WhyChooseUs';
import RemediesCTA from '@/features/shared/components/luxury/RemediesCTA';
import VirtualConsultCTA from '@/features/shared/components/luxury/VirtualConsultCTA';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* ---- Reusable Components ---- */
function PainPointCard({ title, accent, points, delay }: { title: string; accent: string; points: string[]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay || 0, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{ background: `linear-gradient(135deg, ${accent}40, transparent)` }} />
      <div className="relative p-6 rounded-[28px] bg-white/80 backdrop-blur-xl border border-prakash-gold/20 shadow-[0_8px_32px_rgba(26,42,58,0.06)] hover:shadow-[0_20px_50px_rgba(200,138,93,0.15)] transition-shadow duration-500">
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-[28px]" style={{ backgroundColor: accent }} />
        <h3 className="font-serif text-xl text-nidra-indigo font-bold mb-5">{title}</h3>
        <ul className="space-y-3">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-nidra-indigo/70 leading-relaxed">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function PricingCard({ plan, price, color, features, best }: { plan: string; price: string; color: string; features: string[]; best?: boolean }) {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.03 }} className={`relative p-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all ${best ? 'border-prakash-gold bg-white' : 'bg-white/80 border-prakash-gold/20'}`}>
      {best && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white px-4 py-1 rounded-full text-xs font-bold">✦ Most Popular</div>}
      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: color }} />
      <h3 className="font-serif text-xl text-nidra-indigo font-bold mt-2">{plan}</h3>
      <div className="text-3xl font-bold mt-2" style={{ color }}>{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-nidra-indigo/70">
        {features.map((f, i) => <li key={i} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />{f}</li>)}
      </ul>
    </motion.div>
  );
}

export default function ResidentialVastuPage() {
  return (<>
    <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0000] via-[#3a0a0a] to-[#0a0000] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
        <div className="container mx-auto px-4 relative z-10 text-center mt-16">
          <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">Extensive Framework</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">Residential Vastu</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-4">For flats, apartments, independent houses & government quarters.</p>
          <p className="text-sm text-white/50 max-w-2xl mx-auto mb-10">100M+ views · 80K+ followers · Vastuvid KK Nagaich — Tantra‑trained, MBA, Ex‑CEO, 4th‑gen Guru.</p>
          <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Consultation</Link>
        </div>
      </section>

      <GuruAuthority />
      <WhyChooseUs />

      {/* ===== CATEGORIZATION SECTION ===== */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Your Journey</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Find <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Your Situation</span></h2>
            <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">Every home tells a story. Select your reality — you are not alone in what you're experiencing.</p>
          </div>

          {/* --- FLATS & APARTMENTS --- */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl sm:text-3xl text-nidra-indigo text-center mb-8">🏢 Flats & Apartments</h3>
            <p className="text-center text-sm text-nidra-indigo/50 mb-6">Flats are pre‑built — you move into a space already constructed. Pain points relate to existing defects, builder compliance gaps, and limited renovation options.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <PainPointCard title="New Possession (Recently Moved In)" accent="#E8B960" delay={0} points={[
                "Health breakdown after possession — frequent illnesses with no medical diagnosis",
                "Money drain despite higher income — savings never accumulate, loans pile up",
                "Sleep destroyed since day one — insomnia, nightmares, waking exhausted at 3 AM",
                "Family fighting constantly — arguments that never happened in previous home",
                "Career stuck despite relocation — promotions blocked, business deals collapse",
                "That gut feeling of 'something is wrong' — a specific room or corner feels heavy",
                "Builder said '100% Vastu Compliant' but problems persist and multiply",
                "Child's behavior changed after moving — aggression, academic decline, withdrawal",
                "Unable to sell or rent despite prime location — multiple deals collapse at last moment",
                "Business losses coinciding exactly with flat purchase timeline"
              ]} />
              <PainPointCard title="Living Here for Years (Ongoing Issues)" accent="#C88A5D" delay={0.1} points={[
                "Years of hard work, zero savings — money vanishes, EMIs pile up, no financial growth",
                "One family member always sick — the cycle rotates but never breaks",
                "Marriage under constant strain — fighting over nothing, contemplating separation",
                "Career/business rollercoaster — periods of success followed by sudden unexplained crashes",
                "Feeling stuck — no forward movement for years despite all efforts",
                "Children's future concerns — marriage delays, career confusion, addiction risks",
                "Constant fear and anxiety at home — no peace of mind, hypervigilance",
                "Repeated repair needs — plumbing leaks, electrical failures, wall cracks, termites",
                "Bad dreams and disturbed sleep patterns — waking at 2‑4 AM, feeling watched",
                "Addiction and mental health decline creeping into family members"
              ]} />
            </div>
          </div>

          {/* --- HOUSES --- */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl sm:text-3xl text-nidra-indigo text-center mb-8">🏡 Independent Houses</h3>
            <p className="text-center text-sm text-nidra-indigo/50 mb-6">Houses can be newly constructed or already lived in. New construction allows Vastu intervention at blueprint stage; existing homes require defect analysis and remedies.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <PainPointCard title="Planning/Blueprint Stage" accent="#FF9933" delay={0.2} points={[
                "Fear of lifetime regret — 'What if this house I'm building destroys my family?'",
                "Investment of crores — every room placement decision feels permanent and terrifying",
                "Architect‑Vastu conflict — modern design vs traditional wisdom, can't satisfy both",
                "Land quality concerns — is the soil stable? Is there Bhoomi Dosh?",
                "Slope direction fears — if east is low, will it drain wealth as the texts say?",
                "Contractor keeps changing specifications — quality fears, material substitution",
                "Loan approval nightmares despite good credit — documentation hurdles, delays",
                "Family conflicts intensified during construction — every decision becomes an argument",
                "Neighbor and legal disputes — boundary walls, municipal notices, encroachment claims",
                "Fear of choosing wrong Vastu consultant — already spent money on multiple opinions"
              ]} />
              <PainPointCard title="Under Construction / Recently Completed" accent="#6366F1" delay={0.3} points={[
                "Construction delays and budget explosions — 2 years for a 12‑month project, costs doubled",
                "Accidents on site — workers injured, tools breaking, structural issues discovered during digging",
                "Family health declining even while living in temporary accommodation",
                "Partner pulling out of investment midway — financial collapse imminent",
                "Political interference, local opposition, goonda elements demanding money",
                "Material theft from site — cement, steel, sand disappearing",
                "Builder abandoned project — now stuck with half‑finished structure",
                "Weather destroying exposed construction — rains, heat, cracking",
                "What was promised vs what's built — completely different quality",
                "Every astrologer gave different muhurat — now doubting if construction started on right date"
              ]} />
            </div>

            <h4 className="font-serif text-xl text-sacred-saffron text-center mb-6">Already Constructed (Living In)</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <PainPointCard title="Inherited / Old Family Home" accent="#8B5A2B" delay={0.4} points={[
                "The house feels 'heavy' and depressing — walking in doesn't feel like coming home",
                "Pets keep dying or running away — documented sign of Bhoomi Dosh",
                "Same disease pattern across generations — father had BP at 50, son has it at 35",
                "Business declining despite market growth — competitors growing, you're shrinking",
                "Children not settling — marriage delays, career confusion, no direction",
                "Termites, dampness, structural decay — the house is physically deteriorating",
                "Unable to sell despite reasonable pricing — multiple deals collapse",
                "Neighbors prospering while your family struggles — same colony, same salary, different outcomes",
                "Frequent thefts or robberies in your specific house — feels targeted",
                "Ancestral property disputes — legal battles draining wealth and energy"
              ]} />
              <PainPointCard title="Recently Purchased / Renovated" accent="#D4A373" delay={0.5} points={[
                "Renovation completed but problems increased — now worse than before",
                "Bought a 'dream home' that's become a nightmare — hidden defects everywhere",
                "Previous owners had terrible luck — now you're experiencing the same patterns",
                "Invested in expensive interiors but can't enjoy the space — constant unease",
                "Extended family refuses to visit — they say the house 'doesn't feel right'",
                "House value depreciating despite renovations — bad investment compounding",
                "Contractor who renovated has disappeared — warranty claims ignored",
                "Hidden structural damage discovered after purchase — wasn't in inspection report",
                "Neighbors warned you about previous owners' misfortunes — now you understand why",
                "Wife wants to move out, husband refuses — the house has become a battleground"
              ]} />
            </div>
          </div>

          {/* --- GOVERNMENT QUARTERS --- */}
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-nidra-indigo text-center mb-8">🏛️ Government Quarters</h3>
            <p className="text-center text-sm text-nidra-indigo/50 mb-6">Government quarters are assigned, not chosen. You cannot renovate structurally. Vastu defects are inherited and compounded by poor maintenance. Available only as already‑constructed.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <PainPointCard title="Living in Government Quarters" accent="#059669" delay={0.6} points={[
                "Poor maintenance compounding Vastu defects — crumbling infrastructure, leaks, cracks",
                "Cannot renovate or change structure — it's government property",
                "Transferred here for career growth but career is now stagnant",
                "Family health declining since moving in — frequent hospital visits",
                "Same quarter, different families — all struggling with similar issues",
                "Unable to decorate or personalize — heavy furniture placement restricted",
                "Neighbor's quarter is identical but they're prospering — why the difference?",
                "Fear of requesting transfer — will new quarter be even worse?",
                "Children's education suffering — concentration issues, poor grades since moving",
                "Retirement approaching — fear of buying house after decades of Vastu struggle"
              ]} />
              <PainPointCard title="Post‑Retirement / Long‑Term Quarter" accent="#047857" delay={0.7} points={[
                "Decades in the same quarter — problems became 'normal' but never resolved",
                "Chronic illnesses that doctors attribute to 'age' but started at 40",
                "Adult children refuse to visit — they say the quarter feels depressing",
                "Pension and savings adequate but money never feels enough — constant financial anxiety",
                "Watched juniors get promoted past you — career plateau despite seniority",
                "Spouse's health declined rapidly after moving here — never recovered",
                "Grandchildren getting sick whenever they stay over — family notices the pattern",
                "Retirement plans disrupted — unable to settle peacefully",
                "Memories of better times in previous postings — what changed?",
                "The quarter was assigned — you never had a choice. Now seeking correction"
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS JOURNEY ===== */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="font-serif text-3xl text-center text-nidra-indigo mb-12">Your Journey to a Harmonious Home</h2>
          
          {/* Already Constructed Process */}
          <h3 className="font-serif text-xl text-sacred-saffron text-center mb-6">For Already Constructed Homes</h3>
          <div className="grid sm:grid-cols-4 gap-4 mb-12">
            {[
              { step: '01', title: 'Submit Layout', desc: 'Fill form with mandatory computerized layout plan of your home sent to Acharya' },
              { step: '02', title: 'Acharya Reviews', desc: 'Vastuvid KK Nagaich personally analyzes layout for Vastu defects & energy imbalances' },
              { step: '03', title: 'Issue Identification', desc: 'Two possibilities found: Demolition necessary OR Non‑structural remedies sufficient' },
              { step: '04', title: 'Remedies Delivered', desc: 'Personalized solutions — Yantras, rituals, color therapy, furniture adjustments provided' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-vastu-stone/20 rounded-2xl">
                <div className="text-3xl font-bold text-prakash-gold mb-2">{s.step}</div>
                <h3 className="font-serif text-base text-nidra-indigo font-bold">{s.title}</h3>
                <p className="text-sm text-nidra-indigo/60 mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Send Land Details', desc: 'Computerized layout of land + photos (PDF) + location coordinates sent to Acharya' },
              { step: '02', title: 'Acharya Audit', desc: 'Deep analysis of land orientation, slope, soil, surroundings via 81‑grid Vastu parameters' },
              { step: '03', title: 'Clearance or Correction', desc: 'If layout correct → checkpoint cleared. If flaws found → solutions & corrections provided' },
              { step: '04', title: 'Resubmit & Re‑audit', desc: 'Remake computerized layout with corrections, send back. Acharya re‑verifies for final clearance' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-emerald-50/30 rounded-2xl border border-emerald-200/30">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{s.step}</div>
                <h3 className="font-serif text-base text-nidra-indigo font-bold">{s.title}</h3>
                <p className="text-sm text-nidra-indigo/60 mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING PLANS ===== */}
      <section className="py-20 bg-vastu-stone/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl text-center text-nidra-indigo mb-12">Pricing Plans</h2>
          
          <h3 className="font-serif text-xl text-sacred-saffron text-center mb-8">Already Constructed Homes</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <PricingCard plan="Silver" price="₹4,999" color="#A0A0A0" features={["No physical visit","Computerized layout analysis","Remedies via upto 30‑minute call","One‑time delivery"]} />
            <PricingCard plan="Gold" price="₹6,999" color="#FFD700" features={["All Silver features","2 follow‑up calls","Virtual meeting included","Extended remedy guidance"]} best />
            <PricingCard plan="Luxury" price="₹9,999" color="#E8B960" features={["All Gold features","1 personal site visit","Complete Vastu audit","4 scheduled follow‑ups (30 min each)","Full ritual execution if needed"]} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard plan="Silver" price="₹4,999" color="#A0A0A0" features={["No physical visit","Layout suggestions & corrections","Remedies via upto 30‑minute call","One‑time audit (extra audits ₹2,199 each)"]} />
            <PricingCard plan="Gold" price="₹6,999" color="#FFD700" features={["All Silver features","2 follow‑up calls","Virtual meeting","2 callbacks of audit included"]} best />
            <PricingCard plan="Luxury" price="₹9,999" color="#E8B960" features={["All Gold features","1 personal site visit","Complete Vastu blueprint audit","Multiple follow‑up audits","Full ritual execution"]} />
          </div>
        </div>
      </section>

      <RemediesCTA />
      <VirtualConsultCTA />

      {/* FINAL CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#3a0a0a] to-[#0a0000] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Experience the VedicUrja Difference</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Vastuvid KK Nagaich — <strong className="text-prakash-gold">100M+ views, 80K+ followers, MBA, Ex‑CEO, 4th‑generation Tantra‑trained Vastu Guru</strong> — personally performs every residential audit. No delegation. No generic reports.
          </p>
          <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
            Schedule Your Residential Audit →
          </Link>
        </div>
      </section>
    </SmoothScroll>
    <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
  </>);
}
