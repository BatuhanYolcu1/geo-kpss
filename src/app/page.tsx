import Link from 'next/link';
import { Map, Brain, BarChart3, Sparkles, ChevronRight, Compass, Globe2, BookOpen, TrendingUp } from 'lucide-react';

const modules = [
  {
    id: 'atlas',
    title: 'İnteraktif Atlas',
    description: 'Türkiye coğrafyasını katmanlı haritalarla keşfedin. Dağlar, göller, nehirler, şehirler ve daha fazlası.',
    icon: Map,
    href: '/atlas',
    color: 'from-indigo-500 to-purple-600',
    shadowColor: 'shadow-indigo-500/25',
    active: true,
    stats: '229+ Coğrafi Özellik',
  },
  {
    id: 'quiz',
    title: 'Quiz Modu',
    description: 'KPSS coğrafya bilginizi interaktif sorularla test edin ve güçlendirin.',
    icon: Brain,
    href: '/quiz',
    color: 'from-emerald-500 to-teal-600',
    shadowColor: 'shadow-emerald-500/25',
    active: true,
    stats: '100+ Soru',
  },
  {
    id: 'study',
    title: 'Ders Notları',
    description: 'KPSS coğrafya konularını kapsamlı notlar ve harita desteğiyle çalışın.',
    icon: BookOpen,
    href: '/notes',
    color: 'from-rose-500 to-pink-600',
    shadowColor: 'shadow-rose-500/25',
    active: true,
    stats: '6 Ana Kategori',
  },
  {
    id: 'stats',
    title: 'İstatistiklerim',
    description: 'Çalışma ilerlemenizi takip edin, güçlü ve zayıf yönlerinizi keşfedin.',
    icon: BarChart3,
    href: '/stats',
    color: 'from-amber-500 to-orange-600',
    shadowColor: 'shadow-amber-500/25',
    active: true,
    stats: 'En Başarılı: -',
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
            <Sparkles size={16} className="text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">KPSS Coğrafya Hazırlık Platformu</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
            Geo-KPSS
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Türkiye coğrafyasını interaktif haritalar ve quizlerle öğrenin.
            <br />
            <span className="text-indigo-400">Çalışma modülünüzü seçin.</span>
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-10">
            <div className="flex items-center gap-2 text-slate-400">
              <Globe2 size={20} className="text-indigo-400" />
              <span>81 İl</span>
            </div>
            <div className="h-4 w-px bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400">
              <Compass size={20} className="text-emerald-400" />
              <span>7 Bölge</span>
            </div>
            <div className="h-4 w-px bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400">
              <Map size={20} className="text-purple-400" />
              <span>10 Katman</span>
            </div>
          </div>
        </header>

        {/* Module Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            const isDisabled = !module.active;

            return (
              <Link
                key={module.id}
                href={isDisabled ? '#' : module.href}
                className={`
                  group relative overflow-hidden rounded-2xl p-6 transition-all duration-300
                  ${isDisabled
                    ? 'bg-slate-800/30 cursor-not-allowed opacity-60'
                    : `bg-slate-800/50 hover:bg-slate-800/80 hover:scale-[1.02] hover:shadow-2xl ${module.shadowColor}`
                  }
                  border border-slate-700/50
                `}
              >
                {/* Gradient Overlay */}
                {!isDisabled && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                )}

                {/* Icon */}
                <div className={`
                  w-14 h-14 rounded-xl flex items-center justify-center mb-4
                  bg-gradient-to-br ${module.color}
                  ${isDisabled ? 'grayscale' : ''}
                `}>
                  <Icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  {module.title}
                  {!isDisabled && (
                    <ChevronRight size={18} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  )}
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {module.description}
                </p>

                {/* Stats Badge */}
                <div className={`
                  inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium
                  ${isDisabled
                    ? 'bg-slate-700/50 text-slate-500'
                    : 'bg-slate-700/50 text-slate-300'}
                `}>
                  {module.stats}
                </div>

                {/* Coming Soon Badge */}
                {isDisabled && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-slate-700 rounded text-xs text-slate-400">
                    Yakında
                  </div>
                )}
              </Link>
            );
          })}
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            KPSS Coğrafya sınavına hazırlanmak için tasarlandı.
            <br />
            <span className="text-slate-600">229+ coğrafi özellik • Güncel veri</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
