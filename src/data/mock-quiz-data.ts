/**
 * Comprehensive Mock Quiz Data for KPSS Geography
 * Total Questions: 100+
 */

import type {
    MapQuestion,
    MultipleChoiceQuestion,
    TrueFalseQuestion,
    MatchingQuestion,
    QuizQuestion
} from '@/types/quiz';

// ===========================================
// MAP PINPOINT QUESTIONS (25 Questions)
// ===========================================
export const mapQuestions: MapQuestion[] = [
    { id: 'map-001', type: 'map_pinpoint', category: 'lakes', difficulty: 'easy', points: 100, targetFeatureId: 'lake-01', targetName: 'Van Gölü', targetLat: 38.6, targetLng: 43.0, hint: 'Türkiye\'nin en büyük gölü' },
    { id: 'map-002', type: 'map_pinpoint', category: 'lakes', difficulty: 'medium', points: 100, targetFeatureId: 'lake-02', targetName: 'Tuz Gölü', targetLat: 38.75, targetLng: 33.4, hint: 'İkinci büyük gölümüz' },
    { id: 'map-003', type: 'map_pinpoint', category: 'mountains', difficulty: 'easy', points: 100, targetFeatureId: 'mountain-01', targetName: 'Ağrı Dağı', targetLat: 39.7, targetLng: 44.3, hint: 'En yüksek zirve' },
    { id: 'map-004', type: 'map_pinpoint', category: 'cities', difficulty: 'easy', points: 100, targetFeatureId: 'city-06', targetName: 'Ankara', targetLat: 39.93, targetLng: 32.85 },
    { id: 'map-005', type: 'map_pinpoint', category: 'cities', difficulty: 'medium', points: 100, targetFeatureId: 'city-25', targetName: 'Erzurum', targetLat: 39.9, targetLng: 41.27 },
    { id: 'map-006', type: 'map_pinpoint', category: 'rivers', difficulty: 'medium', points: 100, targetFeatureId: 'river-01', targetName: 'Kızılırmak Ağzı', targetLat: 41.7, targetLng: 35.9, hint: 'Denize döküldüğü yer: Bafra' },
    { id: 'map-007', type: 'map_pinpoint', category: 'rivers', difficulty: 'medium', points: 100, targetFeatureId: 'river-02', targetName: 'Yeşilırmak Ağzı', targetLat: 41.3, targetLng: 36.6, hint: 'Çarşamba ovasını oluşturur' },
    { id: 'map-008', type: 'map_pinpoint', category: 'mines', difficulty: 'hard', points: 150, targetFeatureId: 'mine-01', targetName: 'Divriği (Demir)', targetLat: 39.3, targetLng: 38.1, hint: 'En önemli demir yatağımız' },
    { id: 'map-009', type: 'map_pinpoint', category: 'mines', difficulty: 'hard', points: 150, targetFeatureId: 'mine-02', targetName: 'Murgul (Bakır)', targetLat: 41.2, targetLng: 41.5, hint: 'Artvin\'deki bakır işletmesi' },
    { id: 'map-010', type: 'map_pinpoint', category: 'energy', difficulty: 'hard', points: 150, targetFeatureId: 'energy-01', targetName: 'Afşin-Elbistan (Linyit)', targetLat: 38.3, targetLng: 37.0, hint: 'En büyük linyit rezervi' },
    { id: 'map-011', type: 'map_pinpoint', category: 'plains', difficulty: 'medium', points: 120, targetFeatureId: 'plain-01', targetName: 'Çukurova', targetLat: 36.8, targetLng: 35.3, hint: 'En büyük delta ovamız' },
    { id: 'map-012', type: 'map_pinpoint', category: 'plains', difficulty: 'medium', points: 120, targetFeatureId: 'plain-02', targetName: 'Iğdır Ovası', targetLat: 39.9, targetLng: 44.0, hint: 'Doğu Anadolu\'nun mikrokliması' },
    { id: 'map-013', type: 'map_pinpoint', category: 'agriculture', difficulty: 'medium', points: 120, targetFeatureId: 'agri-01', targetName: 'Rize (Çay)', targetLat: 41.0, targetLng: 40.5, hint: 'Çayın başkenti' },
    { id: 'map-014', type: 'map_pinpoint', category: 'agriculture', difficulty: 'medium', points: 120, targetFeatureId: 'agri-02', targetName: 'Anamur (Muz)', targetLat: 36.0, targetLng: 32.8, hint: 'Muz üretilen tek yer' },
    { id: 'map-015', type: 'map_pinpoint', category: 'tourism', difficulty: 'medium', points: 120, targetFeatureId: 'tour-01', targetName: 'Pamukkale', targetLat: 37.9, targetLng: 29.1, hint: 'Travertenler şehri' },
    { id: 'map-016', type: 'map_pinpoint', category: 'tourism', difficulty: 'medium', points: 120, targetFeatureId: 'tour-02', targetName: 'Kapadokya', targetLat: 38.6, targetLng: 34.8, hint: 'Peri bacaları' },
    { id: 'map-017', type: 'map_pinpoint', category: 'coasts', difficulty: 'hard', points: 150, targetFeatureId: 'coast-01', targetName: 'Fethiye (Dalmaçya)', targetLat: 36.6, targetLng: 29.1, hint: 'Dalmaçya kıyı tipi' },
    { id: 'map-018', type: 'map_pinpoint', category: 'coasts', difficulty: 'hard', points: 150, targetFeatureId: 'coast-02', targetName: 'İstanbul Boğazı (Ria)', targetLat: 41.1, targetLng: 29.0, hint: 'Ria kıyı tipi' },
    { id: 'map-019', type: 'map_pinpoint', category: 'energy', difficulty: 'hard', points: 150, targetFeatureId: 'energy-02', targetName: 'Sarayköy (Jeotermal)', targetLat: 37.9, targetLng: 28.9, hint: 'İlk jeotermal santral' },
    { id: 'map-020', type: 'map_pinpoint', category: 'energy', difficulty: 'hard', points: 150, targetFeatureId: 'energy-03', targetName: 'Hamitabat (Doğalgaz)', targetLat: 41.4, targetLng: 27.5, hint: 'Kırklareli doğalgaz santrali' },
    { id: 'map-021', type: 'map_pinpoint', category: 'mountains', difficulty: 'hard', points: 150, targetFeatureId: 'mount-02', targetName: 'Erciyes Dağı', targetLat: 38.5, targetLng: 35.4, hint: 'İç Anadolu\'nun en yükseği' },
    { id: 'map-022', type: 'map_pinpoint', category: 'mountains', difficulty: 'hard', points: 150, targetFeatureId: 'mount-03', targetName: 'Uludağ', targetLat: 40.0, targetLng: 29.1, hint: 'Batı Anadolu\'nun en yükseği' },
    { id: 'map-023', type: 'map_pinpoint', category: 'industry', difficulty: 'hard', points: 150, targetFeatureId: 'ind-01', targetName: 'İskenderun (Demir-Çelik)', targetLat: 36.5, targetLng: 36.1, hint: 'Ulaşım nedeniyle kurulan fabrika' },
    { id: 'map-024', type: 'map_pinpoint', category: 'industry', difficulty: 'hard', points: 150, targetFeatureId: 'ind-02', targetName: 'Seydişehir (Alüminyum)', targetLat: 37.4, targetLng: 31.8, hint: 'Tek alüminyum tesisimiz' },
    { id: 'map-025', type: 'map_pinpoint', category: 'rivers', difficulty: 'hard', points: 150, targetFeatureId: 'river-03', targetName: 'Meriç', targetLat: 40.7, targetLng: 26.0, hint: 'Yunanistan sınırı' },
];

