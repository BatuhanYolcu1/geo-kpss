import { QuizResult, UserStats } from '@/types/quiz';

const STORAGE_KEY = 'geo_kpss_quiz_history';
const SEEN_QUESTIONS_KEY = 'geo_kpss_seen_questions';
const MAX_SEEN_QUESTIONS = 300; // ~ birkaç quiz oturumunu hatırlamaya yetecek kapasite

export const storageService = {
    saveQuizResult: (result: QuizResult): void => {
        if (typeof window === 'undefined') return;

        try {
            const history = storageService.getQuizHistory();
            const updatedHistory = [result, ...history].slice(0, 50); // Keep last 50 results
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
        } catch (error) {
            console.error('Failed to save quiz result:', error);
        }
    },

    getQuizHistory: (): QuizResult[] => {
        if (typeof window === 'undefined') return [];

        try {
            const storedData = localStorage.getItem(STORAGE_KEY);
            return storedData ? JSON.parse(storedData) : [];
        } catch (error) {
            console.error('Failed to get quiz history:', error);
            return [];
        }
    },

    getUserStats: (): UserStats => {
        const history = storageService.getQuizHistory();

        const stats: UserStats = {
            totalQuizzes: history.length,
            totalScore: history.reduce((sum, r) => sum + r.score, 0),
            averageAccuracy: history.length > 0
                ? Math.round(history.reduce((sum, r) => sum + r.accuracy, 0) / history.length)
                : 0,
            bestScore: Math.max(0, ...history.map(r => r.score)),
            categoryPerformance: {},
            recentActivity: history.slice(0, 5)
        };

        // Aggregate category performance
        const catData: Record<string, { total: number; correct: number }> = {};

        history.forEach(result => {
            Object.entries(result.categoryBreakdown).forEach(([cat, data]) => {
                if (!catData[cat]) {
                    catData[cat] = { total: 0, correct: 0 };
                }
                catData[cat].total += data.total;
                catData[cat].correct += data.correct;
            });
        });

        Object.entries(catData).forEach(([cat, data]) => {
            stats.categoryPerformance[cat] = {
                totalAnswers: data.total,
                correctAnswers: data.correct,
                accuracy: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0
            };
        });

        return stats;
    },

    clearHistory: (): void => {
        if (typeof window === 'undefined') return;
        localStorage.removeItem(STORAGE_KEY);
    },

    /**
     * Son oturumlarda kullanıcıya gösterilen soruların ID listesini döndürür
     * (en yeniden en eskiye doğru sıralı). Quiz motoru, art arda yapılan
     * denemelerde aynı soruların tekrar gelmesini engellemek için bunu kullanır.
     */
    getSeenQuestionIds: (): string[] => {
        if (typeof window === 'undefined') return [];

        try {
            const stored = localStorage.getItem(SEEN_QUESTIONS_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Failed to get seen questions:', error);
            return [];
        }
    },

    /**
     * Az önce gösterilen soru ID'lerini "görüldü" geçmişinin başına ekler,
     * tekrarları temizler ve listeyi belirli bir uzunlukla sınırlar.
     */
    recordSeenQuestions: (ids: string[]): void => {
        if (typeof window === 'undefined' || ids.length === 0) return;

        try {
            const existing = storageService.getSeenQuestionIds();
            const merged = [...ids, ...existing];
            const seen = new Set<string>();
            const deduped: string[] = [];

            for (const id of merged) {
                if (!seen.has(id)) {
                    seen.add(id);
                    deduped.push(id);
                }
            }

            localStorage.setItem(SEEN_QUESTIONS_KEY, JSON.stringify(deduped.slice(0, MAX_SEEN_QUESTIONS)));
        } catch (error) {
            console.error('Failed to record seen questions:', error);
        }
    },

    clearSeenQuestions: (): void => {
        if (typeof window === 'undefined') return;
        localStorage.removeItem(SEEN_QUESTIONS_KEY);
    }
};
