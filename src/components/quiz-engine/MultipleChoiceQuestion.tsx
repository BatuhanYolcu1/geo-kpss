'use client';

import { useState } from 'react';
import { Target, Sparkles, BookOpen } from 'lucide-react';
import type { MultipleChoiceQuestion as MCQuestion } from '@/types/quiz';

interface Props {
    question: MCQuestion;
    onAnswer: (isCorrect: boolean, points: number, explanation?: string) => void;
    disabled: boolean;
}

export default function MultipleChoiceQuestion({ question, onAnswer, disabled }: Props) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleSelect = (index: number) => {
        if (disabled || selectedIndex !== null) return;

        setSelectedIndex(index);
        const isCorrect = index === question.correctIndex;
        const points = isCorrect ? question.points : 0;
        onAnswer(isCorrect, points, question.explanation);
    };

    const getOptionStyle = (index: number) => {
        if (selectedIndex === null) {
            return 'glass-premium border-white/5 hover:border-indigo-500/50 hover:bg-white/5 hover:translate-x-1';
        }

        if (index === question.correctIndex) {
            return 'bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]';
        }

        if (index === selectedIndex && index !== question.correctIndex) {
            return 'bg-rose-500/20 border-rose-500/50 animate-shake';
        }

        return 'glass-premium border-white/5 opacity-40 grayscale';
    };

    const optionLabels = ['A', 'B', 'C', 'D', 'E'];

    return (
        <div className="flex items-center justify-center min-h-screen pt-24 pb-12 px-4 bg-[#f7faf4]">
            <div className="w-full max-w-2xl animate-slide-up">

                {/* Question Info & Card */}
                <div className="relative mb-8 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative glass-premium rounded-[2rem] p-8 md:p-10 border-white/10 shadow-3xl">
                        {/* Tags */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                                <BookOpen size={12} className="text-indigo-400" />
                                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                                    {question.category === 'physical' ? 'Fiziki' : question.category === 'economic' ? 'Ekonomik' : 'Genel'} COĞRAFYA
                                </span>
                            </div>
                            <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    {question.difficulty === 'easy' ? 'Kolay' : question.difficulty === 'medium' ? 'Orta' : 'Zor'} SEVİYE
                                </span>
                            </div>
                        </div>

                        {/* Question Text */}
                        <div className="relative">
                            <Sparkles size={24} className="absolute -top-6 -left-6 text-indigo-500/20" />
                            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
                                {question.text}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Options Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2 ml-4">
                        <Target size={14} className="text-slate-500" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">LÜTFEN BİR SEÇENEK BELİRLEYİN</span>
                    </div>

                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(index)}
                            disabled={disabled || selectedIndex !== null}
                            className={`
                                w-full flex items-center gap-5 p-5 rounded-2xl border-2 transition-all duration-300 relative group overflow-hidden
                                ${getOptionStyle(index)}
                                ${disabled || selectedIndex !== null ? 'cursor-default' : 'cursor-pointer'}
                            `}
                        >
                            {/* Option Index Label */}
                            <div className={`
                                w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg transition-all
                                ${selectedIndex === null
                                    ? 'bg-white/5 text-slate-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:rotate-3'
                                    : index === question.correctIndex
                                        ? 'bg-emerald-500 text-white animate-pulse-success'
                                        : index === selectedIndex
                                            ? 'bg-rose-500 text-white'
                                            : 'bg-white/5 text-slate-600'
                                }
                            `}>
                                {optionLabels[index]}
                            </div>

                            {/* Option Text */}
                            <span className={`text-left font-bold text-lg flex-1 transition-colors ${selectedIndex !== null && index !== question.correctIndex && index !== selectedIndex
                                    ? 'text-slate-600'
                                    : 'text-white'
                                }`}>
                                {option}
                            </span>

                            {/* Hover Decorative Element */}
                            {selectedIndex === null && (
                                <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
                                    <Sparkles size={16} className="text-indigo-400/50" />
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                <p className="mt-8 text-center text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                    DOĞRU CEVAP İÇİN +{question.points} PUAN KAZANACAKSINIZ
                </p>
            </div>
        </div>
    );
}
