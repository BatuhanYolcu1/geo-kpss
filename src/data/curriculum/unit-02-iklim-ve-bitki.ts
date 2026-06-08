import { NoteUnit } from '@/types/notes';

export const unit02: NoteUnit = {
    id: 'unit-02',
    title: 'Türkiye\'nin İklimi ve Bitki Örtüsü',
    icon: 'CloudRain',
    sections: [
        {
            id: 'iklim-elemanlari',
            slug: 'iklim-elemanlari-sicaklik-ruzgar-yagis',
            title: '1. İklim Elemanları (Sıcaklık, Rüzgar, Nem, Yağış)',
            content: `Türkiye'nin iklimini belirleyen en temel iki unsur Matematik (Enlem) ve Özel (Yükselti, Denizellik) konumdur. İklim elemanları sıcaklık, basınç ve rüzgar, nem ve yağış olmak üzere 3'e ayrılır.

## 1. Sıcaklık
Sıcaklık dağılışını etkileyen faktörler; Enlem, Yükselti, Denizellik-Karasallık ve Bakı'dır.
Dünya'da genel kural şudur: **Ekvatordan Kutuplara gidildikçe sıcaklık düşer (Enlem etkisi). Ancak dağa tırmandıkça da sıcaklık düşer (Yükselti etkisi).**

* **En Sıcak Yerler Neresi?**
    * *Yaz Mevsiminde:* Güneydoğu Anadolu'dur (Şanlıurfa, Mardin vs). Neden Akdeniz değil? Çünkü GDA'ya güneyden, çöllerden (Suriye/Basra) kavurucu Samyeli rüzgarları eser ve şiddetli karasallıktan dolayı nem (serinletici etki) yoktur.
    * *Kış Mevsiminde:* Akdeniz Kıyılarıdır (Antalya, Mersin). Çünkü hem Ekvatora daha yakındır (Enlem) hem de deniz ılıtıcı bir etki yapar (Denizellik).
* **En Soğuk Yerler Neresi?**
    * Her zaman, hem kış hem yaz aylarında **Kuzeydoğu Anadolu'dur (Erzurum-Kars-Ardahan)**. Sebebi: Hem Kutuplara daha yakındır (Enlem), hem denizden çok uzaktır (Şiddetli Karasallık), hem de Türkiye'nin en yüksek platosudur (Yükselti).

## 2. Basınç Merkezleri ve Rüzgarlar
Basınç merkezleri Türkiye'ye dışarıdan (Avrupa, Sibirya veya Afrika'dan) gelen devasa hava akımlarıdır.
1. **İzlanda Alçak Basıncı:** Kuzeybatıdan (Balkanlar üzerinden) gelir. Dinamik bir basınçtır. Türkiye'de özellikle *Kışın* ılık, yağmurlu ve rüzgarlı günlere (lodos/karayel fırtınalarına) neden olur.
2. **Sibirya Yüksek Basıncı:** Kuzeydoğudan (Rusya üzerinden) gelir. Termik bir basınçtır. Türkiye'de kışın hava sıcaklıklarının sıfırın altına düşmesine, dondurucu **ayazlara** ve günlerce kalkmayan karlara neden olur. (Güneş olsa bile buz gibidir). Doğu Anadolu'da etkilidir.
3. **Asor Yüksek Basıncı:** Güneybatıdan (Ege denizinin aşağısından) gelir. Tüm yıl Türkiye'de etkilidir ancak en çok YAZIN etkilidir. Yazların sıcak ve **kurak/bulutsuz** geçmesinin bir numaralı nedenidir. Türkiye'nin en kararlı basıncıdır.
4. **Basra Alçak Basıncı:** Güneydoğudan (Irak çöllerinden) gelir. Yazın Güneydoğu Anadolu'yu kavuran sistemdir.

### Yerel Rüzgarlar (Kayıp Sakal Kuralı)
Türkiye Kuzey Yarım Kürede olduğu için kuzeyden gelenler sıcaklığı her zaman **düşürür**, güneyden gelenler her zaman sıcaklığı **artırır**. Rüzgarları saat yönünde dönerek **KAYIP SAKAL** diye kodluyoruz.
* **Kuzeyden Soğuk Esenler:**
    * **Ka**rayel (Kuzeybatı): Balkanların dondurucu soğuklarını ve karı Marmara'ya taşır.
    * **Yı**ldız (Kuzey): Karadeniz'den dağlara çarpan suları yağmura çeviren rüzgar.
    * **P**oyraz (Kuzeydoğu): Rusya'nın sert kuru soğuğunu özellikle kışın hissettirir.
* **Güneyden Sıcak Esenler:**
    * **Sa**myeli / Keşişleme (Güneydoğu): Yazın çok etkilidir, GDA'yı çöl gibi kurutur, pamuğu sarartır, buharlaşmayı arşa çıkarır. Tarım için kötüdür.
    * **Kı**ble (Güney): Akdeniz'den iç kesimlere sıcaklık taşır.
    * **L(odos)** (Güneybatı): Afrika sıcaklarını taşır, suları kaynatır. En önemli özelliği "Lodosun gözü yaşlıdır", bol yağış bırakır. Kışın gelirse karları bir günde felaket bir şekilde eritip sellere yol açar. Soba bacalarını geri üflediği için **Zehirlenmelere** neden olur. Denizciler lodosu hiç sevmez.

**Fön Rüzgarı:** Bir dağ yamacından aşağı inen havanın sürtünmeden dolayı her 100 kademede 1 derece HIZLA ve KURU KURU ısınmasıdır. İsviçre Alplerinde görülen bu sistem bizde Torosların Akdeniz'e inen kısımlarında ve Rize-Artvin yamaçlarında görülür. Çok sıcak ve çok kurutucudur, karı buharlaştırır. *Rize'de Turunçgil yetişebilmesinin sebebi Fön rüzgarıdır.*

## 3. Nem ve Yağış
Coğrafyada 3 tip nemden bahsedilir:
1. **Mutlak Nem (Gerçek Su Buharı):** Sadece DENİZ kenarlarında vardır.
2. **Maksimum Nem (Havanın Su Taşıma Kapasitesi) = SICAKLIKTIR.** Sıcak hava tıpkı şişen bir sünger gibi büyür, suyu kolay tutar. Bu yüzden Çöllerde maksimum nem (kapasite) devasadır ama hava kurudur çünkü mutlak nem (gerçek su) yoktur. *Maksimum nemin en yüksek olduğu yer yazın GDA, kışın Akdeniz'dir.*
3. **Bağıl Nem (Yağış İhtimali):** Bir bardağın hangi oranda su ile dolduğunun yüzdesidir. %100'e ulaştığında yağmur yağar. **Bağıl nemin Türkiye'de her zaman en yüksek olduğu yer DAİMA Karadeniz'dir.**

### Yağış Oluşum Tipleri
Türkiye'de 3 farklı sistemle yağış düşer:
1. **Yamaç (Orografik) Yağışları:** Nemli havanın bir dağ yamacına çarpıp tırmanarak soğumasıyla düşen en bereketli yağışlardır. Dağların kıyıya duvar gibi paralel olduğu **Karadeniz**'in denize bakan (Kuzey) yamaçlarında ve **Akdeniz**'in denize bakan yamaçlarında (Menteşe, Nur Dağları) görülür. Yıl boyu boldur.
2. **Konveksiyonel (Yükselim) Yağışları:** Isınan havanın (özellikle İlkbahar'da) yerden buharlaşıp aniden gökyüzüne fırlaması ve soğuyarak yağmasıdır. Bir anda gök gürültülü sağanak başlar. İç Anadolu ve Erzurum-Kars bölgesinde (Yazın) görülür. Halk buna **Kırkikindi Yağışları** der (İkindi vakti 40 gün boyunca yağdığı için).
3. **Cephe (Frontal) Yağışları:** Ekvatordan (Güneyden) gelen sıcak hava kütlesi ile Kutuplardan (Kuzeyden) gelen soğuk hava kütlesinin tam Türkiye'nin üzerinde "Orta Kuşak"ta çarpışmasıyla (cephe savaşı gibi) oluşan yağışlardır. **Tüm Türkiye'de KIŞ mevsiminde yağan yağmur ve karların %90'ı Cephe yağışıdır.** Cephe yağışlarının en çok göründüğü bölge de Akdeniz'dir. (Hatırla, Türkiye'de cephe görülmesinin sebebi Matematik konumdur).`,
            mnemonics: [
                {
                    title: 'Yerel Rüzgarlar Saat Yönünde',
                    text: 'KAYIP SAKAL (Karayel, Yıldız, Poyraz --> Samyeli, Kıble, Lodos)'
                },
                {
                    title: 'Basınç Sistemleri Etkileri',
                    text: 'İzlanda (Ilık Yağışlı), Sibirya (Ayaz Kar), Asor (Yaz Kuraklığı), Basra (Sıcak Samyeli)'
                }
            ],
            examAnalysis: "ÖSYM rüzgarlarda özellik kelimeleri çok kullanır. Mesela soba zehirlenmesi ve karları hızla eriten lodos sorusu efsanedir. Kırkikindi ve yükselim laflarını konveksiyonel yağışlarla mutlaka eşleştirin.",
            teacherNotes: [
                'Dikkat! Ege Bölgesinde dağlar denize genelde DİK indiği için, rüzgar denizin üstünden sünger gibi aldığı suyu bir dağa çarpıp dökemez, dağ aralarındaki graben (vadilerden) süzülüp gider. O yüzden Ege kıyılarında YAMAÇ (orografik) yağışı pek görülmez (Sadece Menteşe yöresinde görülür, o yüzden Muğla Ege\'nin en çok yağış alan ama denize girecek yeri en az olan tek ilidir).'
            ],
            keyPoints: [
                'Maksimum Nem = Sıcaklık (GDA)',
                'Bağıl Nem = Yağış İhtimali (Karadeniz)',
                'Soba Zehirlenmesi, Lodos',
                'İç Anadolu Kırkikindi Yağışları (Konveksiyonel)',
                'Türkiye geneli kış yağışları = Cephe Yağışları'
            ],
            inlineQuizzes: [
                {
                    question: "İç Anadolu ve Erzurum-Kars platolarında ilkbahar ve yaz başlarında aniden ısınan havanın yükselip soğumasıyla oluşan gök gürültülü sağanak yağışlara ne ad verilir?",
                    options: [
                        "Orografik (Yamaç) Yağışlar",
                        "Frontal (Cephe) Yağışlar",
                        "Konveksiyonel (Yükselim) Yağışlar",
                        "Siklonik Yağışlar"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Karaların iç kısımlarında ısınan havanın hızla yükselmesi ve soğumasıyla ortaya çıkan yağış tipi konveksiyoneldir. Halk arasında 'kırkikindi' olarak da adlandırılır."
                },
                {
                    question: "Kışın bir lisenin kombisi yanmasına rağmen sınıflar buz gibi soğuk, gökyüzü açık ama çok şiddetli dondurucu bir rüzgar (ayaz) esmektedir. Türkiye bu hava olayını yaşarken etkisinde kaldığı basınç merkezi muhtemelen hangisidir?",
                    options: [
                        "İzlanda Alçak Basıncı",
                        "Sibirya Yüksek Basıncı",
                        "Asor Yüksek Basıncı",
                        "Basra Alçak Basıncı"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Kışın havanın kuru (yağışsız/açık) ama dondurucu soğukta ve ayazda olmasının kaynağı Rusya üzerinden inen yüksek yoğunluklu karasal Sibirya soğuklarıdır."
                }
            ]
        },
        {
            id: 'iklim-tipleri-bitki',
            slug: 'iklim-tipleri-ve-bitki-ortusu-turkiye',
            title: '2. İklim Tipleri ve Bitki Örtüsü',
            content: `Türkiye'de etrafındaki denizler, denizlerin etrafındaki devasa dağlık duvarlar (içeri girmeyi engelleyen) ve yüksek platolar nedeniyle 10 metrelik kısa bir yolda bile bitki örtüsü değişebilir.
Türkiye'de 4 Ana İklim Tipi ve onlara ait spesifik bitki örtüleri vardır:

### 1. Karadeniz İklimi
* **Karadeniz boyunca** ve Marmara'nın Karadeniz'e bakan kıyılarında (Yıldız dağları) görülür.
* **En belirgin özelliği:** Her mevsim yağışlı olmasıdır. Kurak (yağmursuz) geçen bir mevsimi veya ayı yoktur. Bu nedenle **Türkiye'nin Yağış Rejimi Düzenli Tek İklimidir.**
* **En Fazla Yağış:** Sonbahar mevsiminde düşer (Eylül-Ekim).
* Bulutluluk oranı çok yüksektir, Türkiye'de güneşlenme (güneş enerjisi paneli kurma) şansının *en düşük* olduğu yerdir.
* **Bitki Örtüsü**: Yıl boyu yağmur demek gür **ORMAN** demektir. Dağ yamaçlarında aşağıda kayın/meşe gibi geniş yapraklılar varken tepeye çıkıldıkça soğuya dayanan Çam/Göknar gibi iğne yapraklılara dönerler (orman formasyonu kuşaklar oluşturur).
* **Meyveleri/Toprak:** Toprağı organik maddece (humus) zengin Kahverengi Orman Toprağıdır. Ancak o kadar çok yağmur yemiştir ki toprak bütün kirecini (mineralini) yıkayıp alttan akıtmıştır. Yıkanmış (asidik) ve mineral fukarası olan, ama organik çürüntüden zengin bir topraktır. Karadeniz Çayını ve Fındığını sadece bu tür bir iklim yetiştirebilir. 

### 2. Akdeniz İklimi
* **Akdeniz, Ege kıyıları** ve Güney Marmara (Bursa çevresi), az da olsa Güneydoğu'nun Hatay'a yakın (Gaziantep) kıyılarında etkilidir.
* **Belirgin Özelliği:** Yazları çok sıcak ve kurak (yağmursuz), Kışları ılık ve **Yağışlıdır**. Kışın nadiren kar yağar.
* **Yıllık Yağışı:** Çoğu yağışı KIŞ mevsiminde alır. Bu tamamen Cephe yağışıdır. Karadeniz İkliminden daha güçlü bir yağış alır ama yazlar çok kurak olduğu için Karadeniz gibi orman kuramaz.
* **Bitki Örtüsü:** Boyları ağaç olacak kadar uzayamayan bodur çalılık ormanlardır, bunlara **MAKİ** denir. Maki kökleri yerin metrelerce altına (su aramak için) uzar, yaprakları ise su kaybını önlemek için zeytin gibi ufacık, kalın, sert, derimsi, üzeri tüylü ve parlaktır (balmumu kaplıdır). Soğuğa dayanamazlar. *Başlıca makiler; Zeytin, Defne, Zakkum, Keçiboynuzu, Mersin otu, Kocayemiş ve yaban mersinidir.* 
* **Garig (Maki Tahribi):** İnsanlar ev yapmak veya tarla açmak için makileri keser ve yakarsa, o yanan kel yerlerde maki bir daha canlanamaz (su az olduğu için). Çıkan yeni çok cılız süprüntü otlara GARİG denir (Lavanta, kekik, yasemin, süpürge otu, funda). *Kızılçam ormanları kesilirse de Maki çıkar.*
* **Toprak:** Toprak demir oksit içerdiği için rengi kırmızımtıraktır, suyu iyi geçirir ancak çok verimli değildir (sulanıp gübrelenmesi şarttır). Bu paslı toprağa **Terra Rosssa** denir.

### 3. Step (Bozkır) İklimi / Karasal İklim
* **İç Anadolu, Doğu Anadolu, Güneydoğu Anadolu (GDA)** ve Marmara'nın iç kısımlarında (Ergene ovalarında). Türkiye'nin en baskın ve en geniş alanlı iklimidir. Sebebi dışarıdaki deniz meltemlerinin dağ duvarlarına çarpıp içeri hiç sızamamasıdır.
* **Özelliği:** Yazlar sıcak ve kural, Kışlar soğuk ve KARLIDIR. İlkbaharlar yağmurludur (Kırkikindi). Gelişen sıcaklıkla yazın kuruyan bir sistemdir.
* **En Fazla Yağış:** İlkbaharda. (Ancak GDA kışın daha fazla alır Akdeniz'den dolayı, ilkbahardan ziyade kışa kaymıştır).
* **Bitki Örtüsü:** İlkbahar sağanaklarıyla yeşerip (bel boyuna kadar), yazın kavurucu güneşi yiyince sararıp kuruyan (kopan) ot topluluklarıdır. Bunlara **BOZKIR (STEP)** denir. Geven, eşek dikeni, yavşan otu, gelincik, çoban yastığı, kenger ve üzerlik en ünlüleridir. İnsana umut verip yazın yarı yolda bırakan bitkilerdir. Türkiye tahıl üretimini bu iklimde yapar. Ayrıca koyun gibi küçükbaş hayvancılık için mükemmel ortamdır.
* **Antropojen Bozkır:** İnsanların binlerce yıl İç Anadolu'daki (Eskiden ormanlık olan bölgeler - Timur'un Ankara Savaşı vb) ormanları balta ve ateşle keserek yerleşmesi, çorak kel tarlalar (bozkır) yapmasıdır. Ormanların yok edilmesiyle oluşan bu çayırlara denir.
* **Toprak Tipi:** Kahverengi veya Kestane renkli (Humusça zayıf) bozkır toprakları. Sulama ister.

### 4. Sert Karasal İklim (Erzurum - Kars - Ardahan)
* Doğu Anadolu'nun en yüksek tepelerine tırmandığımızda (Erzurum - Kars tarafı) iklim değişir.
* **Özelliği:** Kışlar dünyadaki en sert iklimlerden biridir. (-40° dereceler). Boyutunu şöyle özetleyelim: kar Ekim'de başlar, yolları kapar, don tutar, yeryüzünü buzullar gibi donuklaştırır ve bu kar Nisan-Mayıs aylarına kadar YERDEN KALKMAZ (6-7 ay buz altında kalır). Yaz mevsimi temmuzun kısacık bir anında başlar, ama havalar serindir (Öyle kavurucu yaz yoktur). Türkiye'nin **Yıllık Sıcaklık Farkı EN YÜKSEK** (Kış: -40, Yaz +25 = Fark 65 derece) yeridir.
* **En Fazla Yağış:** YAZIN kar kalkınca biriken suların ısıyla buharlaşıp (konveksiyonel) deli gibi yaz sağanağı dökmesiyle oluşur.
* **Bitki Örtüsü:** Yaz yağmurları bitkileri çok gür besler ama hava hemen soğuduğu için bu bitkiler ağaç olamaz, sadece boyları 1-1.5 metreyi bulan yemyeşil gür yaz Çayırları (Alpin Çayırlar) olarak kalırlar. Üzerinde gezinen büyükbaş hayvanlar (Sığır) bunları yiyerek büyür. Büyükbaş mera hayvancılığı işte bu gür Alpin çayırlar sayesindedir (Bozkır koyunun, çayır sığırın yemeğidir).
* **Toprak:** Dünyanın en verimli, kara, harika toprağıdır: **Çernezyom**. Çayırlar kökten çürüyerek o toprağa 2 metre kalınlığında simsiyah organik (kara toprak) kömür karası bir humus bırakır. Toprak çok verimlidir AMA soğuktan 6 ay donuk olduğu için, yazın da havalar serin olduğu için **tarımda kullanılamaz!** İklim müsait etmemiştir. Sadece hayvan yemi fışkırır. 

---

## Türkiye'deki Özel Bitki Kavramları (ÖSYM Sever)

1. **Endemik Bitki (Özel / Yerli Üretim):** Dünyanın başka HİÇBİR YERİNDE (veya çok küçük bir bölgesinde) yetişmeyen, yeryüzüne "Sadece O Yöreye Özel" kök salmış bitkilerdir. Ender bitkidir.
   * *Neden Bizde Çok? :* Jeoloji zamanda (Buzul çağlarında vb) kıtalar donarken, Türkiye'nin derin, güneye bakan, korunaklı vadilerindeki mikroklima sıcaklık alanları sayesinde tohumlar ölmemiş ve günümüze o dar vadi diplerinde yaşayarak gelmişlerdir. Orojenezin engeliyle o vadi dışında üreyememişlerdir. (Türkiye Orta Doğu + Avrupa toplamından daha fazla endemik bitkiye sahiptir - Yaklaşık 3700 çeşit!).
   * **ÖSYM'nin Sordukları:** 
      * **Sığla Ağacı** (Kozmetik ve ilaç sanayi, yağı şifadır. Yalnızca **Muğla / Köyceğiz** ve çevresindedir).
      * **Kasnak Meşesi** (Mobilya için iyidir. Sadece **Göller Yöresi / Isparta Eğirdir**).
      * **Datça Hurması** (Türkiye'nin tek orman formundaki palmiyesidir. Sadece **Datça ve Teke Çevresinde**).
      * **Kazdağı Göknarı** (Sadece **Balıkesir/Çanakkale Kaz Dağlarında**).
      * Anzer çayı (Rize), İspir Meşesi, Ters Lale (Hakkari).

2. **Relikt (Kalıntı) Bitki:** Milyonlarca veya yüzbinlerce yıl önce farklı iklim yaşanırken var olmuş, sonra iklim değişince "lanet olsun iklim değişti" diyerek dağların yüksek, ıssız, karlı ve sulu alanlarına çekilmiş *Eski Çağdan Kalan Dinozor Bitkilerdir.* (Endemik ile farkı: Endemik dünyada tektir. Relikt ise iklim tutarsızlığıdır ve milyon yıllık fosildir). 
   * Mesela "Akdeniz'de normalde maki olur", ancak Antalya Nur Dağlarına çıkınca tepesinde Karadeniz ağacı olan "Kayın" veya "Ihlamur" bulunur mu! Şok olursunuz. İşte eski buzul çağlarında tüm Trükiye Karadeniz gibiyken orada kalmışlardır (İklim izole etmiştir).`,
            mnemonics: [
                {
                    title: 'Yağış Dağılım Sıralaması (E Harfi Çizme Taktiği)',
                    text: 'İç Anadolu\'dan başlayarak kağıda bir E çizin: İç Anadolu (İlkbahar) -> Karadeniz (Sonbahar) -> Akdeniz (Kış) -> Erzurum/Kars (Yaz)'
                }
            ],
            examAnalysis: "Endemik kelimesi 'Endemik' = Ender demektir, yani sadece Türkiye'deki bir ilçede veya ilde yaşar. Sığla Ağacının sadece Muğla Köyceğiz'de olduğunu unutanlar kozmetik/güzellik ürünlerindeki sığla ekstraktı ibarelerinden hatırlasın.",
            teacherNotes: [
                'Bozkır ile Çarnezyom topraklarını karıştırmayın; Bozkır tahıl ektiğimiz Konya toprağıdır, kahverengidir ve humus bakımından fukaradır. Çernezyom (Erzurum) ise zengindir ama soğuktan faydalanamayız.',
                'İklimi bitkilere göre sıralarsak; Bozkır < Maki < Garig < Psödomaki (Yalancı maki Karadeniz\'de fındık/kızılcık ağacı kesilince çıkar).'
            ],
            keyPoints: [
                'Maki = Kış Ilıklığı İster',
                'Zeytin, Zakkum, Mersin, Keçiboynuzu = Makidir.',
                'Dört mevsim yağış: SADECE Karadeniz.',
                'Sıcaklık farkının en az olduğu yer: Karadeniz (Nem koruması).',
                'Türkiye Orman Zengini İller: 1. Antalya, 2. Kastamonu, 3. Muğla, 4. Mersin. (Karadeniz değil Akdeniz zirvededir)'
            ],
            inlineQuizzes: [
                {
                    question: "İç Anadolu'da binlerce yıldır ormanların yakılması ve tahrip edilmesi (tarla açmak, yakacak vb. amaçlarla) sonucunda ortaya çıkan ve ormanın bir daha kendi kendini yenileyemediği bozkır alanlarına (yarı kurak sistemlere) ne ad verilir?",
                    options: [
                        "Garig",
                        "Step Biyomu",
                        "Antropojen Bozkır",
                        "Psödomaki"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Orman tahribi sonucu ortaya çıkan insan yapımı (antropojenik) bozkırlara 'Antropojen Bozkır' denilir. Eğer tahrip edilen yer Akdeniz maki ormanıysa çıkan şeye 'Garig' deriz."
                },
                {
                    question: "Toprak incelendiğinde dünyadaki en verimli topraklardan biri olmasına, kalın bir humus tabakası (siyah toprak) ve mineral barındırmasına rağmen, tarımda kullanılamayıp sadece geniş meraların yeşermesini sağlayan toprak türü ve görüldüğü il eşleştirmesi hangisidir?",
                    options: [
                        "Terra Rosa - Antalya",
                        "Kahverengi Orman - Rize",
                        "Çernezyom - Erzurum",
                        "Alüvyal Toprak - Adana"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Dünyanın en verimli toprağı olan Çernezyom, soğuk iklim (Sert Karasal) nedeniyle yılın 6 ayı donmuş kaldığı için tarıma maalesef elverişli değildir."
                }
            ]
        }
    ]
};
