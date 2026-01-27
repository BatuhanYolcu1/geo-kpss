'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Home,
    Map,
    Brain,
    CheckCircle,
    Link2,
    ChevronRight,
    Trophy,
    Sparkles,
    Zap,
    X
} from 'lucide-react';
import type { QuizMode } from '@/types/quiz';
import QuizSession from '@/components/quiz-engine/QuizSession';

interface QuizModeCard {
    id: QuizMode;
    title: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
    shadowColor: string;
    questionCount: number;
    enabled: boolean;
}

const quizModes: QuizModeCard[] = [
    {
        id: 'map',
        title: 'Harita Bilgisi',
        description: 'Etiketsiz haritada konumları bulun. Mesafe ne kadar yakın, puan o kadar yüksek!',
        icon: <Map size={32} />,
        gradient: 'from-indigo-500 to-purple-600',
        shadowColor: 'shadow-indigo-500/25',
        questionCount: 15,
        enabled: true,
    },
    {
        id: 'multiple_choice',
        title: 'Deneme Sınavı',
        description: 'Klasik A/B/C/D/E formatında KPSS tarzı coğrafya soruları.',
        icon: <Brain size={32} />,
        gradient: 'from-emerald-500 to-teal-600',
        shadowColor: 'shadow-emerald-500/25',
        questionCount: 20,
        enabled: true,
    },
    {
        id: 'true_false',
        title: 'Doğru / Yanlış',
        description: 'Hızlı bilgi kontrolü. Verilen ifadeler doğru mu, yanlış mı?',
        icon: <CheckCircle size={32} />,
        gradient: 'from-amber-500 to-orange-600',
        shadowColor: 'shadow-amber-500/25',
        questionCount: 15,
        enabled: true,
    },
    {
        id: 'matching',
        title: 'Eşleştirme',
        description: 'Terimleri ve kavramları doğru şekilde eşleştirin.',
        icon: <Link2 size={32} />,
        gradient: 'from-rose-500 to-pink-600',
        shadowColor: 'shadow-rose-500/25',
        questionCount: 10,
        enabled: true,
    },
];

