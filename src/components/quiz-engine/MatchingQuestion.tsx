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
    const [shuffledRight, setShuffledRight] = useState<{ id: number; text: string }[]>([]);

    const audioCtx = useRef<AudioContext | null>(null);

    const playSound = (frequency: number, type: OscillatorType, duration: number) => {
        try {
            if (!audioCtx.current) {
                audioCtx.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
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
        playSound(523.25, 'sine', 0.1);
        setTimeout(() => playSound(659.25, 'sine', 0.15), 50);
    };

    const playErrorSound = () => playSound(220, 'sawtooth', 0.2);

    useEffect(() => {
        const items = question.pairs.map((p, i) => ({ id: i, text: p.right }));
        items.sort(() => Math.random() - 0.5);
        // eslint-disable-next-line
        setShuffledRight(items);
    }, [question.pairs]);

    const handleLeftClick = (index: number) => {
        if (disabled || submitted || matches.has(index)) return;
        setSelectedLeft(selectedLeft === index ? null : index);
        setWrongSelection(null);
    };

    const handleRightClick = (item: { id: number; text: string }) => {
        if (disabled || submitted || selectedLeft === null || matches.has(selectedLeft)) return;
        if (selectedLeft === item.id) {
            const newMatches = new Map(matches);
            newMatches.set(selectedLeft, item.id);
            setMatches(newMatches);
            setCorrectSelection(item.id);
            playSuccessSound();
            setTimeout(() => {
                setCorrectSelection(null);
                setSelectedLeft(null);
                if (newMatches.size === question.pairs.length) {
                    setSubmitted(true);
                    onAnswer(true, question.points, 'Tebrikler! Tüm eşleşmeler doğru.');
                }
            }, 600);
        } else {
            setWrongSelection(item.id);
            playErrorSound();
            setTimeout(() => setWrongSelection(null), 500);
        }
    };

    const categoryLabel: Record<string, string> = {
        physical: 'Fiziki Coğrafya',
        economic: 'Ekonomik Coğrafya',
        regions: 'Coğrafi Bölgeler',
        agriculture: 'Tarım',
        mines: 'Madenler',
        cities: 'Şehirler',
        tourism: 'Turizm',
        human: 'Nüfus',
        industry: 'Sanayi',
        rivers: 'Akarsular',
        energy: 'Enerji',
    };

    return (
        <div className="flex items-center justify-center min-h-screen pt-20 pb-8 px-4 bg-[#f7faf4]">
            <div className="w-full max-w-4xl animate-slide-up">

                {/* Header */}
                <div className="bg-white rounded-3xl p-7 mb-8 border border-[#abb4ac]/40 shadow-md text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#386948] via-emerald-400 to-[#386948]" />
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <Sparkles size={15} className="text-amber-500" />
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                            {categoryLabel[question.category] ?? question.category} • EŞLEŞTİRME
                        </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-[#2c342e] mb-4">
                        {question.instruction}
                    </h2>
                    <div className="flex items-center justify-center gap-4 text-[#59615a] text-sm">
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#386948]" />
                            <span className="font-medium">Terim Seç</span>
                        </div>
                        <ArrowRight size={14} />
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-rose-500" />
                            <span className="font-medium">Eşini Bul</span>
                        </div>
                    </div>
                </div>

                {/* Matching Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Sol Sütun */}
                    <div className="space-y-3">
                        <h3 className="text-center text-[10px] font-black text-[#747d75] uppercase tracking-[0.2em] mb-4">SOL SÜTUN: TERİMLER</h3>
                        {question.pairs.map((pair, index) => {
                            const isSelected = selectedLeft === index;
                            const isMatched = matches.has(index);
                            return (
                                <button
                                    key={`left-${index}`}
                                    onClick={() => handleLeftClick(index)}
                                    disabled={disabled || submitted || isMatched}
                                    className={`w-full p-4 rounded-2xl border-2 transition-all duration-200 text-left font-semibold
                                        ${isMatched
                                            ? 'bg-emerald-50 border-emerald-300 opacity-70'
                                            : isSelected
                                                ? 'bg-[#386948] border-[#386948] translate-x-1 shadow-md'
                                                : 'bg-white border-[#abb4ac]/40 hover:border-[#386948]/50 hover:bg-[#f0f5ee] cursor-pointer'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={`font-bold text-base
                                            ${isMatched ? 'text-emerald-700' : isSelected ? 'text-white' : 'text-[#2c342e]'}`}>
                                            {pair.left}
                                        </span>
                                        {isMatched && <Check size={18} className="text-emerald-500 shrink-0" />}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Sağ Sütun */}
                    <div className="space-y-3">
                        <h3 className="text-center text-[10px] font-black text-[#747d75] uppercase tracking-[0.2em] mb-4">SAĞ SÜTUN: EŞLEŞMELER</h3>
                        {shuffledRight.map((item, idx) => {
                            const isAlreadyMatched = Array.from(matches.values()).includes(item.id);
                            const isBeingValidated = correctSelection === item.id;
                            const isWrong = wrongSelection === item.id;
                            const isActive = selectedLeft !== null && !isAlreadyMatched;

                            return (
                                <button
                                    key={`right-${idx}`}
                                    onClick={() => handleRightClick(item)}
                                    disabled={disabled || submitted || isAlreadyMatched || selectedLeft === null}
                                    className={`w-full p-4 rounded-2xl border-2 transition-all duration-200 text-left font-semibold
                                        ${isAlreadyMatched
                                            ? 'bg-emerald-50 border-emerald-300 opacity-70'
                                            : isBeingValidated
                                                ? 'bg-emerald-50 border-emerald-400 animate-pulse-success'
                                                : isWrong
                                                    ? 'bg-rose-50 border-rose-400 animate-shake'
                                                    : isActive
                                                        ? 'bg-white border-rose-200 hover:border-rose-400 hover:bg-rose-50 cursor-pointer'
                                                        : 'bg-[#f0f5ee] border-[#abb4ac]/30 cursor-default opacity-60'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={`font-bold text-base
                                            ${isAlreadyMatched
                                                ? 'text-emerald-700'
                                                : isActive
                                                    ? 'text-[#2c342e]'
                                                    : 'text-[#59615a]'}`}>
                                            {item.text}
                                        </span>
                                        {isAlreadyMatched && <Check size={18} className="text-emerald-500 shrink-0" />}
                                        {isWrong && <X size={18} className="text-rose-500 shrink-0" />}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Progress */}
                <div className="mt-10 flex flex-col items-center gap-3">
                    <div className="flex gap-2">
                        {question.pairs.map((_, i) => (
                            <div key={i}
                                className={`h-2 rounded-full transition-all duration-500 ${i < matches.size
                                    ? 'w-8 bg-emerald-500'
                                    : 'w-4 bg-[#dce5db]'}`} />
                        ))}
                    </div>
                    <span className="text-xs font-bold text-[#747d75] uppercase tracking-widest">
                        {matches.size} / {question.pairs.length} TAMAMLANDI
                    </span>
                </div>

                {/* Completion */}
                {submitted && (
                    <div className="mt-8 animate-popup text-center">
                        <div className="bg-white rounded-3xl p-8 border border-emerald-300 shadow-md">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trophy className="text-emerald-600" size={30} />
                            </div>
                            <h3 className="text-2xl font-black text-[#2c342e] mb-2">Harika İş!</h3>
                            <p className="text-[#59615a] mb-6">Tüm terimleri doğru eşleştirdin.</p>
                            <button onClick={onNext}
                                className="w-full py-4 bg-[#386948] hover:bg-[#2b5d3c] rounded-2xl font-black text-white transition-all flex items-center justify-center gap-3 group">
                                SONRAKİ SORU
                                <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
