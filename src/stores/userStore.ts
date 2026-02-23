import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserStore, GeoNote, QuizStats, LayerCategory } from '@/types';

const defaultQuizStats: QuizStats = {
    totalQuizzes: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    accuracy: 0,
    categoryStats: {
        physical: { correct: 0, total: 0 },
        economic: { correct: 0, total: 0 },
        administrative: { correct: 0, total: 0 },
        tourism: { correct: 0, total: 0 },
    },
};

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            notes: [],
            quizHistory: [],
            quizStats: defaultQuizStats,
            sidebarOpen: true,
            highlights: [],

            addNote: (noteData) => {
                const note: GeoNote = {
                    id: `note-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                    createdAt: new Date().toISOString(),
                    ...noteData,
                };
                set((state) => ({
                    notes: [...state.notes, note],
                }));
            },

            updateNote: (id, text) => {
                set((state) => ({
                    notes: state.notes.map((note) =>
                        note.id === id
                            ? { ...note, text, updatedAt: new Date().toISOString() }
                            : note
                    ),
                }));
            },

            deleteNote: (id) => {
                set((state) => ({
                    notes: state.notes.filter((note) => note.id !== id),
                }));
            },

            addQuizSession: (session) => {
                set((state) => {
                    const newHistory = [...state.quizHistory, session];

                    // Update stats
                    const totalCorrect = session.answers.filter((a) => a.correct).length;
                    const newStats: QuizStats = {
                        totalQuizzes: state.quizStats.totalQuizzes + 1,
                        totalQuestions: state.quizStats.totalQuestions + session.questions.length,
                        correctAnswers: state.quizStats.correctAnswers + totalCorrect,
                        accuracy: 0,
                        categoryStats: { ...state.quizStats.categoryStats },
                        lastQuizDate: session.endedAt,
                    };

                    // Calculate accuracy
                    newStats.accuracy = Math.round(
                        (newStats.correctAnswers / newStats.totalQuestions) * 100
                    );

                    // Update category stats
                    if (session.category) {
                        const cat = session.category as LayerCategory;
                        newStats.categoryStats[cat] = {
                            correct: (state.quizStats.categoryStats[cat]?.correct || 0) + totalCorrect,
                            total: (state.quizStats.categoryStats[cat]?.total || 0) + session.questions.length,
                        };
                    }

                    return {
                        quizHistory: newHistory,
                        quizStats: newStats,
                    };
                });
            },


            toggleSidebar: () => {
                set((state) => ({
                    sidebarOpen: !state.sidebarOpen,
                }));
            },

            addHighlight: (data) => {
                const highlight = {
                    id: `hl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                    createdAt: new Date().toISOString(),
                    ...data,
                };
                set((state) => ({
                    highlights: [...state.highlights, highlight],
                }));
            },

            removeHighlight: (id) => {
                set((state) => ({
                    highlights: state.highlights.filter((h) => h.id !== id),
                }));
            },
        }),
        {
            name: 'geo-kpss-user',
        }
    )
);
