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
Levha hareketleri sonucu tortul tabakaların esnekliği nedeniyle kıvrılarak yükselmesiyle oluşur. Karadeniz ve Akdeniz'deki sıradağlarımız bu tiptir (Kuzey Anadolu Dağları ve Toroslar).

### 2. Kırıklı Dağlar (Horst-Graben)
Sertleşmiş tabakaların kırılmasıyla oluşur. Ege Bölgesi'ndeki dağlarımızın çoğu bu şekilde oluşmuştur. Yükselen kısımlara **Horst**, çöken kısımlara **Graben** denir.

### 3. Volkanik Dağlar
Magmanın yeryüzüne çıkması veya yüzeye yakın yerlerde soğumasıyla oluşur. İç Anadolu ve Doğu Anadolu'da yaygındır.`,
                atlasLink: { layerId: 'mountains' },
                mnemonics: [
                    {
                        title: 'Ege Kırıklı Dağlar (KUZEYDEN GÜNEYE)',
                        text: 'KAZ - MADRA - YUNT - BOZDAĞLAR - AYDIN - MENTEŞE (Kod: KazMa Yunt Boz Aydın Menteşe)'
                    }
                ],
                warnings: [
                    'Menteşe Dağları Ege\'de olmasına rağmen kıyıya paralel uzanır!',
                    'Türkiye\'nin en yüksek zirvesi bir volkanik dağ olan Ağrı Dağı\'dır.'
                ]
            },
            {
                id: 'ovalar',
                title: 'Ovalar ve Deltalar',
                content: `Türkiye'nin ovaları oluşumlarına göre tektonik, karstik ve delta ovaları olarak ayrılır.

### Delta Ovaları
Akarsuların taşıdıkları alüvyonları denizin sığ olduğu kıyılarda biriktirmesiyle oluşur. Türkiye'nin en verimli tarım alanlarıdır.`,
                atlasLink: { layerId: 'plains', focus: 'plain-01' },
                mnemonics: [
                    {
                        title: 'Ege Delta Ovaları',
                        text: 'DİKLİ - MENEMEN - SELÇUK - BALAT (Bakırçay, Gediz, K. Menderes, B. Menderes)'
                    }
                ],
                warnings: [
                    'Delta oluşumu için kıyıda gel-git etkisinin az olması ve kıyının sığ olması şarttır.'
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
Yazlar sıcak ve kurak, kışlar ılık ve yağışlıdır. Karakteristik bitki örtüsü **Maki**'dir.

### 2. Karadeniz İklimi
Her mevsim yağışlıdır. Sıcaklık farkı azdır. Bitki örtüsü **Orman**'dır.

### 3. Karasal İklim
Yazlar sıcak ve kurak, kışlar soğuk ve kar yağışlıdır. Bitki örtüsü **Bozkır (Step)**'dır.`,
                atlasLink: { coords: { lat: 38.0, lng: 32.0, zoom: 6 } },
                mnemonics: [
                    {
                        title: 'Karadeniz Yağışı En Çok',
                        text: 'Sonbahar (S\'den hatırla - Karadeniz Sonbahar)'
                    }
                ]
            }
        ]
    }
];
