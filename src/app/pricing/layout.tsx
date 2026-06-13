import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://geo-kpss.vercel.app';

export const metadata: Metadata = {
    title: 'Fiyatlandırma — Pro Plan',
    description:
        'Geo-KPSS Pro ile KPSS 2026 coğrafya hazırlığınızı bir üst seviyeye taşıyın. Sınırsız quiz, sınav simülasyonu ve tüm harita katmanları. Aylık 79₺, yıllık 588₺.',
    openGraph: {
        title: 'Geo-KPSS Pro — KPSS Coğrafya Hazırlığında Fark Yarat',
        description: 'Sınırsız quiz, sınav simülasyonu, 12+ harita katmanı. Aylık 79₺ veya yıllık 588₺.',
        url: `${SITE_URL}/pricing`,
        images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 }],
    },
};

// FAQ Structured Data — pricing sayfasında "Sık Sorulan Sorular" için rich snippet
const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Ücretsiz plan ne kadar süreyle geçerli?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ücretsiz plan süresizdir. Her zaman temel özelliklere (günde 10 quiz sorusu, ders notları, 2 flashcard destesi) erişebilirsiniz.',
            },
        },
        {
            '@type': 'Question',
            name: 'Geo-KPSS Pro aboneliğini istediğim zaman iptal edebilir miyim?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Evet. Aboneliğinizi Hesabım sayfasından istediğiniz zaman iptal edebilirsiniz. İptal sonrasında mevcut dönemin sonuna kadar Pro özelliklerine erişiminiz devam eder.',
            },
        },
        {
            '@type': 'Question',
            name: 'Geo-KPSS Pro hangi ödeme yöntemlerini kabul ediyor?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Visa, Mastercard ve Troy dahil tüm kredi ve banka kartlarıyla ödeme yapabilirsiniz. Ödemeler iyzico altyapısıyla güvence altındadır.',
            },
        },
        {
            '@type': 'Question',
            name: 'KPSS coğrafya hazırlığı için Geo-KPSS Pro ne içeriyor?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pro plan; sınırsız quiz erişimi, 80 soruluk KPSS formatında sınav simülasyonu, 12+ interaktif harita katmanı, 10 flashcard destesi, detaylı kategori analizleri ve öncelikli destek içerir.',
            },
        },
        {
            '@type': 'Question',
            name: 'Yıllık plan ile aylık plan arasındaki fark nedir?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yıllık planda 49₺/ay ödersiniz (yıllık toplam 588₺). Aylık planda 79₺/ay. Yıllık plan tercih edilirse %38 tasarruf edersiniz.',
            },
        },
    ],
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            {children}
        </>
    );
}