export default function QuizPage() {
    const [selectedMode, setSelectedMode] = useState<QuizMode | null>(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | undefined>(undefined);
    const [showMapFilters, setShowMapFilters] = useState(false);
    const [showMCQFilters, setShowMCQFilters] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleSelectMode = (mode: QuizMode) => {
        if (mode === 'map') {
            setShowMapFilters(true);
        } else if (mode === 'multiple_choice') {
            setShowMCQFilters(true);
        } else {
            setSelectedMode(mode);
            setIsPlaying(true);
        }
    };

    const startMapQuiz = (subCat?: string) => {
        setSelectedMode('map');
        setSelectedSubCategory(subCat);
        setIsPlaying(true);
        setShowMapFilters(false);
    };

    const startMCQuiz = (subCat?: string) => {
        setSelectedMode('multiple_choice');
        setSelectedSubCategory(subCat);
        setIsPlaying(true);
        setShowMCQFilters(false);
    };

    const handleEndQuiz = () => {
        setIsPlaying(false);
        setSelectedMode(null);
        setSelectedSubCategory(undefined);
    };

    // If playing, show QuizSession
    if (isPlaying && selectedMode) {
        return <QuizSession mode={selectedMode} subCategory={selectedSubCategory} onEnd={handleEndQuiz} />;
    }

    // Quiz Lobby
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <Home size={20} />
                        <span>Ana Sayfa</span>
                    </Link>

                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                        <Sparkles size={16} className="text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-300">Quiz Modu</span>
                    </div>
                </div>

                {/* Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                        Sınav Modunu Seç
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        KPSS coğrafya hazırlığı için farklı soru tiplerinde kendinizi test edin.
                    </p>
                </div>

                {/* Mode Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {quizModes.map((mode) => (
                        <button
                            key={mode.id}
                            onClick={() => mode.enabled && handleSelectMode(mode.id)}
                            disabled={!mode.enabled}
                            className={`
                                group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300
                                ${mode.enabled
                                    ? `bg-slate-800/50 hover:bg-slate-800/80 hover:scale-[1.02] hover:shadow-2xl ${mode.shadowColor}`
                                    : 'bg-slate-800/30 cursor-not-allowed opacity-60'
                                }
                                border border-slate-700/50
                            `}
                        >
                            {/* Gradient Overlay */}
                            {mode.enabled && (
                                <div className={`absolute inset-0 bg-gradient-to-br ${mode.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                            )}

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`
                                    w-16 h-16 rounded-xl flex items-center justify-center mb-4
                                    bg-gradient-to-br ${mode.gradient}
                                    ${!mode.enabled ? 'grayscale' : ''}
                                `}>
                                    {mode.icon}
                                </div>

                                {/* Content */}
                                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    {mode.title}
                                    {mode.enabled && (
                                        <ChevronRight size={20} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                    )}
                                </h2>

                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    {mode.description}
                                </p>
                            </div>

                            {/* Coming Soon */}
                            {!mode.enabled && (
                                <div className="absolute top-4 right-4 px-3 py-1 bg-slate-700 rounded-lg text-xs text-slate-400">
                                    Yakında
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Footer Info */}
                <div className="text-center">
                    <p className="text-slate-500 text-sm">
                        Toplam <span className="text-emerald-400 font-medium">100+ soru</span> • 4 farklı mod
                    </p>
                </div>
            </div>

            {/* Map Category Filter Modal */}
            {showMapFilters && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-md transition-all">
                    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-popup">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Map className="text-indigo-400" />
                                Harita Modu
                            </h2>
                            <button
                                onClick={() => setShowMapFilters(false)}
                                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                            >
                                <X size={20} className="text-slate-400" />
                            </button>
                        </div>

                        <p className="text-slate-400 mb-6">
                            Hangi alanda harita bilginizi test etmek istersiniz?
                        </p>

                        <div className="space-y-3 mb-8">
                            {[
                                { id: undefined, label: 'Karma Sınav', icon: <Sparkles size={18} />, color: 'bg-indigo-500' },
                                { id: 'physical', label: 'Fiziki Özellikler', icon: <Map size={18} />, color: 'bg-emerald-500' },
                                { id: 'economic', label: 'Ekonomik Coğrafya', icon: <Zap size={18} />, color: 'bg-amber-500' },
                                { id: 'tourism', label: 'Kültür & Turizm', icon: <Trophy size={18} />, color: 'bg-rose-500' },
                            ].map((cat) => (
                                <button
                                    key={cat.label}
                                    onClick={() => startMapQuiz(cat.id)}
                                    className="w-full p-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 rounded-xl flex items-center justify-between group transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg ${cat.color} flex items-center justify-center`}>
                                            {cat.icon}
                                        </div>
                                        <span className="font-medium">{cat.label}</span>
                                    </div>
                                    <ChevronRight size={18} className="text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setShowMapFilters(false)}
                            className="w-full py-3 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                        >
                            Vazgeç
                        </button>
                    </div>
                </div>
            )}
            {/* MCQ Category Filter Modal */}
            {showMCQFilters && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-md transition-all">
                    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-popup">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Brain className="text-indigo-400" />
                                Deneme Sınavları
                            </h2>
                            <button
                                onClick={() => setShowMCQFilters(false)}
                                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                            >
                                <X size={20} className="text-slate-400" />
                            </button>
                        </div>

                        <p className="text-slate-400 mb-6">
                            Sınav formatını veya odaklanmak istediğiniz konuyu seçin:
                        </p>

                        <div className="space-y-3 mb-8">
                            {[
                                { id: 'standard_kpss', label: 'Standart KPSS Denemesi', sub: 'Tam 18 Soru • Karma Dağılım', icon: <Trophy size={18} />, color: 'bg-gradient-to-br from-amber-500 to-orange-600' },
                                { id: 'physical', label: 'Fiziki Coğrafya', sub: 'Dağlar, İklim, Yer Şekilleri', icon: <Map size={18} />, color: 'bg-emerald-500' },
                                { id: 'economic', label: 'Beşeri & Ekonomik', sub: 'Nüfus, Sanayi, Madenler', icon: <Zap size={18} />, color: 'bg-amber-500' },
                                { id: undefined, label: 'Genel Karma Sınav', sub: '15 Soruluk Rastgele Karışım', icon: <Sparkles size={18} />, color: 'bg-indigo-500' },
                            ].map((cat) => (
                                <button
                                    key={cat.label}
                                    onClick={() => startMCQuiz(cat.id)}
                                    className="w-full p-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 rounded-xl flex items-center justify-between group transition-all"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-lg ${cat.color} flex items-center justify-center text-white`}>
                                            {cat.icon}
                                        </div>
                                        <div className="text-left">
                                            <div className="font-bold">{cat.label}</div>
                                            <div className="text-xs text-slate-500">{cat.sub}</div>
                                        </div>
                                    </div>
                                    <ChevronRight size={18} className="text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setShowMCQFilters(false)}
                            className="w-full py-3 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                        >
                            Vazgeç
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
