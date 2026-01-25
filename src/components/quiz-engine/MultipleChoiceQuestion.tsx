'use client';

import { useState } from 'react';
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
            return 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 hover:border-indigo-500/50';
        }

        if (index === question.correctIndex) {
            return 'bg-green-500/20 border-green-500 text-green-400';
        }

        if (index === selectedIndex && index !== question.correctIndex) {
            return 'bg-red-500/20 border-red-500 text-red-400';
        }

        return 'bg-slate-800/30 border-slate-700/50 opacity-50';
    };

    const optionLabels = ['A', 'B', 'C', 'D', 'E'];

    return (
        <div className="flex items-center justify-center min-h-screen pt-20 pb-8 px-4">
            <div className="w-full max-w-2xl">
                {/* Question Card */}
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-8 mb-6">
                    <div className="text-xs text-indigo-400 uppercase tracking-wide mb-2">
                        {question.category} • {question.difficulty}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                        {question.text}
                    </h2>
                </div>

                {/* Options */}
                <div className="space-y-3">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(index)}
                            disabled={disabled || selectedIndex !== null}
                            className={`
                                w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200
                                ${getOptionStyle(index)}
                                ${disabled || selectedIndex !== null ? 'cursor-default' : 'cursor-pointer'}
                            `}
                        >
                            <div className={`
                                w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg
                                ${selectedIndex === null
                                    ? 'bg-slate-700 text-slate-300'
                                    : index === question.correctIndex
                                        ? 'bg-green-500 text-white'
                                        : index === selectedIndex
                                            ? 'bg-red-500 text-white'
                                            : 'bg-slate-700/50 text-slate-500'
                                }
                            `}>
                                {optionLabels[index]}
                            </div>
                            <span className="text-left text-white font-medium flex-1">
                                {option}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
