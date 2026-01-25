# 🤝 Katkıda Bulunma Rehberi

Geo-KPSS projesine katkıda bulunmak istediğiniz için teşekkürler! Bu rehber, katkı sürecini kolaylaştırmak için hazırlanmıştır.

---

## 📋 Başlamadan Önce

1. [README.md](./README.md) dosyasını okuyun
2. Açık [issue'ları](../../issues) kontrol edin
3. Projeyi fork'layın ve yerel olarak klonlayın

---

## 🐛 Bug Bildirme

Bug bildirirken lütfen şu bilgileri ekleyin:

- **Açıklama**: Problemin kısa açıklaması
- **Yeniden Üretme Adımları**: Bug'ı nasıl tetikleyebiliriz?
- **Beklenen Davranış**: Ne olması gerekiyordu?
- **Gerçekleşen Davranış**: Ne oldu?
- **Ekran Görüntüsü**: Varsa ekleyin
- **Ortam Bilgileri**: Tarayıcı, OS, Node.js versiyonu

---

## ✨ Özellik Önerisi

Yeni bir özellik önermeden önce:

1. Benzer bir issue'nun açılmadığından emin olun
2. Özelliğin projenin kapsamına uygun olduğundan emin olun
3. Detaylı bir açıklama yazın

---

## 🔧 Geliştirme Süreci

### 1. Fork & Clone

```bash
# Fork'unuzu klonlayın
git clone https://github.com/KULLANICI_ADINIZ/geo-kpss.git
cd geo-kpss

# Upstream remote ekleyin
git remote add upstream https://github.com/ORIJINAL_REPO/geo-kpss.git
```

### 2. Branch Oluşturma

```bash
# Ana branch'tan yeni branch oluşturun
git checkout -b feature/ozellik-adi
# veya
git checkout -b fix/bug-adi
```

### 3. Geliştirme

```bash
# Bağımlılıkları yükleyin
npm install

# Dev server başlatın
npm run dev

# Lint kontrolü
npm run lint

# Build testi
npm run build
```

### 4. Commit Kuralları

[Conventional Commits](https://www.conventionalcommits.org/) formatını kullanın:

```
<tip>: <açıklama>

[opsiyonel gövde]

[opsiyonel footer]
```

**Tipler:**
- `feat`: Yeni özellik
- `fix`: Bug düzeltmesi
- `docs`: Dokümantasyon
- `style`: Kod formatı (fonksiyonellik değişmez)
- `refactor`: Refactoring
- `test`: Test ekleme/düzeltme
- `chore`: Build, config değişiklikleri

**Örnekler:**
```bash
git commit -m "feat: Quiz moduna yeni soru kategorisi eklendi"
git commit -m "fix: Harita zoom problemi düzeltildi"
git commit -m "docs: README güncellendi"
```

### 5. Pull Request

1. Fork'unuza push edin
2. GitHub'da Pull Request açın
3. PR açıklamasında:
   - Ne değiştiğini açıklayın
   - İlgili issue'ları linkleyin (`Fixes #123`)
   - Ekran görüntüsü ekleyin (UI değişikliklerinde)

---

## 📝 Kod Standartları

### TypeScript
- Strict mode aktif
- `any` kullanmaktan kaçının
- Interface'leri `types/` klasörüne ekleyin

### React
- Fonksiyonel component'ler kullanın
- Hook'ları doğru kullanın
- Component'leri küçük tutun

### CSS/Tailwind
- Tailwind utility class'larını tercih edin
- Custom CSS gerekirse `globals.css`'e ekleyin

### Dosya İsimlendirme
- Component'ler: `PascalCase.tsx`
- Utility'ler: `camelCase.ts`
- Sabitler: `SCREAMING_SNAKE_CASE`

---

## 🧪 Test

Şu an için otomatik test yok. Manuel test yapın:

1. Tüm katmanları açıp kapatın
2. Dark/Light mod geçişini test edin
3. Quiz modunu tamamlayın
4. Geo-note ekleme/silme/düzenleme
5. Mobile responsive kontrol

---

## 🌍 GeoJSON Veri Ekleme

Yeni veri eklerken:

1. `src/data/geojson/` klasörüne JSON dosyası ekleyin
2. Mevcut formatı takip edin
3. `kpssNotes` alanını doldurun (sınava yönelik bilgiler)
4. `layerStore.ts`'ye yeni katmanı ekleyin

---

## 💬 İletişim

- Issue'lar üzerinden iletişime geçebilirsiniz
- Büyük değişiklikler için önce tartışma açın

---

Katkılarınız için teşekkürler! 🎉
