'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import {
    Clock, ChevronLeft, ChevronRight, Flag, CheckCircle2,
    XCircle, Minus, BarChart3, RotateCcw, Home, AlertTriangle,
    BookOpen, Trophy, Target, Timer
} from 'lucide-react';
import { multipleChoiceQuestions, multipleChoiceQuestionsExtra, trueFalseQuestions, trueFalseQuestionsExtra } from '@/data/mock-quiz-data';
import type { MultipleChoiceQuestion, TrueFalseQuestion } from '@/types/quiz';

// ─── TYPES ───────────────────────────────────────────────────────
type ExamPhase = 'setup' | 'running' | 'finished' | 'review';
type ExamQuestion = MultipleChoiceQuestion | TrueFalseQuestion;

interface ExamPreset {
    id: string;
    name: string;
    subtitle: string;
    questionCount: number;
    durationMinutes: number;
    badge?: string;
}

const PRESETS: ExamPreset[] = [
    { id: 'mini', name: 'Mini Test', subtitle: 'Hızlı tekrar', questionCount: 20, durationMinutes: 20 },
    { id: 'pratik', name: 'Pratik Sınav', subtitle: 'Standart çalışma', questionCount: 40, durationMinutes: 40, badge: 'Önerilen' },
    { id: 'tam', name: 'Tam Sınav', subtitle: 'KPSS formatı', questionCount: 80, durationMinutes: 80 },
];

const CATEGORY_LABELS: Record<string, string> = {
    physical: 'Fiziki Coğrafya',
    economic: 'Ekonomik Coğrafya',
    human: 'Beşeri Coğrafya',
    climate: 'İklim',
    rivers: 'Akarsular',
    agriculture: 'Tarım',
    energy: 'Enerji',
    tourism: 'Turizm',
    culture: 'Kültür',
    regions: 'Bölgeler',
    mixed: 'Karma',
};

