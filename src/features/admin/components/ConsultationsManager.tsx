'use client';
import { useState, useEffect, useCallback, useMemo, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { supabase } from '@/lib/supabase/client';
import { slotsService } from '@/services/supabase/slots.service';
import { subscribeToTable } from '@/lib/realtime/channelManager';
import { ErrorBoundary } from '@/features/shared/components/ErrorBoundary';
import { motion, AnimatePresence } from 'framer-motion';

const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false });
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

interface Slot { id: string; start_time: string; end_time: string; is_booked: boolean; consultation_id: string | null; }
interface Consultation { id: string; client_id: string; scheduled_at: string; status: string; meeting_url: string; payment_status: string; }
interface MeetingLink { consultation_id: string; token: string; }

const PAGE_SIZE = 10;

function SlotManager() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [feedback, setFeedback] = useState<{type:'success'|'error',msg:string}|null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchSlots = useCallback(async () => {
    try { const data = await slotsService.fetchAllSlots(); setSlots(data); } catch (err) { console.error(err); } finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchSlots(); const unsub = slotsService.subscribeToChanges(fetchSlots); return unsub; }, [fetchSlots]);

  const showFeedback = (type: 'success'|'error', msg: string) => { setFeedback({type, msg}); setTimeout(() => setFeedback(null), 3000); };

  const handleAddSlot = async (start: string, end: string) => {
    const tempId = `temp-${Date.now()}`;
    const tempSlot: Slot = { id: tempId, start_time: start, end_time: end, is_booked: false, consultation_id: null };
    setSlots(prev => [...prev, tempSlot]);
    setActionLoading(tempId);
    try {
      const newSlot = await slotsService.createSlot(new Date(start), new Date(end));
      setSlots(prev => prev.map(s => s.id === tempId ? newSlot : s));
      showFeedback('success', 'Slot created');
    } catch (err: any) {
      setSlots(prev => prev.filter(s => s.id !== tempId));
      showFeedback('error', err.message);
    } finally { setActionLoading(null); }
  };

  const handleDeleteSlot = async () => {
    if (!selectedSlot) return;
    const slotId = selectedSlot.id;
    setSlots(prev => prev.filter(s => s.id !== slotId));
    setSelectedSlot(null);
    setActionLoading(slotId);
    try { await slotsService.deleteSlot(slotId); showFeedback('success', 'Slot deleted'); } catch (err: any) { fetchSlots(); showFeedback('error', err.message); } finally { setActionLoading(null); }
  };

  const events = useMemo(() => slots.map(s => ({ id: s.id, title: s.is_booked ? '🔴 Booked' : '🟢 Available', start: s.start_time, end: s.end_time, backgroundColor: s.is_booked ? '#ef4444' : '#10b981' })), [slots]);

  if (loading) return <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="space-y-4">
      <AnimatePresence>{feedback && <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0}} className={`fixed top-20 right-6 z-50 px-4 py-2 rounded-lg text-white ${feedback.type==='success'?'bg-green-600':'bg-red-600'}`}>{feedback.msg}</motion.div>}</AnimatePresence>
      <div className="flex justify-between items-center">
        <h2 className="font-serif text-2xl">Manage Slots</h2>
        <button onClick={() => { const now = new Date(); now.setHours(9,0,0,0); const end = new Date(now); end.setHours(10,0,0,0); handleAddSlot(now.toISOString(), end.toISOString()); }} disabled={!!actionLoading} className="luxury-button !py-2 !px-4 text-sm">+ Quick Add (9-10 AM)</button>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-md">
        <Suspense fallback={<div>Loading calendar...</div>}>
          <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} initialView="timeGridWeek" headerToolbar={{ left: 'prev,next today', center: 'title', right: 'timeGridWeek,dayGridMonth' }} events={events} eventClick={(info) => setSelectedSlot(slots.find(s => s.id === info.event.id) || null)} selectable select={(info) => { handleAddSlot(info.startStr, info.endStr); info.view.calendar.unselect(); }} height="auto" slotMinTime="09:00:00" slotMaxTime="17:00:00" slotDuration="01:00:00" />
        </Suspense>
        <AnimatePresence>
          {selectedSlot && (
            <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="mt-4 p-4 bg-gray-50 rounded-lg flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm"><strong>{new Date(selectedSlot.start_time).toLocaleString()}</strong> – {new Date(selectedSlot.end_time).toLocaleTimeString()}<span className={`ml-3 px-2 py-1 rounded-full text-xs ${selectedSlot.is_booked ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{selectedSlot.is_booked ? 'Booked' : 'Available'}</span></span>
              <div className="flex gap-2">
                <button onClick={handleDeleteSlot} disabled={actionLoading === selectedSlot.id} className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm disabled:opacity-50">{actionLoading === selectedSlot.id ? 'Deleting...' : 'Delete'}</button>
                <button onClick={() => setSelectedSlot(null)} className="px-3 py-1 bg-gray-200 rounded-full text-sm">Cancel</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <p className="text-xs text-gray-500 mt-2">Click and drag on calendar to create slots. Click an existing slot to manage.</p>
      </div>
    </div>
  );
}

function ConsultationsTable() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [links, setLinks] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchConsultations = useCallback(async () => {
    const from = page * PAGE_SIZE; const to = from + PAGE_SIZE - 1;
    const { data, count } = await supabase.from('consultations').select('*', { count: 'exact' }).order('scheduled_at', { ascending: false }).range(from, to);
    setConsultations(data || []); if (count !== null) setTotal(count);
    // Fetch meeting links for these consultations
    if (data?.length) {
      const ids = data.map(c => c.id);
      const { data: linkData } = await supabase.from('meeting_links').select('consultation_id,token').in('consultation_id', ids);
      if (linkData) { const map: Record<string, string> = {}; linkData.forEach(l => { map[l.consultation_id] = l.token; }); setLinks(map); }
    }
    setLoading(false);
  }, [page]);

  useEffect(() => { fetchConsultations(); const unsub = subscribeToTable('consultations', fetchConsultations); return unsub; }, [fetchConsultations]);

  const updateStatus = async (id: string, status: string) => { setConsultations(prev => prev.map(c => c.id === id ? { ...c, status } : c)); await supabase.from('consultations').update({ status }).eq('id', id); };
  const copyMeetingLink = (link: string) => { navigator.clipboard?.writeText(`${window.location.origin}${link}`); alert('Meeting link copied!'); };

  if (loading) return <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div>
      <h2 className="font-serif text-2xl mb-4">Consultations</h2>
      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="w-full text-sm">
          <thead><tr className="border-b"><th className="py-3 px-4">Client</th><th>Scheduled</th><th>Status</th><th>Payment</th><th>Actions</th></tr></thead>
          <tbody>
            {consultations.map(c => {
              const token = links[c.id];
              const meetingLink = token ? `/meeting?token=${token}` : (c.meeting_url || `/meeting?id=${c.id}`);
              return (
                <tr key={c.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{c.client_id?.slice(0,8)}...</td>
                  <td>{new Date(c.scheduled_at).toLocaleString()}</td>
                  <td><select value={c.status} onChange={e => updateStatus(c.id, e.target.value)} className="border rounded px-2 py-1"><option value="scheduled">Scheduled</option><option value="in_progress">In Progress</option><option value="completed">Completed</option><option value="cancelled">Cancelled</option></select></td>
                  <td className="capitalize">{c.payment_status}</td>
                  <td className="flex items-center gap-2"><a href={meetingLink} target="_blank" className="text-prakash-gold hover:underline">Join</a><button onClick={() => copyMeetingLink(meetingLink)} className="text-gray-500 text-xs border px-2 py-1 rounded hover:bg-gray-100">Copy</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="p-4 flex justify-between">
          <button disabled={page===0} onClick={()=>setPage(p=>p-1)} className="px-3 py-1 border rounded disabled:opacity-50">Previous</button>
          <span>Page {page+1} of {Math.ceil(total/PAGE_SIZE)}</span>
          <button disabled={(page+1)*PAGE_SIZE >= total} onClick={()=>setPage(p=>p+1)} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
}

export function ConsultationsManager() { return (<ErrorBoundary><div className="space-y-8"><SlotManager /><ConsultationsTable /></div></ErrorBoundary>); }
