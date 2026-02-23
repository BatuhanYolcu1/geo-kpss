import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ders Notları',
    description: 'KPSS Coğrafya müfredatını ünite bazlı inceleyin. Harita destekli notlar, mnemonik kodlamalar ve ÖSYM analizleri.',
};

export default function NotesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
