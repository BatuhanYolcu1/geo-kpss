/**
 * syncService — Supabase bulut senkronizasyonu
 *
 * Misafir modda hiçbir şey yapmaz.
 * Giriş yapılınca localStorage verisi Supabase'e taşınır (migration).
 * Sonraki quiz/flashcard kayıtları hem localStorage'a hem Supabase'e yazılır.
 *
 * Tüm metodlar fire-and-forget: hata olursa localStorage'daki veri korunur.
 */

import { createClient } from './supabase/client';
import type { QuizResult } from '@/types/quiz';
import type { FlashcardProgress } from '@/types/flashcard';

function getZustandFlashcardState(): Record<string, FlashcardProgress> {
    try {
        const raw = localStorage.getItem('geo-kpss-flashcards');
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return parsed?.state?.cardProgress ?? {};
    } catch {
        return {};
    }
}

export const syncService = {
    /** Tek bir quiz sonucunu Supabase'e yazar */
    async pushQuizResult(userId: string, result: QuizResult): Promise<void> {
        const supabase = createClient();
        await supabase.from('quiz_results').upsert({
            id: result.id,
            user_id: userId,
            date: result.date,
            mode: result.mode,
            score: result.score,
            total_questions: result.totalQuestions,
            correct_count: result.correctCount,
            accuracy: result.accuracy,
            duration: result.duration,
            category_breakdown: result.categoryBreakdown,
        });
    },

    /** Tüm quiz geçmişini Supabase'e yazar (migration) */
    async pushAllQuizResults(userId: string, results: QuizResult[]): Promise<void> {
        if (results.length === 0) return;
        const supabase = createClient();
        await supabase.from('quiz_results').upsert(
            results.map(r => ({
                id: r.id,
                user_id: userId,
                date: r.date,
                mode: r.mode,
                score: r.score,
                total_questions: r.totalQuestions,
                correct_count: r.correctCount,
                accuracy: r.accuracy,
                duration: r.duration,
                category_breakdown: r.categoryBreakdown,
            }))
        );
    },

    /** Flashcard ilerleme kayıtlarını Supabase'e yazar */
    async pushFlashcardProgress(
        userId: string,
        cardProgress: Record<string, FlashcardProgress>
    ): Promise<void> {
        const entries = Object.values(cardProgress);
        if (entries.length === 0) return;
        const supabase = createClient();
        await supabase.from('flashcard_progress').upsert(
            entries.map(p => ({
                user_id: userId,
                card_id: p.cardId,
                box: p.box,
                last_reviewed: p.lastReviewed,
                review_count: p.reviewCount,
                correct_count: p.correctCount,
            }))
        );
    },

    /**
     * Zustand persist'ten (localStorage) flashcard ilerlemesini okuyup Supabase'e yazar.
     * Migration sırasında kullanılır.
     */
    async pushFlashcardProgressFromStorage(userId: string): Promise<void> {
        const cardProgress = getZustandFlashcardState();
        await syncService.pushFlashcardProgress(userId, cardProgress);
    },

    /** Görülen soru ID'lerini Supabase'e yazar */
    async pushSeenQuestions(userId: string, questionIds: string[]): Promise<void> {
        const supabase = createClient();
        await supabase.from('seen_questions').upsert({
            user_id: userId,
            question_ids: questionIds,
            updated_at: new Date().toISOString(),
        });
    },

    /** Tek bir flashcard ilerlemesini Supabase'e yazar */
    async pushSingleCardProgress(userId: string, progress: FlashcardProgress): Promise<void> {
        const supabase = createClient();
        await supabase.from('flashcard_progress').upsert({
            user_id: userId,
            card_id: progress.cardId,
            box: progress.box,
            last_reviewed: progress.lastReviewed,
            review_count: progress.reviewCount,
            correct_count: progress.correctCount,
        });
    },
};
