'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Mandala3D from '@/features/shared/components/Mandala3D';
import FloatingParticles from '@/features/shared/components/svg/FloatingParticles';
import AnimatedText, { GradientText } from '@/features/shared/components/AnimatedText';
import { TestimonialsSlider } from '@/features/home/components/TestimonialsSlider';
import { supabase } from '@/lib/supabase/client';

function BookingFormSection() {
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', address: '', pincode: '', message: '' });
  const [layoutPlan, setLayoutPlan] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        setError('Please upload a PDF, JPG, or PNG file.');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB.');
        return;
      }
      setLayoutPlan(file);
      setError('');
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    const ext = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`;
    const { error } = await supabase.storage.from('layout-plans').upload(fileName, file, { cacheControl: '3600', upsert: false });
    if (error) throw new Error(`Upload failed: ${error.message}`);
    const { data } = supabase.storage.from('layout-plans').getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!formData.fullName.trim()) return setError('Please enter your full name.');
    if (!formData.phone.trim()) return setError('Please enter your phone number.');
    if (!formData.address.trim()) return setError('Please enter your full address.');
    if (!/^\d{6}$/.test(formData.pincode)) return setError('Please enter a valid 6-digit pincode.');
    if (!layoutPlan) return setError('Please upload a computerized layout plan.');

    setSubmitting(true);
    setUploadProgress(20);
    try {
      setUploadProgress(40);
      const fileUrl = await uploadFile(layoutPlan);
      setUploadProgress(70);
      const msg = `*🔔 New Consultation Request*\n──────────────────────────────\n👤 *Name:* ${formData.fullName}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email || 'Not provided'}\n📍 *Address:* ${formData.address}\n📮 *Pincode:* ${formData.pincode}\n📎 *Layout Plan:* ${fileUrl}\n💬 *Message:* ${formData.message || 'No additional message'}\n──────────────────────────────\n_Sent via VedicUrja website_`;
      const res = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageText: msg }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `Server error: ${res.status}`);
      }
      setUploadProgress(100);
      setSubmitted(true);
      setFormData({ fullName: '', phone: '', email: '', address: '', pincode: '', message: '' });
      setLayoutPlan(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
      setUploadProgress(0);
    }
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-prakash-gold/30 text-center max-w-2xl mx-auto">
        <div className="text-6xl mb-4">🙏</div>
        <h2 className="font-serif text-3xl text-nidra-indigo mb-2">Thank You!</h2>
        <p className="text-nidra-indigo/70 text-lg mb-6">Your consultation request has been sent successfully.<br />Acharya ji will respond within 12 hours.</p>
        <button onClick={() => setSubmitted(false)} className="luxury-button">Book Another Consultation</button>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-prakash-gold/30 max-w-2xl mx-auto">
      <h3 className="font-serif text-2xl sm:text-3xl text-nidra-indigo mb-6 text-center">Complete Your Inquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Full Name *</label><input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="Your full name" /></div>
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Phone Number *</label><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="+91 XXXXX XXXXX" /></div>
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Email Address</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="you@example.com" /></div>
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Full Address *</label><textarea name="address" rows={2} required value={formData.address} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none resize-none" placeholder="Your complete address" /></div>
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Pincode *</label><input type="text" name="pincode" required pattern="\d{6}" maxLength={6} value={formData.pincode} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="6-digit pincode" /></div>
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Computerized Layout Plan *</label><input type="file" accept=".pdf,.jpg,.jpeg,.png" required onChange={handleFileChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-prakash-gold/20" />{layoutPlan && <p className="text-xs text-green-600 mt-1">✅ {layoutPlan.name} ({(layoutPlan.size / 1024).toFixed(1)} KB)</p>}<p className="text-xs text-nidra-indigo/50 mt-2">If you don't have a layout plan, please visit a nearby architect to get one made.</p></div>
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Additional Message</label><textarea name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none resize-none" placeholder="Any specific concerns..." /></div>
        {error && <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-xl">{error}</p>}
        {uploadProgress > 0 && <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-prakash-gold h-2 rounded-full transition-all" style={{ width: `${uploadProgress}%` }} /></div>}
        <button type="submit" disabled={submitting} className="w-full luxury-button py-4 text-lg disabled:opacity-50 flex items-center justify-center gap-2">
          {submitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Uploading & Sending...
            </>
          ) : (
            'Submit Consultation Request'
          )}
        </button>
      </form>
    </motion.div>
  );
}

export default function BookingsPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-nidra-indigo via-nidra-indigo/80 to-vastu-parchment">
            <Mandala3D /><FloatingParticles />
            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sacred-saffron uppercase tracking-[0.3em] text-sm mb-4 block">Begin Your Transformation</motion.span>
              <AnimatedText text="Align Your Space," className="font-serif text-5xl sm:text-6xl md:text-8xl text-white mb-2 leading-tight" />
              <GradientText text="Elevate Your Life" className="font-serif text-5xl sm:text-6xl md:text-8xl mb-6 block" />
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">Experience personalised Vastu guidance from Vastuvid KK Nagaich, wherever you are.</motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={scrollToForm} className="luxury-button text-lg px-10 py-5">Book Your Session</button>
                <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg">How It Works</button>
              </motion.div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2"><span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto"><span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" /></span></div>
          </section>
          <section id="how-it-works" className="py-24 bg-white">
            <div className="container mx-auto px-4"><AnimatedText text="How It Works" className="font-serif text-4xl text-center text-nidra-indigo mb-16" />
              <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                {['Submit inquiry','Upload layout plan','Acharya reviews','WhatsApp confirmation','Video consultation'].map((step,i)=>(
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1 }} className="text-center w-40">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-prakash-gold/20 flex items-center justify-center text-2xl font-bold text-nidra-indigo">{i+1}</div><p className="font-medium text-nidra-indigo">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-20 bg-gradient-to-b from-white to-vastu-parchment">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-5xl">
              <div className="md:w-1/3 flex justify-center"><img src="/acharyajiphoto.png" alt="Vastuvid KK Nagaich" className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-prakash-gold" /></div>
              <div className="md:w-2/3 text-center md:text-left"><AnimatedText text="Vastuvid KK Nagaich" className="font-serif text-3xl text-nidra-indigo mb-4" /><p className="text-sacred-saffron uppercase tracking-wider text-sm mb-4">4th Generation Vastu Guru</p><p className="text-nidra-indigo/70">With over four decades of experience and 500+ clients globally, Acharya ji brings authentic Vedic wisdom to every consultation.</p></div>
            </div>
          </section>
          <section className="py-20 bg-white"><TestimonialsSlider /></section>
          <section ref={formRef} className="py-24 bg-vastu-parchment">
            <div className="container mx-auto px-4"><AnimatedText text="Ready to Begin?" className="font-serif text-4xl text-center text-nidra-indigo mb-4" /><p className="text-center text-nidra-indigo/60 mb-8">Fill the form below and Acharya ji will contact you within 12 hours.</p><BookingFormSection /></div>
          </section>
          <section className="py-32 bg-nidra-indigo text-white text-center">
            <div className="container mx-auto px-4"><AnimatedText text="Still have questions?" className="font-serif text-4xl md:text-6xl mb-6 text-white" /><p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">Contact us directly via WhatsApp or call.</p><Link href="/contact" className="bg-prakash-gold hover:bg-sacred-saffron text-nidra-indigo font-bold px-10 py-5 rounded-full text-lg transition">Contact Acharya</Link></div>
          </section>
        </main>
      </SmoothScroll>
    </>
  );
                    }      }
      setLayoutPlan(file);
      setError('');
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    const ext = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`;
    const { error } = await supabase.storage.from('layout-plans').upload(fileName, file, { cacheControl: '3600', upsert: false });
    if (error) throw new Error(`Upload failed: ${error.message}`);
    const { data } = supabase.storage.from('layout-plans').getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!formData.fullName.trim()) return setError('Please enter your full name.');
    if (!formData.phone.trim()) return setError('Please enter your phone number.');
    if (!formData.address.trim()) return setError('Please enter your full address.');
    if (!/^\d{6}$/.test(formData.pincode)) return setError('Please enter a valid 6-digit pincode.');
    if (!layoutPlan) return setError('Please upload a computerized layout plan.');

    setSubmitting(true);
    setUploadProgress(20);
    try {
      setUploadProgress(40);
      const fileUrl = await uploadFile(layoutPlan);
      setUploadProgress(70);
      const msg = `*🔔 New Consultation Request*\n──────────────────────────────\n👤 *Name:* ${formData.fullName}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email || 'Not provided'}\n📍 *Address:* ${formData.address}\n📮 *Pincode:* ${formData.pincode}\n📎 *Layout Plan:* ${fileUrl}\n💬 *Message:* ${formData.message || 'No additional message'}\n──────────────────────────────\n_Sent via VedicUrja website_`;
      const res = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageText: msg }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `Server error: ${res.status}`);
      }
      setUploadProgress(100);
      setSubmitted(true);
      setFormData({ fullName: '', phone: '', email: '', address: '', pincode: '', message: '' });
      setLayoutPlan(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
      setUploadProgress(0);
    }
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-prakash-gold/30 text-center max-w-2xl mx-auto">
        <div className="text-6xl mb-4">🙏</div>
        <h2 className="font-serif text-3xl text-nidra-indigo mb-2">Thank You!</h2>
        <p className="text-nidra-indigo/70 text-lg mb-6">Your consultation request has been sent successfully.<br />Acharya ji will respond within 12 hours.</p>
        <button onClick={() => setSubmitted(false)} className="luxury-button">Book Another Consultation</button>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-prakash-gold/30 max-w-2xl mx-auto">
      <h3 className="font-serif text-2xl sm:text-3xl text-nidra-indigo mb-6 text-center">Complete Your Inquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Full Name *</label><input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="Your full name" /></div>
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Phone Number *</label><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="+91 XXXXX XXXXX" /></div>
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Email Address</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="you@example.com" /></div>
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Full Address *</label><textarea name="address" rows={2} required value={formData.address} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none resize-none" placeholder="Your complete address" /></div>
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Pincode *</label><input type="text" name="pincode" required pattern="\d{6}" maxLength={6} value={formData.pincode} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="6-digit pincode" /></div>
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Computerized Layout Plan *</label><input type="file" accept=".pdf,.jpg,.jpeg,.png" required onChange={handleFileChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-prakash-gold/20" />{layoutPlan && <p className="text-xs text-green-600 mt-1">✅ {layoutPlan.name} ({(layoutPlan.size / 1024).toFixed(1)} KB)</p>}<p className="text-xs text-nidra-indigo/50 mt-2">If you don't have a layout plan, please visit a nearby architect to get one made.</p></div>
        <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Additional Message</label><textarea name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none resize-none" placeholder="Any specific concerns..." /></div>
        {error && <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-xl">{error}</p>}
        {uploadProgress > 0 && <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-prakash-gold h-2 rounded-full transition-all" style={{ width: `${uploadProgress}%` }} /></div>}
        <button type="submit" disabled={submitting} className="w-full luxury-button py-4 text-lg disabled:opacity-50 flex items-center justify-center gap-2">
          {submitting ? (<><svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Uploading & Sending...</>) : ('Submit Consultation Request')}
        </button>
      </form>
    </motion.div>
  );
}

export default function BookingsPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-nidra-indigo via-nidra-indigo/80 to-vastu-parchment">
            <Mandala3D /><FloatingParticles />
            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sacred-saffron uppercase tracking-[0.3em] text-sm mb-4 block">Begin Your Transformation</motion.span>
              <AnimatedText text="Align Your Space," className="font-serif text-5xl sm:text-6xl md:text-8xl text-white mb-2 leading-tight" />
              <GradientText text="Elevate Your Life" className="font-serif text-5xl sm:text-6xl md:text-8xl mb-6 block" />
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">Experience personalised Vastu guidance from Vastuvid KK Nagaich, wherever you are.</motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={scrollToForm} className="luxury-button text-lg px-10 py-5">Book Your Session</button>
                <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg">How It Works</button>
              </motion.div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2"><span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto"><span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" /></span></div>
          </section>
          <section id="how-it-works" className="py-24 bg-white">
            <div className="container mx-auto px-4"><AnimatedText text="How It Works" className="font-serif text-4xl text-center text-nidra-indigo mb-16" />
              <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                {['Submit inquiry','Upload layout plan','Acharya reviews','WhatsApp confirmation','Video consultation'].map((step,i)=>(
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1 }} className="text-center w-40">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-prakash-gold/20 flex items-center justify-center text-2xl font-bold text-nidra-indigo">{i+1}</div><p className="font-medium text-nidra-indigo">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-20 bg-gradient-to-b from-white to-vastu-parchment">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-5xl">
              <div className="md:w-1/3 flex justify-center"><img src="/acharyajiphoto.png" alt="Vastuvid KK Nagaich" className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-prakash-gold" /></div>
              <div className="md:w-2/3 text-center md:text-left"><AnimatedText text="Vastuvid KK Nagaich" className="font-serif text-3xl text-nidra-indigo mb-4" /><p className="text-sacred-saffron uppercase tracking-wider text-sm mb-4">4th Generation Vastu Guru</p><p className="text-nidra-indigo/70">With over four decades of experience and 500+ clients globally, Acharya ji brings authentic Vedic wisdom to every consultation.</p></div>
            </div>
          </section>
          <section className="py-20 bg-white"><TestimonialsSlider /></section>
          <section ref={formRef} className="py-24 bg-vastu-parchment">
            <div className="container mx-auto px-4"><AnimatedText text="Ready to Begin?" className="font-serif text-4xl text-center text-nidra-indigo mb-4" /><p className="text-center text-nidra-indigo/60 mb-8">Fill the form below and Acharya ji will contact you within 12 hours.</p><BookingFormSection /></div>
          </section>
          <section className="py-32 bg-nidra-indigo text-white text-center">
            <div className="container mx-auto px-4"><AnimatedText text="Still have questions?" className="font-serif text-4xl md:text-6xl mb-6 text-white" /><p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">Contact us directly via WhatsApp or call.</p><Link href="/contact" className="bg-prakash-gold hover:bg-sacred-saffron text-nidra-indigo font-bold px-10 py-5 rounded-full text-lg transition">Contact Acharya</Link></div>
          </section>
        </main>
      </SmoothScroll>
    </>
  );
                }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        setError('Please upload a PDF, JPG, or PNG file.');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB.');
        return;
      }
      setLayoutPlan(file);
      setError('');
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

    const { error } = await supabase.storage
      .from('layout-plans')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) throw new Error(`Upload failed: ${error.message}`);

    const { data } = supabase.storage
      .from('layout-plans')
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Please enter your phone number.');
      return;
    }
    if (!formData.address.trim()) {
      setError('Please enter your full address.');
      return;
    }
    if (!formData.pincode.trim() || !/^\d{6}$/.test(formData.pincode)) {
      setError('Please enter a valid 6-digit pincode.');
      return;
    }
    if (!layoutPlan) {
      setError('Please upload a computerized layout plan.');
      return;
    }

    setSubmitting(true);
    setUploadProgress(20);

    try {
      setUploadProgress(40);
      const fileUrl = await uploadFile(layoutPlan);
      setUploadProgress(70);

      const messageLines = [
        `*🔔 New Consultation Request*`,
        `──────────────────────────────`,
        `👤 *Name:* ${formData.fullName}`,
        `📞 *Phone:* ${formData.phone}`,
        `📧 *Email:* ${formData.email || 'Not provided'}`,
        `📍 *Address:* ${formData.address}`,
        `📮 *Pincode:* ${formData.pincode}`,
        `📎 *Layout Plan:* ${fileUrl}`,
        `💬 *Message:* ${formData.message || 'No additional message'}`,
        `──────────────────────────────`,
        `_Sent via VedicUrja website_`,
      ];
      const messageText = messageLines.join('\n');

      const response = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageText }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `Server error: ${response.status}`);
      }

      setUploadProgress(100);
      setSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        pincode: '',
        message: '',
      });
      setLayoutPlan(null);
    } catch (err: any) {
      setError(err.message || 'Failed to send request. Please try again.');
    } finally {
      setSubmitting(false);
      setUploadProgress(0);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-prakash-gold/30 text-center max-w-2xl mx-auto"
      >
        <div className="text-6xl mb-4">🙏</div>
        <h2 className="font-serif text-3xl text-nidra-indigo mb-2">Thank You!</h2>
        <p className="text-nidra-indigo/70 text-lg mb-6">
          Your consultation request has been sent successfully.<br />
          Acharya ji will respond within 12 hours.
        </p>
        <button onClick={() => setSubmitted(false)} className="luxury-button">
          Book Another Consultation
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-prakash-gold/30 max-w-2xl mx-auto"
    >
      <h3 className="font-serif text-2xl sm:text-3xl text-nidra-indigo mb-6 text-center">
        Complete Your Inquiry
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Full Name *</label>
          <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Phone Number *</label>
          <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="+91 XXXXX XXXXX" />
        </div>
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Full Address *</label>
          <textarea name="address" rows={2} required value={formData.address} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none resize-none" placeholder="Your complete address" />
        </div>
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Pincode *</label>
          <input type="text" name="pincode" required pattern="\d{6}" maxLength={6} value={formData.pincode} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="6-digit pincode" />
        </div>
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Computerized Layout Plan *</label>
          <input type="file" accept=".pdf,.jpg,.jpeg,.png" required onChange={handleFileChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-prakash-gold/20" />
          {layoutPlan && <p className="text-xs text-green-600 mt-1">✅ {layoutPlan.name} ({(layoutPlan.size / 1024).toFixed(1)} KB)</p>}
          <p className="text-xs text-nidra-indigo/50 mt-2">If you don't have a layout plan, please visit a nearby architect to get one made.</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Additional Message</label>
          <textarea name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none resize-none" placeholder="Any specific concerns..." />
        </div>
        {error && <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-xl">{error}</p>}
        {uploadProgress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-prakash-gold h-2 rounded-full transition-all" style={{ width: `${uploadProgress}%` }} />
          </div>
        )}
        <button type="submit" disabled={submitting} className="w-full luxury-button py-4 text-lg disabled:opacity-50 flex items-center justify-center gap-2">
          {submitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Uploading & Sending...
            </>
          ) : (
            'Submit Consultation Request'
          )}
        </button>
      </form>
    </motion.div>
  );
}

