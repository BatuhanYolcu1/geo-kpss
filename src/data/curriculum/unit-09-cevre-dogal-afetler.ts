import { NoteUnit } from '@/types/notes';

export const unit09: NoteUnit = {
    id: 'unit-09',
    title: 'Çevre Sorunları ve Doğal Afetler',
    icon: 'AlertTriangle',
    sections: [
        {
            id: 'dogal-afetler',
            slug: 'turkiyede-dogal-afetler',
            title: '1. Türkiye\'de Doğal Afetler',
            content: `Türkiye'nin genç jeolojik yapısı, dağlık ve eğimli arazisi ile düzensiz yağış rejimi ülkeyi doğal afetlere son derece yatkın kılar. ÖSYM'de deprem her yıl sorulmakla birlikte **sel, heyelan ve kuraklık** da sınav kapsamındadır.

## 1. Depremler

Türkiye dünyanın en aktif deprem bölgelerinden birinin üzerindedir. Neden?
* Genç jeolojik yapı (3. zaman sonrası — Alp-Himalaya kıvrım kuşağı)
* Aktif fay hatları: **KAF (Kuzey Anadolu Fayı), DAF (Doğu Anadolu Fayı), BAF (Batı Anadolu Fay Sistemi)**

### Deprem Risk Haritası (ÖSYM Sorar)
**Yüksek Riskli İller:**
* İstanbul, Kocaeli, Sakarya, Düzce (KAF'ın geçtiği hat)
* Erzincan, Tokat, Amasya, Çankırı (KAF)
* Hatay, Kahramanmaraş, Malatya, Elazığ (DAF — 2023 depremi!)
* İzmir, Aydın, Denizli, Muğla (BAF)

**Düşük Riskli (Nispeten Güvenli) İller:**
* Konya, Karaman, Kırıkkale çevresi (sağlam masif)
* Mardin eşiği (eski sert yapı)
* Sinop ve çevresi (Yıldız Dağları masifi)
* Trakya'nın batısı (Ergene havzası)

### 2023 Kahramanmaraş Depremleri
6 Şubat 2023'te DAF üzerinde meydana gelen 7.7 ve 7.6 büyüklüğündeki depremler. Kahramanmaraş, Hatay, Adıyaman, Malatya, Gaziantep, Şanlıurfa, Diyarbakır, Adana, Osmaniye ve Kilis illerini etkiledi. 50.000'den fazla can kaybına yol açtı.

## 2. Heyelan (Toprak Kayması)

Yağmur veya kar erimesiyle suya doymuş toprağın eğimli yamaçlardan kaymasıdır.
* **En çok görüldüğü yer:** Doğu Karadeniz Bölgesi (yüksek yağış + dik yamaçlar).
* Özellikle Rize, Artvin, Giresun, Trabzon illerinde çok yaygın ve can kayıplarına yol açar.
* **Diğer alanlar:** Doğu Anadolu'nun yüksek dağlık kesimleri.

**Heyelan Koşulları:**
1. Eğimli arazi
2. Killi/kaygan zemin
3. Bol yağış (ani veya uzun süreli)
4. Bitki örtüsünün tahrip edilmesi

## 3. Sel ve Taşkın

Kısa sürede çok yağış düşmesi veya karın hızla erimesiyle oluşur.
* **En riskli bölgeler:** Karadeniz kıyıları, Akdeniz kıyıları, İç Anadolu dereleri.
* Delta ovaları (Çukurova, Bafra) tarihsel olarak taşkın yaşayan alçak alanlardır.
* **Sel önlemi:** Baraj inşaatı, taşkın yatakları ve ıslah çalışmaları.
* **Son yıllarda artan kentsel sel:** Asfaltsız alana izin verilmesi nedeniyle şehirlerde yağmur suyu hızla birikiyor (İstanbul, Ankara sel haberleri).

## 4. Kuraklık

Uzun süreli yağış eksikliğiyle tarım ve içme suyunda ciddi sıkıntı yaşanan doğal afetin güncel versiyonu.
* **En riskli bölge:** GDA ve İç Anadolu (yapısal kuraklık).
* İklim değişikliğiyle tüm Türkiye'de kuraklık riski artıyor.
* **2020-2022 kuraklık krizi:** İstanbul baraj dolulukları %10-15'e indi, içme suyu kısıtlamaları yaşandı.
* **Çözüm:** Su tasarrufu, barajlar, sulama modernizasyonu, yağmur suyu hasadı.

## 5. Çığ

Özellikle Doğu Anadolu ve Doğu Karadeniz'in yüksek dağlık kesimlerinde kar kütlelerinin aniden kaymasıyla oluşur.
* Van, Hakkari, Muş, Bitlis, Ağrı illerinde şiddetli çığ olayları yaşanmıştır.
* Kış mevsiminde yolları kapatan ve köyleri tehdit eden önemli bir afettir.`,
            warnings: [
                'Heyelan ≠ Deprem. Heyelan toprak kaymasıdır. Doğu Karadeniz heyelan merkezi, Doğu Anadolu deprem merkezi.',
                '2023 depremi DAF (Doğu Anadolu Fayı) üzerinde olmuştur. KAF ile karıştırılmamalı.'
            ],
            keyPoints: [
                'Türkiye\'de en çok can alan afet: Deprem.',
                'En çok heyelan: Doğu Karadeniz (Rize, Artvin).',
                'En çok sel riski: Karadeniz + Akdeniz kıyıları.',
                'En çok çığ: Van, Hakkari, Muş, Ağrı.',
                '2023 Kahramanmaraş depremi: DAF, 7.7+7.6 büyüklük.'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye'de heyelanların en sık yaşandığı bölge ve temel nedeni aşağıdakilerin hangisinde doğru verilmiştir?",
                    options: [
                        "İç Anadolu — Yoğun yağış ve düz arazi",
                        "Doğu Karadeniz — Yüksek yağış ve dik yamaçlar",
                        "Güneydoğu Anadolu — Kurak iklim ve erozyon",
                        "Ege Bölgesi — Deprem aktivitesi"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Heyelan için eğimli arazi ve yüksek nem/yağış şarttır. Doğu Karadeniz; dünyanın en yüksek yağış alan bölgelerinden biri olmakla birlikte son derece dik ve sarp yamaçlara sahiptir. Bu kombinasyon yoğun heyelanlara zemin hazırlar."
                }
            ]
        },
        {
            id: 'cevre-sorunlari',
            slug: 'turkiyenin-cevre-sorunlari',
            title: '2. Türkiye\'nin Çevre Sorunları',
            content: `Türkiye sanayileşme, hızlı kentleşme ve nüfus artışıyla birlikte ciddi çevre sorunlarıyla yüzleşmektedir.

## 1. Erozyon (Toprak Kaybı)

**Türkiye'nin 1 numaralı çevre sorunudur.**
* Türkiye topraklarının yaklaşık **%75'inde** erozyon riski vardır.
* Her yıl milyonlarca ton verimli toprak akarsularla denize taşınır.

**Erozyon Nedenleri:**
1. Bitki örtüsünün tahrip edilmesi (orman yangınları, aşırı otlatma, tarım)
2. Eğimli arazilerde düzensiz tarım (yokuşta tarlayı dik sürmek)
3. Nadas uygulaması (toprak çıplak kalır, yağmurda akar)
4. Yağmur sularının kontrolsüz akması

**En Çok Etkilenen Bölgeler:**
* İç Anadolu (tahıl tarımı + nadas + zayıf bitki)
* Güneydoğu Anadolu
* Doğu Anadolu (dağlık + otlatma baskısı)

**Çözüm Yöntemleri:**
* Ağaçlandırma (TEMA Vakfı, orman köylüleri)
* Rüzgâr kırıcı ağaç şeritleri
* Teraslama (eğimli tarlayı basamaklandırma)
* Nöbetleşe ekim (nadası kaldırma)
* Çayır ve mera ıslahı

## 2. Orman Yangınları

Türkiye orman alanlarının büyük kısmı güney ve batı kıyılarındadır. Bu kıyılar yaz kuraklığı (Akdeniz iklimi) nedeniyle yangına son derece elverişlidir.
* **En riskli bölge:** Akdeniz (Antalya, Mersin, Muğla) ve Ege kıyıları.
* 2021 yılında Manavgat, Bodrum, Milas çevresinde tarihin en büyük orman yangınları yaşandı.
* İklim değişikliğiyle yaz sıcaklıkları artıyor → yangın riski artıyor.

## 3. Hava Kirliliği

* **Büyük şehirler:** İstanbul, Ankara, İzmir, Kocaeli endüstriyel emisyon ve araç yoğunluğundan ciddi hava kirliliği yaşar.
* Kış aylarında: Isınmada kömür ve odun yakımı (özellikle küçük şehirlerde).
* **Çözüm:** Doğalgaz ve yenilenebilir enerjiye geçiş, araç filtresi zorunluluğu.

## 4. Su Kirliliği

* Sanayi tesislerinin arıtma yapmadan atığı nehirlere ve göllere bırakması.
* Tarım ilaçları ve kimyasal gübreler yer altı sularını kirletiyor.
* Tehdit altındaki ekosistemler: Tuz Gölü (küçülüyor), Burdur Gölü (kuruma tehlikesi), İznik Gölü.

## 5. Çölleşme ve Arazi Degradasyonu

* Türkiye'nin güney ve iç bölgeleri iklim değişikliğinin de etkisiyle çölleşme riskiyle yüzleşmektedir.
* Tuz Gölü kıyılarının tuzlu çorak sahalara dönüşmesi buna bir örnek.
* GDA'da sulama tuzlanması ciddi sorun.

## 6. Biyoçeşitlilik Kaybı

* Türkiye 3 farklı bitki coğrafyasının (Avrupa-Sibirya, İran-Turan, Akdeniz) kesişme noktasındadır. Bu nedenle biyoçeşitlilik son derece yüksektir.
* Ancak habitat kaybı, tarım kimyasalları ve aşırı avcılık nedeniyle biyoçeşitlilik tehdit altındadır.
* **Endemik türler** (dünyada yalnızca Türkiye'de yaşayan) en büyük kaybı yaşıyor.

## İklim Değişikliği ve Türkiye

Türkiye 2021'de Paris İklim Anlaşması'nı onaylamıştır.
* Türkiye 2053 yılı için **net sıfır karbon** hedefi belirlemiştir.
* Yenilenebilir enerji yatırımları hız kazanmaktadır.
* Ortalama sıcaklık artışı Türkiye'de küresel ortalamanın üzerinde seyretmektedir.`,
            keyPoints: [
                'Türkiye\'nin 1 numaralı çevre sorunu: Erozyon.',
                'Türkiye topraklarının %75\'inde erozyon riski.',
                'En büyük orman yangını riski: Akdeniz + Ege kıyıları (kuru yaz).',
                'Tuz Gölü ve Burdur Gölü kuruma tehdidi altında.',
                'Türkiye 2053 net sıfır karbon hedefi belirledi.'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye'de erozyonun en yaygın ve şiddetli olduğu bölgeler ve temel nedenleri birlikte düşünüldüğünde hangi seçenek doğrudur?",
                    options: [
                        "Karadeniz Bölgesi — yüksek yağış",
                        "İç Anadolu ve GDA — zayıf bitki örtüsü, düzensiz yağış ve nadas uygulaması",
                        "Akdeniz Bölgesi — orman yangınları",
                        "Marmara Bölgesi — yoğun kentleşme"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Erozyon için bitki örtüsünün zayıf olması, eğimli arazi ve düzensiz-şiddetli yağış gerekir. İç Anadolu ve GDA'da bitki örtüsü seyrek, yağış düzensizdir ve tarlalar nadas nedeniyle uzun süre çıplak bırakılır. Bu koşullar Türkiye'nin en şiddetli erozyon alanlarını bu bölgelerde oluşturur."
                }
            ]
        },
        {
            id: 'guncel-cevre-gundem',
            slug: 'guncel-cevre-konulari-ve-kpss',
            title: '3. KPSS\'de Çıkan Güncel Çevre Konuları',
            content: `Son yıllarda KPSS sınavlarında çevre ve sürdürülebilirlikle ilgili güncel sorular artmaktadır.

## Yenilenebilir Enerji ve Türkiye

### Rüzgar Enerjisi
* Türkiye rüzgar enerjisinde hızla büyümektedir.
* En fazla rüzgar gücü potansiyeli: **Ege ve Marmara kıyıları** (Çanakkale, İzmir, Balıkesir).
* İkinci sıra: Akdeniz kıyıları ve Doğu Anadolu platoları (Erzurum-Kars).

### Güneş Enerjisi
* En fazla güneşlenme: **Güneydoğu Anadolu ve Akdeniz Bölgesi** (Şanlıurfa, Konya, Antalya).
* GDA: yılda 3000 saatin üzerinde güneşlenme.
* Türkiye güneş enerjisi kapasitesinde hızla büyümektedir.

### Jeotermal Enerji
* Türkiye jeotermal enerji kapasitesinde **Dünya 4.-5. sırasındadır** (çok önemli ÖSYM sorusu!).
* En fazla jeotermal kaynak: **Ege Bölgesi** (BAF — Batı Anadolu Fay Sistemi'nin horst-graben sistemleri, Afyon, Kütahya, Denizli-Pamukkale, İzmir).
* Pamukkale (Denizli) jeotermal kaynakların en ünlü göstergesidir.
* Elektrik üretimi + kaplıca turizmi + sera ısıtması için kullanılır.

### Hidroelektrik Enerji
* Türkiye HES kapasitesinde Avrupa'da ilk 3'tedir.
* Toplam kurulu HES kapasitesi 30.000 MW'ı aşmaktadır.
* GAP barajları bu kapasiteye büyük katkı sağlar.

### Nükleer Enerji — Akkuyu
* Türkiye'nin **ilk nükleer santrali**: Akkuyu (Mersin/Gülnar).
* Rusya ile ortak (Rosatom) inşaat.
* 2023'te ilk yakıt yüklendi, 2025 itibarıyla kısmen faaliyete geçmesi beklenmektedir.
* 4 reaktör, toplam 4800 MW kapasite.
* **KPSS Sorusu:** "Türkiye'nin ilk nükleer santrali hangi ilde?" → Mersin

## Çevre Mevzuatı ve Uluslararası Anlaşmalar

| Anlaşma | Konu | Türkiye |
|---------|------|---------|
| **Paris Anlaşması** | İklim değişikliği (CO₂ azaltımı) | 2021'de onayladı |
| **Kyoto Protokolü** | Sera gazı azaltımı | İmzaladı |
| **Ramsar Sözleşmesi** | Sulak alanların korunması | Imzaladı |
| **Biyolojik Çeşitlilik** | Türlerin korunması | Taraf |

## Korunan Alanlar

* **Milli Parklar:** Türkiye'de 40+ milli park vardır. KPSS'de sorulan: Göreme (Kapadokya), Olimpos-Beydağları, Kaçkar Dağları, Köprülü Kanyon.
* **Ramsar Alanları (Sulak Alanlar):** Sultan Sazlığı (Kayseri), Manyas Kuş Gölü (Balıkesir), Gediz Deltası (İzmir), Göksu Deltası (Mersin).
* **UNESCO Doğal Miras:** Pamukkale-Hierapolis, Kapadokya (karma doğal-kültürel).`,
            keyPoints: [
                'En fazla güneş: GDA + Akdeniz (Şanlıurfa, Antalya).',
                'En fazla rüzgar: Ege + Marmara kıyıları.',
                'Jeotermal kapasitede Dünya 4.-5. sırası.',
                'Akkuyu: Türkiye\'nin ilk nükleer santrali (Mersin).',
                'Paris Anlaşması: Türkiye 2021\'de onayladı.'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye'nin jeotermal enerji kaynakları en yoğun biçimde hangi bölgede toplanmaktadır ve bunun temel jeolojik sebebi nedir?",
                    options: [
                        "Doğu Anadolu — Volkanik dağların yoğunluğu",
                        "Ege Bölgesi — Batı Anadolu Fay Sistemi'ndeki aktif kırık hatları",
                        "İç Anadolu — Sıcak kara iklimi",
                        "Karadeniz Bölgesi — Sık yağış ve yer altı suları"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Jeotermal kaynaklar, magmanın yeryüzüne yakın olduğu aktif fay bölgelerinde oluşur. Ege Bölgesi'ndeki Batı Anadolu Fay Sistemi (BAF) çok sayıda aktif kırık hattı içerir. Bu hatlar boyunca yerin derinliklerindeki ısı sıcak su kaynaklarını yüzeye taşır. Afyon, Kütahya, Denizli (Pamukkale) bu kaynakların en yoğun olduğu alanlardır."
                }
            ]
        }
    ]
};
