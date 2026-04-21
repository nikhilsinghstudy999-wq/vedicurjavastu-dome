'use client';
import { useState, useEffect } from 'react';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { supabase } from '@/lib/supabase/client';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';
import { Profile } from '@/types/admin';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const tabs = ['Users', 'Analytics'] as const;
type Tab = typeof tabs[number];

export default function AdminPage() {
  const { profile } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>('Users');
  if (profile?.role !== 'admin') return <div className="flex h-screen items-center justify-center"><p className="text-red-500">Access Denied</p></div>;
  return (
    <>
      <Header /><SmoothScroll>
        <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl text-nidra-indigo mb-8">Admin Dashboard</h1>
          <div className="flex gap-2 border-b border-prakash-gold/20 pb-4 mb-8">
            {tabs.map(t => <button key={t} onClick={() => setActiveTab(t)} className={`px-5 py-2 rounded-full text-sm ${activeTab===t ? 'bg-sacred-saffron text-white' : 'bg-vastu-stone'}`}>{t}</button>)}
          </div>
          {activeTab === 'Users' && <UsersTab />}
          {activeTab === 'Analytics' && <AnalyticsTab />}
        </main>
      </SmoothScroll>
    </>
  );
}

function UsersTab() {
  const { items: users, loading } = useRealtimeContent<Profile>('profiles', 'created_at', false);
  const [updating, setUpdating] = useState<string | null>(null);
  const toggleRole = async (id: string, currentRole: string) => { setUpdating(id); await supabase.from('profiles').update({ role: currentRole === 'admin' ? 'client' : 'admin' }).eq('id', id); setUpdating(null); };
  if (loading) return <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" /></div>;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead><tr className="border-b"><th className="py-2 text-left">Name</th><th className="py-2 text-left">Email</th><th className="py-2 text-left">Phone</th><th className="py-2 text-left">Role</th><th className="py-2 text-left">Joined</th><th className="py-2 text-left">Actions</th></tr></thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border-b">
              <td className="py-2">{u.full_name || '—'}</td><td className="py-2">{u.email || '—'}</td><td className="py-2">{u.phone || '—'}</td><td className="py-2">{u.role}</td><td className="py-2">{new Date(u.created_at).toLocaleDateString()}</td>
              <td className="py-2"><button onClick={() => toggleRole(u.id, u.role)} disabled={updating === u.id} className="text-xs bg-prakash-gold/20 px-2 py-1 rounded">Toggle Admin</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AnalyticsTab() {
  const [stats, setStats] = useState<any>(null); const [loading, setLoading] = useState(true);
  useEffect(() => { const fetchStats = async () => { const { data: users } = await supabase.from('profiles').select('created_at'); const { data: consultations } = await supabase.from('consultations').select('created_at'); const { data: messages } = await supabase.from('contact_messages').select('created_at'); setStats({ userGrowth: processTimeSeries(users||[]), consultationStats: processTimeSeries(consultations||[]), messagesStats: processTimeSeries(messages||[]) }); setLoading(false); }; fetchStats(); }, []);
  if (loading) return <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" /></div>;
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="font-serif text-xl mb-4">User Growth</h3><Bar data={{ labels: stats?.userGrowth?.labels || [], datasets: [{ label: 'New Users', data: stats?.userGrowth?.data || [], backgroundColor: '#E8B960' }] }} /></div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="font-serif text-xl mb-4">Consultations</h3><Line data={{ labels: stats?.consultationStats?.labels || [], datasets: [{ label: 'Consultations', data: stats?.consultationStats?.data || [], borderColor: '#C10000' }] }} /></div>
        <div className="bg-white p-6 rounded-xl shadow-md"><h3 className="font-serif text-xl mb-4">Contact Messages</h3><Line data={{ labels: stats?.messagesStats?.labels || [], datasets: [{ label: 'Messages', data: stats?.messagesStats?.data || [], borderColor: '#FF9933' }] }} /></div>
      </div>
    </div>
  );
}
function processTimeSeries(data: any[]) { const grouped: Record<string, number> = {}; data.forEach(item => { const d = new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); grouped[d] = (grouped[d]||0)+1; }); const sorted = Object.entries(grouped).sort((a,b) => new Date(a[0]).getTime() - new Date(b[0]).getTime()); return { labels: sorted.map(([l])=>l), data: sorted.map(([,c])=>c) }; }
