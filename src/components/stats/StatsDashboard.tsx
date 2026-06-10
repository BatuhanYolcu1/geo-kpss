'use client';

import { useState, useEffect } from 'react';
import {
    BarChart3,
    Trophy,
    Target,
    Clock,
    Trash2,
    ChevronRight,
    TrendingUp,
    Map,
    Brain,
    Hash,
    BookOpen,
    Sparkles,
    ArrowRight,
} from 'lucide-react';
import { storageService } from '@/lib/storage';
import { UserStats, QuizResult, QuizMode } from '@/types/quiz';
import { useUser } from '@/contexts/AuthContext';
import Link from 'next/link';
import { LogIn, Shield } from 'lucide-react';

export default function StatsDashboard() {
    const { user } = useUser();
    const [stats, setStats] = useState<UserStats | null>(null);

    useEffect(() => {
        // Fetch stats on client-side only
        const data = storageService.getUserStats();
        // Use a microtask to avoid synchronous setState warning
        Promise.resolve().then(() => setStats(data));
    }, []);

    if (!stats || stats.totalQuizzes === 0) {
        return (
            <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-[#e9f0e8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="text-[#59615a]" size={32} />
                </div>
                <h2 className="text-xl font-bold text-[#2c342e] mb-2">Henüz Veri Yok</h2>
                <p className="text-[#59615a] mb-8 max-w-sm mx-auto">
                    İstatistiklerinizin oluşması için en az bir quizi tamamlamanız gerekiyor.
                </p>
                <Link
                    href="/quiz"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#386948] hover:bg-[#2b5d3c] text-white rounded-xl font-bold transition-all"
                >
                    Hadi Başlayalım
                    <ChevronRight size={18} />
                </Link>
            </div>
        );
    }

    const handleClearHistory = () => {
        if (confirm('Tüm ilerlemenizi sıfırlamak istediğinize emin misiniz?')) {
            storageService.clearHistory();
            setStats(storageService.getUserStats());
        }
    };

    const getModeIcon = (mode: QuizMode) => {
        switch (mode) {
            case 'map': return <Map size={14} />;
            case 'matching': return <Hash size={14} />;
            default: return <Brain size={14} />;
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Misafir nudge — giriş yapılmamışsa göster */}
            {!user && (
                <div className="flex items-center gap-4 px-5 py-4 bg-amber-50 border border-amber-200/60 rounded-2xl">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                        <Shield size={18} className="text-amber-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-amber-800">Verilerini kaybetme</p>
                        <p className="text-xs text-amber-700/80 mt-0.5">Ücretsiz hesap oluşturarak tüm istatistiklerini buluta yedekle — her cihazdan eriş.</p>
                    </div>
                    <Link
                        href="/auth/register"
                        className="shrink-0 flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-colors"
                    >
                        <LogIn size={13} />
                        Kayıt Ol
                    </Link>
                </div>
            )}

            {/* Overview Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard
                    icon={<Trophy className="text-amber-400" />}
                    label="Toplam Puan"
                    value={stats.totalScore.toLocaleString()}
                    subValue="Tüm quizler"
                />
                <StatCard
                    icon={<Target className="text-emerald-400" />}
                    label="Başarı Oranı"
                    value={`${stats.averageAccuracy}%`}
                    subValue="Ortalama"
                />
                <StatCard
                    icon={<TrendingUp className="text-blue-400" />}
                    label="Tamamlanan"
                    value={stats.totalQuizzes.toString()}
                    subValue="Quiz oturumu"
                />
                <StatCard
                    icon={<Clock className="text-purple-400" />}
                    label="En İyi Skor"
                    value={stats.bestScore.toString()}
                    subValue="Tek oturum"
                />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Category Performance */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-[#2c342e] mb-6 flex items-center gap-2">
                            <BarChart3 size={20} className="text-[#386948]" />
                            Kategori Performansı
                        </h3>

                        <div className="space-y-5">
                            {Object.entries(stats.categoryPerformance).map(([category, data]) => (
                                <div key={category} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#2c342e] capitalize">{category}</span>
                                        <span className="text-[#59615a]">
                                            {data.correctAnswers} / {data.totalAnswers} doğru (%{data.accuracy})
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-[#e9f0e8] rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#386948] to-emerald-500 transition-all duration-1000"
                                            style={{ width: `${data.accuracy}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent History */}
                    <div className="bg-white border border-[#abb4ac]/40 rounded-2xl overflow-hidden">
                        <div className="p-4 md:p-6 border-b border-[#abb4ac]/40 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-[#2c342e]">Son Aktiviteler</h3>
                            <button
                                onClick={handleClearHistory}
                                className="text-slate-500 hover:text-red-400 transition-colors p-2"
                                title="Geçmişi Temizle"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                        {/* Desktop: tablo */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-[#f0f5ee]">
                                    <tr className="text-xs uppercase tracking-wider text-[#59615a]">
                                        <th className="px-6 py-4 font-semibold">Tarih</th>
                                        <th className="px-6 py-4 font-semibold">Mod</th>
                                        <th className="px-6 py-4 font-semibold">Doğru / Soru</th>
                                        <th className="px-6 py-4 font-semibold">Başarı</th>
                                        <th className="px-6 py-4 font-semibold text-right">Puan</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#abb4ac]/20">
                                    {stats.recentActivity.map((result) => (
                                        <tr key={result.id} className="hover:bg-[#f0f5ee] transition-colors">
                                            <td className="px-6 py-4 text-sm text-[#59615a]">
                                                {new Date(result.date).toLocaleDateString('tr-TR')}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#e9f0e8] text-xs text-[#2c342e] capitalize">
                                                    {getModeIcon(result.mode)}
                                                    {result.mode === 'map' ? 'Harita' : result.mode}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-[#2c342e]">
                                                {result.correctCount} / {result.totalQuestions}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`text-sm font-medium ${result.accuracy >= 70 ? 'text-emerald-400' : result.accuracy >= 40 ? 'text-amber-400' : 'text-rose-400'}`}>
                                                    %{result.accuracy}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right font-bold text-[#2c342e]">
                                                {result.score}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Mobil: kart listesi */}
                        <div className="md:hidden divide-y divide-[#abb4ac]/20">
                            {stats.recentActivity.map((result) => (
                                <div key={result.id} className="px-4 py-3 flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2.5">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#e9f0e8] text-xs text-[#2c342e] capitalize">
                                            {getModeIcon(result.mode)}
                                            {result.mode === 'map' ? 'Harita' : result.mode}
                                        </span>
                                        <span className="text-xs text-[#747d75]">
                                            {new Date(result.date).toLocaleDateString('tr-TR')}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="text-[#59615a]">{result.correctCount}/{result.totalQuestions}</span>
                                        <span className={`font-bold ${result.accuracy >= 70 ? 'text-emerald-500' : result.accuracy >= 40 ? 'text-amber-500' : 'text-rose-500'}`}>
                                            %{result.accuracy}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar / Tips */}
                <div className="space-y-6">
                    {/* Akıllı Gelişim Önerisi */}
                    {(() => {
                        const catEntries = Object.entries(stats.categoryPerformance)
                            .filter(([, d]) => d.totalAnswers >= 3);
                        const weakest = catEntries.length > 0
                            ? catEntries.sort((a, b) => a[1].accuracy - b[1].accuracy)[0]
                            : null;
                        const categoryLabels: Record<string, string> = {
                            physical: 'Fiziki Coğrafya',
                            economic: 'Ekonomik Coğrafya',
                            human: 'Nüfus & Yerleşme',
                            regions: 'Coğrafi Bölgeler',
                            mixed: 'Karma',
                        };
                        return (
                            <div className="bg-[#386948]/5 border border-[#386948]/20 rounded-2xl p-6">
                                <h4 className="font-bold text-[#386948] mb-3 flex items-center gap-2">
                                    <TrendingUp size={18} />
                                    Gelişim Önerisi
                                </h4>
                                {weakest ? (
                                    <>
                                        <p className="text-sm text-[#2c342e]/80 leading-relaxed mb-4">
                                            <span className="font-bold text-[#2c342e]">{categoryLabels[weakest[0]] ?? weakest[0]}</span> kategorisinde
                                            başarı oranın <span className="font-bold text-rose-600">%{weakest[1].accuracy}</span> — bu konuyu güçlendirmek için:
                                        </p>
                                        <div className="space-y-2">
                                            <Link href="/notes" className="flex items-center justify-between w-full px-4 py-3 bg-white border border-[#abb4ac]/40 hover:border-[#386948]/40 hover:bg-[#f0f5ee] rounded-xl transition-all group text-sm">
                                                <div className="flex items-center gap-2.5">
                                                    <BookOpen size={15} className="text-rose-600" />
                                                    <span className="font-semibold text-[#2c342e]">Ders Notlarını Oku</span>
                                                </div>
                                                <ArrowRight size={14} className="text-[#386948] group-hover:translate-x-0.5 transition-transform" />
                                            </Link>
                                            <Link href="/flashcards" className="flex items-center justify-between w-full px-4 py-3 bg-white border border-[#abb4ac]/40 hover:border-violet-300/60 hover:bg-violet-50/50 rounded-xl transition-all group text-sm">
                                                <div className="flex items-center gap-2.5">
                                                    <Sparkles size={15} className="text-violet-600" />
                                                    <span className="font-semibold text-[#2c342e]">Flashcard Çalış</span>
                                                </div>
                                                <ArrowRight size={14} className="text-violet-500 group-hover:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <p className="text-sm text-[#2c342e]/70 leading-relaxed">
                                        {stats.averageAccuracy < 50
                                            ? 'Temel konuları pekiştirmek için ders notlarını ve flashcard modülünü kullanabilirsin.'
                                            : "Başarı oranını %80'in üzerine çıkarmak için yanlış yaptığın kategorilere odaklan."}
                                    </p>
                                )}
                            </div>
                        );
                    })()}

                    <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-6">
                        <h4 className="font-bold text-[#2c342e] mb-4">Hızlı İstatistik</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-[#59615a]">Ort. Süre</span>
                                <span className="text-sm font-medium text-[#2c342e]">
                                    {Math.round(stats.recentActivity.reduce((a, b) => a + b.duration, 0) / stats.recentActivity.length)} sn
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-[#59615a]">Verimlilik</span>
                                <span className={`text-sm font-medium ${stats.averageAccuracy >= 70 ? 'text-emerald-600' : stats.averageAccuracy >= 40 ? 'text-amber-600' : 'text-rose-500'}`}>
                                    {stats.averageAccuracy >= 70 ? 'Yüksek' : stats.averageAccuracy >= 40 ? 'Orta' : 'Geliştirilebilir'}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-[#59615a]">En iyi seri</span>
                                <span className="text-sm font-medium text-[#2c342e]">
                                    {Math.max(...stats.recentActivity.map(() => 0), 0) || '—'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Hızlı Yönlendirme */}
                    <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-6">
                        <h4 className="font-bold text-[#2c342e] mb-4">Hızlı Erişim</h4>
                        <div className="space-y-2">
                            {[
                                { href: '/quiz', Icon: Brain, label: 'Yeni Quiz Başlat', color: 'text-[#386948]', bg: 'bg-[#386948]/10' },
                                { href: '/flashcards', Icon: Sparkles, label: 'Flashcard Çalış', color: 'text-violet-600', bg: 'bg-violet-50' },
                                { href: '/notes', Icon: BookOpen, label: 'Ders Notları', color: 'text-rose-600', bg: 'bg-rose-50' },
                            ].map(({ href, Icon, label, color, bg }) => (
                                <Link key={href} href={href} className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#f0f5ee] rounded-xl transition-colors group">
                                    <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center shrink-0`}>
                                        <Icon size={15} className={color} />
                                    </div>
                                    <span className="text-sm font-semibold text-[#2c342e] group-hover:text-[#386948] transition-colors">{label}</span>
                                    <ChevronRight size={14} className="ml-auto text-[#abb4ac] group-hover:text-[#386948] group-hover:translate-x-0.5 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, subValue }: { icon: React.ReactNode, label: string, value: string, subValue: string }) {
    return (
        <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-6 hover:border-[#386948]/30 transition-colors shadow-sm">
            <div className="w-10 h-10 bg-[#f0f5ee] rounded-xl flex items-center justify-center mb-4">
                {icon}
            </div>
            <div className="text-2xl font-bold text-[#2c342e] mb-1">{value}</div>
            <div className="text-sm font-medium text-[#2c342e] mb-1">{label}</div>
            <div className="text-xs text-[#59615a]">{subValue}</div>
        </div>
    );
}
