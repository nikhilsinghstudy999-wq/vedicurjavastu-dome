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

interface Slot {
  id: string;
  start_time: string;
  end_time: string;
  is_booked: boolean;
}

function HeroSection({ onCtaClick }: { onCtaClick: () => void }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <motion.section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-vastu-parchment via-white to-vastu-parchment">
      <Mandala3D /><FloatingParticles />
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <AnimatedText text="Ancient Wisdom." className="font-serif text-5xl md:text-7xl text-nidra-indigo mb-2" />
        <GradientText text="Modern Connection." className="font-serif text-5xl md:text-7xl mb-6 block" />
        <motion.p className="text-lg text-nidra-indigo/70 max-w-2xl mx-auto mb-10">Experience personalised Vastu guidance from anywhere.</motion.p>
        <button onClick={onCtaClick} className="luxury-button">Book Your Session</button>
      </motion.div>
    </motion.section>
  );
}

function InquiryForm({ onSubmit, submitting }: { onSubmit: (data: any) => void; submitting: boolean }) {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', address: '', message: '' });
  const [file, setFile] = useState<File | null>(null);
  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); onSubmit({ ...form, file }); };
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedText text="Request Your Consultation" className="font-serif text-3xl text-center text-nidra-indigo mb-4" />
        <form onSubmit={handleSubmit} className="space-y-4 bg-vastu-parchment p-6 rounded-2xl">
          <input name="fullName" placeholder="Full Name *" required value={form.fullName} onChange={handleChange} className="w-full p-3 border rounded-xl" />
          <input name="phone" type="tel" placeholder="Phone *" required value={form.phone} onChange={handleChange} className="w-full p-3 border rounded-xl" />
          <input name="email" type="email" placeholder="Email (Optional)" value={form.email} onChange={handleChange} className="w-full p-3 border rounded-xl" />
          <textarea name="address" placeholder="Full Address *" required value={form.address} onChange={handleChange} className="w-full p-3 border rounded-xl" rows={2} />
          <div><label className="block text-sm mb-1">Layout Plan (PDF/JPG) *</label><input type="file" accept=".pdf,.jpg,.png" required onChange={e => setFile(e.target.files?.[0] || null)} className="w-full p-3 border rounded-xl" /></div>
          <textarea name="message" placeholder="Additional Message" value={form.message} onChange={handleChange} className="w-full p-3 border rounded-xl" rows={3} />
          <button type="submit" disabled={submitting} className="w-full luxury-button py-4 disabled:opacity-50">
            {submitting ? <span className="flex items-center justify-center gap-2"><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Submitting...</span> : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default function BookingsPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const fetchSlots = async () => {
    setLoadingSlots(true);
    try {
      const data = await slotsService.fetchAvailableSlots();
      setSlots(data);
    } catch (error) {
      console.error('Failed to fetch slots:', error);
    } finally {
      setLoadingSlots(false);
    }
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  const scrollToForm = () => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });

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
    } catch (err: any) {
      alert('Submission failed: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <HeroSection onCtaClick={scrollToForm} />
          <section id="scheduler" className="py-24 bg-vastu-parchment">
            <div className="container mx-auto px-4 max-w-5xl">
              <AnimatedText text="Choose Your Time" className="font-serif text-4xl text-center text-nidra-indigo mb-4" />
              {loadingSlots ? <div className="text-center py-12"><div className="w-12 h-12 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" /></div> : (
                <div className="luxury-calendar-wrapper w-full">
                  <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    headerToolbar={{ left: 'prev,next today', center: 'title', right: 'timeGridWeek,dayGridMonth' }}
                    events={slots.map(slot => ({ id: slot.id, title: slot.is_booked ? '🔴 Booked' : '🟢 Available', start: slot.start_time, end: slot.end_time, backgroundColor: slot.is_booked ? '#ef4444' : '#10b981' }))}
                    eventClick={(info) => { const slot = slots.find(s => s.id === info.event.id); if (slot && !slot.is_booked) handleSlotSelect(slot); }}
                    height="auto" slotMinTime="09:00:00" slotMaxTime="17:00:00" slotDuration="01:00:00"
                  />
                </div>
              )}
            </div>
          </section>
          <div id="inquiry-form">
            {submitted ? (
              <section className="py-24 text-center"><div className="text-6xl mb-4">✅</div><h2 className="font-serif text-2xl">Inquiry Registered</h2><p>Vastuvid KK Nagaich will contact you via WhatsApp.</p></section>
            ) : showInquiryForm && selectedSlot ? (
              <InquiryForm onSubmit={handleSubmit} submitting={submitting} />
            ) : null}
          </div>
        </main>
      </SmoothScroll>
    </>
  );
}
