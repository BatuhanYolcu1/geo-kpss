import { NoteUnit } from '@/types/notes';

export const lectureNotes: NoteUnit[] = [
    {
        id: 'unit-00',
        title: 'Türkiye\'nin Coğrafi Konumu',
        icon: 'Globe',
        sections: [
            {
                id: 'matematik-konum',
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
                    'Soru bankalarında "Hangisi enlemle açıklanamaz?" sorularında genelde cevap "Özel Konum" (Yükselti, Denizellik) ile ilgilidir. Karadeniz\'in kışın Doğu Anadolu\'dan sıcak olması enleme terstir.',
                    'Türkiye orta kuşaktadır; bu yüzden 4 mevmid belirgin yaşanır, Cephe yağışları görülür ve Batı rüzgarları eser.'
                ],
                examAnalysis: 'ÖSYM, Türkiye\'nin koordinatlarını direkt sormak yerine, kuzeye gidildikçe değişen özellikleri sormayı çok sever. 21 Haziran ve 21 Aralık tarihlerindeki gündüz sürelerini mutlaka bilin.',
                keyPoints: [
                    '36-42 Kuzey / 26-45 Doğu',
                    'Dönenceler dışındayız (Gölge yönü hep Kuzey)',
                    '4 mevsim belirgin yaşanır (Orta Kuşak)',
                    'Doğu-Batı 76 dk zaman farkı'
                ]
            },
            {
                id: 'ozel-konum',
                title: 'Özel (Göreceli) Konum',
                content: `Türkiye'nin diğer ülkelere, denizlere, kıtalara ve yer şekillerine göre olan konumudur.

### Temel Özellikler
- Üç tarafı denizlerle çevrili bir yarımadadır.
- Ortalama yükseltisi fazladır (1132 m) ve batıdan doğuya artar.
- Jeopolitik konumu çok önemlidir (Sınır komşuları, Boğazlar).
- Farklı iklimlerin aynı anda yaşanabilmesini sağlar.`,
                teacherNotes: [
                    '"Aynı anda farklı mevsim özelliklerinin yaşanması" Özel Konumdur. "Dört mevsimin belirgin yaşanması" Matematik Konumdur. Bu ikisini karıştırmak puan kaybettirir!'
                ],
                examAnalysis: 'Transit taşımacılık ve enerji koridoru olma özelliği (TANAP vb.) jeopolitik konum başlığı altında sıkça sorulur.',
                keyPoints: [
                    'Asya-Avrupa köprüsü',
                    'Boğazlara sahibiz',
                    'Yükselti Batıdan Doğuya artar',
                    'Stratejik yeraltı kaynakları'
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
                    'Menteşe Dağları kıyıya paraleldir, diğerleri diktir.',
                    'Ağrı Dağı en yüksek volkanik dağımızdır.'
                ],
                teacherNotes: [
                    'Kıyıya paralel uzanan dağlarda; kıyı ile iç kesim arası fark fazladır, nem içeri giremez.'
                ],
                examAnalysis: 'Dağların uzanış yönünün ekonomik sonuçları (Ulaşım maliyeti gibi) çok sık sorulur.',
                keyPoints: [
                    'Genç ve engebeli bir ülkeyiz',
                    'Kırıklı dağlar depremle ilişkilidir',
                    'Ege hariç kıyıya paralel uzanış'
                ]
            },
            {
                id: 'platolar',
                title: 'Platolar ve Yaylalar',
                content: `Akarsular tarafından derince yarılmış yüksek düzlüklerdir. Türkiye ekonomisinde yerleri büyüktür.

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
                teacherNotes: [
                    'Erzurum-Kars platosu üzerinde Çernezyom (Kara Topraklar) vardır. Dünyanın en verimli toprağıdır ama iklimden dolayı tarım yapılamaz, hayvancılık yapılır.'
                ],
                keyPoints: [
                    'Teke-Taşeli: Karstik / Arıcılık',
                    'Erzurum-Kars: Lav / Büyükbaş',
                    'Çatalca-Kocaeli: Sanayi / Ulaşım',
                    'İç Anadolu: Tahıl / Küçükbaş'
                ]
            },
            {
                id: 'akarsular',
                title: 'Akarsular ve Özellikleri',
                content: `Türkiye akarsuları genel olarak; akış hızları yüksek, boyları kısa ve rejimleri düzensizdir (Karadeniz hariç).

### Önemli Akarsular
- **Dicle ve Fırat:** En çok su taşıyan, enerji potansiyeli en yüksek.
- **Kızılırmak:** Türkiye sınırları içindeki en uzun kol.
- **Meriç:** Bulgaristan'dan doğar, sınır çizer.`,
                atlasLink: { layerId: 'rivers' },
                warnings: [
                    'Akarsularımız ulaşıma elverişli değildir (Eğimden dolayı). Sadece Bartın Çayı\'nda ağız kısmında taşımacılık yapılır.'
                ],
                keyPoints: [
                    'Denge profiline ulaşmamışlardır',
                    'HES potansiyelleri yüksektir',
                    'Rejimleri genelde düzensizdir'
                ]
            },
            {
                id: 'goller',
                title: 'Göller ve Oluşumları',
                content: `Türkiye göl bakımından çok zengin değildir ancak oluşum çeşitliliği fazladır.

### Oluşumlarına Göre Göller
- **Tektonik:** Tuz, Manyas, Ulubat, İznik, Sapanca, Eğirdir, Beyşehir.
- **Karstik:** Salda, Castellane, Avlan, Söğüt.
- **Karma Oluşum:** Van Gölü (Tektonik + Volkanik Set), Eğirdir.`,
                atlasLink: { layerId: 'lakes' },
                keyPoints: [
                    'En büyük: Van Gölü',
                    'En sığ: Tuz Gölü',
                    'En çok göl: Göller Yöresi (Akdeniz)'
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
                id: 'sicaklik',
                title: 'Sıcaklık ve Etki Eden Faktörler',
                content: `Türkiye'de sıcaklık dağılışını etkileyen en temel faktörler Enlem, Denizellik, Yükselti ve Bakı'dır.

### Temel Prensipler
- **Enlem:** Güneyden kuzeye gidildikçe sıcaklık azalır.
- **Yükselti:** Batıdan doğuya gidildikçe sıcaklık azalır (Her 200m'de 1°C).
- **Bakı:** Dağların güney yamaçları daha sıcaktır.
- **Denizellik:** Kıyı bölgelerde nemden dolayı sıcaklık farkı azdır.`,
                teacherNotes: [
                    'Kışın Karadeniz kıyılarının İç Anadolu\'dan sıcak olması Enleme TERS, Denizelliğe UYGUN bir durumdur.'
                ],
                keyPoints: [
                    'En yüksek sıcaklıklar: GDA (Yazın)',
                    'En düşük sıcaklıklar: DA (Kışın)',
                    'Bakı yönümüz hep GÜNEY'
                ]
            },
            {
                id: 'basinc-ruzgarlar',
                title: 'Basınç Merkezleri ve Rüzgarlar',
                content: `Türkiye'yi etkileyen 4 ana basınç merkezi vardır: İzlanda (Alçak), Sibirya (Yüksek), Basra (Alçak) ve Asor (Yüksek).

### Yerel Rüzgarlar
- **Kaypçak (Kodlama):** Karayel, Yıldız, Poyraz (Kuzeyden - Soğuk); Lodos, Kıble, Samyeli (Güneyden - Sıcak).`,
                mnemonics: [
                    {
                        title: 'Yerel Rüzgarlar "KAYIPSAKAL"',
                        text: 'Karayel, Yıldız, Poyraz -- Samyeli, Kıble, Lodos'
                    }
                ],
                warnings: [
                    'Lodos, kışın karların hızla erimesine ve soba zehirlenmelerine yol açar.'
                ],
                keyPoints: [
                    'Sibirya: Kışın dondurucu soğuk',
                    'Basra: Yazın kavurucu sıcak',
                    'Batı rüzgarları kuşağındayız'
                ]
            },
            {
                id: 'iklim-tipleri',
                title: 'İklim Tipleri ve Bitki Örtüsü',
                content: `Türkiye'de görülen 4 ana iklim ve bitki örtüsü:

### 1. Akdeniz İklimi
En çok yağış KIŞ. Bitki örtüsü MAKİ (Zeytin, Defne, Keçiboynuzu).
### 2. Karadeniz İklimi
Her mevsim yağışlı. En çok yağış SONBAHAR. Bitki örtüsü ORMAN.
### 3. Step (Bozkır) İklimi
En çok yağış İLKBAHAR. Bitki örtüsü BOZKIR.
### 4. Sert Karasal İklim
Erzurum-Kars. En çok yağış YAZ. Bitki örtüsü ÇAYIR.`,
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
        id: 'unit-03',
        title: 'Nüfus ve Yerleşme',
        icon: 'Users',
        sections: [
            {
                id: 'nufus-dagilisi',
                title: 'Nüfusun Dağılımını Etkileyen Faktörler',
                content: `Türkiye'de nüfus dağılışı dengesizdir.

### Yoğun Nüfuslu Yerler
- **Marmara:** Çatalca-Kocaeli (Sanayi-Ulaşım).
- **Akdeniz:** Çukurova, Antalya.
- **GDA:** Gaziantep (Sanayi).

### Seyrek Nüfuslu Yerler
- **Doğu Anadolu:** Hakkari (Yer şekilleri).
- **Akdeniz:** Teke ve Taşeli (Karstik arazi).
- **İç Anadolu:** Tuz Gölü çevresi (Kuraklık).`,
                teacherNotes: [
                    'Nüfusun dağılışında yer şekilleri genelde belirleyici rol oynar.'
                ],
                keyPoints: [
                    'Nüfusun çoğu Batıdadır',
                    'Hizmet sektörü 1. sıradadır',
                    'Nüfus artış hızı azalmaktadır'
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
                title: 'Tarım ve Hayvancılık',
                content: `Türkiye bir tarım ülkesinden sanayileşen bir ülkeye dönüşmektedir.

### Tarım Ürünleri
- **Kış Ilıklığı İsteyenler:** Zeytin, Turunçgil, Muz, Çay, Fındık.
- **Devlet Kontrolünde Olanlar:** Pirinç (Hastalık), Kenevir (Uyuşturucu), Haşhaş (Uyuşturucu), Tütün (Kalite), Şeker Pancarı (Kota).

### Hayvancılık
- **Küçükbaş:** İç Anadolu ve GDA.
- **Büyükbaş (Mera):** Erzurum-Kars.
- **Büyükbaş (Ahır):** Marmara ve Ege (Tüketiciye yakınlık).
- **Kümes Hayvancılığı:** Marmara (Tüketiciye yakınlık).`,
                mnemonics: [
                    {
                        title: 'Devlet Kontrolündeki Ürünler',
                        text: 'PiKe HaT-Ş (Pirinç, Kenevir, Haşhaş, Tütün, Şeker Pancarı)'
                    }
                ],
                teacherNotes: [
                    'Büyükbaş ahır hayvancılığında iklimin etkisi yoktur, tamamen pazar (nüfus) odaklıdır.'
                ],
                keyPoints: [
                    'GAP ile Şanlıurfa pamukta 1. sıradadır',
                    'Fındık ve Kayısı ihracatında dünya 1.siyiz',
                    'Zeytin üretiminde Ege 1. sıradadır'
                ]
            },
            {
                id: 'madenler-enerji',
                title: 'Madenler ve Enerji Kaynakları',
                content: `Maden çeşitliliği bakımından zengin bir ülkeyiz.

### Önemli Madenler
- **Bor:** Dünya rezervi lideriyiz.
- **Demir:** Sivas-Divriği, Malatya-Hekimhan.
- **Bakır:** Kastamonu-Küre, Artvin-Murgul.

### Enerji Kaynakları
- **Yenilenebilir:** Hidroelektrik (Fırat/Dicle), Rüzgar (Ege), Jeotermal (Denizli-Sarayköy), Güneş (GDA/İç Anadolu).
- **Fosil:** Linyit (Yaygın), Taşkömürü (Zonguldak), Petrol (Batman), Doğalgaz (Kırklareli-Hamitabat).`,
                mnemonics: [
                    {
                        title: 'Bakır Çıkarım (KADER)',
                        text: 'Kastamonu, Artvin, Diyarbakır, Elazığ, Rize'
                    }
                ],
                teacherNotes: [
                    'Taşkömürü 1. jeolojik zamanda, Linyit 3. jeolojik zamanda oluşmuştur.'
                ],
                keyPoints: [
                    'Jeotermal enerji sadece Ege\'de',
                    'En çok elektrik üretimi Doğalgaz/İthal Kömür/Barajlar arasındadır',
                    'Nükleer santral Mersin-Akkuyu\'da inşa halindedir'
                ]
            },
            {
                id: 'sanayi-ulasim',
                title: 'Sanayi, Ulaşım ve Ticaret',
                content: `Sanayi tesisleri genelde ulaşım ve pazara yakın yerlerde toplanmıştır.

### Önemli Sanayi Kolları
- **Otomotiv:** Marmara ve Ege (İhracat lideri).
- **Demir-Çelik:** Karabük-Ereğli (Enerjiye yakınlık), İskenderun (Ulaşım).
- **Petrol Rafinerileri:** İzmit (İpraş), İzmir (Aliağa), Batman (Hammadde), Kırıkkale (Orta Anadolu).

### Ulaşım Tipleri
- **En Fazla Kullanılan:** Karayolu (Yolcu ve yük).
- **En Ucuz:** Denizyolu (Uluslararası ticaret).`,
                keyPoints: [
                    'Otomotiv en çok döviz getiren sektördür',
                    'İhracatta 1. pazarımız Almanya\'dır',
                    'İthalatta 1. pazarımız genelde Çin veya Rusya\'dır'
                ]
            }
        ]
    },
    {
        id: 'unit-05',
        title: 'Bölgeler ve Bölgesel Projeler',
        icon: 'Map',
        sections: [
            {
                id: 'bolgesel-projeler',
                title: 'Bölgesel Kalkınma Projeleri',
                content: `Bölgeler arası gelişmişlik farkını azaltmak için uygulanan projelerdir.

### Önemli Projeler
- **GAP (Güneydoğu Anadolu Projesi):** En büyük proje. Sulama ve enerji odaklıdır. Pamuk üretimini zirveye taşımıştır.
- **DAP (Doğu Anadolu Projesi):** Hayvancılık odaklıdır.
- **DOKAP (Doğu Karadeniz Projesi):** Yaylacılık ve ulaşım odaklıdır.
- **ZBK (Zonguldak-Bartın-Karabük):** Sanayi ve madencilik odaklıdır.`,
                examAnalysis: 'GAP\'ın bitmesiyle bölgede değişen şeyler (Tarım ürünü çeşitliliği, Sanayi artışı, Göçün azalması) çok sık sorulur.',
                keyPoints: [
                    'GAP ile nadas alanları azalmıştır',
                    'Yeşilırmak Havzası (YHGP) kirliliği önleme amaçlıdır',
                    'KOP (Konya Ovası Projesi) sulama amaçlıdır'
                ]
            },
            {
                id: 'dogal-afetler',
                title: 'Türkiye\'de Doğal Afetler',
                content: `Türkiye bir afetler ülkesidir.

### Afet Türleri
- **Deprem:** En çok can ve mal kaybına yol açan afet. (KAF, DAF, BAF hatları).
- **Heyelan:** En çok Karadeniz\'de (Yağış ve killi toprak).
- **Erozyon:** En çok İç Anadolu ve GDA (Bitki örtüsü azlığı).
- **Çığ:** En çok Doğu Anadolu (Yükselti ve eğim).`,
                warnings: [
                    'Heyelan ve Erozyon farkına dikkat! Heyelan anlık kütle hareketidir, Erozyon yavaş toprak süpürülmesidir.'
                ],
                keyPoints: [
                    'Türkiye bir deprem ülkesidir',
                    'Ağaçlandırma erozyonu önler ama heyelanı önleyemeyebilir',
                    'En çok orman yangını Akdeniz ve Ege\'dedir'
                ]
            }
        ]
    }
];
