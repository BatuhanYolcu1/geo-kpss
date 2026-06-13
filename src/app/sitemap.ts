import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://geo-kpss.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        // Ana sayfa
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        // Yüksek öncelikli özellik sayfaları
        {
            url: `${SITE_URL}/quiz`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${SITE_URL}/atlas`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.90,
        },
        {
            url: `${SITE_URL}/notes`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${SITE_URL}/exam`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${SITE_URL}/flashcards`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.80,
        },
        // Fiyatlandırma
        {
            url: `${SITE_URL}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.70,
        },
        // İstatistikler
        {
            url: `${SITE_URL}/stats`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.55,
        },
        // Not: /account, /kvkk, /sozlesme, /iade, /auth/* → robots.txt'de Disallow
    ];
}
