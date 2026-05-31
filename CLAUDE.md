# Geo-KPSS — Claude Code Kuralları

## Proje
KPSS 2026 Coğrafya hazırlık platformu. Next.js 16 + React 19 + Tailwind v4 + Zustand.
Deploy: https://geo-kpss.vercel.app (Vercel, otomatik — her push sonrası ~2-3 dk)

## Stack
- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- Leaflet + react-leaflet (harita)
- Zustand (state management)
- Lucide React (ikonlar)

## Dizin Yapısı
```
src/
  app/          → Next.js sayfalar (App Router)
  components/   → React bileşenleri
  data/         → Quiz soruları, flashcard, müfredat, GeoJSON
  lib/          → Yardımcı fonksiyonlar
  stores/       → Zustand store'ları
  types/        → TypeScript tipleri
```

## Çalışma Kuralları
1. Değişiklik yapmadan önce ilgili dosyaları oku, mevcut yapıyı anla
2. Mevcut kod stiline, bileşen yapısına ve isimlendirme kurallarına uy
3. Her değişiklik sonrası commit et ve push et:
   ```
   git add . && git commit -m "feat: [açıklama]" && git push
   ```
4. Push sonrası kullanıcıya bildir (Vercel ~2-3 dk deploy eder)
5. Büyük değişikliklerde önce planı göster, onay al, sonra uygula

## Kod Standartları
- Türkçe UI metinleri, İngilizce değişken/fonksiyon isimleri
- TypeScript strict — `any` kullanma
- Tailwind ile stil, ayrı CSS dosyası açma
- Bileşen yorumları minimum, sadece neden açık değilse ekle
- `console.log` bırakma (production'a gidiyor)
