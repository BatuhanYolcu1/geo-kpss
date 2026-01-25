/**
 * Mock Quiz Data for all question types
 */

import type {
    MapQuestion,
    MultipleChoiceQuestion,
    TrueFalseQuestion,
    MatchingQuestion,
    QuizQuestion
} from '@/types/quiz';

// ===========================================
// MAP PINPOINT QUESTIONS
// ===========================================
export const mapQuestions: MapQuestion[] = [
    {
        id: 'map-001',
        type: 'map_pinpoint',
        category: 'lakes',
        difficulty: 'easy',
        points: 100,
        targetFeatureId: 'lake-01',
        targetName: 'Van Gölü',
        targetLat: 38.6,
        targetLng: 43.0,
        hint: 'Türkiye\'nin en büyük gölü',
    },
    {
        id: 'map-002',
        type: 'map_pinpoint',
        category: 'lakes',
        difficulty: 'medium',
        points: 100,
        targetFeatureId: 'lake-02',
        targetName: 'Tuz Gölü',
        targetLat: 38.75,
        targetLng: 33.4,
        hint: 'Türkiye\'nin en tuzlu gölü',
    },
    {
        id: 'map-003',
        type: 'map_pinpoint',
        category: 'mountains',
        difficulty: 'easy',
        points: 100,
        targetFeatureId: 'mountain-01',
        targetName: 'Ağrı Dağı',
        targetLat: 39.7,
        targetLng: 44.3,
        hint: 'Türkiye\'nin en yüksek dağı',
    },
    {
        id: 'map-004',
        type: 'map_pinpoint',
        category: 'cities',
        difficulty: 'easy',
        points: 100,
        targetFeatureId: 'city-06',
        targetName: 'Ankara',
        targetLat: 39.9334,
        targetLng: 32.8597,
    },
    {
        id: 'map-005',
        type: 'map_pinpoint',
        category: 'cities',
        difficulty: 'medium',
        points: 100,
        targetFeatureId: 'city-25',
        targetName: 'Erzurum',
        targetLat: 39.9,
        targetLng: 41.2769,
    },
];

