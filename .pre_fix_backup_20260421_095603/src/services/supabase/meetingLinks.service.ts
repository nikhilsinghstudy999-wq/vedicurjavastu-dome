import { supabase } from '@/lib/supabase/client';

export interface MeetingLink {
  id: string;
  consultation_id: string;
  token: string;
  expires_at: string | null;
  is_active: boolean;
  created_at: string;
  consultation?: {
    id: string;
    client_id: string;
    scheduled_at: string;
    status: string;
    meeting_url: string;
    payment_status: string;
  };
}

export const meetingLinksService = {
  async create(consultationId: string, expiresAt?: Date): Promise<MeetingLink> {
    const { data, error } = await supabase
      .from('meeting_links')
      .insert({
        consultation_id: consultationId,
        expires_at: expiresAt?.toISOString(),
      })
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async getByToken(token: string): Promise<MeetingLink | null> {
    const { data, error } = await supabase
      .from('meeting_links')
      .select('*, consultation:consultations(*)')
      .eq('token', token)
      .eq('is_active', true)
      .single();
    if (error) return null;
    return data;
  },

  async getByConsultation(consultationId: string): Promise<MeetingLink | null> {
    const { data } = await supabase
      .from('meeting_links')
      .select('*')
      .eq('consultation_id', consultationId)
      .maybeSingle();
    return data;
  },

  async deactivate(token: string): Promise<void> {
    await supabase.from('meeting_links').update({ is_active: false }).eq('token', token);
  },

  async deactivateForConsultation(consultationId: string): Promise<void> {
    await supabase.from('meeting_links').update({ is_active: false }).eq('consultation_id', consultationId);
  },
};
