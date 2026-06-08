import { NoteUnit } from '@/types/notes';

export const unit07: NoteUnit = {
    id: 'unit-07',
    title: 'Türkiye\'nin Coğrafi Bölgeleri',
    icon: 'MapPin',
    sections: [
        {
            id: 'bolge-kavrami',
            slug: 'cografi-bolge-kavrami-ve-siniflandirma',
            title: '1. Coğrafi Bölge Kavramı ve 1941 Coğrafya Kongresi',
            content: `Türkiye 7 coğrafi bölgeye ayrılmıştır. Bu ayrım ilk kez **1941 yılında Ankara'da toplanan 1. Türkiye Coğrafya Kongresi**'nde yapılmıştır. Bölgeler sınırları kesin çizgilerle ayrılmamış, birbirinden birden fazla özelliğiyle (iklim, yer şekli, bitki örtüsü, ekonomi) belirgin biçimde farklılaşan coğrafi alanlardır.

## 7 Coğrafi Bölgenin Genel Özellikleri

### Büyükten Küçüğe Yüzölçümü Sıralaması
1. **Doğu Anadolu** (en büyük)
2. İç Anadolu
3. Karadeniz
4. Akdeniz
5. Ege
6. Güneydoğu Anadolu
7. **Marmara** (en küçük)

> [!TIP]
> Kodlama: **DAKAEG M** (Doğu, Akdeniz, Karadeniz, Ege, Güneydoğu, Marmara)

### Nüfus Yoğunluğu Sıralaması (En Kalabalıktan Seyrege)
1. **Marmara** (en yoğun)
2. Ege
3. Akdeniz
4. İç Anadolu
5. Karadeniz
6. Güneydoğu Anadolu
7. **Doğu Anadolu** (en seyrek)

### Önemli Karşılaştırmalar (ÖSYM Favorisi)
| Özellik | En fazla | En az |
|---------|----------|-------|
| Yüzölçümü | Doğu Anadolu | Marmara |
| Nüfus yoğunluğu | Marmara | Doğu Anadolu |
| Sanayi gelişmişliği | Marmara | Doğu Anadolu |
| Ortalama yükselti | Doğu Anadolu | Marmara |
| Tarım alanı oranı | İç Anadolu | Karadeniz |
| Orman alanı oranı | Karadeniz | İç Anadolu |
| Yıllık yağış | Karadeniz | Güneydoğu Anadolu |`,
            mnemonics: [
                {
                    title: 'Yüzölçümüne Göre Büyükten Küçüğe',
                    text: 'DAKAEGM: Doğu-Akdeniz-Karadeniz-Ege-Güneydoğu-Marmara'
                }
            ],
            keyPoints: [
                '1941 Coğrafya Kongresi: 7 bölge sistemi belirlendi.',
                'En büyük: Doğu Anadolu | En küçük: Marmara',
                'En kalabalık: Marmara | En seyrek: Doğu Anadolu',
                'En yüksek ortalama yükselti: Doğu Anadolu (2000m+)'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye'nin coğrafi bölgeleri yüzölçümü bakımından büyükten küçüğe doğru sıralandığında hangisi doğrudur?",
                    options: [
                        "Doğu Anadolu > İç Anadolu > Karadeniz > Akdeniz",
                        "İç Anadolu > Doğu Anadolu > Akdeniz > Karadeniz",
                        "Akdeniz > Doğu Anadolu > İç Anadolu > Karadeniz",
                        "Doğu Anadolu > Akdeniz > Karadeniz > İç Anadolu"
                    ],
                    correctOptionIndex: 0,
                    explanation: "Doğu Anadolu Türkiye'nin en büyük bölgesidir. Bunu İç Anadolu, Karadeniz ve Akdeniz takip eder."
                }
            ]
        },
        {
            id: 'marmara-bolgesi',
            slug: 'marmara-bolgesi',
            title: '2. Marmara Bölgesi',
            content: `Türkiye'nin kuzeybatısında yer alan, Türkiye'nin **en küçük, ama en gelişmiş, en kalabalık ve ekonomik açıdan en güçlü** bölgesidir.

## Alt Bölümler
Marmara Bölgesi 5 alt bölüme ayrılır:
1. **Çatalca-Kocaeli Bölümü:** İstanbul ve İzmit. Türkiye'nin sanayi kalbi. Nüfus yoğunluğu zirvesidir.
2. **Güney Marmara Bölümü:** Bursa, Balıkesir, Çanakkale. Zeytinlikler, şeftali, ipekböcekçiliği.
3. **Ergene Bölümü (Trakya):** Kırklareli, Tekirdağ, Edirne. Geniş düzlükler, ayçiçeği ve buğday tarımı.
4. **Yıldız Dağları Bölümü:** Kırklareli'nin kuzey ormanlık kesimi. Seyrek nüfuslu (ulaşım imkansızlığı).
5. **Güneydoğu Marmara Bölümü:** Bursa'nın güneyindeki alçak düzlükler.

## İklim
* **Karadeniz kıyısı:** Her mevsim yağışlı (Karadeniz iklimi).
* **İç kesimler (Trakya/Ergene):** Yazları sıcak-kurak, kışları soğuk (Karasal eğilimli geçiş iklimi).
* **Güney kıyılar:** Akdeniz iklimi etkisi (İznik, Gemlik Körfezi çevresi).
* **Marmara Denizi kıyıları:** Akdeniz ile Karadeniz ikliminin geçişidir — ılıman, dört mevsim yağışlı.

## Yer Şekilleri ve Özellikleri
* **Kuzey:** Istranca (Yıldız) Dağları — Türkiye'nin **en eski (1. jeolojik zamana ait masif)** yapısıdır. Düşük, yuvarlak tepeler.
* **Güney:** Uludağ (2543 m, İç Püskürük/Batolit dağ) — en yüksek nokta. Kayak merkezi ve Milli Park.
* **Trakya:** Ergene Havzası (Düzlük, Çöküntü Alanı), alçak ve geniş. Avrupa'daki tek düzlüğümüzdür.
* **Marmara Denizi:** Ria tipi kıyı. İstanbul Boğazı (Batı Karadeniz'i Marmara'ya bağlar), Çanakkale Boğazı (Marmara'yı Ege'ye bağlar).

## Tarım Ürünleri
* **Ergene (Trakya):** Ayçiçeği (1. sıra), buğday, arpa, şeker pancarı, pirinç.
* **Bursa ve Güney Marmara:** Şeftali, çilek, kiraz, zeytin, zeytinyağı, çeltik (pirinç — özellikle Biga Çayı havzası).
* **Umumi:** İpek böceği yetiştiriciliği (Bursa — Türkiye'de 1. sıra, kozacılık).

## Sanayi ve Ekonomi
Türkiye'nin en çok sanayi yatırımının yapıldığı bölgesidir.
* **Tekstil:** İstanbul, Bursa (Türkiye'de 1. sıra)
* **Otomotiv:** Bursa (FIAT, Bosch), Kocaeli (Ford, Toyota, İzmit)
* **Kimya - Petrokimya:** İzmit - Tüpraş (Türkiye'nin en büyük petrol rafinerisi)
* **Cam ve Seramik:** Kocaeli
* **Gıda:** İstanbul (un, bisküvi, çikolata)
* **Deri:** İstanbul (Kapapalıçarşı ve Kavacık)

## Nüfus ve Yerleşme
* Türkiye'nin **en yoğun nüfuslu bölgesidir.** İstanbul yaklaşık **15.7 milyon** nüfusuyla Türkiye nüfusunun yaklaşık **%18.3**'ünü barındırır.
* **En seyrek bölümü:** Yıldız Dağları (Kırklareli'nin kuzey ormanlık kesimi). Sebebi: Sapa kalması ve engebeli arazi.
* Türkiye'deki nüfus artışının büyük kısmı İstanbul'dan kaynaklanmaktadır (iç ve dış göç alımı).`,
            mnemonics: [
                {
                    title: 'Marmara Bölgesi Sanayi Özeti',
                    text: 'TOK KİGiD: Tekstil-Otomotiv-Kimya-Cam-Gıda-Deri'
                }
            ],
            warnings: [
                'Yıldız Dağları bölümünün seyrek nüfuslu olmasının sebebi kötü iklim DEĞIL, sapa kalması ve engebeli arazidir (üstelik iklimi oldukça uygun).',
                'Marmara bölgesi en küçük bölgedir ama en yoğun nüfusludur. Yüzölçümü ile nüfus yoğunluğunu karıştırma!'
            ],
            keyPoints: [
                'En küçük ama en kalabalık ve en sanayi gelişmiş bölge.',
                'Ayçiçeği: Trakya (Ergene)',
                'İpekböcekçiliği: Bursa (Türkiye 1.',
                'Uludağ: İç Püskürük (Batolit) dağ, kayak merkezi.',
                'Tüpraş İzmit: Türkiye\'nin en büyük petrol rafinerisi.'
            ],
            inlineQuizzes: [
                {
                    question: "Marmara Bölgesi'ndeki Yıldız (Istranca) Dağları'nın seyrek nüfuslu olmasının temel nedeni nedir?",
                    options: [
                        "Karasal iklim nedeniyle tarımın yapılamaması",
                        "Ana ulaşım güzergahlarına sapa kalması ve engebeli arazi",
                        "Sanayinin bu bölümde hiç gelişmemiş olması",
                        "Yıllık yağış miktarının çok düşük olması"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Yıldız Dağları iklim açısından uygun olmakla birlikte Türkiye'nin ana ulaşım güzergahlarına sapa kalmaktadır. Engebeli yapısı tarım ve sanayi kurulumunu güçleştirmiştir. Bu ÖSYM'nin favori soru kalıplarından biridir."
                }
            ]
        },
        {
            id: 'ege-bolgesi',
            slug: 'ege-bolgesi',
            title: '3. Ege Bölgesi',
            content: `Türkiye'nin batısında, Ege Denizi kıyısında uzanan, **tarım ürünleri ihracatında Türkiye'nin açık ara birincisi** olan bölgedir.

## Alt Bölümler
1. **Ege Bölümü (Asıl Ege):** İzmir ve çevresi. Türkiye'nin 3. büyük metropolünün merkezi.
2. **İç Batı Anadolu Bölümü:** Eskişehir, Afyon, Kütahya, Uşak. Platolar ve fabrikalar. Bor madeni.
3. **Yukarı Menderes Bölümü:** Denizli, Muğla. Pamuk, incir ve turizm (Bodrum, Marmaris).

## İklim
* **Kıyı:** Akdeniz iklimi (yazlar sıcak-kurak, kışlar ılık-yağışlı).
* **İç kesimler:** Karasallık artar, kışlar soğur. Eskişehir ve Afyon'da karasallık belirgindir.

## Yer Şekilleri (Horst-Graben Yapısı)
* Dağlar kıyıya **dik** uzanır (Enine kıyı tipi). Bu nedenle Ege kıyısı son derece girintili çıkıntılıdır (koy, körfez, ada bolluğu).
* **Horst (dağ) sırası kuzeyden güneye:** Kaz, Madra, Yunt, Bozdağlar, Aydın, Menteşe (Muğla) dağları.
* **Graben (çöküntü vadisi) aralarından akarsular:** Bakırçay, Gediz, Küçük Menderes, Büyük Menderes nehirleri.
* Dağların dik uzanması sayesinde deniz havası iç kesimlere kolayca girer → **Akdeniz iklim etkisi iç kesimlere kadar uzanır.**

## Tarım Ürünleri
Türkiye tarım ürünleri ihracatının büyük bölümü bu bölgeden karşılanır.
* **İncir:** Büyük Menderes Havzası, Aydın (Türkiye'de 1. ve Dünya 1. incir üreticisi)
* **Üzüm:** Manisa (sultani çekirdeksiz üzüm — Dünya ihracatında önemli pay), Denizli, İzmir
* **Zeytin ve Zeytinyağı:** Edremit Körfezi çevresi (Balıkesir - İzmir), Türkiye'de 2. sıra (1. Akdeniz)
* **Pamuk:** Büyük Menderes ve Gediz havzaları
* **Tütün:** Ege bölgesi Türkiye'nin en kaliteli tütününü üretir (İzmir tütünü dünyaca ünlü)
* **Haşhaş:** Afyon, Uşak, Denizli (kontrollü üretim, uyuşturucu hammaddesi değil ilaç sanayi)

## Sanayi
* **Tekstil:** Denizli (havlu, bornoz — dünyanın en büyük ihracatçılarından), İzmir, Uşak (deri)
* **Cam:** Kütahya (Şişecam tesisi), İzmir
* **Bor ve Kimya:** Eskişehir Kırka (Türkiye bor işleme), Kütahya Emet, Balıkesir
* **Petrol Rafinerisi:** İzmir Aliağa
* **Gıda-Konserve:** İzmir ve Gediz havzası

## Turizm
Türkiye'nin en önemli turizm bölgelerinden biri. Efes (Selçuk), Bodrum, Marmaris, Çeşme, Kuşadası, Pamukkale (Denizli).

> [!NOTE]
> Menteşe Yöresi (Muğla iç kesimleri) Ege'nin en seyrek nüfuslu bölümüdür. Kıyısı turistik ama içi sarp ve ulaşılmazdır.`,
            mnemonics: [
                {
                    title: 'Ege Graben Akarsular (Kuzeyden Güneye)',
                    text: 'BaGKüBü: Bakırçay-Gediz-Küçük Menderes-Büyük Menderes'
                },
                {
                    title: 'Ege Tarım Ürünleri',
                    text: 'İÜZPTH: İncir-Üzüm-Zeytin-Pamuk-Tütün-Haşhaş'
                }
            ],
            keyPoints: [
                'Tarım ihracatında Türkiye 1. bölgesi.',
                'İncir: Aydın (Türkiye ve Dünya 1.',
                'Dağlar kıyıya dik → Ege kıyısı çok girintili çıkıntılı.',
                'Menteşe Yöresi: Ege\'nin en seyrek nüfuslu bölümü (sarp arazi).'
            ],
            inlineQuizzes: [
                {
                    question: "Ege Bölgesi'nde dağların kıyıya dik uzanmasının doğrudan sonuçları arasında hangisi GÖSTERILEMEZ?",
                    options: [
                        "Kıyının çok girintili çıkıntılı olması",
                        "Deniz etkisinin iç kesimlere kadar uzanabilmesi",
                        "Kıyı ile iç kesimler arasındaki ulaşımın geçitlerle sağlanması",
                        "Çok sayıda doğal liman ve koyun oluşması"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Dağların kıyıya dik uzandığı Ege'de kıyı ile iç kesim arasında dağ duvarı yoktur, aksine vadiler (grabenler) boyunca ulaşım kolaydır. Geçitlerle ulaşım sorunu Karadeniz ve Akdeniz'de yaşanır, burada dağlar kıyıya paralel uzanır."
                }
            ]
        },
        {
            id: 'akdeniz-bolgesi',
            slug: 'akdeniz-bolgesi',
            title: '4. Akdeniz Bölgesi',
            content: `Türkiye'nin güneyinde, Akdeniz kıyısında uzanan bölge. **Turizm geliri, seracılık ve turunçgil üretiminde Türkiye'nin birincisi.**

## Alt Bölümler
1. **Antalya Bölümü:** Torosların güney etekleri ve Antalya körfezi. Turizm ve seracılığın merkezi.
2. **Adana (Çukurova) Bölümü:** Seyhan ve Ceyhan nehirlerinin delta ovası. Türkiye'nin en büyük ve verimli delta ovası.
3. **Kozan - Gavur Dağları Bölümü:** Torosların kuzey etekleri, Hatay. Geçiş niteliğinde.

## İklim
* **Tipik Akdeniz İklimi:** Yazlar sıcak ve kurak (Asor ve Basra basınçları), kışlar ılık ve yağışlı.
* Türkiye'nin kışın **en sıcak bölgesidir** (Antalya, Mersin).
* Torosların yüksek kesimleri: Dağ iklimi (Karlı uzun kışlar).
* Karstik Teke ve Taşeli Platoları: Yüksek, serin, sarp ve ıssız.

## Yer Şekilleri
* **Toroslar (Toros Dağları):** Kıyıya paralel, boyuna kıyı tipi oluşturur. Kıyı falezlidir, sarp ve diktir.
* **Çukurova (Adana):** Seyhan + Ceyhan nehirlerinin delta birikimiyle oluşmuş **Türkiye'nin en büyük delta ovası.** Son derece verimli.
* **Karstik Yapı:** Teke ve Taşeli platoları tamamen kireçtaşıdır. Mağara sistemi (Damlataş, Dim Mağarası), obruklar ve düdenler vardır.

## Tarım Ürünleri
* **Turunçgil (Portakal, Mandalina, Limon, Greyfurt):** Akdeniz kıyıları (Mersin, Antalya, Adana). Türkiye'de 1. sıra.
* **Muz:** Anamur ve Alanya (Türkiye'de 1. ve tek üretim yeri).
* **Pamuk:** Çukurova (Adana). Türkiye'de 1. sıra.
* **Susam:** Hatay ve Adana çevresi.
* **Zeytin ve Zeytinyağı:** Türkiye üretiminde Ege'den sonra 2. sıra.
* **Seracılık:** Antalya (Türkiye'de zirvede). Kış aylarında tüm Türkiye'nin domates, biber, salatalığı buradan çıkar.

## Sanayi
* **Pamuk-Tekstil:** Adana (Türkiye'de önemli tekstil merkezi)
* **Alüminyum:** İskenderun (çelik, metal)
* **Demir-Çelik:** İskenderun (Türkiye'nin en büyük entegre demir çelik tesisi — liman avantajı)
* **Gübre:** Mersin (fosfatlı gübre)
* **Petrol:** Mersin Ataş (depo/rafine)

## Turizm
Türkiye turizm gelirinin büyük kısmı bu bölgeden gelir.
* **Antalya:** Türkiye'nin en çok turist alan ili (2025'te ~16-17,5 milyon ziyaretçi ile rekor kırdı).
* **Olimpos, Kaş, Alanya, Side, Belek** gibi dünyaca tanınan tatil merkezleri.
* **Kültür turizmi:** Perge, Aspendos, Termessos, Xanthos antik kentleri.`,
            mnemonics: [
                {
                    title: 'Akdeniz Tarım Ürünleri',
                    text: 'TURMuPaSSe: Turunçgil-Muz-Pamuk-Susam-Seracılık'
                }
            ],
            warnings: [
                'Muz yalnızca Anamur ve Alanya\'da yetişir. Türkiye\'de başka hiçbir ilde muz üretimi yoktur.',
                'Pamuk üretiminde Çukurova (Adana) 1. sıradayken, GAP projesinin devreye girmesiyle Şanlıurfa ve Diyarbakır da büyük üretici olmuştur. Sınavda güncel verilere dikkat!'
            ],
            keyPoints: [
                'Türkiye\'nin en sıcak kışı: Akdeniz kıyıları (Antalya, Mersin).',
                'Muz sadece Anamur ve Alanya\'da yetişir.',
                'Çukurova: Türkiye\'nin en büyük delta ovası.',
                'Seracılık ve turizm gelirinde Türkiye 1. bölge.',
                'İskenderun Demir Çelik: Türkiye\'nin en büyük entegre çelik tesisi (liman avantajı).'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye'de muzu yalnızca Akdeniz bölgesinin belirli kesimlerinde yetişebilmesinin en temel coğrafi nedeni nedir?",
                    options: [
                        "Toprak yapısının özel olması",
                        "Kış aylarında don olayı yaşanmaması ve yıl boyu yüksek sıcaklık",
                        "Bölgenin denize yakınlığı",
                        "Yıllık yağış miktarının çok fazla olması"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Muz tropikal bir bitkidir. Yetişebilmesi için kış aylarında donun hiç yaşanmaması ve yıl boyu yüksek sıcaklıkların sürmesi gerekmektedir. Anamur ve Alanya, Torosların rüzgar önü (güneyinde) olduğu için don riskinden uzaktır."
                }
            ]
        },
        {
            id: 'ic-anadolu-bolgesi',
            slug: 'ic-anadolu-bolgesi',
            title: '5. İç Anadolu Bölgesi',
            content: `Türkiye'nin merkezinde yer alan, **Türkiye'nin tahıl ambarı ve başkentine ev sahipliği yapan** bölgedir.

## Alt Bölümler
1. **Konya Bölümü:** Konya Ovası (Türkiye'nin en büyük tektonik ovası), tahıl ve şeker pancarı.
2. **Yukarı Kızılırmak ve Yukarı Sakarya Bölümü:** Sivas, Kayseri, Yozgat, Çorum. Sanayi ve tarımın iç içe geçtiği kesim.
3. **Orta Kızılırmak Bölümü:** Ankara ve çevresi. Başkent.

## İklim
* **Step (Bozkır) İklimi:** Yazlar sıcak-kurak, kışlar soğuk ve karlı.
* Yıllık yağış 250-400 mm (Türkiye ortalamasının altında).
* En geniş nadas alanları bu bölgededir.
* **Tuz Gölü:** Kapalı havzada, buharlaşmanın fazla olması nedeniyle tuz birikmiştir. Türkiye'nin en tuzlu gölü, ikinci büyük gölüdür.

## Yer Şekilleri
* **Obruk Platosu:** Türkiye'de en çok obruk (karstik çöküntü) bulunan alan.
* **Erciyes Dağı (3917 m):** İç Anadolu'nun en yüksek noktası. Volkanik.
* **Hasan Dağı, Melendiz:** Diğer volkanik dağlar.
* **Kapadokya (Nevşehir):** Peri bacaları ve yeraltı şehirleri. Dünyaca ünlü turizm.
* **Konya Ovası:** Türkiye'nin en büyük tektonik (çöküntü) ovası.

## Tarım
* **Tahıl:** Türkiye'de buğday ve arpa üretiminde 1. bölgedir. Geniş düzlükler ve mekanizasyon kolaylığı.
* **Şeker pancarı:** Konya, Ankara, Çorum, Yozgat.
* **Nadas:** İç Anadolu'da yaygın. (Tarlayı dinlendirme — sulama yetersizliğine karşı önlem)
* **At yetiştiriciliği:** Türkiye'de 1. sıra (Karacabey Harası ve çevre).

## Sanayi ve Ekonomi
* **Ankara:** Türkiye'nin başkenti. Savunma sanayii, havacılık (TUSAŞ, Roketsan, Aselsan).
* **Kayseri:** Tekstil ve mobilya (Türkiye'de önemli merkez).
* **Konya:** Makine-imalat, gıda.
* **Eskişehir:** Havacılık (TUSAŞ Motor Sanayi), seramik, bor işleme, lokomotif.

## Nüfus
* Ortalama nüfus yoğunluğudur. İç bölgede seyrek, Ankara çevresinde yoğundur.
* **Kırdan kente göç:** Makineleşme ile tarımda insan gücüne gerek azaldığından, bölge dışına göç veriyor.`,
            mnemonics: [
                {
                    title: 'İç Anadolu\'nun Özeti',
                    text: 'TANK — Tahıl-Ankara-Nadas-Kapadokya'
                }
            ],
            keyPoints: [
                'Tahıl üretiminde Türkiye 1. bölgesi (buğday, arpa).',
                'Tuz Gölü: Türkiye\'nin en tuzlu gölü, kapalı havza.',
                'Erciyes: İç Anadolu\'nun en yüksek volkanik dağı (3917m).',
                'Kapadokya: Peri bacaları, yeraltı şehirleri, dünyaca ünlü turizm.',
                'Nadas uygulaması bölgede hala yaygındır.'
            ],
            inlineQuizzes: [
                {
                    question: "İç Anadolu Bölgesi'nde nadas uygulamasının yaygın olmasının temel nedeni nedir?",
                    options: [
                        "Sıcaklıkların çok düşük olması",
                        "Yıllık yağışın az ve sulama imkânlarının yetersiz olması",
                        "Toprak yapısının tarıma elverişsiz olması",
                        "Nüfusun seyrek olması nedeniyle işgücü yetersizliği"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Nadas; toprağı bir sezon boş bırakarak nem biriktirme yöntemidir. Sulama yoksa toprak kurur ve bir sonraki ekim için yetersiz nem kalır. İç Anadolu'daki yağış yetersizliği ve sulama altyapısının eksikliği nadas uygulamasının temel sebebidir."
                }
            ]
        },
        {
            id: 'karadeniz-bolgesi',
            slug: 'karadeniz-bolgesi',
            title: '6. Karadeniz Bölgesi',
            content: `Türkiye'nin kuzeyinde, Karadeniz kıyısı boyunca uzanan, **her mevsim yağış alan ve orman bakımından Türkiye'nin en zengin bölgesidir.**

## Alt Bölümler
1. **Batı Karadeniz Bölümü:** Zonguldak, Kastamonu, Bolu, Sakarya. Maden (taşkömürü) ve orman.
2. **Orta Karadeniz Bölümü:** Samsun, Sinop, Amasya, Tokat, Çorum. Tütün, fındık ve pirinç.
3. **Doğu Karadeniz Bölümü:** Trabzon, Rize, Artvin, Giresun, Ordu. Çay ve fındık.

## İklim
* **Her mevsim yağışlı** (Karadeniz iklimi). Kuzey rüzgarları Karadeniz üzerinden nem alarak dağlara çarpıp yağış bırakır.
* Türkiye'nin **en yüksek yağış alan yeri:** Rize-Ardeşen çevresi (yılda 2000-3000 mm).
* Türkiye'nin **en yüksek bağıl neme** sahip bölgesi.
* Kış: ılık (deniz etkisi), yazlar serin.

## Yer Şekilleri
* Kuzey Anadolu Dağları kıyıya **paralel** uzanır. Boyuna kıyı tipi. Falezler yaygın.
* Kıyı ile iç kesim arasında ulaşım **geçitlerle** sağlanır (Zigana, Kop, Ilgaz geçitleri).
* **Kaçkar Dağları:** Doğu Karadeniz'in ve tüm Karadeniz bölgesinin en yüksek noktası (3932 m, Kıvrımlı).
* **Giresun Dağları, Canik Dağları, Küre Dağları:** Bölgenin diğer önemli dağ sıraları.

## Tarım Ürünleri
* **Çay:** Rize (Türkiye'de tek üretim yeri). Dünya'nın en fazla çay tüketen ülkeleri arasındayız.
* **Fındık:** Ordu, Giresun, Trabzon, Samsun (Türkiye, dünya fındık üretiminin %70'ini karşılar — 1. sıra).
* **Mısır:** Samsun ve Orta Karadeniz (Türkiye'de 1. sıra).
* **Tütün:** Samsun (kaliteli tütün, dünyaca ünlü).
* **Kivi:** Ordu (Türkiye'de üretim başladı, gelişiyor).

## Orman Kaynakları
* Bölge bazında Türkiye'nin **en büyük orman alanına sahip bölgesidir** (~5,6 milyon hektar, ülke ormanlarının ~%24'ü — bol yağış sayesinde). *Dikkat: İl bazında en geniş orman alanı Karadeniz'de değil, Akdeniz Bölgesi'ndeki Antalya'dadır — bölge ile il sıralamasını karıştırma!*
* Kağıt-karton tesisleri: Giresun, Kastamonu, Zonguldak-Çaycuma.

## Sanayi
* **Taşkömürü:** Zonguldak (Türkiye'nin tek taşkömürü havzası, 1. jeolojik zaman).
* **Demir-Çelik:** Karabük ve Ereğli (enerji kaynağı olan taşkömürüne yakın).
* **Bakır:** Artvin Murgul ve Kastamonu Küre.
* **Çelik-Demir:** Trabzon Sarp.

## Nüfus ve Yerleşme
* Nüfus ağırlıklı olarak **dar kıyı şeridinde** toplanmıştır (**Çizgisel Yerleşme**).
* Dağlar çok sarp olduğundan iç kesimler ıssızdır.
* **Sinop:** İyi bir doğal limana sahip olmasına rağmen iç bağlantısı (hinterlandı) çok zayıf olduğu için kalkınamamıştır.
* **Traktör kullanılamaz:** Doğu Karadeniz dağlarında arazi çok sarp; çay tarımı elde yapılır.`,
            mnemonics: [
                {
                    title: 'Karadeniz Tarım Ürünleri',
                    text: 'ÇaFınMıTü: Çay-Fındık-Mısır-Tütün'
                }
            ],
            warnings: [
                'Çay Türkiye\'de SADECE Rize ve çevresinde üretilir. Başka ilde üretim yoktur.',
                'Karadeniz bölgesinde nüfus kıyı şeridinde yoğundur, iç kesimlerde çok seyrektir. "Tüm Karadeniz yoğun nüfusludur" yanılgısına düşme!'
            ],
            keyPoints: [
                'Her mevsim yağışlı tek bölge.',
                'En yüksek bağıl nem: Karadeniz.',
                'En yüksek yağış: Rize-Ardeşen (2000-3000mm/yıl).',
                'Fındık: Türkiye dünya üretiminin %70\'i.',
                'Çay: Yalnızca Rize.',
                'Taşkömürü: Yalnızca Zonguldak.'
            ],
            inlineQuizzes: [
                {
                    question: "Sinop, Türkiye'nin en iyi doğal limanlarından birine sahip olmasına rağmen neden gelişememiştir?",
                    options: [
                        "Karadeniz ikliminin balıkçılığa elverişsiz olması",
                        "Kuzey Anadolu Dağları nedeniyle iç kesimlere bağlantısının çok zayıf olması",
                        "Sanayi tesislerinin kurulmaması",
                        "Nüfusun az olması"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Bir limanın gelişmesi için geniş bir hinterlandına (arka bölgesine) ihtiyacı vardır. Sinop'un hemen gerisinde yüksek dağlar bulunmaktadır. Bu dağlar iç bölgelerle bağlantıyı engellediğinden liman geniş bir ticaret alanına hizmet edememektedir."
                }
            ]
        },
        {
            id: 'dogu-anadolu-bolgesi',
            slug: 'dogu-anadolu-bolgesi',
            title: '7. Doğu Anadolu Bölgesi',
            content: `Türkiye'nin doğusunda, **en büyük yüzölçümüne, en yüksek ortalama yükseltiye ve en seyrek nüfusa sahip olan bölgedir.**

## Alt Bölümler
1. **Yukarı Fırat Bölümü:** Elazığ, Malatya, Bingöl, Muş. Baraj gölleri (Keban, Karakaya, Atatürk).
2. **Erzurum-Kars Bölümü:** Erzurum, Kars, Ardahan. Yüksek lav platoları, büyükbaş hayvancılık.
3. **Yukarı Murat-Van Bölümü:** Ağrı, Van, Bitlis, Hakkari. Van Gölü, Ağrı Dağı.

## İklim
* Türkiye'nin **en soğuk bölgesidir** (her mevsim — hem kış hem yaz).
* Kışlar çok sert ve uzun (6-7 ay karla kaplı alanlar).
* Yazlar kısa ve serin.
* Karasallık en yüksek düzeydedir.
* **Erzurum:** Türkiye'nin kışın en soğuk, donma riski en yüksek ilidir (−40°C'ye kadar düşer).

## Yer Şekilleri
* **Ağrı Dağı (5137 m):** Türkiye'nin en yüksek noktası. Söndük volkanik dağ.
* **Van Gölü:** Türkiye'nin en büyük gölü. Kapalı havzada, tektonik + volkanik kökenli. Sodalı (soda gölü), tuzlu-sodalı yapısı nedeniyle balık cinsi çok azdır (inci kefali yaşar).
* **Erzurum-Kars Platosu:** Türkiye'nin en yüksek lav (volkanik) platolarıdır. Yazın devasa çayırlıklar oluşur.
* **Nemrut Kalderası (Bitlis):** Krater gölüdür (Devasa bir kaldera içinde göl).

## Tarım ve Hayvancılık
* **Büyükbaş Hayvancılık:** Türkiye'de 1. sıra. Erzurum-Kars platolarında yazın büyük sürüler otlatılır.
* **Şeker Pancarı:** Erzurum, Muş, Ağrı.
* **Elma:** Erzincan ve çevresi.
* **Buğday:** Erzurum platolarında sınırlı.
* **Arıcılık:** Hakkari (Türkiye'nin en kaliteli bal üretim bölgelerinden biri).

## Maden ve Enerji
* **Petrol:** Batman (Türkiye'nin ilk ve en büyük petrol sahasıdır. Van civarı da önemli).
* **Bakır:** Elazığ (Maden), Siirt (Madenköy).
* **Demir:** Malatya (Hekimhan).
* **Krom:** Elazığ (Guleman — dünyaca ünlü).
* **Barajlar:** Keban (Elazığ), Karakaya (Malatya), Ilısu (Mardin sınırı) — Dicle ve Fırat'ın büyük barajları.

## Nüfus
* Türkiye'nin **en seyrek nüfuslu** bölgesidir.
* Sebep: Sert iklim, engebeli arazi, az iş imkânı, göç verme.
* Bölge uzun yıllar Türkiye'nin en büyük göç veren bölgesi olmuştur.`,
            keyPoints: [
                'En büyük yüzölçümlü bölge.',
                'En soğuk ve en seyrek nüfuslu bölge.',
                'Ağrı Dağı: Türkiye\'nin en yüksek noktası (5137m).',
                'Van Gölü: Türkiye\'nin en büyük gölü (soda + tuz karışımı).',
                'Büyükbaş hayvancılık: Türkiye 1.',
                'Petrol: Batman.'
            ],
            inlineQuizzes: [
                {
                    question: "Van Gölü'nün Türkiye'deki diğer büyük göllerden en önemli farkı nedir?",
                    options: [
                        "Türkiye'nin en derin gölü olması",
                        "Sodalı-tuzlu yapısı ve kapalı havzada bulunması",
                        "Volkanik dağların arasında yer alması",
                        "Türkiye'nin tek krater gölü olması"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Van Gölü kapalı bir havzada yer aldığından dışarıya akışı yoktur. Milyonlarca yılda biriken soda ve tuz nedeniyle sodalı-tuzlu bir göldür. Bu yapısı nedeniyle içilemez ve balık türü çok azdır (sadece inci kefali yaşayabilir)."
                }
            ]
        },
        {
            id: 'guneydogu-anadolu-bolgesi',
            slug: 'guneydogu-anadolu-bolgesi',
            title: '8. Güneydoğu Anadolu Bölgesi',
            content: `Türkiye'nin güneyinde, Suriye ve Irak sınırı boyunca uzanan **en az yağış alan, en sıcak yazları yaşayan ve GAP projesiyle tarımı devrimleşen** bölge.

## Alt Bölümler
1. **Orta Fırat Bölümü:** Gaziantep, Adıyaman, Kilis. Antepfıstığı, bağcılık.
2. **Dicle Bölümü:** Diyarbakır, Mardin, Batman, Şırnak. Petrol, pirinç.
3. **Şanlıurfa-Mardin Bölümü:** GAP kapsamındaki pamuk ve sanayi bölgesi.

## İklim
* Türkiye'de en az yağış alan bölgedir (yıllık 250-300 mm).
* **En sıcak yaz:** GDA (Şanlıurfa'da 48-50°C ölçülmüştür). Samyeli/Keşişleme rüzgarları bölgeyi kavurur.
* Kışlar ılık ve kısa.

## Yer Şekilleri
* Genel olarak **plato ve düzlüklerden** oluşur. Türkiye'nin en düz bölgesidir.
* **Karacadağ:** Tek volkanik yapı. Kalkan volkan türündedir (yayılan, yüksekliği az, genişliği çok lav platosu).
* **Gaziantep Platosu, Şanlıurfa Platosu:** Kireçtaşı tabanlı, geniş ve düz yaylar.
* **Dicle ve Fırat Nehirleri** bölgeyi sulayan iki büyük nehir. GAP barajlarıyla düzensiz rejimleri kontrol altına alındı.

## GAP — Güneydoğu Anadolu Projesi
Türkiye'nin en büyük kalkınma projesidir. Dicle ve Fırat nehirleri üzerinde kurulan baraj ve sulama sistemleri bölgeyi tarım cenneti haline getirdi.
* **Atatürk Barajı (Şanlıurfa):** Türkiye'nin elektrik üretim kapasitesi en büyük barajıdır.
* **Şanlıurfa Tünelleri:** Atatürk Barajı suyunu Harran Ovasına taşıyan dev tünel sistemi.
* GAP ile sulama alanı genişleyince pamuk, mısır, pirinç, soya, sebze üretimi patlamıştır.

## Tarım Ürünleri
* **Antepfıstığı:** Gaziantep (Türkiye ve Dünya 1. sırası). Kurak ve sıcak iklime uygun.
* **Pamuk:** GAP sonrası Şanlıurfa (Türkiye'de Çukurova'nın yanı sıra en büyük pamuk üreticisi).
* **Pirinç (Çeltik):** Diyarbakır çevresi.
* **Üzüm (Bağcılık):** Gaziantep, Mardin.

## Maden
* **Petrol:** Batman ve Raman Dağı (Türkiye üretiminin önemli kısmı).
* **Fosfat:** Mardin (Mazıdağı).
* **Demir:** Güneydoğu platolarında sınırlı.

## Nüfus
* Kırsal nüfus oranı yüksek, kentleşme nispeten düşüktür.
* **Şanlıurfa:** Türkiye'nin medyan yaşı en genç ilidir (doğum oranı en yüksek).
* GAP projesinin hayata geçmesiyle göç eğilimi azalmıştır.`,
            mnemonics: [
                {
                    title: 'GDA Tarım ve Özellikler',
                    text: 'GAP-AntPam: GAP + Antepfıstığı + Pamuk = GDA özeti'
                }
            ],
            warnings: [
                'Türkiye\'nin en az yağış alan bölgesi GDA\'dır ancak en kurak bölge sorusunda iklim tipi değil yağış miktarına bakılır.',
                'Karacadağ volkanı Doğu Anadolu\'da değil GDA\'dadır! (Diyarbakır-Şanlıurfa sınırı)'
            ],
            keyPoints: [
                'Türkiye\'nin en az yağış alan bölgesi.',
                'Türkiye\'nin en sıcak yazları (Şanlıurfa).',
                'GAP: Türkiye\'nin en büyük kalkınma projesi.',
                'Atatürk Barajı: Türkiye\'nin en büyük HES kapasiteli barajı.',
                'Antepfıstığı: Türkiye ve Dünya 1.',
                'Karacadağ: Kalkan volkan (tek örnek Türkiye\'de).'
            ],
            inlineQuizzes: [
                {
                    question: "GAP (Güneydoğu Anadolu Projesi) kapsamındaki sulama çalışmalarının bölgede tarıma en önemli katkısı hangisidir?",
                    options: [
                        "Tarım arazilerini genişletmesi",
                        "İklim değişikliğini önlemesi",
                        "Sulama imkânı sağlayarak iklime bağımlılığı ortadan kaldırması ve çift ürün alınmasını sağlaması",
                        "Traktör kullanımını kolaylaştırması"
                    ],
                    correctOptionIndex: 2,
                    explanation: "GAP öncesinde GDA'da yağış yetersizliği nedeniyle tarım çok verimsizdi ve nadas uygulanıyordu. Baraj sulamasıyla birlikte çiftçiler artık iklime bağlı kalmadan yılda 2-3 ürün alabilmektedir. Pamuk, mısır gibi yüksek değerli sanayi bitkileri üretimi patlama yapmıştır."
                }
            ]
        }
    ]
};
