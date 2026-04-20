import { supabase } from '@/lib/supabase/client';

export const emailService = {
  async sendBookingConfirmation(to: string, consultationDate: Date, meetingUrl: string) {
    // Supabase's built-in email (via auth hooks) - we can also use Edge Functions
    const { error } = await supabase.functions.invoke('send-email', {
      body: {
        to,
        subject: 'Your VedicUrja Consultation is Confirmed',
        template: 'booking-confirmation',
        data: { date: consultationDate.toLocaleString(), meetingUrl },
      },
    });
    if (error) console.error('Email failed:', error);
  },

  async sendReminder(to: string, consultationDate: Date, meetingUrl: string) {
    const { error } = await supabase.functions.invoke('send-email', {
      body: {
        to,
        subject: 'Reminder: Your VedicUrja Consultation Tomorrow',
        template: 'booking-reminder',
        data: { date: consultationDate.toLocaleString(), meetingUrl },
      },
    });
    if (error) console.error('Reminder failed:', error);
  },
};
