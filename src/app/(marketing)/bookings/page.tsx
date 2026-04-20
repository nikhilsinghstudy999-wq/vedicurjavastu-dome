'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { supabase } from '@/lib/supabase/client';
import { createMiroTalkMeeting } from '@/lib/mirotalk/client';
import AnimatedText, { GradientText } from '@/features/shared/components/AnimatedText';
import Mandala3D from '@/features/shared/components/Mandala3D';
import FloatingParticles from '@/features/shared/components/svg/FloatingParticles';

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

function InquiryForm({ onSubmit, submitting }: { onSubmit: (data: any) => Promise<void>; submitting: boolean }) {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', address: '', message: '' });
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      // Basic validation for mobile
      if (selected.size > 10 * 1024 * 1024) {
        setFileError('File too large (max 10MB)');
        setFile(null);
      } else {
        setFileError('');
        setFile(selected);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setFileError('Layout plan is required');
      return;
    }
    onSubmit({ ...form, file });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedText text="Request Your Consultation" className="font-serif text-3xl text-center text-nidra-indigo mb-4" />
        <form onSubmit={handleSubmit} className="space-y-4 bg-vastu-parchment p-4 sm:p-6 rounded-2xl">
          <input
            name="fullName"
            placeholder="Full Name *"
            required
            value={form.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl text-base"
            autoComplete="name"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone *"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl text-base"
            autoComplete="tel"
          />
          <input
            name="email"
            type="email"
            placeholder="Email (Optional)"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl text-base"
            autoComplete="email"
          />
          <textarea
            name="address"
            placeholder="Full Address *"
            required
            value={form.address}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl text-base"
            rows={2}
            autoComplete="street-address"
          />
          <div>
            <label className="block text-sm font-medium mb-1">Layout Plan (PDF/JPG/PNG) *</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="w-full p-3 border rounded-xl text-base"
            />
            {fileError && <p className="text-red-500 text-sm mt-1">{fileError}</p>}
            {file && !fileError && <p className="text-green-600 text-sm mt-1">Selected: {file.name}</p>}
          </div>
          <textarea
            name="message"
            placeholder="Additional Message (Optional)"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl text-base"
            rows={3}
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full luxury-button py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Submitting...
              </span>
            ) : (
              'Submit Inquiry'
            )}
          </button>
          <p className="text-xs text-center text-nidra-indigo/50">* Required fields. We'll respond via WhatsApp.</p>
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
  const [error, setError] = useState<string | null>(null);
  const scrollToForm = () => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });

  const handleSubmit = async (formData: any) => {
    if (!user) {
      router.push('/signin');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const file = formData.file as File;
      
      // Step 1: Upload file with retry logic for mobile networks
      const filePath = `layout-plans/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      let uploadAttempts = 0;
      let uploadError = null;

      while (uploadAttempts < 2) {
        const { error } = await supabase.storage
          .from('consultation-files')
          .upload(filePath, file, { cacheControl: '3600', upsert: false });
        
        if (!error) {
          uploadError = null;
          break;
        }
        uploadError = error;
        uploadAttempts++;
        if (uploadAttempts < 2) await new Promise(r => setTimeout(r, 1000));
      }

      if (uploadError) throw new Error(`File upload failed: ${uploadError.message}`);

      const { data: urlData } = supabase.storage.from('consultation-files').getPublicUrl(filePath);
      const layoutPlanUrl = urlData.publicUrl;

      // Step 2: Create consultation record
      const { data: consultation, error: consultError } = await supabase
        .from('consultations')
        .insert({
          client_id: user.id,
          scheduled_at: null,
          duration_minutes: 60,
          status: 'inquired',
          payment_status: 'inquired',
        })
        .select()
        .single();

      if (consultError) throw new Error(`Failed to create consultation: ${consultError.message}`);

      // Step 3: Generate meeting link (with timeout)
      const meetingPromise = createMiroTalkMeeting({
        room: consultation.id,
        name: formData.fullName,
        audio: true,
        video: true,
      });
      
      const timeoutPromise = new Promise<string>((_, reject) =>
        setTimeout(() => reject(new Error('Meeting creation timed out')), 15000)
      );

      const meetingUrl = await Promise.race([meetingPromise, timeoutPromise]);
      await supabase.from('consultations').update({ meeting_url: meetingUrl }).eq('id', consultation.id);

      // Step 4: Create meeting link token
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7);
      await supabase.from('meeting_links').insert({
        consultation_id: consultation.id,
        expires_at: expiresAt.toISOString(),
      });

      // Step 5: Save contact message
      const { error: msgError } = await supabase.from('contact_messages').insert({
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email || null,
        address: formData.address,
        message: formData.message || null,
        layout_plan_url: layoutPlanUrl,
      });

      if (msgError) console.warn('Contact message save failed (non-critical):', msgError);

      setSubmitted(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <HeroSection onCtaClick={scrollToForm} />
          <div id="inquiry-form">
            {submitted ? (
              <section className="py-24 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="font-serif text-2xl">Inquiry Registered</h2>
                <p className="text-nidra-indigo/70">Vastuvid KK Nagaich will contact you via WhatsApp.</p>
              </section>
            ) : (
              <>
                {error && (
                  <div className="container mx-auto px-4 max-w-3xl mt-8">
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl">
                      <p className="font-medium">Error: {error}</p>
                      <button
                        onClick={() => setError(null)}
                        className="mt-2 text-sm underline"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                )}
                <InquiryForm onSubmit={handleSubmit} submitting={submitting} />
              </>
            )}
          </div>
        </main>
      </SmoothScroll>
    </>
  );
}
