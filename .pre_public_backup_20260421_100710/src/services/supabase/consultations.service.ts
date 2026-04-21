import { supabase } from '@/lib/supabase/client';
import type { Consultation } from '@/types/admin';

export const consultationsService = {
  async create(data: Partial<Consultation>) {
    const { data: consultation, error } = await supabase
      .from('consultations')
      .insert(data)
      .select()
      .single();
    if (error) throw error;
    return consultation;
  },

  async update(id: string, data: Partial<Consultation>) {
    const { error } = await supabase
      .from('consultations')
      .update(data)
      .eq('id', id);
    if (error) throw error;
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('consultations')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async getUpcoming(userId: string) {
    const { data, error } = await supabase
      .from('consultations')
      .select('*')
      .eq('client_id', userId)
      .in('status', ['scheduled', 'in_progress'])
      .order('scheduled_at', { ascending: true });
    if (error) throw error;
    return data;
  },

  subscribeToChanges(callback: () => void) {
    return supabase
      .channel('consultations-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'consultations' }, callback)
      .subscribe();
  },
};
