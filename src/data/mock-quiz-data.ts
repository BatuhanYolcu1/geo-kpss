/**
 * Comprehensive Mock Quiz Data for KPSS Geography
 * Total Questions: 120+
 */

import type {
    MapQuestion,
    MultipleChoiceQuestion,
    TrueFalseQuestion,
    MatchingQuestion,
    QuizQuestion
} from '@/types/quiz';

// ===========================================
// MAP PINPOINT QUESTIONS (50 Questions)
// ===========================================
export const mapQuestions: MapQuestion[] = [
    // --- LAKES ---
    { id: 'map-001', type: 'map_pinpoint', category: 'physical', subCategory: 'lake', difficulty: 'easy', points: 100, targetFeatureId: 'lake-01', targetName: 'Van Gölü', targetLat: 38.6, targetLng: 43.0, hint: 'Türkiye\'nin en büyük gölü', didYouKnow: 'Van Gölü, dünyanın en büyük sodalı gölüdür.' },
    { id: 'map-002', type: 'map_pinpoint', category: 'physical', subCategory: 'lake', difficulty: 'medium', points: 100, targetFeatureId: 'lake-02', targetName: 'Tuz Gölü', targetLat: 38.75, targetLng: 33.4, hint: 'İkinci büyük gölümüz', didYouKnow: 'Türkiye\'nin tuz ihtiyacının %40\'ı buradan karşılanır.' },
    { id: 'map-026', type: 'map_pinpoint', category: 'physical', subCategory: 'lake', difficulty: 'hard', points: 150, targetFeatureId: 'lake-03', targetName: 'Nemrut Gölü', targetLat: 38.65, targetLng: 42.25, hint: 'Kaldera gölü', didYouKnow: 'Dünyanın ikinci, Türkiye\'nin en büyük krater gölüdür.' },
    { id: 'map-027', type: 'map_pinpoint', category: 'physical', subCategory: 'lake', difficulty: 'medium', points: 120, targetFeatureId: 'lake-04', targetName: 'Beyşehir Gölü', targetLat: 37.7, targetLng: 31.5, hint: 'En büyük tatlı su gölü', didYouKnow: 'Türkiye\'nin en büyük tatlı su gölüdür.' },
    { id: 'map-028', type: 'map_pinpoint', category: 'physical', subCategory: 'lake', difficulty: 'hard', points: 150, targetFeatureId: 'lake-05', targetName: 'Tortum Gölü', targetLat: 40.65, targetLng: 41.5, hint: 'Heyelan set gölü', didYouKnow: 'Erzurum\'da bulunan önemli bir heyelan set gölüdür.' },

    // --- MOUNTAINS ---
    { id: 'map-003', type: 'map_pinpoint', category: 'physical', subCategory: 'mountain', difficulty: 'easy', points: 100, targetFeatureId: 'mountain-01', targetName: 'Ağrı Dağı', targetLat: 39.7, targetLng: 44.3, hint: 'En yüksek zirve', didYouKnow: '5137 metre ile Türkiye\'nin ve Avrupa\'nın en yüksek zirvesidir.' },
    { id: 'map-021', type: 'map_pinpoint', category: 'physical', subCategory: 'mountain', difficulty: 'hard', points: 150, targetFeatureId: 'mount-02', targetName: 'Erciyes Dağı', targetLat: 38.5, targetLng: 35.4, hint: 'İç Anadolu\'nun en yükseği', didYouKnow: 'Eski bir volkanik dağdır ve İç Anadolu\'nun zirvesidir.' },
    { id: 'map-022', type: 'map_pinpoint', category: 'physical', subCategory: 'mountain', difficulty: 'hard', points: 150, targetFeatureId: 'mount-03', targetName: 'Uludağ', targetLat: 40.0, targetLng: 29.1, hint: 'Batı Anadolu\'nun en yükseği', didYouKnow: 'Türkiye\'nin kış turizmi merkezidir.' },
    { id: 'map-029', type: 'map_pinpoint', category: 'physical', subCategory: 'mountain', difficulty: 'hard', points: 150, targetFeatureId: 'mount-04', targetName: 'Kaçkar Dağı', targetLat: 40.8, targetLng: 41.2, hint: 'Doğu Karadeniz zirvesi', didYouKnow: 'Rize sınırlarında, Alp-Himalaya kıvrım kuşağındadır.' },
    { id: 'map-030', type: 'map_pinpoint', category: 'physical', subCategory: 'mountain', difficulty: 'hard', points: 150, targetFeatureId: 'mount-05', targetName: 'Süphan Dağı', targetLat: 38.9, targetLng: 42.8, hint: 'Van Gölü kuzeyi', didYouKnow: 'Türkiye\'nin üçüncü en yüksek dağıdır (Volkanik).' },

    // --- MINES & ECONOMY ---
    { id: 'map-008', type: 'map_pinpoint', category: 'economy', subCategory: 'mine', difficulty: 'hard', points: 150, targetFeatureId: 'mine-01', targetName: 'Divriği (Demir)', targetLat: 39.3, targetLng: 38.1, hint: 'Sivas\'taki demir yatağı', didYouKnow: 'Demir yatağı olarak kurulan tesis, bölge ekonomisinin can damarıdır.' },
    { id: 'map-009', type: 'map_pinpoint', category: 'economy', subCategory: 'mine', difficulty: 'hard', points: 150, targetFeatureId: 'mine-02', targetName: 'Murgul (Bakır)', targetLat: 41.2, targetLng: 41.5, hint: 'Artvin\'deki bakır işletmesi', didYouKnow: 'Türkiye\'nin en modern bakır işleme tesislerinden birine sahiptir.' },
    { id: 'map-031', type: 'map_pinpoint', category: 'economy', subCategory: 'mine', difficulty: 'hard', points: 150, targetFeatureId: 'mine-03', targetName: 'Hekimhan (Demir)', targetLat: 38.8, targetLng: 37.9, hint: 'Malatya\'daki demir yatağı', didYouKnow: 'Hasançelebi ile birlikte en önemli demir sahalarımızdandır.' },
    { id: 'map-032', type: 'map_pinpoint', category: 'economy', subCategory: 'mine', difficulty: 'hard', points: 150, targetFeatureId: 'mine-04', targetName: 'Emet (Bor)', targetLat: 39.3, targetLng: 29.2, hint: 'Kütahya\'daki bor yatağı', didYouKnow: 'Dünyanın en zengin kolemanit (bor) yatakları buradadır.' },
    { id: 'map-033', type: 'map_pinpoint', category: 'economy', subCategory: 'mine', difficulty: 'hard', points: 150, targetFeatureId: 'mine-05', targetName: 'Guleman (Krom)', targetLat: 38.4, targetLng: 39.8, hint: 'Elazığ\'daki krom yatağı', didYouKnow: 'Türkiye krom üretiminin merkezi Elazığ-Guleman\'dır.' },

    // --- ENERGY PLANTS ---
    { id: 'map-010', type: 'map_pinpoint', category: 'economy', subCategory: 'energy', difficulty: 'hard', points: 150, targetFeatureId: 'energy-01', targetName: 'Afşin-Elbistan (Linyit)', targetLat: 38.3, targetLng: 37.0, hint: 'En büyük linyit rezervi', didYouKnow: 'Türkiye\'nin linyit rezervlerinin %40\'ı bu havzadadır.' },
    { id: 'map-019', type: 'map_pinpoint', category: 'economy', subCategory: 'energy', difficulty: 'hard', points: 150, targetFeatureId: 'energy-02', targetName: 'Sarayköy (Jeotermal)', targetLat: 37.9, targetLng: 28.9, hint: 'İlk jeotermal santral', didYouKnow: 'Denizli\'de bulunan, Türkiye\'nin ilk jeotermal enerji santralidir.' },
    { id: 'map-020', type: 'map_pinpoint', category: 'economy', subCategory: 'energy', difficulty: 'hard', points: 150, targetFeatureId: 'energy-03', targetName: 'Hamitabat (Doğalgaz)', targetLat: 41.4, targetLng: 27.5, hint: 'Kırklareli doğalgaz santrali', didYouKnow: 'Doğalgazdan elektrik üreten ilk büyük tesisimizdir.' },
    { id: 'map-034', type: 'map_pinpoint', category: 'economy', subCategory: 'energy', difficulty: 'hard', points: 150, targetFeatureId: 'energy-04', targetName: 'Soma (Linyit)', targetLat: 39.2, targetLng: 27.6, hint: 'Manisa linyit santrali', didYouKnow: 'Ege Bölgesi\'nin en büyük linyit yakıtlı santrallerindendir.' },
    { id: 'map-035', type: 'map_pinpoint', category: 'economy', subCategory: 'energy', difficulty: 'hard', points: 150, targetFeatureId: 'energy-05', targetName: 'Atatürk Barajı (Hidro)', targetLat: 37.5, targetLng: 38.5, hint: 'En büyük barajımız', didYouKnow: 'Fırat Nehri üzerinde, Cumhuriyet tarihinin en büyük projesidir.' },

    // --- UNESCO & TOURISM ---
    { id: 'map-036', type: 'map_pinpoint', category: 'culture', subCategory: 'unesco', difficulty: 'hard', points: 150, targetFeatureId: 'unesco-01', targetName: 'Göbeklitepe', targetLat: 37.2, targetLng: 38.9, hint: 'Tarihin sıfır noktası', didYouKnow: 'Dünyanın bilinen en eski tapınak kompleksidir (Şanlıurfa).' },
    { id: 'map-037', type: 'map_pinpoint', category: 'culture', subCategory: 'unesco', difficulty: 'hard', points: 150, targetFeatureId: 'unesco-02', targetName: 'Ani Harabeleri', targetLat: 40.5, targetLng: 43.6, hint: 'Kars\'taki tarihi kent', didYouKnow: '"Binbir Kilise Şehri" olarak bilinen tarihi İpek Yolu durağıdır.' },
    { id: 'map-038', type: 'map_pinpoint', category: 'culture', subCategory: 'unesco', difficulty: 'hard', points: 150, targetFeatureId: 'unesco-03', targetName: 'Safranbolu', targetLat: 41.2, targetLng: 32.7, hint: 'Osmanlı mimarisi', didYouKnow: 'Geleneksel Türk toplumsal yaşantısını yansıtan eşsiz konaklara sahiptir.' },
    { id: 'map-039', type: 'map_pinpoint', category: 'culture', subCategory: 'unesco', difficulty: 'hard', points: 150, targetFeatureId: 'unesco-04', targetName: 'Efes Antik Kenti', targetLat: 37.9, targetLng: 27.3, hint: 'İzmir\'deki Roma kenti', didYouKnow: 'Antik dünyanın yedi harikasından biri olan Artemis Tapınağı buradadır.' },
    { id: 'map-040', type: 'map_pinpoint', category: 'culture', subCategory: 'unesco', difficulty: 'hard', points: 150, targetFeatureId: 'unesco-05', targetName: 'Hattuşaş', targetLat: 40.0, targetLng: 34.6, hint: 'Hitit başkenti', didYouKnow: 'Çorum\'da bulunan, Hitit İmparatorluğu\'nun kadim başkentidir.' },

    // --- PLAINS & DELTAS ---
    { id: 'map-011', type: 'map_pinpoint', category: 'physical', subCategory: 'plain', difficulty: 'medium', points: 120, targetFeatureId: 'plain-01', targetName: 'Çukurova', targetLat: 36.8, targetLng: 35.3, hint: 'En büyük delta ovamız', didYouKnow: 'Seyhan ve Ceyhan nehirlerinin oluşturduğu Türkiye\'nin en büyük deltasıdır.' },
    { id: 'map-041', type: 'map_pinpoint', category: 'physical', subCategory: 'plain', difficulty: 'medium', points: 120, targetFeatureId: 'plain-03', targetName: 'Bafra Ovası', targetLat: 41.6, targetLng: 35.9, hint: 'Kızılırmak deltası', didYouKnow: 'Karadeniz\'in en büyük delta ovalarından biridir.' },
    { id: 'map-042', type: 'map_pinpoint', category: 'physical', subCategory: 'plain', difficulty: 'medium', points: 120, targetFeatureId: 'plain-04', targetName: 'Çarşamba Ovası', targetLat: 41.2, targetLng: 36.6, hint: 'Yeşilırmak deltası', didYouKnow: 'Samsun\'un doğusunda Yeşilırmak tarafından oluşturulmuş verimli sahadır.' },
    { id: 'map-043', type: 'map_pinpoint', category: 'physical', subCategory: 'plain', difficulty: 'hard', points: 150, targetFeatureId: 'plain-05', targetName: 'Konya Ovası', targetLat: 37.9, targetLng: 32.5, hint: 'Tahıl ambarı', didYouKnow: 'Eski bir göl tabanı olan Türkiye\'nin en büyük iç ovasıdır.' },
    { id: 'map-044', type: 'map_pinpoint', category: 'physical', subCategory: 'plain', difficulty: 'hard', points: 150, targetFeatureId: 'plain-06', targetName: 'Ergene Ovası', targetLat: 41.2, targetLng: 27.0, hint: 'Marmara\'nın batısı', didYouKnow: 'Marmara Bölgesi\'nin ayçiçeği ve pirinç üretim merkezidir.' },

    // --- MISC / CITIES / PLATEAUS ---
    { id: 'map-004', type: 'map_pinpoint', category: 'administrative', subCategory: 'city', difficulty: 'easy', points: 100, targetFeatureId: 'city-06', targetName: 'Ankara', targetLat: 39.93, targetLng: 32.85, didYouKnow: 'Anadolu\'nun kalbi ve Cumhuriyetimizin başkentidir.' },
    { id: 'map-045', type: 'map_pinpoint', category: 'physical', subCategory: 'plateau', difficulty: 'hard', points: 150, targetFeatureId: 'plateau-01', targetName: 'Tekke Platosu', targetLat: 36.5, targetLng: 30.0, hint: 'Antalya batısı', didYouKnow: 'Karstik yapılı, kıl keçisi yetiştiriciliğinin yaygın olduğu platodur.' },
    { id: 'map-046', type: 'map_pinpoint', category: 'physical', subCategory: 'plateau', difficulty: 'hard', points: 150, targetFeatureId: 'plateau-02', targetName: 'Taşeli Platosu', targetLat: 36.3, targetLng: 33.0, hint: 'Antalya-Mersin arası', didYouKnow: 'Türkiye\'nin nüfus yoğunluğunun en az olduğu engebeli karstik platolardan biridir.' },
    { id: 'map-047', type: 'map_pinpoint', category: 'physical', subCategory: 'plateau', difficulty: 'hard', points: 150, targetFeatureId: 'plateau-03', targetName: 'Ardahan Platosu', targetLat: 41.1, targetLng: 42.7, hint: 'Doğu Anadolu kuzeyi', didYouKnow: 'Lav (volkanik) örtülü, büyükbaş hayvancılık için ideal yüksek platodur.' },
    { id: 'map-048', type: 'map_pinpoint', category: 'administrative', subCategory: 'city', difficulty: 'medium', points: 100, targetFeatureId: 'city-34', targetName: 'İstanbul', targetLat: 41.0, targetLng: 29.0, didYouKnow: 'Kıtaları birbirine bağlayan dünya kenti ve en kalabalık ilimizdir.' },
    { id: 'map-049', type: 'map_pinpoint', category: 'economic', subCategory: 'industry', difficulty: 'hard', points: 150, targetFeatureId: 'ind-03', targetName: 'Batman (Petrol)', targetLat: 37.9, targetLng: 41.1, hint: 'Petrol rafinerisi şehri', didYouKnow: 'Türkiye\'de petrolün ilk kez çıkarıldığı ve rafine edildiği yerdir.' },
    { id: 'map-050', type: 'map_pinpoint', category: 'economic', subCategory: 'industry', difficulty: 'hard', points: 150, targetFeatureId: 'ind-04', targetName: 'Eskişehir (Şeker)', targetLat: 39.8, targetLng: 30.5, hint: 'İlk sanayi girişimleri', didYouKnow: 'Türkiye\'de modern sanayinin ve şeker üretiminin öncü şehirlerinden biridir.' },
];

