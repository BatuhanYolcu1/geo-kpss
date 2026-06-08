'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import {
    Home,
    ChevronRight,
    RotateCcw,
    Check,
    X,
    Flame,
    Brain,
    Sparkles,
    ArrowLeft,
    ArrowRight,
    Layers,
    Trophy,
    Star,
    BookOpen,
    Mountain,
    Globe,
    CloudRain,
    TrendingUp,
    Landmark,
    Waves,
    MapPin,
    Sprout,
    Users,
    AlertTriangle,
} from 'lucide-react';
import { flashcardDecks } from '@/data/flashcard-data';
import { useFlashcardStore } from '@/stores/flashcardStore';
import type { Flashcard, FlashcardCategory } from '@/types/flashcard';

const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe size={24} />,
    Mountain: <Mountain size={24} />,
    Waves: <Waves size={24} />,
    CloudRain: <CloudRain size={24} />,
    TrendingUp: <TrendingUp size={24} />,
    Landmark: <Landmark size={24} />,
    MapPin: <MapPin size={24} />,
    Sprout: <Sprout size={24} />,
    Users: <Users size={24} />,
    AlertTriangle: <AlertTriangle size={24} />,
};

export default function FlashcardsPage() {
    const [selectedDeck, setSelectedDeck] = useState<FlashcardCategory | null>(null);
    const [sessionCards, setSessionCards] = useState<Flashcard[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [sessionCorrect, setSessionCorrect] = useState(0);
    const [sessionTotal, setSessionTotal] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [animDir, setAnimDir] = useState<'left' | 'right' | null>(null);

    const { markCard, updateStreak, getCardBox, streakDays, totalReviewed, totalCorrect, cardProgress } =
        useFlashcardStore();

    const currentCard = sessionCards[currentIndex];

    // Shuffling uses Math.random, which is impure — must run in an event handler,
    // never during render (useMemo) or as a derived-state effect.
    const startDeck = useCallback((deck: FlashcardCategory) => {
        setSessionCards([...deck.cards].sort(() => Math.random() - 0.5));
        setSelectedDeck(deck);
    }, []);

    const handleFlip = useCallback(() => {
        setIsFlipped((prev) => !prev);
    }, []);

    const handleAnswer = useCallback(
        (correct: boolean) => {
            if (!currentCard) return;

            markCard(currentCard.id, correct);
            updateStreak();
            setSessionTotal((prev) => prev + 1);
            if (correct) setSessionCorrect((prev) => prev + 1);

            // Animate out
            setAnimDir(correct ? 'right' : 'left');

            setTimeout(() => {
                if (currentIndex < sessionCards.length - 1) {
                    setCurrentIndex((prev) => prev + 1);
                    setIsFlipped(false);
                    setAnimDir(null);
                } else {
                    setShowResult(true);
                    setAnimDir(null);
                }
            }, 300);
        },
        [currentCard, currentIndex, sessionCards.length, markCard, updateStreak]
    );

    const handleRestart = () => {
        setCurrentIndex(0);
        setIsFlipped(false);
        setSessionCorrect(0);
        setSessionTotal(0);
        setShowResult(false);
        setAnimDir(null);
    };

    const handleBackToDecks = () => {
        setSelectedDeck(null);
        setSessionCards([]);
        handleRestart();
    };

    // Keyboard controls
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (!selectedDeck || showResult) return;
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                handleFlip();
            } else if (e.key === 'ArrowRight' && isFlipped) {
                handleAnswer(true);
            } else if (e.key === 'ArrowLeft' && isFlipped) {
                handleAnswer(false);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [selectedDeck, showResult, isFlipped, handleFlip, handleAnswer]);

    // Get mastery percentage for a deck
    const getDeckMastery = (deck: FlashcardCategory) => {
        const total = deck.cards.length;
        if (total === 0) return 0;
        const mastered = deck.cards.filter((c) => (cardProgress[c.id]?.box || 1) >= 4).length;
        return Math.round((mastered / total) * 100);
    };

    // ===== RESULT SCREEN =====
    if (showResult && selectedDeck) {
        const accuracy = sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0;
        const ratingText = accuracy >= 90 ? 'Mükemmel!' : accuracy >= 70 ? 'Harika!' : accuracy >= 50 ? 'İyi!' : 'Devam Et!';
        const RatingIcon = accuracy >= 90 ? Trophy : accuracy >= 70 ? Star : accuracy >= 50 ? Check : RotateCcw;
        const ratingIconColor = accuracy >= 90 ? 'text-amber-500' : accuracy >= 70 ? 'text-violet-500' : accuracy >= 50 ? 'text-emerald-500' : 'text-[#386948]';
        const ratingIconBg = accuracy >= 90 ? 'bg-amber-50' : accuracy >= 70 ? 'bg-violet-50' : accuracy >= 50 ? 'bg-emerald-50' : 'bg-[#386948]/5';

        return (
            <main className="min-h-screen bg-[#f7faf4] text-[#2c342e] flex items-center justify-center p-6">
                <div className="max-w-md w-full text-center space-y-6">
                    {/* Icon */}
                    <div className={`w-20 h-20 ${ratingIconBg} rounded-3xl flex items-center justify-center mx-auto`}>
                        <RatingIcon size={40} className={ratingIconColor} />
                    </div>

                    <div>
                        <h1 className="text-3xl font-black text-[#2c342e]">{ratingText}</h1>
                        <p className="text-[#59615a] mt-1">
                            {selectedDeck.title} destesi tamamlandı
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-4">
                            <div className="text-2xl font-black text-emerald-600">{sessionCorrect}</div>
                            <div className="text-xs text-[#59615a] font-bold">Doğru</div>
                        </div>
                        <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-4">
                            <div className="text-2xl font-black text-rose-500">{sessionTotal - sessionCorrect}</div>
                            <div className="text-xs text-[#59615a] font-bold">Yanlış</div>
                        </div>
                        <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-4">
                            <div className="text-2xl font-black text-[#386948]">%{accuracy}</div>
                            <div className="text-xs text-[#59615a] font-bold">Başarı</div>
                        </div>
                    </div>

                    {/* Sıradaki adım */}
                    <div>
                        <p className="text-[10px] font-black text-[#747d75] uppercase tracking-widest mb-3">Sıradaki Adım</p>
                        <Link
                            href="/quiz"
                            className="flex items-center justify-between w-full px-5 py-4 bg-white border border-[#abb4ac]/40 hover:border-[#386948]/40 hover:bg-[#f0f5ee] rounded-2xl transition-all duration-200 group mb-2"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-[#386948]/10 rounded-xl flex items-center justify-center">
                                    <Brain size={18} className="text-[#386948]" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-[#2c342e] text-sm">Quiz&apos;le Test Et</div>
                                    <div className="text-xs text-[#59615a]">Öğrendiklerini KPSS formatında sına</div>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-[#386948] group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <Link
                            href="/notes"
                            className="flex items-center justify-between w-full px-5 py-4 bg-white border border-[#abb4ac]/40 hover:border-rose-300/60 hover:bg-rose-50/50 rounded-2xl transition-all duration-200 group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-rose-50 rounded-xl flex items-center justify-center">
                                    <BookOpen size={18} className="text-rose-600" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-[#2c342e] text-sm">Notları Tekrar Oku</div>
                                    <div className="text-xs text-[#59615a]">Eksikleri müfredat üzerinden tamamla</div>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-rose-500 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={handleRestart}
                            className="flex-1 py-3.5 bg-[#386948] hover:bg-[#2b5d3c] text-white rounded-2xl font-bold transition-colors flex items-center justify-center gap-2"
                        >
                            <RotateCcw size={18} /> Tekrar
                        </button>
                        <button
                            onClick={handleBackToDecks}
                            className="flex-1 py-3.5 bg-[#f0f5ee] hover:bg-[#e9f0e8] border border-[#abb4ac]/40 text-[#2c342e] rounded-2xl font-bold transition-colors"
                        >
                            Desteler
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    // ===== STUDY SESSION =====
    if (selectedDeck && currentCard) {
        const progress = ((currentIndex + 1) / sessionCards.length) * 100;
        const cardBox = getCardBox(currentCard.id);

        return (
            <main className="min-h-screen bg-[#f7faf4] text-[#2c342e] flex flex-col">
                {/* Top Bar */}
                <div className="px-6 py-4 flex items-center justify-between border-b border-[#abb4ac]/40">
                    <button
                        onClick={handleBackToDecks}
                        className="flex items-center gap-2 text-[#59615a] hover:text-[#2c342e] transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span className="text-sm font-medium">Geri</span>
                    </button>
                    <div className="text-sm font-bold text-[#59615a]">
                        {currentIndex + 1} / {sessionCards.length}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Flame size={16} className="text-orange-500" />
                        <span className="font-bold text-orange-500">{streakDays}</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-[#e9f0e8]">
                    <div
                        className="h-full bg-gradient-to-r from-[#386948] to-emerald-500 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Card Area */}
                <div className="flex-1 flex items-center justify-center p-6">
                    <div className="w-full max-w-lg" style={{ perspective: '1000px' }}>
                        <div
                            onClick={handleFlip}
                            className={`relative w-full min-h-[360px] cursor-pointer transition-all duration-500 ${animDir === 'right'
                                ? 'translate-x-[120%] opacity-0 rotate-6'
                                : animDir === 'left'
                                    ? '-translate-x-[120%] opacity-0 -rotate-6'
                                    : ''
                                }`}
                            style={{
                                transformStyle: 'preserve-3d',
                                transform: `${isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'} ${animDir === 'right' ? 'translateX(120%) rotate(6deg)' : animDir === 'left' ? 'translateX(-120%) rotate(-6deg)' : ''}`,
                                transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                            }}
                        >
                            {/* Front */}
                            <div
                                className="absolute inset-0 rounded-3xl bg-white border border-[#abb4ac]/40 p-8 flex flex-col items-center justify-center text-center shadow-md"
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${currentCard.difficulty === 'easy'
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    : currentCard.difficulty === 'medium'
                                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                    }`}>
                                    {currentCard.difficulty === 'easy' ? 'Kolay' : currentCard.difficulty === 'medium' ? 'Orta' : 'Zor'}
                                </div>
                                <p className="text-xl md:text-2xl font-bold leading-relaxed text-[#2c342e]">
                                    {currentCard.front}
                                </p>
                                <div className="mt-8 flex items-center gap-2 text-[#59615a] text-sm">
                                    <RotateCcw size={14} />
                                    <span>Cevabı görmek için tıkla</span>
                                </div>

                                {/* Box indicator */}
                                <div className="absolute bottom-4 right-4 flex gap-1">
                                    {[1, 2, 3, 4, 5].map((b) => (
                                        <div
                                            key={b}
                                            className={`w-2 h-2 rounded-full ${b <= cardBox ? 'bg-[#386948]' : 'bg-[#abb4ac]/40'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Back */}
                            <div
                                className="absolute inset-0 rounded-3xl bg-[#e9f0e8] border border-[#386948]/20 p-8 flex flex-col items-center justify-center text-center shadow-md"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                }}
                            >
                                <div className="text-lg md:text-xl leading-relaxed whitespace-pre-line text-[#2c342e]">
                                    {currentCard.back}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="pb-8 px-6">
                    {isFlipped ? (
                        <div className="flex gap-4 max-w-lg mx-auto">
                            <button
                                onClick={() => handleAnswer(false)}
                                className="flex-1 py-4 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-2xl font-bold text-rose-500 transition-all flex items-center justify-center gap-2"
                            >
                                <X size={20} /> Bilmedim
                            </button>
                            <button
                                onClick={() => handleAnswer(true)}
                                className="flex-1 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-2xl font-bold text-emerald-600 transition-all flex items-center justify-center gap-2"
                            >
                                <Check size={20} /> Bildim
                            </button>
                        </div>
                    ) : (
                        <div className="text-center text-[#59615a] text-sm">
                            <kbd className="px-2 py-1 bg-[#e9f0e8] border border-[#abb4ac]/40 rounded text-xs mr-1">Space</kbd> ile çevir •
                            <kbd className="px-2 py-1 bg-[#e9f0e8] border border-[#abb4ac]/40 rounded text-xs mx-1">←</kbd> Bilmedim •
                            <kbd className="px-2 py-1 bg-[#e9f0e8] border border-[#abb4ac]/40 rounded text-xs ml-1">→</kbd> Bildim
                        </div>
                    )}
                </div>
            </main>
        );
    }

    // ===== DECK SELECTION =====
    return (
        <main className="min-h-screen bg-[#f7faf4] text-[#2c342e]">
            {/* Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#b9efc5]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#e9f0e8]/40 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-[#59615a] hover:text-[#2c342e] transition-colors"
                    >
                        <Home size={20} />
                        <span>Ana Sayfa</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full">
                            <Flame size={16} className="text-orange-500" />
                            <span className="text-sm font-bold text-orange-600">{streakDays} gün seri</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#386948]/10 border border-[#386948]/20 rounded-full">
                            <Brain size={16} className="text-[#386948]" />
                            <span className="text-sm font-bold text-[#386948]">{totalReviewed} tekrar</span>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#2c342e]">
                        Flashcard Çalışması
                    </h1>
                    <p className="text-lg text-[#59615a] max-w-2xl mx-auto">
                        Spaced Repetition sistemiyle etkili öğrenme. Kartları çevir, bilginizi test edin.
                    </p>
                </div>

                {/* Overall Stats */}
                {totalReviewed > 0 && (
                    <div className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto">
                        <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-4 text-center">
                            <div className="text-2xl font-black text-[#2c342e]">{totalReviewed}</div>
                            <div className="text-xs text-[#59615a] font-bold">Toplam Tekrar</div>
                        </div>
                        <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-4 text-center">
                            <div className="text-2xl font-black text-emerald-600">
                                %{totalReviewed > 0 ? Math.round((totalCorrect / totalReviewed) * 100) : 0}
                            </div>
                            <div className="text-xs text-[#59615a] font-bold">Başarı</div>
                        </div>
                        <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-4 text-center">
                            <div className="text-2xl font-black text-orange-500">{streakDays}</div>
                            <div className="text-xs text-[#59615a] font-bold">Gün Serisi</div>
                        </div>
                    </div>
                )}

                {/* Deck Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {flashcardDecks.map((deck) => {
                        const mastery = getDeckMastery(deck);
                        return (
                            <button
                                key={deck.id}
                                onClick={() => startDeck(deck)}
                                className="group relative overflow-hidden rounded-3xl bg-white border border-[#abb4ac]/40 hover:border-[#386948]/40 p-6 text-left transition-all duration-300 hover:bg-[#f0f5ee] hover:scale-[1.02] shadow-sm hover:shadow-md"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${deck.color} opacity-[0.05] group-hover:opacity-10 transition-opacity blur-2xl translate-x-8 -translate-y-8`} />

                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${deck.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                    {iconMap[deck.icon] || <Layers size={24} />}
                                </div>

                                <h3 className="text-lg font-bold text-[#2c342e] mb-1">{deck.title}</h3>
                                <p className="text-sm text-[#59615a] mb-4">
                                    {deck.cards.length} kart
                                </p>

                                {/* Mastery Bar */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-[#59615a] font-medium">Hakimiyet</span>
                                        <span className="text-[#59615a] font-bold">%{mastery}</span>
                                    </div>
                                    <div className="h-1.5 bg-[#e9f0e8] rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${deck.color} rounded-full transition-all duration-500`}
                                            style={{ width: `${mastery}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ChevronRight size={20} className="text-white" />
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
