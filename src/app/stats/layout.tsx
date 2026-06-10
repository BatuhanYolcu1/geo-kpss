import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'İstatistiklerim',
    description: 'KPSS Coğrafya çalışma istatistiklerinizi takip edin. Quiz başarı oranı, flashcard tekrar sayısı ve zayıf konularınızı keşfedin.',
    robots: { index: false },
};

export default function StatsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