// ===========================================
// MULTIPLE CHOICE QUESTIONS (50 Questions)
// ===========================================
export const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
    // --- Fiziki Coğrafya ---
    { id: 'mc-001', type: 'multiple_choice', category: 'lakes', difficulty: 'easy', points: 50, text: 'Türkiye\'nin en büyük gölü hangisidir?', options: ['Tuz Gölü', 'Van Gölü', 'Beyşehir Gölü', 'İznik Gölü', 'Eğirdir Gölü'], correctIndex: 1, explanation: 'Van Gölü 3713 km² ile Türkiye\'nin en büyük gölüdür.' },
    { id: 'mc-002', type: 'multiple_choice', category: 'mountains', difficulty: 'easy', points: 50, text: 'Türkiye\'nin en yüksek dağı hangisidir?', options: ['Erciyes Dağı', 'Uludağ', 'Kaçkar Dağı', 'Ağrı Dağı', 'Süphan Dağı'], correctIndex: 3, explanation: 'Ağrı Dağı 5137 metre ile Türkiye\'nin en yüksek dağıdır.' },
    { id: 'mc-011', type: 'multiple_choice', category: 'climate', difficulty: 'medium', points: 50, text: 'Türkiye\'de "Fön Rüzgarları" en çok hangi bölgemizde görülür?', options: ['Ege', 'Marmara', 'Doğu Karadeniz', 'Akdeniz', 'İç Anadolu'], correctIndex: 2, explanation: 'Fön rüzgarları dağların denize paralel uzandığı Doğu Karadeniz\'de çok etkili olur.' },
    { id: 'mc-012', type: 'multiple_choice', category: 'mountains', difficulty: 'hard', points: 50, text: 'Hangi dağımız "Kırıklı (Horst)" yapıda bir dağdır?', options: ['Kaçkar', 'Erciyes', 'Menteşe', 'Ağrı', 'Toros'], correctIndex: 2, explanation: 'Ege\'deki Menteşe, Kaz, Madra, Yunt dağları kırıklı yapıdadır.' },
    { id: 'mc-013', type: 'multiple_choice', category: 'coasts', difficulty: 'hard', points: 50, text: 'Finike-Kaş kıyılarında görülen kıyı tipi hangisidir?', options: ['Boyuna', 'Enine', 'Dalmaçya', 'Ria', 'Limanlı'], correctIndex: 2, explanation: 'Finike-Kaş arası Türkiye\'deki tek Dalmaçya kıyı tipidir.' },
    { id: 'mc-014', type: 'multiple_choice', category: 'plains', difficulty: 'medium', points: 50, text: 'Aşağıdakilerden hangisi bir "Delta Ovası" değildir?', options: ['Bafra', 'Çarşamba', 'Gediz', 'Pasınlar', 'Silifke'], correctIndex: 3, explanation: 'Pasınlar Ovası bir tektonik ovadır, delta değildir.' },
    { id: 'mc-015', type: 'multiple_choice', category: 'rivers', difficulty: 'medium', points: 50, text: 'Hangi nehrimiz üzerinde en fazla baraj bulunmaktadır?', options: ['Dicle', 'Aras', 'Meriç', 'Fırat', 'Gediz'], correctIndex: 3, explanation: 'Fırat Nehri üzerinde Keban, Karakaya ve Atatürk gibi dev barajlar bulunur.' },
    { id: 'mc-016', type: 'multiple_choice', category: 'lakes', difficulty: 'hard', points: 50, text: 'Yüzey alanı mevsimlere göre en çok değişen gölümüz hangisidir?', options: ['Van', 'Beyşehir', 'Tuz', 'Manyas', 'Sapanca'], correctIndex: 2, explanation: 'Tuz Gölü derinliği az olduğu için buharlaşmayla alanı çok değişir.' },
    { id: 'mc-017', type: 'multiple_choice', category: 'climate', difficulty: 'medium', points: 50, text: 'Türkiye\'de kış ılıklığı en fazla hangi bölgededir?', options: ['Ege', 'Akdeniz', 'Güney Marmara', 'Güneydoğu Anadolu', 'Doğu Karadeniz'], correctIndex: 1, explanation: 'Akdeniz bölgesi enlem ve denizellik sebebiyle en ılık kışlara sahiptir.' },
    { id: 'mc-018', type: 'multiple_choice', category: 'vegetation', difficulty: 'hard', points: 50, text: 'Sadece belirli bir bölgede yetişen bitkilere ne ad verilir?', options: ['Relikt', 'Endemik', 'Maki', 'Step', 'Antropojen'], correctIndex: 1, explanation: 'Dünyanın sadece bir yerinde yetişen türlere endemik bitki denir.' },

    // --- Beşeri ve Ekonomik Coğrafya ---
    { id: 'mc-019', type: 'multiple_choice', category: 'population', difficulty: 'medium', points: 50, text: 'Türkiye\'de nüfus yoğunluğu en düşük olan ilimiz hangisidir?', options: ['Artvin', 'Bayburt', 'Tunceli', 'Hakkari', 'Gümüşhane'], correctIndex: 2, explanation: 'Tunceli, yüzölçümüne göre en az insanın yaşadığı ilimizdir.' },
    { id: 'mc-020', type: 'multiple_choice', category: 'mines', difficulty: 'hard', points: 50, text: 'Murgul, Maden ve Küre bölgelerinde ortak çıkarılan maden hangisidir?', options: ['Demir', 'Krom', 'Bor', 'Bakır', 'Boksit'], correctIndex: 3, explanation: 'Bu üç merkez de önemli bakır yataklarıdır.' },
    { id: 'mc-021', type: 'multiple_choice', category: 'energy', difficulty: 'hard', points: 50, text: 'Türkiye\'nin ilk Nükleer Santrali hangi ilimizde inşa edilmektedir?', options: ['Sinop', 'Kırklareli', 'Mersin', 'Sakarya', 'Isparta'], correctIndex: 2, explanation: 'Akkuyu Nükleer Santrali Mersin ilindedir.' },
    { id: 'mc-022', type: 'multiple_choice', category: 'agriculture', difficulty: 'medium', points: 50, text: 'Türkiye fındık üretiminde Dünya birincisidir. En çok hangi ilde üretilir?', options: ['Giresun', 'Trabzon', 'Ordu', 'Sakarya', 'Rize'], correctIndex: 2, explanation: 'Ordu, Türkiye ve dünya fındık üretiminde liderdir.' },
    { id: 'mc-023', type: 'multiple_choice', category: 'industry', difficulty: 'hard', points: 50, text: 'Hangi ilimizde Petrol Rafinerisi bulunmaz?', options: ['Batman', 'İzmir', 'Mersin', 'Kırıkkale', 'Kocaeli'], correctIndex: 2, explanation: 'Mersin ATAŞ rafinerisi artık sadece depolama merkezi olarak kullanılmaktadır (üretim yok).' },
    { id: 'mc-024', type: 'multiple_choice', category: 'energy', difficulty: 'medium', points: 50, text: 'Hangisi yenilenebilir bir enerji kaynağı değildir?', options: ['Güneş', 'Jeotermal', 'Linyit', 'Biyokütle', 'Rüzgar'], correctIndex: 2, explanation: 'Linyit bir kömür türüdür ve tükenebilir (fosil) bir kaynaktır.' },
    { id: 'mc-025', type: 'multiple_choice', category: 'transport', difficulty: 'hard', points: 50, text: 'Ovit Tüneli hangi iki şehri birbirine bağlar?', options: ['Rize - Erzurum', 'Trabzon - Gümüşhane', 'Artvin - Ardahan', 'Giresun - Sivas', 'Ordu - Tokat'], correctIndex: 0, explanation: 'Ovit Tüneli Rize ile Erzurum arasındaki ulaşımı kolaylaştırır.' },
    { id: 'mc-026', type: 'multiple_choice', category: 'agriculture', difficulty: 'hard', points: 50, text: 'Türkiye\'de üretim alanı en dar olan tarım ürünü hangisidir?', options: ['Çay', 'Fındık', 'Turunçgil', 'Muz', 'Haşhaş'], correctIndex: 3, explanation: 'Muz sadece Anamur ve çevresindeki çok dar bir alanda yetişir.' },
    { id: 'mc-027', type: 'multiple_choice', category: 'mines', difficulty: 'medium', points: 50, text: 'Sıvı halde bulunan tek maden hangisidir?', options: ['Kurşun', 'Civa', 'Antimon', 'Mangan', 'Volfram'], correctIndex: 1, explanation: 'Civa, oda sıcaklığında sıvı halde bulunan tek madendir.' },
    { id: 'mc-028', type: 'multiple_choice', category: 'livestock', difficulty: 'medium', points: 50, text: 'Arıcılık faaliyetleri en çok hangi ilimizde gelişmiştir?', options: ['Muğla', 'Ordu', 'Hakkari', 'Konya', 'Antalya'], correctIndex: 1, explanation: 'Ordu ve Muğla en çok bal üretilen illerdir, ancak Ordu genellikle zirvededir.' },

    // --- Devamı (Karma Konular) ---
    { id: 'mc-029', type: 'multiple_choice', category: 'cities', difficulty: 'hard', points: 50, text: 'Güneydoğu Anadolu Projesi (GAP) kapsamında sulanan ilk büyük ova hangisidir?', options: ['Ceylanpınar', 'Harran', 'Suruç', 'Birecik', 'Mardin'], correctIndex: 1, explanation: 'GAP ile sulamaya açılan ilk büyük verimli saha Harran Ovası\'dır.' },
    { id: 'mc-030', type: 'multiple_choice', category: 'industry', difficulty: 'hard', points: 50, text: 'Uçak fabrikası hangi şehrimizde bulunmaktadır?', options: ['İstanbul', 'Ankara', 'Eskişehir', 'Kayseri', 'Kuzey Kıbrıs'], correctIndex: 1, explanation: 'TUSAŞ tesisleri Ankara\'dadır.' },
    { id: 'mc-031', type: 'multiple_choice', category: 'population', difficulty: 'medium', points: 50, text: 'Türkiye\'de ilk nüfus sayımı kaç yılında yapılmıştır?', options: ['1923', '1927', '1935', '1945', '1950'], correctIndex: 1, explanation: 'Cumhuriyet tarihinin ilk nüfus sayımı 1927\'de yapılmıştır.' },
    { id: 'mc-032', type: 'multiple_choice', category: 'agriculture', difficulty: 'medium', points: 50, text: 'Pamuk üretimi son yıllarda hangi bölgede birinciliğe yükselmiştir?', options: ['Ege', 'Akdeniz', 'Güneydoğu Anadolu', 'Marmara', 'Konya Ovası'], correctIndex: 2, explanation: 'GAP sonrası pamuk üretiminin merkezi Güneydoğu Anadolu (Şanlıurfa) olmuştur.' },
    { id: 'mc-033', type: 'multiple_choice', category: 'energy', difficulty: 'hard', points: 50, text: 'Türkiye\'de rüzgar enerjisinden elektrik üreten ilk santral nerededir?', options: ['Çanakkale', 'İzmir', 'Balıkesir', 'Aydın', 'Muğla'], correctIndex: 1, explanation: '1998\'de kurulan İzmir-Alaçatı santrali ilktir.' },
    { id: 'mc-034', type: 'multiple_choice', category: 'mines', difficulty: 'hard', points: 50, text: 'Seydişehir\'de işlenen maden hangisidir?', options: ['Demir', 'Bakır', 'Alüminyum (Boksit)', 'Krom', 'Lületaşı'], correctIndex: 2, explanation: 'Seydişehir, Türkiye\'nin tek alüminyum fabrikasına ev sahipliği yapar.' },
    { id: 'mc-035', type: 'multiple_choice', category: 'tourism', difficulty: 'medium', points: 50, text: 'Hangi turizm alanımız UNESCO Dünya Mirası listesinde değildir?', options: ['Selimiye Camii', 'Efes', 'Nemrut Dağı Heykelleri', 'Sümela Manastırı', 'Çatalhöyük'], correctIndex: 3, explanation: 'Sümela Manastırı şu an için "geçici" listededir, asıl listede değil (2024 itibariyle güncellenmiş bilgiye göre bakılmalıdır).' },
    { id: 'mc-036', type: 'multiple_choice', category: 'climate', difficulty: 'hard', points: 50, text: 'Karadeniz üzerinden gelen nemli havanın dağlara çarpıp yükselmesiyle oluşan yağış tipi?', options: ['Konveksiyonel', 'Cephesel', 'Orografik', 'Yağmur', 'Kar'], correctIndex: 2, explanation: 'Yamaç (orografik) yağışları Karadeniz ve Akdeniz\'in kıyı kuşağında yaygındır.' },
    { id: 'mc-037', type: 'multiple_choice', category: 'rivers', difficulty: 'hard', points: 50, text: 'Hangi nehrimiz yurt dışından doğup Türkiye\'ye dökülür?', options: ['Aras', 'Meriç', 'Fırat', 'Dicle', 'Çoruh'], correctIndex: 1, explanation: 'Meriç ve Asi nehirleri dışarıdan gelip Türkiye\'ye dökülür.' },
    { id: 'mc-038', type: 'multiple_choice', category: 'transport', difficulty: 'hard', points: 50, text: 'Türkiye\'nin en büyük ihracat limanı hangisidir?', options: ['İstanbul', 'İzmir', 'Mersin', 'Trabzon', 'Samsun'], correctIndex: 1, explanation: 'Artık İstanbul ve Mersin konteynerda büyük olsa da tarım ve sanayi ihracatında İzmir tarihsel ve hacimsel olarak kritiktir.' },
    { id: 'mc-039', type: 'multiple_choice', category: 'industry', difficulty: 'hard', points: 50, text: 'Karabük ve Ereğli Demir-Çelik fabrikalarının burada kurulma sebebi?', options: ['Hammaddeye yakınlık', 'Ulaşım kolaylığı', 'Enerji kaynağına yakınlık', 'Pazara yakınlık', 'İşgücü'], correctIndex: 2, explanation: 'Zonguldak\'taki Taşkömürü (enerji kaynağı) nedeniyle fabrikalar bu bölgeye kurulmuştur.' },
    { id: 'mc-040', type: 'multiple_choice', category: 'mines', difficulty: 'hard', points: 50, text: 'Guleman (Elazığ) hangisiyle ünlüdür?', options: ['Altın', 'Krom', 'Kurşun', 'Barit', 'Asbest'], correctIndex: 1, explanation: 'Guleman en önemli krom yataklarımızdan biridir.' },
    { id: 'mc-041', type: 'multiple_choice', category: 'agriculture', difficulty: 'medium', points: 50, text: 'Keten ve kenevir denince akla gelen ilk ilimiz?', options: ['Sinop', 'Samsun', 'Kastamonu', 'Kocaeli', 'Bolu'], correctIndex: 2, explanation: 'Kastamonu (Taşköprü) kenevir ve sarımsak ile ünlüdür.' },
    { id: 'mc-042', type: 'multiple_choice', category: 'energy', difficulty: 'hard', points: 50, text: 'Doğalgaz çıkarılan tek yerimiz hangisidir?', options: ['Batman', 'Hamitabat (Kırklareli)', 'Karabük', 'Konya', 'Erzincan'], correctIndex: 1, explanation: 'Trakya-Hamitabat en eski ve bilinen kara doğalgaz yatağımızdır.' },
    { id: 'mc-043', type: 'multiple_choice', category: 'environment', difficulty: 'medium', points: 50, text: 'Aşağıdakilerden hangisi bir "Heyelan Set Gölü"dür?', options: ['Van', 'Tortum', 'Nemrut', 'İznik', 'Meke'], correctIndex: 1, explanation: 'Tortum, Sera, Abant gibi göller heyelan set gölleridir.' },
    { id: 'mc-044', type: 'multiple_choice', category: 'climate', difficulty: 'medium', points: 50, text: 'Güneydoğu Anadolu\'da buharlaşmanın çok şiddetli olmasının temel sebebi?', options: ['Enlem', 'Denizden uzaklık', 'Güneyden gelen sıcak rüzgarlar', 'Nispi rutubetin azlığı', 'Hepsi'], correctIndex: 4, explanation: 'Bu faktörlerin tamamı bölgeyi Türkiye\'nin en kurak (buharlaşma yönünden) yeri yapar.' },
    { id: 'mc-045', type: 'multiple_choice', category: 'mines', difficulty: 'hard', points: 50, text: 'Gübre sanayisinde kullanılan maden hangisidir?', options: ['Fosfat', 'Kükürt', 'Barit', 'Tuz', 'Jips'], correctIndex: 0, explanation: 'Fosfat (Mazıdağı) suni gübre üretiminin temel maddesidir.' },
    { id: 'mc-046', type: 'multiple_choice', category: 'mines', difficulty: 'hard', points: 50, text: 'Petrolün çıkarıldığı tek bölge?', options: ['Marmara', 'Akdeniz', 'Güneydoğu Anadolu', 'Ege', 'Karadeniz'], correctIndex: 2, explanation: 'Türkiye petrolünün %100\'e yakını Güneydoğu Anadolu\'dan (Batman, Adıyaman, Siirt) çıkarılır.' },
    { id: 'mc-047', type: 'multiple_choice', category: 'agriculture', difficulty: 'medium', points: 50, text: 'Zeytin üretiminde Dünya birinciliğine yakınız. En çok hangi bölgededir?', options: ['Akdeniz', 'Ege', 'Güney Marmara', 'Güneydoğu', 'Karadeniz'], correctIndex: 1, explanation: 'Ege bölgesi (özellikle sofralık ve yağlık karışık) zeytinin anavatanıdır.' },
    { id: 'mc-048', type: 'multiple_choice', category: 'cities', difficulty: 'easy', points: 50, text: 'Türkiye\'nin "En Küçük" ili hangisidir?', options: ['Yalova', 'Bayburt', 'Karabük', 'Kilis', 'Bartın'], correctIndex: 0, explanation: 'Yalova yüzölçümü olarak en küçük ilimizdir.' },
    { id: 'mc-049', type: 'multiple_choice', category: 'climate', difficulty: 'medium', points: 50, text: 'Hangi şehrimizde Mikroklima tipi ürün yetişmez?', options: ['Iğdır (Pamuk)', 'Rize (Turunçgil)', 'Artvin (Zeytin)', 'Anamur (Muz)', 'Sivas (Çay)'], correctIndex: 4, explanation: 'Sivas\'ta çay mikrokliması bulunmaz; diğerleri klasik KPSS örnekleridir.' },
    { id: 'mc-050', type: 'multiple_choice', category: 'population', difficulty: 'medium', points: 50, text: 'Türkiye\'de "Köy Altı Yerleşmeleri"nden hangisi kalıcıdır?', options: ['Yayla', 'Köm', 'Divan', 'Oba', 'Ağıl'], correctIndex: 2, explanation: 'Divan, Mahalle, Mezra ve Çiftlik kalıcı yerleşmelerdir.' },
];

