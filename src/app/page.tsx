'use client';

import { useEffect, useState, useRef } from 'react';
import { useUser } from '@/contexts/AuthContext';
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
  Users,
  TrendingUp,
  LogIn,
  LogOut,
  UserCircle2,
} from 'lucide-react';

// ─── ANIMATED COUNTER ───────────────────────────────────────────
function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
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

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── TURKEY MAP IMAGE ─────────────────────────────────────────
function TurkeyMap() {
  return (
    <div className="relative w-full">
      {/* Card */}
      <div className="relative bg-[#e8f0e9] rounded-3xl border border-[#abb4ac]/30 overflow-hidden shadow-md">

        {/* Harita görseli — kenarlar CSS mask ile yumuşatıldı */}
        <div
          className="relative w-full"
          style={{
            maskImage: 'radial-gradient(ellipse 88% 82% at 50% 50%, black 55%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 88% 82% at 50% 50%, black 55%, transparent 100%)',
          }}
        >
          <img
            src="/turkey-map.png"
            alt="Türkiye Fiziki Haritası"
            className="w-full object-cover"
            style={{
              aspectRatio: '2 / 1',
              objectPosition: 'center 40%',
            }}
          />
        </div>

      </div>
    </div>
  );
}

// ─── FEATURE CARDS ───────────────────────────────────────────
const features = [
  {
    icon: Map,
    title: 'İnteraktif Haritalar',
    desc: 'Katmanlar ile Türkiye\'nin fiziki ve beşeri coğrafyasını keşfet.',
    iconBg: 'bg-[#386948]/10',
    iconColor: 'text-[#386948]',
  },
  {
    icon: Brain,
    title: 'Kapsamlı Soru Bankası',
    desc: '330+ KPSS formatında soru, 4 farklı mod ile kendini test et.',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
  },
  {
    icon: TrendingUp,
    title: 'Kişiselleştirilmiş Analiz',
    desc: 'İstatistikler ile zayıf konularını bul ve öğrenme döngüsünü kapat.',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
  },
];

