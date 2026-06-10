'use client';

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import {
    Trophy,
    Target,
    Flame,
    X,
    ChevronRight,
    Home,
    RotateCcw,
    CheckCircle,
    XCircle,
    Star,
    Zap,
    Sparkles,
    BookOpen,
    BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import type { QuizMode, QuizQuestion, QuizAnswer, MapQuestion, MultipleChoiceQuestion as MCQuestionType } from '@/types/quiz';
import { getRandomQuestions, getQuestionsByType, selectAvoidingRepeats } from '@/data/mock-quiz-data';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import TrueFalseQuestion from './TrueFalseQuestion';
import MatchingQuestion from './MatchingQuestion';
import { storageService } from '@/lib/storage';
import { syncService } from '@/lib/syncService';
import { useUser } from '@/contexts/AuthContext';

// Dynamic import for map component
const MapQuizComponent = dynamic(() => import('./MapQuestion'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-[#e9f0e8] flex items-center justify-center text-[#2c342e] font-black animate-pulse">HARİTA YÜKLENİYOR...</div>
});

interface QuizSessionProps {
    mode: QuizMode;
    subCategory?: string;
    onEnd: () => void;
}

export default function QuizSession({ mode, subCategory, onEnd }: QuizSessionProps) {
    const { user } = useUser();
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [answers, setAnswers] = useState<QuizAnswer[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [lastResult, setLastResult] = useState<{ isCorrect: boolean; points: number; explanation?: string } | null>(null);
    const [startTime] = useState<number>(() => Date.now());
    const [categoryResults, setCategoryResults] = useState<Record<string, { total: number; correct: number }>>({});

    // Initialize questions
    useEffect(() => {
        const questionType = mode === 'map' ? 'map_pinpoint' : mode;
        let count = mode === 'map' ? 10 : mode === 'matching' ? 5 : 15;

        if (mode === 'multiple_choice' && subCategory === 'standard_kpss') {
            count = 18;
        }

        // Önceki oturumlarda gösterilen soruları al — tekrarları önlemek için kullanılacak
        const seenIds = storageService.getSeenQuestionIds();

        let loadedQuestions: QuizQuestion[] = [];

        if (mode === 'map') {
            const allMapQuestions = getQuestionsByType('map_pinpoint') as MapQuestion[];
            const filtered = subCategory
                ? allMapQuestions.filter(q => q.category === subCategory || q.subCategory === subCategory)
                : allMapQuestions;
            loadedQuestions = selectAvoidingRepeats(filtered, count, seenIds);
        } else if (mode === 'multiple_choice') {
            const allMCQuestions = getQuestionsByType('multiple_choice') as MCQuestionType[];

            if (subCategory === 'standard_kpss') {
                const phys = selectAvoidingRepeats(allMCQuestions.filter(q => q.category === 'physical'), 6, seenIds);
                const econ = selectAvoidingRepeats(allMCQuestions.filter(q => q.category === 'economic'), 10, seenIds);
                const mixed = selectAvoidingRepeats(allMCQuestions.filter(q => q.category === 'mixed'), 2, seenIds);
                loadedQuestions = [...phys, ...econ, ...mixed].sort(() => Math.random() - 0.5);
            } else {
                const filtered = subCategory
                    ? allMCQuestions.filter(q => q.category === subCategory)
                    : allMCQuestions;
                loadedQuestions = selectAvoidingRepeats(filtered, count, seenIds);
            }
        } else {
            loadedQuestions = getRandomQuestions(count, questionType as QuizQuestion['type'], seenIds);
        }

        Promise.resolve().then(() => {
            setQuestions(loadedQuestions);
            // Bu oturumda gösterilen soruları "görüldü" geçmişine kaydet
            storageService.recordSeenQuestions(loadedQuestions.map(q => q.id));
        });
    }, [mode, subCategory]);

    const handleAnswer = useCallback((isCorrect: boolean, points: number, explanation?: string) => {
        setScore(prev => prev + points);
        setCorrectCount(prev => isCorrect ? prev + 1 : prev);
        setIncorrectCount(prev => !isCorrect ? prev + 1 : prev);
        setStreak(prev => {
            const newStreak = isCorrect ? prev + 1 : 0;
            setBestStreak(best => Math.max(best, newStreak));
            return newStreak;
        });
        setLastResult({ isCorrect, points, explanation });
        setShowFeedback(true);

        const currentQuestion = questions[currentIndex];
        if (currentQuestion) {
            setAnswers(prev => [...prev, {
                questionId: currentQuestion.id,
                isCorrect,
                points,
                userAnswer: null,
                correctAnswer: null,
                timeSpent: 0,
            }]);

            setCategoryResults(prev => {
                const cat = currentQuestion.category;
                const current = prev[cat] || { total: 0, correct: 0 };
                return {
                    ...prev,
                    [cat]: {
                        total: current.total + 1,
                        correct: current.correct + (isCorrect ? 1 : 0)
                    }
                };
            });
        }
    }, [currentIndex, questions]);

    const handleNext = useCallback(() => {
        setShowFeedback(false);
        setLastResult(null);

        if (currentIndex + 1 >= questions.length) {
            setIsCompleted(true);
            const duration = Math.floor((Date.now() - startTime) / 1000);
            const accuracy = Math.round((correctCount / questions.length) * 100);

            const result = {
                id: crypto.randomUUID(),
                date: new Date().toISOString(),
                mode,
                score,
                totalQuestions: questions.length,
                correctCount,
                accuracy,
                duration,
                categoryBreakdown: categoryResults,
            };

            storageService.saveQuizResult(result);

            // Giriş yapılmışsa Supabase'e de kaydet (fire-and-forget)
            if (user) {
                syncService.pushQuizResult(user.id, result).catch(console.warn);
            }
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    }, [currentIndex, questions.length, startTime, correctCount, score, mode, categoryResults, user]);

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-[#f7faf4] flex flex-col items-center justify-center gap-6">
                <div className="w-16 h-16 border-4 border-[#386948]/20 border-t-[#386948] rounded-full animate-spin" />
                <div className="text-[#2c342e] font-black tracking-widest text-sm animate-pulse uppercase">Sorular Hazırlanıyor...</div>
            </div>
        );
    }

    if (isCompleted) {
        const accuracy = Math.round((correctCount / questions.length) * 100);

        return (
            <main className="min-h-screen bg-[#f7faf4] text-[#2c342e] flex items-center justify-center p-6">
                <div className="w-full max-w-2xl">
                    <div className="bg-white border border-[#abb4ac]/40 rounded-[2.5rem] p-6 md:p-10 text-center relative overflow-hidden shadow-md">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-[#386948] to-[#2b5d3c]" />

                        <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-5 md:mb-8 bg-gradient-to-br from-amber-400 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-500/20 rotate-3">
                            <Trophy size={32} className="text-white md:hidden" />
                            <Trophy size={48} className="text-white hidden md:block" />
                        </div>

                        <h1 className="text-2xl md:text-4xl font-black mb-2 tracking-tight text-[#2c342e]">TEBRİKLER!</h1>
                        <p className="text-sm md:text-base text-[#59615a] mb-6 md:mb-10 font-medium">Coğrafya uzmanlığına bir adım daha yaklaştın.</p>

                        <div className="grid grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-10">
                            <div className="bg-[#f0f5ee] border border-[#abb4ac]/40 rounded-2xl p-3 md:p-6">
                                <div className="text-2xl md:text-4xl font-black text-emerald-600 mb-1">{score}</div>
                                <div className="text-[10px] font-bold text-[#59615a] uppercase tracking-widest">TOPLAM PUAN</div>
                            </div>
                            <div className="bg-[#f0f5ee] border border-[#abb4ac]/40 rounded-2xl p-3 md:p-6">
                                <div className="text-2xl md:text-4xl font-black text-blue-600 mb-1">{accuracy}%</div>
                                <div className="text-[10px] font-bold text-[#59615a] uppercase tracking-widest">BAŞARI ORANI</div>
                            </div>
                            <div className="bg-[#f0f5ee] border border-[#abb4ac]/40 rounded-2xl p-3 md:p-6">
                                <div className="text-2xl md:text-4xl font-black text-green-600 mb-1">{correctCount}</div>
                                <div className="text-[10px] font-bold text-[#59615a] uppercase tracking-widest">DOĞRU CEVAP</div>
                            </div>
                            <div className="bg-[#f0f5ee] border border-[#abb4ac]/40 rounded-2xl p-3 md:p-6">
                                <div className="text-2xl md:text-4xl font-black text-orange-500 mb-1">{bestStreak}</div>
                                <div className="text-[10px] font-bold text-[#59615a] uppercase tracking-widest">EN İYİ SERİ</div>
                            </div>
                        </div>

                        {/* Sıradaki Adım */}
                        <div className="mb-6">
                            <p className="text-[10px] font-black text-[#747d75] uppercase tracking-widest text-center mb-3">Sıradaki Adım</p>
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { href: '/flashcards', Icon: Sparkles, label: 'Flashcard', color: 'text-violet-600', bg: 'bg-violet-50', border: 'hover:border-violet-300/60' },
                                    { href: '/notes', Icon: BookOpen, label: 'Notlar', color: 'text-rose-600', bg: 'bg-rose-50', border: 'hover:border-rose-300/60' },
                                    { href: '/stats', Icon: BarChart3, label: 'İstatistik', color: 'text-amber-600', bg: 'bg-amber-50', border: 'hover:border-amber-300/60' },
                                ].map(({ href, Icon, label, color, bg, border }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={`flex flex-col items-center gap-2 py-4 bg-[#f0f5ee] border border-[#abb4ac]/40 ${border} rounded-2xl hover:bg-white hover:-translate-y-0.5 transition-all duration-200 group`}
                                    >
                                        <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <Icon size={18} className={color} />
                                        </div>
                                        <span className="text-xs font-bold text-[#59615a]">{label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={() => window.location.reload()}
                                className="flex-1 py-4 bg-[#386948] text-white hover:bg-[#2b5d3c] rounded-2xl font-black transition-all flex items-center justify-center gap-3"
                            >
                                <RotateCcw size={20} />
                                TEKRAR DENE
                            </button>
                            <button
                                onClick={onEnd}
                                className="flex-1 py-4 bg-[#f0f5ee] border border-[#abb4ac]/40 hover:bg-[#e9f0e8] text-[#2c342e] rounded-2xl font-bold transition-all flex items-center justify-center gap-3"
                            >
                                <Home size={20} />
                                Mod Seçimi
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    const currentQuestion = questions[currentIndex];

    const renderQuestion = () => {
        if (!currentQuestion) return null;
        switch (currentQuestion.type) {
            case 'map_pinpoint':
                return <MapQuizComponent key={currentQuestion.id} question={currentQuestion} onAnswer={handleAnswer} onNext={handleNext} showFeedback={showFeedback} />;
            case 'multiple_choice':
                return <MultipleChoiceQuestion key={currentQuestion.id} question={currentQuestion} onAnswer={handleAnswer} disabled={showFeedback} />;
            case 'true_false':
                return <TrueFalseQuestion key={currentQuestion.id} question={currentQuestion} onAnswer={handleAnswer} disabled={showFeedback} />;
            case 'matching':
                return <MatchingQuestion key={currentQuestion.id} question={currentQuestion} onAnswer={handleAnswer} onNext={handleNext} disabled={showFeedback} />;
            default:
                return null;
        }
    };

    return (
        <main className={`relative w-full ${mode === 'map' ? 'h-screen overflow-hidden' : 'min-h-screen bg-[#f7faf4] overflow-auto'}`}>
            {/* Header - Premium Navigation */}
            <div className="fixed top-0 left-0 right-0 z-[1000] p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                    {/* Left: Stats Badges */}
                    <div className="flex items-center gap-2">
                        <div className="glass-premium h-11 px-4 flex items-center gap-2.5 rounded-2xl shadow-sm">
                            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                <Star size={14} className="text-emerald-600 fill-emerald-600/20" />
                            </div>
                            <span className="font-black text-[#2c342e] text-lg tracking-tight">{score}</span>
                        </div>

                        <div className="glass-premium h-11 px-4 flex items-center gap-3 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-1.5">
                                <CheckCircle size={16} className="text-emerald-600" />
                                <span className="font-bold text-emerald-600">{correctCount}</span>
                            </div>
                            <div className="w-px h-4 bg-[#abb4ac]/40" />
                            <div className="flex items-center gap-1.5">
                                <XCircle size={16} className="text-rose-500" />
                                <span className="font-bold text-rose-500">{incorrectCount}</span>
                            </div>
                        </div>

                        {streak > 2 && (
                            <div className="glass-premium h-11 px-4 flex items-center gap-2 rounded-2xl border-orange-500/30 bg-orange-500/10 animate-pulse">
                                <Zap size={16} className="text-orange-500 fill-orange-500" />
                                <span className="font-black text-orange-500 uppercase text-xs tracking-widest">{streak}X SERİ!</span>
                            </div>
                        )}
                    </div>

                    {/* Right: Progress & Control */}
                    <div className="flex items-center gap-2">
                        <div className="glass-premium h-11 px-4 flex items-center gap-2 rounded-2xl shadow-sm">
                            <span className="text-[#59615a] font-bold text-xs uppercase tracking-widest">Soru</span>
                            <span className="text-[#2c342e] font-black">{currentIndex + 1}</span>
                            <span className="text-[#747d75] font-bold">/</span>
                            <span className="text-[#59615a] font-bold">{questions.length}</span>
                        </div>

                        <button
                            onClick={onEnd}
                            className="glass-premium h-11 w-11 flex items-center justify-center rounded-2xl hover:border-rose-500/50 hover:bg-rose-500/10 transition-all text-[#59615a] hover:text-rose-500"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Progress Bar with Glow */}
                <div className="w-full h-1.5 bg-[#abb4ac]/20 rounded-full overflow-hidden relative">
                    <div
                        className="h-full bg-gradient-to-r from-[#386948] to-emerald-500 transition-all duration-700 ease-out relative"
                        style={{ width: `${((currentIndex + (showFeedback ? 1 : 0)) / questions.length) * 100}%` }}
                    >
                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-white/30 blur-md" />
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className={`${mode === 'map' ? 'h-full w-full absolute inset-0 pt-0' : 'relative pt-24 pb-12'} z-10`}>
                {renderQuestion()}
            </div>

            {/* REDESIGNED: Premium Feedback Overlays */}
            {showFeedback && lastResult && (currentQuestion?.type === 'multiple_choice' || currentQuestion?.type === 'true_false') && (
                <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[#2c342e]/50 backdrop-blur-md animate-fade-in" />

                    <div className="bg-white border border-[#abb4ac]/40 w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl relative z-10 overflow-hidden">
                        {/* Header Highlight */}
                        <div className={`absolute top-0 left-0 right-0 h-1.5 ${lastResult.isCorrect ? 'bg-emerald-500' : 'bg-rose-500'}`} />

                        <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center ${lastResult.isCorrect ? 'bg-emerald-500/20' : 'bg-rose-500/20'
                            }`}>
                            {lastResult.isCorrect ? (
                                <CheckCircle size={40} className="text-emerald-400" />
                            ) : (
                                <XCircle size={40} className="text-rose-500" />
                            )}
                        </div>

                        <h2 className={`text-3xl font-black text-center mb-2 tracking-tight ${lastResult.isCorrect ? 'text-emerald-400' : 'text-rose-500'
                            }`}>
                            {lastResult.isCorrect ? 'MUHTEŞEM!' : 'HAY AKSİ!'}
                        </h2>

                        <div className="bg-[#f0f5ee] rounded-2xl p-5 mb-8 border border-[#abb4ac]/40">
                            <p className="text-center text-[#2c342e] font-medium leading-relaxed">
                                {lastResult.explanation || 'KPSS sınavında bu bilgi senin için fark yaratacak!'}
                            </p>
                        </div>

                        {lastResult.isCorrect && (
                            <div className="text-center mb-8 flex flex-col items-center">
                                <span className="text-[10px] font-black text-emerald-600/60 uppercase tracking-[0.3em] mb-1">KAZANILAN</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-5xl font-black text-[#2c342e]">+{lastResult.points}</span>
                                    <span className="text-emerald-600 font-bold">PUAN</span>
                                </div>
                            </div>
                        )}

                        <button
                            onClick={handleNext}
                            className={`w-full py-5 rounded-[1.25rem] font-black text-white transition-all flex items-center justify-center gap-3 shadow-md group ${lastResult.isCorrect
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 shadow-emerald-500/20 hover:scale-[1.02]'
                                : 'bg-[#386948] hover:bg-[#2b5d3c]'
                                }`}
                        >
                            {currentIndex + 1 < questions.length ? (
                                <>SONRAKİ SORU <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" /></>
                            ) : (
                                <>SONUÇLARI GÖR <Trophy size={24} className="group-hover:rotate-12 transition-transform" /></>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
