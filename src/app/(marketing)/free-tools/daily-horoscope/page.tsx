'use client';
import { Suspense, useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import { translatePage } from '@/lib/translationManager';

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function formatDateDeterministic(date: Date): string {
  const day = DAY_NAMES[date.getDay()];
  const dateNum = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  return `${day}, ${dateNum} ${month} ${year}`;
}

const GITHUB_BASE = 'https://nikhilsinghstudy999-wq.github.io/daily-horoscope-data/data/rashi';
const REFRESH_INTERVAL = 5 * 60 * 1000;

const RASHIS = [
  { name: 'Aries', sanskrit: 'Mesha', symbol: '♈', date: 'Mar 21 - Apr 19', color: '#E63946' },
  { name: 'Taurus', sanskrit: 'Vrishabha', symbol: '♉', date: 'Apr 20 - May 20', color: '#D4A373' },
  { name: 'Gemini', sanskrit: 'Mithuna', symbol: '♊', date: 'May 21 - Jun 20', color: '#F4A261' },
  { name: 'Cancer', sanskrit: 'Karka', symbol: '♋', date: 'Jun 21 - Jul 22', color: '#E9C46A' },
  { name: 'Leo', sanskrit: 'Simha', symbol: '♌', date: 'Jul 23 - Aug 22', color: '#F4A261' },
  { name: 'Virgo', sanskrit: 'Kanya', symbol: '♍', date: 'Aug 23 - Sep 22', color: '#A7C957' },
  { name: 'Libra', sanskrit: 'Tula', symbol: '♎', date: 'Sep 23 - Oct 22', color: '#6A994E' },
  { name: 'Scorpio', sanskrit: 'Vrishchika', symbol: '♏', date: 'Oct 23 - Nov 21', color: '#BC4742' },
  { name: 'Sagittarius', sanskrit: 'Dhanu', symbol: '♐', date: 'Nov 22 - Dec 21', color: '#D4A373' },
  { name: 'Capricorn', sanskrit: 'Makara', symbol: '♑', date: 'Dec 22 - Jan 19', color: '#7F5539' },
  { name: 'Aquarius', sanskrit: 'Kumbha', symbol: '♒', date: 'Jan 20 - Feb 18', color: '#457B9D' },
  { name: 'Pisces', sanskrit: 'Meena', symbol: '♓', date: 'Feb 19 - Mar 20', color: '#9C89B8' },
];

interface HoroscopeData {
  general: string; luck: string; scope: string; study: string;
  love: string; travel: string; lucky_number: number; lucky_color: string;
}

/* ---------- Client‑only starfield (no SSR random) ---------- */
function Starfield() {
  const [stars, setStars] = useState<Array<{width: string; height: string; top: string; left: string; animation: string}>>([]);
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 60; i++) {
      arr.push({
        width: Math.random() * 3 + 1 + 'px',
        height: Math.random() * 3 + 1 + 'px',
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
      });
    }
    setStars(arr);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none opacity-20">
      {stars.map((style, i) => <div key={i} className="absolute rounded-full bg-white" style={style} />)}
    </div>
  );
}