// =============================================================================
// Main Bookings Page
// =============================================================================
export default function BookingsPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <main className="relative bg-vastu-parchment">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-nidra-indigo via-nidra-indigo/80 to-vastu-parchment">
            <Mandala3D />
            <FloatingParticles />
            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sacred-saffron uppercase tracking-[0.3em] text-sm mb-4 block"
              >
                Begin Your Transformation
              </motion.span>
              <AnimatedText
                text="Align Your Space,"
                className="font-serif text-5xl sm:text-6xl md:text-8xl text-white mb-2 leading-tight"
              />
              <GradientText
                text="Elevate Your Life"
                className="font-serif text-5xl sm:text-6xl md:text-8xl mb-6 block"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
              >
                Experience personalised Vastu guidance from Vastuvid KK Nagaich, wherever you are.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button onClick={scrollToForm} className="luxury-button text-lg px-10 py-5">
                  Book Your Session
                </button>
                <button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg"
                >
                  How It Works
                </button>
              </motion.div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto">
                <span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" />
              </span>
            </div>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <AnimatedText text="How It Works" className="font-serif text-4xl text-center text-nidra-indigo mb-16" />
              <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                {['Submit inquiry', 'Upload layout plan', 'Acharya reviews', 'WhatsApp confirmation', 'Video consultation'].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center w-40"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-prakash-gold/20 flex items-center justify-center text-2xl font-bold text-nidra-indigo">
                      {i + 1}
                    </div>
                    <p className="font-medium text-nidra-indigo">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Meet Vastuvid */}
          <section className="py-20 bg-gradient-to-b from-white to-vastu-parchment">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-5xl">
              <div className="md:w-1/3 flex justify-center">
                <img src="/acharyajiphoto.png" alt="Vastuvid KK Nagaich" className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-prakash-gold" />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <AnimatedText text="Vastuvid KK Nagaich" className="font-serif text-3xl text-nidra-indigo mb-4" />
                <p className="text-sacred-saffron uppercase tracking-wider text-sm mb-4">4th Generation Vastu Guru</p>
                <p className="text-nidra-indigo/70">With over four decades of experience and 500+ clients globally, Acharya ji brings authentic Vedic wisdom to every consultation.</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 bg-white">
            <TestimonialsSlider />
          </section>

          {/* The Form */}
          <section ref={formRef} className="py-24 bg-vastu-parchment">
            <div className="container mx-auto px-4">
              <AnimatedText text="Ready to Begin?" className="font-serif text-4xl text-center text-nidra-indigo mb-4" />
              <p className="text-center text-nidra-indigo/60 mb-8">Fill the form below and Acharya ji will contact you within 12 hours.</p>
              <BookingFormSection />
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-32 bg-nidra-indigo text-white text-center">
            <div className="container mx-auto px-4">
              <AnimatedText text="Still have questions?" className="font-serif text-4xl md:text-6xl mb-6 text-white" />
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">Contact us directly via WhatsApp or call.</p>
              <Link href="/contact" className="bg-prakash-gold hover:bg-sacred-saffron text-nidra-indigo font-bold px-10 py-5 rounded-full text-lg transition">
                Contact Acharya
              </Link>
            </div>
          </section>
        </main>
      </SmoothScroll>
    </>
  );
        }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        setError('Please upload a PDF, JPG, or PNG file.');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB.');
        return;
      }
      setLayoutPlan(file);
      setError('');
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

    const { error } = await supabase.storage
      .from('layout-plans')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) throw new Error(`Upload failed: ${error.message}`);

    const { data: { publicUrl } } = supabase.storage
      .from('layout-plans')
      .getPublicUrl(fileName);

    return publicUrl;
  };

  const sendWhatsAppMessage = async (messageText: string): Promise<boolean> => {
    const response = await fetch('/api/send-whatsapp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageText }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send message');
    }
    const data = await response.json();
    return data.status === 'success' || data.success === true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName.trim()) { setError('Please enter your full name.'); return; }
    if (!formData.phone.trim()) { setError('Please enter your phone number.'); return; }
    if (!formData.address.trim()) { setError('Please enter your full address.'); return; }
    if (!formData.pincode.trim() || !/^\d{6}$/.test(formData.pincode)) { setError('Please enter a valid 6-digit pincode.'); return; }
    if (!layoutPlan) { setError('Please upload a computerized layout plan.'); return; }

    setSubmitting(true);
    setUploadProgress(20);

    try {
      setUploadProgress(40);
      const fileUrl = await uploadFile(layoutPlan);
      setUploadProgress(70);

      const messageLines = [
        `*🔔 New Consultation Request*`,
        `──────────────────────────────`,
        `👤 *Name:* ${formData.fullName}`,
        `📞 *Phone:* ${formData.phone}`,
        `📧 *Email:* ${formData.email || 'Not provided'}`,
        `📍 *Address:* ${formData.address}`,
        `📮 *Pincode:* ${formData.pincode}`,
        `📎 *Layout Plan:* ${fileUrl}`,
        `💬 *Message:* ${formData.message || 'No additional message'}`,
        `──────────────────────────────`,
        `_Sent via VedicUrja website_`,
      ];
      const messageText = messageLines.join('\n');

      const sent = await sendWhatsAppMessage(messageText);
      if (!sent) throw new Error('Message could not be delivered.');

      setUploadProgress(100);
      setSubmitted(true);
      setFormData({ fullName: '', phone: '', email: '', address: '', pincode: '', message: '' });
      setLayoutPlan(null);
    } catch (err: any) {
      setError(err.message || 'Failed to send request. Please try again.');
    } finally {
      setSubmitting(false);
      setUploadProgress(0);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-prakash-gold/30 text-center max-w-2xl mx-auto"
      >
        <div className="text-6xl mb-4">🙏</div>
        <h2 className="font-serif text-3xl text-nidra-indigo mb-2">Thank You!</h2>
        <p className="text-nidra-indigo/70 text-lg mb-6">
          Your consultation request has been sent successfully.<br />
          Acharya ji will respond within 12 hours.
        </p>
        <button onClick={() => setSubmitted(false)} className="luxury-button">
          Book Another Consultation
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-prakash-gold/30 max-w-2xl mx-auto"
    >
      <h3 className="font-serif text-2xl sm:text-3xl text-nidra-indigo mb-6 text-center">
        Complete Your Inquiry
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Full Name *</label>
          <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Phone Number *</label>
          <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="+91 XXXXX XXXXX" />
        </div>
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Full Address *</label>
          <textarea name="address" rows={2} required value={formData.address} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none resize-none" placeholder="Your complete address" />
        </div>
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Pincode *</label>
          <input type="text" name="pincode" required pattern="\d{6}" maxLength={6} value={formData.pincode} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none" placeholder="6-digit pincode" />
        </div>
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Computerized Layout Plan *</label>
          <input type="file" accept=".pdf,.jpg,.jpeg,.png" required onChange={handleFileChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-prakash-gold/20" />
          {layoutPlan && <p className="text-xs text-green-600 mt-1">✅ {layoutPlan.name} ({(layoutPlan.size / 1024).toFixed(1)} KB)</p>}
          <p className="text-xs text-nidra-indigo/50 mt-2">If you don't have a layout plan, please visit a nearby architect to get one made.</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-nidra-indigo mb-1">Additional Message</label>
          <textarea name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none resize-none" placeholder="Any specific concerns..." />
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {uploadProgress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-prakash-gold h-2 rounded-full transition-all" style={{ width: `${uploadProgress}%` }} />
          </div>
        )}
        <button type="submit" disabled={submitting} className="w-full luxury-button py-4 text-lg disabled:opacity-50 flex items-center justify-center gap-2">
          {submitting ? 'Sending...' : 'Submit Consultation Request'}
        </button>
      </form>
    </motion.div>
  );
}

