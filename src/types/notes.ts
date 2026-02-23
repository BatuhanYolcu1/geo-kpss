/**
 * Notes Module Type Definitions
 */

export interface AtlasLink {
    layerId?: string;
    featureId?: string;
    focus?: string; // Added for compatibility with existing patterns
    coords?: { lat: number; lng: number; zoom: number };
}

export interface Mnemonic {
    title: string;
    text: string;
}

export interface NoteSection {
    id: string;
    title: string;
    slug: string;
    content: string;
    atlasLink?: AtlasLink;
    mnemonics?: Mnemonic[];
    warnings?: string[];
    teacherNotes?: string[];
    examAnalysis?: string;
    keyPoints?: string[];
    inlineQuizzes?: {
        question: string;
        options: string[];
        correctOptionIndex: number;
        explanation?: string;
    }[];
}

export interface NoteUnit {
    id: string;
    title: string;
    icon: string; // Lucide icon name
    sections: NoteSection[];
}
