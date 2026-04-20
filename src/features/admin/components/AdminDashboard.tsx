'use client';
import { useState, lazy, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { supabase } from '@/lib/supabase/client';
import { HomeSection, FreeTool, Service, Course, BlogPost, Testimonial, Consultation, Payment, Profile } from '@/types/admin';
import { ErrorBoundary } from '@/features/shared/components/ErrorBoundary';

const ConsultationsManager = lazy(() => import('@/features/admin/components/ConsultationsManager').then(m => ({ default: m.ConsultationsManager })));

const tabs = ['Dashboard','Home','Free Tools','Services','Courses','Blogs','Testimonials','Virtual Consult','Payments','Users','AI Tools','Contact Msgs'] as const;
type Tab = typeof tabs[number];

export default function AdminPage() {
  const { profile } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>('Dashboard');
  if (profile?.role !== 'admin') return <div className="flex h-screen items-center justify-center"><p className="text-red-500">Access Denied</p></div>;
  return (
    <>
      <Header />
      <SmoothScroll>
        <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl text-nidra-indigo mb-8">Admin Dashboard</h1>
          <div className="flex flex-wrap gap-2 border-b border-prakash-gold/20 pb-4 mb-8">
            {tabs.map(t => (
              <button key={t} onClick={() => setActiveTab(t)} className={`px-5 py-2 rounded-full text-sm ${activeTab===t ? 'bg-sacred-saffron text-white' : 'bg-vastu-stone'}`}>{t}</button>
            ))}
          </div>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0}}>
                  {activeTab === 'Dashboard' && <DashboardTab />}
                  {activeTab === 'Home' && <HomeTab />}
                  {activeTab === 'Free Tools' && <FreeToolsTab />}
                  {activeTab === 'Services' && <ServicesTab />}
                  {activeTab === 'Courses' && <CoursesTab />}
                  {activeTab === 'Blogs' && <BlogsTab />}
                  {activeTab === 'Testimonials' && <TestimonialsTab />}
                  {activeTab === 'Virtual Consult' && <ConsultationsManager />}
                  {activeTab === 'Payments' && <PaymentsTab />}
                  {activeTab === 'Users' && <UsersTab />}
                  {activeTab === 'AI Tools' && <AIToolsTab />}
                  {activeTab === 'Contact Msgs' && <ContactMessagesTab />}
                </motion.div>
              </AnimatePresence>
            </Suspense>
          </ErrorBoundary>
        </main>
      </SmoothScroll>
    </>
  );
}

function DashboardTab() {
  const { items: users, refetch: refetchUsers } = useRealtimeContent<Profile>('profiles');
  const { items: payments, refetch: refetchPayments } = useRealtimeContent<Payment>('payments');
  const { items: consultations, refetch: refetchConsultations } = useRealtimeContent<Consultation>('consultations');
  const { items: posts, refetch: refetchPosts } = useRealtimeContent<BlogPost>('blog_posts');
  const totalUsers = users.length;
  const totalRevenue = payments.reduce((sum, p) => sum + (p.amount || 0), 0);
  const pendingConsultations = consultations.filter(c => c.status === 'pending_payment').length;
  const publishedPosts = posts.filter(p => p.is_published).length;
  return (
    <div>
      <div className="flex justify-end mb-4">
        <button onClick={() => { refetchUsers(); refetchPayments(); refetchConsultations(); refetchPosts(); }} className="text-sm text-prakash-gold hover:underline">Refresh Data</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Users" value={totalUsers} icon="👥" />
        <StatCard label="Total Revenue" value={`₹${totalRevenue}`} icon="💰" />
        <StatCard label="Pending Consultations" value={pendingConsultations} icon="📅" />
        <StatCard label="Published Posts" value={publishedPosts} icon="📝" />
      </div>
    </div>
  );
}
function StatCard({ label, value, icon }: { label: string; value: string | number; icon: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-prakash-gold/20">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-nidra-indigo">{value}</div>
      <div className="text-sm text-nidra-indigo/60">{label}</div>
    </div>
  );
}

