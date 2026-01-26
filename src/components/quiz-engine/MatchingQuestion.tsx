'use client';

import { useState, useEffect } from 'react';
import { Check, X, ArrowRight, ChevronRight } from 'lucide-react';
import type { MatchingQuestion as MQuestion } from '@/types/quiz';

interface Props {
    question: MQuestion;
    onAnswer: (isCorrect: boolean, points: number, explanation?: string) => void;
    onNext: () => void;
    disabled: boolean;
}

export default function MatchingQuestion({ question, onAnswer, onNext, disabled }: Props) {
    const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
    const [matches, setMatches] = useState<Map<number, number>>(new Map());
    const [submitted, setSubmitted] = useState(false);

    const [shuffledRight, setShuffledRight] = useState<number[]>([]);

    useEffect(() => {
        const indices = question.pairs.map((_, i) => i);
        indices.sort(() => Math.random() - 0.5);
        Promise.resolve().then(() => setShuffledRight(indices));
    }, [question.pairs]);

    const handleLeftClick = (index: number) => {
        if (disabled || submitted) return;
        setSelectedLeft(selectedLeft === index ? null : index);
    };

    const handleRightClick = (shuffledIndex: number) => {
        if (disabled || submitted || selectedLeft === null) return;

        const rightIndex = shuffledRight[shuffledIndex];

        // Create new match
        const newMatches = new Map(matches);

        // Remove any existing match with this left or right
        for (const [left, right] of newMatches.entries()) {
            if (left === selectedLeft || right === rightIndex) {
                newMatches.delete(left);
            }
        }

        newMatches.set(selectedLeft, rightIndex);
        setMatches(newMatches);
        setSelectedLeft(null);

        // Auto-submit when all pairs are matched
        if (newMatches.size === question.pairs.length) {
            setTimeout(() => submitAnswer(newMatches), 300);
        }
    };

    const submitAnswer = (finalMatches: Map<number, number>) => {
        setSubmitted(true);

        let correctCount = 0;
        for (const [leftIdx, rightIdx] of finalMatches.entries()) {
            if (leftIdx === rightIdx) {
                correctCount++;
            }
        }

        const isAllCorrect = correctCount === question.pairs.length;
        const points = isAllCorrect ? question.points : Math.floor((correctCount / question.pairs.length) * question.points);

        onAnswer(isAllCorrect, points, `${correctCount}/${question.pairs.length} eşleşme doğru.`);
    };

    // Check if a left item is correctly matched (only after submission)
    const isLeftCorrect = (index: number) => {
        if (!submitted) return null;
        if (!matches.has(index)) return false;
        return matches.get(index) === index;
    };

    // Get the left item that matched with this right item
    const getMatchedLeftForRight = (rightIndex: number): number | null => {
        for (const [left, right] of matches.entries()) {
            if (right === rightIndex) return left;
        }
        return null;
    };

    const getLeftStyle = (index: number) => {
        const correct = isLeftCorrect(index);

        if (submitted) {
            if (correct === true) {
                return 'bg-green-500/20 border-green-500';
            } else if (correct === false) {
                return 'bg-red-500/20 border-red-500';
            }
        }

        if (selectedLeft === index) {
            return 'bg-indigo-500/30 border-indigo-500 ring-2 ring-indigo-500/50';
        }

        if (matches.has(index)) {
            return 'bg-emerald-500/20 border-emerald-500/50';
        }

        return 'bg-slate-800/50 border-slate-700 hover:border-indigo-500/50';
    };

    const getRightStyle = (shuffledIndex: number) => {
        const rightIndex = shuffledRight[shuffledIndex];
        const matchedLeft = getMatchedLeftForRight(rightIndex);
        const isMatched = matchedLeft !== null;

        if (submitted && isMatched) {
            const isCorrect = matchedLeft === rightIndex;
            return isCorrect
                ? 'bg-green-500/20 border-green-500'
                : 'bg-red-500/20 border-red-500';
        }

        if (isMatched) {
            return 'bg-emerald-500/20 border-emerald-500/50';
        }

        return 'bg-slate-800/50 border-slate-700 hover:border-rose-500/50';
    };

    return (
        <div className="flex items-center justify-center min-h-screen pt-20 pb-8 px-4">
            <div className="w-full max-w-4xl">
                {/* Instruction */}
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 mb-6 text-center">
                    <div className="text-xs text-rose-400 uppercase tracking-wide mb-2">
                        {question.category} • Eşleştirme
                    </div>
                    <h2 className="text-xl font-bold text-white">
                        {question.instruction}
                    </h2>
                    <p className="text-sm text-slate-400 mt-2">
                        Soldaki öğeyi seçin, sonra sağdaki eşini tıklayın
                    </p>
                </div>

                {/* Matching Grid */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-3">
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-2 text-center">Terim</div>
                        {question.pairs.map((pair, index) => {
                            const correct = isLeftCorrect(index);
                            return (
                                <button
                                    key={`left-${index}`}
                                    onClick={() => handleLeftClick(index)}
                                    disabled={disabled || submitted}
                                    className={`
                                        w-full p-4 rounded-xl border-2 transition-all duration-200 text-left
                                        ${getLeftStyle(index)}
                                        ${disabled || submitted ? 'cursor-default' : 'cursor-pointer'}
                                    `}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-medium">{pair.left}</span>
                                        <div className="flex items-center gap-2">
                                            {matches.has(index) && !submitted && (
                                                <ArrowRight size={18} className="text-emerald-400" />
                                            )}
                                            {submitted && correct === true && (
                                                <Check size={18} className="text-green-400" />
                                            )}
                                            {submitted && correct === false && (
                                                <X size={18} className="text-red-400" />
                                            )}
                                        </div>
                                    </div>
                                    {/* Show correct answer if wrong */}
                                    {submitted && correct === false && (
                                        <div className="mt-2 pt-2 border-t border-slate-700 text-sm">
                                            <span className="text-slate-500">Doğru eşleşme: </span>
                                            <span className="text-green-400 font-medium">{pair.right}</span>
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-3">
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-2 text-center">Eşleşme</div>
                        {shuffledRight.map((originalIndex, shuffledIndex) => {
                            const matchedLeft = getMatchedLeftForRight(originalIndex);
                            const isCorrect = submitted && matchedLeft === originalIndex;

                            return (
                                <button
                                    key={`right-${shuffledIndex}`}
                                    onClick={() => handleRightClick(shuffledIndex)}
                                    disabled={disabled || submitted || selectedLeft === null}
                                    className={`
                                        w-full p-4 rounded-xl border-2 transition-all duration-200 text-left
                                        ${getRightStyle(shuffledIndex)}
                                        ${disabled || submitted || selectedLeft === null ? 'cursor-default' : 'cursor-pointer'}
                                    `}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-medium">
                                            {question.pairs[originalIndex].right}
                                        </span>
                                        {isCorrect && (
                                            <Check size={18} className="text-green-400" />
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Match Counter */}
                <div className="text-center mt-6">
                    <span className="text-slate-400">
                        {matches.size} / {question.pairs.length} eşleşme
                    </span>
                </div>

                {/* Results Summary (shown after submission) */}
                {submitted && (
                    <div className="mt-6 space-y-6">
                        <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 animate-slide-up">
                            <h3 className="text-sm font-semibold text-slate-300 mb-3">Doğru Eşleşmeler:</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {question.pairs.map((pair, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm">
                                        <span className="text-emerald-400">✓</span>
                                        <span className="text-white">{pair.left}</span>
                                        <ArrowRight size={14} className="text-slate-500" />
                                        <span className="text-emerald-400">{pair.right}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={onNext}
                            className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20"
                        >
                            Sonraki Soru
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

