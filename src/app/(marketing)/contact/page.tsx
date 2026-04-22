'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Mandala3D from '@/features/shared/components/Mandala3D';
import FloatingParticles from '@/features/shared/components/svg/FloatingParticles';
import { openWhatsApp } from '@/lib/whatsapp';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim()) { setError('Please enter your name.'); return; }
    if (!formData.phone.trim()) { setError('Please enter your phone number.'); return; }
    if (!formData.message.trim()) { setError('Please enter your message.'); return; }

    const message = `*📬 New Contact Message*\n──────────────────────────────\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email || 'Not provided'}\n💬 *Message:* ${formData.message}\n──────────────────────────────\n_Sent via VedicUrja contact form_`;

    openWhatsApp(message);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <main style={{ position: "relative" }} className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-vastu-parchment via-white to-vastu-stone overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"><Mandala3D /></div>
          <FloatingParticles />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-prakash-gold/30">
              <div className="text-center mb-8">
                <h1 className="font-serif text-3xl sm:text-4xl text-nidra-indigo">Contact Acharya</h1>
                <p className="text-nidra-indigo/60 text-sm sm:text-base mt-2">Send us a message via WhatsApp – we'll respond within 12 hours.</p>
              </div>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="text-6xl mb-4">🙏</div>
                  <h2 className="font-serif text-2xl text-nidra-indigo mb-2">Thank You!</h2>
                  <p className="text-nidra-indigo/70">WhatsApp should have opened. Please send the message.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 luxury-button">Send Another Message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Full Name *</label><input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl" placeholder="Your full name" /></div>
                  <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Phone Number *</label><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl" placeholder="+91 XXXXX XXXXX" /></div>
                  <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Email (Optional)</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl" placeholder="you@example.com" /></div>
                  <div><label className="block text-sm font-medium text-nidra-indigo mb-1">Message *</label><textarea name="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl resize-none" placeholder="Your message..." /></div>
                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                  <button type="submit" className="w-full luxury-button py-4 text-lg">Send via WhatsApp</button>
                </form>
              )}
            </div>
          </motion.div>
        </main>
      </SmoothScroll>
    </>
  );
}
