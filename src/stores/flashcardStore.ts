import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FlashcardStats, FlashcardProgress } from '@/types/flashcard';
import { syncService } from '@/lib/syncService';

interface FlashcardStore extends FlashcardStats {
    // Actions
    markCard: (cardId: string, correct: boolean, userId?: string) => void;
    getCardBox: (cardId: string) => number;
    shouldReviewCard: (cardId: string, sessionNumber: number) => boolean;
    resetProgress: () => void;
    updateStreak: () => void;
}

const defaultStats: FlashcardStats = {
    totalReviewed: 0,
    totalCorrect: 0,
    streakDays: 0,
    lastStudyDate: null,
    cardProgress: {},
};

export const useFlashcardStore = create<FlashcardStore>()(
    persist(
        (set, get) => ({
            ...defaultStats,

            markCard: (cardId: string, correct: boolean, userId?: string) => {
                set((state) => {
                    const existing = state.cardProgress[cardId];
                    const currentBox = existing?.box || 1;

                    let newBox: 1 | 2 | 3 | 4 | 5;
                    if (correct) {
                        newBox = Math.min(currentBox + 1, 5) as 1 | 2 | 3 | 4 | 5;
                    } else {
                        newBox = 1; // Reset to box 1 on incorrect
                    }

                    const progress: FlashcardProgress = {
                        cardId,
                        box: newBox,
                        lastReviewed: new Date().toISOString(),
                        reviewCount: (existing?.reviewCount || 0) + 1,
                        correctCount: (existing?.correctCount || 0) + (correct ? 1 : 0),
                    };

                    // Giriş yapılmışsa Supabase'e de kaydet (fire-and-forget)
                    if (userId) {
                        syncService.pushSingleCardProgress(userId, progress).catch(console.warn);
                    }

                    return {
                        totalReviewed: state.totalReviewed + 1,
                        totalCorrect: state.totalCorrect + (correct ? 1 : 0),
                        cardProgress: {
                            ...state.cardProgress,
                            [cardId]: progress,
                        },
                    };
                });
            },

            getCardBox: (cardId: string) => {
                return get().cardProgress[cardId]?.box || 1;
            },

            shouldReviewCard: (cardId: string, sessionNumber: number) => {
                const progress = get().cardProgress[cardId];
                if (!progress) return true; // Never reviewed

                const reviewInterval = Math.pow(2, progress.box - 1); // 1, 2, 4, 8, 16
                return sessionNumber % reviewInterval === 0;
            },

            updateStreak: () => {
                set((state) => {
                    const today = new Date().toISOString().split('T')[0];
                    const lastDate = state.lastStudyDate;

                    if (lastDate === today) {
                        return state; // Already studied today
                    }

                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    const yesterdayStr = yesterday.toISOString().split('T')[0];

                    const newStreak = lastDate === yesterdayStr
                        ? state.streakDays + 1
                        : 1;

                    return {
                        streakDays: newStreak,
                        lastStudyDate: today,
                    };
                });
            },

            resetProgress: () => {
                set(defaultStats);
            },
        }),
        {
            name: 'geo-kpss-flashcards',
        }
    )
);
