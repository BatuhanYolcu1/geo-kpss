import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Flashcard',
    description: 'KPSS Coğrafya konularını flashcard modülüyle tekrar edin. Spaced repetition sistemi ile etkili öğrenme.',
};

export default function FlashcardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
