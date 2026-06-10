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
    "KPSS 2026 Coğrafya sınavına interaktif haritalar, 120+ quiz sorusu ve kapsamlı ders notları ile hazırlanın. Dağlar, nehirler, göller, madenler ve daha fazlası.",
  keywords: [
    "KPSS",
    "KPSS Coğrafya",
    "KPSS 2026",
    "Türkiye Coğrafyası",
    "Coğrafya Quiz",
    "İnteraktif Harita",
    "Sınav Hazırlık",
    "ÖSYM",
    "Türkiye Haritası",
    "Coğrafya Ders Notları",
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
      "KPSS 2026 Coğrafya sınavına interaktif haritalar, 120+ quiz sorusu ve kapsamlı ders notları ile hazırlanın.",
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Geo-KPSS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geo-KPSS | İnteraktif KPSS Coğrafya Hazırlık Platformu",
    description:
      "KPSS 2026 Coğrafya sınavına interaktif haritalar, quizler ve ders notları ile hazırlanın.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "education",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Geo-KPSS",
  description:
    "KPSS Coğrafya sınavına hazırlık için interaktif Türkiye coğrafya öğrenme platformu",
  url: SITE_URL,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
  },
  inLanguage: "tr",
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },
};

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
        {/* Preconnect for performance */}
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
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
