import { create } from 'zustand';

interface QuizLocation {
    id: string;
    name: string;
    lat: number;
    lng: number;
    type: string;
    category: string;
}

interface QuizState {
    // Game State
    isPlaying: boolean;
    currentQuestion: number;
    targetLocation: QuizLocation | null;
    questions: QuizLocation[];

    // Score
    totalScore: number;
    correctCount: number;
    incorrectCount: number;
    streak: number;
    bestStreak: number;

    // Feedback
    showFeedback: boolean;
    userClick: { lat: number; lng: number } | null;
    lastDistance: number | null;
    lastPoints: number | null;
    lastRating: 'perfect' | 'great' | 'good' | 'miss' | null;

    // Actions
    startQuiz: (questions: QuizLocation[]) => void;
    submitAnswer: (lat: number, lng: number) => { distance: number; points: number; rating: string };
    nextQuestion: () => void;
    endQuiz: () => void;
    resetQuiz: () => void;
}

import { calculateDistance, calculateScore } from '@/lib/geo';

export const useQuizStore = create<QuizState>((set, get) => ({
    // Initial State
    isPlaying: false,
    currentQuestion: 0,
    targetLocation: null,
    questions: [],

    totalScore: 0,
    correctCount: 0,
    incorrectCount: 0,
    streak: 0,
    bestStreak: 0,

    showFeedback: false,
    userClick: null,
    lastDistance: null,
    lastPoints: null,
    lastRating: null,

    // Actions
    startQuiz: (questions) => {
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        set({
            isPlaying: true,
            currentQuestion: 0,
            questions: shuffled,
            targetLocation: shuffled[0] || null,
            totalScore: 0,
            correctCount: 0,
            incorrectCount: 0,
            streak: 0,
            bestStreak: 0,
            showFeedback: false,
            userClick: null,
        });
    },

    submitAnswer: (lat, lng) => {
        const state = get();
        const target = state.targetLocation;

        if (!target) return { distance: 0, points: 0, rating: 'miss' };

        const distance = calculateDistance(lat, lng, target.lat, target.lng);
        const { points, rating } = calculateScore(distance);

        const isCorrect = points > 0;
        const newStreak = isCorrect ? state.streak + 1 : 0;
        const newBestStreak = Math.max(state.bestStreak, newStreak);

        set({
            showFeedback: true,
            userClick: { lat, lng },
            lastDistance: distance,
            lastPoints: points,
            lastRating: rating,
            totalScore: state.totalScore + points,
            correctCount: isCorrect ? state.correctCount + 1 : state.correctCount,
            incorrectCount: !isCorrect ? state.incorrectCount + 1 : state.incorrectCount,
            streak: newStreak,
            bestStreak: newBestStreak,
        });

        return { distance, points, rating };
    },

    nextQuestion: () => {
        const state = get();
        const nextIdx = state.currentQuestion + 1;

        if (nextIdx >= state.questions.length) {
            // Quiz completed
            set({ isPlaying: false, showFeedback: false });
            return;
        }

        set({
            currentQuestion: nextIdx,
            targetLocation: state.questions[nextIdx],
            showFeedback: false,
            userClick: null,
            lastDistance: null,
            lastPoints: null,
            lastRating: null,
        });
    },

    endQuiz: () => {
        set({ isPlaying: false, showFeedback: false });
    },

    resetQuiz: () => {
        set({
            isPlaying: false,
            currentQuestion: 0,
            targetLocation: null,
            questions: [],
            totalScore: 0,
            correctCount: 0,
            incorrectCount: 0,
            streak: 0,
            bestStreak: 0,
            showFeedback: false,
            userClick: null,
            lastDistance: null,
            lastPoints: null,
            lastRating: null,
        });
    },
}));

// Helper to build quiz locations from GeoJSON data
export function buildQuizLocations(): QuizLocation[] {
    const locations: QuizLocation[] = [];

    // Import data dynamically to avoid circular dependencies
    const datasets = [
        { data: require('@/data/geojson/cities.json'), category: 'cities' },
        { data: require('@/data/geojson/lakes.json'), category: 'lakes' },
        { data: require('@/data/geojson/mountains.json'), category: 'mountains' },
    ];

    for (const { data, category } of datasets) {
        for (const feature of data.features) {
            const props = feature.properties;
            const geom = feature.geometry;

            if (geom.type === 'Point') {
                locations.push({
                    id: props.id,
                    name: props.name,
                    lat: geom.coordinates[1],
                    lng: geom.coordinates[0],
                    type: props.type || category,
                    category,
                });
            }
        }
    }

    return locations;
}
