/**
 * Quiz System Type Definitions
 */

export type QuestionType = 'map_pinpoint' | 'multiple_choice' | 'true_false' | 'matching';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type QuizMode = 'map' | 'multiple_choice' | 'true_false' | 'matching' | 'mixed';

// Base interface for all question types
export interface BaseQuestion {
    id: string;
    type: QuestionType;
    category: string; // e.g., 'lakes', 'mountains', 'cities'
    difficulty: Difficulty;
    points: number;
}

// Map Pinpoint Question - Find location on blind map
export interface MapQuestion extends BaseQuestion {
    type: 'map_pinpoint';
    targetFeatureId: string;
    targetName: string;
    targetLat: number;
    targetLng: number;
    hint?: string;
    subCategory?: string; // e.g., 'mine', 'lake', 'unesco'
    didYouKnow?: string; // Short educational snippet
}

// Multiple Choice Question - Classic A/B/C/D/E
export interface MultipleChoiceQuestion extends BaseQuestion {
    type: 'multiple_choice';
    text: string;
    options: string[]; // 4-5 options
    correctIndex: number;
    explanation: string;
}

// True/False Question - Quick fact-checking
export interface TrueFalseQuestion extends BaseQuestion {
    type: 'true_false';
    statement: string;
    isTrue: boolean;
    explanation: string;
}

// Matching Question - Connect pairs
export interface MatchingQuestion extends BaseQuestion {
    type: 'matching';
    instruction: string;
    pairs: { left: string; right: string }[];
}

// Union type for all questions
export type QuizQuestion = MapQuestion | MultipleChoiceQuestion | TrueFalseQuestion | MatchingQuestion;

// Quiz Session State
export interface QuizSessionState {
    mode: QuizMode;
    questions: QuizQuestion[];
    currentIndex: number;
    score: number;
    correctCount: number;
    incorrectCount: number;
    streak: number;
    bestStreak: number;
    isCompleted: boolean;
    startTime: number;
    answers: QuizAnswer[];
}

// Answer record
export interface QuizAnswer {
    questionId: string;
    isCorrect: boolean;
    points: number;
    userAnswer: unknown;
    correctAnswer: unknown;
    timeSpent: number;
}

// Quiz Mode Card Config
export interface QuizModeConfig {
    id: QuizMode;
    title: string;
    description: string;
    icon: string;
    color: string;
    gradient: string;
    questionCount: number;
    enabled: boolean;
}

// Stats & History
export interface QuizResult {
    id: string;
    date: string;
    mode: QuizMode;
    score: number;
    totalQuestions: number;
    correctCount: number;
    accuracy: number;
    duration: number; // seconds
    categoryBreakdown: Record<string, { total: number; correct: number }>;
}

export interface UserStats {
    totalQuizzes: number;
    totalScore: number;
    averageAccuracy: number;
    bestScore: number;
    categoryPerformance: Record<string, { totalAnswers: number; correctAnswers: number; accuracy: number }>;
    recentActivity: QuizResult[];
}
// Study Module Types
export interface StudyTopic {
    id: string;
    title: string;
    content: string; // Markdown supported
    keyFacts: string[]; // "Önemli Bilgiler" or "KPSS Tips"
    relatedCoordinates?: { lat: number; lng: number; zoom?: number };
}

export interface StudyCategory {
    id: string;
    title: string;
    icon: string; // Lucide icon name
    topics: StudyTopic[];
}