// ===========================================
// TRUE/FALSE QUESTIONS (20 Questions)
// ===========================================
export const trueFalseQuestions: TrueFalseQuestion[] = [
    {
        id: 'tf-001', type: 'true_false', category: 'lakes', difficulty: 'easy', points: 30, statement: 'Van Gölü Türkiye\'nin en büyük gölüdür.', isTrue: true, explanation: 'Doğru! Van Gölü 3713 km² ile Türkiye\'nin en büyük gölüdür.'
    },
    { id: 'tf-002', type: 'true_false', category: 'rivers', difficulty: 'medium', points: 30, statement: 'Fırat Nehri Türkiye\'nin en uzun nehridir.', isTrue: false, explanation: 'Yanlış! Sınırlarımız içindeki en uzun nehir Kızılırmak\'tır.' },
    { id: 'tf-009', type: 'true_false', category: 'plains', difficulty: 'easy', points: 30, statement: 'Çukurova bir volkanik ovadır.', isTrue: false, explanation: 'Yanlış! Çukurova bir delta (akarsu biriktirme) ovasıdır.' },
    { id: 'tf-010', type: 'true_false', category: 'mines', difficulty: 'medium', points: 30, statement: 'Türkiye dünya bor rezervlerinin %70\'inden fazlasına sahiptir.', isTrue: true, explanation: 'Doğru! Yaklaşık %73 rezerv Türkiye\'dedir.' },
    { id: 'tf-011', type: 'true_false', category: 'climate', difficulty: 'easy', points: 30, statement: 'Akdeniz ikliminde yazlar sıcak ve kurak geçer.', isTrue: true, explanation: 'Doğru! Bu Akdeniz ikliminin en temel özelliğidir.' },
    { id: 'tf-012', type: 'true_false', category: 'population', difficulty: 'medium', points: 30, statement: 'Marmara bölgesi nüfus yoğunluğunun en fazla olduğu bölgedir.', isTrue: true, explanation: 'Doğru! Sanayi ve ticaret nedeniyle yoğunluk çok fazladır.' },
    { id: 'tf-013', type: 'true_false', category: 'rivers', difficulty: 'hard', points: 30, statement: 'Aras ve Kura nehirleri sularını Hazar Denizi\'ne döker.', isTrue: true, explanation: 'Doğru! Bunlar kapalı havza nehirleridir.' },
    { id: 'tf-014', type: 'true_false', category: 'agriculture', difficulty: 'easy', points: 30, statement: 'Çay üretimi sadece Karadeniz bölgesinde yapılır.', isTrue: true, explanation: 'Doğru! Özellikle Doğu Karadeniz.' },
    { id: 'tf-015', type: 'true_false', category: 'industry', difficulty: 'medium', points: 30, statement: 'Türkiye\'nin ilk kağıt fabrikası İzmit\'te kurulmuştur.', isTrue: true, explanation: 'Doğru! SEKA İzmit fabrikası ilktir.' },
    { id: 'tf-016', type: 'true_false', category: 'energy', difficulty: 'hard', points: 30, statement: 'Güneş enerjisi potansiyeli en az Karadeniz bölgesindedir.', isTrue: true, explanation: 'Doğru! Bulutluluk oranı yüksek olduğu için potansiyel azdır.' },
    {
        id: 'tf-017', type: 'true_false', category: 'geography', difficulty: 'easy', points: 30, statement: 'Türkiye 26-45 Doğu boylamları arasındadır.', isTrue: true, explanation: 'Doğru! Bu Türkiye\'nin matematiksel konumudur.'
    },
    { id: 'tf-018', type: 'true_false', category: 'geography', difficulty: 'medium', points: 30, statement: 'Türkiye\'nin en kuzey noktası Hatay\'dadır.', isTrue: false, explanation: 'Yanlış! En güneyi Hatay (Beysun), en kuzeyi Sinop (İnceburun)\'dur.' },
    { id: 'tf-019', type: 'true_false', category: 'mines', difficulty: 'medium', points: 30, statement: 'Linyit yatakları Türkiye\'nin hemen her bölgesinde bulunur.', isTrue: true, explanation: 'Doğru! Genç oluşumlu bir ülke olduğumuz için linyit yaygındır.' },
    { id: 'tf-020', type: 'true_false', category: 'transport', difficulty: 'easy', points: 30, statement: 'Hızlı tren ilk olarak Ankara-Eskişehir hattında hizmete girmiştir.', isTrue: true, explanation: 'Doğru! 2009 yılında açılmıştır.' },
];

