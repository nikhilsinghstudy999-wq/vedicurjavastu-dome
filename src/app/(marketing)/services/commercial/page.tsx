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

function PainPointCard({ title, accent, points, delay }: { title: string; accent: string; points: string[]; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ delay: delay || 0, duration: 0.6 }} whileHover={{ y: -6, scale: 1.02 }} className="group relative">
      <div className="absolute -inset-0.5 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" style={{ background: `linear-gradient(135deg, ${accent}40, transparent)` }} />
      <div className="relative p-6 rounded-[28px] bg-white/80 backdrop-blur-xl border border-prakash-gold/20 shadow-[0_8px_32px_rgba(26,42,58,0.06)] hover:shadow-[0_20px_50px_rgba(200,138,93,0.15)] transition-shadow duration-500">
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-[28px]" style={{ backgroundColor: accent }} />
        <h3 className="font-serif text-xl text-nidra-indigo font-bold mb-5">{title}</h3>
        <ul className="space-y-3">{points.map((p,i)=><li key={i} className="flex items-start gap-3 text-sm text-nidra-indigo/70"><span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor:accent}}/>{p}</li>)}</ul>
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
      <ul className="mt-4 space-y-2 text-sm text-nidra-indigo/70">{features.map((f,i)=><li key={i} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full" style={{backgroundColor:color}}/>{f}</li>)}</ul>
    </motion.div>
  );
}

