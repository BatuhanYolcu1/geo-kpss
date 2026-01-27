import { NoteUnit } from '@/types/notes';

export const lectureNotes: NoteUnit[] = [
    {
        id: 'unit-01',
        title: 'Türkiye\'nin Yer Şekilleri',
        icon: 'Mountain',
        sections: [
            {
                id: 'daglar',
                title: 'Dağlar ve Oluşumları',
                content: `Türkiye'nin yer şekilleri oldukça çeşitlidir. Dağlarımız oluşumlarına göre üç temel gruba ayrılır.

### 1. Kıvrımlı Dağlar
Levha hareketleri sonucu tortul tabakaların esnekliği nedeniyle kıvrılarak yükselmesiyle oluşur. Karadeniz ve Akdeniz'deki sıradağlarımız bu tiptir.
- **Kuzey Anadolu Dağları:** Yıldız, Küre, Canik, Rize, Kaçkar.
- **Toroslar:** Bey Dağları, Bolkar, Aladağlar, Binboğa.

### 2. Kırıklı Dağlar (Horst-Graben)
Sertleşmiş tabakaların kırılmasıyla oluşur. Ege Bölgesi'ndeki dağlarımızın çoğu bu şekilde oluşmuştur. Yükselen kısımlara **Horst**, çöken kısımlara **Graben** denir.

### 3. Volkanik Dağlar
Magmanın yeryüzüne çıkması veya yüzeye yakın yerlerde soğumasıyla oluşur.
- **İç Anadolu:** Erciyes, Hasan, Melendiz, Karadağ, Karacadağ.
- **Doğu Anadolu:** Ağrı, Tendürek, Süphan, Nemrut.`,
                atlasLink: { layerId: 'mountains' },
                mnemonics: [
                    {
                        title: 'Ege Kırıklı Dağlar (KUZEYDEN GÜNEYE)',
                        text: 'KAZ - MADRA - YUNT - BOZDAĞLAR - AYDIN - MENTEŞE (Kod: KazMa Yunt Boz Aydın Menteşe)'
                    },
                    {
                        title: 'İç Anadolu Volkanik Dağları',
                        text: 'KEK-HASAN (Karacadağ, Erciyes, Karadağ, Hasan, Melendiz)'
                    }
                ],
                warnings: [
                    'Menteşe Dağları Ege\'de olmasına rağmen kıyıya paralel uzanır! Bu durum yağış artışına sebep olur.',
                    'Güneydoğu Anadolu\'daki Karacadağ, yayvan yapılı (kalkan) tek volkanımızdır.'
                ],
                teacherNotes: [
                    'Karadeniz ve Akdeniz\'de dağların kıyıya paralel uzanması; kıyı ile iç kesim ulaşımını zorlaştırır, geçitlere ihtiyaç duyulur.',
                    'Ege\'de dağların dik uzanması kıyının çok girintili çıkıntılı (enine kıyı) olmasına yol açar.'
                ],
                examAnalysis: 'KPSS\'de son 10 yılda dağların uzanış yönünün iklim ve ulaşıma etkileri 4 kez sorulmuştur. Özellikle Menteşe ve Nur Dağları\'nın istisnai durumuna dikkat edin.',
                keyPoints: [
                    'En yüksek zirve: Ağrı Dağı',
                    'Kırıklı dağlar en çok Ege\'dedir',
                    'Karacadağ kalkan volkandır',
                    'Dağlar genelde Doğu-Batı uzanır'
                ]
            },
            {
                id: 'ovalar',
                title: 'Ovalar ve Deltalar',
                content: `Türkiye'nin ovaları oluşumlarına göre tektonik, karstik ve delta ovaları olarak ayrılır.

### Delta Ovaları
Akarsuların taşıdıkları alüvyonları denizin sığ olduğu kıyılarda biriktirmesiyle oluşur.
- **Ege:** Dikili, Menemen, Selçuk, Balat.
- **Akdeniz:** Çukurova (En büyük), Silifke.
- **Karadeniz:** Bafra, Çarşamba.

### Karstik Ovalar (Polye)
Kireçtaşının erimesiyle oluşan ovalardır. Akdeniz'in batısında (Teke-Taşeli çevresi) yaygındır.`,
                atlasLink: { layerId: 'plains', focus: 'plain-01' },
                mnemonics: [
                    {
                        title: 'Karstik Ovalar (Kod: TAKKEM)',
                        text: 'Tefenni, Acıpayam, Korkuteli, Kestel, Elmalı, Muğla'
                    }
                ],
                warnings: [
                    'Delta oluşumu için kıyıda gel-git etkisinin az olması ve kıyının sığ (Kıta sahanlığının geniş) olması şarttır.',
                    'Marmara Bölgesi\'nde aktif delta oluşumu çok azdır (Çatalca-Kocaeli sığlık olmasına rağmen akıntı fazladır).'
                ],
                teacherNotes: [
                    'Delta ovaları tarımsal verimin en yüksek olduğu, sanayi bitkilerinin yoğunlaştığı yerlerdir.',
                    'Tektonik ovalar fay hatları üzerindedir, deprem riski yüksektir.'
                ],
                examAnalysis: 'ÖSYM delta ve karstik ovaları her 2-3 yılda bir mutlaka soruyor. Delta isimleri ile nehirleri eşleştirme sorularına hazır olun.',
                keyPoints: [
                    'En büyük delta: Çukurova',
                    'Karstik ovalar Akdeniz\'dedir',
                    'Tektonik ovalar en yaygın olanıdır',
                    'Ovalar genelde tarım merkezidir'
                ]
            }
        ]
    },
    {
        id: 'unit-02',
        title: 'İklim ve Bitki Örtüsü',
        icon: 'CloudRain',
        sections: [
            {
                id: 'iklim-tipleri',
                title: 'Türkiye\'de İklim Tipleri',
                content: `Türkiye'de üç ana iklim tipi görülür:

### 1. Akdeniz İklimi
Yazlar sıcak ve kurak, kışlar ılık ve yağışlıdır. En çok yağış KIŞIN düşer. Karakteristik bitki örtüsü **Maki**'dir (Zeytin, zakkum, defne).

### 2. Karadeniz İklimi
Her mevsim yağışlıdır. En çok yağış SONBAHAR'da düşer. Bitki örtüsü **Orman**'dır. Nemlilikten dolayı güneşlenme süresi en azdır.

### 3. Karasal İklim
Yazlar sıcak ve kurak, kışlar soğuk ve kar yağışlıdır. İkiye ayrılır:
- **İç Anadolu Tipi:** En çok yağış İlkbahar (Konveksiyonel). Bitki örtüsü Bozkır.
- **Sert Karasal (Erzurum-Kars):** En çok yağış Yaz. Bitki örtüsü Çayır.`,
                atlasLink: { coords: { lat: 38.0, lng: 32.0, zoom: 6 } },
                mnemonics: [
                    {
                        title: 'Yağış Rejimi "e" Kuralı',
                        text: 'Haritaya küçük bir "e" harfi çizin: İç Anadolu (İlkbahar) -> Karadeniz (Sonbahar) -> Ege/Akdeniz (Kış) -> Erzurum/Kars (Yaz)'
                    }
                ],
                teacherNotes: [
                    'İklim sorularında "bağıl nem - maksimum nem" kavramlarına dikkat! Karadeniz\'de bağıl nem hep yüksektir.',
                    'Erzurum-Kars\'ın yaz yağışı almasının sebebi yüksek enlem ve yükseltidir.'
                ],
                examAnalysis: 'Sıcaklık ve yağış grafiği verip iklim tipini sormak klasik bir KPSS sorusudur. Karasal iklim ile Sert Karasal iklimin yağış zamanını karıştırmayın.',
                keyPoints: [
                    'Maki tahrip edilirse Garig oluşur',
                    'Orman üst sınırı en yüksek Doğu Anadolu',
                    'Türkiyenin en yağışlı ili: Rize',
                    'En kurak yer: Iğdır ve Tuz Gölü çevresi'
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
                id: 'madenler',
                title: 'Madenler ve Enerji Kaynakları',
                content: `Türkiye maden çeşitliliği bakımından dünyada 10. sıradadır.

### Stratejik Madenler
- **Bor:** Dünya rezervinin %73'ü Türkiye'dedir. Kullanım alanı çok geniştir (Jet yakıtı, cam, gübre). **İşletme:** Bandırma ve Kırka.
- **Demir:** Ağır sanayinin temelidir. **Yerler:** Sivas-Divriği, Malatya-Hekimhan.
- **Krom:** Paslanmaz çelik yapımında kullanılır. **Yerler:** Elazığ-Guleman, Muğla-Fethiye.
- **Mermer:** İhracat gelirimizde 1. sıradadır. **Yerler:** Afyon, Marmara Adası.`,
                atlasLink: { layerId: 'mines' },
                mnemonics: [
                    {
                        title: 'Bor Çıkarım Yerleri',
                        text: 'BEKEB (Bandırma, Emet, Kırka, Emet, Bigadiç)'
                    },
                    {
                        title: 'Bakır Çıkarım (KADER)',
                        text: 'Kastamonu, Artvin, Diyarbakır, Elazığ, Rize'
                    }
                ],
                warnings: [
                    'Bakır madeni Rize-Çayeli ve Artvin-Murgul\'da çıkarılır ancak SAMSUN\'da işlenir (Ulaşım ve Liman avantajı).',
                    'Alüminyum (Boksit) en çok Konya-Seydişehir\'de bulunur.'
                ],
                teacherNotes: [
                    'Madenlerin yerini öğrenirken çıkarım yeri (ocak) ile işleme yerini (fabrika) ayırt etmeniz istenir. Fabrikanın orada olma sebebi Genelde Ham maddeye yakınlık veya Ulaşımdır.',
                    'Linyit ile elektrik üreten santrallere Termik Santral denir.'
                ],
                examAnalysis: 'Madenler her yıl 1-2 soru getirir. Özellikle Bor, Demir ve Bakır vazgeçilmezdir. İşleme tesislerinin neden orada kurulduğu (Ulaşım vs Ham madde) sorgulanır.',
                keyPoints: [
                    'Rezervi en çok: Linyit',
                    'İhracat 1.si: Mermer',
                    'Taşkömürü sadece Zonguldak\'ta',
                    'Bor işletmeleri: Bandırma ve Kırka'
                ]
            }
        ]
    }
];
