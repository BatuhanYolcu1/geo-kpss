'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, Bookmark, BookmarkCheck, ChevronDown, ChevronUp, Brain, CheckCircle, Trash2 } from 'lucide-react';
import {
    multipleChoiceQuestions,
    multipleChoiceQuestionsExtra,
    trueFalseQuestions,
    trueFalseQuestionsExtra,
} from '@/data/mock-quiz-data';
import type { MultipleChoiceQuestion, TrueFalseQuestion } from '@/types/quiz';

type BookmarkedQuestion = (MultipleChoiceQuestion | TrueFalseQuestion) & { bookmarkedAt?: number };

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
    medium: 'Orta',
    hard: 'Zor',
};

const difficultyColor: Record<string, string> = {
    easy: 'bg-emerald-100 text-emerald-700',
    medium: 'bg-amber-100 text-amber-700',
    hard: 'bg-rose-100 text-rose-700',
};

const allBookmarkable: (MultipleChoiceQuestion | TrueFalseQuestion)[] = [
    ...multipleChoiceQuestions,
    ...multipleChoiceQuestionsExtra,
    ...trueFalseQuestions,
    ...trueFalseQuestionsExtra,
];

export default function BookmarksPage() {
    const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem('geo_bookmarks');
        setBookmarkedIds(saved ? JSON.parse(saved) : []);
    }, []);

    const questions: BookmarkedQuestion[] = mounted
        ? allBookmarkable.filter(q => bookmarkedIds.includes(q.id))
        : [];

    const removeBookmark = (id: string) => {
        const next = bookmarkedIds.filter(bid => bid !== id);
        localStorage.setItem('geo_bookmarks', JSON.stringify(next));
        setBookmarkedIds(next);
        if (expandedId === id) setExpandedId(null);
    };

    const clearAll = () => {
        localStorage.setItem('geo_bookmarks', JSON.stringify([]));
        setBookmarkedIds([]);
        setExpandedId(null);
    };

    const getCorrectText = (q: MultipleChoiceQuestion | TrueFalseQuestion) => {
        if (q.type === 'multiple_choice') {
            const labels = ['A', 'B', 'C', 'D', 'E'];
            return `${labels[q.correctIndex]}) ${q.options[q.correctIndex]}`;
        }
        return q.isTrue ? 'DOĞRU' : 'YANLIŞ';
    };

    return (
        <main className="min-h-screen bg-[#f7faf4] text-[#2c342e] pb-28 sm:pb-12">
            {/* Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#e9f0e8]/50 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-4 py-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link
                        href="/quiz"
                        className="flex items-center gap-2 text-[#59615a] hover:text-[#2c342e] transition-colors"
                    >
                        <Home size={20} />
                        <span className="text-sm font-medium">Quiz</span>
                    </Link>
                    <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                        <Bookmark size={15} className="text-amber-600" />
                        <span className="text-sm font-bold text-amber-700">Kaydedilenler</span>
                    </div>
                </div>

                {/* Title */}
                <div className="mb-8">
                    <h1 className="text-3xl font-black text-[#2c342e] mb-2">Kaydedilen Sorular</h1>
                    <p className="text-[#59615a] text-sm">
                        {mounted
                            ? questions.length > 0
                                ? `${questions.length} soru kayıtlı — cevapları ve açıklamaları gözden geçirin.`
                                : 'Henüz soru kaydetmediniz.'
                            : 'Yükleniyor...'}
                    </p>
                </div>

                {/* Empty state */}
                {mounted && questions.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-20 h-20 rounded-3xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6">
                            <Bookmark size={32} className="text-amber-400" />
                        </div>
                        <h2 className="text-xl font-black text-[#2c342e] mb-3">Kayıtlı soru yok</h2>
                        <p className="text-[#59615a] text-sm max-w-xs mb-8">
                            Soru çözerken sağ üst köşedeki yer imi simgesine tıklayarak soruları buraya kaydedin.
                        </p>
                        <Link
                            href="/quiz"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#386948] text-white rounded-2xl font-bold text-sm hover:bg-[#2c5439] transition-colors"
                        >
                            <Brain size={16} />
                            Quiz Başlat
                        </Link>
                    </div>
                )}

                {/* Question list */}
                {mounted && questions.length > 0 && (
                    <>
                        <div className="space-y-3 mb-8">
                            {questions.map((q, idx) => {
                                const isOpen = expandedId === q.id;
                                const isMC = q.type === 'multiple_choice';
                                const mcQ = isMC ? (q as MultipleChoiceQuestion) : null;

                                return (
                                    <div
                                        key={q.id}
                                        className="bg-white rounded-2xl border border-[#abb4ac]/40 overflow-hidden shadow-sm"
                                    >
                                        {/* Card header — always visible */}
                                        <button
                                            onClick={() => setExpandedId(isOpen ? null : q.id)}
                                            className="w-full text-left p-4 flex items-start gap-3"
                                        >
                                            {/* Number */}
                                            <span className="shrink-0 w-7 h-7 rounded-lg bg-[#f0f5ee] flex items-center justify-center text-xs font-black text-[#386948] mt-0.5">
                                                {idx + 1}
                                            </span>

                                            <div className="flex-1 min-w-0">
                                                {/* Badges */}
                                                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                                    <span className="text-[10px] font-black uppercase tracking-wider text-[#386948] bg-[#386948]/10 px-2 py-0.5 rounded-full">
                                                        {categoryLabel[q.category] ?? q.category}
                                                    </span>
                                                    <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${difficultyColor[q.difficulty]}`}>
                                                        {difficultyLabel[q.difficulty]}
                                                    </span>
                                                    {isMC
                                                        ? <span className="text-[10px] font-bold text-[#59615a] flex items-center gap-1"><Brain size={10} /> Çoktan Seçmeli</span>
                                                        : <span className="text-[10px] font-bold text-[#59615a] flex items-center gap-1"><CheckCircle size={10} /> D/Y</span>
                                                    }
                                                </div>

                                                {/* Question text */}
                                                <p className="text-sm font-semibold text-[#2c342e] leading-snug line-clamp-2">
                                                    {isMC ? (q as MultipleChoiceQuestion).text : `"${(q as TrueFalseQuestion).statement}"`}
                                                </p>
                                            </div>

                                            {/* Expand icon */}
                                            <span className="shrink-0 text-[#747d75] mt-0.5">
                                                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                            </span>
                                        </button>

                                        {/* Expanded content */}
                                        {isOpen && (
                                            <div className="px-4 pb-4 border-t border-[#abb4ac]/20 pt-3 space-y-3">
                                                {/* MC options */}
                                                {mcQ && (
                                                    <div className="space-y-1.5">
                                                        {mcQ.options.map((opt, i) => (
                                                            <div
                                                                key={i}
                                                                className={`flex items-start gap-2.5 p-2 rounded-xl text-sm ${i === mcQ.correctIndex
                                                                        ? 'bg-emerald-50 border border-emerald-200'
                                                                        : 'bg-[#f7faf4]'
                                                                    }`}
                                                            >
                                                                <span className={`shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black ${i === mcQ.correctIndex
                                                                        ? 'bg-emerald-500 text-white'
                                                                        : 'bg-[#e9f0e8] text-[#59615a]'
                                                                    }`}>
                                                                    {['A', 'B', 'C', 'D', 'E'][i]}
                                                                </span>
                                                                <span className={`text-sm leading-snug ${i === mcQ.correctIndex ? 'font-semibold text-emerald-800' : 'text-[#59615a]'}`}>
                                                                    {opt}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* TF answer */}
                                                {!mcQ && (
                                                    <div className={`flex items-center gap-2 p-3 rounded-xl ${(q as TrueFalseQuestion).isTrue ? 'bg-emerald-50 border border-emerald-200' : 'bg-rose-50 border border-rose-200'}`}>
                                                        <CheckCircle size={16} className={(q as TrueFalseQuestion).isTrue ? 'text-emerald-600' : 'text-rose-500'} />
                                                        <span className="font-black text-sm">
                                                            Doğru Cevap: {(q as TrueFalseQuestion).isTrue ? 'DOĞRU' : 'YANLIŞ'}
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Explanation */}
                                                {q.explanation && (
                                                    <div className="bg-[#f0f5ee] border border-[#abb4ac]/30 rounded-xl p-3">
                                                        <p className="text-[10px] font-black text-[#386948] uppercase tracking-widest mb-1">Açıklama</p>
                                                        <p className="text-sm text-[#2c342e] leading-relaxed">{q.explanation}</p>
                                                    </div>
                                                )}

                                                {/* Remove bookmark */}
                                                <button
                                                    onClick={() => removeBookmark(q.id)}
                                                    className="flex items-center gap-2 text-xs font-bold text-[#747d75] hover:text-rose-500 transition-colors mt-1"
                                                >
                                                    <BookmarkCheck size={13} />
                                                    Kaydı Kaldır
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-[#abb4ac]/30">
                            <Link
                                href="/quiz"
                                className="flex items-center gap-2 px-5 py-2.5 bg-[#386948] text-white rounded-xl font-bold text-sm hover:bg-[#2c5439] transition-colors"
                            >
                                <Brain size={15} />
                                Quiz Başlat
                            </Link>
                            <button
                                onClick={clearAll}
                                className="flex items-center gap-2 text-sm text-[#747d75] hover:text-rose-500 transition-colors"
                            >
                                <Trash2 size={14} />
                                Tümünü Temizle
                            </button>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}
