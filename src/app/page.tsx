import Link from 'next/link';
import { Map, Brain, BookOpen, Sparkles, ChevronRight, Compass, Globe2, Layers, Zap, Target } from 'lucide-react';

const modules = [
  {
    id: 'atlas',
    title: 'İnteraktif Atlas',
    description: 'Türkiye coğrafyasını katmanlı haritalarla keşfedin. Dağlar, göller, nehirler ve şehirler parmaklarınızın ucunda.',
    icon: Map,
    href: '/atlas',
    color: 'from-[#4F46E5] to-[#7C3AED]',
    accentColor: 'text-indigo-400',
    stats: '229+ Özellik',
    tag: 'KEŞFET'
  },
  {
    id: 'quiz',
    title: 'Quiz Modu',
    description: 'KPSS formatındaki interaktif sorularla bilginizi test edin. Harita üzerinde yer belirleme ve eşleştirme.',
    icon: Brain,
    href: '/quiz',
    color: 'from-[#10B981] to-[#059669]',
    accentColor: 'text-emerald-400',
    stats: '100+ Soru',
    tag: 'TEST ET'
  },
  {
    id: 'study',
    title: 'Ders Notları',
    description: 'Zenginleştirilmiş içerik, özel kodlamalar ve ÖSYM analizleri ile hazırlanan kapsamlı çalışma modülü.',
    icon: BookOpen,
    href: '/notes',
    color: 'from-[#F43F5E] to-[#E11D48]',
    accentColor: 'text-rose-400',
    stats: 'Full Müfredat',
    tag: 'ÇALIŞ'
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 overflow-hidden font-sans">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        {/* Navigation Header */}
        <nav className="absolute top-8 left-6 right-6 flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-3xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Globe2 size={18} className="text-white" />
            </div>
            <span className="font-black text-xl tracking-tighter text-white">GEO-KPSS</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-400">
            <Link href="/atlas" className="hover:text-white transition-colors">ATLAS</Link>
            <Link href="/quiz" className="hover:text-white transition-colors">QUIZ</Link>
            <Link href="/notes" className="hover:text-white transition-colors">NOTLAR</Link>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Hero Content */}
          <div className="space-y-10">

            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                COĞRAFYAYI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400">YAŞAYARAK</span> <br />
                ÖĞRENİN.
              </h1>
              <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
                Statik kitapları unutun. İnteraktif haritalar, akıllı quizler ve zenginleştirilmiş notlarla KPSS 2026'ya en profesyonel şekilde hazırlanın.
              </p>
            </div>

            <div className="flex flex-wrap gap-10">
              <div className="space-y-1">
                <div className="text-3xl font-black text-white flex items-center gap-2">
                  <Target className="text-emerald-500" size={24} /> 100%
                </div>
                <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Müfredat Uyumu</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-white flex items-center gap-2">
                  <Layers className="text-indigo-500" size={24} /> 12+
                </div>
                <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Harita Katmanı</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-white flex items-center gap-2">
                  <Zap className="text-amber-500" size={24} /> 10ms
                </div>
                <div className="text-xs font-black text-slate-500 uppercase tracking-widest">Render Hızı</div>
              </div>
            </div>
          </div>

          {/* Right Column: Module Preview Grid */}
          <div className="grid gap-6 py-10">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Link
                  key={module.id}
                  href={module.href}
                  className="group relative flex items-center p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-white/10 transition-all duration-500 hover:bg-slate-900/60 overflow-hidden shadow-2xl"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${module.color} opacity-[0.03] group-hover:opacity-10 transition-opacity blur-2xl translate-x-10 -translate-y-10`} />

                  <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500 shrink-0`}>
                    <Icon size={32} strokeWidth={2.5} />
                  </div>

                  <div className="ml-8 pr-10">
                    <div className={`text-[10px] font-black uppercase tracking-[0.3em] mb-2 ${module.accentColor}`}>
                      {module.tag}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2 leading-none">{module.title}</h3>
                    <p className="text-slate-400 text-sm font-medium leading-snug">{module.description}</p>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black text-slate-500 border border-white/5">
                        {module.stats}
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                    <ChevronRight size={32} className="text-white" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}
