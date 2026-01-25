import { QuizResult, UserStats } from '@/types/quiz';

const STORAGE_KEY = 'geo_kpss_quiz_history';

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
    }
};
