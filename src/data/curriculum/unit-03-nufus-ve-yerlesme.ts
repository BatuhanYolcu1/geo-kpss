import { NoteUnit } from '@/types/notes';

export const unit03: NoteUnit = {
    id: 'unit-03',
    title: 'Beşeri Coğrafya: Nüfus ve Yerleşme',
    icon: 'Users',
    sections: [
        {
            id: 'nufus-ozellikleri',
            slug: 'turkiye-nufusunun-yapisi-ve-dagilisi',
            title: '1. Nüfusun Dağılışını Etkileyen Faktörler',
            content: `Türkiye nüfusunun dağılışı dengeli değildir. Ülkenin bazı yerleri çok kalabalıkken, bazı yerleri ıssızdır. Bu dağılışı belirleyen temel etmenler ikiye ayrılır: Doğal ve Beşeri Faktörler.

## Doğal (Fiziki) Faktörler
Doğanın kendisinden kaynaklanan, insanın değiştirmekte zorlandığı faktörlerdir.
1. **İklim:** İnsanlar ılıman ve yağışlı iklimleri seçer (Marmara, Ege, Akdeniz, Karadeniz). Çok kurak alanlar (Tuz Gölü) veya çok soğuk ve karlı uzun kışların yaşandığı yerler (Erzurum-Hakkari) tenha olur.
2. **Yer Şekilleri:** Yükseltinin arttığı ve engebenin sarp olduğu yerler tarlaya, yola ve sanayiye uygun değildir. Seyrek nüfusludur (Doğu Karadeniz Dağları, Toroslar, Hakkari, Menteşe, Yıldız Dağları, Biga-Çanakkale).
3. **Su Kaynakları:** İnsan yerleşmelerinin ve tarımın can damarıdır. Genellikle şehirler ve yerleşmeler nehir kenarlarına / ovalarına kurulur (Çukurova, Bafra, Gediz).
4. **Toprak Verimliliği:** Volkanik (tüflü, üzüm/patates tarımına uygun) ve Alüvyal (Delta) topraklı ovalar nüfusu çok çeker. Ancak karstik (eriyebilen, suları tutmayan, verimsiz kireçtaşı - Teke/Taşeli) veya tuzlu sığ bataklıklar (Tuz Gölü) nüfusu iter.

## Beşeri ve Ekonomik Faktörler 
İnsanın yarattığı iş imkanlarına dayalı dağılıştır. Modern zamanda kıyılarda nüfusun çok olmasının ana sebebi deniz değil, bu ekonomik faktörlerdir.
1. **Sanayi:** Türkiye'de nüfus dağılışını **en çok** etkileyen faktördür. İş kapısıdır. Sanayinin geliştiği İstanbul, Kocaeli, Bursa, İzmir, Adana, Gaziantep yoğun nüfusludur.
2. **Tarım:** Çukurova, Bursa ovası, Bafra-Çarşamba ovalarında tarıma dayalı nüfusludur. (Sadece tarım yapan kentler gelişemez. Örneğin Hakkari kırsaldır, oransal olarak çoğu tarım yapar ama nüfus azdır).
3. **Ulaşım:** Ticaretin ve sanayinin anasıdır. Ana yollar üzerinde (Örn: Afyon, Kayseri, Ankara, Eskişehir), deniz limanlarına (Örn: Mersin, İzmir) sahip şehirler gelişmiştir. (Tersi örnek: Karadeniz'in arkasındaki dağlar yüzünden Sinop limanının içerisi ile yolu *hinterlandı* yoktur. O yüzden Sinop en seyrek nüfuslu ve geri kalmış Karadeniz illerinden biridir.)
4. **Maden ve Enerji:** Yeraltı kaynaklarının çıkarıldığı yerlerde bazen dağ bile olsa, çok büyük göç ve şehirleşme görülür. En bariz örneği: **Zonguldak (Kömür), Batman (Petrol - eski bir köy iken kömürle metropol oldu), Soma (Linyit).**
5. **Turizm:** Antalya, Muğla, Nevşehir (Kapadokya). Mevsimsel olarak da çok büyük nüfus çekerler. Yaz aylarında Antalya'nın nüfusu katlanır.

---

### Nüfus Dağılışındaki Uç Örnekler İstisnalar (ÖSYM Sorar)

* **Seyrek Nüfuslu / Issız Yerler ve Nedeni:**
  * **Yıldız Dağları Bölümü (Kırklareli):** Sebebi çok soğuk olması vb değil, **İklimi uygun ve alçak olmasına rağmen** "Ana taşıt yollarına sapa (ters/kör) kalması" ve "Engebelik"tir.
  * **Menteşe Yöresi (Muğla civarı):** "İklimi harika, yağışı gür, denizi güzel." E, peki neden nüfus az? Cevap: **"Aşırı sarp ve dağlık (engebeli) arazi!"**. Muğla, Ege'nin en kırsal, en az gelişmiş iç yapısına sahiptir.
  * **Biga Yarımadası (Çanakkale):** Çanakkale kör noktadır. Boğaz vardır ama ticaret ağı İstanbul'da dönmektedir. Yine engebeli ve ormanlıktır, ulaşım ağına terstir.
  * **Teke ve Taşeli Platoları (Akdeniz):** Dağlık ve engebeliler, üstelik **Karstik Yapı (Verimsiz toprak)** nedeniyle sadece kıl keçisi otlatılır. Tarım yapılamaz, bu sebeple bomboştur.
  * **Tuz Gölü Çevresi:** Karasal ve **Kurak** (su yok) olduğu için tenhadır. Şiddetli de buharlaşma vardır.
  * **Hakkari Yöresi:** Doğu Anadolu'daki **şiddetli engebe (buzullar, sarp kayalıklar)** ve **sert, donuk iklim** yüzünden tenhadır.

* **Yoğun Nüfuslu / Kalabalık Yerler ve Nedeni:**
  * **Çatalca-Kocaeli (Marmara):** İstanbul-İzmit hattı. Hem Asya-Avrupa geçişi (Ulaşım), hem İklim ılımlı (Tüm iklimler geçişlidir), Hem de Türkiye'deki Sanayi ve Ticaretin kalbidir.
  * **Kıyı Ege (İzmir-Aydın-Manisa Grabenleri):** Hem verimli Çöküntü (Tektonik) ovaları, hem İklimin tatlılığı, Hem Liman (Ticaret) avantajıdır.
  * **Doğu Karadeniz Kıyıları:** Özellikle Rize-Trabzon hattının *deniz seviyesindeki incecik kıyısı* tıklım tıklımdır. *Dikkat! Tüm Karadeniz değil, sadece kıyı şeridi yoğundur.* Çünkü arka o kadar sarp bir dağdır ki herkes denize inmek zorunda kalmıştır. (Çay tarımı vs). Buna **Çizgisel Yerleşme** denilir.`,
            mnemonics: [
                {
                    title: 'Seyrek Nüfuslanan Zor Coğrafyalar',
                    text: 'Yırtık TEM (Yıldız, Teke-Taşeli, Erzurum-Kars-Hakkari, Menteşe)'
                }
            ],
            warnings: [
                'Doğu Karadeniz\'de nüfus YOĞUNDUR ibaresi şaşırtmacadır. Dağlık kesim bomboştur, o nüfusun hepsi daracık sahil şeridinde sıkıştığı için Karadeniz sahili Rize Trabzon hattı yoğun gözükür.'
            ],
            keyPoints: [
                'Nüfusun %93\'ü kentlerde, %7\'si kırlarda (köylerde) yaşar.',
                'İklim ve bitki örtüsü uygun olup tenha kalan 4 bölge: Yıldız Dağları, Biga, Gelibolu, Menteşe.',
                'Nüfus dağılışında EN BELİRLEYİCİ beşeri faktör Sanayileşmedir.',
                'Türkiye nüfusu "asimetrik" ve dengesiz bir dağılış sergiler (Marmara şişkin, Doğu cılız)'
            ],
            inlineQuizzes: [
                {
                    question: "İklim şartlarının elverişli olmasına ve deniz kıyısında yer almasına rağmen, Türkiye'de Menteşe (Muğla), Teke (Antalya batısı) ve Biga (Çanakkale) yarımadalarının ortak özelliği dikkate alındığında nüfus yoğunluklarının düşük olmasının MÜŞTEREK (ortak) temel nedeni nedir?",
                    options: [
                        "Karstik arazi yapısına sahip olmaları",
                        "Sanayi kollarının hiç bulunmaması",
                        "Yer şekillerinin aşırı engebeli ve dağlık olması",
                        "Önemli turizm bölgeleri olmamaları"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Biga ve Menteşe karstik değildir (Teke karstiktir). Bu üç yörenin ortak olarak seyrek nüfuslu olmasının sebebi, şiddetli dağlık ve sarp engebeli arazi yapısına (Özel Konum) sahip olmaları ve ulaşım yollarına sapa ve kapalı kalmalarıdır."
                }
            ]
        },
        {
            id: 'nufusun-yapisal-ozellikleri',
            slug: 'turkiye-nufusunun-yapisal-ozellikleri',
            title: '2. Nüfusun Sayımı, Yapısal Özellikleri',
            content: `Türkiye'de ilk resmi ve düzenli nüfus sayımı Cumhuriyet döneminde **1927** yılında yapılmıştır.
2007 yılından bu yana modern sisteme, **Adrese Dayalı Nüfus Kayıt Sistemi (ADNKS)**'ne geçilmiştir. Artık evlere kapanıp sokağa çıkma yasağıyla değil, e-devlet (MERNİS) üzerinden otomatik ikametgah okumasıyla sayılmaktadır. *Bu sayımı Türkiye İstatistik Kurumu (TÜİK) yapar.*

### Türkiye Nüfus Piramidinin ve Özelliklerinin Analizi
Piramidin tabanı doğumu (0-14 yaş çocuk), tepesi ölümü (65+ yaşlı), ortası ise üretken/çalışan (15-64 yaş) nüfusu gösterir. 
Gelişmiş ülkelerde piramit dikey bir kule, doğurmayan çan veya arı kovanı şeklindedir (Japonya, Almanya). 
Geri kalmış ülkelerde ise piramit tam bir üçgendir (Tabanı feci geniş - Doğan çok, Tepesi iğne ucu gibi ince - Yaşlı az, çabuk ölüyorlar - Afrika).

**Türkiye Nüfusunun Bugünü (2020 sonrası trendler):**
1. **Piramidin Tabanı Daralmaktadır:** Aile yapısının küçülmesi, kadınların iş hayatına katılımı (kariyer vb.), evlilik yaşının yükselmesi, kentleşme oranının artmasıyla beraber **Doğum Oranlarımız ve Nüfus Artış Hızımız Çok Hızlı Bir Şekilde DÜŞMEKTEDİR.** Hatta son açıklanan verilerde tarihimizin en düşük nüfus artış hızı yaşanıyor (binde 1'lere düştü - Covid'in de etkisi var).
2. **Piramidin Tepesi Genişlemektedir:** Sağlık sisteminin gelişmesi ve beslenmeyle birlikte **Ortalama Yaşam Süremiz UZUYOR (80'e dayandı).** Bu nedenle **Yaşlı Nüfus Oranımız ARTMAKTADIR.** Türkiye "Genç bir nüfustur" lafı yavaş yavaş bitiyor, Türkiye **"Yaşlanan"** bir ülkedir artık.
3. **Kadın/Erkek Oranı:** Toplam nüfusa bakıldığında %50 Erkek, %50 Kadındır (Erkekler yüzdelik dilimde çok ufak bir tık fazladır). Ancak 65 yaş üzeri (tepeye) kısma bakıldığında "Kadın Ömrü" daha uzundur, piramidin en tepesi kadınların lehine şişkindir.
4. **Çalışan (Aktif) Nüfus ve Bağımlı Nüfus:** 
   * **Bağımlı (Tüketici):** Çalışmayan, bakıma muhtaç olan (Çocuklar + Yaşlılar). Türkiye'de genç olan tüketici nüfus payı çok büyüktür.
   * **Sektörel Dağılım:** Çalışan aktif nüfusun ezici bir çoğunluğu (**%60 civarı**) **HİZMET SEKTÖRÜNDEDİR** (Eğitim, ulaşım, banka, memuriyet). İkinci sırada **%25 ile Sanayi**, son sırada ise çok büyük bir düşüşle **%15 ile Tarım** yer almaktadır. Eskiden Cumhuriyetin ilk yıllarında Türkiye %80 tarım çalışanına sahipti, makineleşme ve köylerden şehre göç bunu bitirdi.
5. **Eğitim ve Okuma-Yazma:** Türkiye'de okuma yazma bilmeyenlerin oranı %2'nin altındadır, buralarda da en büyük eksik geçmiş yıllardan gelen yaşlı ve kırsal kesimdeki kadın nüfusudur. Ancak oran hızla tamamen kapanmaktadır. Üniversite mezunu oranı da şiddetle artmaktadır.

> [!WARNING]
> MÜKEMMEL ÖSYM TUZAĞI: "Türkiye'nin Nüfus Artış Hızı 1985'ten günümüze kadar sürekli azalmaktadır (Binde 25'ten Binde 1'lere düştü). O HALDE, Türkiye'nin Nüfusu AZALMAKTADIR diyebilir miyiz?"
> CEVAP: KESİNLİKLE HAYIR! Bir otobüs saatte 100km hızla giderken ayağını gazdan yavaşça çekiyor olsun ve hızı saniyede 10km'ye düşsün. Otobüs geri geri mi gidiyor? HAYIR! Otobüs "Daha yavaş olsa da" hala İLERİ GİDİYOR.
> **Nüfus Artış "Hızı" sıfırın altına düşmediği sürece (+ değerlerde olduğu sürece), Türkiye'nin nüfus MİKTARI sürekli ama sürekli artmaktadır.** Sadece eskisi gibi yılda 1 milyon 1 milyon değil de; yılda 100 bin 100 bin "yavaş yavaş artmaktadır". Bu yüzden Miktar grafiği hep yukarı çıkar.`,
            keyPoints: [
                'Doğum Oranı = Düşüyor',
                'Ölüm Oranı = Düşüyor',
                'Ortalama Ömür = Uzuyor',
                'Nüfus Artış Hızı = Azalıyor',
                'Toplam Nüfus Miktarı = (Hız 0 ın altına inmediği için) SÜREKLİ ARTIYOR.',
                'Çalışanların dağılımı: Hizmet > Sanayi > Tarım'
            ],
            inlineQuizzes: [
                {
                    question: "Yukarıdaki bilgiler dikkate alındığında, son 40 yıl içinde Türkiye'nin nüfus artış hızının genel bir düşüş trendinde (binde 28'den binde 2'lere gerilemesi) olmasına bakılarak hangi sonuca KESİN olarak ulaşılabilir?",
                    options: [
                        "Dış ülkelere göç edenlerin sayısının çok fazla olduğuna",
                        "Türkiye'de toplam nüfus miktarının her yıl giderek azaldığına",
                        "Yaşlı bağımlı nüfus oranının ülke genelinde azaldığına",
                        "Nüfus miktarının her yıl bir önceki yıla göre daha az arttığına"
                    ],
                    correctOptionIndex: 3,
                    explanation: "Nüfus artış hızı grafiği pozitif (+) yöndedir ancak ivmesi (hızı) düşüktür. Bu demektir ki nüfus miktar olarak mecburen sürekli ARTIYOR; ancak sepete eklenen insan sayısı her yıl bir öncekinden daha az oluyor (Miktar hala katlanarak değil, sürünerek de olsa yukarı doğru tırmanıyor)."
                }
            ]
        },
        {
            id: 'nufus-yogunluklari',
            slug: 'aritmetik-tarimsal-fizyolojik-yogunluk',
            title: '3. Nüfus Yoğunlukları (Matematiği)',
            content: `Nüfusu ölçerken sadece "şu ilde 1 milyon kişi var" demek yanıltıcı olabilir. 1 milyon kişiyi devasa Konya ovasına mı koydunuz, yoksa fındık kadar Yalova'ya mı? Sıkışıklığı anlamak için **Yoğunluk** dediğimiz formüller kullanılır.

### 1. Aritmetik Nüfus Yoğunluğu (A.N.Y)
"Toplu Konut Sıkışıklığı"
* **Formül:** 'Toplam Nüfus / Ülkenin(veya İlin) Toplam Yüzölçümü(Alan)'
* Bu doğrudan "Kilometrekare alan başına kaç insan düşüyor" hesabıdır.
* Türkiye'nin A.N.Y'si 111 kişi/km² civarıdır.
* **En Yüksek ANY Nerede?:** Alanı minik (küçük) ama nüfusu devasa (mega) olan **İstanbul** açık ara öndedir. İkincisi Sanayi ağırlıklı **Kocaeli** dir.
* **En Düşük ANY Nerede?:** Nüfusu kalabalık olmasına rağmen, sınırları (yüzölçümü) o kadar absürt derecede büyüktür ki, kişi başına devasa boşluk kalır: **Konya**! (Daha güncel veriye göre Tunceli veya Erzincan da olabilmektedir. Boşluk arıyoruz).

### 2. Tarımsal Nüfus Yoğunluğu (T.N.Y)
"Tarlada birbirine omuz omuza çarpan Çiftçiler"
* **Formül:** 'Sadece Tarımda Çalışan(Çiftçi) Nüfus / İlin Toplam Tarım Alanı'
* Bu formülde tarımı "Dağlık - Obalık" olmak belirler.
* **En Yüksek T.N.Y Nerede? (Nereler dağlık ve tarlalar küçük?):** Bir il felaket dağlıksa (Rize, Trabzon, Hakkari, Menteşe) o ilde düz arazi (tarım tarlası) çok çok UFAK ve dardır. Ama köylüler çok sayıdadır. Bu insanlar o ufacık çay tarlasına veya buğdaylık yamaca bir doluşurlar, adeta metrobüs gibi tarlada yoğunluk oluşur. **Dağlık ve Engebeli illerde (Örn: Rize, Hakkari) Tarımsal Yoğunluk FAZLADIR.**
* **En Düşük T.N.Y Nerede?:** Bir il dümdüz bir sini tepsisi (Çukurova, Konya Ovası, Edirne Ergene) gibiyse, traktörle günlerce sürersin tarlayı bitiremezsin. O kadar insan o dev tarlaya dağılır ki kimse birbirini görmez bile. Bu yüzden **Ova ve Düz yerlerde (Örn: Konya, Şanlıurfa, Adana) Tarımsal Yoğunluk AZDIR.** (İçine Traktör girebildiği için yoğunluğu traktör yutmuştur).

### 3. Fizyolojik Nüfus Yoğunluğu (F.N.Y)
"Kaç Kişiye Bir Lokma Ekmek (Tarım) Düşüyor"
* **Formül:** 'Tüm Ülke(Şehirli köylü dahil) Toplam Nüfus / Sadece Tarım Alanı'
* Sadece Türkiye için bir refah/gıdaya ulaşma kıstasıdır. Bu formülde çok büyük farklılık görünmez, sadece **İstanbul** da fizyolojik yoğunluk tepe yapar. Çünkü tarım alanı sıfıra yakındır (betondur) ama beslenmesi gereken toplam insan milyonlarcadır. Tarlada ekin yok ama boğazı doyurulacak insan milyar tane.

> [!NOTE]
> ÖSYM der ki: "Rize'de Tarımsal Nüfus yoğunluğu Konya'dan çok daha yüksektir. Bunun en temel nedeni nedir?"
> Cevap: İklim falan değildir. Sebebi; **Rize'nin yer şekillerinin KONYA'ya oranla felaket ENGEBELİ olması ve tarım (düz) alanlarının inanılmaz dar olmasıdır.**`,
            teacherNotes: [
                'Bir ilde Makineleşme (Traktör kullanımı) artıyorsa, bu o ilin Düz olduğunu kanıtlar (Dağda sarp yamaçta traktör tekerlek çeviremez takla atar, ineklerle saban bağlarlar). Traktör giren ilde "İşgücü(İnsan)ne" ihtiyaç kalmaz. İnsanlar (kırsal nüfus) işsiz kalıp şehirlere Göç ederler. O vakit o İlin Tarımsal Nüfus Yoğunluğu hızla DÜŞMEYE başlar.'
            ],
            keyPoints: [
                'Aritmetik Yoğunluk: Alan küçük Nüfus büyük yerler (İstanbul)',
                'Tarımsal Yoğunluk YÜKSEK: Rize, Artvin gibi Dağlık yamaçlar, Traktör giremeyenler.',
                'Tarımsal Yoğunluk DÜŞÜK: Çukurova, Konya, Edirne (Dümdüz, Traktörün cirit attığı yerler)'
            ],
            inlineQuizzes: [
                {
                    question: "Aşağıdaki illerin yer şekli (fiziki) haritaları incelendiğinde, hangisinde makineleşmeye bağlı tarımsal insan iş gücü göçünün ve buna bağlı olarak Tarımsal Nüfus Yoğunluğunun DÜŞME ihtimali EN AZDIR?",
                    options: [
                        "Artvin",
                        "Konya",
                        "Edirne",
                        "Adana"
                    ],
                    correctOptionIndex: 0,
                    explanation: "Artvin sarp bir yerleşkedir. Dağlıktır (Karadeniz). Dağlık arazilere makinelerin (traktörlerin vb) girmesi ve tarla sürmesi neredeyse imkansızdır. Makinelerin giremediği yerde insanlar tarımı beden güçleriyle yapmaya devam etmek zorundadır. Bu nedenle Artvin gibi engebeli yerlerde makineye bağlı bir göç (toplu işten çıkarma) fazla beklenemez, tarımsal yoğunluk da daima yüksek kalır."
                }
            ]
        },
        {
            id: 'gocler-turkiye',
            slug: 'turkiyede-goclerin-nedenleri-sonuclari',
            title: '4. Türkiye\'de Göçler',
            content: `Göç, ekonomik, sağlık, savaş veya zorunlu nedenlerle insanların yaşam alanlarını kalıcı (yıllar boyunca) veya geçici (mevsimsel 2-3 ay) değiştirmesidir. Türkiye iç göç (kendi içinde hareketlilik) oranı dünyadaki en hareketli, kanı kaynayan ülkelerden biridir.

Türkiye'deki iç göçlerin aslan payı 1950'lerden sonra başlayan "**Kırdan (Köyden) Kente Göçtür.**" Ancak günümüzde (2000'li yıllardan bu yana) köyde göçecek kimse kalmadığı için (Herkes çoktan şehre gittiğinden) göçün yönü bir süredir "**Kentten > Daha Büyük Kente**" olmuştur (Örn: Çorum merkezden -> İstanbul'a veya Ankara'ya).

### Kırdan Kente İtici Nedenler (Adam köyden niye kaçıyor?)
* **Tarımda Makineleşme:** (En büyük nedendir) Ağa traktörü alır, köyde saban süren tarlayı eken işçi 100 kişinin işine son verir, işsiz köylü mecburen İstanbul yollarına düşer. (Not: Dağlık Karadeniz bölgesindeki göçlerin nedeni makineleşme **DEĞİLDİR**, oraya zaten makine giremiyor. O bölgedeki göçün ana nedeni Nüfus artışı ve o dar arazinin (Rize'dekiler kalabalık ailelerde büyür) miras yoluyla un ufak edilip bölüşülmesi ve babadan kalan ufacık çaylık alanın üç bekar çocuğa yetmemesidir).
* **Toprağın Miras Yoluyla Parçalanması:** 300 dönüm tarla 5 çocuğa bölünür "50şer 50şer", onlar da evlenir 3'er çocuk yapar tarla 10ar dönüme düşer, doyurmaz şehre gidilir.
* Eğitim, Sağlık, Güvenlik hizmetleri, Sosyal Tesis (Asosyal hayat) zayıflığı... ve tabii ki Töre / Kan davaları.

### Kentlerin Çekici Nedenleri (Şehir neden tatlı gelir?)
* İş imkanlarının, sanayilerinin çok olması (Sanayileşme).
* Üniversite, Hastane gibi hizmet kollarında kalite ve gelişmişlik.
* Eğlence ve konfor.

### Göçlerin Ülkedeki Kötü Sonuçları! (Sorunsalı)
Ülke nüfusu sabit olsa da, 10 milyon kişiyi küçük bir vilayete İstanbul'a sokarsanız sorun başlar.
* **Gecekondu, Çarpık Kentleşme:** Alt yapısız, sıvasız, bir selde çatısında mahsur bırakacak çarpık çürük bina okyanusu ortaya çıkar (Betonarme deniz).
* **Altyapı (Yol/Kanalizasyon) Yetmezliği:** Şehirlerin alt takımları (boru ve yolları) bu artan nüfusu deşarj edemez, kronik çöküş, metro arızaları, trafik çilesi bitmez.
* **Tarımsal Zayıflama:** İnsanlar köyü terk ettiği için ülkedeki besin zinciri (hayvan yetiştiriciliği ve tahıl) sarsılır. 
* Şehirde İşsizlik, Asayiş (Suç oranlarında patlama) meydana gelir.
* Sanayi Tesisleri normalde şehir dışına inşa edilmiştir ama gecekonducular boş orman arazilerine şehrin eteklerine kondurulunca, eskiden şehir dışı olan Zehir Soluyan Fabrikalar bir anda yerleşmenin "Şehrin Göbeğinde (İçinde) " kalır !!! Buna çok dikkat et (ÖSYM sorar).

### Çözüm Yolları (Kırsal Kalkındırma Projeleri)
Göçü engellemenin tek yolu adamı "Köyünde Mutlu Etmek"tir (Kırsalda yatırımı cazip kılmak).
1. Köylerde besi ahırı veya tarım fabrikası ve sulama kredisi (Sulu tarım) imkanlarını artırmak (GAP projesinde denendi, çiftçi pamuğa doydu). Tarımsal aleti teknolojiyle (Topraksız tarım/Sera vb) köy okuluyla birleştirmek.
2. Yol, okul ve sağlık ocağı hizmetini en izole köye dahi asfalt/fiber (internet) olarak götürebilmek.
3. Kırsal kalkınma projeleri (DOKAP, KOP) ve teşvik primler.

---

### Mevsimlik (Geçici) Göçler
Bireyin işi gereği yılı belli (2-3 ay) sürelerinde başka yere gidip parayı kazanıp sonra CİTROEN ticari aracıyla evine dönmesidir. (Tamamen para amaçlıdır).
* **Tarım İşçileri:** Adana Çukurova pamuk tarlasına kamyon kasasında giden Güneydoğu'lu (urfa vb) ırgatlar (Elçilik işçileri). Ordu ve Giresun'a Karadeniz Fındığını yevmiye 1500 liraya toplamaya giden binlerce işçi. Bunlar 2 ay çalışır, harcını çıkarır evine döner.
* **Turizm İşçileri:** Ege ve Akdeniz sahillerindeki 5 yıldızlı devasa İngiliz-Rus otellerindeki bellboy, ahçı, komi ordusu. İzmir, Antalya, Muğla o yazları tıka basa dolar, Kasım ayı gelince tüm garson ve aşçılar kış memleketlerine memurluk gibi dönerler. Oteller boş kalır.
* **Yaylacılık Faaliyetleri:** Yazın kızgın kavrulan hayvanlar (Sığır / Keçi öbekleri) yemesin serinlesin, mera/otlak bulsun diye Karadeniz (Çamlıhemşin) veya Toroslar zirvelerine (2000m+) Yörük kültüründe veya hayvan sahiplerince yaylaya çıkılması, yaz bitince kışın (hava eksiye donmadan önce) köye inilmesidir. `,
            examAnalysis: "Göç eden o asimetrik fazlalıklar illerin sanayi/iklim merkezleri mi yoksa coğrafyanın köylüsü mü onu bilmeliyiz. İşsizlikle 'doğurganlık' kelimesi bağdaştırılabilir.",
            teacherNotes: [
                'Devlet bir baraj inşa edecekse "mecburi" köyü boşaltır. Devlet orman yangını sonrası köylüyü "mecburi" başka yere iskan eder. Buna "Zorunlu İskan / Göç" denir. Kendi zevki iş araması "Gönüllü Dış İtme" dir.',
                'Karadeniz yöresinde çok sert yaşanan Kırdan Kente Göç sebepleri arasında "Tarımsal Makineleşme" gösterilemez çünkü dağ sarp olduğu makine zaten yoktur.'
            ],
            keyPoints: [
                'İç göçler nüfusun dağılışını dengesizleştirir (Kötüdür), ama Türkiye nin toplam nüfusunu (Miktarını) etkilemez veya azaltıp/artırmaz (Ülke içi transferdir).',
                'Türkiye de göçler genellikle doğudan batıya doğrudur (Cazibe Merkezi Sanayi Faktörü).',
                'Geçici göçler ilin resmi ADNKS Nüfus sayım kütüğüne yazılmaz, yaz ayı nüfusudur!'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye'de özellikle Adana bölümü, Karadeniz (Ordu) bölümü, Güney Ege bölümü ile Antalya bölümünün bazı dönemlerde yılın sadece belirli birkaç ayı boyunca ani bir nüfus artış grafiği sergilemesi ve ardından aniden düşmesi aşağıdaki kavramların hangisiyle DOĞRUDAN ilgilidir?",
                    options: [
                        "Dış Göçler",
                        "Zorunlu İç Göçler (Mülteci/Afet)",
                        "Mevsimsel (Geçici) Kırsal/Turizm Göçleri",
                        "Sanayiye Bağlı Kalıcı Göçler"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Verilen bölgeler fındık tarımı (Ordu), pamuk tarımı (Adana/Çukurova) ve yaz dönemi kıyı deniz turizmi (Antalya, Güney Ege) gibi 2-4 ay arası (Mevsimsel) işgücü çekimi yapılan ve sonra boşalan Türkiye'nin en canlı mevsimlik göç alanlarıdır."
                }
            ]
        },
        {
            id: 'nufus-yapisi-goc',
            slug: 'nufus-yapisi-goc-turleri-ve-yerlesme',
            title: '2. Nüfus Yapısı, Göç Türleri ve Yerleşme Tipleri',
            content: `## TÜİK 2025 Güncel Türkiye Nüfus Verileri

| Gösterge | Değer |
|---------|-------|
| Toplam nüfus | **85.664.944** (2025) |
| Nüfus artış hızı | **3,4‰** |
| Kentleşme oranı | **%93,4** (kırsal %6,6) |
| Medyan yaş | **34,4** |
| 65+ yaş oranı | **%10,6** |
| En kalabalık il | **İstanbul: 15.701.602** (%18,3) |
| En genç il | **Şanlıurfa** (genç nüfus oranı yüksek) |
| En yaşlı il | **Sinop** (yaşlı nüfus oranı yüksek) |

## Nüfus Yapısı Özellikleri

### Nüfus Piramitleri
* **Genç nüfus piramidi (Üçgen form):** Doğum oranı yüksek, ölüm oranı yüksek. Gelişmekte olan ülkeler. Türkiye tarihsel olarak bu kategorideydi.
* **Dengeli piramidin (Fıçı form):** Doğum ve ölüm oranı düşük. Nüfus büyümesi yavaş. Türkiye bu forma geçiş sürecindedir.
* **Yaşlı nüfus piramidi (Ters üçgen):** Avrupa'nın durumu. Yaşlı nüfus çok, genç nüfus az.

**Türkiye'nin Nüfus Yapısı Değişimi:**
* Cumhuriyet'in ilk dönemlerinde genç nüfus ağırlıklıydı.
* Günümüzde medyan yaş 34,4'e yükseldi, nüfus yaşlanıyor.
* 65+ yaş oranı %10,6'ya ulaştı — sosyal güvenlik sistemi üzerinde artan baskı.

---

## Göç Türleri

### 1. İç Göç (Kırdan Kente)
Türkiye'nin en önemli demografik dönüşümünü yaratan göç türüdür.
* **Sebepleri:**
    * Tarımda makineleşme → tarımda insan gücüne gerek azaldı
    * Sanayileşme → kentlerde iş imkânı arttı
    * Eğitim ve sağlık hizmetleri şehirlerde daha iyi
* **Sonuçları:**
    * Kentleşme oranı %93,4'e yükseldi
    * Köy nüfusu dramatik biçimde düştü
    * Gecekondulaşma ve kentsel büyüme sorunları
    * Tarım arazilerinin terk edilmesi

### 2. Mevsimlik (Geçici) Göç
Belirli dönemlerde iş amacıyla yapılan geçici göç.
* **Pamuk hasatı (Adana/Çukurova):** Ağustos-Ekim
* **Fındık hasatı (Giresun/Ordu):** Ağustos-Eylül
* **İnşaat ve tarım işçisi göçü:** Tüm Türkiye
* Nüfusun ani artıp azalmasına yol açar.

### 3. Dış Göç (Yurt Dışına Göç)
* 1960'larda başlayan Almanya, Fransa gibi Avrupa ülkelerine işçi göçü.
* Bugün Almanya'da yaklaşık **3-4 milyon** Türk kökenli yaşıyor.
* **Beyin göçü:** Eğitimli ve nitelikli işgücünün yurt dışına gitmesi. Son yıllarda artış göstermektedir.
* **Döviz geliri:** Yurt dışındaki Türk işçilerinin gönderdiği döviz ekonomiye katkı sağlar.

### 4. Zorunlu Göç
Savaş, doğal afet, terör gibi nedenlerle zorunlu yapılan göç.
* Türkiye 1990'larda Doğu Anadolu'dan batıya zorunlu iç göç yaşadı.
* 2011 sonrasında Suriyeli mülteci göçü: Türkiye **3,5-4 milyon** Suriyeliye ev sahipliği yapmakta.
* 2023 depremi sonrası 10 ilde yoğun zorunlu göç yaşandı.

---

## Yerleşme Tipleri

### 1. Kır Yerleşmeleri
* **Köy:** En küçük resmi idari birim (muhtarlık). Tarım ve hayvancılığa dayalı.
* **Mezra:** Köye bağlı, daha küçük yerleşim.
* **Oba:** Göçerlik sürdüren toplulukların geçici yerleşimi (yaylacılık).
* **Yayla:** Yüksek rakımlı yazlık kır yerleşimi. Karadeniz ve Toroslar'da yaygın.

### 2. Kent Yerleşmeleri (Şehirler)
* Nüfusu, işlevi (fonksiyonu) ve fiziksel büyüklüğü köyden farklı.
* **Şehir fonksiyonları:** Yönetim, sanayi, ticaret, turizm, eğitim, din, liman.

### Gecekondulaşma ve Kentsel Dönüşüm
* Hızlı göçle birlikte altyapısız, kaçak yapılaşma (gecekondu).
* Türkiye 2000'li yıllardan itibaren kentsel dönüşüm projeleriyle gecekonduları yıkıp TOKİ konutlarıyla değiştirme politikası uygulamaktadır.`,
            mnemonics: [
                {
                    title: 'Göç Türleri',
                    text: 'İMDZ: İç göç-Mevsimlik-Dış-Zorunlu'
                }
            ],
            keyPoints: [
                'Türkiye nüfusu: 85.664.944 (2025).',
                'Kentleşme oranı: %93,4.',
                'En kalabalık il: İstanbul (15,7 milyon).',
                'En genç il: Şanlıurfa | En yaşlı il: Sinop.',
                'Medyan yaş: 34,4 — nüfus yaşlanıyor.',
                'Beyin göçü son yıllarda artış göstermektedir.'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye'de 1950'lerden itibaren başlayan kırdan kente göç hareketinin en temel ekonomik tetikleyicisi aşağıdakilerden hangisidir?",
                    options: [
                        "Kıyı bölgelerinde turizmin gelişmesi",
                        "Tarımda makineleşmenin kırsal işgücü ihtiyacını azaltması",
                        "Doğal afetler nedeniyle köylerin boşalması",
                        "Zorunlu askerlik uygulaması"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Tarımda traktör ve biçerdöverin yaygınlaşması, daha önce onlarca insanın yaptığı işi birkaç makineye yaptırdı. İşsiz kalan köylü, sanayinin geliştiği şehirlere göç etti. Bu süreç Türkiye'nin kentleşme oranını %93'ün üzerine çıkardı."
                }
            ]
        }
    ]
};
