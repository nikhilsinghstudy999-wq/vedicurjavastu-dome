#!/bin/bash
set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}     RESTORE FULL BOOKING PAGE – ALL 12 SECTIONS${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR=".backups/booking_full_${TIMESTAMP}"
mkdir -p "${BACKUP_DIR}"

# Backup current file
if [ -f "src/app/(marketing)/bookings/page.tsx" ]; then
    cp "src/app/(marketing)/bookings/page.tsx" "${BACKUP_DIR}/page.tsx"
    echo -e "${YELLOW}📦 Backed up current bookings page${NC}"
fi

# -----------------------------------------------------------------------------
# COMPLETE BOOKING PAGE WITH ALL SECTIONS
# -----------------------------------------------------------------------------
echo -e "\n${YELLOW}📝 Writing complete Booking Page with all sections...${NC}"
cat > src/app/\(marketing\)/bookings/page.tsx << 'EOF'
'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { supabase } from '@/lib/supabase/client';
import { slotsService } from '@/services/supabase/slots.service';
import { createMiroTalkMeeting } from '@/lib/mirotalk/client';
import AnimatedText, { GradientText } from '@/features/shared/components/AnimatedText';
import Mandala3D from '@/features/shared/components/Mandala3D';
import FloatingParticles from '@/features/shared/components/svg/FloatingParticles';

const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false });
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

interface Slot { id: string; start_time: string; end_time: string; is_booked: boolean; }

// ----------------------------------------------------------------------
// Hero Section
// ----------------------------------------------------------------------
function HeroSection({ onCtaClick }: { onCtaClick: () => void }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <motion.section ref={ref} style={{ opacity }} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-vastu-parchment via-white to-vastu-parchment">
      <Mandala3D /><FloatingParticles />
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.span initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="text-sacred-saffron uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block">Virtual Consultation</motion.span>
        <AnimatedText text="Ancient Wisdom." className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-nidra-indigo mb-2" />
        <GradientText text="Modern Connection." className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 block" />
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3 }} className="text-base sm:text-lg md:text-xl text-nidra-indigo/70 max-w-2xl mx-auto mb-10">Experience personalised Vastu guidance from anywhere in the world via secure video call.</motion.p>
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onCtaClick} className="luxury-button">Book Your Session</button>
          <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior:'smooth' })} className="bg-transparent border-2 border-prakash-gold text-nidra-indigo hover:bg-prakash-gold/10 px-8 py-4 rounded-full">How It Works</button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

// ----------------------------------------------------------------------
// Problem Section
// ----------------------------------------------------------------------
function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <AnimatedText text="Traveling to a consultant is impractical." className="font-serif text-3xl md:text-4xl text-nidra-indigo mb-6" />
        <p className="text-lg text-nidra-indigo/70">You deserve trusted Vastu guidance without leaving the comfort of your home or office.</p>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Solution Section
