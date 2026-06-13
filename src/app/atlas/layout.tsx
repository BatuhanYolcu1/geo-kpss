import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'İnteraktif Atlas',
    description: 'Türkiye\'nin interaktif coğrafya atlası. Dağlar, nehirler, göller, madenler, barajlar ve UNESCO miras alanlarını harita üzerinde keşfedin. KPSS coğrafya harita soruları için ideal.',
};

export default function AtlasLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Leaflet CSS — sadece atlas sayfasında yüklenir */}
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                crossOrigin="anonymous"
            />
            {children}
        </>
    );
}
