export type QuizMode = 'map' | 'multiple_choice' | 'true_false' | 'matching' | 'mixed';

export interface BaseQuestion {
    id: string;
    category: string;
    subCategory?: string;
    difficulty: 'easy' | 'medium' | 'hard';
    points: number;
    didYouKnow?: string;
}

export interface MapQuestion extends BaseQuestion {
    type: 'map_pinpoint';
    targetFeatureId: string;
    targetName: string;
    targetLat: number;
    targetLng: number;
    hint?: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
    type: 'multiple_choice';
    text: string;
    options: string[];
    correctIndex: number;
    explanation?: string;
}

export interface TrueFalseQuestion extends BaseQuestion {
    type: 'true_false';
    statement: string;
    isTrue: boolean;
    explanation?: string;
}

export interface MatchingQuestion extends BaseQuestion {
    type: 'matching';
    instruction: string;
    pairs: { left: string; right: string }[];
}

export type QuizQuestion = MapQuestion | MultipleChoiceQuestion | TrueFalseQuestion | MatchingQuestion;

export interface QuizAnswer {
    questionId: string;
    isCorrect: boolean;
    points: number;
    userAnswer: string | number | boolean | null;
    correctAnswer: string | number | boolean | null;
    timeSpent: number;
}

export interface QuizResult {
    id: string;
    date: string;
    mode: QuizMode;
    score: number;
    totalQuestions: number;
    correctCount: number;
    accuracy: number;
    duration: number;
    categoryBreakdown: Record<string, { total: number; correct: number }>;
}

export interface UserStats {
    totalQuizzes: number;
    totalScore: number;
    averageAccuracy: number;
    bestScore: number;
    categoryPerformance: Record<string, {
        totalAnswers: number;
        correctAnswers: number;
        accuracy: number;
    }>;
    recentActivity: QuizResult[];
}

export interface StudyTopic {
    id: string;
    title: string;
    content: string;
    keyFacts: string[];
    relatedCoordinates?: {
        lat: number;
        lng: number;
        zoom: number;
    };
}

export interface StudyCategory {
    id: string;
    title: string;
    icon: string;
    topics: StudyTopic[];
}
