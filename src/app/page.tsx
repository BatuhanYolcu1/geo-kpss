'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import {
  Map,
  Brain,
  BookOpen,
  Sparkles,
  ChevronRight,
  Globe2,
  Layers,
  Zap,
  Target,
  BarChart3,
  ArrowRight,
  GraduationCap,
  Flame,
  Trophy,
  Star,
  TrendingUp,
  Clock,
  CheckCircle2,
  MapPin,
} from 'lucide-react';

// ─── ANIMATED COUNTER ───────────────────────────────────────────
function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── FLOATING PARTICLES ─────────────────────────────────────────
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-particle ${8 + Math.random() * 12}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

// ─── MODULE DATA ────────────────────────────────────────────────
const modules = [
  {
    id: 'atlas',
    title: 'İnteraktif Atlas',
    description: 'Katmanlı haritalarla Türkiye coğrafyasını keşfedin',
    icon: Map,
    href: '/atlas',
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    glow: 'shadow-indigo-500/20',
    stats: '229+ Özellik',
    tag: 'KEŞFET',
    featured: true,
  },
  {
    id: 'quiz',
    title: 'Quiz Modu',
    description: 'KPSS formatında 4 farklı soru tipi',
    icon: Brain,
    href: '/quiz',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    glow: 'shadow-emerald-500/20',
    stats: '120+ Soru',
    tag: 'TEST ET',
  },
  {
    id: 'notes',
    title: 'Ders Notları',
    description: 'Tam müfredat, kodlamalar ve analizler',
    icon: BookOpen,
    href: '/notes',
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    glow: 'shadow-rose-500/20',
    stats: 'Full Müfredat',
    tag: 'ÇALIŞ',
  },
  {
    id: 'flashcards',
    title: 'Flashcard',
    description: 'Spaced repetition ile kalıcı öğrenme',
    icon: Sparkles,
    href: '/flashcards',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    glow: 'shadow-violet-500/20',
    stats: '35+ Kart',
    tag: 'TEKRAR ET',
  },
  {
    id: 'stats',
    title: 'İstatistikler',
    description: 'Quiz performansını analiz et',
    icon: BarChart3,
    href: '/stats',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    glow: 'shadow-amber-500/20',
    stats: 'Gerçek Zamanlı',
    tag: 'TAKİP ET',
  },
];