// =============================================================================
// Main Bookings Page with Journey Sections
// =============================================================================
export default function BookingsPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <main className="relative bg-vastu-parchment">
          {/* 1. Hero Section with 3D Curved Text */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-nidra-indigo via-nidra-indigo/80 to-vastu-parchment">
            <Mandala3D />
            <FloatingParticles />
            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sacred-saffron uppercase tracking-[0.3em] text-sm mb-4 block"
              >
                Begin Your Transformation
              </motion.span>
              <AnimatedText
                text="Align Your Space,"
                className="font-serif text-5xl sm:text-6xl md:text-8xl text-white mb-2 leading-tight"
              />
              <GradientText
                text="Elevate Your Life"
                className="font-serif text-5xl sm:text-6xl md:text-8xl mb-6 block"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
              >
                Experience personalised Vastu guidance from Vastuvid KK Nagaich, wherever you are.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button onClick={scrollToForm} className="luxury-button text-lg px-10 py-5">
                  Book Your Session
                </button>
                <button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg"
                >
                  How It Works
                </button>
              </motion.div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto">
                <span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" />
              </span>
            </div>
          </section>

          {/* 2. Problem/Solution Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <AnimatedText text="Traveling for Vastu advice is impractical." className="font-serif text-3xl md:text-4xl text-nidra-indigo mb-6" />
              <p className="text-lg text-nidra-indigo/70">You deserve trusted guidance without leaving your home.</p>
            </div>
          </section>

          {/* 3. Solution Introduction */}
          <section className="py-20 bg-vastu-stone/30">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <AnimatedText text="Introducing VedicUrja Virtual Consultations" className="font-serif text-3xl md:text-4xl text-nidra-indigo mb-6" />
              <p className="text-lg text-nidra-indigo/70">Personalised analysis, screen sharing, and real‑time remedies – all online.</p>
            </div>
          </section>

          {/* 4. How It Works */}
          <section id="how-it-works" className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <AnimatedText text="How It Works" className="font-serif text-4xl text-center text-nidra-indigo mb-16" />
              <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                {['Submit inquiry', 'Upload layout plan', 'Acharya reviews', 'WhatsApp confirmation', 'Video consultation'].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center w-40"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-prakash-gold/20 flex items-center justify-center text-2xl font-bold text-nidra-indigo">
                      {i + 1}
                    </div>
                    <p className="font-medium text-nidra-indigo">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Meet Vastuvid */}
          <section className="py-20 bg-gradient-to-b from-white to-vastu-parchment">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-5xl">
              <div className="md:w-1/3 flex justify-center">
                <img src="/acharyajiphoto.png" alt="Vastuvid KK Nagaich" className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-prakash-gold" />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <AnimatedText text="Vastuvid KK Nagaich" className="font-serif text-3xl text-nidra-indigo mb-4" />
                <p className="text-sacred-saffron uppercase tracking-wider text-sm mb-4">4th Generation Vastu Guru</p>
                <p className="text-nidra-indigo/70">With over four decades of experience and 500+ clients globally, Acharya ji brings authentic Vedic wisdom to every consultation.</p>
              </div>
            </div>
          </section>

          {/* 6. Benefits */}
          <section className="py-20 bg-vastu-stone/20">
            <div className="container mx-auto px-4 max-w-4xl">
              <AnimatedText text="Why Virtual?" className="font-serif text-3xl text-center text-nidra-indigo mb-12" />
              <div className="grid grid-cols-2 gap-6">
                {['No travel required', 'Session recording', 'Screen share floor plans', 'Post‑consult summary'].map((b, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/50 p-4 rounded-xl">
                    <span className="text-prakash-gold text-xl">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Testimonials */}
          <section className="py-20 bg-white">
            <TestimonialsSlider />
          </section>

          {/* 8. The Form Section */}
          <section ref={formRef} className="py-24 bg-vastu-parchment">
            <div className="container mx-auto px-4">
              <AnimatedText text="Ready to Begin?" className="font-serif text-4xl text-center text-nidra-indigo mb-4" />
              <p className="text-center text-nidra-indigo/60 mb-8">Fill the form below and Acharya ji will contact you within 12 hours.</p>
              <BookingFormSection />
            </div>
          </section>

          {/* 9. Final CTA */}
          <section className="py-32 bg-nidra-indigo text-white text-center">
            <div className="container mx-auto px-4">
              <AnimatedText text="Still have questions?" className="font-serif text-4xl md:text-6xl mb-6 text-white" />
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">Contact us directly via WhatsApp or call.</p>
              <Link href="/contact" className="bg-prakash-gold hover:bg-sacred-saffron text-nidra-indigo font-bold px-10 py-5 rounded-full text-lg transition">
                Contact Acharya
              </Link>
            </div>
          </section>
        </main>
      </SmoothScroll>
    </>
  );
}
