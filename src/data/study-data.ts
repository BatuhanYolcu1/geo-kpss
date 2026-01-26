import { StudyCategory } from '@/types/quiz';

export const studyCategories: StudyCategory[] = [
    {
        id: 'fiziki',
        title: 'Fiziki Coğrafya',
        icon: 'Map',
        topics: [
            {
                id: 'daglar',
                title: 'Türkiye\'nin Dağları',
                content: 'Türkiye, Alp-Himalaya kıvrım kuşağında yer alan genç oluşumlu bir ülkedir. Dağlarımız oluşumlarına göre üç gruba ayrılır: Kıvrım, Kırıklı ve Volkanik dağlar.',
                keyFacts: [
                    'En yüksek dağımız: Ağrı Dağı (5137m).',
                    'Kırıklı dağlar en çok Ege bölgesindedir (Kaz, Madra, Yunt, Aydın, Menteşe).',
                    'Karadeniz ve Akdeniz\'de dağlar denize paralel uzanır.',
                    'Ege\'de dağlar denize dik uzanır (Menteşe Dağları hariç).'
                ],
                relatedCoordinates: { lat: 39.0, lng: 35.0, zoom: 6 }
            },
            {
                id: 'iklim',
                title: 'Türkiye\'nin İklim Biçimleri',
                content: 'Türkiye\'de matematiksel konum nedeniyle Akdeniz iklimi, özel konum nedeniyle Karadeniz ve Karasal iklim tipleri görülür.',
                keyFacts: [
                    'En çok yağış alan yer: Doğu Karadeniz (Rize).',
                    'En az yağış alan yer: Tuz Gölü çevresi ve Iğdır.',
                    'Güneydoğu Anadolu, şiddetli buharlaşma nedeniyle en kurak bölgedir.',
                    'Akdeniz ikliminde yağışlar en çok kışın, Karadeniz ikliminde ise sonbaharda düşer.'
                ],
                relatedCoordinates: { lat: 38.0, lng: 32.0, zoom: 6 }
            },
            {
                id: 'akarsular',
                title: 'Akarsular ve Göller',
                content: 'Türkiye yatak eğimi fazla olan, akış hızı yüksek akarsulara sahiptir. Bu durum hidroelektrik potansiyelimizi artırır.',
                keyFacts: [
                    'En uzun nehir (sınırlarımız içinde): Kızılırmak.',
                    'En büyük göl: Van Gölü (Sodalı).',
                    'En derin göl: Salda Gölü.',
                    'Kapalı havzalar: Tuz Gölü, Aras-Kura, Van Gölü, Göller Yöresi.'
                ],
                relatedCoordinates: { lat: 39.0, lng: 38.0, zoom: 6 }
            }
        ]
    },
    {
        id: 'beseri',
        title: 'Beşeri Coğrafya',
        icon: 'Users',
        topics: [
            {
                id: 'nufus',
                title: 'Nüfus ve Yerleşme',
                content: 'Türkiye nüfusu kıyı bölgelerde ve büyük şehirlerde toplanmıştır. İç kesimlerde nüfus yoğunluğu azdır.',
                keyFacts: [
                    'Nüfus yoğunluğu en fazla olan bölge: Marmara.',
                    'Nüfus yoğunluğu en az olan il: Tunceli.',
                    'Türkiye\'de nüfus artış hızı son yıllarda düşme eğilimindedir.',
                    'Kalıcı köy altı yerleşmeleri: Mahalle, Divan, Mezra, Çiftlik.'
                ],
                relatedCoordinates: { lat: 41.0, lng: 29.0, zoom: 7 }
            }
        ]
    },
    {
        id: 'ekonomik',
        title: 'Ekonomik Coğrafya',
        icon: 'TrendingUp',
        topics: [
            {
                id: 'madenler',
                title: 'Madenler ve Enerji',
                content: 'Türkiye maden çeşitliliği bakımından zengindir. Bor, mermer, krom gibi madenlerde dünya çapında öneme sahibiz.',
                keyFacts: [
                    'Bor: Balıkesir, Kütahya, Eskişehir (Dünya rezervinin %73\'ü).',
                    'Demir: Sivas (Divriği), Malatya (Hekimhan).',
                    'Bakır: Artvin (Murgul), Kastamonu (Küre).',
                    'Linyit: En çok Kahramanmaraş (Afşin-Elbistan).',
                    'Doğalgaz: Kırklareli (Hamitabat).'
                ],
                relatedCoordinates: { lat: 39.0, lng: 38.0, zoom: 6 }
            },
            {
                id: 'tarim',
                title: 'Tarım ve Hayvancılık',
                content: 'Tarımda modernleşme (intansif tarım) ile verim artmaktadır. GAP projesi Güneydoğu Anadolu\'da tarım yapısını değiştirmiştir.',
                keyFacts: [
                    'Fındık ve Çay: Karadeniz (Dünya lideri).',
                    'Pamuk: Şanlıurfa (GAP sonrası lider).',
                    'Zeytin: Ege ve Güney Marmara.',
                    'Küçükbaş hayvancılık: İç Anadolu ve Doğu Anadolu.',
                    'Büyükbaş hayvancılık (Mera): Erzurum-Kars.'
                ],
                relatedCoordinates: { lat: 38.0, lng: 34.0, zoom: 6 }
            },
            {
                id: 'sanayi',
                title: 'Sanayi ve Ulaşım',
                content: 'Türkiye sanayisi en çok Marmara ve Ege bölgelerinde gelişmiştir. Ulaşım ağları son yıllarda tünel ve köprülerle güçlendirilmiştir.',
                keyFacts: [
                    'Demir-Çelik: Karabük, Ereğli (Enerji yakını), İskenderun (Ulaşım yakını).',
                    'Otomotiv: Bursa, Kocaeli, Sakarya, İstanbul.',
                    'Hızlı Tren: Ankara-Eskişehir (İlk hat).',
                    'En büyük ihracat limanı: İzmir.',
                    'En büyük ithalat limanı: İstanbul.'
                ],
                relatedCoordinates: { lat: 40.0, lng: 30.0, zoom: 7 }
            }
        ]
    }
];