// ===========================================
// MULTIPLE CHOICE QUESTIONS
// ===========================================
export const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
    {
        id: 'mc-001',
        type: 'multiple_choice',
        category: 'lakes',
        difficulty: 'easy',
        points: 50,
        text: 'Türkiye\'nin en büyük gölü hangisidir?',
        options: ['Tuz Gölü', 'Van Gölü', 'Beyşehir Gölü', 'İznik Gölü', 'Eğirdir Gölü'],
        correctIndex: 1,
        explanation: 'Van Gölü 3713 km² ile Türkiye\'nin en büyük gölüdür.',
    },
    {
        id: 'mc-002',
        type: 'multiple_choice',
        category: 'mountains',
        difficulty: 'easy',
        points: 50,
        text: 'Türkiye\'nin en yüksek dağı hangisidir?',
        options: ['Erciyes Dağı', 'Uludağ', 'Kaçkar Dağı', 'Ağrı Dağı', 'Süphan Dağı'],
        correctIndex: 3,
        explanation: 'Ağrı Dağı 5137 metre ile Türkiye\'nin en yüksek dağıdır.',
    },
    {
        id: 'mc-003',
        type: 'multiple_choice',
        category: 'rivers',
        difficulty: 'medium',
        points: 50,
        text: 'Türkiye\'nin EN UZUN nehri hangisidir?',
        options: ['Fırat', 'Dicle', 'Kızılırmak', 'Yeşilırmak', 'Sakarya'],
        correctIndex: 2,
        explanation: 'Kızılırmak 1355 km ile Türkiye\'nin tamamen sınırları içinde akan en uzun nehridir.',
    },
    {
        id: 'mc-004',
        type: 'multiple_choice',
        category: 'cities',
        difficulty: 'easy',
        points: 50,
        text: 'Türkiye Cumhuriyeti\'nin başkenti hangisidir?',
        options: ['İstanbul', 'İzmir', 'Ankara', 'Bursa', 'Antalya'],
        correctIndex: 2,
        explanation: 'Ankara, 13 Ekim 1923\'te başkent ilan edilmiştir.',
    },
    {
        id: 'mc-005',
        type: 'multiple_choice',
        category: 'rivers',
        difficulty: 'medium',
        points: 50,
        text: 'Türkiye\'nin EN ÇOK SU taşıyan nehri hangisidir?',
        options: ['Kızılırmak', 'Fırat', 'Dicle', 'Sakarya', 'Seyhan'],
        correctIndex: 1,
        explanation: 'Fırat Nehri Türkiye\'nin en fazla su taşıyan nehridir.',
    },
    {
        id: 'mc-006',
        type: 'multiple_choice',
        category: 'lakes',
        difficulty: 'medium',
        points: 50,
        text: 'Türkiye\'nin en büyük TATLISU gölü hangisidir?',
        options: ['Van Gölü', 'Tuz Gölü', 'Beyşehir Gölü', 'Eğirdir Gölü', 'İznik Gölü'],
        correctIndex: 2,
        explanation: 'Beyşehir Gölü Türkiye\'nin en büyük tatlısu gölüdür.',
    },
    {
        id: 'mc-007',
        type: 'multiple_choice',
        category: 'cities',
        difficulty: 'medium',
        points: 50,
        text: 'Osmanlı Devleti\'nin ilk başkenti hangisidir?',
        options: ['İstanbul', 'Edirne', 'Bursa', 'Söğüt', 'Ankara'],
        correctIndex: 2,
        explanation: 'Bursa, 1326-1365 yılları arasında Osmanlı\'nın ilk başkentiydi.',
    },
    {
        id: 'mc-008',
        type: 'multiple_choice',
        category: 'mines',
        difficulty: 'hard',
        points: 50,
        text: 'Türkiye dünya bor rezervlerinin yüzde kaçına sahiptir?',
        options: ['%30', '%50', '%60', '%73', '%85'],
        correctIndex: 3,
        explanation: 'Türkiye dünya bor rezervlerinin yaklaşık %73\'üne sahiptir.',
    },
    {
        id: 'mc-009',
        type: 'multiple_choice',
        category: 'agriculture',
        difficulty: 'medium',
        points: 50,
        text: 'Türkiye\'de çay üretimi hangi bölgede yapılır?',
        options: ['Ege', 'Akdeniz', 'Doğu Karadeniz', 'Marmara', 'İç Anadolu'],
        correctIndex: 2,
        explanation: 'Çay üretimi sadece Doğu Karadeniz Bölgesi\'nde (Rize-Trabzon) yapılır.',
    },
    {
        id: 'mc-010',
        type: 'multiple_choice',
        category: 'lakes',
        difficulty: 'hard',
        points: 50,
        text: 'Türkiye\'nin en DERİN gölü hangisidir?',
        options: ['Van Gölü', 'Hazar Gölü', 'Salda Gölü', 'Tortum Gölü', 'Abant Gölü'],
        correctIndex: 2,
        explanation: 'Salda Gölü 184 metre derinliğiyle Türkiye\'nin en derin gölüdür.',
    },
];

