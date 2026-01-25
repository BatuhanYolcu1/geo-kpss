import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Geo-KPSS | Türkiye Coğrafya Haritası",
  description: "KPSS sınavına hazırlık için interaktif Türkiye coğrafya öğrenme platformu. Dağlar, nehirler, göller, madenler ve daha fazlası.",
  keywords: ["KPSS", "Coğrafya", "Türkiye", "Harita", "Eğitim", "Sınav Hazırlık"],
  authors: [{ name: "Geo-KPSS Team" }],
  openGraph: {
    title: "Geo-KPSS | Türkiye Coğrafya Haritası",
    description: "KPSS sınavına hazırlık için interaktif Türkiye coğrafya öğrenme platformu",
    type: "website",
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗺️</text></svg>" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
