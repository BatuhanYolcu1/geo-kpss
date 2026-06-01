import { NoteUnit } from '@/types/notes';

export const unit08: NoteUnit = {
    id: 'unit-08',
    title: 'Su Varlığı, Toprak ve Barajlar',
    icon: 'Waves',
    sections: [
        {
            id: 'turkiye-akarsulari',
            slug: 'turkiyenin-akarsulari-ve-havzalari',
            title: '1. Türkiye\'nin Akarsuları ve Havzaları',
            content: `Türkiye ortalama yükseltisi fazla, eğimli ve yağışlı bir ülkedir. Bu nedenle akarsu potansiyeli Avrupa'da Rusya ve Norveç'ten sonra 3. sıradadır. Ancak akarsularımızın yüksek eğim ve düzensiz rejimi hidroelektrik açısından büyük fırsat, taşımacılık açısından ise dezavantaj oluşturur.

## Türkiye'nin Akarsuları Genel Özellikleri

1. **Akışları Düzensizdir (Rejim değişkeni):** Karadeniz akarsularının (Doğu Karadeniz) her mevsim suyu vardır. Ama Ege ve Akdeniz akarsularının yazın (Temmuz-Ağustos) suyu neredeyse kurur. Bunun sebebi Ege-Akdeniz ikliminin **yaz kuraklığıdır.**
2. **Kısa ve Hızlıdır:** Türkiye'nin yüksek ve engebeli yapısı nedeniyle kısa mesafede denize ulaşırlar. Hız fazla olduğu için taşıma kapasiteleri (alüvyon) yüksektir.
3. **Ulaşıma Uygun Değildir:** Hızlı akış, şelale ve çağlayanlar sebebiyle nehirlerde gemi işletilemez. (Kıyasla Nil, Ren, Tuna büyük ticaret nehirleridir — bizim nehirler öyle değil.)
4. **HES Potansiyeli Yüksektir:** Hızlı ve düşümlü akış elektrik üretimi için idealdir.

## Önemli Akarsular ve Özellikleri

### 1. Kızılırmak
* Türkiye'nin **en uzun nehridir** (1.355 km). Sivas Kızıldağ'dan doğar, Karadeniz'e (Bafra Ovası) dökülür.
* Türkiye'nin en uzun nehrinin adını verir: **KIZILırmak = En Uzun.**
* Kapalı (iç) havzadan geçmez, Karadeniz'e akar.

### 2. Fırat
* Türkiye sınırları içinde **en uzun** olan nehirdir ancak büyük kısmı Suriye ve Irak'tadır. Kaynak: Erzurum yakını.
* **Türkiye'nin en büyük havzasına** sahip nehirdir.
* Üzerinde: Keban, Karakaya, **Atatürk Barajı** (en büyük enerji kapasiteli baraj).

### 3. Dicle
* Hakkari'den doğar, Irak sınırını geçer. Fırat ile birleşerek Şattülarap'ı oluşturur.
* Üzerinde: Ilısu Barajı.

### 4. Sakarya
* Afyon Emirdağ'dan kaynaklanır, Marmara Bölgesi'nde Karadeniz'e dökülür. 824 km.

### 5. Yeşilırmak
* Sivas Yıldız Dağları'ndan kaynaklanır. Çarşamba Ovasını oluşturup Karadeniz'e dökülür.

### 6. Seyhan ve Ceyhan
* Her ikisi de Toroslardan kaynaklanır, Çukurova'yı (Adana Ovası) oluşturarak Akdeniz'e dökülür.

## Akarsu Havzaları (KPSS Tablosu)

| Havza | En uzun akarsu | Döküldüğü yer |
|-------|---------------|---------------|
| Karadeniz Havzası | Kızılırmak | Karadeniz |
| Basra Körfezi Havzası | Fırat-Dicle | Basra Körfezi (Irak) |
| Akdeniz Havzası | Seyhan-Ceyhan | Akdeniz |
| Ege Havzası | Büyük Menderes | Ege Denizi |
| Marmara Havzası | Sakarya | Karadeniz (!) |
| Kapalı İç Havza | Konya Çevresindeki dereler | Tuz Gölü |

> [!WARNING]
> DİKKAT: Sakarya nehri Marmara Bölgesi'nden geçmesine rağmen **Karadeniz'e** dökülür! ÖSYM bu tuzağı çok sever.

## Akarsu Rejimleri
* **Düzenli Rejim (Her mevsim akıyor):** Doğu Karadeniz akarsularıdır (yıl boyu yağış alır).
* **Düzensiz Rejim (Yazın kurur):** Ege, Akdeniz ve İç Anadolu akarsuları (yazın kurak).
* **Karalara akış:** Kapalı havzalardaki sular (Konya, Tuz Gölü çevresi) denize ulaşamaz, buharlaşır.`,
            mnemonics: [
                {
                    title: 'En Uzun Nehirler',
                    text: 'KıFıSaYeSeC: Kızılırmak-Fırat-Sakarya-Yeşilırmak-Seyhan-Ceyhan'
                }
            ],
            warnings: [
                'Kızılırmak = Türkiye sınırları içindeki en uzun nehirdir. Fırat toplam olarak daha uzundur ama büyük kısmı yurt dışındadır.',
                'Sakarya Marmara Bölgesi\'nden geçer ama Karadeniz\'e dökülür — klasik ÖSYM tuzağı!'
            ],
            keyPoints: [
                'En uzun: Kızılırmak (1355 km, Karadeniz\'e).',
                'En büyük havza: Fırat (Basra Körfezi).',
                'Düzenli rejim: Doğu Karadeniz akarsular.',
                'Ulaşıma uygun değil: Hız fazla, şelale çok.',
                'HES potansiyeli: Avrupa\'da 3. sıra.'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye'deki akarsularla ilgili aşağıdakilerden hangisi yanlıştır?",
                    options: [
                        "Kızılırmak, Türkiye'nin tamamı yurt içinde kalan en uzun nehridir",
                        "Sakarya nehri Marmara Bölgesi'nden geçerek Marmara Denizi'ne dökülür",
                        "Ege ve Akdeniz akarsularının yazın debisi belirgin biçimde düşer",
                        "Fırat'ın Türkiye'deki bölümü üzerinde Atatürk Barajı bulunur"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Sakarya nehri Marmara Bölgesi'nden geçmesine karşın Karadeniz'e dökülür. Marmara Denizi'ne dökülen nehir değildir. Bu ÖSYM'nin klasik tuzağıdır."
                }
            ]
        },
        {
            id: 'turkiye-golleri',
            slug: 'turkiyenin-golleri-ve-olusumu',
            title: '2. Türkiye\'nin Gölleri ve Oluşum Tipleri',
            content: `Türkiye göl sayısı ve çeşitliliği bakımından Avrupa'nın zengin ülkelerinden biridir. Göller oluşum şekillerine göre **6 ana gruba** ayrılır.

## Göl Oluşum Tipleri

### 1. Tektonik (Çöküntü) Göller
Fay hatları boyunca yerin çökmesiyle oluşan göllerdir. En büyük Türk gölleri bu tiptedir.
* **Van Gölü (430 km²):** Türkiye'nin en büyük ve en derin gölü (451 m). Sodalı-tuzlu. Kapalı havzada (suyu denize akmıyor). Tektonik + volkanik set kökenli. İnci kefali balığı yaşar.
* **Beyşehir Gölü:** Türkiye'nin en büyük tatlı su gölü. Konya.
* **Eğirdir Gölü:** Isparta. Tatlı su.
* **Burdur Gölü:** Isparta/Burdur. Sodalı.

### 2. Karstik Göller
Kireçtaşı (kalker) arazinin erimesiyle oluşan çukurlara su dolmasıyla oluşur.
* **Acıgöl (Afyon):** Sodalı, karstik.
* **Suğla Gölü (Konya):** Karstik çukur.
* Teke ve Taşeli platolarındaki göller.

### 3. Volkanik (Krater) Göller
Yanardağların patlamasıyla oluşan kraterlerin veya kalderaların suyla dolmasıyla oluşur.
* **Nemrut Gölü (Bitlis):** Dev bir kalderanın (yıkılmış krater çukurunun) su ile dolmasıyla oluşmuş. Türkiye'nin en büyük krater gölüdür.
* **Gölcük (Isparta - Eğirdir yakını):** Küçük krater gölü.

### 4. Buzul Gölleri (Sirk Gölleri)
Buzulların çanaklar kazımasıyla oluşan çukurlara eriyen buz sularının dolmasıyla oluşur. Türkiye'de **çok yüksek dağ zirvelerinde (2500m+)** bulunur.
* Kaçkar, Cilo (Hakkari), Bolkar (Niğde) dağlarındaki sirk gölleri.
* Küçük ve serin.

### 5. Set Gölleri
Bir engelin (lav akışı, heyelan, taşkın) vadileri veya çukurları kapatmasıyla oluşur.
* **Tortum Gölü (Erzurum):** Heyelan setiyle oluşmuştur. Türkiye'nin en yüksek şelalesinin bulunduğu yer.
* **Sera Gölü (Trabzon):** Heyelan set gölü.

### 6. Lagün (Kıyı) Gölleri
Kıyıda biriken alüvyonların küçük koy ve körfezleri kapatmasıyla oluşan tuzluca su kütleleridir.
* **Köyceğiz Gölü (Muğla):** Lagün kökenli.
* **Bafa Gölü (Muğla - Büyük Menderes deltası):** Eski körfez, şimdi göl.

## Türkiye'nin En Önemli Gölleri (ÖSYM Tablosu)

| Göl | Bölge | Özellik |
|-----|-------|---------|
| **Van Gölü** | Doğu Anadolu | En büyük (3713 km²), en derin, sodalı-tuzlu |
| **Beyşehir** | İç Anadolu | En büyük tatlı su gölü |
| **Tuz Gölü** | İç Anadolu | En tuzlu (%32-33 tuz), ikinci büyük |
| **Eğirdir** | Akdeniz sınırı | Tatlı su, sulama amaçlı |
| **Burdur** | Akdeniz | Sodalı |
| **İznik** | Marmara | Türkiye'nin en derin tatlı su gölü |
| **Nemrut** | Doğu Anadolu | En büyük krater gölü |`,
            mnemonics: [
                {
                    title: 'Türkiye Göl Sıralaması',
                    text: 'Van-Tuz-Beyşehir-Eğirdir: Büyükten küçüğe 4 büyük göl'
                }
            ],
            warnings: [
                'Van Gölü: En büyük + en derin + sodalı-tuzlu. "En büyük tatlı su gölü" sorusunda Van değil, Beyşehir doğru cevaptır!',
                'Tuz Gölü kapalı havzadadır — suyu denize akmaz, buharlaşır ve tuz birikir.'
            ],
            keyPoints: [
                'En büyük göl: Van Gölü (3713 km²).',
                'En büyük tatlı su gölü: Beyşehir.',
                'En tuzlu göl: Tuz Gölü (%32-33).',
                'En büyük krater gölü: Nemrut (Bitlis).',
                'İznik: En derin tatlı su gölü.'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye'nin en büyük tatlı su gölü hangisidir?",
                    options: [
                        "Van Gölü",
                        "Tuz Gölü",
                        "Beyşehir Gölü",
                        "Eğirdir Gölü"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Van Gölü Türkiye'nin en büyük gölüdür ancak sodalı-tuzludur, tatlı su değildir. En büyük tatlı su gölü Konya'daki Beyşehir Gölü'dür."
                }
            ]
        },
        {
            id: 'barajlar-ve-enerji',
            slug: 'turkiyenin-buyuk-barajlari-ve-gap',
            title: '3. Türkiye\'nin Büyük Barajları ve Sulama Projeleri',
            content: `Türkiye'nin yüksek HES potansiyeli ve tarımsal sulama ihtiyacı, büyük baraj yatırımlarını zorunlu kılmıştır. Türkiye baraj sayısı bakımından dünyada ilk 5'tedir.

## Türkiye'nin En Önemli Barajları

### 1. Atatürk Barajı (Şanlıurfa - Fırat Nehri)
* Türkiye'nin **enerji üretim kapasitesi en büyük** barajıdır (2400 MW).
* GAP projesinin kalbidir.
* Şanlıurfa Tünelleri aracılığıyla Harran Ovasını sular.
* Baraj gölü büyüklüğü Türkiye'de 1. sırada (819 km²).

### 2. Keban Barajı (Elazığ - Fırat Nehri)
* Türkiye'nin ilk büyük barajlarından biridir (1974). 1330 MW.
* Elazığ şehri baraj suları yükselmeden önce taşınmıştır.

### 3. Karakaya Barajı (Malatya - Fırat Nehri)
* Fırat üzerinde Keban'ın aşağısında. 1800 MW.

### 4. Ilısu Barajı (Mardin/Siirt - Dicle Nehri)
* 2018'de dolmaya başladı. 1200 MW.
* Hasankeyf tarihi ilçesi baraj suları altında kaldı (tartışmalı).

### 5. Karakaya + Birecik + Karkamış (Fırat Zincirleri)
Fırat ve Dicle nehirleri üzerinde ardışık sıralanan baraj zinciri GAP projesi kapsamındadır.

## GAP — Güneydoğu Anadolu Projesi

Türkiye'nin en büyük kalkınma projesidir. Fırat ve Dicle nehirleri üzerinde 22 baraj ve 19 HES içermektedir.

**GAP'ın Amaçları:**
1. Bölgeye elektrik enerjisi sağlamak
2. Sulama imkânıyla tarımı geliştirmek (nadas bitsin, çift ürün alınsın)
3. Bölgenin ekonomik kalkınmasını hızlandırmak
4. Göçü azaltmak ve bölgede nüfusu tutmak

**GAP'ın Sonuçları:**
* Pamuk, mısır, pirinç üretimi katlarca arttı.
* Yılda 2-3 hasat mümkün oldu.
* Tarım işçisi ve sanayi yatırımı bölgeye çekildi.

## KOP — Konya Ovası Projesi
İç Anadolu'da Konya ve çevresinin sulanması projesi. Beyşehir Gölü ve diğer kaynaklardan sulama suyu.

## DAP — Doğu Anadolu Projesi
Doğu Anadolu'nun kalkındırılması için tarım + altyapı projesi.

## DOKAP — Doğu Karadeniz Projesi
Karadeniz bölgesinin kalkındırılması.`,
            keyPoints: [
                'Atatürk Barajı: Türkiye\'nin en büyük enerji kapasiteli barajı (2400 MW).',
                'GAP: 22 baraj + 19 HES, Dicle + Fırat.',
                'GAP ile GDA\'da pamuk, mısır, pirinç üretimi patladı.',
                'Ilısu Barajı: Hasankeyf tartışması.'
            ],
            inlineQuizzes: [
                {
                    question: "GAP projesi ile Güneydoğu Anadolu Bölgesi'nde aşağıdaki değişikliklerden hangisi en doğrudan gerçekleşmiştir?",
                    options: [
                        "Bölgede sanayi tesisi sayısının artması",
                        "Yağış miktarının artması",
                        "Sulama imkânıyla nadas uygulamasının azalması ve çift ürün alınması",
                        "Bölgenin ikliminin Akdeniz iklimine dönüşmesi"
                    ],
                    correctOptionIndex: 2,
                    explanation: "GAP ile Dicle-Fırat sulama suyu tarım arazilerine ulaştırılmıştır. Sulama öncesinde yağışa bağlı ve nadas uygulanan tarım alanları artık yılda 2-3 kez ürün verebilmektedir. Pamuk ve mısır üretimi çarpıcı biçimde artmıştır."
                }
            ]
        },
        {
            id: 'toprak-tipleri',
            slug: 'turkiyenin-toprak-tipleri',
            title: '4. Türkiye\'nin Toprak Tipleri',
            content: `Toprak, kayaların milyonlarca yılda ufalanması ve organik maddelerle karışmasıyla oluşan canlı bir katmandır. Türkiye farklı iklim ve kayaç çeşitliliği nedeniyle **çok zengin toprak tiplerine** sahiptir.

## Başlıca Toprak Tipleri

### 1. Alüvyal (Taşınmış Killi) Toprak
* Nehirlerin taşıdığı ince kil ve minerallerden oluşur.
* **En verimli toprak tipidir.** Organik madde, su tutma kapasitesi ve mineral içeriği en yüksektir.
* **Bulunduğu Yerler:** Delta ovaları (Çukurova, Bafra, Büyük Menderes), akarsu tabanları, ova tabanları.
* Tarım: Her türlü ürün yetişir. Pamuk, buğday, mısır, sebze.

### 2. Terra Rossa (Kırmızı Akdeniz Toprağı)
* Akdeniz ikliminde kalker (kireçtaşı) kayaların çözünmesiyle arta kalan kırmızı demir oksit artığı.
* **Bulunduğu Yerler:** Akdeniz Bölgesi kıyı kesimleri ve kireçtaşlı yöreler.
* Yüzey suyu tutmaz, kuru ama tarıma elverişlidir (zeytin, tahıl, bağ).
* **Rengi:** Kırmızı — demir oksitten kaynaklanır.

### 3. Kahverengi Orman Toprağı
* Orman örtüsünün altında, organik yaprak çürümesiyle oluşur.
* **Bulunduğu Yerler:** Karadeniz ve ormanlık Akdeniz kesimleri.
* Verimli, humus oranı yüksek.

### 4. Çernezyom (Karahumus) Toprak
* Step (bozkır) ikliminde uzun çayır bitkilerinin çürümesiyle oluşur. Dünya'nın en verimli toprağı.
* **Bulunduğu Yerler:** İç Anadolu'nun sınırlı kesimleri (özellikle Erzurum-Kars platoları — büyükbaş hayvancılık).
* Koyu siyah-kahverengi renk, çok organikli.

### 5. Kestane Rengi Toprak
* Step ikliminin yaygın olduğu İç Anadolu ve GDA'da.
* Çernezyoma göre daha az organik madde içerir.
* Tahıl tarımına elverişlidir.

### 6. Tuzlu ve Bataklık Toprak
* Buharlaşmanın yüksek olduğu kapalı havza kenarlarında (Tuz Gölü çevresi) tuz birikmesiyle oluşur.
* Tarıma uygun değildir.

### 7. Rendzina Toprak
* Kalker kayalıkların üzerinde, ince ve taşlı, yetersiz gelişmiş toprak.
* Karstik yöreler (Teke-Taşeli platoları). Tarıma çok zor.

## Toprak Sorunları

### 1. Erozyon (Toprak Erozyonu)
Türkiye'nin **en ciddi çevre sorunudur.** Bitkisiz alanlarda yağmur ve rüzgar toprağı yıkayıp götürür.
* **En çok:** İç Anadolu ve GDA (bitki örtüsü zayıf + yağış düzensiz + nadas uygulaması).
* **Önlem:** Ağaçlandırma, teraslama, rüzgar kırıcı şeritler.

### 2. Çoraklaşma (Tuzlanma)
Sulu tarım uygulanan alanlarda toprağın tuz biriktirmesiyle çoraklaşması.
* Doğal buharlaşma yüksek + aşırı sulama → tuz birikir.
* Çukurova ve Konya ovasında belirgin risk.

### 3. Kirlilik
Kimyasal gübre ve zirai ilaç kullanımının aşırıya kaçması, tarım topraklarını ve yer altı sularını kirletmektedir.`,
            mnemonics: [
                {
                    title: 'Toprak Verimlilik Sırası',
                    text: 'Alü > Çer > KahOrm > Kestane > Terra > Ren: En verimliden az verimliye'
                }
            ],
            warnings: [
                'Terra Rossa kırmızı görünür ama verimlidir! "Kırmızı = verimsiz" sanılmasın.',
                'Çernezyom dünya\'nın en verimli toprağıdır ama Türkiye\'de az alanda (Erzurum-Kars) bulunur.'
            ],
            keyPoints: [
                'En verimli toprak: Alüvyal (delta ovaları).',
                'Terra Rossa: Kırmızı, Akdeniz kireçtaşı artığı.',
                'Çernezyom: Koyu siyah, Erzurum-Kars çayırlıkları.',
                'Erozyon: Türkiye\'nin 1 numaralı çevre sorunu.',
                'En çok erozyon: İç Anadolu + GDA (bitki örtüsü zayıf).'
            ],
            inlineQuizzes: [
                {
                    question: "Aşağıdaki toprak tiplerinden hangisi akarsuların taşıdığı alüvyonların birikmesiyle oluşur ve tarımsal verimlilik açısından en değerli toprak tipi sayılır?",
                    options: [
                        "Terra Rossa",
                        "Çernezyom",
                        "Alüvyal Toprak",
                        "Rendzina"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Alüvyal toprak, nehirlerin taşıdığı ince kil ve mineral birikiminden oluşur. Organik madde içeriği, su tutma kapasitesi ve mineral zenginliği nedeniyle tarımsal üretkenliği en yüksek toprak tipidir. Delta ovaları (Çukurova vb.) Türkiye'nin en verimli tarım alanlarıdır."
                }
            ]
        }
    ]
};
