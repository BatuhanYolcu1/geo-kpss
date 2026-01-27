import { NoteUnit } from '@/types/notes';

export const curriculum: NoteUnit[] = [
    {
        id: 'unit-00',
        title: 'Türkiye\'nin Coğrafi Konumu',
        icon: 'Globe',
        sections: [
            {
                id: 'matematik-konum',
                slug: 'matematik-mutlak-konum',
                title: 'Matematik (Mutlak) Konum',
                content: `Türkiye, 36°-42° Kuzey enlemleri ile 26°-45° Doğu boylamları arasında yer alır.

### Enlemin Etkileri (Kuzey Yarım Küre)
- Güneyden kuzeye gidildikçe güneş ışınlarının geliş açısı küçülür.
- Gölge boyları uzar.
- Sıcaklıklar genelde azalır (Denizellik hariç).
- Gece-gündüz süre farkı artır.
- Çizgisel hız azalır, yerçekimi artar.

### Boylamın Etkileri
- Türkiye en doğusu ile en batısı arasında 19 boylam farkı vardır (19 x 4 = 76 dakika).
- Aynı anda tek yerel saat kullanılır (2016'dan beri sadece Iğdır - 45° Doğu ayarı).`,
                atlasLink: { coords: { lat: 39.0, lng: 35.0, zoom: 5 } },
                mnemonics: [
                    {
                        title: 'Enlem Sonuçları (G-K Yönü)',
                        text: 'Sıcaklık Azalır, Gölge Uzar, Çizgisel Hız Azalır.'
                    }
                ],
                warnings: [
                    'Türkiye\'de güneş ışınları hiçbir zaman 90 derece ile gelmez, bu yüzden gölge boyu asla sıfır olmaz (Dönenceler dışındayız).',
                    'Aynı boylam üzerindeki noktalarda sadece yerel saat and öğle vakti aynıdır. Gündüz süresi sadece ekinokslarda aynıdır.'
                ],
                teacherNotes: [
                    'Soru bankalarında "Hangisi enlemle açıklanamaz?" sorularında genelde cevap "Özel Konum" (Yükselti, Denizellik) ile ilgilidir.',
                    'Türkiye orta kuşaktadır; bu yüzden 4 mevsim belirgin yaşanır.'
                ],
                keyPoints: [
                    '36-42 Kuzey / 26-45 Doğu',
                    'Dönenceler dışındayız',
                    '4 mevsim belirgin yaşanır',
                    'Doğu-Batı 76 dk zaman farkı'
                ]
            },
            {
                id: 'ozel-konum',
                slug: 'ozel-goreceli-konum',
                title: 'Özel (Göreceli) Konum',
                content: `Türkiye'nin diğer ülkelere, denizlere, kıtalara ve yer şekillerine göre olan konumudur.

### Temel Özellikler
- Üç tarafı denizlerle çevrili bir yarımadadır.
- Ortalama yükseltisi fazladır (1132 m) ve batıdan doğuya artar.
- Jeopolitik konumu çok önemlidir (Sınır komşuları, Boğazlar).
- Farklı iklimlerin aynı anda yaşanabilmesini sağlar.`,
                examAnalysis: 'Transit taşımacılık ve enerji koridoru olma özelliği (TANAP vb.) jeopolitik konum başlığı altında sıkça sorulur.',
                keyPoints: [
                    'Asya-Avrupa köprüsü',
                    'Boğazlara sahibiz',
                    'Yükselti Batıdan Doğuya artar'
                ]
            }
        ]
    },
    {
        id: 'unit-01',
        title: 'Türkiye\'nin Yer Şekilleri',
        icon: 'Mountain',
        sections: [
            {
                id: 'daglar',
                slug: 'daglar-ve-olusumlari',
                title: 'Dağlar ve Oluşumları',
                content: `Türkiye'nin dağları oluşumlarına göre üç gruptur: Kıvrımlı, Kırıklı ve Volkanik.

### 1. Kıvrımlı Dağlar
Alp-Himalaya kıvrım sisteminin parçasıdır. Karadeniz (Kuzey Anadolu Dağları) ve Akdeniz (Toroslar) kıyılarında yaygındır.

### 2. Kırıklı Dağlar (Horst-Graben)
Ege'de yaygındır. Madra, Yunt, Bozdağlar, Aydın, Menteşe. Amanoslar (Nur Dağları) Akdeniz'deki tek kırıklı dağdır.

### 3. Volkanik Dağlar
Daha çok fay hatlarını takip ederler. İç Anadolu ve Doğu Anadolu'da hatlar şeklinde uzanırlar.`,
                atlasLink: { layerId: 'mountains' },
                mnemonics: [
                    {
                        title: 'Ege Kırıklı Dağlar',
                        text: 'KAZ - MADRA - YUNT - BOZDAĞLAR - AYDIN - MENTEŞE'
                    }
                ],
                warnings: [
                    'Menteşe Dağları kıyıya paraleldir, diğerleri diktir.'
                ],
                teacherNotes: [
                    'Kıyıya paralel uzanan dağlarda; kıyı ile iç kesim arası fark fazladır, nem içeri giremez.'
                ],
                keyPoints: [
                    'Genç ve engebeli bir ülkeyiz',
                    'Kırıklı dağlar depremle ilişkilidir',
                    'Ege hariç kıyıya paralel uzanış'
                ]
            },
            {
                id: 'platolar',
                slug: 'turkiye-platolari',
                title: 'Platolar ve Yaylalar',
                content: `Akarsular tarafından derince yarılmış yüksek düzlüklerdir. 

### Önemli Platolar
- **Aşınım Platoları:** Çatalca-Kocaeli.
- **Karstik Platolar:** Teke ve Taşeli.
- **Volkanik (Lav) Platolar:** Erzurum-Kars-Ardahan.
- **Tabaka Düzlüğü Platoları:** Haymana, Cihanbeyli, Obruk, Bozok, Uzunyayla.`,
                atlasLink: { layerId: 'plateaus' },
                mnemonics: [
                    {
                        title: 'İç Anadolu Platoları',
                        text: 'H-O-B-U-C (Haymana, Obruk, Bozok, Uzunyayla, Cihanbeyli)'
                    }
                ],
                keyPoints: [
                    'Teke-Taşeli: Karstik / Arıcılık',
                    'Erzurum-Kars: Lav / Büyükbaş',
                    'Çatalca-Kocaeli: Sanayi / Ulaşım'
                ]
            }
        ]
    },
    {
        id: 'unit-02',
        title: 'Türkiye\'nin İklimi',
        icon: 'CloudRain',
        sections: [
            {
                id: 'iklim-tipleri',
                slug: 'iklim-tipleri-ve-bitki-ortusu',
                title: 'İklim Tipleri ve Bitki Örtüsü',
                content: `Türkiye'de görülen 4 ana iklim ve bitki örtüsü:

### 1. Akdeniz İklimi
En çok yağış KIŞ. Bitki örtüsü MAKİ.
### 2. Karadeniz İklimi
Her mevsim yağışlı. En çok yağış SONBAHAR.
### 3. Step (Bozkır) İklimi
En çok yağış İLKBAHAR. Bitki örtüsü BOZKIR.
### 4. Sert Karasal İklim
Erzurum-Kars. En çok yağış YAZ.`,
                mnemonics: [
                    {
                        title: 'Yağış Rejimi (E kuralı)',
                        text: 'İç Anadolu (İ) -> Karadeniz (S) -> Akdeniz (K) -> E-Kars (Y)'
                    }
                ],
                keyPoints: [
                    'Bitki çeşitliliği en fazla olan ülke',
                    'Maki tahrip edilirse Garig olur'
                ]
            }
        ]
    },
    {
        id: 'unit-04',
        title: 'Ekonomik Coğrafya',
        icon: 'TrendingUp',
        sections: [
            {
                id: 'tarim-hayvancilik',
                slug: 'tarim-ve-hayvancilik',
                title: 'Tarım ve Hayvancılık',
                content: `Türkiye bir tarım ülkesinden sanayileşen bir ülkeye dönüşmektedir.

### Tarım Ürünleri
- **Devlet Kontrolünde Olanlar:** Pirinç, Kenevir, Haşhaş, Tütün, Şeker Pancarı.

### Hayvancılık
- **Küçükbaş:** İç Anadolu ve GDA.
- **Büyükbaş (Mera):** Erzurum-Kars.
- **Büyükbaş (Ahır):** Marmara ve Ege.`,
                mnemonics: [
                    {
                        title: 'Devlet Kontrolündeki Ürünler',
                        text: 'PiKe HaT-Ş (Pirinç, Kenevir, Haşhaş, Tütün, Şeker Pancarı)'
                    }
                ],
                keyPoints: [
                    'GAP ile Şanlıurfa pamukta 1. sıradadır',
                    'Fındık ve Kayısı ihracatında dünya 1.siyiz'
                ]
            },
            {
                id: 'madenler-enerji',
                slug: 'madenler-ve-enerji-kaynaklari',
                title: 'Madenler ve Enerji Kaynakları',
                content: `Maden çeşitliliği bakımından zengin bir ülkeyiz.

### Önemli Madenler
- **Bor:** Dünya rezervi lideriyiz.
- **Demir:** Sivas-Divriği, Malatya-Hekimhan.

### Enerji Kaynakları
- **Yenilenebilir:** Hidroelektrik, Rüzgar, Jeotermal, Güneş.
- **Fosil:** Linyit, Taşkömürü, Petrol, Doğalgaz.`,
                mnemonics: [
                    {
                        title: 'Bakır Çıkarım (KADER)',
                        text: 'Kastamonu, Artvin, Diyarbakır, Elazığ, Rize'
                    }
                ],
                keyPoints: [
                    'Jeotermal enerji sadece Ege\'de',
                    'Taşkömürü sadece Zonguldak\'ta'
                ]
            }
        ]
    },
    {
        id: 'unit-05',
        title: 'Bölgesel Projeler',
        icon: 'Map',
        sections: [
            {
                id: 'bolgesel-projeler',
                slug: 'bolgesel-kalkinma-projeleri',
                title: 'Bölgesel Kalkınma Projeleri',
                content: `Bölgeler arası gelişmişlik farkını azaltmak için uygulanan projelerdir.

### Önemli Projeler
- **GAP:** En büyük proje. Sulama ve enerji odaklıdır.
- **DAP:** Hayvancılık odaklıdır.
- **DOKAP:** Yaylacılık ve ulaşım odaklıdır.`,
                examAnalysis: 'GAP\'ın bitmesiyle bölgede değişen şeyler çok sık sorulur.',
                keyPoints: [
                    'GAP ile nadas alanları azalmıştır',
                    'KOP sulama amaçlıdır'
                ]
            }
        ]
    }
];
