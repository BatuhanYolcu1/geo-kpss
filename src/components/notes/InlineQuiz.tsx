'use client';

import { useState } from 'react';
import { Target, CheckCircle2, XCircle, ArrowRight, Lightbulb } from 'lucide-react';

interface QuizQuestion {
    question: string;
    options: string[];
    correctOptionIndex: number;
    explanation?: string;
}

interface InlineQuizProps {
    quizzes: QuizQuestion[];
}

export default function InlineQuiz({ quizzes }: InlineQuizProps) {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    if (!quizzes || quizzes.length === 0) return null;

    const currentQuiz = quizzes[currentQuestionIdx];

    const handleOptionSelect = (index: number) => {
        if (isAnswered) return;

        setSelectedOption(index);
        setIsAnswered(true);

        if (index === currentQuiz.correctOptionIndex) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIdx < quizzes.length - 1) {
            setCurrentQuestionIdx(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setIsComplete(true);
        }
    };

    const handleRetry = () => {
        setCurrentQuestionIdx(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setScore(0);
        setIsComplete(false);
    };

    return (
        <div className="my-16 p-8 rounded-[2.5rem] bg-indigo-950/20 border border-indigo-500/20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                        <Target size={24} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-white">Hızlı Özel Test</h4>
                        <p className="text-slate-400 text-sm font-medium">Bölümü bitirmeden önce öğrendiklerini pekiştir</p>
                    </div>
                </div>

                {!isComplete ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-xs font-black tracking-widest text-indigo-400 uppercase">Soru {currentQuestionIdx + 1} / {quizzes.length}</span>
                        </div>

                        <h5 className="text-xl font-bold text-white mb-6 leading-relaxed">
                            {currentQuiz.question}
                        </h5>

                        <div className="space-y-3">
                            {currentQuiz.options.map((option, idx) => {
                                const isSelected = selectedOption === idx;
                                const isCorrect = idx === currentQuiz.correctOptionIndex;
                                const isWrong = isSelected && !isCorrect;

                                let stateClasses = 'bg-slate-800/50 border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 text-slate-300';

                                if (isAnswered) {
                                    if (isCorrect) {
                                        stateClasses = 'bg-emerald-500/20 border-emerald-500 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.2)] scale-[1.02]';
                                    } else if (isWrong) {
                                        stateClasses = 'bg-rose-500/20 border-rose-500 text-rose-100 animate-shake';
                                    } else {
                                        stateClasses = 'bg-slate-800/30 border-slate-700/50 text-slate-500 opacity-50';
                                    }
                                } else if (isSelected) {
                                    stateClasses = 'bg-indigo-500/20 border-indigo-500 text-indigo-100'; // Should not happen since answer is immediate
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(idx)}
                                        disabled={isAnswered}
                                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${stateClasses}`}
                                    >
                                        <span className="font-medium">{option}</span>
                                        {isAnswered && isCorrect && <CheckCircle2 size={20} className="text-emerald-500" />}
                                        {isAnswered && isWrong && <XCircle size={20} className="text-rose-500" />}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Explanation & Next Button */}
                        {isAnswered && (
                            <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                                {currentQuiz.explanation && (
                                    <div className="mb-6 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex gap-4 items-start">
                                        <Lightbulb size={24} className="text-indigo-400 shrink-0 mt-1" />
                                        <p className="text-indigo-200 text-sm leading-relaxed">{currentQuiz.explanation}</p>
                                    </div>
                                )}
                                <button
                                    onClick={handleNext}
                                    className="w-full sm:w-auto px-8 py-3 bg-white text-slate-900 font-black rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
                                >
                                    {currentQuestionIdx < quizzes.length - 1 ? 'Sıradaki Soru' : 'Sonuçları Gör'}
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    /* Results Screen */
                    <div className="text-center py-8 animate-in zoom-in-95 duration-500">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/40">
                            <span className="text-4xl font-black text-white">{score}/{quizzes.length}</span>
                        </div>
                        <h4 className="text-3xl font-black text-white mb-4">Test Tamamlandı!</h4>
                        <p className="text-slate-400 mb-8 max-w-md mx-auto">
                            {score === quizzes.length
                                ? 'Harika! Bu konuyu tam anlamıyla kavramışsın.'
                                : score >= quizzes.length / 2
                                    ? 'İyi iş çıkardın ama bazı eksiklerin var, notları tekrar gözden geçirebilirsin.'
                                    : 'Bu konuyu tekrar çalışmanı tavsiye ederim. Öğrenene kadar pes etmek yok!'}
                        </p>
                        <button
                            onClick={handleRetry}
                            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors"
                        >
                            Testi Tekrar Çöz
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
