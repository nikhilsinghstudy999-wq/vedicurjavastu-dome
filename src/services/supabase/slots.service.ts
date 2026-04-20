import { supabase } from '@/lib/supabase/client';
import { subscribeToTable } from '@/lib/realtime/channelManager';

export interface AvailabilitySlot {
  id: string;
  start_time: string;
  end_time: string;
  is_booked: boolean;
  consultation_id: string | null;
}

export const slotsService = {
  async fetchAllSlots(): Promise<AvailabilitySlot[]> {
    const { data, error } = await supabase
      .from('consultation_availability')
      .select('*')
      .order('start_time', { ascending: true });
    if (error) throw error;
    return data as AvailabilitySlot[];
  },

  async fetchAvailableSlots(): Promise<AvailabilitySlot[]> {
    const { data, error } = await supabase
      .from('consultation_availability')
      .select('*')
      .eq('is_booked', false)
      .order('start_time', { ascending: true });
    if (error) throw error;
    return data as AvailabilitySlot[];
  },

  async createSlot(startTime: Date, endTime: Date): Promise<AvailabilitySlot> {
    const { data, error } = await supabase
      .from('consultation_availability')
      .insert({
        start_time: startTime.toISOString(),
        end_time: endTime.toISOString(),
        is_booked: false,
      })
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async deleteSlot(id: string): Promise<void> {
    const { error } = await supabase
      .from('consultation_availability')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },

  async bookSlot(slotId: string, consultationId: string): Promise<void> {
    const { error } = await supabase
      .from('consultation_availability')
      .update({ is_booked: true, consultation_id: consultationId })
      .eq('id', slotId);
    if (error) throw error;
  },

  async unbookSlot(slotId: string): Promise<void> {
    const { error } = await supabase
      .from('consultation_availability')
      .update({ is_booked: false, consultation_id: null })
      .eq('id', slotId);
    if (error) throw error;
  },

  subscribeToChanges(callback: () => void) {
    return subscribeToTable('consultation_availability', callback);
  },
};
