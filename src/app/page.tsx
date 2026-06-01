'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import {
  Map,
  Brain,
  BookOpen,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Star,
  Clock,
  CheckCircle2,
  MapPin,
  Layers,
  Target,
  BarChart3,
  Zap,
  TrendingUp,
} from 'lucide-react';

// ─── ANIMATED COUNTER ───────────────────────────────────────────
function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── MODULE DATA ────────────────────────────────────────────────
const modules = [
  {
    id: 'atlas',
    title: 'İnteraktif Atlas',
    description: 'Katmanlı haritalarla Türkiye coğrafyasını keşfet. Dağlar, göller, madenler ve daha fazlası.',
    icon: Map,
    href: '/atlas',
    color: 'indigo',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    accent: 'border-indigo-200 hover:border-indigo-400',
    badge: '229+ Özellik',
    tag: 'KEŞFET',
    featured: true,
  },
  {
    id: 'quiz',
    title: 'Quiz Modu',
    description: 'KPSS formatında 4 farklı soru tipiyle kendini sına.',
    icon: Brain,
    href: '/quiz',
    color: 'emerald',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    accent: 'border-emerald-200 hover:border-emerald-400',
    badge: '239+ Soru',
    tag: 'TEST ET',
  },
  {
    id: 'notes',
    title: 'Ders Notları',
    description: 'Tam müfredat, kodlamalar ve analizler.',
    icon: BookOpen,
    href: '/notes',
    color: 'rose',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    accent: 'border-rose-200 hover:border-rose-400',
    badge: 'Full Müfredat',
    tag: 'ÇALIŞ',
  },
  {
    id: 'flashcards',
    title: 'Flashcard',
    description: 'Spaced repetition ile kalıcı öğrenme.',
    icon: Sparkles,
    href: '/flashcards',
    color: 'violet',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    accent: 'border-violet-200 hover:border-violet-400',
    badge: '80+ Kart',
    tag: 'TEKRAR ET',
  },
  {
    id: 'stats',
    title: 'İstatistikler',
    description: 'Quiz performansını analiz et.',
    icon: BarChart3,
    href: '/stats',
    color: 'amber',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    accent: 'border-amber-200 hover:border-amber-400',
    badge: 'Gerçek Zamanlı',
    tag: 'TAKİP ET',
  },
];

