import { NoteUnit } from '@/types/notes';

export const unit06: NoteUnit = {
    id: 'unit-06',
    title: 'Ekonomik Coğrafya: Sanayi, Ulaşım ve Turizm',
    icon: 'Factory',
    sections: [
        {
            id: 'sanayi-tesisleri',
            slug: 'turkiyede-sanayi-tesislerinin-dagilisi',
            title: '1. Sanayi (Endüstri) Tesisleri',
            content: `Bir ülkede hammaddenin makinelerle işlenerek kullanılabilir hale getirilmesi (mamül madde) sanayidir. Türkiye bir sanayi ülkesi olma yolunda hızla ilerlemektedir (İhracatımızın %90'ı fındık fıstık -Tarım- değil, beyaz eşya, araç vb. **Sanayi** ürünüdür).

Sanayi tesislerinin (Fabrikaların) nereye kurulacağını belirleyen bazı zorunlu şartlar (Kuruluş Yeri / Lokasyon Faktörleri) vardır. Bunları bilmek ÖSYM sorularının şifresidir.

### Fabrika Kuruluş Yeri Faktörleri

1. **Hammaddeye Yakınlık (Zorunluluk):** Bazı ürünler tarladan koparıldıktan / yeraltından çıkarıldıktan sonra ÇOK ÇABUK BOZULUR. Bunları kamyona atıp 10 saat ötedeki fabrikaya götüremezsiniz, yolda çürür cıvıklaşırlar veya taşıma maliyetleri (ağırlıkları) astarı yüzünden pahalıya gelir.
   * **Kimler Hammadde Şartı Arar?**: *Çay (Rize'de kesilenin İstanbul'da fabrikası Olamaz), Şeker Pancarı (Konya'da sökülenin İzmir'de fabrikası olamaz), Konserve/Salça/Meyve Suyu (Domates çabuk çürür, hepsi Bursa/Çanakkale dibindedir), Et ve Süt kombineleri (Erzurum). Veya ağırca Demir (Sivas) gibi madenler.*
2. **Enerji Kaynağına Yakınlık:** Fabrikayı döndürecek asıl canavar, yanındaki kömür veya doğalgazdır. Demir Çelik fabrikalarının **Zonguldak/Karabük'e** kurulmasının TEK SEBEBİ taşkömürü (enerjidir). Karabük'te gram demir çıkmaz.
3. **Ulaşım (Liman) ve Pazarlama:** Asıl paranın döndüğü yer burasıdır. Bir malı içerideki Milyonluk Metropollere veya (Deniz yolunu - Limanı kullanarak) yurtdışına satmak istiyorsak fabrikayı limana ve pazara kurarız.
   * **Örnekler:** İzmit Petrol Rafinerisi (İpraş), İskenderun Demir Çelik (Liman), İstanbul'daki tüm tekstil/giyim markaları (Pazar), İzmir Sigara Fabrikası (Liman'dan ihracat), Samsun Bakır Tesisleri (Karadeniz Limanı).
4. **Sermaye (Maddiyat) ve İşgücü:** Paranın, bankanın ve holdinglerin merkezleri Marmara, İzmir, Adana gibi yerlerdir. Kars'a Doğuya sermaye (iş adamı) güvenip gitmez (terör, kar, kış). 

### Türkiye'de Başlıca Sanayi Kolları (Bilmeniz Gerekenler)

* **Otomotiv (Motorlu Araç) ÇOĞU LİMAN ve PAZAR EKSENLİDİR:** Türkiye Avrupa'nın montaj ve parça devidir. Yerli otomobil (Togg) dahil olmak üzere Ford, Fiat, Renault, Toyota gibi dünya devleri buradadır. *Neredeler?* **Bursa (Türkiye'nin Detroit'idir başkentidir), Kocaeli / Sakarya (Marmara), İzmir, Aksaray (Kamyon), Adana (Otobüs/Temsa).** Doğu'da ve Karadeniz'de KESİNLİKLE otomotiv fabrikası yoktur.
* **Tekstil ve Dokuma (İstihdam Lideri):** En çok insana iş (% işçi gücü) sağlayan sektördür. Pamuklu dokumada (Kıyafet) **İstanbul, Bursa, Denizli, Gaziantep, Kayseri ve Adana** zirvededir (Hepsi pamuğun yetiştiği yere veya paranın-pazarın olduğu Ege'ye kuruludur).
* **Demir - Çelik:** Hatırla (Zonguldak Ereğli-Karabük, İskenderun, Sivas Divriği).
* **Petrol Rafinerileri (ÇIKARILDIĞI YER DEĞİL - İŞLENDİKLERİ YER):** 
    1. Batman (Hammadde - Dibinde kuyu var)
    2. Kırıkkale (Orta Anadolunun yakıt savunması / boru hattıyla gelir)
    3. İzmit - Tüpraş / İpraş (Ulaşım ve Türkiye'nin en büyüğü)
    4. İzmir - Aliağa (Liman/Ulaşım)
    5. Mersin - Ataş (Sadece depo amaçlı kaldı - Liman)
* **Kağıt veya Kereste:** Hammaddesi Orman olan fabrikalardır. Suyu çok severler (Kağıt hamuru selüloz için). Bu nedenle fabrikaların %90'ı Karadeniz, Akdeniz veya Ege sahillerine (Ormanlık Dağlara) çok yakındır. (Giresun, Kastamonu, Zonguldak Çaycuma, Muğla Dalaman, Mersin Taşucu). Ormanın ve ağacın olmadığı yerlere İç Anadolu'ya, Şanlıurfa'ya Kağıt Fabrikası A-ÇI-LA-MAZ. (Hammadde sıkıntısı).`,
            examAnalysis: "ÖSYM Kağıt fabrikalarının dağılışını haritada beş nokta verip sorar, ormanın olmadığı (İç Anadolu, Güneydoğu) noktayı elersiniz.",
            keyPoints: [
                'Sanayinin en yoğun olduğu bölge MARMARA (Çatalca Kocaeli & Bursa).',
                'Türkiye İhracat (Dışarıya Mal Satımı) gelirinin büyük kısmı Sanayi dir, Tarım değil.',
                'Karabük Demir Çelik ile İskenderun Demir Çelik in Hammaddeye KESİNLİKLE Bir ilgisi Yoktur (Biri Enerji Biri Liman Ulaşımı).'
            ],
            inlineQuizzes: [
                {
                    question: "Aşağıdaki sanayi kollarının kuruluş amaçları ve dağılış ilkeleri (lokasyon / kurulma nedeni) dikkate alındığında hangisinin hammaddeye yakın olma gibi bir ZORUNLULUĞU kati suretle (mutlaka) BULUNMAZ?",
                    options: [
                        "Et ve Süt (Kombina) İşleme Tesisleri",
                        "Şeker (Pancar) Sanayisi",
                        "Otomotiv ve Beyaz Eşya Sanayisi",
                        "Çay İşleme Fabrikaları"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Otomotiv ve beyaz eşya fabrikaları, demir çeliğin üretildikten sonraki son mamül montaj işlemleridir. Çabuk bozulma veya erimektedir korkusu (tarım ürünleri gibi) asla yoktur! Tırdan kamyondan günlerce inmez tık demez. O sebeple Hammaddeye ZORUNLU KURALI yoktur, limana, pazara merkeze satılacağı devasa İstanbul, Bursa vb nüfusa kurulurlar."
                }
            ]
        },
        {
            id: 'turkiyede-ulasim-aglari',
            slug: 'turkiyede-kara-demir-deniz-havayolu-ulasimi',
            title: '2. Türkiye\'de Ulaşım Sistemleri',
            content: `Ulaşım bir ülkenin sanayisinin ve ticaretinin ana damarıdır (kanı taşıyan sirkülasyondur). Dört ana faktör vardır. Türkiye engebeli bir ülke olduğu için ulaşım genel olarak ZORDUR (Doğu Karadeniz, Doğu Anadolu, Toroslar).

### Karayolu (Türkiye'nin 1 Numarası)
Tarih boyunca kervansaraylar, Cumhuriyet sonrası da Demokrat parti dönemiyle asfalta (oto yollara) boğulan bir ülkeyiz.
* **Payı:** Türkiye'de hem İnsan (Yolcu - Otobüs vb) hem de Yük/Kargo (Kamyon / TIR) taşımacılığında %90 gibi inanılmaz ezici bir oranla **Karayolu BİRİNCİ Sıradadır.** 
* **Ulaşım Yönü:** Dağlar Kuzey (Karadeniz) ve Güneyde (Akdeniz) yatay bir ip (Doğu - Batı) gibi dizildiği için, karayolu Türkiye'de \`Doğu ile Batı arasında su (kolay) gibi akar\`, ancak \`Kuzeyden - Güneye inmek (denize doğru inmek)\` dağları delmek gerektiği için tünel, viyadük, Tünel Masrafına yol açar. Geçitler ŞARTTIR.

### Geçitler (Dağları Delen Pasajlar) - EZBERLE!!!
1. **Karadeniz Geçitleri:**
    * Trabzon/Rize'yi Erzurum a bağlayan efsane Tünelleri : **ZİGANA (Kalkanlı)** ve **KOP** geçitleri. (Çok yüksek, metrelerce kar tutan dağlardır).
    * İnebolu/Kastamonu yu İçeriye bağlayan: Ilgaz (15 Temmuz İstiklal Tüneli).
    * Yeni Yapılan Erzurum-Rize bağlantılı Dünyanın En Uzunlarından Biri: **Ovit Tüneli**.
2. **Akdeniz Geçitleri (Torosları delmek):** Batıdan Doğuya Doğru ŞİFRE = **Ç - S - G - B (Çok Sayıda Geyik Bulunur)**
    * **ÇUBUK** Geçidi (Antalya'yı -> Burdur'a Göller yöresine bağlar).
    * **SERTAVUL** Geçidi (Mersin/Silifke'yi -> Konya'ya (Karaman)'a iç anadoluya bağlar).
    * **GÜLEK** Geçidi (Çukurova/Adana'yı -> İç Anadolu Sanayisine bağlayan en hayati can damarı - TEM Otoyoludur).
    * **BELEN** Geçidi (Sadece Hatay İskenderun ile Amik Ovası (GDA) arasındaki ince Nur dağlarını deler).

### Demiryolu (Ucuz ama Her Yere Gidemez)
Devlet (TCDD) tekelindedir, en çok Cumhuriyetin Atatürk döneminde Demir Ağlarla (Doğu'ya sanayi ve asker sevki için) örülmüştür. Ağır maden ve kömür vs yüklerin taşınmasında (Tren) Kara yoluna göre ACYİB ucuzdur ama Türkiye yüksek ve dağlık olduğu için **Her Yere Tren Gidemez!**
* **Trenin Asla Gidemediği ve Gitmeyeceği Dağlık İller:**
    * Bütün **Doğu Karadeniz Kıyısı (Rize, Trabzon, Artvin, Giresun vb)**. (Sıfır Demiryolu, çok masraflıdır yapmazlar).
    * **Hakkari** (Buzul sarp dağlar tırmanamaz).
    * **Menteşe (Muğla)** (Oraya kıvrılarak inemez, ihtiyaç da yoktur).
    * **Antalya** ya ve **Biga-Çanakkale**ye tren yolu inmez. (Turistik yerlerdir yük taşınmaz).
* **Yeni Nesil:** Yüksek Hızlı Tren (YHT). Ankara-Eskişehir-İstanbul-Konya-Sivas arasında (dümdüz yerler) cirit atmaktadır.

### Denizyolu (Dünyanın ve İhracatın En UCUZU)
Dışarıya (almanya, abd, çin) mal satarken %80 denizyolunu (KONTEYNER) kullanır, Limanları doldururuz. Yol yoktur masrafsızdır suya atarsın kayar gider, tek gemi (ro-ro) bin tırın yükünü tek başına çeker.
* **Hinterland (Limanın Arkasıyla Olan Karayolu/Demiryolu Bağlantısı):** Liman geniş mi dar mı?
    * *Geniş Hinterlant (Dağlar engellemiyor iç anadoluya su gibi akıyor tırlar):* **İstanbul, İzmir, Mersin (Gülek sayesinde), İskenderun**. Buralar Milyon Dolar kazanır.
    * *Dar Hinterlant (Gemi yanaşıyor ama dağlardan dolayı limandan arkaya 1 tır zor tırmanıyor şehre gidemiyor):* **Sinop (Türkiye'nin en fakir limanıdır)** ve **Antalya (sadece turizm vardır, ticaret gemisi gelmez çünkü torosları geçip Konya ya mal satamaz). Menteşe (Muğla)** da aynıdır.

### Havayolu (En Pahalı, En Hızlı)
Türkiye dünyada havayolunu son 20 yılda en feci (çılgınca) geliştirmiş (Her ile 1 havaalanı projesi) olandır. Uçak yolcusunda Avrupa devidir.
Ordu-Giresun (O-Gİ) Havaalanı ve Rize-Artvin Havaalanları Türkiye'nin (ve Avrupa'nın) DENİZİN İÇİNE DOLDURULARAK (Denizi betonla doldurup pist yapılan) nadir harikalarındandır.`,
            mnemonics: [
                {
                    title: 'Akdeniz Geçitleri Şifresi (Batıdan Doğuya)',
                    text: 'Kısa kod: Ç S G B (Çok Sayıda Geyik Bulunur) -> Çubuk, Sertavul, Gülek, Belen'
                }
            ],
            examAnalysis: "Tireni unutma; Antalya'ya trenle gidilmez, Doğu karadenize (Trabzon/Rize) trenle gidilmez! (İhaleleri var dillerde ama ray filan asla yoktur). Rize ye tır veya uçakla gidersin.",
            teacherNotes: [
                'Boruları unuttun derseniz; Boru Hatları (Enerji Taşımacılığı). Petrol ve Doğalgaz sıvıları için vardır. Trans Anadolu (TANAP - Azeri Gazı -> AVRUPA), Türk Akımı (Rus Gazı -> TÜRKİYE Trakya), Kerkük-Yumurtalık (Irak Petrolü -> Adana Ceyhan) çok ama çok kritik Jeopolitik kartlarımızdır.'
            ],
            keyPoints: [
                'Doğu/Batı Ulaşımı Kolay , Kuzey/Güney (Karadeniz/Akdeniz) Ulaşımı zor maliyetli.',
                'Ticaret/İhracat En Çok = Denizyolu (Konteyner/Ucuz)',
                'İç Taşıma (Yolcu/Kargo) En Çok = Karayolu (%90)',
                'Hinterlandı çok dar (Ticari Gelişememiş Liman) = Sinop'
            ],
            inlineQuizzes: [
                {
                    question: "İstanbul'dan yola çıkan bir ticaret gemisi sırasıyla; Karadeniz sahilindeki Sinop, Rize; Ege sahilindeki İzmir ve Akdeniz sahilindeki Antalya ile Mersin limanlarına mal indirmeye çalışmıştır. Bu illerin topografik (dağlık vb hinterland) yapısı dikkate alındığında, Gemi kaptanının indirdiği malların tırlara (kamyonlara veya trenlere) yüklenip anadolu içindeki (Konya, Ankara vb) tüketici şehirlere ULAŞMASINDA lojistik/içeriye taşınma SIKINTISI YAŞAYACAĞI, ticaretin tıkandığı iller hangisidir?",
                    options: [
                        "İzmir ve Mersin",
                        "Rize ve İzmir",
                        "Sinop ve Antalya",
                        "Mersin ve Sinop"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Sinop (Küre dağlarının deniz gibi duvar olması), Antalya (Toros dağlarının gemiden indirilen malın içeri Ispartaya geçişine devasa duvar örmesi) ve Trabzon/Rize çok sarp olduğu için limanları gelişememiş, arkalarındaki anadolu illeriyle bağlantısı zayıf, hinterlandı DAR kalan limanlardır."
                }
            ]
        },
        {
            id: 'turkiye-turizm',
            slug: 'turkiyede-turizm-cesitliligi-ve-mekanlari',
            title: '3. Türkiye\'de Turizm Zenginlikleri',
            content: `Türkiye dünya turizminde **Yıldız** ülkelerdendir (Her yıl ortalama 50 Milyon Turist ile ilk 7 dedir!). Bizim bu kadar cazip olmamızın iki nedeni vardır: Birincisi Akdeniz/Ege kıyılarımızdaki müthiş deniz, kum, güneş iklimi (Doğal), İkincisi ise Binlerce yıllık eski medeniyetlerin (Hitit, Urartu, Roma, Osmanlı, Selçuklu) bıraktığı devasa Kültürel / Tarihi mirastır (Beşeri).

### 1. Deniz, Kum, Güneş Turizmi (Kıyı Turizmi)
* Türkiye'nin Turizm GELİRİNİN EN BÜYÜK payı Ege ve Akdeniz kıyılarındandır (Özellikle **Antalya(Rus), Muğla - Bodrum/Marmaris(İngiliz), İzmir**). 
* Sıcaklık ve Tuzluluk Enlemi nedeniyle "Turizm Sezonunun Süresi (Açık kalma süresi) \`Akdenizde En UZUN, Karadeniz de (Marmara da vs) EN KISADIR.\` Güneyde erken girip geç çıkarsınız suya.
* Neden Ege ve Akdeniz'de bu kadar yoğun otel vb var da Karadeniz sahilinde Deniz Kum Güneşi "Otel Olarak Yok (Yerli Karadenizliye hariç Turiste yok)" ? **Cevap = GÜNEŞLENME SÜRESİ UZUNLUĞU EKSİKLİĞİ (Bulutluluk)** tür. (Karadenizliler alınmasın güneş var ama 12 ay açık turist garantisi yoktur, otele yatırım zarar eder, bulut / yağmur fazladır tatilci onu sevmez haşlanmayı sever).

### 2. Kış (Kayak) Turizmi
Dağlık ve Yüksek bir "Orta/Kutuplara yaklaşan Soğuk ülke" olmanın avantjıdır.
* **Bursa (Uludağ):** Türkiye'nin markasıdır (Marmara sanayi parasına Yakındır).
* **Erzurum (Palandöken):** Türkiye'nin en yüksek kar / pist kalitesi ve Avrupa gençlik olimpiyat tesisleridir. (Tesis kralıdır).
* **Kayseri (Erciyes):** En popüler 3. Volkanik dağdır muhteşemdir.
* Kars (Sarıkamış - Kristal lüks Kar), Bolu (Kartalkaya - İstanbul sosyetesi).

### 3. Sağlık (Kaplıca/Termal/Jeotermal) Turizmi
Fay hatları ve Genç (3. zaman çocuğu) olmanın bize verdiği jeotermal su ödülüdür. Yerin altından kaynar şifa (kükürt, mineral) fışkırır.
* **Zirve İller:** Kırmızı Kar suyu / havuzu deyince AFYONKARAHİSAR !!  (Afyon dünya termal devidir, dedeler oteli vb). 
* **Diğer Ege Bloğu:** İzmir (Balçova vb), Denizli (Karahayıt-Pamukkale), Ankara (Kızılcahamam), Bursa Oylat kaplıcaları çok ünlüdür. *NOT: Doğu anadolu da çok fay var ama adam oraya otel kurmaz turizm Afyon ve Ege civarında döner paranın yakınıdır çünkü*.

### 4. Alternatif/Diğer Turizmler
* **Yayla (Eko/Doğa) Turizmi:** Tamamen beton ve 40 derece sıcaktan bunalan Arap veya batılı turistlerin *Yeşile ve Neme Suya* tapınma, serinleme ve oksijen arayışıdır. Adresi Türkiye de açık ara %90 **Doğu Karadeniz (Rize-Ayder, Trabzon-Uzungöl, Artvin-Karagöl)** yamaçları ve devasa yeşil ahşap yaylalarıdır. 
* **İnanç Turizmi (Dinler Beşiği):** Hatay(St Pierre Klisesi / Hoşgörü şehri), Meryem Ana (İzmir Selçuk/Efes Hıristiyanlık hac yeri muazzam kalabalıktır), Antalya (Demre - Noel Baba St Nicalaus klisesi kışın feci Rus gelir tapınmaya), Şanlıurfa (Halilürrahman / Balıklı Göl / Peygamberler şehri).
* **Kültür ve Kongre / Kurvaziyer:** Müzeleri gezme, fuarlar... ve özellikle devasa "10 Katlı Gemilerle - Kurvaziyer/Kruvaziyer" Kuşadası sahil Limanına veya İstanbul Galataport vb yerlere demir atıp 2 günlüğüna alışverişe dalan elit gemiciler. (Lider Aydın Kuşadası).

> [!TIP]
> **UNESCO DÜNYA MİRAS LİSTESİ** Ösym Fix Sorar / Şıkları Kesindir.
> Sadece Çok Güncel Olanlar ve Favorilerinizi İyi Bilin:
> * **Göbeklitepe (Şanlıurfa):** Efsane, dünyanın en eski ilk ritüel inanç anıt / taş tapınağı.
> * **Arslantepe Höyüğü (Malatya):** İlkel devlet memurluğunun kökeni mühürler vb.
> * **Efes (İzmir/Selçuk), Troya (Çanakkale), Hattuşa (Çorum-Hitit başkenti).**
> * **Nemrut Dağı (Adıyaman):** Dağın tepesinde güneşin efsane doğduğu yerdeki Devasai İnsan heykelleri (Kommagene krallığı). Asla Volkanik Nemrut gölü ile KARIŞTIRMA !! Heykel o.
> * **Çatalhöyük (Konya):** İnsanlığın (Neolitik Tarımın) en eski Tarlacı ilkel Toplu şehir kasabası (kapısız damdan girilen kerpiç evler).
> * **Kapadokya ve Pamukkale(Hierapolis):** Bu ikisi ÇOK ÖZELDİR. UNESCO bunları listeye alırken (Miks/Karma yapı olarak almıştır). Neden? KAPADOKYA nın peri bacası DOĞAL dır ama, o peri bacasını mağara evi olarak oyan içine klise haç çizen bizanslıların sanatı (KÜLTÜREL / BEŞERİDİR). UNESCO 'Sen ikisine de dahilsin MİKS sin (Karma) der. Pamukkale beyaz suyu DOĞALDIR ama arkasındaki antik Roma tiyatroları Hierapolis İnsanın KÜLTÜRÜDÜR. MİKS / KARMA OLAN 2 UNESCO Muz vardır (Diğerleri hepsi sadace Kültür/Saraydır).`,
            keyPoints: [
                'Turizm Gelirleri en YÜKSEK bölge (Marmara ve Ege). Sadece deniz değildir İstanbul tarih parasıdır.',
                'UNESCO karma/miks yapılar Türkiye de Sadece 2 Tanesidir (Pamukkale ve Kapadokya).',
                'Türkiye İhracat gelirlerine (Dış ticaret dengesine Cari Açığı Kapatmaya) en MÜTHİŞ Destek = BACAŞIZ SANAYİ Dediğimiz TURİZM DOLARLARI/EUROLARI dır !! (Net Döviz getirir).'
            ],
            inlineQuizzes: [
                {
                    question: "Turistin deniz seviyesindeki tatil beldelerinde ve sahillerde yaz aylarında serinlemek yerine, yüksek rakımlı çamlık yayla evlerinde ahşap tesislerde trekking (doğa yürüyüşü), doğa ve eko-turizm olanaklarıyla serinleyip tabiatla iç içe kalma faaliyeti (Yeşile kaçış) Türkiye'nin hangi bölümünde açık ara diğer bölgelere göre DÜNYA çapında (Arap turist vb) popülarite kazanmış ve patlama yaşamıştır?",
                    options: [
                        "Menteşe / Muğla Görekleri",
                        "Akdeniz Toros Dağları - Antalya Kesimi",
                        "Kapadokya ve Erciyes Çevresi İç Anadolu Bölgesi",
                        "Doğu Karadeniz (Özellikle Rize ve Trabzon yaylaları)"
                    ],
                    correctOptionIndex: 3,
                    explanation: "Körfez ülkelerinden (Arap turist gibi) 40 derece çöl sıcağından bunalanların ile batıdan doğa trekking arayanların serinlik, oksijen, yemyeşil orman, şelale ve ahşap kültür (Uzungöl, Ayder vb) gibi Yayla (Ekosistem/Doğa) turizminde sığındıkları ve Türkiye turizmin en tavan yaptığı yeşil bölge tartışmasız Doğu Karadeniz yaylalarıdır."
                }
            ]
        },
        {
            id: 'dis-ticaret-ve-liman',
            slug: 'turkiye-dis-ticaret-ve-liman-sistemi',
            title: '4. Dış Ticaret (İhracat-İthalat) ve Liman Sistemi',
            content: `## Türkiye'nin Dış Ticareti

Türkiye gelişmekte olan ekonomisiyle hem mal ihraç eden hem de önemli miktarda hammadde ve enerji ithal eden bir ülkedir.

### İhracat Yapısı

Türkiye'nin ihracat gelirinin büyük bölümü **sanayi ürünlerinden** gelmektedir.
* **Sanayi ürünleri payı:** İhracatın yaklaşık **%90'ı** sanayi ürünleridir (tarım değil!).
* Bu oran Türkiye'nin artık tarım ülkesi değil, sanayi ülkesi olduğunu kanıtlar.

**Başlıca İhracat Kalemleri:**
1. **Motorlu taşıtlar ve parçaları** (Otomotiv — Bursa, Kocaeli)
2. **Tekstil ve hazır giyim** (İstanbul, Bursa, Denizli)
3. **Makine ve teçhizat**
4. **Demir-çelik** (İskenderun)
5. **Tarım ürünleri:** Fındık (1. sıra dünya), mermer, kuru meyve

**En Fazla İhracat Yapılan Ülkeler:**
1. Almanya
2. İngiltere
3. ABD
4. İtalya
5. Irak (Orta Doğu'ya ihracatta 1. hedef ülke)

### İthalat Yapısı

Türkiye özellikle **enerji ve hammadde** ithal etmektedir.

**Başlıca İthalat Kalemleri:**
1. **Petrol ve Doğalgaz** (en büyük ithalat kalemi — Rusya, Irak, İran)
2. **Makine ve teçhizat**
3. **Demir-çelik hammaddesi**
4. **Kimyasal maddeler**

**Dış Ticaret Açığı:**
* Türkiye genel olarak **dış ticaret açığı** verir (ithalat > ihracat).
* Turizm gelirleri bu açığı kısmen kapatır.

---

## Türkiye'nin Önemli Limanları

Deniz taşımacılığı Türkiye dış ticaretinin yaklaşık **%90'ını** karşılar.

| Liman | Bölge | Özellik |
|-------|-------|---------|
| **Mersin** | Akdeniz | Türkiye'nin en büyük konteyner limanı |
| **İstanbul (Haydarpaşa/Ambarlı)** | Marmara | En fazla yük taşınan liman (iç tüketim) |
| **İzmir (Alsancak)** | Ege | Türkiye'nin üçüncü büyük limanı |
| **İskenderun** | Akdeniz | Çelik ve petürn ihracatı |
| **Ceyhan** | Akdeniz | BTC petrol ihracat terminali |
| **Samsun** | Karadeniz | Karadeniz'in en büyük limanı |
| **Trabzon** | Karadeniz | İran ve İç Asya'ya transit geçiş |
| **Bandırma** | Marmara | Bor ihracat terminali |

---

## Turizm İstatistikleri (2025 Güncel - TÜİK Rekoru)

Turizm Türkiye ekonomisine büyük katkı sağlamaktadır.
* **Yıllık yabancı ziyaretçi sayısı:** ~64 milyon (2025 rekoru — dünya sıralamasında 4.).
* **Turizm geliri:** ~65,2 milyar dolar (2025 rekoru — dünya sıralamasında 7.).
* **En fazla turist alan il:** Antalya (yıllık ~16-17,5 milyon ziyaretçi).

**Turizm Türleri ve Önemli Merkezler:**
* **Kültür turizmi:** İstanbul (Topkapı, Ayasofya), Kapadokya (Nevşehir), Efes (İzmir)
* **Deniz-kum-güneş turizmi:** Antalya, Muğla (Bodrum, Marmaris, Fethiye), İzmir (Çeşme)
* **Sağlık ve kaplıca turizmi:** Afyon, Denizli (Pamukkale), Bursa
* **Kış turizmi:** Uludağ (Bursa), Erciyes (Kayseri), Sarıkamış (Kars), Palandöken (Erzurum)
* **Yayla turizmi:** Rize-Trabzon yaylaları (Karadeniz), Toroslar yaylaları (Akdeniz)`,
            keyPoints: [
                'İhracatın %90\'ı sanayi ürünleridir (tarım değil).',
                'En büyük ihracat kalemi: Otomotiv.',
                'En büyük ithalat kalemi: Petrol ve doğalgaz.',
                'En büyük konteyner limanı: Mersin.',
                'Yıllık turist: ~64 milyon (2025 rekoru), gelir ~65,2 milyar dolar.',
                'En fazla turist alan il: Antalya.'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye'nin ihracat yapısıyla ilgili aşağıdaki bilgilerden hangisi doğrudur?",
                    options: [
                        "İhracatın büyük bölümünü tarım ürünleri oluşturmaktadır",
                        "Türkiye hammadde ihracatçısı, sanayi ürünleri ithalatçısı konumundadır",
                        "İhracatın yaklaşık %90'ı sanayi ürünlerinden oluşmakta, otomotiv ve tekstil başı çekmektedir",
                        "Türkiye'nin en büyük ihracat pazarı Orta Doğu ülkeleridir"
                    ],
                    correctOptionIndex: 2,
                    explanation: "Türkiye ihracatının yaklaşık %90'ı sanayi ürünleridir. Başta otomotiv (Bursa, Kocaeli) ve tekstil (İstanbul, Bursa, Denizli) gelmektedir. En büyük ihracat pazarı Almanya'dır. Bu veri Türkiye'nin artık bir sanayi ekonomisi olduğunun kanıtıdır."
                }
            ]
        }
    ]
};
