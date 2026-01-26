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
    Hash
} from 'lucide-react';
import { storageService } from '@/lib/storage';
import { UserStats, QuizResult, QuizMode } from '@/types/quiz';
import Link from 'next/link';

export default function StatsDashboard() {
    const [stats, setStats] = useState<UserStats | null>(null);

    useEffect(() => {
        // Fetch stats on client-side only
        const data = storageService.getUserStats();
        // Use a microtask to avoid synchronous setState warning
        Promise.resolve().then(() => setStats(data));
    }, []);

    if (!stats || stats.totalQuizzes === 0) {
        return (
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="text-slate-500" size={32} />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Henüz Veri Yok</h2>
                <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                    İstatistiklerinizin oluşması için en az bir quizi tamamlamanız gerekiyor.
                </p>
                <Link
                    href="/quiz"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-bold transition-all"
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
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <BarChart3 size={20} className="text-indigo-400" />
                            Kategori Performansı
                        </h3>

                        <div className="space-y-5">
                            {Object.entries(stats.categoryPerformance).map(([category, data]) => (
                                <div key={category} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-300 capitalize">{category}</span>
                                        <span className="text-slate-400">
                                            {data.correctAnswers} / {data.totalAnswers} doğru (%{data.accuracy})
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-1000"
                                            style={{ width: `${data.accuracy}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent History Table */}
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
                        <div className="p-6 border-b border-slate-700/50 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-white">Son Aktiviteler</h3>
                            <button
                                onClick={handleClearHistory}
                                className="text-slate-500 hover:text-red-400 transition-colors p-2"
                                title="Geçmişi Temizle"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-900/50">
                                    <tr className="text-xs uppercase tracking-wider text-slate-500">
                                        <th className="px-6 py-4 font-semibold">Tarih</th>
                                        <th className="px-6 py-4 font-semibold">Mod</th>
                                        <th className="px-6 py-4 font-semibold">Doğru / Soru</th>
                                        <th className="px-6 py-4 font-semibold">Başarı</th>
                                        <th className="px-6 py-4 font-semibold text-right">Puan</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-700/30">
                                    {stats.recentActivity.map((result) => (
                                        <tr key={result.id} className="hover:bg-slate-700/20 transition-colors">
                                            <td className="px-6 py-4 text-sm text-slate-400">
                                                {new Date(result.date).toLocaleDateString('tr-TR')}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-700/50 text-xs text-slate-300 capitalize">
                                                    {getModeIcon(result.mode)}
                                                    {result.mode === 'map' ? 'Harita' : result.mode}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-white">
                                                {result.correctCount} / {result.totalQuestions}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`text-sm font-medium ${result.accuracy >= 70 ? 'text-emerald-400' : result.accuracy >= 40 ? 'text-amber-400' : 'text-rose-400'}`}>
                                                    %{result.accuracy}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right font-bold text-white">
                                                {result.score}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Sidebar / Tips */}
                <div className="space-y-6">
                    <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-2xl p-6">
                        <h4 className="font-bold text-indigo-300 mb-3 flex items-center gap-2">
                            <TrendingUp size={18} />
                            Gelişim Önerisi
                        </h4>
                        <p className="text-sm text-indigo-100/70 leading-relaxed mb-4">
                            {stats.averageAccuracy < 50
                                ? "Temel konuları tekrar etmek için İnteraktif Atlas modülünü kullanabilirsiniz."
                                : "Başarı oranınızı %80'in üzerine çıkarmak için yanlış yaptığınız kategorilere odaklanın."}
                        </p>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                        <h4 className="font-bold text-white mb-4">Hızlı İstatistik</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-400">Ort. Süre</span>
                                <span className="text-sm font-medium text-white">
                                    {Math.round(stats.recentActivity.reduce((a, b) => a + b.duration, 0) / stats.recentActivity.length)} sn
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-400">Verimlilik</span>
                                <span className="text-sm font-medium text-white">Yüksek</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, subValue }: { icon: React.ReactNode, label: string, value: string, subValue: string }) {
    return (
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-colors">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center mb-4">
                {icon}
            </div>
            <div className="text-2xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm font-medium text-slate-300 mb-1">{label}</div>
            <div className="text-xs text-slate-500">{subValue}</div>
        </div>
    );
}
