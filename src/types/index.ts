// ===== GeoJSON Feature Types =====
export interface GeoFeatureProperties {
    id: string;
    name: string;
    nameEn?: string;
    type: string;
    category: LayerCategory;
    subcategory?: string;
    kpssNote?: string;
    description?: string;
    elevation?: number;
    length?: number;
    area?: number;
    population?: number;
    region?: string;
    climate?: string;
    products?: string[];
    product?: string;
    sector?: string;
    mineral?: string;
    capacity?: number;
    source?: string;
}

export interface GeoFeature {
    type: 'Feature';
    properties: GeoFeatureProperties;
    geometry: {
        type: 'Point' | 'LineString' | 'Polygon' | 'MultiPolygon';
        coordinates: number[] | number[][] | number[][][] | number[][][][];
    };
}

export interface GeoFeatureCollection {
    type: 'FeatureCollection';
    features: GeoFeature[];
}

// ===== Layer System Types =====
export type LayerCategory = 'physical' | 'economic' | 'administrative' | 'tourism';

export interface LayerConfig {
    id: string;
    name: string;
    nameEn?: string;
    category: LayerCategory;
    subcategory?: string;
    icon: string;
    color: string;
    visible: boolean;
    legendItems?: LegendItem[];
}

export interface LegendItem {
    label: string;
    color: string;
    shape?: 'circle' | 'line' | 'polygon';
    icon?: string;
}

// ===== User Notes =====
export interface GeoNote {
    id: string;
    lat: number;
    lng: number;
    text: string;
    createdAt: string;
    updatedAt?: string;
    color?: string;
}

// ===== Quiz Types =====
export interface QuizQuestion {
    id: string;
    type: 'multiple-choice' | 'find-location' | 'true-false';
    category: LayerCategory;
    difficulty: 'easy' | 'medium' | 'hard';
    question: string;
    options?: string[];
    correctAnswer: string | number[];
    explanation?: string;
    relatedFeatureId?: string;
}

export interface QuizSession {
    id: string;
    startedAt: string;
    endedAt?: string;
    questions: QuizQuestion[];
    answers: { questionId: string; userAnswer: string | number[]; correct: boolean }[];
    score: number;
    category?: LayerCategory;
}

export interface QuizStats {
    totalQuizzes: number;
    totalQuestions: number;
    correctAnswers: number;
    accuracy: number;
    categoryStats: Record<LayerCategory, { correct: number; total: number }>;
    lastQuizDate?: string;
}

// ===== Comparison Types =====
export interface ComparisonItem {
    id: string;
    name: string;
    type: 'city' | 'region';
    data: {
        population?: number;
        area?: number;
        climate?: string;
        agriculture?: string[];
        industries?: string[];
        landmarks?: string[];
    };
}

// ===== Store Types =====
export interface LayerStore {
    layers: LayerConfig[];
    activeLayerIds: string[];
    toggleLayer: (layerId: string) => void;
    setAllLayersVisibility: (category: LayerCategory, visible: boolean) => void;
    getActiveLayers: () => LayerConfig[];
}

export interface UserStore {
    notes: GeoNote[];
    quizHistory: QuizSession[];
    quizStats: QuizStats;
    sidebarOpen: boolean;
    addNote: (note: Omit<GeoNote, 'id' | 'createdAt'>) => void;
    updateNote: (id: string, text: string) => void;
    deleteNote: (id: string) => void;
    addQuizSession: (session: QuizSession) => void;
    toggleSidebar: () => void;
}

// ===== Map Types =====
export interface MapContextMenuProps {
    x: number;
    y: number;
    lat: number;
    lng: number;
    onClose: () => void;
    onAddNote: () => void;
}

export interface FeaturePopupProps {
    feature: GeoFeatureProperties;
    onCompare?: () => void;
}

// ===== Turkey Regions =====
export const TURKEY_REGIONS = [
    'Marmara',
    'Ege',
    'Akdeniz',
    'İç Anadolu',
    'Karadeniz',
    'Doğu Anadolu',
    'Güneydoğu Anadolu',
] as const;

export type TurkeyRegion = typeof TURKEY_REGIONS[number];
