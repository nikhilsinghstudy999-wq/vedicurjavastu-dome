'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Mandala3D from '@/features/shared/components/Mandala3D';
import FloatingParticles from '@/features/shared/components/svg/FloatingParticles';
import { supabase } from '@/lib/supabase/client';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  });
  const [layoutPlan, setLayoutPlan] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLayoutPlan(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!layoutPlan) {
      setError('Please upload a computerized layout plan (required).');
      return;
    }

    setSubmitting(true);
    setError('');
    setUploadProgress(0);

    try {
      // 1. Upload layout plan to Supabase Storage
      const fileExt = layoutPlan.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `layout-plans/${fileName}`;

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('consultation-files')
        .upload(filePath, layoutPlan, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) throw new Error(`File upload failed: ${uploadError.message}`);

      // 2. Get public URL for the uploaded file
      const { data: urlData } = supabase.storage
        .from('consultation-files')
        .getPublicUrl(filePath);

      const layoutPlanUrl = urlData.publicUrl;

      // 3. Insert contact message with all fields
      const { error: insertError } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          address: formData.address,
          message: formData.message || null,
          layout_plan_url: layoutPlanUrl,
        });

      if (insertError) throw new Error(`Failed to save message: ${insertError.message}`);

      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', address: '', message: '' });
      setLayoutPlan(null);
      setUploadProgress(100);
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
                <h1 className="font-serif text-3xl sm:text-4xl text-nidra-indigo">Consult Acharya</h1>
                <p className="text-nidra-indigo/60 text-sm sm:text-base mt-2">
                  Share your details and Vastuvid KK Nagaich will respond personally.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">🙏</div>
                  <h2 className="font-serif text-2xl text-nidra-indigo mb-2">Thank You</h2>
                  <p className="text-nidra-indigo/70">
                    Your consultation request has been received.<br />
                    Acharya ji will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-nidra-indigo mb-1">
                      Full Name *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none transition-all text-nidra-indigo placeholder:text-nidra-indigo/40"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-nidra-indigo mb-1">
                      Phone Number *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none transition-all text-nidra-indigo placeholder:text-nidra-indigo/40"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  {/* Email (Optional) */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-nidra-indigo mb-1">
                      Email Address (Optional)
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none transition-all text-nidra-indigo placeholder:text-nidra-indigo/40"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Full Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-nidra-indigo mb-1">
                      Full Address *
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="address"
                      name="address"
                      rows={2}
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none transition-all text-nidra-indigo placeholder:text-nidra-indigo/40 resize-none"
                      placeholder="Your complete address"
                    />
                  </div>

                  {/* Layout Plan Upload (Required) */}
                  <div>
                    <label htmlFor="layoutPlan" className="block text-sm font-medium text-nidra-indigo mb-1">
                      Computerized Layout Plan * (PDF, JPG, PNG)
                    </label>
                    <input
                      type="file"
                      id="layoutPlan"
                      name="layoutPlan"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required
                      onChange={handleFileChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none transition-all text-nidra-indigo file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-prakash-gold/20 file:text-nidra-indigo hover:file:bg-prakash-gold/30"
                    />
                    {layoutPlan && (
                      <p className="text-xs text-green-600 mt-1">Selected: {layoutPlan.name}</p>
                    )}
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-nidra-indigo mb-1">
                      Additional Message (Optional)
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-prakash-gold/30 rounded-xl focus:border-prakash-gold outline-none transition-all text-nidra-indigo placeholder:text-nidra-indigo/40 resize-none"
                      placeholder="Any specific concerns or questions..."
                    />
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-sm text-center"
                    >
                      {error}
                    </motion.p>
                  )}

                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-prakash-gold h-2 rounded-full transition-all"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full luxury-button py-4 text-lg disabled:opacity-50"
                  >
                    {submitting ? 'Sending...' : 'Submit Consultation Request'}
                  </motion.button>

                  <p className="text-xs text-center text-nidra-indigo/50 mt-4">
                    * Required fields. Your layout plan helps Acharya ji provide accurate Vastu guidance.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </main>
      </SmoothScroll>
    </>
  );
}
