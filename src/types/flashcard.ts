export interface Flashcard {
    id: string;
    front: string;
    back: string;
    difficulty: 'easy' | 'medium' | 'hard';
    category: string;
}

export interface FlashcardCategory {
    id: string;
    title: string;
    icon: string;
    color: string;
    cards: Flashcard[];
}

// Leitner System box levels (1-5)
// Box 1: Review every session
// Box 2: Review every 2 sessions
// Box 3: Review every 4 sessions
// Box 4: Review every 8 sessions
// Box 5: Mastered
export interface FlashcardProgress {
    cardId: string;
    box: 1 | 2 | 3 | 4 | 5;
    lastReviewed: string;
    reviewCount: number;
    correctCount: number;
}

export interface FlashcardStats {
    totalReviewed: number;
    totalCorrect: number;
    streakDays: number;
    lastStudyDate: string | null;
    cardProgress: Record<string, FlashcardProgress>;
}