function HomeTab() {
  const { items, loading, refetch } = useRealtimeContent<HomeSection>('home_sections', 'order_index');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<HomeSection>>({});
  const [saving, setSaving] = useState(false);
  const handleEdit = (section: HomeSection) => { setEditingId(section.id); setEditForm({ ...section }); };
  const handleSave = async () => {
    if (!editingId) return;
    setSaving(true);
    const { error } = await supabase.from('home_sections').update(editForm).eq('id', editingId);
    if (error) alert('Save failed: ' + error.message);
    else { setEditingId(null); refetch(); }
    setSaving(false);
  };
  const handleTogglePublish = async (id: string, current: boolean) => {
    await supabase.from('home_sections').update({ is_published: !current }).eq('id', id);
    refetch();
  };
  if (loading) return <LoadingSpinner />;
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-serif text-2xl">Home Sections</h2>
        <button onClick={refetch} className="text-sm text-prakash-gold hover:underline">Refresh</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b"><th className="py-2 text-left">Key</th><th className="py-2 text-left">Title</th><th className="py-2 text-left">Published</th><th className="py-2 text-left">Actions</th></tr></thead>
          <tbody>
            {items.map(section => (
              <tr key={section.id} className="border-b">
                <td className="py-2">{section.section_key}</td>
                <td className="py-2">{editingId === section.id ? <input type="text" value={editForm.title || ''} onChange={e => setEditForm({ ...editForm, title: e.target.value })} className="border rounded px-2 py-1" /> : section.title}</td>
                <td className="py-2"><button onClick={() => handleTogglePublish(section.id, section.is_published)} className={`px-2 py-1 rounded text-xs ${section.is_published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>{section.is_published ? 'Published' : 'Draft'}</button></td>
                <td className="py-2">{editingId === section.id ? <><button onClick={handleSave} disabled={saving} className="text-green-600 mr-2">{saving ? 'Saving...' : 'Save'}</button><button onClick={() => setEditingId(null)} className="text-gray-500">Cancel</button></> : <button onClick={() => handleEdit(section)} className="text-prakash-gold">Edit</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DataTable({ data, columns, tableName, refetch }: { data: any[]; columns: string[]; tableName: string; refetch: () => void }) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const handleEdit = (row: any) => { setEditingId(row.id); const fd: any = {}; columns.forEach(c => fd[c] = row[c] ?? ''); setEditForm(fd); };
  const handleSave = async () => {
    if (!editingId) return;
    setSaving(true);
    const { error } = await supabase.from(tableName).update(editForm).eq('id', editingId);
    if (error) alert(`Save failed: ${error.message}`);
    else { setEditingId(null); refetch(); }
    setSaving(false);
  };
  const handleDelete = async (id: string) => { if (!confirm('Delete?')) return; await supabase.from(tableName).delete().eq('id', id); refetch(); };
  const handleTogglePublish = async (id: string, cur: boolean) => { await supabase.from(tableName).update({ is_published: !cur }).eq('id', id); refetch(); };
  return (
    <div className="space-y-2">
      <div className="flex justify-end"><button onClick={refetch} className="text-sm text-prakash-gold hover:underline">Refresh</button></div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b">{columns.map(c => <th key={c} className="py-2 text-left capitalize">{c.replace(/_/g,' ')}</th>)}<th className="py-2 text-left">Published</th><th className="py-2 text-left">Actions</th></tr></thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                {columns.map(c => (<td key={c} className="py-2">{editingId===row.id ? <input type={c.includes('price')?'number':'text'} value={editForm[c]??''} onChange={e=>setEditForm({...editForm,[c]:c.includes('price')?parseFloat(e.target.value)||0:e.target.value})} className="border rounded px-2 py-1 w-full" /> : String(row[c]??'—')}</td>))}
                <td className="py-2"><button onClick={()=>handleTogglePublish(row.id,row.is_published)} className={`px-2 py-1 rounded text-xs ${row.is_published?'bg-green-100 text-green-700':'bg-gray-100 text-gray-700'}`}>{row.is_published?'Yes':'No'}</button></td>
                <td className="py-2">{editingId===row.id ? <><button onClick={handleSave} disabled={saving} className="text-green-600 mr-2">{saving?'Saving...':'Save'}</button><button onClick={()=>setEditingId(null)} className="text-gray-500">Cancel</button></> : <><button onClick={()=>handleEdit(row)} className="text-prakash-gold mr-3">Edit</button><button onClick={()=>handleDelete(row.id)} className="text-red-500">Del</button></>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function FreeToolsTab() { const { items, loading, refetch } = useRealtimeContent<FreeTool>('free_tools', 'order_index'); if(loading) return <LoadingSpinner />; return <DataTable data={items} columns={['tool_key','title','description','premium_price','is_published']} tableName="free_tools" refetch={refetch} />; }
function ServicesTab() { const { items, loading, refetch } = useRealtimeContent<Service>('services', 'order_index'); if(loading) return <LoadingSpinner />; return <DataTable data={items} columns={['slug','title','description','is_published']} tableName="services" refetch={refetch} />; }
function CoursesTab() { const { items, loading, refetch } = useRealtimeContent<Course>('courses', 'created_at', false); if(loading) return <LoadingSpinner />; return <DataTable data={items} columns={['slug','title','level','subject','price','is_published']} tableName="courses" refetch={refetch} />; }
function BlogsTab() { const { items, loading, refetch } = useRealtimeContent<BlogPost>('blog_posts', 'published_at', false); if(loading) return <LoadingSpinner />; return <DataTable data={items} columns={['slug','title','category','is_published']} tableName="blog_posts" refetch={refetch} />; }
function TestimonialsTab() { const { items, loading, refetch } = useRealtimeContent<Testimonial>('testimonials', 'order_index'); if(loading) return <LoadingSpinner />; return <DataTable data={items} columns={['client_name','location','rating','is_published']} tableName="testimonials" refetch={refetch} />; }
function PaymentsTab() { const { items, loading, refetch } = useRealtimeContent<Payment>('payments', 'created_at', false); if(loading) return <LoadingSpinner />; return (<div className="space-y-2"><div className="flex justify-end"><button onClick={refetch} className="text-sm text-prakash-gold hover:underline">Refresh</button></div><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b"><th className="py-2 text-left">User</th><th className="py-2 text-left">Amount</th><th className="py-2 text-left">Status</th><th className="py-2 text-left">Date</th></tr></thead><tbody>{items.map(p=><tr key={p.id} className="border-b"><td className="py-2">{p.user_id?.slice(0,8)}...</td><td className="py-2">₹{p.amount}</td><td className="py-2">{p.status}</td><td className="py-2">{new Date(p.created_at).toLocaleDateString()}</td></tr>)}</tbody></table></div></div>); }
function UsersTab() { const { items: users, loading, refetch } = useRealtimeContent<Profile>('profiles', 'created_at', false); const [updating, setUpdating] = useState<string|null>(null); const toggleRole = async (id: string, cur: string) => { setUpdating(id); await supabase.from('profiles').update({ role: cur==='admin'?'client':'admin' }).eq('id', id); setUpdating(null); refetch(); }; if(loading) return <LoadingSpinner />; return (<div className="space-y-2"><div className="flex justify-end"><button onClick={refetch} className="text-sm text-prakash-gold hover:underline">Refresh</button></div><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b"><th className="py-2 text-left">Name</th><th className="py-2 text-left">Role</th><th className="py-2 text-left">Coins</th><th className="py-2 text-left">Joined</th><th className="py-2 text-left">Actions</th></tr></thead><tbody>{users.map(u=><tr key={u.id} className="border-b"><td className="py-2">{u.full_name||'—'}</td><td className="py-2">{u.role}</td><td className="py-2">{u.coins}</td><td className="py-2">{new Date(u.created_at).toLocaleDateString()}</td><td className="py-2"><button onClick={()=>toggleRole(u.id,u.role)} disabled={updating===u.id} className="text-xs bg-prakash-gold/20 px-2 py-1 rounded">Toggle Admin</button></td></tr>)}</tbody></table></div></div>); }
function AIToolsTab() { const [stats, setStats] = useState<any[]>([]); const [loading, setLoading] = useState(true); const fetchStats = async () => { setLoading(true); const { data } = await supabase.rpc('get_tool_usage_stats'); setStats(data||[]); setLoading(false); }; useEffect(()=>{fetchStats();},[]); if(loading) return <LoadingSpinner />; return (<div className="space-y-6"><div className="flex justify-between items-center"><h2 className="font-serif text-2xl">AI Tools Usage</h2><button onClick={fetchStats} className="text-sm text-prakash-gold hover:underline">Refresh</button></div><div className="grid md:grid-cols-3 gap-6">{stats.map(s=><div key={s.tool_type} className="bg-white p-6 rounded-xl shadow-md border"><h3 className="font-serif text-xl capitalize">{s.tool_type.replace('_',' ')}</h3><div className="mt-4 space-y-2"><p><span className="font-medium">Total Uses:</span> {s.total_uses}</p><p><span className="font-medium">Unique Users:</span> {s.unique_users}</p><p><span className="font-medium">Premium Unlocks:</span> {s.premium_unlocks}</p></div></div>)}</div></div>); }
function ContactMessagesTab() { const { items, loading, refetch } = useRealtimeContent<any>('contact_messages', 'created_at', false); if(loading) return <LoadingSpinner />; return (<div className="space-y-2"><div className="flex justify-end"><button onClick={refetch} className="text-sm text-prakash-gold hover:underline">Refresh</button></div><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b"><th className="py-2 text-left">Date</th><th className="py-2 text-left">Name</th><th className="py-2 text-left">Email</th><th className="py-2 text-left">Message</th></tr></thead><tbody>{items.map(m=><tr key={m.id} className="border-b"><td className="py-2">{new Date(m.created_at).toLocaleString()}</td><td className="py-2">{m.name}</td><td className="py-2">{m.email}</td><td className="py-2 max-w-md truncate">{m.message}</td></tr>)}</tbody></table></div></div>); }
function LoadingSpinner() { return <div className="flex justify-center py-12"><div className="w-8 h-8 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" /></div>; }