/* ---------- Calendar – renders only after mount ---------- */
function PremiumCalendar() {
  const [dateStr, setDateStr] = useState('');
  useEffect(() => { setDateStr(formatDateDeterministic(new Date())); }, []);
  if (!dateStr) {
    return (
      <div className="relative inline-block">
        <div className="bg-gradient-to-br from-[#2e1040] via-[#1d0033] to-[#0f0020] rounded-3xl p-6 border border-purple-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.2)]">
          <div className="text-center text-purple-300 text-lg">--</div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative inline-block">
      <div className="bg-gradient-to-br from-[#2e1040] via-[#1d0033] to-[#0f0020] rounded-3xl p-6 border border-purple-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.2)] transform rotateX(2deg) rotateY(-1deg) translateZ(10px) hover:rotateX(0) hover:rotateY(0) transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d', perspective: 800 }}>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-purple-800/20 via-transparent to-white/10 pointer-events-none" />
        <div className="relative z-10 text-center">
          <div className="text-purple-300 text-sm uppercase tracking-[0.2em] mb-2">Today's Date</div>
          <div className="text-2xl sm:text-3xl font-serif text-white font-bold drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">{dateStr}</div>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-lg rounded-full" />
      </div>
    </div>
  );
}

/* ---------- Clock – renders only after mount ---------- */
function PremiumClock() {
  const [shown, setShown] = useState(false);
  const [time, setTime] = useState(new Date());
  const [microsec, setMicrosec] = useState('000000');
  useEffect(() => {
    setShown(true);
    const id = setInterval(() => {
      setTime(new Date());
      setMicrosec(String(Math.floor((performance.now() % 1000) * 1000)).padStart(6, '0').slice(0, 6));
    }, 10);
    return () => clearInterval(id);
  }, []);
  if (!shown) {
    return (
      <div className="inline-block">
        <div className="bg-gradient-to-br from-[#2e1040] via-[#1d0033] to-[#0f0020] rounded-3xl p-6 border border-purple-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.2)]">
          <div className="text-center text-purple-300 text-4xl font-mono">--:--:--</div>
        </div>
      </div>
    );
  }
  const h = String(time.getHours()).padStart(2, '0');
  const m = String(time.getMinutes()).padStart(2, '0');
  const s = String(time.getSeconds()).padStart(2, '0');
  const ms = String(time.getMilliseconds()).padStart(3, '0');
  return (
    <div className="inline-block">
      <div className="bg-gradient-to-br from-[#2e1040] via-[#1d0033] to-[#0f0020] rounded-3xl p-6 border border-purple-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.2)] transform rotateX(-1deg) rotateY(1deg) translateZ(10px) hover:rotateX(0) hover:rotateY(0) transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d', perspective: 800 }}>
        <div className="relative z-10 text-center">
          <div className="flex justify-center items-baseline gap-1 sm:gap-2 mb-4">
            <TimeUnit value={h} label="Hour" /><span className="text-purple-400 text-3xl font-light">:</span>
            <TimeUnit value={m} label="Min" /><span className="text-purple-400 text-3xl font-light">:</span>
            <TimeUnit value={s} label="Sec" />
          </div>
          <div className="flex justify-center gap-3 text-sm">
            <div className="text-purple-200/80"><span className="font-mono text-lg text-purple-100">{ms}</span><span className="block text-xs text-purple-400/60 tracking-wider">Millisecond</span></div>
            <div className="text-purple-200/80"><span className="font-mono text-lg text-purple-100">{microsec}</span><span className="block text-xs text-purple-400/60 tracking-wider">Microsecond</span></div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-lg rounded-full" />
      </div>
    </div>
  );
}
function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-purple-900/40 rounded-xl px-3 py-2 border border-purple-500/30 shadow-inner">
        <span className="font-mono text-4xl sm:text-5xl text-white font-bold drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">{value}</span>
      </div>
      <span className="text-xs text-purple-300/60 mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );
}