const features = [
  { icon: MapPin, label: '12+ Harita Katmanı', desc: 'Dağlar, göller, madenler...', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { icon: CheckCircle2, label: '4 Quiz Modu', desc: 'Harita, çoktan seçmeli, D/Y, eşleştirme', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { icon: GraduationCap, label: 'KPSS Odaklı', desc: '2026 müfredatına %100 uyumlu', color: 'text-violet-500', bg: 'bg-violet-50' },
  { icon: Clock, label: 'Spaced Repetition', desc: 'Leitner algoritması ile tekrar', color: 'text-rose-500', bg: 'bg-rose-50' },
];

const stats = [
  { icon: Target, value: 100, suffix: '%', label: 'Müfredat', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: Layers, value: 12, suffix: '+', label: 'Katman', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Brain, value: 239, suffix: '+', label: 'Soru', color: 'text-violet-600', bg: 'bg-violet-50' },
  { icon: Star, value: 80, suffix: '+', label: 'Flashcard', color: 'text-amber-600', bg: 'bg-amber-50' },
];

// ─── MAIN PAGE ───────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7faf4] text-[#2c342e] overflow-x-hidden">

      {/* ── Subtle background blobs ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-[#b9efc5]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#e9f0e8]/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#f0f5ee]/50 rounded-full blur-3xl" />
      </div>

      {/* ════════════ NAVIGATION ════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#abb4ac]/40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-white border border-[#abb4ac]/40 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition-shadow shrink-0">
              <img src="/tr-circle-flag.svg" alt="Türkiye" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-black text-base tracking-tight text-[#2c342e]">GEO-KPSS</span>
              <div className="text-[9px] font-bold text-[#386948] tracking-[0.2em] uppercase leading-none">
                KPSS 2026
              </div>
            </div>
          </Link>

          {/* Nav links */}
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
                className="px-4 py-2 text-sm font-semibold text-[#59615a] hover:text-[#2c342e] hover:bg-[#f0f5ee] rounded-lg transition-all duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/quiz"
            className="hidden md:flex items-center gap-2 px-5 py-2 bg-[#386948] hover:bg-[#2b5d3c] text-white rounded-xl text-sm font-bold shadow-sm shadow-[#386948]/20 hover:shadow-[#386948]/30 transition-all duration-150"
          >
            Hemen Başla
            <ArrowRight size={14} />
          </Link>
        </div>
      </nav>

      {/* ════════════ HERO ════════════ */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#b9efc5]/40 border border-[#386948]/20 rounded-full mb-8 animate-fade-in-up">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-[#386948] tracking-wide">2026 KPSS Müfredatına Tam Uyum</span>
          </div>

          {/* Title */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-[#2c342e]">Coğrafyayı</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#386948] to-[#2b5d3c] animate-gradient-x">
              Yaşayarak
            </span>
            <br />
            <span className="text-[#2c342e]">Öğren.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-[#59615a] font-medium leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            İnteraktif haritalar, akıllı quizler ve zenginleştirilmiş notlarla
            KPSS 2026&apos;ya <span className="text-[#2c342e] font-bold">en etkili</span> şekilde hazırlanın.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              href="/atlas"
              className="group flex items-center gap-2.5 px-7 py-3.5 bg-[#386948] hover:bg-[#2b5d3c] text-white rounded-2xl text-base font-bold shadow-lg shadow-[#386948]/20 hover:shadow-xl hover:shadow-[#386948]/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Map size={18} />
              Haritayı Keşfet
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/quiz"
              className="flex items-center gap-2.5 px-7 py-3.5 bg-white hover:bg-[#f0f5ee] border border-[#abb4ac]/40 hover:border-[#abb4ac]/70 text-[#2c342e] rounded-2xl text-base font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <Brain size={18} className="text-[#386948]" />
              Quiz&apos;e Başla
            </Link>
          </div>

          {/* ── Stats Bar ── */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-[#abb4ac]/40 rounded-2xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className={`w-8 h-8 ${stat.bg} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <stat.icon size={16} className={stat.color} />
                </div>
                <div className={`text-2xl font-black ${stat.color}`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] font-semibold text-[#59615a] uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ MODULES ════════════ */}
      <section className="py-20 px-6 bg-[#f0f5ee]/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2c342e] mb-3">
              Tüm Araçlar, Tek Platform
            </h2>
            <p className="text-[#59615a] text-lg max-w-xl mx-auto">
              KPSS Coğrafya hazırlığınız için ihtiyacınız olan her şey burada.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {modules.map((mod, i) => {
              const Icon = mod.icon;
              const isLarge = mod.featured;
              return (
                <Link
                  key={mod.id}
                  href={mod.href}
                  className={`group bg-white border border-[#abb4ac]/40 hover:border-[#386948]/40 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4
                    ${isLarge ? 'md:col-span-2' : ''}`}
                >
                  {/* Tag */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${mod.iconColor} ${mod.iconBg} px-2.5 py-1 rounded-full`}>
                      {mod.tag}
                    </span>
                    <span className="text-[11px] font-bold text-[#59615a] bg-[#f0f5ee] border border-[#abb4ac]/40 px-2.5 py-1 rounded-full">
                      {mod.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 ${mod.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className={mod.iconColor} />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className={`${isLarge ? 'text-2xl' : 'text-lg'} font-black text-[#2c342e] mb-1.5`}>
                      {mod.title}
                    </h3>
                    <p className="text-sm text-[#59615a] leading-relaxed">
                      {mod.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className={`flex items-center gap-1 text-sm font-bold ${mod.iconColor} opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200`}>
                    Keşfet
                    <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════ FEATURES ════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#2c342e] mb-3">Neden Geo-KPSS?</h2>
            <p className="text-[#59615a] text-lg">Statik kitaplara veda et.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feat) => (
              <div
                key={feat.label}
                className="bg-white border border-[#abb4ac]/40 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`w-11 h-11 ${feat.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <feat.icon size={20} className={feat.color} />
                </div>
                <h4 className="text-sm font-black text-[#2c342e] mb-1">{feat.label}</h4>
                <p className="text-xs text-[#59615a] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA BANNER ════════════ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#386948] to-[#2b5d3c] rounded-3xl p-12 text-center shadow-2xl shadow-[#386948]/20">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#b9efc5]/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <GraduationCap size={28} className="text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                KPSS 2026&apos;ya Hazır mısın?
              </h2>
              <p className="text-[#e8ffe9] mb-8 max-w-md mx-auto">
                Binlerce aday Geo-KPSS ile çalışıyor. Hemen ücretsiz başla, farkı hisset.
              </p>
              <Link
                href="/atlas"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-[#386948] rounded-2xl font-black text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Ücretsiz Başla
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="border-t border-[#abb4ac]/40 py-10 text-center px-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-6 h-6 bg-white border border-[#abb4ac]/40 rounded-full overflow-hidden shadow-sm shrink-0">
            <img src="/tr-circle-flag.svg" alt="Türkiye" className="w-full h-full object-cover" />
          </div>
          <span className="font-black text-sm text-[#59615a]">GEO-KPSS</span>
        </div>
        <p className="text-xs text-[#59615a]">
          © 2026 Geo-KPSS · KPSS sınavına hazırlanan tüm adaylara başarılar
        </p>
      </footer>

    </main>
  );
}