// ===========================================
// MULTIPLE CHOICE QUESTIONS (100+ Questions Categorized)
// ===========================================
export const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
    // --- FİZİKİ COĞRAFYA ---
    { id: 'mc-001', type: 'multiple_choice', category: 'physical', difficulty: 'easy', points: 50, text: 'Türkiye\'nin en büyük gölü hangisidir?', options: ['Tuz Gölü', 'Van Gölü', 'Beyşehir Gölü', 'İznik Gölü', 'Eğirdir Gölü'], correctIndex: 1, explanation: 'Van Gölü 3713 km² ile Türkiye\'nin en büyük gölüdür.' },
    { id: 'mc-002', type: 'multiple_choice', category: 'physical', difficulty: 'easy', points: 50, text: 'Türkiye\'nin en yüksek dağı hangisidir?', options: ['Erciyes Dağı', 'Uludağ', 'Kaçkar Dağı', 'Ağrı Dağı', 'Süphan Dağı'], correctIndex: 3, explanation: 'Ağrı Dağı 5137 metre ile Türkiye\'nin en yüksek dağıdır.' },
    { id: 'mc-003', type: 'multiple_choice', category: 'physical', difficulty: 'medium', points: 50, text: 'Türkiye\'de "Fön Rüzgarları" en çok hangi bölgemizde görülür?', options: ['Ege', 'Marmara', 'Doğu Karadeniz', 'Akdeniz', 'İç Anadolu'], correctIndex: 2, explanation: 'Fön rüzgarları dağların denize paralel uzandığı Doğu Karadeniz\'de çok etkili olur.' },
    { id: 'mc-004', type: 'multiple_choice', category: 'physical', difficulty: 'hard', points: 50, text: 'Hangi dağımız "Kırıklı (Horst)" yapıda bir dağdır?', options: ['Kaçkar', 'Erciyes', 'Menteşe', 'Ağrı', 'Toros'], correctIndex: 2, explanation: 'Ege\'deki Menteşe, Kaz, Madra, Yunt dağları kırıklı yapıdadır.' },
    { id: 'mc-005', type: 'multiple_choice', category: 'physical', difficulty: 'medium', points: 50, text: 'Türkiye\'nin matematiksel konumu düşünüldüğünde, yerel saat farkı hangi iki il arasında en fazladır?', options: ['Sinop - Hatay', 'Çanakkale - Iğdır', 'İzmir - Van', 'Antalya - Artvin', 'Muğla - Trabzon'], correctIndex: 1, explanation: 'Doğu-batı yönlü en uzak noktalar olan Çanakkale ve Iğdır arasında saat farkı en fazladır.' },
    { id: 'mc-006', type: 'multiple_choice', category: 'physical', difficulty: 'hard', points: 50, text: 'Aşağıdaki platolardan hangisi oluşumu bakımından "Tabaka Düzlüğü" (Yatay Duruşlu) özelliği gösterir?', options: ['Haymana', 'Cihanbeyli', 'Obruk', 'Yazılıkaya', 'Erzurum-Kars'], correctIndex: 4, explanation: 'Erzurum-Kars Platosu lav (volkanik) örtülü bir platodur.' },
    { id: 'mc-007', type: 'multiple_choice', category: 'physical', difficulty: 'medium', points: 50, text: 'Türkiye\'de buzulların oluşturduğu şekillere sadece yüksek dağlarda rastlanmasının sebebi nedir?', options: ['Denizden uzaklık', 'Enlem (Matematik Konum)', 'Nemlilik', 'Batı Rüzgarları', 'Bitki Örtüsü'], correctIndex: 1, explanation: 'Türkiye orta kuşakta yer aldığı için buzullar deniz seviyesine inemez.' },
    { id: 'mc-008', type: 'multiple_choice', category: 'physical', difficulty: 'hard', points: 50, text: 'Aşağıdaki göllerimizden hangisinin "Gideğeni" olduğu için suları tatlıdır?', options: ['Acıgöl', 'Burdur Gölü', 'Beyşehir Gölü', 'Tuz Gölü', 'Van Gölü'], correctIndex: 2, explanation: 'Beyşehir Gölü\'nün gideğeni olduğu için suları tatlıdır.' },
    { id: 'mc-009', type: 'multiple_choice', category: 'physical', difficulty: 'medium', points: 50, text: 'Türkiye ormanlarının büyük çoğunluğu hangi kıyı kuşağında yer alır?', options: ['Akdeniz', 'Karadeniz', 'Ege', 'Marmara', 'Güney Marmara'], correctIndex: 1, explanation: 'Yağış zenginliği sebebiyle Karadeniz kıyı kuşağı orman zenginliğinde birincidir.' },

    // --- BEŞERİ VE EKONOMİK COĞRAFYA ---
    { id: 'mc-019', type: 'multiple_choice', category: 'economic', difficulty: 'medium', points: 50, text: 'Türkiye\'de nüfus yoğunluğu en düşük olan ilimiz hangisidir?', options: ['Artvin', 'Bayburt', 'Tunceli', 'Hakkari', 'Gümüşhane'], correctIndex: 2, explanation: 'Tunceli, yüzölçümüne göre en az insanın yaşadığı ilimizdir.' },
    { id: 'mc-020', type: 'multiple_choice', category: 'economic', difficulty: 'hard', points: 50, text: 'Murgul, Maden ve Küre bölgelerinde ortak çıkarılan maden hangisidir?', options: ['Demir', 'Krom', 'Bor', 'Bakır', 'Boksit'], correctIndex: 3, explanation: 'Bu üç merkez de önemli bakır yataklarıdır.' },
    { id: 'mc-021', type: 'multiple_choice', category: 'economic', difficulty: 'hard', points: 50, text: 'Türkiye\'nin ilk Nükleer Santrali hangi ilimizde inşa edilmektedir?', options: ['Sinop', 'Kırklareli', 'Mersin', 'Sakarya', 'Isparta'], correctIndex: 2, explanation: 'Akkuyu Nükleer Santrali Mersin ilindedir.' },
    { id: 'mc-022', type: 'multiple_choice', category: 'economic', difficulty: 'medium', points: 50, text: 'Türkiye fındık üretiminde Dünya birincisidir. En çok hangi ilde üretilir?', options: ['Giresun', 'Trabzon', 'Ordu', 'Sakarya', 'Rize'], correctIndex: 2, explanation: 'Ordu, Türkiye ve dünya fındık üretiminde liderdir.' },
    { id: 'mc-023', type: 'multiple_choice', category: 'economic', difficulty: 'hard', points: 50, text: 'Hangi ilimizde Petrol Rafinerisi bulunmaz?', options: ['Batman', 'İzmir', 'Mersin', 'Kırıkkale', 'Kocaeli'], correctIndex: 2, explanation: 'Mersin ATAŞ rafinerisi artık sadece depolama merkezidir.' },
    { id: 'mc-024', type: 'multiple_choice', category: 'economic', difficulty: 'medium', points: 50, text: 'Hangisi yenilenebilir bir enerji kaynağı değildir?', options: ['Güneş', 'Jeotermal', 'Linyit', 'Biyokütle', 'Rüzgar'], correctIndex: 2, explanation: 'Linyit bir kömür türüdür ve fosil bir kaynaktır.' },
    { id: 'mc-025', type: 'multiple_choice', category: 'economic', difficulty: 'hard', points: 50, text: 'Ovit Tüneli hangi iki şehri birbirine bağlar?', options: ['Rize - Erzurum', 'Trabzon - Gümüşhane', 'Artvin - Ardahan', 'Giresun - Sivas', 'Ordu - Tokat'], correctIndex: 0, explanation: 'Ovit Tüneli Rize ile Erzurum arasındadır.' },
    { id: 'mc-026', type: 'multiple_choice', category: 'economic', difficulty: 'hard', points: 50, text: 'Güneydoğu Anadolu Projesi (GAP) ile üretim alanı en çok genişleyen tarım ürünü hangisidir?', options: ['Pirinç', 'Mercimek', 'Pamuk', 'Antep Fıstığı', 'Ayçiçeği'], correctIndex: 2, explanation: 'GAP sonrası Şanlıurfa pamuk üretiminde Türkiye birincisi olmuştur.' },
    { id: 'mc-027', type: 'multiple_choice', category: 'economic', difficulty: 'medium', points: 50, text: 'Seydişehir\'de işlenen maden hangisidir?', options: ['Demir', 'Bakır', 'Alüminyum (Boksit)', 'Krom', 'Lületaşı'], correctIndex: 2, explanation: 'Seydişehir, Türkiye\'nin tek alüminyum fabrikasına ev sahipliği yapar.' },
    { id: 'mc-028', type: 'multiple_choice', category: 'economic', difficulty: 'medium', points: 50, text: 'Sınır kapılarından hangisi Türkiye ile İran arasındaki ulaşımı sağlar?', options: ['Gürbulak', 'Sarp', 'İpsala', 'Habur', 'Kapıkule'], correctIndex: 0, explanation: 'Gürbulak Sınır Kapısı İran arasındadır.' },

    // --- GENEL KARMA ---
    { id: 'mc-062', type: 'multiple_choice', category: 'mixed', difficulty: 'medium', points: 50, text: 'Türkiye\'de nüfusun dağılışında aşağıdakilerden hangisi "Doğal" bir faktördür?', options: ['Sanayileşme', 'Ulaşım Olanakları', 'İklim Özellikleri', 'Turizm Faaliyetleri', 'Madencilik'], correctIndex: 2, explanation: 'İklim özellikleri doğal bir faktördür.' },
    { id: 'mc-063', type: 'multiple_choice', category: 'mixed', difficulty: 'hard', points: 50, text: 'Aşağıdaki sınır kapılarından hangisi demiryolu bağlantısı içerir?', options: ['Habur', 'Kapıkule', 'Sarp', 'Gürbulak', 'İpsala'], correctIndex: 1, explanation: 'Kapıkule Sınır Kapısı (Bulgaristan) demiryolu hattına sahiptir.' },
];

