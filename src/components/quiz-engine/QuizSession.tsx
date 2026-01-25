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
    XCircle
} from 'lucide-react';
import type { QuizMode, QuizQuestion, QuizAnswer } from '@/types/quiz';
import { getRandomQuestions } from '@/data/mock-quiz-data';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import TrueFalseQuestion from './TrueFalseQuestion';
import MatchingQuestion from './MatchingQuestion';
import { storageService } from '@/lib/storage';

// Dynamic import for map component
const MapQuestion = dynamic(() => import('./MapQuestion'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white">Harita yükleniyor...</div>
});

interface QuizSessionProps {
    mode: QuizMode;
    onEnd: () => void;
}

export default function QuizSession({ mode, onEnd }: QuizSessionProps) {
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
    const [startTime] = useState<number>(Date.now());
    const [categoryResults, setCategoryResults] = useState<Record<string, { total: number; correct: number }>>({});

    // Initialize questions
    useEffect(() => {
        const questionType = mode === 'map' ? 'map_pinpoint' : mode;
        const count = mode === 'map' ? 10 : mode === 'matching' ? 5 : 15;
        const loadedQuestions = getRandomQuestions(count, questionType as QuizQuestion['type']);
        setQuestions(loadedQuestions);
    }, [mode]);

    const currentQuestion = questions[currentIndex];

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

        setAnswers(prev => [...prev, {
            questionId: currentQuestion?.id || '',
            isCorrect,
            points,
            userAnswer: null,
            correctAnswer: null,
            timeSpent: 0,
        }]);

        if (currentQuestion) {
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
    }, [currentQuestion]);

    const handleNext = useCallback(() => {
        setShowFeedback(false);
        setLastResult(null);

        if (currentIndex + 1 >= questions.length) {
            setIsCompleted(true);

            // Save result to storage
            const duration = Math.floor((Date.now() - startTime) / 1000);
            const accuracy = Math.round((correctCount / questions.length) * 100);

            storageService.saveQuizResult({
                id: crypto.randomUUID(),
                date: new Date().toISOString(),
                mode,
                score,
                totalQuestions: questions.length,
                correctCount,
                accuracy,
                duration,
                categoryBreakdown: categoryResults
            });
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    }, [currentIndex, questions.length, startTime, correctCount, score, mode, categoryResults]);

    // Loading state
    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="text-white">Sorular yükleniyor...</div>
            </div>
        );
    }

    // Completed state
    if (isCompleted) {
        const accuracy = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

        return (
            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
                <div className="max-w-lg mx-auto px-6 text-center">
                    <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-8">
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                            <Trophy size={40} className="text-white" />
                        </div>

                        <h1 className="text-3xl font-bold mb-2">Quiz Tamamlandı!</h1>
                        <p className="text-slate-400 mb-8">İşte sonuçların:</p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-slate-700/50 rounded-xl p-4">
                                <div className="text-3xl font-bold text-emerald-400">{score}</div>
                                <div className="text-sm text-slate-400">Toplam Puan</div>
                            </div>
                            <div className="bg-slate-700/50 rounded-xl p-4">
                                <div className="text-3xl font-bold text-blue-400">{accuracy}%</div>
                                <div className="text-sm text-slate-400">Başarı Oranı</div>
                            </div>
                            <div className="bg-slate-700/50 rounded-xl p-4">
                                <div className="text-3xl font-bold text-green-400">{correctCount}</div>
                                <div className="text-sm text-slate-400">Doğru</div>
                            </div>
                            <div className="bg-slate-700/50 rounded-xl p-4">
                                <div className="text-3xl font-bold text-amber-400">{bestStreak}</div>
                                <div className="text-sm text-slate-400">En İyi Seri</div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => window.location.reload()}
                                className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                            >
                                <RotateCcw size={18} />
                                Tekrar Oyna
                            </button>
                            <button
                                onClick={onEnd}
                                className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                            >
                                <Home size={18} />
                                Lobi
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    // Render question based on type
    const renderQuestion = () => {
        if (!currentQuestion) return null;

        switch (currentQuestion.type) {
            case 'map_pinpoint':
                return (
                    <MapQuestion
                        key={currentQuestion.id}
                        question={currentQuestion}
                        onAnswer={handleAnswer}
                        showFeedback={showFeedback}
                    />
                );
            case 'multiple_choice':
                return (
                    <MultipleChoiceQuestion
                        key={currentQuestion.id}
                        question={currentQuestion}
                        onAnswer={handleAnswer}
                        disabled={showFeedback}
                    />
                );
            case 'true_false':
                return (
                    <TrueFalseQuestion
                        key={currentQuestion.id}
                        question={currentQuestion}
                        onAnswer={handleAnswer}
                        disabled={showFeedback}
                    />
                );
            case 'matching':
                return (
                    <MatchingQuestion
                        key={currentQuestion.id}
                        question={currentQuestion}
                        onAnswer={handleAnswer}
                        onNext={handleNext}
                        disabled={showFeedback}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <main className={`relative w-full ${mode === 'map' ? 'h-screen' : 'min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'} overflow-hidden`}>
            {/* Header - Scoreboard */}
            <div className="fixed top-4 left-4 right-4 z-[1000] flex items-center justify-between">
                {/* Left - Stats */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl">
                        <Trophy size={18} className="text-amber-400" />
                        <span className="font-bold text-white">{score}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl">
                        <Target size={18} className="text-green-400" />
                        <span className="font-medium text-white">{correctCount}</span>
                        <span className="text-slate-500">/</span>
                        <span className="text-red-400">{incorrectCount}</span>
                    </div>
                    {streak > 0 && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 rounded-xl">
                            <Flame size={18} className="text-orange-400" />
                            <span className="font-bold text-orange-400">{streak}x</span>
                        </div>
                    )}
                </div>

                {/* Right - Progress & End */}
                <div className="flex items-center gap-3">
                    <div className="px-4 py-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl">
                        <span className="text-slate-400">{currentIndex + 1}</span>
                        <span className="text-slate-600"> / </span>
                        <span className="text-white">{questions.length}</span>
                    </div>
                    <button
                        onClick={onEnd}
                        className="p-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl hover:bg-red-500/20 hover:border-red-500/30 transition-colors"
                        title="Bitir"
                    >
                        <X size={20} className="text-slate-400 hover:text-red-400" />
                    </button>
                </div>
            </div>

            {/* Question Content */}
            {renderQuestion()}

            {/* Feedback Modal (only for multiple_choice and true_false) */}
            {showFeedback && lastResult && (currentQuestion?.type === 'multiple_choice' || currentQuestion?.type === 'true_false') && (
                <div className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl p-6 max-w-md mx-4 animate-popup">
                        <div
                            className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${lastResult.isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'
                                }`}
                        >
                            {lastResult.isCorrect ? (
                                <CheckCircle size={32} className="text-green-400" />
                            ) : (
                                <XCircle size={32} className="text-red-400" />
                            )}
                        </div>

                        <h2 className={`text-2xl font-bold text-center mb-2 ${lastResult.isCorrect ? 'text-green-400' : 'text-red-400'
                            }`}>
                            {lastResult.isCorrect ? 'Doğru!' : 'Yanlış!'}
                        </h2>

                        {lastResult.explanation && (
                            <p className="text-center text-slate-400 mb-4">
                                {lastResult.explanation}
                            </p>
                        )}

                        {lastResult.points > 0 && (
                            <div className="text-center mb-6">
                                <span className="text-3xl font-bold text-emerald-400">+{lastResult.points}</span>
                                <span className="text-slate-400 ml-2">puan</span>
                            </div>
                        )}

                        <button
                            onClick={handleNext}
                            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                        >
                            {currentIndex + 1 < questions.length ? (
                                <>Sonraki Soru <ChevronRight size={20} /></>
                            ) : (
                                <>Sonuçları Gör <Trophy size={20} /></>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
