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
    Zap
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
    const [isPlaying, setIsPlaying] = useState(false);

    const handleSelectMode = (mode: QuizMode) => {
        setSelectedMode(mode);
        setIsPlaying(true);
    };

    const handleEndQuiz = () => {
        setIsPlaying(false);
        setSelectedMode(null);
    };

    // If playing, show QuizSession
    if (isPlaying && selectedMode) {
        return <QuizSession mode={selectedMode} onEnd={handleEndQuiz} />;
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

                                {/* Stats */}
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 rounded-lg">
                                        <Zap size={14} className="text-amber-400" />
                                        <span className="text-xs text-slate-300">{mode.questionCount} Soru</span>
                                    </div>
                                    {mode.enabled && (
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-lg">
                                            <Trophy size={14} className="text-emerald-400" />
                                            <span className="text-xs text-emerald-400">Hazır</span>
                                        </div>
                                    )}
                                </div>
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
                        Toplam <span className="text-emerald-400 font-medium">27+ soru</span> • 4 farklı mod
                    </p>
                </div>
            </div>
        </main>
    );
}
