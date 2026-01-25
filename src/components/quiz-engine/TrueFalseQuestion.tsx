'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';
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
        if (selectedAnswer === null) {
            return buttonValue
                ? 'bg-green-500/20 border-green-500/50 hover:bg-green-500/30 hover:border-green-500'
                : 'bg-red-500/20 border-red-500/50 hover:bg-red-500/30 hover:border-red-500';
        }

        // After answer
        if (buttonValue === question.isTrue) {
            return 'bg-green-500/30 border-green-500 ring-2 ring-green-500/50';
        }

        if (buttonValue === selectedAnswer && buttonValue !== question.isTrue) {
            return 'bg-red-500/30 border-red-500 ring-2 ring-red-500/50';
        }

        return 'bg-slate-800/30 border-slate-700/50 opacity-50';
    };

    return (
        <div className="flex items-center justify-center min-h-screen pt-20 pb-8 px-4">
            <div className="w-full max-w-2xl text-center">
                {/* Statement Card */}
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-8 mb-8">
                    <div className="text-xs text-amber-400 uppercase tracking-wide mb-4">
                        {question.category} • {question.difficulty}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                        "{question.statement}"
                    </h2>
                </div>

                {/* True/False Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => handleSelect(true)}
                        disabled={disabled || selectedAnswer !== null}
                        className={`
                            flex flex-col items-center justify-center gap-3 p-8 rounded-2xl border-2 transition-all duration-200
                            ${getButtonStyle(true)}
                            ${disabled || selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'}
                        `}
                    >
                        <div className="w-16 h-16 rounded-full bg-green-500/30 flex items-center justify-center">
                            <Check size={32} className="text-green-400" />
                        </div>
                        <span className="text-2xl font-bold text-green-400">DOĞRU</span>
                    </button>

                    <button
                        onClick={() => handleSelect(false)}
                        disabled={disabled || selectedAnswer !== null}
                        className={`
                            flex flex-col items-center justify-center gap-3 p-8 rounded-2xl border-2 transition-all duration-200
                            ${getButtonStyle(false)}
                            ${disabled || selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'}
                        `}
                    >
                        <div className="w-16 h-16 rounded-full bg-red-500/30 flex items-center justify-center">
                            <X size={32} className="text-red-400" />
                        </div>
                        <span className="text-2xl font-bold text-red-400">YANLIŞ</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
