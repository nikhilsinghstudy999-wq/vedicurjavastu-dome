'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';

export default function BookingsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    pincode: '',
    message: '',
  });
  const [layoutPlan, setLayoutPlan] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

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
    // Simulate upload – replace with actual Supabase storage if needed
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('https://example.com/layout-plan.jpg');
      }, 1000);
    });
  };

  const sendWhatsAppMessage = async (messageText: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageText }),
      });
      if (!response.ok) throw new Error('Failed to send');
      const data = await response.json();
      return data.status === 'success' || data.success === true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName.trim()) return setError('Please enter your full name.');
    if (!formData.phone.trim()) return setError('Please enter your phone number.');
    if (!formData.address.trim()) return setError('Please enter your address.');
    if (!formData.pincode.trim() || !/^\d{6}$/.test(formData.pincode))
      return setError('Please enter a valid 6-digit pincode.');
    if (!layoutPlan) return setError('Please upload your layout plan.');

    setSubmitting(true);
    setUploadProgress(30);

    try {
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
      if (!sent) throw new Error('Message delivery failed.');

      setUploadProgress(100);
      setSubmitted(true);
      setFormData({ fullName: '', phone: '', email: '', address: '', pincode: '', message: '' });
      setLayoutPlan(null);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
      setUploadProgress(0);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <>
        <Header />
        <SmoothScroll>
          <main className="min-h-screen bg-gradient-to-b from-vastu-parchment to-white flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-center border border-prakash-gold/30"
            >
              <div className="text-6xl mb-4 text-prakash-gold">✓</div>
              <h2 className="font-serif text-3xl text-nidra-indigo mb-2">Request Received</h2>
              <p className="text-nidra-indigo/70 mb-6">
                Vastuvid KK Nagaich will contact you within 12 hours on WhatsApp.
              </p>
              <button onClick={() => setSubmitted(false)} className="luxury-button w-full">
                Book Another Consultation
              </button>
            </motion.div>
          </main>
        </SmoothScroll>
      </>
    );
  }

  return (
    <>
      <Header />
      <SmoothScroll>
        <main className="min-h-screen bg-gradient-to-b from-vastu-parchment via-white to-vastu-parchment">
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-nidra-indigo/5 via-transparent to-prakash-gold/5" />
            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sacred-saffron uppercase tracking-[0.3em] text-sm font-semibold"
              >
                Begin Your Transformation
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-4xl sm:text-5xl md:text-7xl text-nidra-indigo mt-4 mb-6 leading-tight"
              >
                Align Your Space,
                <br />
                <span className="text-prakash-gold">Elevate Your Life</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg md:text-xl text-nidra-indigo/70 max-w-2xl mx-auto mb-8"
              >
                Book a one‑on‑one virtual consultation with Vastuvid KK Nagaich – India's most trusted Vastu expert.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={scrollToForm}
                className="luxury-button text-lg px-10 py-4"
              >
                Start Your Journey
              </motion.button>
            </div>
          </section>

          {/* Trust Badges */}
          <section className="py-12 border-y border-prakash-gold/20 bg-white/40">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-center">
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-prakash-gold">20+</div>
                  <div className="text-sm text-nidra-indigo/60">Years Experience</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-prakash-gold">2 Lakh+</div>
                  <div className="text-sm text-nidra-indigo/60">Clients Served</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-prakash-gold">50+</div>
                  <div className="text-sm text-nidra-indigo/60">Countries</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-prakash-gold">4.9 ★</div>
                  <div className="text-sm text-nidra-indigo/60">Client Rating</div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-3xl md:text-4xl text-center text-nidra-indigo mb-12">Simple 3‑Step Process</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { step: '01', title: 'Submit Details', desc: 'Fill the form and upload your layout plan.' },
                  { step: '02', title: 'Acharya Reviews', desc: 'Vastuvid ji analyses your space and prepares remedies.' },
                  { step: '03', title: 'Consultation', desc: 'Connect via WhatsApp video call for personalised guidance.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-vastu-stone/20 border border-prakash-gold/20"
                  >
                    <div className="text-5xl font-bold text-prakash-gold mb-4">{item.step}</div>
                    <h3 className="font-serif text-xl text-nidra-indigo mb-2">{item.title}</h3>
                    <p className="text-nidra-indigo/60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section ref={formRef} className="py-20 bg-gradient-to-b from-white to-vastu-parchment">
            <div className="container mx-auto px-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-prakash-gold/30"
              >
                <h2 className="font-serif text-3xl text-center text-nidra-indigo mb-2">Request Your Consultation</h2>
                <p className="text-center text-nidra-indigo/60 mb-8">Fill the details below – Acharya ji will respond within 12 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-nidra-indigo mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-white/60 border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-nidra-indigo mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-white/60 border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none transition"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-nidra-indigo mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-white/60 border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none transition"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-nidra-indigo mb-1">Pincode *</label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        pattern="\d{6}"
                        maxLength={6}
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-white/60 border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none transition"
                        placeholder="6-digit pincode"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-nidra-indigo mb-1">Full Address *</label>
                    <textarea
                      name="address"
                      rows={2}
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-white/60 border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none resize-none"
                      placeholder="Your complete address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-nidra-indigo mb-1">Computerized Layout Plan *</label>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      onChange={handleFileChange}
                      className="w-full px-5 py-3 bg-white/60 border-2 border-prakash-gold/30 rounded-xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-prakash-gold/20 file:text-nidra-indigo hover:file:bg-prakash-gold/30 transition"
                    />
                    {layoutPlan && (
                      <p className="text-xs text-green-600 mt-1">Selected: {layoutPlan.name} ({(layoutPlan.size / 1024).toFixed(1)} KB)</p>
                    )}
                    <p className="text-xs text-nidra-indigo/50 mt-2">PDF, JPG or PNG (max 10MB). If you don't have one, consult an architect to get a layout plan.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-nidra-indigo mb-1">Additional Message</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-white/60 border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none resize-none"
                      placeholder="Any specific concerns or questions..."
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                  {uploadProgress > 0 && (
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-prakash-gold h-2 rounded-full transition-all duration-300" style={{ width: `${uploadProgress}%` }} />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full luxury-button py-4 text-lg disabled:opacity-50 transition-all"
                  >
                    {submitting ? 'Submitting...' : 'Submit Consultation Request'}
                  </button>

                  <p className="text-xs text-center text-nidra-indigo/50">
                    Your details are secure. We never share your information.
                  </p>
                </form>
              </motion.div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-gradient-to-r from-nidra-indigo to-nidra-indigo/90 text-white text-center">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Still Have Questions?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-6">
                Contact us directly on WhatsApp or call our support team.
              </p>
              <Link href="/contact" className="bg-prakash-gold hover:bg-sacred-saffron text-nidra-indigo font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition">
                Contact Us Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </section>
        </main>
      </SmoothScroll>
    </>
  );
}