const features = [
  { icon: MapPin, label: '12+ Harita Katmanı', desc: 'Dağlar, göller, madenler...' },
  { icon: CheckCircle2, label: '4 Quiz Modu', desc: 'Harita, çoktan seçmeli, D/Y, eşleştirme' },
  { icon: GraduationCap, label: 'KPSS Odaklı', desc: '2026 müfredatına %100 uyumlu' },
  { icon: Clock, label: 'Spaced Repetition', desc: 'Leitner algoritması ile tekrar' },
];

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <main className="min-h-screen bg-[#030014] text-white overflow-hidden selection:bg-indigo-500/30">
      {/* ═══════ ANIMATED MESH BACKGROUND ═══════ */}
      <div className="fixed inset-0 z-0">
        {/* Main gradient orbs */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-[150px]"
          style={{
            background: 'radial-gradient(circle, #4f46e5, transparent 70%)',
            left: `calc(${mousePos.x * 0.02}px - 400px)`,
            top: `calc(${mousePos.y * 0.02}px - 200px)`,
            transition: 'left 1.5s ease-out, top 1.5s ease-out',
          }}
        />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute top-[60%] right-[30%] w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <FloatingParticles />
      </div>

      {/* ═══════ NAVIGATION ═══════ */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] px-6 py-3.5 rounded-2xl shadow-2xl shadow-black/20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#E30A17] rounded-full flex items-center justify-center overflow-hidden shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-shadow group-hover:scale-105 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="w-[110%] h-[110%]">
                  <g transform="translate(-1, 0)">
                    <path fill="#FFF" d="M22.25 18c0-3.957-2.673-7.291-6.326-8.544 1.258-.605 2.66-.956 4.143-.956 5.21 0 9.434 4.254 9.434 9.5s-4.224 9.5-9.434 9.5c-1.483 0-2.885-.351-4.143-.956 3.653-1.253 6.326-4.587 6.326-8.544z" />
                    <path fill="#FFF" d="M27.24 16.592l-4.249.49-.661 4.226-2.5-3.418-4.22.697 1.838-3.811-3.219-2.844 4.103 1.22 1.996-3.731 1.701 3.874z" />
                  </g>
                </svg>
              </div>
              <div>
                <span className="font-black text-lg tracking-tight text-white">GEO-KPSS</span>
                <div className="text-[9px] font-bold text-indigo-400/70 tracking-[0.2em] uppercase -mt-0.5">KPSS 2026</div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {[
                { href: '/atlas', label: 'Atlas' },
                { href: '/quiz', label: 'Quiz' },
                { href: '/notes', label: 'Notlar' },
                { href: '/flashcards', label: 'Flashcard' },
                { href: '/stats', label: 'İstatistik' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/quiz"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 rounded-xl text-sm font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all hover:scale-105"
            >
              Hemen Başla
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </nav>

      {/* ═══════ HERO SECTION ═══════ */}
      <section className="relative z-10 pt-32 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8 animate-fade-in-up">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-indigo-300">2026 KPSS Müfredatına Tam Uyum</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-white">Coğrafyayı</span>
              <br />
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 animate-gradient-x">
                  Yaşayarak
                </span>
                {/* Underline decoration */}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8 C 50 2, 100 2, 150 6 S 250 10, 298 4" stroke="url(#grad)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#fb7185" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="text-white">Öğren.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Statik kitapları unutun. İnteraktif haritalar, akıllı quizler ve zenginleştirilmiş notlarla
              KPSS 2026&apos;ya <span className="text-white font-bold">en profesyonel</span> şekilde hazırlanın.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/atlas"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-2xl text-lg font-bold shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-105 flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Map size={22} className="relative z-10" />
                <span className="relative z-10">Haritayı Keşfet</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/quiz"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl text-lg font-bold transition-all hover:scale-105 flex items-center gap-3"
              >
                <Brain size={22} />
                Quiz&apos;e Başla
              </Link>
            </div>
          </div>

          {/* ═══════ STATS COUNTER BAR ═══════ */}
          <div className="max-w-3xl mx-auto mb-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Target, value: 100, suffix: '%', label: 'Müfredat', color: 'text-emerald-400' },
                { icon: Layers, value: 12, suffix: '+', label: 'Katman', color: 'text-indigo-400' },
                { icon: Brain, value: 120, suffix: '+', label: 'Soru', color: 'text-violet-400' },
                { icon: Star, value: 35, suffix: '+', label: 'Flashcard', color: 'text-amber-400' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="relative group bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-sm border border-white/[0.06] hover:border-white/10 rounded-2xl p-5 text-center transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                >
                  <stat.icon size={20} className={`${stat.color} mx-auto mb-2 opacity-60`} />
                  <div className={`text-3xl font-black ${stat.color}`}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════ BENTO GRID MODULES ═══════ */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Tüm Araçlar, Tek Platform
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                KPSS Coğrafya hazırlığınız için ihtiyacınız olan her şey burada.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {modules.map((mod, i) => {
                const Icon = mod.icon;
                const isLarge = mod.featured;

                return (
                  <Link
                    key={mod.id}
                    href={mod.href}
                    className={`group relative overflow-hidden rounded-3xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 ${isLarge ? 'md:col-span-2 md:row-span-2' : ''} ${mod.glow}`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.04] transition-colors duration-500" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${mod.gradient} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700`} />

                    {/* Glow orb on hover */}
                    <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${mod.gradient} opacity-0 group-hover:opacity-[0.15] rounded-full blur-[80px] transition-opacity duration-700`} />

                    <div className={`relative z-10 ${isLarge ? 'p-10 md:p-14' : 'p-7'}`}>
                      {/* Tag */}
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/[0.06] mb-5 ${isLarge ? 'mb-6' : ''}`}>
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${mod.gradient}`} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                          {mod.tag}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className={`${isLarge ? 'w-20 h-20 mb-8' : 'w-14 h-14 mb-5'} rounded-2xl bg-gradient-to-br ${mod.gradient} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon size={isLarge ? 40 : 26} strokeWidth={2} />
                      </div>

                      {/* Title */}
                      <h3 className={`${isLarge ? 'text-4xl' : 'text-xl'} font-black text-white mb-3 leading-tight`}>
                        {mod.title}
                      </h3>
                      <p className={`${isLarge ? 'text-lg max-w-md' : 'text-sm'} text-slate-400 font-medium leading-relaxed mb-6`}>
                        {mod.description}
                      </p>

                      {/* Bottom row */}
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1.5 bg-white/5 rounded-xl text-xs font-bold text-slate-500 border border-white/[0.04]">
                          {mod.stats}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowRight size={18} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ═══════ FEATURES ROW ═══════ */}
          <div className="mb-32">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {features.map((feat, i) => (
                <div
                  key={feat.label}
                  className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-center hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all">
                    <feat.icon size={22} className="text-indigo-400" />
                  </div>
                  <h4 className="text-sm font-black text-white mb-1">{feat.label}</h4>
                  <p className="text-xs text-slate-500 font-medium">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════ CTA BANNER ═══════ */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-indigo-600/20 via-violet-600/20 to-rose-600/20 border border-white/[0.08] p-12 md:p-16 text-center">
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-500/20 rounded-full blur-[100px]" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-indigo-500/30">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  KPSS 2026&apos;ya Hazır mısın?
                </h2>
                <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
                  Binlerce aday Geo-KPSS ile çalışıyor. Hemen ücretsiz başla, farkı hisset.
                </p>
                <Link
                  href="/atlas"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-white text-slate-900 rounded-2xl text-lg font-black shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all"
                >
                  Ücretsiz Başla
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* ═══════ FOOTER ═══════ */}
          <footer className="text-center pb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#E30A17] rounded-full flex items-center justify-center overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="w-[120%] h-[120%]">
                  <g transform="translate(-1, 0)">
                    <path fill="#FFF" d="M22.25 18c0-3.957-2.673-7.291-6.326-8.544 1.258-.605 2.66-.956 4.143-.956 5.21 0 9.434 4.254 9.434 9.5s-4.224 9.5-9.434 9.5c-1.483 0-2.885-.351-4.143-.956 3.653-1.253 6.326-4.587 6.326-8.544z" />
                    <path fill="#FFF" d="M27.24 16.592l-4.249.49-.661 4.226-2.5-3.418-4.22.697 1.838-3.811-3.219-2.844 4.103 1.22 1.996-3.731 1.701 3.874z" />
                  </g>
                </svg>
              </div>
              <span className="font-black text-sm text-slate-500">GEO-KPSS</span>
            </div>
            <p className="text-xs text-slate-600">
              © 2026 Geo-KPSS. KPSS sınavına hazırlanan tüm adaylara başarılar! 🎓
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
