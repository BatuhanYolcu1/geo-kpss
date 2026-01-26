'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, Sparkles, AlertCircle } from 'lucide-react';
import type { TrueFalseQuestion as TFQuestion } from '@/types/quiz';

interface Props {
    question: TFQuestion;
    onAnswer: (isCorrect: boolean, points: number, explanation?: string) => void;
    disabled: boolean;
}

export default function TrueFalseQuestion({ question, onAnswer, disabled }: Props) {
    const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

    const handleSelect = (answer: boolean) => {
        if (disabled || selectedAnswer !== null) return;

        setSelectedAnswer(answer);
        const isCorrect = answer === question.isTrue;
        const points = isCorrect ? question.points : 0;
        onAnswer(isCorrect, points, question.explanation);
    };

    const getButtonStyle = (buttonValue: boolean) => {
        const isTrueAction = buttonValue === true;

        if (selectedAnswer === null) {
            return isTrueAction
                ? 'bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500 hover:-translate-y-1'
                : 'bg-rose-500/10 border-rose-500/30 hover:bg-rose-500/20 hover:border-rose-500 hover:-translate-y-1';
        }

        // After answering
        if (buttonValue === question.isTrue) {
            return 'bg-emerald-500/20 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] z-10';
        }

        if (buttonValue === selectedAnswer && buttonValue !== question.isTrue) {
            return 'bg-rose-500/20 border-rose-500 animate-shake opacity-100';
        }

        return 'glass-premium border-white/5 opacity-30 grayscale';
    };

    return (
        <div className="flex items-center justify-center min-h-screen pt-24 pb-12 px-4 bg-slate-950/20">
            <div className="w-full max-w-3xl animate-slide-up">

                {/* Information Badge */}
                <div className="flex justify-center mb-6">
                    <div className="px-4 py-1.5 glass-premium rounded-full border-white/10 flex items-center gap-2">
                        <AlertCircle size={14} className="text-amber-400" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">
                            {question.category} • DOĞRU MU? YANLIŞ MI?
                        </span>
                    </div>
                </div>

                {/* Main Statement Card */}
                <div className="relative mb-12 group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-800 rounded-[3rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

                    <div className="relative glass-premium rounded-[3rem] p-10 md:p-14 border-white/10 shadow-3xl text-center overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <Sparkles size={32} className="mx-auto mb-6 text-indigo-500/20 animate-pulse" />

                        <h2 className="text-2xl md:text-4xl font-black text-white leading-[1.3] tracking-tight">
                            &quot;{question.statement}&quot;
                        </h2>

                        <div className="mt-8 pt-8 border-t border-white/5 inline-flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">ÖNERME ANALİZİ</span>
                        </div>
                    </div>
                </div>

                {/* True/False Interaction Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button
                        onClick={() => handleSelect(true)}
                        disabled={disabled || selectedAnswer !== null}
                        className={`
                            group relative flex flex-col items-center justify-center gap-4 p-8 rounded-[2rem] border-2 transition-all duration-300
                            ${getButtonStyle(true)}
                            ${disabled || selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'}
                        `}
                    >
                        <div className={`
                            w-20 h-20 rounded-[1.5rem] flex items-center justify-center transition-all duration-300
                            ${selectedAnswer === null
                                ? 'bg-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white'
                                : question.isTrue
                                    ? 'bg-emerald-500 text-white animate-pulse-success'
                                    : 'bg-white/5 text-slate-600'
                            }
                        `}>
                            <CheckCircle2 size={40} className={selectedAnswer === null ? 'transition-transform' : ''} />
                        </div>
                        <div className="text-center">
                            <span className={`block text-3xl font-black tracking-tighter ${selectedAnswer === null ? 'text-emerald-400' : question.isTrue ? 'text-white' : 'text-slate-600'
                                }`}>DOĞRU</span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 block">TRUE</span>
                        </div>
                    </button>

                    <button
                        onClick={() => handleSelect(false)}
                        disabled={disabled || selectedAnswer !== null}
                        className={`
                            group relative flex flex-col items-center justify-center gap-4 p-8 rounded-[2rem] border-2 transition-all duration-300
                            ${getButtonStyle(false)}
                            ${disabled || selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'}
                        `}
                    >
                        <div className={`
                            w-20 h-20 rounded-[1.5rem] flex items-center justify-center transition-all duration-300
                            ${selectedAnswer === null
                                ? 'bg-rose-500/20 text-rose-400 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white'
                                : !question.isTrue
                                    ? 'bg-rose-500 text-white animate-shake'
                                    : 'bg-white/5 text-slate-600'
                            }
                        `}>
                            <XCircle size={40} className={selectedAnswer === null ? 'transition-transform' : ''} />
                        </div>
                        <div className="text-center">
                            <span className={`block text-3xl font-black tracking-tighter ${selectedAnswer === null ? 'text-rose-400' : !question.isTrue ? 'text-white' : 'text-slate-600'
                                }`}>YANLIŞ</span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 block">FALSE</span>
                        </div>
                    </button>
                </div>

                <div className="mt-12 text-center overflow-hidden">
                    <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 rounded-full border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hızlı karar ver, puanları topla!</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
