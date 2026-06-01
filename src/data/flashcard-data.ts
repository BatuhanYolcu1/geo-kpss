import { FlashcardCategory } from '@/types/flashcard';

export const flashcardDecks: FlashcardCategory[] = [
    // ─── 1. TÜRKİYE'NİN KONUMU ──────────────────────────────────
    {
        id: 'fiziki-konum',
        title: 'Türkiye\'nin Konumu',
        icon: 'Globe',
        color: 'from-indigo-500 to-violet-600',
        cards: [
            { id: 'fc-001', front: 'Türkiye hangi yarımkürelerde yer alır?', back: 'Kuzey Yarımküre ve Doğu Yarımküre. (36°-42° K, 26°-45° D)', difficulty: 'easy', category: 'fiziki-konum' },
            { id: 'fc-002', front: 'Türkiye\'nin en doğusu ile en batısı arasındaki yerel saat farkı kaçtır?', back: '19 meridyen × 4 dk = 76 dakika (1 saat 16 dk). En doğu: Iğdır (Dilucu), en batı: Çanakkale (Gökçeada)', difficulty: 'medium', category: 'fiziki-konum' },
            { id: 'fc-003', front: 'Türkiye\'de ulusal saat hangi meridyene göredir?', back: '+3 (UTC+3) — 45° Doğu meridyeni (Iğdır). 2016\'dan itibaren yaz saati uygulaması kaldırıldı.', difficulty: 'easy', category: 'fiziki-konum' },
            { id: 'fc-004', front: 'Enlem etkisiyle güneyden kuzeye doğru hangi değişimler görülür?', back: '• Güneş açısı küçülür\n• Sıcaklık azalır\n• Gölge boyu uzar\n• Çizgisel hız azalır\n• Yerçekimi artar\n(Kodlama: ŞAK — Şizgisel hız, Açı, Kalınlık)', difficulty: 'hard', category: 'fiziki-konum' },
            { id: 'fc-005', front: 'Türkiye\'nin jeopolitik önemi nedir?', back: '• İstanbul + Çanakkale Boğazları (Montrö, 1936)\n• Enerji koridoru (BTC, TANAP, TürkAkım)\n• Asya-Avrupa-Afrika kavşağı\n• NATO\'nun güney kanadı', difficulty: 'medium', category: 'fiziki-konum' },
            { id: 'fc-006', front: 'Türkiye\'nin ortalama yükseltisi kaçtır?', back: '1132 metre. Batıdan doğuya yükselti artar. Avrupa ortalamasının çok üzerinde — sebebi 3. jeolojik zamandaki orojenez.', difficulty: 'medium', category: 'fiziki-konum' },
            { id: 'fc-007', front: 'Orta kuşakta bulunmanın Türkiye\'ye 4 sonucu (ABCD)?', back: 'A — Akdeniz iklimi kuşağı\nB — Batı rüzgarları etkisi\nC — Cephe yağışları\nD — Dört mevsim belirgin', difficulty: 'medium', category: 'fiziki-konum' },
            { id: 'fc-008', front: 'Türkiye\'nin 8 kara komşusu hangileridir?', back: 'Yunanistan, Bulgaristan, Gürcistan, Ermenistan, Azerbaycan (Nahçıvan), İran, Irak, Suriye\n(Kodlama: YBGEAIS)', difficulty: 'medium', category: 'fiziki-konum' },
            { id: 'fc-009', front: 'Türkiye\'nin uç noktaları nerelerdir?', back: '• En kuzey: Sinop (İnceburun) — 42°K\n• En güney: Hatay (Beysun Köyü) — 36°K\n• En doğu: Iğdır (Dilucu) — 45°D\n• En batı: Çanakkale (Gökçeada) — 26°D', difficulty: 'hard', category: 'fiziki-konum' },
        ],
    },

    // ─── 2. YER ŞEKİLLERİ ───────────────────────────────────────
    {
        id: 'yer-sekilleri',
        title: 'Yer Şekilleri',
        icon: 'Mountain',
        color: 'from-amber-500 to-orange-600',
        cards: [
            { id: 'fc-010', front: 'Türkiye\'deki 3 ana fay hattını söyleyin.', back: '1. KAF — Saros Körfezi\'nden Van\'a uzanır. En yıkıcı.\n2. DAF — Hatay\'dan Bingöl\'e. 2023 depremi bu hatta.\n3. BAF — Ege\'deki horst-graben sistemi.', difficulty: 'hard', category: 'yer-sekilleri' },
            { id: 'fc-011', front: 'Kıvrım dağlar ile horst dağlar arasındaki fark?', back: 'Kıvrım: Esnek tabakalar kıvrılır → Toroslar, Kaçkar, Kuzey Anadolu Dağları\nHorst: Sert tabakalar kırılıp yükselir → Kaz, Madra, Boz, Aydın, Menteşe (tüm Ege)', difficulty: 'medium', category: 'yer-sekilleri' },
            { id: 'fc-012', front: 'Türkiye\'nin en yüksek noktası ve türü?', back: 'Ağrı Dağı — 5137 m — Volkanik (söndük)\nSonraki: Süphan (4058 m), Kaçkar (3932 m, kıvrım)', difficulty: 'easy', category: 'yer-sekilleri' },
            { id: 'fc-013', front: 'Çukurova hangi tür ovadır?', back: 'Delta ovası. Seyhan + Ceyhan nehirlerinin biriktirmesiyle oluşur. Türkiye\'nin en büyük delta ovası. Pamuk + narenciye + seracılık.', difficulty: 'medium', category: 'yer-sekilleri' },
            { id: 'fc-014', front: 'Türkiye\'deki 4 plato türü ve örnekleri?', back: '• Volkanik (Lav): Erzurum-Kars-Ardahan\n• Aşınım: Çatalca-Kocaeli (en alçak)\n• Tabaka Düzlüğü: Haymana, Cihanbeyli, Gaziantep\n• Karstik: Teke, Taşeli', difficulty: 'hard', category: 'yer-sekilleri' },
            { id: 'fc-015', front: 'Ege\'deki horst-graben yapısının sonuçları?', back: '• Kıyıya dik dağlar → enine kıyı → girintili çıkıntılı\n• Denizel etki iç kesimlere girer\n• Jeotermal kaynaklar zengin\n• Nehirler: Bakırçay, Gediz, K.Menderes, B.Menderes', difficulty: 'hard', category: 'yer-sekilleri' },
            { id: 'fc-016', front: 'Jeolojik zamanlara göre Türkiye\'de oluşanlar?', back: '1. Zaman: Masifler, Taşkömürü\n2. Zaman: Tetis Denizi tortullanması\n3. Zaman: Toroslar, KAD, Linyit, Bor, Petrol\n4. Zaman: Ege Denizi, Boğazlar, Toptan yükselme', difficulty: 'hard', category: 'yer-sekilleri' },
            { id: 'fc-017', front: 'Karstik arazi şekillerini küçükten büyüğe sırala.', back: 'Lapya → Dolin → Uvala → Polye (en büyük)\nBirikim: Sarkıt (tavandan), Dikit (alttan), Sütun (birleşme), Traverten (sıcak su)', difficulty: 'medium', category: 'yer-sekilleri' },
            { id: 'fc-018', front: 'Türkiye kıyı tiplerini sayın.', back: '• Boyuna: Karadeniz + Akdeniz (dağlar paralel, falezli)\n• Enine: Ege (dağlar dik, girintili)\n• Ria: İstanbul, Çanakkale, Haliç\n• Dalmaçya: Antalya (Kaş-Finike)\n• Kalanklı: Mersin-Silifke', difficulty: 'hard', category: 'yer-sekilleri' },
        ],
    },

    // ─── 3. AKARSULAR VE GÖLLER ─────────────────────────────────
    {
        id: 'sular',
        title: 'Akarsular ve Göller',
        icon: 'Waves',
        color: 'from-sky-500 to-blue-600',
        cards: [
            { id: 'fc-020', front: 'Türkiye sınırları içindeki en uzun nehir?', back: 'Kızılırmak (1355 km) — Karadeniz\'e dökülür → Bafra Ovası\n(Fırat toplam olarak daha uzun ama büyük kısmı yurt dışında)', difficulty: 'easy', category: 'sular' },
            { id: 'fc-021', front: 'Van Gölü\'nün özellikleri?', back: 'En büyük göl (3713 km²), en derin göl (451 m), sodalı-tuzlu, kapalı havza. Tektonik + volkanik set. İnci kefali yaşar.', difficulty: 'easy', category: 'sular' },
            { id: 'fc-022', front: 'Fırat ve Dicle nereye dökülür?', back: 'Basra Körfezi\'ne. Birleşerek Şattülarap oluşturur. Atatürk Barajı Fırat\'ta.', difficulty: 'easy', category: 'sular' },
            { id: 'fc-023', front: 'Heyelan set gölü örnekleri?', back: 'Tortum (Erzurum), Sera (Trabzon), Abant (Bolu), Yedigöller (Bolu). Karadeniz\'de yaygın (eğimli + yağışlı).', difficulty: 'medium', category: 'sular' },
            { id: 'fc-024', front: 'Kapalı havza nedir, örnekler?', back: 'Suları denize ulaşamayan havza. Buharlaşmayla tuz birikir.\nÖrnekler: Van Gölü, Tuz Gölü, Burdur Gölü, Acıgöl', difficulty: 'medium', category: 'sular' },
            { id: 'fc-025', front: 'Göl oluşum türleri ve örnekler?', back: '• Tektonik: Beyşehir, Van (kısmen)\n• Volkanik/Kaldera: Nemrut (en büyük krater gölü)\n• Heyelan Set: Tortum, Sera\n• Karstik: Salda\n• Buzul (Sirk): Kaçkar, Cilo yüksek gölleri', difficulty: 'hard', category: 'sular' },
            { id: 'fc-026', front: 'Türkiye\'nin en büyük tatlı su gölü?', back: 'Beyşehir Gölü (656 km², Konya). Van sodalı-tuzludur; Beyşehir\'in gideğeni var, bu yüzden tatlıdır.', difficulty: 'medium', category: 'sular' },
            { id: 'fc-027', front: 'Sakarya nehri hangi denize dökülür?', back: 'KARADENİZ\'e dökülür. Marmara Bölgesi\'nden geçmesine rağmen Karadeniz\'e akar — klasik tuzak soru!', difficulty: 'medium', category: 'sular' },
            { id: 'fc-028', front: 'Atatürk Barajı ile GAP hakkında ne biliyorsunuz?', back: 'Atatürk Barajı: Fırat üzerinde, Şanlıurfa. 2400 MW — Türkiye\'nin en büyük HES.\nGAP: 22 baraj, 19 HES. GDA\'nın tarımsal kalkınması. Pamuk, mısır üretimi patladı.', difficulty: 'medium', category: 'sular' },
        ],
    },

    // ─── 4. İKLİM VE BİTKİ ÖRTÜSÜ ──────────────────────────────
    {
        id: 'iklim',
        title: 'İklim ve Bitki Örtüsü',
        icon: 'CloudRain',
        color: 'from-emerald-500 to-teal-600',
        cards: [
            { id: 'fc-030', front: 'Türkiye\'deki 4 iklim tipi ve temel özellikleri?', back: '• Karadeniz: Her mevsim yağışlı\n• Akdeniz: Yaz kurak, kış yağışlı-ılık\n• Karasal (Step): Yaz sıcak, kış soğuk ve kurak\n• Dağ İklimi: Yükseltiye bağlı', difficulty: 'medium', category: 'iklim' },
            { id: 'fc-031', front: 'Maki nedir ve hangi iklimde görülür?', back: 'Akdeniz ikliminin doğal bitki örtüsü. Bodur, sert yapraklı, her dem yeşil çalılar. Zeytin, defne, mersin, kocayemiş.', difficulty: 'easy', category: 'iklim' },
            { id: 'fc-032', front: 'Fön rüzgarı nedir?', back: 'Dağı aşıp inen havanın her 100 m\'de 1°C ısınması. Kuru ve sıcak. Rize\'de turunçgil yetişmesinin sebebi. Karadeniz güney yamaçları ve Toroslar kuzey yamaçlarında etkili.', difficulty: 'hard', category: 'iklim' },
            { id: 'fc-033', front: 'Türkiye\'nin en çok yağış alan yeri?', back: 'Rize-Ardeşen çevresi (2000-3000 mm/yıl). Karadeniz\'den gelen nem + dağlara çarpmadan oluşan orografik yağış.', difficulty: 'easy', category: 'iklim' },
            { id: 'fc-034', front: 'Türkiye\'yi etkileyen 4 basınç merkezi?', back: '• İzlanda Alçak: Kışın ılık-yağışlı\n• Azor Yüksek: Yazın kurak-güneşli (Akdeniz-Ege)\n• Sibirya Yüksek: Kışın dondurucu ayaz (Doğu)\n• Basra Alçak: Yazın GDA\'yı kavuran sıcak', difficulty: 'hard', category: 'iklim' },
            { id: 'fc-035', front: 'Türkiye\'nin yerel rüzgarlarını KAYIP SAKAL ile kodlayın.', back: 'KA — KArayel (KB, soğutur)\nYI — YIldız (K, nem-yağış)\nP — Poyraz (KD, soğutur)\nSA — SAMyeli/Keşişleme (GD, kavurur)\nKI — KIble (G, ısıtır)\nL — Lodos (GB, yağmur, lodosun gözü yaşlıdır)', difficulty: 'hard', category: 'iklim' },
            { id: 'fc-036', front: 'Türkiye\'nin en az ve en çok yağış alan bölgeleri?', back: 'En az: Güneydoğu Anadolu (250-300 mm/yıl)\nEn çok: Karadeniz Bölgesi (Rize 2000+ mm)\nEn yüksek bağıl nem: Karadeniz', difficulty: 'easy', category: 'iklim' },
            { id: 'fc-037', front: 'Step (bozkır) ikliminin özellikleri ve Türkiye\'deki dağılımı?', back: 'Yağış 250-400 mm. Yaz sıcak-kurak, kış soğuk. Doğal bitki: bozkır (step). İç Anadolu ve GDA\'da yaygın. Tahıl tarımı + küçükbaş hayvancılık.', difficulty: 'medium', category: 'iklim' },
        ],
    },

    // ─── 5. COĞRAFİ BÖLGELER ────────────────────────────────────
    {
        id: 'cografi-bolgeler',
        title: 'Coğrafi Bölgeler',
        icon: 'MapPin',
        color: 'from-green-500 to-emerald-600',
        cards: [
            { id: 'fc-060', front: '7 coğrafi bölge yüzölçümüne göre büyükten küçüğe?', back: '1. Doğu Anadolu (en büyük)\n2. İç Anadolu\n3. Karadeniz\n4. Akdeniz\n5. Ege\n6. Güneydoğu Anadolu\n7. Marmara (en küçük)\n(Kodlama: DAKAEGM)', difficulty: 'hard', category: 'cografi-bolgeler' },
            { id: 'fc-061', front: 'Marmara Bölgesi\'nin ayırt edici özellikleri?', back: '• En küçük ama en kalabalık bölge\n• Türkiye sanayisinin merkezi (otomotiv, tekstil, kimya)\n• Ayçiçeği: Ergene (Trakya)\n• İpekböcekçiliği: Bursa', difficulty: 'medium', category: 'cografi-bolgeler' },
            { id: 'fc-062', front: 'Ege Bölgesi\'nin tarım ürünleri?', back: 'İncir: Aydın (Türkiye ve Dünya 1.)\nÜzüm: Manisa (sultani)\nZeytin: Edremit çevresi\nPamuk: Büyük Menderes\nTütün: İzmir tütünü\nHaşhaş: Afyon, Denizli', difficulty: 'medium', category: 'cografi-bolgeler' },
            { id: 'fc-063', front: 'Akdeniz Bölgesi\'nin özellikleri?', back: '• Türkiye\'nin en sıcak kışı (Antalya, Mersin)\n• Muz: Yalnızca Anamur ve Alanya\n• Turunçgil ve seracılık: 1. sıra\n• Çukurova: En büyük delta ovası\n• İskenderun: En büyük demir-çelik tesisi', difficulty: 'medium', category: 'cografi-bolgeler' },
            { id: 'fc-064', front: 'İç Anadolu Bölgesi\'nin özellikleri?', back: '• Tahıl ambarı (buğday, arpa — Türkiye 1.)\n• Nadas uygulaması yaygın\n• Ankara: Başkent, savunma sanayii\n• Kapadokya: Peri bacaları, yer altı şehirleri\n• Tuz Gölü: En tuzlu göl', difficulty: 'medium', category: 'cografi-bolgeler' },
            { id: 'fc-065', front: 'Karadeniz Bölgesi\'nin özellikleri?', back: '• Her mevsim yağışlı — Türkiye\'nin en yağışlı bölgesi\n• Çay: Sadece Rize\n• Fındık: Dünya üretiminin %70\'i\n• Taşkömürü: Sadece Zonguldak\n• Çizgisel yerleşme (kıyı şeridinde yoğunluk)', difficulty: 'medium', category: 'cografi-bolgeler' },
            { id: 'fc-066', front: 'Doğu Anadolu Bölgesi\'nin özellikleri?', back: '• En büyük + en seyrek nüfuslu bölge\n• Türkiye\'nin en soğuk bölgesi (Erzurum)\n• Ağrı Dağı: 5137 m (en yüksek)\n• Van Gölü: En büyük göl\n• Büyükbaş hayvancılık: Türkiye 1.\n• Petrol: Batman', difficulty: 'hard', category: 'cografi-bolgeler' },
            { id: 'fc-067', front: 'Güneydoğu Anadolu Bölgesi\'nin özellikleri?', back: '• En az yağışlı bölge\n• Türkiye\'nin en sıcak yazları (Şanlıurfa)\n• GAP: 22 baraj, pamuk patlaması\n• Antepfıstığı: Türkiye + Dünya 1.\n• Karacadağ: Tek kalkan volkan', difficulty: 'medium', category: 'cografi-bolgeler' },
            { id: 'fc-068', front: 'Bölgeler arası karşılaştırma özeti (ÖSYM favorisi)?', back: 'En büyük: Doğu Anadolu\nEn küçük: Marmara\nEn kalabalık: Marmara\nEn seyrek: Doğu Anadolu\nEn yüksek ort.: Doğu Anadolu\nEn az yağış: GDA\nEn çok yağış: Karadeniz', difficulty: 'hard', category: 'cografi-bolgeler' },
        ],
    },

    // ─── 6. EKONOMİK COĞRAFYA ───────────────────────────────────
    {
        id: 'ekonomi',
        title: 'Ekonomik Coğrafya',
        icon: 'TrendingUp',
        color: 'from-rose-500 to-pink-600',
        cards: [
            { id: 'fc-040', front: 'Türkiye bor madeni dünya rezervindeki payı ve yataklar?', back: 'Dünya rezervinin ~%73\'ü. Yataklar: Balıkesir (Bigadiç, Susurluk), Kütahya (Emet), Eskişehir (Kırka). İşleme: Bandırma (liman avantajı).', difficulty: 'medium', category: 'ekonomi' },
            { id: 'fc-041', front: 'Türkiye\'nin en büyük sanayi bölgesi ve önemli kolları?', back: 'Marmara Bölgesi: Kocaeli-İstanbul-Bursa hattı\n• Otomotiv: Bursa, Kocaeli\n• Tekstil: İstanbul, Bursa\n• Kimya/Petrokimya: İzmit (Tüpraş)', difficulty: 'easy', category: 'ekonomi' },
            { id: 'fc-042', front: 'Pamuk üretimin başlıca bölgeleri?', back: '1. Çukurova (Adana-Mersin)\n2. GAP Bölgesi (Şanlıurfa — GAP sonrası çok arttı)\n3. Ege (Büyük Menderes, Gediz)', difficulty: 'medium', category: 'ekonomi' },
            { id: 'fc-043', front: 'Türkiye\'de demir-çelik fabrikalarının kuruluş yeri mantığı?', back: 'Karabük + Ereğli: Taşkömürüne (enerji) yakın\nİskenderun: Limana (ulaşım) yakın\nDivriği: Hammaddeye (demir) yakın', difficulty: 'hard', category: 'ekonomi' },
            { id: 'fc-044', front: 'Taşkömürü nerede, ne zamandan kalma?', back: 'Yalnızca Zonguldak-Bartın-Karabük havzası. 1. Jeolojik Zaman (Paleozoik). Türkiye\'nin tek taşkömürü havzası.', difficulty: 'medium', category: 'ekonomi' },
            { id: 'fc-045', front: 'Türkiye\'nin başlıca ihracat kalemleri?', back: '• Otomotiv ve parçaları (1. sıra)\n• Tekstil-hazır giyim\n• Makine ve teçhizat\n• Demir-çelik\nİhracatın ~%90\'ı sanayi ürünleri!', difficulty: 'medium', category: 'ekonomi' },
            { id: 'fc-046', front: 'Akkuyu Nükleer Santrali hakkında temel bilgiler?', back: 'Yer: Mersin (Gülnar). Rusya (Rosatom) ortaklığı. 4 reaktör × 1200 MW = 4800 MW toplam. Türkiye\'nin ilk nükleer santrali. İlk yakıt 2023.', difficulty: 'medium', category: 'ekonomi' },
            { id: 'fc-047', front: 'BTC, TANAP, TürkAkım boru hatları ne taşır?', back: 'BTC: Azerbaycan PETROLÜ → Ceyhan (Akdeniz)\nTANAP: Azerbaycan GAZI → Avrupa\nTürkAkım: Rusya GAZI → Türkiye + Avrupa\nTürkiye enerji transit ülkesi!', difficulty: 'hard', category: 'ekonomi' },
            { id: 'fc-048', front: 'Jeotermal enerji Türkiye\'de nerede yoğunlaşır?', back: 'Ege Bölgesi — Batı Anadolu Fay Sistemi (BAF). Afyon, Kütahya, Denizli (Pamukkale), İzmir. Dünya 4.-5. jeotermal kapasitesi.', difficulty: 'medium', category: 'ekonomi' },
        ],
    },

    // ─── 7. TARIM VE HAYVANCILIK ────────────────────────────────
    {
        id: 'tarim',
        title: 'Tarım ve Hayvancılık',
        icon: 'Sprout',
        color: 'from-lime-500 to-green-600',
        cards: [
            { id: 'fc-070', front: 'Nadas nedir ve nerede yaygındır?', back: 'Toprağı dinlendirmek için bir sezon boş bırakmak. Sulama yetersizliğinden kaynaklı. En yaygın: İç Anadolu ve GDA. Sulama ile (GAP, KOP) ortadan kalkar.', difficulty: 'easy', category: 'tarim' },
            { id: 'fc-071', front: 'Türkiye\'de çay nerede, nasıl üretilir?', back: 'Sadece Rize (Pazar, Ardeşen). Devlet destekle (ÇAYKUR) satın alınır. Tarlalar çok dar ve eğimlidir, makine kullanılamaz — elle toplanır.', difficulty: 'easy', category: 'tarim' },
            { id: 'fc-072', front: 'Türkiye fındık üretiminde dünyada kaçıncı?', back: '1. Dünya fındık üretiminin ~%70\'i Türkiye\'de. Başlıca iller: Ordu (1.), Giresun, Trabzon, Sakarya.', difficulty: 'easy', category: 'tarim' },
            { id: 'fc-073', front: 'Tarımda verimi artıran 3 temel faktör?', back: '1. Sulama (En önemli — iklim bağımlılığı biter)\n2. Gübreleme + Tohum ıslahı\n3. Makineleşme (ama kırdan kente göçü tetikler)', difficulty: 'medium', category: 'tarim' },
            { id: 'fc-074', front: 'Büyükbaş hayvancılıkta Türkiye\'nin öncü bölgesi?', back: 'Doğu Anadolu — Erzurum-Kars-Ardahan platoları. Yazın devasa çayırlıklar. Lav (volkanik) platolar → bol çimen. Et kombinaları bu bölgede.', difficulty: 'medium', category: 'tarim' },
            { id: 'fc-075', front: 'Küçükbaş hayvancılık nerede yaygın?', back: 'İç Anadolu ve GDA (step iklimi, bozkır bitki örtüsü). Merinos koyunu Türkiye\'de değerli. Kıl keçisi: Teke ve Taşeli platoları (başka tarım yapılamadığından).', difficulty: 'medium', category: 'tarim' },
            { id: 'fc-076', front: 'Türkiye\'de en fazla balık hangi denizden avlanır?', back: 'Karadeniz (~%65-70). En çok avlanan balık: Hamsi. Avcılıkta 1. Karadeniz, kültür balıkçılığında (çipura, levrek) 1. Ege.', difficulty: 'medium', category: 'tarim' },
            { id: 'fc-077', front: 'Seracılık neden Antalya\'da gelişmiştir?', back: '• Kışın sıcaklık yüksek, don olmuyor\n• Bol güneş → az ısıtma maliyeti\n• Yakın liman (ihracat kolayı)\nAntalya tüm Türkiye\'nin kış sebzesini üretir.', difficulty: 'medium', category: 'tarim' },
        ],
    },

    // ─── 8. NÜFUS VE YERLEŞİM ───────────────────────────────────
    {
        id: 'nufus',
        title: 'Nüfus ve Yerleşme',
        icon: 'Users',
        color: 'from-violet-500 to-purple-600',
        cards: [
            { id: 'fc-080', front: 'Türkiye\'nin 2025 nüfusu ve temel istatistikleri?', back: 'Nüfus: 85.664.944\nKentleşme: %93,4\nMedian yaş: 34,4\nNüfus artış hızı: 3,4‰\nEn kalabalık: İstanbul (15,7 milyon)', difficulty: 'medium', category: 'nufus' },
            { id: 'fc-081', front: 'Türkiye\'de nüfus dağılımını etkileyen en önemli beşeri faktör?', back: 'Sanayileşme. İş imkânı yaratır, nüfusu çeker. Sanayi gelişen İstanbul, Kocaeli, Bursa, İzmir yoğun; sanayi olmayan Doğu seyrek.', difficulty: 'easy', category: 'nufus' },
            { id: 'fc-082', front: 'İklime rağmen neden bazı bölgeler seyrek nüfusludur?', back: '• Menteşe: İklim iyi ama sarp arazi\n• Yıldız Dağları: İklim uygun ama ulaşıma sapa\n• Teke-Taşeli: Karstik (verimsiz) arazi\n• Tuz Gölü çevresi: Su yok, buharlaşma yüksek', difficulty: 'hard', category: 'nufus' },
            { id: 'fc-083', front: 'Türkiye\'de kırdan kente göçün temel nedenleri?', back: '• Tarımda makineleşme (en önemli)\n• Sanayi iş imkânı\n• Eğitim + sağlık\nSonuç: Kentleşme %93,4\'e ulaştı', difficulty: 'easy', category: 'nufus' },
            { id: 'fc-084', front: 'Mevsimlik (geçici) göç nedir, örnekler?', back: 'Belirli dönemlerde iş için yapılan geçici göç.\n• Fındık hasatı: Ağustos-Eylül (Giresun, Ordu)\n• Pamuk hasatı: Ağustos-Ekim (Adana, Şanlıurfa)\n• Kış turizmi: Uludağ, Erciyes', difficulty: 'medium', category: 'nufus' },
            { id: 'fc-085', front: 'Türkiye\'nin en genç ve en yaşlı ili?', back: 'En genç (median yaş en düşük): Şanlıurfa\nEn yaşlı (median yaş en yüksek): Sinop\nEn kalabalık: İstanbul\nEn seyrek: Tunceli', difficulty: 'hard', category: 'nufus' },
        ],
    },

    // ─── 9. ÇEVRE VE DOĞAL AFETLER ──────────────────────────────
    {
        id: 'cevre-afetler',
        title: 'Çevre ve Doğal Afetler',
        icon: 'AlertTriangle',
        color: 'from-orange-500 to-red-600',
        cards: [
            { id: 'fc-090', front: 'Türkiye\'nin 3 ana fay hattı ve özellikleri?', back: 'KAF: En yıkıcı, Saros\'tan Van\'a kadar yay biçiminde.\nDAF: Hatay\'dan Bingöl\'e, 2023 Kahramanmaraş depremi.\nBAF: Ege horst-graben, sık ama düşük şiddet.', difficulty: 'medium', category: 'cevre-afetler' },
            { id: 'fc-091', front: 'Türkiye\'nin en önemli çevre sorunu?', back: 'Erozyon. Türkiye topraklarının ~%75\'ini etkiler. En çok: İç Anadolu + GDA (bitki örtüsü zayıf + nadas + yağış düzensiz). Önlem: Ağaçlandırma, teraslama.', difficulty: 'easy', category: 'cevre-afetler' },
            { id: 'fc-092', front: 'Heyelan nedir ve Türkiye\'de nerede görülür?', back: 'Suya doymuş toprağın yamaçtan kayması. En çok: Doğu Karadeniz (Rize, Artvin, Giresun). Sebebi: Yüksek yağış + dik yamaç.', difficulty: 'easy', category: 'cevre-afetler' },
            { id: 'fc-093', front: 'Türkiye\'nin en büyük güneş ve rüzgar enerji potansiyeli olan bölgeleri?', back: 'Güneş: GDA + Akdeniz (en çok güneşlenme — Şanlıurfa, Antalya)\nRüzgar: Ege + Marmara kıyıları (Çanakkale, İzmir)', difficulty: 'medium', category: 'cevre-afetler' },
            { id: 'fc-094', front: 'Türkiye Paris Anlaşması\'nı ne zaman onayladı ve hedefi ne?', back: '2021\'de onayladı. Hedef: 2053\'te net sıfır karbon. Yenilenebilir enerji yatırımları hızlanıyor.', difficulty: 'hard', category: 'cevre-afetler' },
            { id: 'fc-095', front: 'Türkiye\'nin Ramsar (sulak alan) koruma bölgelerinden örnekler?', back: 'Sultan Sazlığı (Kayseri), Manyas Kuş Gölü (Balıkesir), Gediz Deltası (İzmir), Göksu Deltası (Mersin)', difficulty: 'hard', category: 'cevre-afetler' },
        ],
    },

    // ─── 10. TURİZM VE KÜLTÜREL MİRAS ──────────────────────────
    {
        id: 'turizm',
        title: 'Turizm ve Kültürel Miras',
        icon: 'Landmark',
        color: 'from-purple-500 to-fuchsia-600',
        cards: [
            { id: 'fc-050', front: 'Türkiye\'nin UNESCO Dünya Mirası sayısı ve örnekler?', back: '21 UNESCO mirası. Örnekler:\n• İstanbul Tarihi Bölgeleri\n• Kapadokya (Göreme)\n• Pamukkale-Hierapolis\n• Efes (2015)\n• Göbeklitepe (2018)\n• Gordion (2023)', difficulty: 'medium', category: 'turizm' },
            { id: 'fc-051', front: 'Kapadokya neden önemlidir?', back: 'Volkanik tüf + erozyon → peri bacaları. Yeraltı şehirleri (Derinkuyu, Kaymaklı). Balon turu. UNESCO karma miras. Nevşehir.', difficulty: 'easy', category: 'turizm' },
            { id: 'fc-052', front: 'Efes nerede ve neden önemlidir?', back: 'İzmir/Selçuk. En iyi korunmuş Roma kenti. Celsus Kütüphanesi, Artemis Tapınağı kalıntıları. UNESCO 2015.', difficulty: 'easy', category: 'turizm' },
            { id: 'fc-053', front: 'Türkiye\'nin turizm istatistikleri (güncel)?', back: 'Yıllık ~50-55 milyon yabancı turist. Gelir: ~50-60 milyar dolar. En çok turist alan il: Antalya (15-20 milyon).', difficulty: 'medium', category: 'turizm' },
            { id: 'fc-054', front: 'Türkiye\'de kış turizm merkezleri?', back: '• Uludağ (Bursa) — en ünlü\n• Palandöken (Erzurum)\n• Erciyes (Kayseri)\n• Sarıkamış (Kars)', difficulty: 'easy', category: 'turizm' },
            { id: 'fc-055', front: 'Türkiye\'nin ilk milli parkı hangisidir?', back: 'Yozgat Çamlığı (1958). Toplam 40+ milli park var. En çok bilinen: Göreme (Kapadokya), Olimpos-Beydağları, Kaçkar Dağları.', difficulty: 'medium', category: 'turizm' },
        ],
    },
];