// ─── MODULE CARDS ───────────────────────────────────────────
const modules = [
  { id: 'atlas', title: 'İnteraktif Atlas', desc: 'Katmanlı haritalarla Türkiye coğrafyasını keşfet.', icon: Map, href: '/atlas', iconBg: 'bg-[#386948]/10', iconColor: 'text-[#386948]', accent: 'hover:border-[#386948]/40', badge: '229+ Özellik', tag: 'KEŞFET', featured: true },
  { id: 'quiz', title: 'Quiz Modu', desc: 'KPSS formatında 4 farklı soru tipiyle kendini sına.', icon: Brain, href: '/quiz', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-700', accent: 'hover:border-emerald-400/60', badge: '330+ Soru', tag: 'TEST ET', featured: false },
  { id: 'notes', title: 'Ders Notları', desc: 'Tam müfredat, kodlamalar ve analizler.', icon: BookOpen, href: '/notes', iconBg: 'bg-rose-100', iconColor: 'text-rose-600', accent: 'hover:border-rose-400/60', badge: 'Full Müfredat', tag: 'ÇALIŞ', featured: false },
  { id: 'flashcards', title: 'Flashcard', desc: 'Spaced repetition ile kalıcı öğrenme.', icon: Sparkles, href: '/flashcards', iconBg: 'bg-violet-100', iconColor: 'text-violet-600', accent: 'hover:border-violet-400/60', badge: '80+ Kart', tag: 'TEKRAR ET', featured: false },
  { id: 'exam', title: 'Sınav Simülasyonu', desc: 'Zamanlı KPSS formatında sınav dene. 20/40/80 soruluk modlar.', icon: Clock, href: '/exam', iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600', accent: 'hover:border-indigo-400/60', badge: 'Yeni', tag: 'SINAVLAN', featured: false },
  { id: 'stats', title: 'İstatistikler', desc: 'Quiz performansını analiz et.', icon: BarChart3, href: '/stats', iconBg: 'bg-amber-100', iconColor: 'text-amber-600', accent: 'hover:border-amber-400/60', badge: 'Gerçek Zamanlı', tag: 'TAKİP ET', featured: false },
];

const stats = [
  { icon: Target, value: 100, suffix: '%', label: 'Müfredat', color: 'text-[#386948]', bg: 'bg-[#386948]/10' },
  { icon: Layers, value: 12, suffix: '+', label: 'Katman', color: 'text-emerald-700', bg: 'bg-emerald-100' },
  { icon: Brain, value: 330, suffix: '+', label: 'Soru', color: 'text-violet-600', bg: 'bg-violet-100' },
  { icon: Star, value: 80, suffix: '+', label: 'Flashcard', color: 'text-amber-600', bg: 'bg-amber-100' },
];

// ─── MAIN PAGE ───────────────────────────────────────────────
export default function HomePage() {
  const { user, isLoading, signOut } = useUser();
  const [welcomeBanner, setWelcomeBanner] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('just_registered') === '1') {
      sessionStorage.removeItem('just_registered');
      setWelcomeBanner(true);
      const t = setTimeout(() => setWelcomeBanner(false), 5000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#f7faf4] text-[#2c342e] overflow-x-hidden">

      {/* Subtle blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#b9efc5]/25 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#e9f0e8]/50 rounded-full blur-3xl" />
      </div>

      {/* ═══ NAVIGATION ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#abb4ac]/40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-white border border-[#abb4ac]/40 flex items-center justify-center overflow-hidden shadow-sm shrink-0">
              <img src="/tr-circle-flag.svg" alt="Türkiye" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-black text-base tracking-tight text-[#2c342e]">GEO-KPSS</span>
              <div className="text-[9px] font-bold text-[#386948] tracking-[0.2em] uppercase leading-none">KPSS 2026</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {[
              { href: '/', label: 'Ana Sayfa' },
              { href: '/atlas', label: 'İnteraktif Harita' },
              { href: '/notes', label: 'Ders Notları' },
              { href: '/quiz', label: 'Quiz' },
              { href: '/exam', label: 'Sınav Simülasyonu' },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                className="px-4 py-2 text-sm font-semibold text-[#59615a] hover:text-[#2c342e] hover:bg-[#f0f5ee] rounded-lg transition-all duration-150">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth durumu */}
          <div className="hidden md:flex items-center gap-2">
            {!isLoading && (
              user ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#386948]/10 border border-[#386948]/20 rounded-xl">
                    <UserCircle2 size={16} className="text-[#386948]" />
                    <span className="text-sm font-semibold text-[#386948] max-w-[140px] truncate">
                      {user.email?.split('@')[0]}
                    </span>
                  </div>
                  <button
                    onClick={signOut}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-[#59615a] hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200/60 rounded-xl transition-all duration-150 font-semibold"
                  >
                    <LogOut size={14} />
                    Çıkış
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link href="/auth/login"
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[#59615a] hover:text-[#2c342e] hover:bg-[#f0f5ee] rounded-xl transition-all duration-150">
                    <LogIn size={14} />
                    Giriş
                  </Link>
                  <Link href="/quiz"
                    className="flex items-center gap-2 px-5 py-2 bg-[#386948] hover:bg-[#2b5d3c] text-white rounded-xl text-sm font-bold shadow-sm transition-all duration-150">
                    Hemen Başla
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </nav>

      {/* ═══ WELCOME BANNER ═══ */}
      {welcomeBanner && (
        <div className="fixed top-16 left-0 right-0 z-40 flex justify-center px-4 pt-3 pointer-events-none">
          <div className="flex items-center gap-3 px-5 py-3 bg-[#386948] text-white rounded-2xl shadow-lg text-sm font-semibold animate-fade-in-up pointer-events-auto">
            <CheckCircle2 size={18} />
            Hesabın oluşturuldu, hoş geldin{user?.email ? ` ${user.email.split('@')[0]}` : ''}!
          </div>
        </div>
      )}

      {/* ═══ HERO — 2 sütun ═══ */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[520px]">

            {/* Sol — Metin */}
            <div className="flex flex-col gap-7 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#b9efc5]/40 border border-[#386948]/20 rounded-full w-fit">
                <Star size={13} className="text-[#386948]" />
                <span className="text-xs font-bold text-[#386948] tracking-wide">100K+ Aktif Kullanıcı</span>
              </div>

              {/* Başlık */}
              <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-[#2c342e]">
                Coğrafya Atlasını
                <br />
                <span className="text-[#386948]">Yeniden Keşfet</span>
              </h1>

              {/* Alt başlık */}
              <p className="text-lg text-[#59615a] leading-relaxed max-w-lg">
                Türkiye&apos;nin kapsamlı interaktif coğrafya platformu ile
                KPSS hazırlığını üst seviyeye taşı.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                <Link href="/atlas"
                  className="group flex items-center gap-2.5 px-7 py-3.5 bg-[#386948] hover:bg-[#2b5d3c] text-white rounded-2xl text-base font-bold shadow-md shadow-[#386948]/20 hover:-translate-y-0.5 transition-all duration-200">
                  <Map size={18} />
                  Haritayı Keşfet
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/quiz"
                  className="flex items-center gap-2.5 px-7 py-3.5 bg-white border border-[#abb4ac]/60 hover:border-[#386948]/40 hover:bg-[#f0f5ee] text-[#2c342e] rounded-2xl text-base font-bold hover:-translate-y-0.5 transition-all duration-200">
                  <Brain size={18} className="text-[#386948]" />
                  Quiz&apos;e Başla
                </Link>
              </div>

              {/* Mini stats */}
              <div className="flex items-center gap-6 pt-2">
                {[
                  { value: '330+', label: 'Soru' },
                  { value: '12+', label: 'Harita Katmanı' },
                  { value: '10', label: 'Ünite' },
                ].map(s => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-xl font-black text-[#386948]">{s.value}</span>
                    <span className="text-xs text-[#747d75] font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ — Türkiye Haritası */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <TurkeyMap />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3 ÖZELLİK KARTI ═══ */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title}
                  className="bg-white border border-[#abb4ac]/40 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                  <div className={`w-11 h-11 ${feat.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon size={22} className={feat.iconColor} />
                  </div>
                  <h3 className="font-bold text-[#2c342e] mb-2">{feat.title}</h3>
                  <p className="text-sm text-[#59615a] leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((stat) => (
              <div key={stat.label}
                className="bg-white border border-[#abb4ac]/40 rounded-2xl p-5 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className={`w-9 h-9 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-2.5`}>
                  <stat.icon size={17} className={stat.color} />
                </div>
                <div className={`text-2xl font-black ${stat.color}`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] font-semibold text-[#747d75] uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MODÜLLER ═══ */}
      <section className="py-16 px-6 bg-[#f0f5ee]/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#2c342e] mb-3">Tüm Araçlar, Tek Platform</h2>
            <p className="text-[#59615a] text-base max-w-xl mx-auto">KPSS Coğrafya hazırlığınız için ihtiyacınız olan her şey burada.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <Link key={mod.id} href={mod.href}
                  className={`group bg-white border border-[#abb4ac]/40 ${mod.accent} rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4 ${mod.featured ? 'md:col-span-2' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${mod.iconColor} ${mod.iconBg} px-2.5 py-1 rounded-full`}>{mod.tag}</span>
                    <span className="text-[11px] font-bold text-[#747d75] bg-[#f0f5ee] px-2.5 py-1 rounded-full">{mod.badge}</span>
                  </div>
                  <div className={`w-11 h-11 ${mod.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={22} className={mod.iconColor} />
                  </div>
                  <div>
                    <h3 className="font-black text-[#2c342e] mb-1.5">{mod.title}</h3>
                    <p className="text-sm text-[#59615a] leading-relaxed">{mod.desc}</p>
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-bold ${mod.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                    Keşfet <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ NASIL ÇALIŞMALIYIM? ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#2c342e] mb-3">Nereden Başlamalısın?</h2>
            <p className="text-[#59615a] text-base">3 adımda etkili KPSS Coğrafya hazırlığı</p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-4">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-[3.75rem] left-[33.3%] right-[33.3%] h-px bg-gradient-to-r from-rose-300 via-violet-300 to-[#386948]/40 z-0 pointer-events-none" />

            {(
              [
                { step: '1', title: 'Ders Notlarını Oku', desc: 'Tam müfredat, konular arası bağlantılar ve KPSS odaklı özetler ile temeli sağlam at.', href: '/notes', Icon: BookOpen, color: 'text-rose-600', bg: 'bg-rose-50', borderHover: 'hover:border-rose-300/70', numBg: 'bg-rose-500' },
                { step: '2', title: "Flashcard'larla Pekiştir", desc: 'Spaced repetition yöntemiyle öğrendiklerini kalıcı hale getir, boşlukları doldur.', href: '/flashcards', Icon: Sparkles, color: 'text-violet-600', bg: 'bg-violet-50', borderHover: 'hover:border-violet-300/70', numBg: 'bg-violet-500' },
                { step: '3', title: "Quiz'le Kendini Sına", desc: 'KPSS formatında soru çözerek gerçek sınavda seni ne beklediğini öğren.', href: '/quiz', Icon: Brain, color: 'text-[#386948]', bg: 'bg-[#386948]/5', borderHover: 'hover:border-[#386948]/30', numBg: 'bg-[#386948]' },
              ] as const
            ).map(({ step, title, desc, href, Icon, color, bg, borderHover, numBg }) => (
              <Link
                key={step}
                href={href}
                className={`group relative z-10 bg-white border border-[#abb4ac]/40 ${borderHover} rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4`}
              >
                <div className="flex items-center justify-between">
                  <span className={`w-8 h-8 ${numBg} text-white text-sm font-black rounded-xl flex items-center justify-center shadow-sm`}>{step}</span>
                  <ArrowRight size={15} className={`${color} opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200`} />
                </div>
                <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center`}>
                  <Icon size={22} className={color} />
                </div>
                <div>
                  <h3 className="font-black text-[#2c342e] mb-1.5">{title}</h3>
                  <p className="text-sm text-[#59615a] leading-relaxed">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#386948] via-[#2f5c40] to-[#2b5d3c] rounded-3xl p-12 text-center shadow-xl shadow-[#386948]/20">
            <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <GraduationCap size={28} className="text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">KPSS 2026&apos;ya Hazır mısın?</h2>
              <p className="text-[#b9efc5] mb-8 max-w-md mx-auto">Binlerce aday Geo-KPSS ile çalışıyor. Hemen ücretsiz başla.</p>
              <Link href="/atlas"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-[#386948] rounded-2xl font-black text-base hover:-translate-y-0.5 transition-all duration-200 shadow-md">
                Ücretsiz Başla
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-[#abb4ac]/40 py-10 text-center px-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-6 h-6 bg-white border border-[#abb4ac]/30 rounded-full overflow-hidden shadow-sm shrink-0">
            <img src="/tr-circle-flag.svg" alt="Türkiye" className="w-full h-full object-cover" />
          </div>
          <span className="font-black text-sm text-[#747d75]">GEO-KPSS</span>
        </div>
        <p className="text-xs text-[#abb4ac]">© 2026 Geo-KPSS · KPSS sınavına hazırlanan tüm adaylara başarılar</p>
      </footer>

    </main>
  );
}