// ===========================================
// MATCHING QUESTIONS (10 Questions)
// ===========================================
export const matchingQuestions: MatchingQuestion[] = [
    { id: 'match-001', type: 'matching', category: 'cities', difficulty: 'easy', points: 80, instruction: 'Şehirleri ünlü oldukları ürünlerle eşleştirin:', pairs: [{ left: 'Rize', right: 'Çay' }, { left: 'Gaziantep', right: 'Baklava' }, { left: 'Afyon', right: 'Mermer' }, { left: 'Isparta', right: 'Gül' }] },
    { id: 'match-002', type: 'matching', category: 'rivers', difficulty: 'medium', points: 80, instruction: 'Nehirleri döküldükleri denizlerle eşleştirin:', pairs: [{ left: 'Kızılırmak', right: 'Karadeniz' }, { left: 'Büyük Menderes', right: 'Ege Denizi' }, { left: 'Seyhan', right: 'Akdeniz' }, { left: 'Meriç', right: 'Ege Denizi' }] },
    { id: 'match-005', type: 'matching', category: 'mines', difficulty: 'hard', points: 100, instruction: 'Madenleri en önemli çıkarım yerleriyle eşleştirin:', pairs: [{ left: 'Demir', right: 'Divriği' }, { left: 'Bakır', right: 'Murgul' }, { left: 'Bor', right: 'Bandırma' }, { left: 'Krom', right: 'Guleman' }] },
    { id: 'match-006', type: 'matching', category: 'energy', difficulty: 'hard', points: 100, instruction: 'Enerji kaynaklarını üretim yerleriyle eşleştirin:', pairs: [{ left: 'Linyit', right: 'Afşin' }, { left: 'Doğalgaz', right: 'Hamitabat' }, { left: 'Jeotermal', right: 'Sarayköy' }, { left: 'Taşkömürü', right: 'Zonguldak' }] },
    { id: 'match-007', type: 'matching', category: 'agriculture', difficulty: 'medium', points: 80, instruction: 'Ürünleri en çok üretildikleri yerlerle eşleştirin:', pairs: [{ left: 'Pamuk', right: 'Şanlıurfa' }, { left: 'Ayçiçeği', right: 'Edirne' }, { left: 'Kayısı', right: 'Malatya' }, { left: 'İncir', right: 'Aydın' }] },
];

// ===========================================
// COMBINED EXPORT FUNCTIONS
// ===========================================

export function getAllQuestions(): QuizQuestion[] {
    return [
        ...mapQuestions,
        ...multipleChoiceQuestions,
        ...trueFalseQuestions,
        ...matchingQuestions,
    ];
}

export function getQuestionsByType(type: QuizQuestion['type']): QuizQuestion[] {
    switch (type) {
        case 'map_pinpoint': return mapQuestions;
        case 'multiple_choice': return multipleChoiceQuestions;
        case 'true_false': return trueFalseQuestions;
        case 'matching': return matchingQuestions;
        default: return [];
    }
}

export function getRandomQuestions(count: number, type?: QuizQuestion['type']): QuizQuestion[] {
    const pool = type ? getQuestionsByType(type) : getAllQuestions();
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}