// ===========================================
// TRUE/FALSE QUESTIONS (20 Questions)
// ===========================================
export const trueFalseQuestions: TrueFalseQuestion[] = [
    { id: 'tf-001', type: 'true_false', category: 'lakes', difficulty: 'easy', points: 30, statement: 'Van Gölü Türkiye\'nin en büyük gölüdür.', isTrue: true, explanation: 'Doğru! Van Gölü 3713 km² ile Türkiye\'nin en büyük gölüdür.' },
    { id: 'tf-002', type: 'true_false', category: 'rivers', difficulty: 'medium', points: 30, statement: 'Fırat Nehri Türkiye\'nin en uzun nehridir.', isTrue: false, explanation: 'Yanlış! Sınırlarımız içindeki en uzun nehir Kızılırmak\'tır.' },
    { id: 'tf-009', type: 'true_false', category: 'plains', difficulty: 'easy', points: 30, statement: 'Çukurova bir volkanik ovadır.', isTrue: false, explanation: 'Yanlış! Çukurova bir delta (akarsu biriktirme) ovasıdır.' },
    { id: 'tf-010', type: 'true_false', category: 'mines', difficulty: 'medium', points: 30, statement: 'Türkiye dünya bor rezervlerinin %70\'inden fazlasına sahiptir.', isTrue: true, explanation: 'Doğru! Yaklaşık %73 rezerv Türkiye\'dedir.' },
    { id: 'tf-011', type: 'true_false', category: 'climate', difficulty: 'easy', points: 30, statement: 'Akdeniz ikliminde yazlar sıcak ve kurak geçer.', isTrue: true, explanation: 'Doğru! Bu Akdeniz ikliminin en temel özelliğidir.' },
    { id: 'tf-012', type: 'true_false', category: 'population', difficulty: 'medium', points: 30, statement: 'Marmara bölgesi nüfus yoğunluğunun en fazla olduğu bölgeder.', isTrue: true, explanation: 'Doğru! Sanayi ve ticaret nedeniyle yoğunluk çok fazladır.' },
    { id: 'tf-013', type: 'true_false', category: 'rivers', difficulty: 'hard', points: 30, statement: 'Aras ve Kura nehirleri sularını Hazar Denizi\'ne döker.', isTrue: true, explanation: 'Doğru! Bunlar kapalı havza nehirleridir.' },
    { id: 'tf-014', type: 'true_false', category: 'agriculture', difficulty: 'easy', points: 30, statement: 'Çay üretimi sadece Karadeniz bölgesinde yapılır.', isTrue: true, explanation: 'Doğru! Özellikle Doğu Karadeniz.' },
    { id: 'tf-015', type: 'true_false', category: 'industry', difficulty: 'medium', points: 30, statement: 'Türkiye\'nin ilk kağıt fabrikası İzmit\'te kurulmuştur.', isTrue: true, explanation: 'Doğru! SEKA İzmit fabrikası ilktir.' },
    { id: 'tf-016', type: 'true_false', category: 'energy', difficulty: 'hard', points: 30, statement: 'Güneş enerjisi potansiyeli en az Karadeniz bölgesindedir.', isTrue: true, explanation: 'Doğru! Bulutluluk oranı yüksek olduğu için potansiyel azdır.' },
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
