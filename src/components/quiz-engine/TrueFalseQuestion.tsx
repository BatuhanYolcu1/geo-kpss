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
        onAnswer(isCorrect, isCorrect ? question.points : 0, question.explanation);
    };

    const getButtonStyle = (value: boolean) => {
        if (selectedAnswer === null) {
            return value
                ? 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-400 hover:-translate-y-1'
                : 'bg-rose-50 border-rose-200 hover:bg-rose-100 hover:border-rose-400 hover:-translate-y-1';
        }
        if (value === question.isTrue) return 'bg-emerald-100 border-emerald-400 shadow-md';
        if (value === selectedAnswer) return 'bg-rose-100 border-rose-400 animate-shake';
        return 'bg-[#f0f5ee] border-[#abb4ac]/40 opacity-40 grayscale';
    };

    return (
        <div className="flex items-center justify-center min-h-screen pt-24 pb-12 px-4 bg-[#f7faf4]">
            <div className="w-full max-w-3xl animate-slide-up">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <div className="px-4 py-1.5 bg-white border border-[#abb4ac]/40 rounded-full flex items-center gap-2 shadow-sm">
                        <AlertCircle size={14} className="text-amber-500" />
                        <span className="text-[10px] font-black text-[#59615a] uppercase tracking-widest">
                            {question.category} • DOĞRU MU? YANLIŞ MI?
                        </span>
                    </div>
                </div>

                {/* Statement Card */}
                <div className="relative mb-10">
                    <div className="bg-white rounded-3xl p-10 md:p-14 border border-[#abb4ac]/40 shadow-md text-center">
                        <Sparkles size={28} className="mx-auto mb-6 text-[#386948]/30" />
                        <h2 className="text-2xl md:text-3xl font-black text-[#2c342e] leading-[1.35] tracking-tight">
                            &quot;{question.statement}&quot;
                        </h2>
                        <div className="mt-8 pt-6 border-t border-[#abb4ac]/30">
                            <span className="text-xs font-bold text-[#747d75] uppercase tracking-[0.2em]">ÖNERME ANALİZİ</span>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* DOĞRU */}
                    <button
                        onClick={() => handleSelect(true)}
                        disabled={disabled || selectedAnswer !== null}
                        className={`group flex flex-col items-center justify-center gap-4 p-8 rounded-3xl border-2 transition-all duration-300
                            ${getButtonStyle(true)}
                            ${disabled || selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-200
                            ${selectedAnswer === null
                                ? 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110'
                                : question.isTrue ? 'bg-emerald-500 text-white' : 'bg-[#e9f0e8] text-[#59615a]'}`}>
                            <CheckCircle2 size={36} />
                        </div>
                        <span className={`text-2xl font-black tracking-tight
                            ${selectedAnswer === null ? 'text-emerald-600' : question.isTrue ? 'text-emerald-700' : 'text-[#59615a]'}`}>
                            DOĞRU
                        </span>
                    </button>

                    {/* YANLIŞ */}
                    <button
                        onClick={() => handleSelect(false)}
                        disabled={disabled || selectedAnswer !== null}
                        className={`group flex flex-col items-center justify-center gap-4 p-8 rounded-3xl border-2 transition-all duration-300
                            ${getButtonStyle(false)}
                            ${disabled || selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-200
                            ${selectedAnswer === null
                                ? 'bg-rose-100 text-rose-500 group-hover:bg-rose-500 group-hover:text-white group-hover:scale-110'
                                : !question.isTrue ? 'bg-rose-500 text-white' : 'bg-[#e9f0e8] text-[#59615a]'}`}>
                            <XCircle size={36} />
                        </div>
                        <span className={`text-2xl font-black tracking-tight
                            ${selectedAnswer === null ? 'text-rose-500' : !question.isTrue ? 'text-rose-600' : 'text-[#59615a]'}`}>
                            YANLIŞ
                        </span>
                    </button>
                </div>

                <div className="mt-10 text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-[#abb4ac]/40 rounded-full shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-bold text-[#747d75] uppercase tracking-widest">Hızlı karar ver, puanları topla!</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
