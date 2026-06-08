import { NoteUnit } from '@/types/notes';

export const unit01: NoteUnit = {
    id: 'unit-01',
    title: 'Türkiye\'nin Yer Şekilleri',
    icon: 'Mountain',
    sections: [
        {
            id: 'jeolojik-gecmis',
            slug: 'turkiyenin-jeolojik-gecmisi',
            title: '1. Jeolojik Geçmiş ve Tektonizma',
            content: `Dünya var olduğundan bu yana çeşitli jeolojik zamanlardan geçmiştir. Türkiye'nin bugünkü engebeli ve yüksek arazisi ağırlıklı olarak yakın jeolojik zamanlarda (3. ve 4. zaman) şekillenmiştir. Türkiye'yi "**Genç Oluşumlu**" bir ülke olarak tanımlıyoruz.

## Jeolojik Zamanlar ve Türkiye'de Yaşananlar

### I. Jeolojik Zaman (Paleozoik - Birinci Zaman)
* En eski araziler olan **Masif Araziler** (Sert, deprem riski düşük, yaşlı yapılar) bu dönemde tortulanmıştır. 
    * *Önemli Masifler:* Yıldız (Istranca) Dağları masifi, Zonguldak, Kırşehir, Menteşe (Muğla), Anamur (Antalya), Bitlis ve Mardin (Derik) masifleri.
* **Taşkömürü** yatakları (Zonguldak vadisi) bu dönemde oluşmuştur. Gür eğrelti otu ormanlarının sular altında kalıp karbonlaşmasıyla meydana gelmiştir. Yüksek kalorilidir.

### II. Jeolojik Zaman (Mezozoik - İkinci Zaman)
* Türkiye arazisinin çok büyük bir kısmı **Tethys (Tetis) Denizi** adı verilen devasa bir denizin tabanındaydı.
* Çevredeki aşınan tortullar bu denizin dibinde milyonlarca yıl birikerek (tortulanma / sedimentasyon) bugünkü dağlarımızın temel malzemesini oluşturmuştur. Hazırlık aşamasıdır.

### III. Jeolojik Zaman (Tersiyer - Üçüncü Zaman)
Türkiye'nin ana şeklini aldığı *en önemli* dönemdir.
* **Alp-Himalaya Kıvrım Sistemi** oluşmuştur. Bu kıvrılma hareketiyle Kuzey Anadolu Dağları ve Güneydeki Toros Dağları su yüzüne çıkmıştır (Orojenez).
* Gür bitki örtüleri toprak altında kalarak çok geniş alana yayılmış **Linyit Kömürü** yataklarını oluşturmuştur.
* **Petrol, Tuz ve Bor** madeni yatakları da yine bu dönemde oluşmuştur.
* Şiddetli **Volkanik patlamalar** başlamıştır (Özellikle İç ve Doğu Anadolu'da).
* Türkiye ana hatlarıyla bir "kara parçası" halini almaya başlamıştır.

### IV. Jeolojik Zaman (Kuvaterner - Dördüncü Zaman)
* Hayvanların ve ilk insanların ortaya çıktığı en yakın zamandır. 
* İklimde büyük buzul çağları ve ısınmalar (Buzul arası) yaşanmıştır.
* **Egeid Karası**, fay hatlarıyla parçalanarak çökmüş ve Akdeniz'in suları buraya dolarak **Ege Denizi**'ni oluşturmuştur.
* Egeid çökmesi esnasında İstanbul ve Çanakkale boğazlarının olduğu eski nehir vadileri deniz suyuyla dolmuş, **Boğazlar, Marmara Denizi ve Karadeniz (eskiden bir göldü)** meydana gelmiştir.
* **Anadolu Toptan Yükseldi (Epirojenez):** Deniz seviyesinde düzleşmiş (Peneplen) olan Anadolu karası, milyonlarca yıl süren bir hareketle toptan yükselmiştir. *İç bölgelerimizde 1000-1500 metrelerde düzlüklerin (platoların) olmasının tek sebebi bu toptan yükselmedir.*

## Tektonizma ve Deprem Bölgeleri
Genç oluşumlu olduğumuz için çok hareketli ve kırıklı bir kabuğumuz vardır. Türkiye içinden 3 devasa fay hattı geçer.
1. **KAF (Kuzey Anadolu Fay Hattı):** En yıkıcı olandır. Çanakkale (Saros) Körfezi'nden başlayıp Marmara Denizi'nin altından geçer. Adapazarı, Düzce, Bolu, Çankırı, Amasya, Tokat, Erzincan üzerinden Van Gölünün kuzeyine kadar yay şeklinde uzanır.
2. **DAF (Doğu Anadolu Fay Hattı):** Afrika'dan (Kızıldeniz'den) gelir. Hatay (Amik), Kahramanmaraş, Malatya, Elazığ, Bingöl üzerinden Muş civarında KAF ile birleşir.
3. **BAF (Batı Anadolu Fay Hattı):** Ege Bölgesi boydan boya çökmüş ve kırılmıştır. Sık ama şiddeti biraz daha düşük depremler üretir. Horst ve grabenleri keser kaplıca (jeotermal) alanlarının sebebidir.

> [!TIP]
> **Deprem Riskli DÜŞÜK Olan Yerler:** Konya-Karaman arası, Mardin eşiği, Tuz Gölü'nün güneyi, Doğu Karadeniz kıyı şeridi (Rize, Trabzon), Yıldız Dağları, Sinop çevresi ve Ergene Havzası. Buralar sağlam (çoğu masif) yapılardır.`,
            atlasLink: { coords: { lat: 39.0, lng: 35.0, zoom: 6 } },
            mnemonics: [
                {
                    title: 'Masif Araziler (Eski Katı Kütleler)',
                    text: 'KıZıM Bi Tık Daha Sağlam (Kırşehir, Zonguldak, Menteşe, Bitlis, Taşeli, Daday-Devrekani, Saruhan-Yıldız)'
                }
            ],
            warnings: [
                'Dikkat: Linyit, Petrol, Bor, Tuz 3. zamanda oluşmuştur ancak Taşkömürü 1. zaman oluşumudur. Bu nedenle Zonguldak çevresinde hem 1. zamana (Taşkömürü) hem de 3. ve 4. zamana ait arazilere rastlanır.'
            ],
            keyPoints: [
                '1. Zaman: Masifler ve Taşkömürü.',
                '3. Zaman: Toroslar-Kuzey Anadolu dağları, Linyit, Bor, Petrol, Tuz.',
                '4. Zaman: Ege Denizi, Boğazlar, Toptan yükselme.'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye arazisinin bugünkü ana şeklini aldığı, yüksek ve engebeli dağ sıralarının oluştuğu jeolojik dönem ve kıvrım sistemi aşağıdakilerden hangisidir?",
                    options: [
                        "1. Zaman (Paleozoik) - Hersinyen Kıvrımları",
                        "2. Zaman (Mezozoik) - Kaledoniyen Kıvrımları",
                        "3. Zaman (Tersiyer) - Alp-Himalaya Kıvrımları",
                        "4. Zaman (Kuvaterner) - Egeid Kırıkları"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Türkiye arazisi büyük oranda 3. jeolojik zamanda (Tersiyer) meydana gelen Alp-Himalaya kıvrım hareketleriyle şekillenmiş, Toroslar ve Kuzey Anadolu Dağları bu dönemde ortaya çıkmıştır."
                }
            ]
        },
        {
            id: 'daglar-olusum',
            slug: 'turkiyenin-daglari',
            title: '2. Dağlar ve Oluşum Şekilleri',
            content: `Türkiye dağları oluşum özelliklerine göre üçe ayrılır: **Kıvrımlı Dağlar**, **Kırıklı Dağlar** ve **Volkanik Dağlar**. Orojenez kelimesi dağ oluşumu demektir.

## 1. Kıvrımlı Dağlar (Orojenez)
Tethys denizi tabanında biriken esnek kireçtaşı ve kumtaşlarının yan basınçlarla itilmesi sonucu **kıvrılması** ile oluşurlar.
* Yukarı doğru bükülen, kubbeleşen tepe kısımlara **Antiklinal** denir. (Dağ zirveleri)
* Aşağıya doğru çöken çukur (vadi) kısımlara **Senklinal** denir. (Akar suların aktığı yerler)

**Kuzey Anadolu Dağları:** Marmara'dan başlayıp doğuya gider. Yıldız Dağları, Köroğlu, Ilgaz, Küre (Ecevit), Canik, Giresun Dağları ve en yüksekleri olan **Kaçkar Dağları** ile Doğu Anadolu'ya sokulur. Doğu Karadeniz dağları çok yüksek olduğu için kıyı ile iç kesim arası sadece geçitlerle (Zigana, Kop) sağlanır.
**Toros Dağları (Güney Anadolu):** Antalya körfezinden (Batı Toroslar) başlar. Beydağları, Geyik Dağları, Bolkar, Aladağlar (Orta Toros'un en yüksek zirvesi — Demirkazık, 3756 m) ve Tahtalı dağlarıyla Güneydoğu'ya kıvrılır. *Dikkat — sık karıştırılır:* Türkiye'deki **kıvrımlı dağların en yüksek zirvesi** Aladağlar değil, Güneydoğu Toroslar'daki **Cilo Dağı'dır** (Buzul Dağı/Uludoruk - Hakkari, 4135 m); Ağrı Dağı'ndan (5137 m, volkanik) sonra ülkenin 2. yüksek noktasıdır.

## 2. Kırıklı Dağlar (Orojenez)
Eğer 3. jeolojik zamanda deniz tabanında biriken tortullar *esnek değil de çok SIKI (Sert)* yapıda ise, yan basınç geldiğinde kıvrılamaz, cam gibi **kırılır**. Fay hatları boyunca dikey kırılmalar gerçekleşir.
* Fay hattı boyunca yükselerek su yüzüne çıkan bloğa **Horst (Dağ)** denir.
* Kırılarak aşağıya doğru çöken çukur ova alanlarına ise **Graben (Çöküntü Ovası)** denir.

Kırıklı dağların %95'i **Ege Bölgesindedir**. Çünkü burada araziler daha serttir. Diğer istisna ise Akdeniz'deki Nur dağlarıdır.
* **Kuzeyden Güneye Ege Horstları:** **KAZ**, **MADRA**, **YUNT**, **BOZDAĞLAR**, **AYDIN** dağları ve **MENTEŞE** (Muğla) dağlarıdır. 
* Bu dağların aralarındaki graben (çökmüş) ovalarından ise Bakırçay, Gediz, Küçük ve Büyük Menderes nehirleri denize akar.

> [!NOTE]
> Ege'deki dağlar kıyıya **DİK** uzanır. Sadece İzmir ve aşağsı.. Fakat Menteşe yöresindeki dağlar (Muğla civarı) kıyıya paralel uzanır. Dağların dik uzanması sayesinde Ege'de deniz havası iç kesimlere girebilir, kıyılar çok girintili çıkıntılıdır (koy/körfez kaynar). Doğal liman çoktur.

## 3. Volkanik Dağlar
Magmanın yeryüzündeki bir çatlaktan çıkıp soğuyarak üst üste yığılmasıyla devasa koniler oluşturmasıdır. Dağların tepesinde patlama çukuru (krater veya kaldera) vardır. Türkiye'de aktif volkan yoktur.

* **İç Anadolu Volkanları:** Karadağ, Karacadağ, Hasan Dağı, Melendiz ve İç Anadolu'nun en yükseği **Erciyes** Dağı. Bunlar genelde KD-GB yönünde bir çizgi halinde uzanır (Belli ki alttaki dev bir fay hattı boyunca patlamışlar).
* **Doğu Anadolu Volkanları:** Nemrut (Tepesinde dev bir göl olan kaldera vardır), Süphan, Tendürek ve Türkiye'nin en yüksek tepe noktası olan **Büyük Ağrı Dağı** (5137 metre).
* **Güneydoğu Anadolu:** **Karacadağ**. Lavları çok akışkan olduğu için yukarı doğru huni dibi birikmemiş, etrafa çok geniş yayılmıştır. Yükseltisi az, yüzölçümü çok geniştir. Buna "Kalkan Volkan" denir.
* **Ege:** Manisa **Kula Volkanları**. Türkiye'nin *En Genç* volkanik arazisidir. Tepeler küçük küçük koniler şeklindedir (İnsan ayak izi fosilleri bulunmuştur, demek ki insanoğlu yaşarken buralar ateş püskürüyordu). Divlit tepesi olarak da bilinir. İlklere ev sahipliği yapan ve ilk Jeopark alanımızdır.`,
            atlasLink: { layerId: 'mountains' },
            mnemonics: [
                {
                    title: 'Ege Kırıklı Dağları (Kuzeyden Güneye)',
                    text: 'KAS MASA YUTTU BOZ AYI MELEDİ (Kaz, Madra, Yunt, Boz, Aydın, Menteşe)'
                },
                {
                    title: 'İç Anadolu Volkanları',
                    text: 'KEHEM (Karacadağ, Erciyes, Hasan, Karadağ, Melendiz)'
                },
                {
                    title: 'Doğu Anadolu Volkanları',
                    text: 'SANAT (Süphan, Ağrı, Nemrut, Tendürek)'
                }
            ],
            teacherNotes: [
                'Bursa Uludağ bir volkanik dağ mıdır? Yanıt Kısmen evet, kısmen hayır. İç Püskürük denen "Batolit" dağdır. Yani magma yüzeye çıkmadan yerin altında yavaş yavaş soğuyup donmuş, milyonlarca yıl sonra üzerindeki toprak aşınınca o devasa granit kütle (Uludağ) ortaya çıkmıştır.'
            ],
            keyPoints: [
                'En büyük dağ: Ağrı (Volkanik)',
                'En genç volkan: Kula Tepeleri',
                'Tek Kalkan Volkan: GDA - Karacadağ',
                'Karadeniz ve Akdeniz: Kıvrım',
                'Ege Bölgesi: Horst ve Graben kırık yapısı'
            ],
            inlineQuizzes: [
                {
                    question: "Ege Bölgesinde dağların kıyı çizgisine dik uzanmasının sonuçları arasında aşağıdakilerden hangisi gösterilemez?",
                    options: [
                        "Kıyı uzunluğunun kuş uçumu (düz) mesafeye oranla çok fazla olması",
                        "Denizel etkinin iç kesimlere kadar rahatça sokulabilmesi",
                        "Kıyı ile iç kesimler arasındaki ulaşımın geçitlerle sağlanmak zorunda olması",
                        "Kıyıda çok sayıda koy, körfez ve doğal liman bulunması"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Ege'de dağlar denize dik uzandığı için arada ovalar/grabenler vardır ve ulaşım bu düz vadilerden kolayca sağlanır. Tünel ve geçitlere gerek duyulan yerler, Karadeniz ve Akdeniz gibi dağların kıyıya 'paralel' olduğu, duvar gibi yolu kapattığı bölgelerdir."
                }
            ]
        },
        {
            id: 'ovalar-platolar',
            slug: 'ovalar-ve-platolar',
            title: '3. Ovalar ve Platolar',
            content: `## Türkiye'nin Ovaları
Ova, çevresine göre nispeten düz veya hafif eğimli geniş alanlardır. Türkiye ovaları oluşum özelliklerine göre Çöküntü (Tektonik) Ovalar, Kıyı (Delta) Ovaları ve Karstik Ovalar olmak üzere başlıca 3 gruba ayrılır.

### 1. Delta Ovaları (Kıyı Ovaları)
Akarsuların aylarca, tonlarca malzeme (alüvyon) taşıyıp bu verimli toprağı **deniz kıyısında (deniz içinde) biriktirmesiyle** deniz seviyesinde düzlükler oluşmasıdır. Son derece verimlidir (Toprak başka yerlerden, dağlardan kazınarak mineral zengini gelmiştir). Bir deltadan sanayi ya da inşaat yapılamaz, tarım yapılması şarttır.

Bir yerde Delta Ovasi oluşabilmesi için 4 şarta ihtiyaç vardır:
1. Akarsu bol alüvyon (yük) taşımalıdır.
2. Denizin o kıyısı **Sığ** olmalıdır (Yani Kıta sahanlığı geniş olmalıdır). Derin denizi doldurmak zordur. Karadeniz gibi dağların dik yamaçlı indiği yerlerde deniz derinleşir delta zor oluşur.
3. Kıyıda Gel-Git genliği DÜŞÜK olmalıdır. (Türkiye okyanus kenarı olmadığı için gelgit azdır, delta oluşumu da bu yüzden ülkemizde kolaydır).
4. Kıyıda güçlü okyanus akıntıları olmamalıdır.

**Türkiye Deltaları:**
* **Bafra Ovası (Samsun):** Kızılırmak nehrinin taşıdığı alüvyonlarla oluşmuştur.
* **Çarşamba Ovası (Samsun):** Yeşilırmak nehrinin denize döküldüğü yerde oluşmuştur.
* **Çukurova (Adana):** Seyhan ve Ceyhan nehirlerinin ürünüdür. Türkiye'nin ve Orta Doğu'nun tarım potansiyeli en yüksek, \`Türkiye'nin En Büyük\` delta ovasıdır.
* **Silifke Ovası (Mersin):** Göksu nehrinin Akdeniz'e armağanıdır.
* **Ege Deltaları:** Kuzeyden güneye; Bakırçay'ın (Dikili), Gediz'in (Menemen), Küçük Menderes'in (Selçuk) ve Büyük Menderes'in (Balat/Milet) deltaları.

### 2. Karstik Ovalar (Polye)
Suyun kireçtaşı (kalker) ve alçıtaşı (jips) barındıran çözülebilen kayaları eritmesiyle oluşan ucu kapalı teknemsi çukurluluklardır. En küçüğüne lapya, gittikçe büyüğüne dolin, uvala en büyüğüne **Polye** denir. Polyeler tarım yapılabilen büyüklükteki erime çukurlarıdır. Suyu tutmadığı (sular yer altına sızdığı) için düdeni varsa tarım zordur, tıkanırsa göl olabilir.
**Akdeniz Bölgesi (Teke yöresi - Batı Toroslar)** en yaygın olduğu yerdir.

### 3. Tektonik Çöküntü Ovaları
Fay hatları boyunca devasa alanların kırılarak veya çökerek aşağı inmesiyle oluşur. Etrafı dağlarla çevrili kase gibi çukurlardır. Fay hatlarıyla paralel uzanırlar (KAF, DAF, BAF).
**En büyük ova:** Konya ovasıdır. İkinci Muş ovasıdır.
Çukurova hariç aklınıza gelen hemen her ova tektonik ovadır: Amik, Malatya, Elazığ, Erzurum, Erzincan, Iğdır, Bursa, Balıkesir... Kaplıca suları ve deprem riski tektonik ovalarda çok fazladır.

---

## Türkiye'nin Platoları
Plato, kısaca: Nehirler tarafından derin vadilerle paramparça yere yarılmış (aşındırılmış), etrafına göre **yüksekte (dağ tepelerinde) kalmış düzlüklerdir.** Ovadan farkı, ovanın çukurda, platonun yüksekte olmasıdır. Anadolu kütlesi 4. zamanda komple yükseğe fırlatıldığı için, Türkiye'de plato o kadar çoktur ki bir "Plato Ülkesidir" diyebiliriz.

### 1. Karstik Platolar (Eriyebilen)
* **Teke ve Taşeli Platoları:** İkisi de Akdeniz'dedir (Teke sol altta Antalya-Muğla, Taşeli sağ ortada Mersin-Antalya arası). Kireçtaşı ağırlıklıdır. Yüzeyde su durmaz, çok engebelidir, toprak tarıma verimsizdir. Sadece kıl keçisi yetiştiriciliği ve yörük (konargöçer) kültürü vardır. Türkiye'nin en tenha platolarıdır.

### 2. Aşınım Platoları
Milyonlarca yılda tepe kısımların aşınıp dümdüz olmasıdır. Boyları en alçaktır, yükseltileri azdır.
* **Çatalca - Kocaeli Platosu:** Türkiye'nin en önemli düzlüğüdür (İstanbul bu plato üzerindedir). Nüfus, sanayi, ticaret ve modern tarımda 1. sıradadır. Yükseltisi 100-200 metre civarındadır.

### 3. Lav (Volkanik) Platoları
Kalın lav tabakalarının üst üste fışkırması ve etrafın vadilerle yarılması.
* **Erzurum - Kars - Ardahan Platoları:** Türkiye'nin **en yüksek platolarıdır.** Yaz aylarında dahi yağan yağmurlar nedeniyle üzerleri devasa boydaki çayır otluklarıyla kaplıdır. Bu nedenle burada "Mera tabanlı Büyükbaş Hayvancılık" zirvededir. Et kombinası sanayisi vardır.

### 4. Tabaka Düzlüğü (Yatay Duruşlu) Platoları
İç Anadolu, Göller Yöresi ve Güneydoğu Anadolu'da geniş yer kaplayan sert ve düz platolardır. Çoğunlukla buğday/arpa (tahıl tarımı) yapılır ve etrafında bozkır (step) iklimi bitkileri olan küçükbaş hayvanlar otlatılır (Merinos Koyunu).
* **İç Anadolu Platoları:** Obruk, Haymana (Ankara), Cihanbeyli (Konya), Bozok (Yozgat), Uzunyayla (Kayseri-Sivas).
* **Güneydoğu Platoları:** Şanlıurfa ve Gaziantep platoları. GAP projesi sayesinde buralarda inanılmaz bir sanayi bitkisi (pamuk, mısır) patlaması yaşanmıştır.`,
            atlasLink: { layerId: 'plateaus' },
            mnemonics: [
                {
                    title: 'Karstik Ovalar',
                    text: 'TAKKE - (Tefenni, Acıpayam, Korkuteli, Kestel, Elmalı)'
                }
            ],
            warnings: [
                'Dikkat: Delta ovaları DENİZ kıyısında olmalıdır. "Antalya" bir kıyı ovasıdır fakat delta değildir, falez diplerinde birikmiş traverten ovalarıdır. Çünkü derinlik delta için elverişli değildir.'
            ],
            teacherNotes: [
                'Tuz Gölü ve çevresi, Cihanbeyli-Obruk platoları arası en "kurak" değil, en "az yağış alan" yerdir. En kurak yer GDA’dır çünkü GDA’da şiddetli buharlaşma (şiddetli güneş) vardır.'
            ],
            keyPoints: [
                'En Büyük Delta: Adana - Çukurova',
                'Nüfusun En Seyrek Olduğu, Tarımın yapılamadığı Plato: Teke ve Taşeli',
                'Sanayi ve Nüfus Yoğunluğu Zirve Plato: Çatalca Kocaeli',
                'Tepesi çayır, altı büyükbaş hayvan dolu en yüksek plato: Erzurum-Kars'
            ],
            inlineQuizzes: [
                {
                    question: "Teke ve Taşeli platolarının ortak özellikleri düşünüldüğünde, aşağıdakilerden hangisi bu özelliklerden biri olamaz?",
                    options: [
                        "Nüfus yoğunluklarının oldukça az olması",
                        "Yerüstü su kaynakları bakımından çok zengin akarsu ağlarına sahip olmaları",
                        "Kıl keçisi yetiştiriciliğinin yaygın olması",
                        "Kalker (kireçtaşı) kayalarının çözünmesiyle oluşmuş olmaları"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Karstik arazilerin (Teke, Taşeli) en belirgin özelliği suyun yerin altına hızla sızmasıdır (düdenlerle). Bu nedenle yüzey suları ve akarsu ağları çok fakirdir, tam tersine yer altı suları zengindir."
                }
            ]
        },
        {
            id: 'dis-kuvvetler-diger',
            slug: 'dis-kuvvetler-ve-kiyi-tipleri',
            title: '4. Dış Kuvvetler ve Kıyı Tipleri',
            content: `Dünyayı yapan kuvvetlere jeolojik devirlerde (iç kuvvetler) demiştik. O dışarı çıkan yeryüzünü traşlayıp oymaya, adeta heykeltıraş gibi yontmaya çalışan güneş/hava kökenli her şeye **Dış Kuvvetler** deriz. Türkiye coğrafyasında yer şekillerinin oluşumunda **EN ETKİLİ** dış kuvvet açık ara **Akarsular**dır (Yağmur suları ve dereler).

### 1. Akarsu Aşınım ve Birikim Şekilleri
Türkiye ortalama yükseltisi ve eğimi fazla olan genç bir ülke olduğundan, akarsular yükseklerden şelale gibi (hızlı) akar. Bu sebeple derin vadiler (Çentik Vadi) oluştururlar. Taşıdıkları toprağa alüvyon denir, bu alüvyonların en faydalı halini deltalar kısmında okuduk.
* **Peri Bacaları:** Volkanik arazilerde (Kapadokya/Nevşehir, Erzurum-Narman) tüf kalıntılarının sel, rüzgar ve akarsularla oyulmasıdır. Esas sebep "Akarsu", dolaylı sebep "Volkanizma" ve oyma işlemlerinde az da olsa "Rüzgardır".
* **Kırgıbayır (Badlands):** İç Anadolu'da bitki örtüsü zayıf tüflü yamaçların sel sularıyla jilet gibi kesik kesik paramparça edilmesi.

### 2. Karstik Şekiller (Yeraltı Suları)
Suda kolay eriyen Kireçtaşı (Kalker), Alçıtaşı (Jips) ve Kaya Tuzunun bulunduğu araziye **Karstik Arazi** denir (En yoğun Akdeniz ve Sivas-Jips çevresi).
* **Aşınım:** Lapya (bir karışlık en küçük erime çukurluğu) -> Dolin -> Uvala -> Polye (En büyük). Sular yer altına sızar, mağaraları açar, tavan çöker ve derin karanlık kuyular olan **Obruk**'lar oluşur. (Konya Kızılören obruğu).
* **Birikim:** Mağara sularındaki mineral damlayarak **Sarkıt**, alttan büyüyerek **Dikit**, ikisi birleşince **Sütun** oluşturur. Sıcak kaynak suyu yüzeye çıkıp soğuyup katman katman beyaz basamaklar oluşturunca onlara **Traverten** deriz (Denizli Pamukkale). 

### 3. Rüzgarlar
Rüzgarın bir yeri oyması için oranın kupkuru çöl olması ve bitkinin hiç olmaması gerekir. O nedenle şiddetli bir dış güç değildir. En etkili olduğu yer, ağacın olmadığı **İç Anadolu ve Güneydoğu Anadolu**dur.
Taşıdıkları ince çöl tozuna **Löss (Lös)** denir. Sığ kayaları alt kısımlarından oyarak **Mantar Kaya** veya kuşkaya yaparlar.

### 4. Buzullar
Türkiye orta kuşaktadır, okyanus yoktur, kutuplara uzaktır. Bu nedenlerle *Buzullar, Türkiye'yi etkileyen "en zayıf" dış kuvvettir.* Sadece 2500 - 3000 metre yükseklikteki dağ zirvelerinde buzul (Sirk/Çanak) çukurlarına ve buzulların getirdiği taş birikintisi olan **Moren** topraklarına rastlanır.

---

## Türkiye'nin Kıyı Tipleri
Türkiye deniz kenarındaki şekillerinin oluşumunu genelde Dağların uzanış yönü belirler.

1. **Boyuna Kıyı Tipi (Karadeniz ve Akdeniz):** Dağların denize "paralel" duvar gibi çekildiği ince uzun, falezlerle (dik uçurumlarla) dolu kıyılardır. Koy ve körfez azdır. Doğal liman zayıftır (Karadeniz'de sadece Sinop limanı iyidir ama dağlar hemen arkasında olduğu için içeri bağlantısı zordur, hinterlandı dardır).
2. **Enine Kıyı Tipi (Ege Kıyıları):** Dağların denize "dik" geldiği (tarak dişi gibi) bölgeler. Kıyı çok girintili çıkıntılıdır. Yüzlerce ufak koy vardır. Kıyı boyu ölçümü ile kuş uçumu arası çok çok fark çıkar. İçeriye ulaşım çok kolaydır.
3. **Ria Kıyı Tipi:** Çok özeldir. Eskiden İstanbul M.Ö binlerce yıl önce akarsu vadisiydi. Deniz yükseldi (Epirojenezle Egeid çöktü), Marmara Denizi karanın boğaz yollarını doldurdu. Boğazların (İstanbul, Çanakkale), İstanbul Haliç'inin ve Muğla (Güneybatı Ege - Gökova körfezi) kıyılarının ismi Ria kıyı tipidir.
4. **Dalmaçya Kıyı Tipi:** Tıpkı Hırvatistan kıyıları gibi. Dağlar paraleldir ancak deniz o kadar yükselmiştir ki dağların vadileri su altında kalmış, tepeleri ise denizin ortasında sıram sıram küçük adacıklar halinde dizilmiştir. Türkiye'de sadece **Antalya (Kaş-Finike arası)** kıyılarında görülür.
5. **Kalanklı Kıyı:** Karstik (Kireçtaşı) arazilerde denizin yavaşça kayayı eritmesiyle oluşan kanyon gibi çok derin ama dar koylar. **Mersin - Silifke** civarında.`,
            keyPoints: [
                'Buzullar Türkiye şekillenmesinde en ETKİSİZ güçtür.',
                'Karstik Erimede sıra: Lapya < Dolin < Uvala < Polye',
                'Türkiye Orta kuşak olduğu için ASLA "Fiyort" (Norveç-buzul kertikleri) ve "Skyer" tipi buzullu kıyı tipi bizde Görülmez (Matematik konum kanıtıdır, enlem engelidir).',
                'Tuz gülü, İç Anadolu (Mantar kayalar), Rüzgar kuvveti = Kurak, Bitkisiz alan',
                'Pamukkale travertenleri Karstik bir birikim şeklidir'
            ],
            inlineQuizzes: [
                {
                    question: "Aşağıdakilerden hangisi Türkiye'de Fiyort, Mercanlı veya Skyer tipi kıyıların kesinlikle görünmeme nedenini en iyi açıklar?",
                    options: [
                        "Orta kuşakta bulunması ve okyanuslara doğrudan kıyısının olmaması",
                        "Gerçek bir yarımada olması",
                        "1132 metre ortalama yüksekliğe sahip genç bir ülke olması",
                        "Jeolojik olarak çok sayıda volkanik dağlar ile kaplı olması"
                    ],
                    correctOptionIndex: 0,
                    explanation: "Fiyort ve Skyer tipi kıyılar buzulların doğrudan deniz seviyesini kazımasıyla (sadece kutuplarda okyanus kıyılarında yani Norveç tarafında) oluşur. Türkiye Ekvator'a kısmen yakın, sığ ve ılıman bir orta kuşak ülkesidir. Mercanlar (Resifler) ise sadece kutup noktası kadar sıcak ekvator denizlerinde oluşur."
                }
            ]
        }
    ]
};
