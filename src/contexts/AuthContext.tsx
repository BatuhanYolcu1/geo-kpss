'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';
import { syncService } from '@/lib/syncService';
import { storageService } from '@/lib/storage';

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: true,
    signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const runMigration = useCallback(async (userId: string) => {
        // Giriş anında localStorage'daki veriyi Supabase'e taşı (tek seferlik)
        const migrationKey = `geo_kpss_migrated_${userId}`;
        if (typeof window !== 'undefined' && localStorage.getItem(migrationKey)) return;

        try {
            const quizHistory = storageService.getQuizHistory();
            const seenIds = storageService.getSeenQuestionIds();

            await Promise.allSettled([
                quizHistory.length > 0 && syncService.pushAllQuizResults(userId, quizHistory),
                seenIds.length > 0 && syncService.pushSeenQuestions(userId, seenIds),
                syncService.pushFlashcardProgressFromStorage(userId),
            ]);

            if (typeof window !== 'undefined') {
                localStorage.setItem(migrationKey, '1');
            }
        } catch (err) {
            // Migration başarısız olursa sessizce devam et — veri kaybı yok (localStorage hâlâ mevcut)
            console.warn('[AuthContext] Migration sırasında hata:', err);
        }
    }, []);

    useEffect(() => {
        const supabase = createClient();

        // İlk oturum kontrolü
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
            setIsLoading(false);
            if (user) runMigration(user.id);
        });

        // Auth değişikliklerini dinle
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            const currentUser = session?.user ?? null;
            setUser(currentUser);
            setIsLoading(false);
            if (currentUser) runMigration(currentUser.id);
        });

        return () => subscription.unsubscribe();
    }, [runMigration]);

    const signOut = useCallback(async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoading, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useUser = () => useContext(AuthContext);
