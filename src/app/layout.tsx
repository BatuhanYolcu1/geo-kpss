import type { Metadata, Viewport } from "next";
import { Literata, Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BottomNav from "@/components/ui/BottomNav";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin", "latin-ext"],
  weight: ["700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://geo-kpss.vercel.app";

export const viewport: Viewport = {
  themeColor: "#f7faf4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Geo-KPSS | İnteraktif KPSS Coğrafya Hazırlık Platformu",
    template: "%s | Geo-KPSS",
  },
  description:
    "KPSS 2026 Coğrafya sınavına interaktif haritalar, 330+ quiz sorusu, flashcard ve kapsamlı ders notları ile hazırlanın. Türkiye dağları, nehirleri, gölleri, madenleri ve iklimi.",
  keywords: [
    "KPSS coğrafya",
    "KPSS 2026 coğrafya",
    "KPSS coğrafya soru bankası",
    "Türkiye coğrafyası quiz",
    "KPSS coğrafya ders notları",
    "interaktif Türkiye haritası",
    "KPSS sınav hazırlık",
    "ÖSYM coğrafya",
    "Türkiye fiziki coğrafyası",
    "KPSS flashcard",
    "coğrafya soru çöz",
    "KPSS coğrafya 2026",
  ],
  authors: [{ name: "Geo-KPSS Team" }],
  creator: "Geo-KPSS",
  publisher: "Geo-KPSS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Geo-KPSS | İnteraktif KPSS Coğrafya Hazırlık Platformu",
    description:
      "KPSS 2026 Coğrafya sınavına interaktif haritalar, 330+ quiz sorusu ve kapsamlı ders notları ile hazırlanın.",
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Geo-KPSS",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Geo-KPSS — KPSS 2026 Coğrafya Hazırlık Platformu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geo-KPSS | İnteraktif KPSS Coğrafya Hazırlık Platformu",
    description:
      "KPSS 2026 Coğrafya sınavına interaktif haritalar, 330+ quiz sorusu ve ders notlarıyla hazırlanın.",
    images: [`${SITE_URL}/opengraph-image`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "education",
};

// JSON-LD Structured Data — WebApplication + LearningResource
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Geo-KPSS",
    description:
      "KPSS 2026 Coğrafya sınavına hazırlık için interaktif Türkiye coğrafya öğrenme platformu. İnteraktif haritalar, 330+ quiz sorusu, flashcard ve ders notları.",
    url: SITE_URL,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    inLanguage: "tr",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "588",
      priceCurrency: "TRY",
      offerCount: "2",
      offers: [
        {
          "@type": "Offer",
          name: "Ücretsiz Plan",
          price: "0",
          priceCurrency: "TRY",
          description: "Temel özellikler — quiz, ders notları ve 2 flashcard destesi",
        },
        {
          "@type": "Offer",
          name: "Pro Plan (Yıllık)",
          price: "588",
          priceCurrency: "TRY",
          description: "Tüm özellikler — sınırsız quiz, sınav simülasyonu, 12+ harita katmanı, tüm flashcard desteleri",
        },
      ],
    },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "KPSS 2026 Coğrafya Hazırlık Kursu",
    description:
      "KPSS sınavı için kapsamlı Türkiye coğrafyası eğitimi. Fiziki coğrafya, beşeri coğrafya, iklim, ekonomi ve coğrafi bölgeler.",
    url: SITE_URL,
    provider: { "@type": "Organization", name: "Geo-KPSS", url: SITE_URL },
    inLanguage: "tr",
    educationalLevel: "undergraduate",
    teaches: [
      "Türkiye Fiziki Coğrafyası",
      "Türkiye Beşeri Coğrafyası",
      "KPSS Coğrafya Soruları",
      "Türkiye İklimi",
      "Türkiye Ekonomik Coğrafyası",
    ],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗺️</text></svg>"
        />
        {/* Preconnect for Leaflet (atlas sayfasında gerekli) */}
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${literata.variable} ${nunitoSans.variable} antialiased`}>
        <AuthProvider>
          {children}
          <BottomNav />
          <Analytics />
          <SpeedInsights />
        </AuthProvider>
      </body>
    </html>
  );
}
