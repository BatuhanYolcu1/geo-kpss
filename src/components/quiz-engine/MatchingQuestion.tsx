'use client';

import { useState, useEffect, useRef } from 'react';
import { Check, X, ArrowRight, ChevronRight, Trophy, Sparkles } from 'lucide-react';
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
    const [wrongSelection, setWrongSelection] = useState<number | null>(null);
    const [correctSelection, setCorrectSelection] = useState<number | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [shuffledRight, setShuffledRight] = useState<{ id: number, text: string }[]>([]);

    // Audio Context for feedback sounds
    const audioCtx = useRef<AudioContext | null>(null);

    const playSound = (frequency: number, type: OscillatorType, duration: number) => {
        try {
            if (!audioCtx.current) {
                audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            const osc = audioCtx.current.createOscillator();
            const gain = audioCtx.current.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(frequency, audioCtx.current.currentTime);

            gain.gain.setValueAtTime(0.1, audioCtx.current.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.current.currentTime + duration);

            osc.connect(gain);
            gain.connect(audioCtx.current.destination);

            osc.start();
            osc.stop(audioCtx.current.currentTime + duration);
        } catch (e) {
            console.warn('Audio feedback failed', e);
        }
    };

    const playSuccessSound = () => {
        playSound(523.25, 'sine', 0.1); // C5
        setTimeout(() => playSound(659.25, 'sine', 0.15), 50); // E5
    };

    const playErrorSound = () => {
        playSound(220, 'sawtooth', 0.2); // A3
    };

    useEffect(() => {
        const rightItems = question.pairs.map((p, i) => ({ id: i, text: p.right }));
        rightItems.sort(() => Math.random() - 0.5);
        setShuffledRight(rightItems);
    }, [question.pairs]);

    const handleLeftClick = (index: number) => {
        if (disabled || submitted || matches.has(index)) return;
        setSelectedLeft(selectedLeft === index ? null : index);
        setWrongSelection(null);
    };

    const handleRightClick = (rightItem: { id: number, text: string }) => {
        if (disabled || submitted || selectedLeft === null || matches.has(selectedLeft)) return;

        // Instant validation
        if (selectedLeft === rightItem.id) {
            // Correct match
            const newMatches = new Map(matches);
            newMatches.set(selectedLeft, rightItem.id);
            setMatches(newMatches);
            setCorrectSelection(rightItem.id);
            playSuccessSound();

            setTimeout(() => {
                setCorrectSelection(null);
                setSelectedLeft(null);

                // Final check
                if (newMatches.size === question.pairs.length) {
                    setSubmitted(true);
                    onAnswer(true, question.points, 'Tebrikler! Tüm eşleşmeler doğru.');
                }
            }, 600);
        } else {
            // Wrong match
            setWrongSelection(rightItem.id);
            playErrorSound();
            setTimeout(() => setWrongSelection(null), 500);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen pt-20 pb-8 px-4 bg-slate-950/20">
            <div className="w-full max-w-4xl animate-slide-up">
                {/* Header Section */}
                <div className="glass-premium rounded-3xl p-8 mb-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500" />
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <Sparkles size={16} className="text-amber-400 animate-pulse" />
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                            {question.category} • PREMIUM EŞLEŞTİRME
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                        {question.instruction}
                    </h2>
                    <div className="flex items-center justify-center gap-4 text-slate-400 text-sm">
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                            <span>Terim Seç</span>
                        </div>
                        <ArrowRight size={14} />
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-rose-500" />
                            <span>Eşini Bul</span>
                        </div>
                    </div>
                </div>

                {/* Matching Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    {/* Left Column (Terms) */}
                    <div className="space-y-4">
                        <h3 className="text-center text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">SOL SÜTUN: TERİMLER</h3>
                        {question.pairs.map((pair, index) => {
                            const isSelected = selectedLeft === index;
                            const isMatched = matches.has(index);
                            return (
                                <button
                                    key={`left-${index}`}
                                    onClick={() => handleLeftClick(index)}
                                    disabled={disabled || submitted || isMatched}
                                    className={`
                                        w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left relative overflow-hidden group
                                        ${isMatched
                                            ? 'glass-premium border-emerald-500/50 opacity-60 scale-[0.98]'
                                            : isSelected
                                                ? 'bg-indigo-600 border-indigo-400 shadow-[0_0_20px_rgba(79,70,229,0.4)] translate-x-2'
                                                : 'glass-premium border-white/5 hover:border-white/20 hover:bg-white/5'
                                        }
                                        ${correctSelection === index ? 'animate-pulse-success border-green-500' : ''}
                                    `}
                                >
                                    <div className="flex items-center justify-between relative z-10">
                                        <span className={`font-bold text-lg ${isMatched ? 'text-emerald-400' : 'text-white'}`}>
                                            {pair.left}
                                        </span>
                                        {isMatched && <Check size={20} className="text-emerald-400" />}
                                    </div>
                                    {isSelected && !isMatched && (
                                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse" />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column (Matches) */}
                    <div className="space-y-4">
                        <h3 className="text-center text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">SAĞ SÜTUN: EŞLEŞMELER</h3>
                        {shuffledRight.map((item, idx) => {
                            const isAlreadyMatched = Array.from(matches.values()).includes(item.id);
                            const isBeingValidated = correctSelection === item.id;
                            const isWrong = wrongSelection === item.id;

                            return (
                                <button
                                    key={`right-${idx}`}
                                    onClick={() => handleRightClick(item)}
                                    disabled={disabled || submitted || isAlreadyMatched || selectedLeft === null}
                                    className={`
                                        w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left group
                                        ${isAlreadyMatched
                                            ? 'glass-premium border-emerald-500/50 opacity-60'
                                            : selectedLeft !== null
                                                ? 'glass-premium border-rose-500/20 hover:border-rose-500/50 cursor-pointer hover:bg-rose-500/5'
                                                : 'glass-premium border-white/5 opacity-40 cursor-default'
                                        }
                                        ${isBeingValidated ? 'animate-pulse-success border-green-500 bg-green-500/10' : ''}
                                        ${isWrong ? 'animate-shake border-red-500 bg-red-500/10' : ''}
                                    `}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={`font-bold text-lg ${isAlreadyMatched ? 'text-emerald-400' : 'text-slate-200 group-hover:text-white'}`}>
                                            {item.text}
                                        </span>
                                        {isAlreadyMatched && <Check size={20} className="text-emerald-400" />}
                                        {isWrong && <X size={20} className="text-red-500" />}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Progress Visual */}
                <div className="mt-12 flex flex-col items-center gap-4">
                    <div className="flex gap-2">
                        {question.pairs.map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 rounded-full transition-all duration-500 ${i < matches.size ? 'w-8 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'w-4 bg-slate-800'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        {matches.size} / {question.pairs.length} TAMAMLANDI
                    </span>
                </div>

                {/* Completion Modal */}
                {submitted && (
                    <div className="mt-8 animate-popup text-center">
                        <div className="glass-premium rounded-3xl p-8 border-emerald-500/30">
                            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trophy className="text-emerald-400" size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">Harika İş!</h3>
                            <p className="text-slate-400 mb-6">Mükemmel bir hızla tüm terimleri doğru eşleştirdin.</p>
                            <button
                                onClick={onNext}
                                className="w-full py-5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-2xl font-black text-white transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 group"
                            >
                                SONRAKİ SORU
                                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
