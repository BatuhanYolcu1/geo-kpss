# 🗺️ Geo-KPSS

**KPSS Coğrafya sınavına hazırlık için interaktif Türkiye harita platformu**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## 📖 Hakkında

Geo-KPSS, KPSS sınavına hazırlanan adaylar için geliştirilmiş interaktif bir Türkiye coğrafya öğrenme platformudur. Harita üzerinde görsel öğrenme, KPSS'ye özel notlar ve quiz modu ile etkili bir çalışma deneyimi sunar.

## ✨ Özellikler

### 🗺️ İnteraktif Harita
- Türkiye merkezli tam ekran Leaflet haritası
- Karanlık/Aydınlık mod desteği
- Akıcı zoom ve pan kontrolleri

### 📊 Katman Sistemi
| Kategori | Katmanlar |
|----------|-----------|
| **Fiziki** | Dağlar, Ovalar, Platolar, Nehirler, Göller |
| **Ekonomik** | Madenler, Enerji Santralleri, Tarım, Sanayi |
| **İdari** | Şehirler (15 büyükşehir) |

- Her katman için opaklık ayarı
- Dinamik legend paneli
- Korelasyon overlay özelliği

### 📝 Öğrenme Araçları
- **KPSS Notları**: Her özellik için sınava yönelik bilgiler
- **Geo-Notes**: Harita üzerine kişisel not ekleme (sağ tık)
- **LocalStorage**: Notlar otomatik kaydedilir

### 🎯 Quiz Modu
- 15+ KPSS sorusu
- Zorluk seviyeleri: Kolay, Orta, Zor
- Kategori seçimi
- Puan takibi ve istatistikler

---

## 🛠️ Teknoloji Stack

| Teknoloji | Kullanım |
|-----------|----------|
| [Next.js 16](https://nextjs.org/) | App Router, SSR |
| [TypeScript](https://www.typescriptlang.org/) | Tip güvenliği |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling, Dark mode |
| [React-Leaflet](https://react-leaflet.js.org/) | İnteraktif harita |
| [Zustand](https://zustand-demo.pmnd.rs/) | State management |
| [Lucide React](https://lucide.dev/) | İkonlar |

---

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Adımlar

```bash
# Repository'yi klonlayın
git clone https://github.com/KULLANICI_ADI/geo-kpss.git
cd geo-kpss

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```
hızlı link : https://geo-kpss.vercel.app/
Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Proje Yapısı

```
geo-kpss/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Ana harita sayfası
│   │   ├── globals.css         # Global stiller
│   │   └── quiz/               # Quiz modu
│   │       └── page.tsx
│   ├── components/
│   │   ├── map/                # Harita bileşenleri
│   │   │   ├── MapEngine.tsx   # SSR-safe wrapper
│   │   │   ├── MapClient.tsx   # Ana Leaflet haritası
│   │   │   ├── LayerControl.tsx
│   │   │   ├── DynamicLegend.tsx
│   │   │   ├── FeaturePopup.tsx
│   │   │   ├── FeatureModal.tsx
│   │   │   ├── ContextMenu.tsx
│   │   │   └── GeoNoteMarkers.tsx
│   │   └── ui/                 # Yeniden kullanılabilir UI
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── index.ts
│   ├── stores/                 # Zustand state
│   │   ├── layerStore.ts       # Katman durumu
│   │   └── userStore.ts        # Kullanıcı verileri
│   ├── data/
│   │   ├── geojson/            # Türkiye GeoJSON verileri
│   │   │   ├── cities.json
│   │   │   ├── mountains.json
│   │   │   ├── rivers.json
│   │   │   └── ...
│   │   └── quiz-questions.json # Quiz soruları
│   ├── lib/
│   │   └── mapConfig.ts        # Harita konfigürasyonu
│   └── types/
│       └── index.ts            # TypeScript tipleri
├── public/                     # Statik dosyalar
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 📸 Ekran Görüntüleri

<!-- Projeyi deploy ettikten sonra ekran görüntüleri ekleyebilirsiniz -->
<!-- ![Ana Harita](./screenshots/map.png) -->
<!-- ![Quiz Modu](./screenshots/quiz.png) -->

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Detaylar için [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasını inceleyin.

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Yeni özellik eklendi'`)
4. Branch'i push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request açın

---

## 📄 Lisans

Bu proje [MIT Lisansı](./LICENSE) altında lisanslanmıştır.

---

## 📬 İletişim

Sorularınız veya önerileriniz için issue açabilirsiniz.

---

<div align="center">
  <sub>KPSS'ye hazırlanan tüm adaylara başarılar! 🎓</sub>
</div>
