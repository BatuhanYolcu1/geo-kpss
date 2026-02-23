import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Quiz Modu',
    description: 'KPSS Coğrafya formatında interaktif quizlerle bilginizi test edin. Harita, çoktan seçmeli, doğru/yanlış ve eşleştirme modları.',
};

export default function QuizLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