// ===========================================
// TRUE/FALSE QUESTIONS
// ===========================================
export const trueFalseQuestions: TrueFalseQuestion[] = [
    {
        id: 'tf-001',
        type: 'true_false',
        category: 'lakes',
        difficulty: 'easy',
        points: 30,
        statement: 'Van Gölü Türkiye\'nin en büyük gölüdür.',
        isTrue: true,
        explanation: 'Doğru! Van Gölü 3713 km² ile Türkiye\'nin en büyük gölüdür.',
    },
    {
        id: 'tf-002',
        type: 'true_false',
        category: 'rivers',
        difficulty: 'medium',
        points: 30,
        statement: 'Fırat Nehri Türkiye\'nin en uzun nehridir.',
        isTrue: false,
        explanation: 'Yanlış! En uzun nehir Kızılırmak\'tır (1355 km). Fırat ise en fazla su taşıyan nehirdir.',
    },
    {
        id: 'tf-003',
        type: 'true_false',
        category: 'cities',
        difficulty: 'easy',
        points: 30,
        statement: 'İstanbul iki kıtada uzanan tek Türk şehridir.',
        isTrue: true,
        explanation: 'Doğru! İstanbul, Avrupa ve Asya kıtalarında toprakları olan tek şehirdir.',
    },
    {
        id: 'tf-004',
        type: 'true_false',
        category: 'mountains',
        difficulty: 'medium',
        points: 30,
        statement: 'Erciyes Dağı aktif bir volkandır.',
        isTrue: false,
        explanation: 'Yanlış! Erciyes Dağı sönmüş bir volkandır.',
    },
    {
        id: 'tf-005',
        type: 'true_false',
        category: 'agriculture',
        difficulty: 'easy',
        points: 30,
        statement: 'Rize ili çay üretiminde Türkiye birincisidir.',
        isTrue: true,
        explanation: 'Doğru! Rize, Türkiye\'nin çay üretim merkezidir.',
    },
    {
        id: 'tf-006',
        type: 'true_false',
        category: 'cities',
        difficulty: 'medium',
        points: 30,
        statement: 'Konya, Türkiye\'nin yüzölçümü en büyük ilidir.',
        isTrue: true,
        explanation: 'Doğru! Konya 40.838 km² ile Türkiye\'nin yüzölçümü en büyük ilidir.',
    },
    {
        id: 'tf-007',
        type: 'true_false',
        category: 'rivers',
        difficulty: 'hard',
        points: 30,
        statement: 'Asi Nehri Türkiye\'de güneyden kuzeye akan tek nehirdir.',
        isTrue: true,
        explanation: 'Doğru! Asi Nehri (Orontes), Türkiye\'de tersine akan tek nehirdir.',
    },
    {
        id: 'tf-008',
        type: 'true_false',
        category: 'lakes',
        difficulty: 'medium',
        points: 30,
        statement: 'Tuz Gölü Türkiye\'nin en büyük gölüdür.',
        isTrue: false,
        explanation: 'Yanlış! Tuz Gölü 2. büyük göldür. En büyük göl Van Gölü\'dür.',
    },
];

// ===========================================
// MATCHING QUESTIONS
// ===========================================
export const matchingQuestions: MatchingQuestion[] = [
    {
        id: 'match-001',
        type: 'matching',
        category: 'cities',
        difficulty: 'easy',
        points: 80,
        instruction: 'Şehirleri ünlü oldukları ürünlerle eşleştirin:',
        pairs: [
            { left: 'Rize', right: 'Çay' },
            { left: 'Gaziantep', right: 'Baklava' },
            { left: 'Afyon', right: 'Mermer' },
            { left: 'Isparta', right: 'Gül' },
        ],
    },
    {
        id: 'match-002',
        type: 'matching',
        category: 'rivers',
        difficulty: 'medium',
        points: 80,
        instruction: 'Nehirleri döküldükleri denizlerle eşleştirin:',
        pairs: [
            { left: 'Kızılırmak', right: 'Karadeniz' },
            { left: 'Büyük Menderes', right: 'Ege Denizi' },
            { left: 'Seyhan', right: 'Akdeniz' },
            { left: 'Meriç', right: 'Ege Denizi' },
        ],
    },
    {
        id: 'match-003',
        type: 'matching',
        category: 'lakes',
        difficulty: 'medium',
        points: 80,
        instruction: 'Gölleri oluşum tiplerine göre eşleştirin:',
        pairs: [
            { left: 'Van Gölü', right: 'Volkanik Set' },
            { left: 'Abant Gölü', right: 'Heyelan Set' },
            { left: 'Nemrut Gölü', right: 'Krater Gölü' },
            { left: 'Köyceğiz Gölü', right: 'Lagün' },
        ],
    },
    {
        id: 'match-004',
        type: 'matching',
        category: 'cities',
        difficulty: 'hard',
        points: 80,
        instruction: 'Şehirleri UNESCO Dünya Mirası alanlarıyla eşleştirin:',
        pairs: [
            { left: 'İstanbul', right: 'Tarihi Yarımada' },
            { left: 'Denizli', right: 'Pamukkale' },
            { left: 'Çorum', right: 'Hattuşaş' },
            { left: 'Şanlıurfa', right: 'Göbeklitepe' },
        ],
    },
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
