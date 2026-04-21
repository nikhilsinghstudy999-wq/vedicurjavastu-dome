'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { meetingLinksService } from '@/services/supabase/meetingLinks.service';
import { createMiroTalkMeeting } from '@/lib/mirotalk/client';
import { supabase } from '@/lib/supabase/client';

function MeetingContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const fallbackId = searchParams.get('id');
  const { user, profile } = useAuth();
  const [state, setState] = useState<'loading'|'error'|'redirecting'>('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token && !fallbackId) { setError('Missing meeting token'); setState('error'); return; }
    (async () => {
      try {
        let consultation: any = null;
        if (token) {
          const link = await meetingLinksService.getByToken(token);
          if (!link) throw new Error('Invalid or expired meeting link');
          consultation = link.consultation;
        } else if (fallbackId) {
          const { data } = await supabase.from('consultations').select('*').eq('id', fallbackId).single();
          consultation = data;
          if (!consultation) throw new Error('Consultation not found');
        }
        if (!consultation) throw new Error('Consultation not found');

        const { data: { session } } = await supabase.auth.getSession();
        const isAuthorized = consultation.client_id === session?.user?.id || profile?.role === 'admin';
        if (!isAuthorized) throw new Error('Unauthorized');

        await supabase.from('consultations').update({ status: 'in_progress' }).eq('id', consultation.id);

        // REUSE EXISTING meeting_url IF PRESENT
        let joinUrl = consultation.meeting_url;
        if (!joinUrl || joinUrl.startsWith('/meeting')) {
          // No valid external URL yet – create the MiroTalk room
          const name = profile?.full_name || user?.email || 'Guest';
          // Use consultation.id as fixed room ID
          const externalUrl = await createMiroTalkMeeting({ room: consultation.id, name, audio: true, video: true });
          // Store it for future joins
          await supabase.from('consultations').update({ meeting_url: externalUrl }).eq('id', consultation.id);
          joinUrl = externalUrl;
        }

        setState('redirecting');
        window.location.href = joinUrl;
      } catch (err: any) {
        setError(err.message);
        setState('error');
      }
    })();
  }, [token, fallbackId, profile, user]);

  if (state === 'loading') return <div className="flex h-screen items-center justify-center"><div className="w-12 h-12 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" /></div>;
  if (state === 'error') return <div className="flex h-screen items-center justify-center text-red-600">{error}</div>;
  return <div className="flex h-screen items-center justify-center">Redirecting to meeting...</div>;
}

export default function Page() { return <Suspense><MeetingContent /></Suspense>; }
