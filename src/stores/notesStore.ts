import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface NotesState {
    activeSectionId: string | null;
    completedSectionIds: string[];
    setActiveSection: (id: string | null) => void;
    markAsRead: (sectionId: string) => void;
    getProgress: (unitSections: { id: string }[]) => number;
}

export const useNotesStore = create<NotesState>()(
    persist(
        (set, get) => ({
            activeSectionId: null,
            completedSectionIds: [],

            setActiveSection: (id) => set({ activeSectionId: id }),

            markAsRead: (sectionId) => {
                const { completedSectionIds } = get();
                if (!completedSectionIds.includes(sectionId)) {
                    set({ completedSectionIds: [...completedSectionIds, sectionId] });
                }
            },

            getProgress: (unitSections) => {
                const { completedSectionIds } = get();
                if (unitSections.length === 0) return 0;
                const completedCount = unitSections.filter(s => completedSectionIds.includes(s.id)).length;
                return Math.round((completedCount / unitSections.length) * 100);
            }
        }),
        {
            name: 'geo-kpss-notes-storage',
        }
    )
);