// ----------------------------------------------------------------------
function SolutionSection() {
  return (
    <section className="py-20 bg-vastu-stone/30">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <AnimatedText text="Introducing VedicUrja Virtual Consultations." className="font-serif text-3xl md:text-4xl text-nidra-indigo mb-6" />
        <p className="text-lg text-nidra-indigo/70">Personalised Vastu analysis, screen sharing, and real‑time remedies – all online, all secure.</p>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// How It Works Section
// ----------------------------------------------------------------------
function HowItWorksSection() {
  const steps = ['Submit consultation request form', 'Upload computerized layout plan', 'Vastuvid KK Nagaich reviews your details', 'Vastuvid KK Nagaich connects with you via WhatsApp'];
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedText text="How It Works" className="font-serif text-4xl text-center text-nidra-indigo mb-16" />
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="text-center w-40">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-prakash-gold/20 flex items-center justify-center text-2xl font-bold text-nidra-indigo">{i+1}</div>
              <p className="font-medium text-nidra-indigo">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Meet Vastuvid Section
// ----------------------------------------------------------------------
function MeetVastuvidSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-vastu-parchment">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-5xl">
        <div className="md:w-1/3 flex justify-center">
          <img src="/acharyajiphoto.png" alt="Vastuvid KK Nagaich" className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-prakash-gold" />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <AnimatedText text="Vastuvid KK Nagaich" className="font-serif text-3xl text-nidra-indigo mb-4" />
          <p className="text-sacred-saffron uppercase tracking-wider text-sm mb-4">4th Generation Vastu Guru</p>
          <p className="text-nidra-indigo/70">With over four decades of experience and 500+ clients globally, Vastuvid KK Nagaich brings authentic Vedic wisdom to every consultation.</p>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Benefits Section
// ----------------------------------------------------------------------
function BenefitsSection() {
  const benefits = ['No travel required', 'Session recording available', 'Screen share floor plans', 'Post‑consult summary'];
  return (
    <section className="py-20 bg-vastu-stone/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedText text="Why Virtual?" className="font-serif text-3xl text-center text-nidra-indigo mb-12" />
        <div className="grid grid-cols-2 gap-6">
          {benefits.map((b,i) => (
            <div key={i} className="flex items-center gap-3 bg-white/50 p-4 rounded-xl"><span className="text-prakash-gold text-xl">✓</span><span>{b}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Scheduler Section – FullCalendar
// ----------------------------------------------------------------------
function SchedulerSection({ onSlotSelect, slots, loadingSlots }: { onSlotSelect: (s:Slot)=>void; slots: Slot[]; loadingSlots: boolean }) {
  const events = slots.map(s => ({ id: s.id, title: s.is_booked ? '🔴 Booked' : '🟢 Available', start: s.start_time, end: s.end_time, backgroundColor: s.is_booked ? '#ef4444' : '#10b981' }));
  return (
    <section id="scheduler" className="py-24 bg-vastu-parchment">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedText text="Choose Your Time" className="font-serif text-4xl text-center text-nidra-indigo mb-4" />
        <p className="text-center text-nidra-indigo/60 mb-8">Select an available 60‑minute slot</p>
        {loadingSlots ? <div className="text-center py-12"><div className="w-12 h-12 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" /></div> : (
          <div className="luxury-calendar-wrapper w-full">
            <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} initialView="timeGridWeek" headerToolbar={{ left: 'prev,next today', center: 'title', right: 'timeGridWeek,dayGridMonth' }} events={events} eventClick={(info) => { const slot = slots.find(s => s.id === info.event.id); if (slot && !slot.is_booked) onSlotSelect(slot); }} height="auto" slotMinTime="09:00:00" slotMaxTime="17:00:00" slotDuration="01:00:00" />
          </div>
        )}
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Inquiry Form (appears after slot selection)
// ----------------------------------------------------------------------
function InquiryForm({ selectedSlot, onSubmit, submitting, onCancel }: { selectedSlot: Slot; onSubmit: (data: any)=>void; submitting: boolean; onCancel: ()=>void }) {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', address: '', message: '' });
  const [file, setFile] = useState<File | null>(null);
  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); onSubmit({ ...form, file }); };
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedText text="Complete Your Inquiry" className="font-serif text-3xl text-center text-nidra-indigo mb-4" />
        <p className="text-center text-nidra-indigo/60 mb-8">Selected slot: {new Date(selectedSlot.start_time).toLocaleString()}</p>
        <form onSubmit={handleSubmit} className="space-y-6 bg-vastu-parchment p-6 sm:p-8 rounded-2xl border border-prakash-gold/30">
          <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Full Name *</label><input type="text" name="fullName" required value={form.fullName} onChange={handleChange} className="w-full p-3 border rounded-xl bg-white" /></div>
          <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Phone Number *</label><input type="tel" name="phone" required value={form.phone} onChange={handleChange} className="w-full p-3 border rounded-xl bg-white" /></div>
          <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Email (Optional)</label><input type="email" name="email" value={form.email} onChange={handleChange} className="w-full p-3 border rounded-xl bg-white" /></div>
          <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Full Address *</label><textarea name="address" required rows={2} value={form.address} onChange={handleChange} className="w-full p-3 border rounded-xl bg-white" /></div>
          <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Computerized Layout Plan * (PDF, JPG, PNG)</label><input type="file" accept=".pdf,.jpg,.jpeg,.png" required onChange={e => setFile(e.target.files?.[0] || null)} className="w-full p-3 border rounded-xl bg-white" />{file && <p className="text-xs text-green-600 mt-1">Selected: {file.name}</p>}</div>
          <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Additional Message (Optional)</label><textarea name="message" rows={3} value={form.message} onChange={handleChange} className="w-full p-3 border rounded-xl bg-white" /></div>
          <div className="flex gap-4">
            <button type="submit" disabled={submitting} className="flex-1 luxury-button py-4 disabled:opacity-50">{submitting ? 'Submitting...' : 'Submit Inquiry'}</button>
            <button type="button" onClick={onCancel} className="flex-1 border-2 border-prakash-gold text-nidra-indigo py-4 rounded-full font-medium">Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Testimonials Section
// ----------------------------------------------------------------------
function TestimonialsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedText text="Trusted by Seekers Worldwide" className="font-serif text-4xl text-center text-nidra-indigo mb-4" />
        <p className="text-center text-nidra-indigo/60">★ 4.9 • 500+ satisfied clients • 15+ countries</p>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// FAQ Section
// ----------------------------------------------------------------------
function FAQSection() {
  const faqs = [
    { q:'What if I am not tech‑savvy?', a:'We will guide you through a simple one‑click join process.' },
    { q:'Is virtual consultation as effective?', a:'Yes, Vastuvid uses screen sharing to analyse floor plans just like in person.' },
    { q:'Can I reschedule?', a:'You can reschedule up to 24 hours before your session.' },
  ];
  return (
    <section className="py-20 bg-vastu-stone/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedText text="Frequently Asked Questions" className="font-serif text-3xl text-center text-nidra-indigo mb-8" />
        <div className="space-y-4">{faqs.map((f,i) => (<details key={i} className="bg-white p-4 rounded-xl"><summary className="font-medium cursor-pointer">{f.q}</summary><p className="mt-2 text-nidra-indigo/70">{f.a}</p></details>))}</div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Final CTA
// ----------------------------------------------------------------------
function FinalCTA({ onCtaClick }: { onCtaClick: ()=>void }) {
  return (
    <section className="py-32 bg-nidra-indigo text-white text-center">
      <div className="container mx-auto px-4">
        <AnimatedText text="Ready to Harmonise Your Space?" className="font-serif text-4xl md:text-6xl mb-6 text-white" />
        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">Book your virtual consultation now and begin your transformation.</p>
        <button onClick={onCtaClick} className="bg-prakash-gold hover:bg-sacred-saffron text-nidra-indigo font-bold px-10 py-5 rounded-full text-lg transition">Book Your Session</button>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Main Page
// ----------------------------------------------------------------------
export default function BookingsPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const fetchSlots = async () => {
    setLoadingSlots(true);
    try { const data = await slotsService.fetchAvailableSlots(); setSlots(data); } catch (error) { console.error('Failed to fetch slots:', error); } finally { setLoadingSlots(false); }
  };
  useEffect(() => { fetchSlots(); }, []);

  const scrollToScheduler = () => document.getElementById('scheduler')?.scrollIntoView({ behavior: 'smooth' });

  const handleSlotSelect = (slot: Slot) => {
    if (!user) { router.push('/signin'); return; }
    setSelectedSlot(slot);
    setShowInquiryForm(true);
  };

  const handleSubmit = async (formData: any) => {
    if (!user || !selectedSlot) return;
    setSubmitting(true);
    try {
      const file = formData.file as File;
      const path = `layout-plans/${Date.now()}-${file.name}`;
      await supabase.storage.from('consultation-files').upload(path, file);
      const { data: urlData } = supabase.storage.from('consultation-files').getPublicUrl(path);
      const layoutPlanUrl = urlData.publicUrl;

      const { data: consultation, error: consultError } = await supabase.from('consultations').insert({
        client_id: user.id, scheduled_at: selectedSlot.start_time, duration_minutes: 60, status: 'inquired', payment_status: 'inquired'
      }).select().single();
      if (consultError) throw consultError;

      const meetingUrl = await createMiroTalkMeeting({ room: consultation.id, name: formData.fullName, audio: true, video: true });
      await supabase.from('consultations').update({ meeting_url: meetingUrl }).eq('id', consultation.id);
      await supabase.from('meeting_links').insert({ consultation_id: consultation.id, expires_at: new Date(Date.now() + 7*86400000).toISOString() });
      await supabase.from('contact_messages').insert({
        name: formData.fullName, phone: formData.phone, email: formData.email, address: formData.address,
        message: formData.message, layout_plan_url: layoutPlanUrl
      });

      await slotsService.bookSlot(selectedSlot.id, consultation.id);
      setSubmitted(true);
      setShowInquiryForm(false);
    } catch (err: any) { alert('Submission failed: ' + err.message); } finally { setSubmitting(false); }
  };

  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <HeroSection onCtaClick={scrollToScheduler} />
          <ProblemSection />
          <SolutionSection />
          <HowItWorksSection />
          <MeetVastuvidSection />
          <BenefitsSection />
          <SchedulerSection onSlotSelect={handleSlotSelect} slots={slots} loadingSlots={loadingSlots} />
          {showInquiryForm && selectedSlot && <InquiryForm selectedSlot={selectedSlot} onSubmit={handleSubmit} submitting={submitting} onCancel={() => setShowInquiryForm(false)} />}
          {submitted && (
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4 max-w-3xl text-center">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="font-serif text-2xl text-nidra-indigo mb-2">Inquiry Registered</h2>
                <p className="text-nidra-indigo/70">We will connect with you soon via WhatsApp to confirm your consultation.</p>
              </div>
            </section>
          )}
          <TestimonialsSection />
          <FAQSection />
          <FinalCTA onCtaClick={scrollToScheduler} />
        </main>
      </SmoothScroll>
    </>
  );
}
EOF

# -----------------------------------------------------------------------------
# 5. Rebuild
# -----------------------------------------------------------------------------
echo -e "\n${YELLOW}🧹 Cleaning .next...${NC}"
rm -rf .next

echo -e "\n${BLUE}🔨 Building project...${NC}"
if npm run build; then
    echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}✅ FULL BOOKING PAGE RESTORED WITH ALL SECTIONS${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    echo "The Virtual Consult page now includes:"
    echo "  - Hero Section"
    echo "  - Problem Section"
    echo "  - Solution Section"
    echo "  - How It Works Section"
    echo "  - Meet Vastuvid Section"
    echo "  - Benefits Section"
    echo "  - Scheduler Section (FullCalendar)"
    echo "  - Inquiry Form"
    echo "  - Testimonials Section"
    echo "  - FAQ Section"
    echo "  - Final CTA"
    echo ""
    echo "Run 'npm run dev' – the page is now complete."
else
    echo -e "\n${RED}❌ Build failed. Restoring backup...${NC}"
    if [ -f "${BACKUP_DIR}/page.tsx" ]; then
        cp "${BACKUP_DIR}/page.tsx" src/app/\(marketing\)/bookings/page.tsx
    fi
    exit 1
fi