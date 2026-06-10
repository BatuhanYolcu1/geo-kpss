'use client';

import { useState } from 'react';
import { Target, Sparkles, BookOpen } from 'lucide-react';
import type { MultipleChoiceQuestion as MCQuestion } from '@/types/quiz';

interface Props {
    question: MCQuestion;
    onAnswer: (isCorrect: boolean, points: number, explanation?: string) => void;
    disabled: boolean;
}

const categoryLabel: Record<string, string> = {
    physical: 'Fiziki Coğrafya',
    economic: 'Ekonomik Coğrafya',
    regions: 'Coğrafi Bölgeler',
    human: 'Nüfus & Yerleşme',
    mixed: 'Karma',
    tourism: 'Turizm',
};

const difficultyLabel: Record<string, string> = {
    easy: 'Kolay',
    medium: 'Orta Seviye',
    hard: 'Zor',
};

export default function MultipleChoiceQuestion({ question, onAnswer, disabled }: Props) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleSelect = (index: number) => {
        if (disabled || selectedIndex !== null) return;
        setSelectedIndex(index);
        const isCorrect = index === question.correctIndex;
        onAnswer(isCorrect, isCorrect ? question.points : 0, question.explanation);
    };

    const getOptionStyle = (index: number) => {
        if (selectedIndex === null) {
            return 'bg-white border-[#abb4ac]/40 hover:border-[#386948]/50 hover:bg-[#f0f5ee] hover:translate-x-1';
        }
        if (index === question.correctIndex) return 'bg-emerald-50 border-emerald-400 shadow-sm';
        if (index === selectedIndex) return 'bg-rose-50 border-rose-400 animate-shake';
        return 'bg-[#f0f5ee] border-[#abb4ac]/30 opacity-50';
    };

    const optionLabels = ['A', 'B', 'C', 'D', 'E'];

    return (
        <div className="flex items-center justify-center min-h-screen pt-20 pb-10 px-3 sm:px-4 bg-[#f7faf4]">
            <div className="w-full max-w-2xl animate-slide-up">

                {/* Question Card */}
                <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-[#abb4ac]/40 shadow-md mb-5 sm:mb-8">
                    {/* Tags */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#386948]/10 rounded-full border border-[#386948]/20">
                            <BookOpen size={12} className="text-[#386948]" />
                            <span className="text-[10px] font-black text-[#386948] uppercase tracking-widest">
                                {categoryLabel[question.category] ?? question.category}
                            </span>
                        </div>
                        <div className="px-3 py-1 bg-[#f0f5ee] rounded-full border border-[#abb4ac]/40">
                            <span className="text-[10px] font-black text-[#59615a] uppercase tracking-widest">
                                {difficultyLabel[question.difficulty] ?? question.difficulty}
                            </span>
                        </div>
                    </div>

                    {/* Question Text */}
                    <div className="relative">
                        <Sparkles size={20} className="absolute -top-4 -left-4 text-[#386948]/20" />
                        <h2 className="text-base sm:text-xl md:text-2xl font-black text-[#2c342e] leading-snug tracking-tight">
                            {question.text}
                        </h2>
                    </div>
                </div>

                {/* Options */}
                <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3 ml-2">
                        <Target size={13} className="text-[#747d75]" />
                        <span className="text-[10px] font-black text-[#747d75] uppercase tracking-widest">LÜTFEN BİR SEÇENEK BELİRLEYİN</span>
                    </div>

                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(index)}
                            disabled={disabled || selectedIndex !== null}
                            className={`w-full flex items-center gap-3 p-3 sm:p-4 rounded-2xl border-2 transition-all duration-200 text-left group
                                ${getOptionStyle(index)}
                                ${disabled || selectedIndex !== null ? 'cursor-default' : 'cursor-pointer'}`}
                        >
                            {/* Label */}
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-black text-sm sm:text-base shrink-0 transition-all
                                ${selectedIndex === null
                                    ? 'bg-[#f0f5ee] text-[#59615a] group-hover:bg-[#386948] group-hover:text-white'
                                    : index === question.correctIndex
                                        ? 'bg-emerald-500 text-white'
                                        : index === selectedIndex
                                            ? 'bg-rose-500 text-white'
                                            : 'bg-[#e9f0e8] text-[#747d75]'}`}>
                                {optionLabels[index]}
                            </div>

                            {/* Text */}
                            <span className={`font-semibold text-sm sm:text-base flex-1 transition-colors leading-snug
                                ${selectedIndex !== null && index !== question.correctIndex && index !== selectedIndex
                                    ? 'text-[#747d75]'
                                    : 'text-[#2c342e]'}`}>
                                {option}
                            </span>

                            {selectedIndex === null && (
                                <Sparkles size={14} className="text-[#386948]/30 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                            )}
                        </button>
                    ))}
                </div>

                <p className="mt-6 sm:mt-8 text-center text-[10px] font-bold text-[#747d75] uppercase tracking-widest">
                    DOĞRU CEVAP İÇİN +{question.points} PUAN KAZANACAKSINIZ
                </p>
            </div>
        </div>
    );
}