export default function CommercialVastuPage() {
  return (<>
    <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a3a5c] to-[#0a1628] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
        <div className="container mx-auto px-4 relative z-10 text-center mt-16">
          <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">Extensive Framework</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl"><span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-emerald-400 bg-clip-text text-transparent">Commercial Vastu</span></h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-4">Offices · Shops · Showrooms · Business Growth through Vedic spatial science.</p>
          <p className="text-sm text-white/50 max-w-2xl mx-auto mb-10">MBA‑backed business perspective — every Vastu defect mapped to your P&amp;L.</p>
          <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-emerald-500 text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Commercial Audit</Link>
        </div>
      </section>
      <GuruAuthority /><WhyChooseUs />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Your Business Journey</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Identify <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Your Challenge</span></h2>
          </div>

          {/* --- OFFICES --- */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl text-nidra-indigo text-center mb-8">🏢 Offices & Corporate Spaces</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <PainPointCard title="New / Relocating Office" accent="#3B82F6" points={[
                "Previous office was profitable — new location draining money inexplicably","Employees leaving despite higher salaries and better facilities",
                "Clients canceling meetings at the last moment without reason","Constant AC/electrical failures in specific zones — repair costs mounting",
                "Legal notices, tax raids, compliance issues suddenly increasing after move",
                "CEO/Owner feeling mentally foggy in cabin — unable to make clear decisions",
                "Competitors growing while you stagnate despite better product and team",
                "Office politics and team conflicts that never existed in previous space",
                "Feeling unsafe or anxious in the space — high employee absenteeism",
                "Unable to sublet or exit lease despite prime location — trapped financially"
              ]} />
              <PainPointCard title="Existing Office with Declining Performance" accent="#6366F1" points={[
                "Revenue flat or declining for 2+ years despite market growth and new clients",
                "Key employees resigning in clusters — no retention despite salary hikes",
                "Payment follow‑ups becoming harder — clients delaying invoices inexplicably",
                "Cash flow crisis despite healthy order book and confirmed contracts",
                "Owner losing motivation — considering shutting down a profitable business",
                "Frequent accidents or health issues among staff — sick leave skyrocketing",
                "Partnership disputes, co‑founder conflicts — legal fights brewing",
                "Unable to scale — hitting same revenue ceiling repeatedly despite expansion efforts",
                "Negative reviews or reputation damage from unknown source — brand erosion",
                "Repeated IT/system failures, data loss — technology keeps failing"
              ]} />
            </div>
          </div>

          {/* --- SHOPS & RETAIL --- */}
          <div>
            <h3 className="font-serif text-2xl text-nidra-indigo text-center mb-8">🛍️ Shops, Showrooms & Retail</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <PainPointCard title="New Shop Setup" accent="#10B981" points={[
                "Footfall lower than expected despite prime location and heavy foot-traffic area","Customers enter but don't purchase — browsing without buying",
                "Goods getting damaged, inventory shrinkage, unexplained stock loss","Staff stealing or underperforming — multiple dismissals haven't solved it",
                "Nearby competitors thriving while you struggle — same location, different results","Loan repayment stress, EMI burden crushing cash flow",
                "Licensing and municipal issues — constant harassment from authorities","Heaviness in specific shop corners — customers avoid those zones instinctively",
                "Family stress due to business pressure — home life deteriorating","Unable to attract premium clients despite brand positioning and quality"
              ]} />
              <PainPointCard title="Existing Shop with Declining Sales" accent="#F59E0B" points={[
                "30‑40% sales drop from peak without any market or competition reason","Regular customers suddenly stopped coming — no explanation, no complaints",
                "Inventory not moving — dead stock piling up, expiry dates approaching","Multiple theft incidents, shoplifting increases despite security measures",
                "Rent increase pressure without revenue increase — landlord squeezing margins","Staff fights, high attrition, training costs wasted on people who leave",
                "Owner health problems — blood pressure, diabetes, anxiety from business stress","Legal disputes with suppliers/landlord — court cases draining resources",
                "Unable to sell the business despite profitability — no buyer stays interested","Feeling trapped — can't grow, can't exit, can't sustain current losses"
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-vastu-stone/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl text-center text-nidra-indigo mb-12">Commercial Vastu Process</h2>
          <div className="grid sm:grid-cols-4 gap-4 mb-16">
            {[
              {step:'01',title:'Submit Layout',desc:'Computerized office/shop layout + business details sent to Acharya for analysis'},
              {step:'02',title:'MBA Audit',desc:'Revenue zones, CEO cabin, cash counter, employee grid — every defect mapped to business metric'},
              {step:'03',title:'Defect Report',desc:'Clear identification of issues with business impact: revenue leakage %, attrition cause, client loss zones'},
              {step:'04',title:'Remedies + Strategy',desc:'Non‑structural corrections + ritual execution + business growth strategy for recovery'}
            ].map((s,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="text-center p-6 bg-white/80 rounded-2xl"><div className="text-3xl font-bold text-prakash-gold mb-2">{s.step}</div><h3 className="font-serif text-base text-nidra-indigo font-bold">{s.title}</h3><p className="text-sm text-nidra-indigo/60 mt-2">{s.desc}</p></motion.div>))}
          </div>

          <h2 className="font-serif text-3xl text-center text-nidra-indigo mb-8">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard plan="Silver" price="₹6,999" color="#A0A0A0" features={["No physical visit","Layout audit & suggestions","Remedies via upto 30‑minute call","One‑time delivery"]} />
            <PricingCard plan="Gold" price="₹9,999" color="#FFD700" features={["All Silver features","2 follow‑up calls","Virtual meeting","Business growth strategy report"]} best />
            <PricingCard plan="Luxury" price="₹14,999" color="#E8B960" features={["All Gold features","1 personal site visit","Complete commercial audit","4 scheduled follow‑ups","Full ritual execution","Employee productivity alignment"]} />
          </div>
        </div>
      </section>

      <RemediesCTA /><VirtualConsultCTA />
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1a3a5c] to-[#0a1628] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Grow Your Business with Vedic Precision</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">100M+ views, 80K+ followers — personally audited by Vastuvid KK Nagaich.</p>
          <Link href="/bookings" className="luxury-button text-lg">Schedule Your Commercial Audit →</Link>
        </div>
      </section>
    </SmoothScroll>
    <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
  </>);
}
