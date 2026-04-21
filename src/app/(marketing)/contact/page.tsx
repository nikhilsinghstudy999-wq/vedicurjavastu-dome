'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Mandala3D from '@/features/shared/components/Mandala3D';
import FloatingParticles from '@/features/shared/components/svg/FloatingParticles';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Please enter your phone number.');
      return;
    }
    if (!formData.message.trim()) {
      setError('Please enter your message.');
      return;
    }

    setSubmitting(true);
    try {
      const messageLines = [
        `*📬 New Contact Form Message*`,
        `──────────────────────────────`,
        `👤 *Name:* ${formData.name}`,
        `📞 *Phone:* ${formData.phone}`,
        `📧 *Email:* ${formData.email || 'Not provided'}`,
        `💬 *Message:* ${formData.message}`,
        `──────────────────────────────`,
        `_Sent via VedicUrja contact form_`,
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

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
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
        <main className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-vastu-parchment via-white to-vastu-stone overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <Mandala3D />
          </div>
          <FloatingParticles />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-prakash-gold/30">
              <div className="text-center mb-8">
                <h1 className="font-serif text-3xl sm:text-4xl text-nidra-indigo">
                  Contact Acharya
                </h1>
                <p className="text-nidra-indigo/60 text-sm sm:text-base mt-2">
                  Send us a message and we'll respond within 12 hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">🙏</div>
                  <h2 className="font-serif text-2xl text-nidra-indigo mb-2">Thank You!</h2>
                  <p className="text-nidra-indigo/70">
                    Your message has been sent successfully.<br />
                    We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 luxury-button"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-nidra-indigo mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none text-nidra-indigo placeholder:text-nidra-indigo/40"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-nidra-indigo mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none text-nidra-indigo placeholder:text-nidra-indigo/40"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-nidra-indigo mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none text-nidra-indigo placeholder:text-nidra-indigo/40"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-nidra-indigo mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none text-nidra-indigo placeholder:text-nidra-indigo/40 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-xl">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full luxury-button py-4 text-lg disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </main>
      </SmoothScroll>
    </>
  );
                  }    return data.status === 'success' || data.success === true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Please enter your phone number.');
      return;
    }
    if (!formData.message.trim()) {
      setError('Please enter your message.');
      return;
    }

    setSubmitting(true);
    try {
      const messageLines = [
        `*📬 New Contact Form Message*`,
        `──────────────────────────────`,
        `👤 *Name:* ${formData.name}`,
        `📞 *Phone:* ${formData.phone}`,
        `📧 *Email:* ${formData.email || 'Not provided'}`,
        `💬 *Message:* ${formData.message}`,
        `──────────────────────────────`,
        `_Sent via VedicUrja contact form_`,
      ];
      const messageText = messageLines.join('\n');

      const sent = await sendWhatsAppMessage(messageText);
      if (!sent) throw new Error('Message could not be delivered.');

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
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
        <main className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-vastu-parchment via-white to-vastu-stone overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <Mandala3D />
          </div>
          <FloatingParticles />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-prakash-gold/30">
              <div className="text-center mb-8">
                <h1 className="font-serif text-3xl sm:text-4xl text-nidra-indigo">
                  Contact Acharya
                </h1>
                <p className="text-nidra-indigo/60 text-sm sm:text-base mt-2">
                  Send us a message and we'll respond within 12 hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">🙏</div>
                  <h2 className="font-serif text-2xl text-nidra-indigo mb-2">Thank You!</h2>
                  <p className="text-nidra-indigo/70">
                    Your message has been sent successfully.<br />
                    We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 luxury-button"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-nidra-indigo mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none text-nidra-indigo placeholder:text-nidra-indigo/40"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-nidra-indigo mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none text-nidra-indigo placeholder:text-nidra-indigo/40"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-nidra-indigo mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none text-nidra-indigo placeholder:text-nidra-indigo/40"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-nidra-indigo mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none text-nidra-indigo placeholder:text-nidra-indigo/40 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full luxury-button py-4 text-lg disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </main>
      </SmoothScroll>
    </>
  );
}
