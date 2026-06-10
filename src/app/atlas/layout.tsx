import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'İnteraktif Atlas',
    description: 'Türkiye\'nin interaktif coğrafya atlası. Dağlar, nehirler, göller, madenler, barajlar ve UNESCO miras alanlarını harita üzerinde keşfedin.',
};

export default function AtlasLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