/* ---------- Grid and detail views ---------- */
function RashiGrid() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-gold-400 to-purple-300 font-bold mb-4">Your Daily Celestial Guide</h1>
        <p className="text-purple-200/70 text-lg max-w-2xl mx-auto">Discover what the stars have aligned for you today. Updated every morning with real planetary transits.</p>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-6 mb-12"><PremiumCalendar /><PremiumClock /></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {RASHIS.map((rashi, i) => (
          <Link key={rashi.name} href={`/free-tools/daily-horoscope?rashi=${rashi.name.toLowerCase()}`}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative bg-gradient-to-br from-[#2a1040] to-[#1a0033] rounded-2xl p-4 sm:p-6 cursor-pointer border border-purple-500/30 shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.5)] transition-all duration-500"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />
              <div className="relative z-10 text-center">
                <div className="text-4xl sm:text-5xl mb-3" style={{ color: rashi.color }}>{rashi.symbol}</div>
                <h3 className="text-lg sm:text-xl font-serif text-white font-bold">{rashi.name}</h3>
                <p className="text-xs text-purple-300/60 mt-1">{rashi.sanskrit}</p>
                <p className="text-xs text-purple-200/40 mt-1">{rashi.date}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function RashiDetail() {
  const searchParams = useSearchParams();
  const rashiParam = searchParams.get('rashi');
  const rashiKey = (rashiParam || '').toLowerCase();
  const info = RASHIS.find(r => r.name.toLowerCase() === rashiKey);
  const [data, setData] = useState<HoroscopeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const fetchData = useCallback(async () => {
    if (!info) return;
    try {
      const res = await fetch(`${GITHUB_BASE}/${info.name}.json`);
      if (!res.ok) throw new Error('Data not available');
      const json = await res.json();
      setData(json.data);
      setError('');
      const saved = localStorage.getItem('language');
      if (saved && saved !== 'en') setTimeout(() => translatePage(), 300);
    } catch (err: any) {
      console.error(err);
      if (!data) setError('Could not load today\'s horoscope.');
    } finally { setLoading(false); }
  }, [info]);
  useEffect(() => { setLoading(true); fetchData(); }, [info]);
  if (!info) return <div className="text-center py-20 text-purple-300">Rashi not found. <Link href="/free-tools/daily-horoscope" className="underline">Go back</Link></div>;
  if (loading) return <div className="flex justify-center py-40"><div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>;
  return (
    <div className="max-w-4xl mx-auto relative z-10">
      <Link href="/free-tools/daily-horoscope" className="text-purple-300 hover:text-purple-100 mb-6 inline-block transition">← Back to All Rashis</Link>
      <div className="flex flex-wrap justify-center gap-6 mb-8"><PremiumCalendar /><PremiumClock /></div>
      {error && !data && <div className="text-center py-12"><p className="text-red-400">{error}</p></div>}
      {data && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <div className="bg-gradient-to-br from-[#2a1040] to-[#1a0033] rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-[0_8px_30px_rgba(139,92,246,0.3)]">
            <div className="flex items-center gap-4 mb-6"><div className="text-6xl" style={{ color: info.color }}>{info.symbol}</div><div><h1 className="font-serif text-3xl sm:text-4xl text-white font-bold">{info.name}</h1><p className="text-purple-300">{info.sanskrit}</p></div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[{ label: 'General', value: data.general, icon: '◈' },{ label: 'Luck', value: data.luck, icon: '◆' },{ label: 'Scope', value: data.scope, icon: '◇' },{ label: 'Study', value: data.study, icon: '◉' },{ label: 'Love', value: data.love, icon: '♡' },{ label: 'Travel', value: data.travel, icon: '✈' }].map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1*i }} className="bg-[#1a0033]/50 rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2"><span className="text-purple-400 text-lg">{item.icon}</span><h3 className="text-purple-300 font-semibold text-sm uppercase tracking-wider">{item.label}</h3></div>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-6 border border-purple-500/30 text-center">
            <div className="grid grid-cols-2 gap-4">
              <div><p className="text-purple-300 text-sm uppercase tracking-wider">Lucky Number</p><p className="text-4xl font-bold text-purple-200 mt-2">{data.lucky_number}</p></div>
              <div><p className="text-purple-300 text-sm uppercase tracking-wider">Lucky Color</p><p className="text-2xl font-bold text-purple-200 mt-2">{data.lucky_color}</p><div className="w-12 h-12 rounded-full mx-auto mt-2 border-2 border-purple-400" style={{ backgroundColor: data.lucky_color.toLowerCase() }} /></div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function HoroscopeContent() {
  const searchParams = useSearchParams();
  return searchParams.has('rashi') ? <RashiDetail /> : <RashiGrid />;
}

export default function DailyHoroscopePage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <main className="pt-28 pb-20 px-4 sm:px-6 min-h-screen bg-gradient-to-b from-[#0a001a] via-[#1a0033] to-[#0a001a]">
          <Starfield />
          <Suspense fallback={<div className="flex justify-center py-40"><div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>}>
            <HoroscopeContent />
          </Suspense>
        </main>
      </SmoothScroll>
      <style>{`@keyframes twinkle{0%,100%{opacity:0.3}50%{opacity:1}}`}</style>
    </>
  );
}
