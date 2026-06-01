import { NoteUnit } from '@/types/notes';

export const unit00: NoteUnit = {
    id: 'unit-00',
    title: 'Türkiye\'nin Coğrafi Konumu',
    icon: 'Globe',
    sections: [
        {
            id: 'matematik-konum',
            slug: 'turkiyenin-matematik-konumu',
            title: '1. Matematik (Mutlak) Konum ve Etkileri',
            content: `Dünya üzerindeki herhangi bir noktanın Ekvator'a ve Başlangıç Meridyeni'ne (Greenwich) göre yerine **Matematik (Mutlak) Konum** denir.
            
Türkiye; **36° - 42° Kuzey Enlemleri** (Paralelleri) ile **26° - 45° Doğu Boylamları** (Meridyenleri) arasında yer alır.
<br/>
<div class="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 my-6">
    <h4 class="text-xl font-bold text-indigo-400 mb-4">Türkiye'nin Uç Noktaları</h4>
    <ul class="list-disc list-inside space-y-2 text-slate-300">
        <li><strong>En Kuzeyi:</strong> 42° Kuzey Paraleli - Sinop (İnceburun)</li>
        <li><strong>En Güneyi:</strong> 36° Kuzey Paraleli - Hatay (Beysun Köyü / Topraktutan)</li>
        <li><strong>En Doğusu:</strong> 45° Doğu Meridyeni - Iğdır (Dilucu)</li>
        <li><strong>En Batısı:</strong> 26° Doğu Meridyeni - Çanakkale (Gökçeada - Avlaka Burnu)</li>
    </ul>
</div>

## Enlemin (Paralellerin) Türkiye'ye Etkileri
Türkiye, Ekvator'un kuzeyinde (Kuzey Yarım Küre) ve Yengeç Dönencesi'nin kuzeyinde, Orta Kuşak'ta yer aldığı için şu özellikleri gösterir:

### Orta Kuşak'ta Olmamızın Sonuçları (A-B-C-D Kuralı)
Türkiye'nin Orta Kuşakta bulunmasının en belirgin 4 temel sonucu vardır. Bunları **A-B-C-D** olarak kodluyoruz:
1. **A**kdeniz İklim kuşağında yer alması.
2. **B**atı Rüzgarlarının etkisi altında kalması.
3. **C**ephe Yağışlarının (Sıcak ve soğuk havanın karşılaşması) görülmesi. (Balkanlardan gelen soğuk hava ile Akdeniz'den gelen sıcak havanın cepheleşmesi)
4. **D**ört mevsimin belirgin olarak ve sırayla yaşanması.

### Kuzey Yarım Küre'de (Yengeç Dönencesi'nin Kuzeyinde) Olmamızın Sonuçları
* Güneş ışınları **hiçbir zaman 90° (dik) açıyla gelmez**. Bu nedenle Türkiye'de gölge boyu hiçbir zaman MÜMKÜN DEĞİL sıfır olmaz.
* Gölge yönü yıl boyunca her zaman **KUZEYİ** gösterir.
* Dağlarımızın **GÜNEY** yamaçları, Kuzey yamaçlarına göre daha sıcaktır. Buna **Bakı Etkisi** denir. (Güney yamaçta karlar erken erir, tarım ürünleri erken olgunlaşır, yerleşme sınırı daha yüksektir.)
* Rüzgarlar; **Kuzeyden esenler sıcaklığı düşürürken, Güneyden esenler sıcaklığı artırır.** 

### Güneyden Kuzeye (Hatay'dan Sinop'a) Gidildikçe Değişenler
Enlem etkisine bağlı olarak Ekvator'dan Kutuplara doğru gidildikçe değişen her şey, Hatay'dan Sinop'a doğru da değişir:
* **ŞAK (!) :** **Ş**izgisel (Çizgisel) Hız azalır, **A**çı (Güneş ışınlarının geliş açısı) küçülür, **K**alınlık (Atmosfer kalınlığı) azalır, yerçekimi ARTAR.
* **Sıcaklık** genel olarak azalır. (Denizlerin tuzluluk oranı azalır. Akdeniz çok tuzlu, Karadeniz az tuzludur.)
* **Gölge boyu** uzar.
* **Gece-gündüz süre farkı** artar. (Ekvator'da hep 12 saat gece-12 saat gündüzdür. Hatay'da yazın ve kışın süre farkı azken, Sinop'ta süre farkı en fazladır.)
* Kalıcı kar başlama sınırı, tarım, orman ve yerleşme üst sınırı **ALÇALIR**. (Yani hava soğuduğu için dağın yükseklerine çıkılamaz, sınırlar deniz seviyesine yaklaşır.)

## Boylamın (Meridyenlerin) Türkiye'ye Etkileri
Boylam sadece ve sadece **ZAMAN** (yerel saat) ile ilgilidir. İklim, sıcaklık veya tarımla hiçbir ilgisi yoktur!
* Türkiye'nin en doğusu (45° Iğdır) ile en batısı (26° Çanakkale) arasında **19 Meridyen** fark vardır. 
* İki meridyen arası zaman farkı tam 4 dakikadır. 19 x 4 = **76 dakika** (1 saat 16 dakika) zaman farkı bulunur.
* Güneş, Doğu'da her zaman daha erken doğar ve daha erken batar. İftar her zaman ilk Iğdır'da, en son Çanakkale'de açılır.
* Türkiye, 2016 yılından itibaren yaz-kış saati uygulamasını kaldırmış ve **Yıl Boyunca İleri Saat (Yaz Saati)** olan **+3. Saat Dilimini (45° Doğu Iğdır Meridyeni)** ülkenin Ortak Saati (Ulusal Saat) olarak kabul etmiştir.`,
            mnemonics: [
                {
                    title: 'Orta Kuşak Kanıtları (ABCD)',
                    text: 'A (Akdeniz İklimi), B (Batı Rüzgarları), C (Cephe Yağışları), D (Dört Mevsim)'
                },
                {
                    title: 'Enlem Etkisi (Kuzeye Gidildikçe Azalanlar)',
                    text: 'GÜNCEL: Güneş açısı, Çizgisel Hız, Tuzluluk Oranı, Kalıcı Kar Sınırı.'
                }
            ],
            warnings: [
                'DİKKAT! "Aynı anda 4 mevsim özelliklerinin yaşanması" (örneğin Antalya\'da denize girilirken Erzurum\'da kayak yapılması) MATEMATİK konum değil, YER ŞEKİLLERİ (Özel Konum) sonucudur!',
                '"Yıl içinde sırasıyla 4 mevsimin yaşanması" ise MATEMATİK konum (Orta kuşak) sonucudur. ÖSYM bu ikisini çok sık karıştırarak sorar.'
            ],
            teacherNotes: [
                'Sınavda size bir il verilip "Bu ilin yerel saati ulusal saate çok yakındır" diyorsa, 45° Doğu Meridyenine (Iğdır tarafına) en yakın ili (Örn: Ağrı, Kars, Van) seçmelisiniz.',
                'Türkiye Yengeç Dönencesinin kuzeyinde olduğu için cephe yağışları görülür ancak hiçbir zaman dik açı almaz.'
            ],
            keyPoints: [
                '36° - 42° Kuzey Paralelleri',
                '26° - 45° Doğu Meridyenleri',
                'Doğu-Batı arası 76 dakika fark.',
                'Ulusal Saat: +3 Iğdır (45° Doğu)',
                'Gölge yönü hep Kuzey'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye'nin Orta Kuşakta yer almasının sonuçları arasında aşağıdakilerden hangisi gösterilemez?",
                    options: [
                        "Yıl içinde dört mevsimin belirgin yaşanması",
                        "Batı rüzgarlarının etkisinde kalması",
                        "Kuzeyden esen rüzgarların sıcaklığı düşürmesi",
                        "Akdeniz iklim kuşağında yer alması"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Kuzeyden esen rüzgarların sıcaklığı düşürmesi, Türkiye'nin 'Kuzey Yarım Küre'de' bulunmasının sonucudur. Güney Yarım Küre'deki orta kuşak ülkelerinde (ör. Arjantin) batı rüzgarları ve dört mevsim görülür ancak kuzeyden esen rüzgarlar sıcaklığı 'artırır'."
                },
                {
                    question: "Bir yerel saat sorusunda, Türkiye'de güneşin ufuk düzlemindeki konumunun illere göre farklılık göstermesi hangi kavramla doğrudan ilişkilidir?",
                    options: [
                        "Enlem (Paralel)",
                        "Yükselti",
                        "Göreceli Konum",
                        "Boylam (Meridyen)"
                    ],
                    correctOptionIndex: 3,
                    explanation: "Güneşin ufuk düzlemindeki konumu (doğuşu, batışı, tepe noktasına ulaşması) tamamen yerel saati belirler ve bu durum Dünya'nın günlük hareketi ile boylamların (meridyenlerin) bir sonucudur."
                }
            ]
        },
        {
            id: 'ozel-konum',
            slug: 'turkiyenin-ozel-goreceli-konumu',
            title: '2. Özel (Göreceli) Konum ve Etkileri',
            content: `Dünya üzerindeki bir yerin; denizlere, okyanuslara, kıtalara, boğazlara, kanallara, yer şekillerine (yükselti), yeraltı-yerüstü zenginliklerine ve komşu ülkelere göre olan konumuna **Özel (Göreceli) Konum** denir.

Matematik konum paraleller ve meridyenlerle sayılara dökülebilirken, Özel konum tamamen ülkenin fiziki ve beşeri özelliklerine (dağlar, denizler, jeopolitik) bağlıdır.

## Türkiye'nin Özel Konumunun Sonuçları

### 1. Kıtalararası Köprü Olması (Jeopolitik Önem)
* Asya, Avrupa ve Afrika kıtalarının birbirine en çok yaklaştığı bölgede (Eski Dünya Karaları) yer alır.
* İstanbul ve Çanakkale boğazlarına sahip olması, Karadeniz'e kıyısı olan ülkelerin (Rusya, Ukrayna vb.) okyanuslara açılabilmesi için Türkiye'yi zorunlu kilit noktası yapar.
* Önemli **Enerji Koridorları** (Boru hatları: TANAP, Türk Akımı, Bakü-Tiflis-Ceyhan) Türkiye üzerinden geçer. Ortadoğu ve Kafkaslardaki petrolün/doğalgazın Avrupa'ya güvenle ulaşmasını sağlar.
* Farklı siyasi, kültürel ve ekonomik bölgeler (Balkanlar, Ortadoğu, Kafkaslar) arasında tampon ve geçiş bölgesidir.

### 2. Üç Tarafının Denizlerle Çevrili Olması (Yarımada Özelliği)
* Denizellik etkisi sayesinde kıyı bölgelerde ılıman iklimler görülür (Sıcaklık farkı azdır).
* Ancak dağların Karadeniz ve Akdeniz'de kıyıya paralel uzanması nedeniyle, bu denizel hava (nemli ılıman hava) iç kesimlere sokulamaz. Bu da Özel Konumun bir sonucudur.

### 3. Ortalama Yükseltinin Fazla Olması (1132 m)
Türkiye, Avrupa genelinden çok daha yüksek, genç oluşumlu ve engebeli bir ülkedir.
* **Batıdan Doğuya Doğru Yükselti Artar:** Ege kıyılarından (İzmir) başlayıp Doğu Anadolu'ya (Erzurum) doğru gidildikçe yükselti aralıksız artar.
* **Sıcaklık Azalır:** Aynı enlemde (yan yana) yer alan İzmir, Afyon, Kayseri ve Van illerini düşündüğümüzde, doğuya gidildikçe güneş açısı değişmese bile hava soğur. Bunun tek sebebi **yükseltidir** (Özel konum).
* **Tarım Ürünleri Olgunlaşma Süresi Uzaması:** Doğuya doğru çıkıldıkça buğday daha geç hasat edilir. Karların yerde kalma süresi uzar.
* **Akarsu Hızları:** Yüksek bir ülke olduğumuz için akarsularımız dar ve derin vadilerden hızla akar. Hidroelektrik enerji potansiyelimiz (baraj potansiyeli) Avrupa'da Rusya ve Norveç'ten sonra 3. sıradadır.
* **Yol Yapım Maliyeti:** Dağlık ve engebeli arazi nedeniyle viyadük ve tünel açma maliyetleri yüksektir. Kuzey-Güney yönlü ulaşım çok zordur (geçitlerle sağlanır), Doğu-Batı yönlü ulaşım ise dağların uzanışından dolayı daha kolaydır.

### 4. Genç Jeolojik Oluşumlu Olması (Fay Hatları)
* Türkiye 3. jeolojik zamanın (Tersiyer) sonu ile 4. jeolojik zamanın (Kuvaterner) başlarında bugünkü görünümünü toptan yükselerek (Epirojenez) almıştır.
* Bu genç oluşumun kanıtları: **Sık sık şiddetli depremler yaşanması (Fay hatları: KAF, DAF, BAF)**, **Sıcak su (Jeotermal/Kaplıca) kaynaklarının çokluğu** ve **Linyit kömürü, Bor, Tuz yataklarının yaygınlığıdır**.

### Sıcaklık Farklılıklarında "Aynı Enlem" Vurgusu
ÖSYM'nin en sevdiği kalıptır: *"Aynı enlem üzerinde bulunan İzmir ve Van'da kış sıcaklıklarının farklı olması..."* 
Soruda **Aynı enlemde olmalarına rağmen...** deniyorsa, o farklılık kesinlikle enlem (matematik) kaynaklı olamaz! Sebep mecburen **Yükselti, Denizellik/Karasallık (Özel Konum)** olmak zorundadır.`,
            mnemonics: [
                {
                    title: 'Genç Ülke (3. Zaman) Kanıtları',
                    text: 'Faydalan (Fay Hatları, Jeotermal Su, Linyit/Bor Yatakları, Yüksek ve Engebeli Arazi)'
                }
            ],
            examAnalysis: "ÖSYM aynı soru içinde hem matematik hem özel konumu harmanlamayı sever. 'Aynı anda' farklı mevsim yaşanması yükselti ve engebe ile; 'sırasıyla' dört mevsim yaşanması enlemledir.",
            teacherNotes: [
                '"Gerçek Alan ile İzdüşüm Alan" arasındaki farkın fazla olması, o yerin DAĞLIK ve ENGEBELİ olduğunu kanıtlar (Doğu Anadolu gibi). Bu tamamen Özel Konumdur.',
                'Karadeniz ve Akdeniz\'deki dağların (Kuzey Anadolu Dağları ve Toroslar) uzanış yönü Doğu-Batı iken, Ege Dağlarının uzanış yönü de Doğu-Batıdır. Ancak Ege\'nin dağları kıyıya dik geldiği için Ege\'de falez oluşmaz, girinti çıkıntı çoktur.'
            ],
            keyPoints: [
                'Doğuya gidildikçe artan/kötüleşen her şey yükseltiyle açıklanır.',
                'Deprem, Linyit, Kaplıca = Genç ülke (3. zaman).',
                'Türkiye transit enerji ve ticaret koridorudur.',
                'Aynı enlemdeki iki ilin sıcaklığı farklıysa sebep Asla Enlem olamaz (Karasallık veya Yükseltidir).'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye'de kısa mesafede iklim tiplerinin değişmesi (örneğin Torosların eteklerinde bahar havası varken zirvesinde kar fırtınası olması) aşağıdakilerden hangisiyle açıklanır?",
                    options: [
                        "Orta kuşakta bulunmasıyla",
                        "Kısa mesafede yer şekillerinin ve yükseltinin değişmesiyle",
                        "Güneş ışınlarının gelme açısıyla",
                        "Üç tarafının denizlerle çevrili olmasıyla"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Kısa mesafede iklim, bitki örtüsü ve tarım ürünlerinin aniden değişmesi yer şekillerinin çeşitliğinin ve yükseltinin ani değişiminin, yani özel (göreceli) konumun kesin bir kanıtıdır."
                },
                {
                    question: "Çanakkale ve Erzurum yaklaşık olarak aynı enlem (paralel) üzerinde bulunur. Ancak Erzurum'da kışlar çok daha sert geçer. Bu durumun temel nedeni nedir?",
                    options: [
                        "Enlem farkı",
                        "Boylam farkı",
                        "Yükselti ve Karasallık farkı",
                        "Ekvator'a olan uzaklık"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Aynı enlem üzerinde güneşten gelen enerji (gelme açısı) eşittir. Sıcaklığın Erzurum'da düşük olması doğuya gidildikçe yükseltinin ve deniz etkisinden uzaklaşmanın (karasallık) aniden artmasına (Özel Konum) bağlanır."
                }
            ]
        },
        {
            id: 'harita-bilgisi-komsular',
            slug: 'harita-bilgisi-ve-komsu-ulkeler',
            title: '3. Harita Bilgisi, Ölçek ve Komşu Ülkeler',
            content: `## Harita Bilgisi

Harita, yeryüzünün tamamının veya bir bölümünün kuşbakışı görünümünün belirli bir ölçeğe göre düzleme aktarılmasıdır.

### Ölçek Türleri

#### 1. Kesir (Sayı) Ölçek
"1/50.000" veya "1:50.000" biçiminde gösterilir.
* Payda ne kadar **büyükse** harita ölçeği o kadar **küçüktür** (daha geniş alan — daha az ayrıntı).
* Payda ne kadar **küçükse** harita ölçeği o kadar **büyüktür** (daha dar alan — daha fazla ayrıntı).

**Örnek:** 1/25.000 ölçekli harita, 1/100.000 ölçekli haritadan daha büyük ölçeklidir.

> [!TIP]
> **Büyük ölçekli harita = Küçük alan + Çok ayrıntı (Şehir planı, arazi haritası)**
> **Küçük ölçekli harita = Büyük alan + Az ayrıntı (Türkiye, Dünya haritası)**

#### 2. Çizgi (Grafik) Ölçek
Harita üzerindeki çizginin gerçek mesafeyi göstermesi.

### Ölçek Hesabı
* **Harita mesafesi = Gerçek mesafe ÷ Ölçek paydası**
* Gerçek uzunluk = Harita uzunluğu × Ölçek paydası

**Örnek:** 1/200.000 ölçekli haritada 5 cm'lik yol → Gerçek uzunluk = 5 × 200.000 = 1.000.000 cm = **10 km**

### Harita Projeksiyon Tipleri (ÖSYM Sorar)

| Projeksiyon | Şekil | Uygun Alan | Özellik |
|-------------|-------|-----------|---------|
| **Silindirik (Mercator)** | Silindir | Ekvator çevresi | Şekil bozulmaz, alan bozulur (kutuplar büyür) |
| **Konik** | Koni | Orta enlemler (Türkiye gibi) | En uygun Türkiye haritası için |
| **Düzlemsel (Azimuthal)** | Düzlem | Kutuplar | Kutup haritaları |

### Kontur (İzohips) Haritaları
* Deniz seviyesinden eşit yükseklikteki noktaları birleştiren eğrilere **izohips (kontur)** denir.
* İzohipsler sık aralıklıysa arazi **diktir (sarp)**, seyrekse **yatıktır**.
* İzohipsler birbirini kesmez.

---

## Türkiye'nin Komşu Ülkeleri

Türkiye **8 ülkeyle** kara sınırına sahiptir.

### Kara Komşuları (Batıdan doğuya, saat yönünde)
1. **Yunanistan** (Batı) — Edirne üçgeni, Meriç Nehri sınır
2. **Bulgaristan** (Kuzeybatı) — Trakya
3. **Gürcistan** (Kuzeydoğu) — Artvin
4. **Ermenistan** (Doğu) — Iğdır, Ağrı
5. **Azerbaycan (Nahçıvan)** (Doğu) — Iğdır sınırı
6. **İran** (Doğu) — Ağrı, Van, Hakkari
7. **Irak** (Güneydoğu) — Hakkari, Şırnak, Mardin
8. **Suriye** (Güney) — Hatay, Gaziantep, Şanlıurfa, Mardin

> [!NOTE]
> Türkiye kara sınırı uzunluğu bakımından en uzun sınırı **İran** ile paylaşır.

### Deniz Komşuları
* **Karadeniz'de:** Rusya, Ukrayna, Moldova (dolaylı), Romanya, Bulgaristan, Gürcistan
* **Ege'de:** Yunanistan
* **Akdeniz'de:** Kıbrıs, Lübnan, İsrail, Mısır, Libya

---

## Türkiye'nin Jeopolitik Önemi

Türkiye'nin coğrafi konumu ona **küresel ölçekte stratejik bir önem** kazandırmaktadır.

### 1. Kıtalararası Köprü
* Asya ve Avrupa kıtalarının en dar noktasında (İstanbul ve Çanakkale Boğazları).
* Kara yoluyla Avrupa'dan Asya'ya veya Afrika'ya geçilecekse Türkiye üzerinden geçmek zorunludur.

### 2. Boğazlar Hâkimiyeti (Montrö Sözleşmesi)
* **İstanbul Boğazı** ve **Çanakkale Boğazı** üzerindeki egemenlik Türkiye'ye özel haklar sağlar.
* 1936 Montrö Sözleşmesi ile askeri gemilerin geçişi Türkiye'nin denetimine bırakılmıştır.
* Karadeniz'e kıyısı olan Rusya, Ukrayna gibi ülkeler için boğazlar hayati önemdedir.

### 3. Enerji Koridoru
* **BTC (Bakü-Tiflis-Ceyhan) Petrol Boru Hattı:** Azerbaycan petrolünü Türkiye üzerinden Akdeniz'e taşır.
* **TANAP (Trans Anadolu Doğalgaz Boru Hattı):** Azerbaycan gazını Türkiye üzerinden Avrupa'ya taşır.
* **TürkAkım:** Rusya'dan Karadeniz altından Türkiye'ye ulaşan gaz boru hattı.
* Bu hatlar Türkiye'yi **enerji merkezi (hub)** konumuna taşımaktadır.

### 4. NATO ve Batı Savunması
* Türkiye, NATO'nun Rusya'ya en yakın güney kanadıdır.
* İncirlik (Adana) ve Kürecik (Malatya) üsleri stratejik öneme sahiptir.`,
            mnemonics: [
                {
                    title: 'Türkiye\'nin 8 Kara Komşusu (Saat yönünde)',
                    text: 'YBGEAIS: Yunanistan-Bulgaristan-Gürcistan-Ermenistan-Azerbaycan-İran-Irak-Suriye'
                }
            ],
            warnings: [
                'Büyük ölçekli harita = küçük alan + çok ayrıntı. "Büyük ölçek = büyük alan" sanılmamalı!',
                'Türkiye 8 ülkeyle kara sınırı paylaşır. 9 veya 7 diyenlere dikkat!'
            ],
            keyPoints: [
                'Büyük ölçek: Küçük alan, çok detay (1/25.000).',
                'Küçük ölçek: Büyük alan, az detay (1/1.000.000).',
                'Kara komşusu sayısı: 8.',
                'En uzun kara sınırı: İran.',
                'Boğazlar Montrö Sözleşmesi (1936) ile Türkiye kontrolünde.'
            ],
            inlineQuizzes: [
                {
                    question: "1/25.000 ölçekli bir topografya haritası ile 1/500.000 ölçekli bir fiziki harita karşılaştırıldığında hangisi doğrudur?",
                    options: [
                        "1/500.000 ölçekli harita daha büyük ölçeklidir ve daha fazla ayrıntı içerir",
                        "1/25.000 ölçekli harita daha büyük ölçeklidir, daha küçük alan gösterir ama çok daha fazla ayrıntı içerir",
                        "Her iki harita da aynı alanı gösterir, yalnızca boyut farkı vardır",
                        "1/500.000 ölçekli haritada dağ eğrileri daha sık çizilir"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Ölçek kesrinde payda küçüldükçe ölçek büyür. 1/25.000, 1/500.000'den çok daha büyük ölçeklidir. Büyük ölçekli haritalar küçük bir alanı daha ayrıntılı gösterir (bina, sokak görünür), küçük ölçekli haritalar ülkeleri, kıtaları gösterir."
                }
            ]
        }
    ]
};