function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ─── SETUP SCREEN ────────────────────────────────────────────────
function SetupScreen({ onStart }: { onStart: (preset: ExamPreset) => void }) {
    const [selected, setSelected] = useState<string>('pratik');

    return (
        <main className="min-h-screen bg-[#f7faf4] flex flex-col items-center justify-center p-6">
            <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#b9efc5]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#e9f0e8]/50 rounded-full blur-3xl" />
            </div>

            <div className="w-full max-w-2xl">
                {/* Header */}
                <div className="text-center mb-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#747d75] hover:text-[#2c342e] mb-6 transition-colors">
                        <Home size={14} />
                        Ana Sayfaya Dön
                    </Link>
                    <div className="w-14 h-14 bg-[#386948]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Timer size={28} className="text-[#386948]" />
                    </div>
                    <h1 className="text-3xl font-black text-[#2c342e] mb-2">Sınav Simülasyonu</h1>
                    <p className="text-[#59615a]">KPSS formatında zamanlı sınav. Süre dolunca sınav otomatik teslim edilir.</p>
                </div>

                {/* Presets */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {PRESETS.map((preset) => (
                        <button
                            key={preset.id}
                            onClick={() => setSelected(preset.id)}
                            className={`relative p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                                selected === preset.id
                                    ? 'border-[#386948] bg-[#386948]/5 shadow-sm shadow-[#386948]/10'
                                    : 'border-[#abb4ac]/40 bg-white hover:border-[#386948]/40'
                            }`}
                        >
                            {preset.badge && (
                                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-[#386948] text-white text-[10px] font-bold rounded-full tracking-wide whitespace-nowrap">
                                    {preset.badge}
                                </span>
                            )}
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-3 ${selected === preset.id ? 'bg-[#386948]/15' : 'bg-[#f0f5ee]'}`}>
                                <Target size={16} className={selected === preset.id ? 'text-[#386948]' : 'text-[#59615a]'} />
                            </div>
                            <div className="font-black text-[#2c342e] text-base mb-0.5">{preset.name}</div>
                            <div className="text-xs text-[#747d75] mb-3">{preset.subtitle}</div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-1.5 text-xs text-[#59615a]">
                                    <BookOpen size={11} />
                                    <span className="font-semibold">{preset.questionCount}</span> soru
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-[#59615a]">
                                    <Clock size={11} />
                                    <span className="font-semibold">{preset.durationMinutes}</span> dakika
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Info box */}
                <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-4 mb-6 flex gap-3">
                    <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <div className="text-sm text-[#59615a] leading-relaxed">
                        Sorular <strong className="text-[#2c342e]">çoktan seçmeli ve doğru/yanlış</strong> formatında karışık olarak gelir.
                        Süre dolunca sınav otomatik teslim edilir. Sınav başladıktan sonra çıkamazsınız.
                    </div>
                </div>

                {/* Start button */}
                <button
                    onClick={() => {
                        const preset = PRESETS.find(p => p.id === selected)!;
                        onStart(preset);
                    }}
                    className="w-full py-4 bg-[#386948] hover:bg-[#2b5d3c] text-white rounded-2xl font-black text-base transition-all shadow-sm shadow-[#386948]/20 flex items-center justify-center gap-2"
                >
                    Sınavı Başlat
                    <ChevronRight size={18} />
                </button>
            </div>
        </main>
    );
}

// ─── QUESTION DISPLAY ────────────────────────────────────────────
function QuestionView({
    question,
    questionNumber,
    totalQuestions,
    answer,
    flagged,
    onAnswer,
    onToggleFlag,
}: {
    question: ExamQuestion;
    questionNumber: number;
    totalQuestions: number;
    answer: number | boolean | null;
    flagged: boolean;
    onAnswer: (val: number | boolean) => void;
    onToggleFlag: () => void;
}) {
    const isMC = question.type === 'multiple_choice';
    const isAnswered = answer !== null;

    return (
        <div className="flex flex-col gap-5">
            {/* Question header */}
            <div className="flex items-start justify-between gap-3">
                <div>
                    <span className="text-xs font-bold text-[#747d75] uppercase tracking-wider">
                        Soru {questionNumber} / {totalQuestions}
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                            question.difficulty === 'easy' ? 'bg-emerald-50 text-emerald-700' :
                            question.difficulty === 'medium' ? 'bg-amber-50 text-amber-700' :
                            'bg-rose-50 text-rose-700'
                        }`}>
                            {question.difficulty === 'easy' ? 'Kolay' : question.difficulty === 'medium' ? 'Orta' : 'Zor'}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#f0f5ee] text-[#59615a] font-medium">
                            {CATEGORY_LABELS[question.category] || question.category}
                        </span>
                    </div>
                </div>
                <button
                    onClick={onToggleFlag}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        flagged
                            ? 'bg-amber-100 text-amber-700 border border-amber-200'
                            : 'bg-[#f0f5ee] text-[#747d75] hover:text-amber-600 border border-transparent'
                    }`}
                >
                    <Flag size={13} />
                    {flagged ? 'İşaretli' : 'İşaretle'}
                </button>
            </div>

            {/* Question text */}
            <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-5">
                <p className="text-[#2c342e] font-semibold text-base leading-relaxed">
                    {isMC
                        ? (question as MultipleChoiceQuestion).text
                        : (question as TrueFalseQuestion).statement
                    }
                </p>
            </div>

            {/* Options */}
            {isMC ? (
                <div className="space-y-2.5">
                    {(question as MultipleChoiceQuestion).options.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={() => onAnswer(idx)}
                            className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-150 ${
                                answer === idx
                                    ? 'border-[#386948] bg-[#386948]/8 shadow-sm'
                                    : 'border-[#abb4ac]/40 bg-white hover:border-[#386948]/50 hover:bg-[#f7faf4]'
                            }`}
                        >
                            <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                                answer === idx
                                    ? 'bg-[#386948] text-white'
                                    : 'bg-[#f0f5ee] text-[#59615a]'
                            }`}>
                                {String.fromCharCode(65 + idx)}
                            </span>
                            <span className={`text-sm font-medium leading-snug ${answer === idx ? 'text-[#386948]' : 'text-[#2c342e]'}`}>
                                {opt}
                            </span>
                        </button>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-3">
                    {[
                        { label: 'Doğru', value: true },
                        { label: 'Yanlış', value: false },
                    ].map(({ label, value }) => (
                        <button
                            key={label}
                            onClick={() => onAnswer(value)}
                            className={`p-5 rounded-xl border-2 font-black text-base transition-all duration-150 ${
                                answer === value
                                    ? 'border-[#386948] bg-[#386948]/8 text-[#386948]'
                                    : 'border-[#abb4ac]/40 bg-white hover:border-[#386948]/50 text-[#2c342e]'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            )}

            {!isAnswered && (
                <p className="text-center text-xs text-[#abb4ac]">Bir seçenek seçin — istediğiniz zaman değiştirebilirsiniz.</p>
            )}
        </div>
    );
}

// ─── RUNNING SCREEN ──────────────────────────────────────────────
function RunningScreen({
    questions,
    preset,
    onFinish,
}: {
    questions: ExamQuestion[];
    preset: ExamPreset;
    onFinish: (answers: (number | boolean | null)[], flagged: boolean[], timeTaken: number) => void;
}) {
    const totalSeconds = preset.durationMinutes * 60;
    const [timeLeft, setTimeLeft] = useState(totalSeconds);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<(number | boolean | null)[]>(
        Array(questions.length).fill(null)
    );
    const [flagged, setFlagged] = useState<boolean[]>(
        Array(questions.length).fill(false)
    );
    const [showConfirm, setShowConfirm] = useState(false);
    const startRef = useRef(Date.now());
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const handleFinish = useCallback((ans: (number | boolean | null)[], fl: boolean[]) => {
        if (timerRef.current) clearInterval(timerRef.current);
        const timeTaken = Math.floor((Date.now() - startRef.current) / 1000);
        onFinish(ans, fl, timeTaken);
    }, [onFinish]);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current!);
                    setAnswers(a => { handleFinish(a, flagged); return a; });
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const answeredCount = answers.filter(a => a !== null).length;
    const progressPct = (answeredCount / questions.length) * 100;
    const timePct = (timeLeft / totalSeconds) * 100;
    const isLowTime = timeLeft < totalSeconds * 0.1; // son %10

    const handleAnswer = (val: number | boolean) => {
        setAnswers(prev => {
            const next = [...prev];
            next[currentIndex] = val;
            return next;
        });
    };

    const handleToggleFlag = () => {
        setFlagged(prev => {
            const next = [...prev];
            next[currentIndex] = !next[currentIndex];
            return next;
        });
    };

    return (
        <div className="min-h-screen bg-[#f7faf4] flex flex-col">
            {/* Top bar */}
            <div className={`sticky top-0 z-10 border-b transition-colors ${isLowTime ? 'bg-rose-50 border-rose-200' : 'bg-white border-[#abb4ac]/40'}`}>
                <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-4">
                    {/* Timer */}
                    <div className={`flex items-center gap-2 font-black text-lg tabular-nums min-w-[80px] ${isLowTime ? 'text-rose-600' : 'text-[#2c342e]'}`}>
                        <Clock size={16} className={isLowTime ? 'text-rose-500 animate-pulse' : 'text-[#386948]'} />
                        {formatTime(timeLeft)}
                    </div>

                    {/* Progress bar */}
                    <div className="flex-1">
                        <div className="flex justify-between text-[10px] font-semibold text-[#747d75] mb-1">
                            <span>{answeredCount}/{questions.length} cevaplandı</span>
                            <span>{Math.round(timePct)}% süre kaldı</span>
                        </div>
                        <div className="h-1.5 bg-[#e9f0e8] rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-500 ${isLowTime ? 'bg-rose-500' : 'bg-[#386948]'}`}
                                style={{ width: `${timePct}%` }}
                            />
                        </div>
                    </div>

                    {/* Finish button */}
                    <button
                        onClick={() => setShowConfirm(true)}
                        className="px-4 py-2 bg-[#386948] hover:bg-[#2b5d3c] text-white text-xs font-bold rounded-xl transition-colors whitespace-nowrap"
                    >
                        Teslim Et
                    </button>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-6 grid lg:grid-cols-[1fr_220px] gap-6">
                {/* Question area */}
                <div>
                    <QuestionView
                        question={questions[currentIndex]}
                        questionNumber={currentIndex + 1}
                        totalQuestions={questions.length}
                        answer={answers[currentIndex]}
                        flagged={flagged[currentIndex]}
                        onAnswer={handleAnswer}
                        onToggleFlag={handleToggleFlag}
                    />

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-6">
                        <button
                            onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
                            disabled={currentIndex === 0}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#abb4ac]/40 rounded-xl text-sm font-bold text-[#2c342e] hover:bg-[#f0f5ee] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronLeft size={16} />
                            Önceki
                        </button>

                        <span className="text-sm font-bold text-[#747d75]">
                            {currentIndex + 1} / {questions.length}
                        </span>

                        <button
                            onClick={() => setCurrentIndex(i => Math.min(questions.length - 1, i + 1))}
                            disabled={currentIndex === questions.length - 1}
                            className="flex items-center gap-2 px-4 py-2.5 bg-[#386948] rounded-xl text-sm font-bold text-white hover:bg-[#2b5d3c] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            Sonraki
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Question grid sidebar */}
                <div className="hidden lg:block">
                    <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-4 sticky top-20">
                        <div className="text-xs font-bold text-[#59615a] uppercase tracking-wider mb-3">Soru Listesi</div>
                        <div className="grid grid-cols-5 gap-1.5 mb-4">
                            {questions.map((_, idx) => {
                                const isAnswered = answers[idx] !== null;
                                const isFlagged = flagged[idx];
                                const isCurrent = idx === currentIndex;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`w-8 h-8 rounded-lg text-[11px] font-bold transition-all duration-150 ${
                                            isCurrent
                                                ? 'bg-[#386948] text-white shadow-sm'
                                                : isFlagged
                                                ? 'bg-amber-100 text-amber-700 border border-amber-200'
                                                : isAnswered
                                                ? 'bg-[#386948]/15 text-[#386948]'
                                                : 'bg-[#f0f5ee] text-[#747d75] hover:bg-[#e0ead0]'
                                        }`}
                                    >
                                        {idx + 1}
                                    </button>
                                );
                            })}
                        </div>
                        {/* Legend */}
                        <div className="space-y-1.5 pt-3 border-t border-[#f0f5ee]">
                            {[
                                { color: 'bg-[#386948]', label: 'Aktif' },
                                { color: 'bg-[#386948]/15', label: 'Cevaplı' },
                                { color: 'bg-amber-100 border border-amber-200', label: 'İşaretli' },
                                { color: 'bg-[#f0f5ee]', label: 'Boş' },
                            ].map(({ color, label }) => (
                                <div key={label} className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded ${color}`} />
                                    <span className="text-[10px] text-[#747d75]">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirm dialog */}
            {showConfirm && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl">
                        <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <AlertTriangle size={24} className="text-amber-500" />
                        </div>
                        <h3 className="text-lg font-black text-[#2c342e] text-center mb-1">Sınavı teslim et?</h3>
                        <p className="text-sm text-[#59615a] text-center mb-2">
                            <span className="font-bold text-[#2c342e]">{questions.length - answeredCount}</span> soru boş kalacak.
                        </p>
                        <p className="text-xs text-[#747d75] text-center mb-5">Bu işlem geri alınamaz.</p>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="py-3 border border-[#abb4ac]/60 rounded-xl font-bold text-sm text-[#2c342e] hover:bg-[#f0f5ee] transition-colors"
                            >
                                Geri Dön
                            </button>
                            <button
                                onClick={() => handleFinish(answers, flagged)}
                                className="py-3 bg-[#386948] rounded-xl font-bold text-sm text-white hover:bg-[#2b5d3c] transition-colors"
                            >
                                Teslim Et
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// ─── RESULTS SCREEN ──────────────────────────────────────────────
function ResultsScreen({
    questions,
    answers,
    flagged,
    timeTaken,
    preset,
    onRetry,
    onReview,
}: {
    questions: ExamQuestion[];
    answers: (number | boolean | null)[];
    flagged: boolean[];
    timeTaken: number;
    preset: ExamPreset;
    onRetry: () => void;
    onReview: () => void;
}) {
    let correct = 0;
    let wrong = 0;
    let blank = 0;

    const categoryStats: Record<string, { correct: number; total: number }> = {};

    questions.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;

        const userAns = answers[i];
        if (userAns === null) {
            blank++;
            return;
        }

        let isCorrect = false;
        if (q.type === 'multiple_choice') {
            isCorrect = userAns === (q as MultipleChoiceQuestion).correctIndex;
        } else {
            isCorrect = userAns === (q as TrueFalseQuestion).isTrue;
        }

        if (isCorrect) { correct++; categoryStats[cat].correct++; }
        else wrong++;
    });

    const score = Math.round((correct / questions.length) * 100);
    const scoreColor = score >= 70 ? 'text-[#386948]' : score >= 50 ? 'text-amber-600' : 'text-rose-600';
    const scoreBg = score >= 70 ? 'bg-[#386948]/10' : score >= 50 ? 'bg-amber-50' : 'bg-rose-50';

    return (
        <main className="min-h-screen bg-[#f7faf4] py-10 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className={`w-20 h-20 ${scoreBg} rounded-3xl flex items-center justify-center mx-auto mb-4`}>
                        <Trophy size={36} className={scoreColor} />
                    </div>
                    <h1 className="text-3xl font-black text-[#2c342e] mb-1">Sınav Tamamlandı</h1>
                    <p className="text-[#59615a]">{preset.name} · {preset.questionCount} soru</p>
                </div>

                {/* Score big */}
                <div className={`${scoreBg} rounded-3xl p-6 text-center mb-6 border ${score >= 70 ? 'border-[#386948]/20' : score >= 50 ? 'border-amber-200' : 'border-rose-200'}`}>
                    <div className={`text-6xl font-black ${scoreColor} mb-1`}>%{score}</div>
                    <div className="text-sm text-[#59615a]">
                        {score >= 70 ? 'Harika bir performans!' : score >= 50 ? 'İyi gidiyorsunuz, biraz daha çalışın.' : 'Daha fazla pratik yapmanız gerekiyor.'}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                    {[
                        { label: 'Doğru', value: correct, icon: CheckCircle2, color: 'text-[#386948] bg-[#386948]/10' },
                        { label: 'Yanlış', value: wrong, icon: XCircle, color: 'text-rose-600 bg-rose-50' },
                        { label: 'Boş', value: blank, icon: Minus, color: 'text-[#747d75] bg-[#f0f5ee]' },
                        { label: 'Süre', value: formatTime(timeTaken), icon: Clock, color: 'text-indigo-600 bg-indigo-50' },
                    ].map(({ label, value, icon: Icon, color }) => (
                        <div key={label} className="bg-white border border-[#abb4ac]/40 rounded-2xl p-4 text-center">
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center mx-auto mb-2 ${color}`}>
                                <Icon size={16} />
                            </div>
                            <div className="font-black text-[#2c342e] text-lg leading-none">{value}</div>
                            <div className="text-[10px] text-[#747d75] mt-1 font-semibold uppercase tracking-wide">{label}</div>
                        </div>
                    ))}
                </div>

                {/* Category breakdown */}
                <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-5 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <BarChart3 size={16} className="text-[#386948]" />
                        <span className="font-bold text-[#2c342e] text-sm">Konu Bazlı Sonuçlar</span>
                    </div>
                    <div className="space-y-3">
                        {Object.entries(categoryStats)
                            .sort((a, b) => b[1].total - a[1].total)
                            .map(([cat, stat]) => {
                                const pct = Math.round((stat.correct / stat.total) * 100);
                                return (
                                    <div key={cat}>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="font-semibold text-[#2c342e]">{CATEGORY_LABELS[cat] || cat}</span>
                                            <span className={`font-bold ${pct >= 70 ? 'text-[#386948]' : pct >= 50 ? 'text-amber-600' : 'text-rose-600'}`}>
                                                {stat.correct}/{stat.total} (%{pct})
                                            </span>
                                        </div>
                                        <div className="h-1.5 bg-[#f0f5ee] rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-700 ${pct >= 70 ? 'bg-[#386948]' : pct >= 50 ? 'bg-amber-400' : 'bg-rose-400'}`}
                                                style={{ width: `${pct}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <button
                        onClick={onReview}
                        className="py-3.5 bg-white border border-[#abb4ac]/40 hover:bg-[#f0f5ee] rounded-2xl font-bold text-sm text-[#2c342e] transition-colors flex items-center justify-center gap-2"
                    >
                        <BookOpen size={15} />
                        Yanlışları İncele
                    </button>
                    <button
                        onClick={onRetry}
                        className="py-3.5 bg-[#386948] hover:bg-[#2b5d3c] rounded-2xl font-bold text-sm text-white transition-colors flex items-center justify-center gap-2"
                    >
                        <RotateCcw size={15} />
                        Tekrar Dene
                    </button>
                </div>
                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 py-3 text-sm text-[#747d75] hover:text-[#2c342e] transition-colors"
                >
                    <Home size={14} />
                    Ana Sayfaya Dön
                </Link>
            </div>
        </main>
    );
}

// ─── REVIEW SCREEN ───────────────────────────────────────────────
function ReviewScreen({
    questions,
    answers,
    onBack,
}: {
    questions: ExamQuestion[];
    answers: (number | boolean | null)[];
    onBack: () => void;
}) {
    const wrong = questions
        .map((q, i) => ({ q, i, a: answers[i] }))
        .filter(({ q, a }) => {
            if (a === null) return true;
            if (q.type === 'multiple_choice') return a !== (q as MultipleChoiceQuestion).correctIndex;
            return a !== (q as TrueFalseQuestion).isTrue;
        });

    return (
        <main className="min-h-screen bg-[#f7faf4] py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <button
                        onClick={onBack}
                        className="p-2 rounded-xl bg-white border border-[#abb4ac]/40 hover:bg-[#f0f5ee] transition-colors"
                    >
                        <ChevronLeft size={18} className="text-[#2c342e]" />
                    </button>
                    <div>
                        <h2 className="font-black text-[#2c342e]">Yanlış & Boş Sorular</h2>
                        <p className="text-xs text-[#747d75]">{wrong.length} soru</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {wrong.map(({ q, i, a }) => {
                        const isMC = q.type === 'multiple_choice';
                        const correctAnswer = isMC
                            ? (q as MultipleChoiceQuestion).options[(q as MultipleChoiceQuestion).correctIndex]
                            : (q as TrueFalseQuestion).isTrue ? 'Doğru' : 'Yanlış';
                        const userAnswer = a === null
                            ? 'Boş'
                            : isMC
                            ? (q as MultipleChoiceQuestion).options[a as number]
                            : (a as boolean) ? 'Doğru' : 'Yanlış';

                        return (
                            <div key={i} className="bg-white border border-[#abb4ac]/40 rounded-2xl p-5">
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <span className="text-xs font-bold text-[#747d75]">Soru {i + 1}</span>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${a === null ? 'bg-[#f0f5ee] text-[#747d75]' : 'bg-rose-50 text-rose-600'}`}>
                                        {a === null ? 'Boş' : 'Yanlış'}
                                    </span>
                                </div>
                                <p className="text-sm font-semibold text-[#2c342e] mb-4 leading-relaxed">
                                    {isMC ? (q as MultipleChoiceQuestion).text : (q as TrueFalseQuestion).statement}
                                </p>
                                <div className="space-y-2">
                                    {a !== null && (
                                        <div className="flex items-start gap-2 text-sm">
                                            <XCircle size={14} className="text-rose-500 mt-0.5 shrink-0" />
                                            <span>
                                                <span className="text-[#747d75] font-medium">Cevabınız: </span>
                                                <span className="text-rose-600 font-semibold">{userAnswer}</span>
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 size={14} className="text-[#386948] mt-0.5 shrink-0" />
                                        <span>
                                            <span className="text-[#747d75] font-medium">Doğru cevap: </span>
                                            <span className="text-[#386948] font-semibold">{correctAnswer}</span>
                                        </span>
                                    </div>
                                    {(q as MultipleChoiceQuestion | TrueFalseQuestion).explanation && (
                                        <div className="mt-3 pt-3 border-t border-[#f0f5ee] text-xs text-[#59615a] leading-relaxed bg-[#f7faf4] rounded-xl px-3 py-2.5">
                                            {(q as MultipleChoiceQuestion | TrueFalseQuestion).explanation}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────
export default function ExamPage() {
    const [phase, setPhase] = useState<ExamPhase>('setup');
    const [preset, setPreset] = useState<ExamPreset | null>(null);
    const [questions, setQuestions] = useState<ExamQuestion[]>([]);
    const [answers, setAnswers] = useState<(number | boolean | null)[]>([]);
    const [flagged, setFlagged] = useState<boolean[]>([]);
    const [timeTaken, setTimeTaken] = useState(0);

    const allExamQuestions: ExamQuestion[] = [
        ...multipleChoiceQuestions,
        ...multipleChoiceQuestionsExtra,
        ...trueFalseQuestions,
        ...trueFalseQuestionsExtra,
    ];

    const handleStart = (selectedPreset: ExamPreset) => {
        const shuffled = shuffle(allExamQuestions).slice(0, selectedPreset.questionCount);
        setPreset(selectedPreset);
        setQuestions(shuffled);
        setAnswers(Array(shuffled.length).fill(null));
        setFlagged(Array(shuffled.length).fill(false));
        setPhase('running');
    };

    const handleFinish = (
        finalAnswers: (number | boolean | null)[],
        finalFlagged: boolean[],
        time: number
    ) => {
        setAnswers(finalAnswers);
        setFlagged(finalFlagged);
        setTimeTaken(time);
        setPhase('finished');
    };

    const handleRetry = () => {
        if (preset) handleStart(preset);
        else setPhase('setup');
    };

    if (phase === 'setup') {
        return <SetupScreen onStart={handleStart} />;
    }

    if (phase === 'running' && preset) {
        return (
            <RunningScreen
                questions={questions}
                preset={preset}
                onFinish={handleFinish}
            />
        );
    }

    if (phase === 'finished' && preset) {
        return (
            <ResultsScreen
                questions={questions}
                answers={answers}
                flagged={flagged}
                timeTaken={timeTaken}
                preset={preset}
                onRetry={handleRetry}
                onReview={() => setPhase('review')}
            />
        );
    }

    if (phase === 'review') {
        return (
            <ReviewScreen
                questions={questions}
                answers={answers}
                onBack={() => setPhase('finished')}
            />
        );
    }

    return null;
}
