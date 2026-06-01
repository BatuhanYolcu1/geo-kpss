import { NoteUnit } from '@/types/notes';

export const unit04: NoteUnit = {
    id: 'unit-04',
    title: 'Ekonomik Coğrafya: Tarım ve Hayvancılık',
    icon: 'TrendingUp',
    sections: [
        {
            id: 'tarimda-verimi-artiran-faktorler',
            slug: 'turkiyede-tarimi-etkileyen-faktorler',
            title: '1. Tarımda Verimi Artıran Faktörler',
            content: `Türkiye topraklarının yaklaşık üçte biri tarıma elverişlidir (Geri kalanı dağ, çayır, orman vs). Tarımdan yüksek **VERİM** elde edebilmek için sadece toprağın geniş olması yetmez; toprağa bakmak gerekir. Buna **İntansif (Modern/Yoğun) Tarım** denir. İntansif demek, küçük tarladan bilimle devasa ürün almak demektir. Tam zıttı olan **Ekstansif (İlkel/Kaba) Tarım** ise tarlayı Allah'a (yağmura ve öküze) emanet etmektir. Türkiye modern tarıma geçmeye çalışmaktadır.

Tarımda verimi artıran en önemli temel faktörler şunlardır:

### 1. Sulama (Türkiye'nin En Büyük Tarım Sorunu)
Türkiye'nin (Karadeniz hariç) büyük bir kısmı yaz kuraklığı (Asor ve Basra basınçları) yaşadığı için, bir çiftçinin en çok ihtiyaç duyduğu şey yağmur duası değil, **Sulama Kanalıdır (Barajdır)**. 
* Sulama imkanı artarsa: Üretim dalgalanmaları (bir yıl çok ürün, öteki yıl az ürün - İklime bağımlılık) **biter**.
* Sulu tarıma geçilirse: Yılda 1 değil, 2 hatta 3 defa hasat yapılabilir (Özellikle sımsıcak Çukurova ve GAP olan Şanlıurfa'da).
* Sulu tarıma geçilirse: **Nadas** Uygulaması (Tarlayı 1 yıl boş bırakıp dinlendirme saçmalığı) **ortadan kalkar.** Çünkü tarlanın nadasa (uykuya) bırakılma sebebi toprakta su (nem) kalmamasıdır. Su verirsen toprak her yıl eker. Nadas verim düşmanıdır, en çok İç Anadolu ve GDA'da görülür.
* Sulu tarıma geçilirse: Çiftçi ucuz para eden ve suya ihtiyaç duymayan "Buğday, arpa" ekmekten vazgeçip, çok pahalıya satılan ve bol su içen "Pamuk, Mısır, Şeker Pancarı" ekmeye (Sanayi Bitkilerine) geçer. Çiftçi zenginleşir, köyden kente göç durur.

### 2. Gübreleme ve Tohum Islahı
* Türkiye hayvancılık ülkesi olduğu için doğal gübremiz boldur ancak o gübreleri köylerde "Tezek" yapıp sobada yaktığımız için tarlaya suni (kimyasal) gübre atıyoruz. Suni gübre verimi feci artırır ama ph değerini bozar.
* Tohum Islahı: Hastalıklara (Süne, kımıl vb) dayanıklı kaliteli laboratuvar tohumları geliştirmektir. Üretimi uçurur.

### 3. Makineleşme (Traktör-Biçerdöver Kullanımı)
* Cumhuriyet'in ilk yıllarında 2000 traktör varken bugün milyonlara ulaşmıştır. Ekim, bakım ve Hasat (toplama) süresini acayip kısaltır. Ürünler tarlada çürümez.
* Ancak makineleşme, insan gücüne (ırgata - tarım işçisine) olan ihtiyacı bitirdiği için **Kırdan Kente göçün en büyük tetikleyicisidir.**
* Doğu Karadeniz (Rize, Trabzon vb), Hakkari yöresi, Menteşe yöresi: **Buralarda Traktör KULLANILAMAZ.** Toprak sarp ve yokuştur. Bu bölgelerde hala insan ve hayvan (beden) gücü ile çapa ve hasat yapılır.

---

## Devletin "Destekleme Alımları" (Taban Fiyat Uygulaması)
Devlet; çiftçi zarar edip tarlasını küsüp bırakmasın diye, hasat öncesinde ürüne "Taban (En Düşük) Fiyat" açıklar. "Kardeşim tüccar senin malını 5 liradan almaya kalkarsa satma, ben Devlet olarak (TMO - Toprak Mahsulleri Ofisi veya Çaykur vs) malını 10 liradan almayı garanti ediyorum" der. 
Böylece çiftçi malının elinde kalmayacağını, en kötü ihtimalle devlete satacağını bildiği için güvenle eker. Bu uygulama **en çok ÇAY, ŞEKER PANCARI, TÜTÜN, FINDIK, BUĞDAY ve PAMUK** gibi sanayi ürünlerinde yapılır. Çabuk bozulan sebze/meyvede (domates vb) yapılmaz, devlet bunu depolayamaz cıvık cıvık çürürler.

> [!WARNING]
> Dikkat! Bir ürünün ÜRETİM MİKTARI (O yıl 10 ton mu, 50 ton mu çıktığı) yıldan yıla sürekli iniş çıkış zikzak çiziyorsa o ürün **İklime (Yağmura) Göbekten Bağımlıdır** demektir. Yani tarlada sulama yoktur (Buğday/Arpa gibi). Ama grafikte miktar yıllarca ip gibi düz gidiyor veya sürekli stabil artıyorsa o ürün **Sulu Tarım** ürünüdür, iklimi falan takmaz baraj suyunu içer büyür.`,
            mnemonics: [
                {
                    title: 'İntansif Tarım (İn İçi Modern) vs Ekstansif Tarım (Eski/İlkel)',
                    text: 'INTANSIF: İnek bile İntel işlemcili (Modern) | EKSTANSIF: Eski Tas Eski Hamam (İlkel, İklime Bağımlı, Nadas var)'
                },
                {
                    title: 'Devletin Kota Getirip Sınırladığı / İzinle Ekilenler',
                    text: 'PİKE HAT-Ş : Pirinç(Çeltik)-Kenevir-Haşhaş-Tütün-ŞekerPancarı'
                }
            ],
            teacherNotes: [
                "ÖSYM Nadas'ı çok sorar. Nadas İç Anadolu'da çoktur diyoruz ama Erozsyona feci sebep olduğu için devlet Nadas'ı yasaklayıp yerine \"Nöbetleşe Ekim\"i (Bir yıl buğday, diğer yıl nohut ekme) destekliyor. Bunu unutmayın."
            ],
            keyPoints: [
                'Doğu Karadenizde makine (Traktör) satılmaz. İnsan işgücü mecburidir.',
                'İklim ve yağışa olan bağımlılığı Sulama (Barajlar) yok eder.',
                'Nadası bitiren en büyük şey SU DUR (GAP, KOP projeleridir).',
                'Destekleme alımı çabuk bozulan sebze/meyvelerde ASLA yapılmaz.'
            ],
            inlineQuizzes: [
                {
                    question: "Şanlıurfa ve çevresinde son 30 yılda sulu tarım olanaklarının muazzam derecede gelişmesi (GAP Projesi vb) dikkate alındığında, bu yörede aşağıdakilerden hangisinde bir ARTIŞ olması BEKLENEMEZ?",
                    options: [
                        "Nadasa ayrılan toprak oranında",
                        "Tarımsal ürün çeşitliliğinde ve kalitesinde",
                        "Sanayi bitkilerinin ekim alanlarında (Pamuk, mısır gibi)",
                        "Yılda birden fazla ürün alınabilen tarla oranında"
                    ],
                    correctOptionIndex: 0,
                    explanation: "Sulama olanaklarının artması topraktaki suyu devamlı taze tuttuğu için toprağı uykuya/dinlenmeye bırakmaya (Nadasa) gerek kalmaz. Bu nedenle sulamanın geliştiği yerde nadas alanları (boş tarlalar) ARTMAZ, aksine SIFFIRA iner."
                }
            ]
        },
        {
            id: 'onemli-tarim-urunleri',
            slug: 'turkiyede-yetistirilen-baslica-tarim-urunleri',
            title: '2. Önemli Tarım Ürünleri ve Yetişme Alanları',
            content: `Türkiye iklim çeşitliliği sayesinde aynı anda hem karasal tahıl hem de tropikal/ılıman sebze meyve yetiştirebilen ender ülkelerdendir. Bir tarım ürününün "Nereden, Neden dolayı, Hangi İklimden dolayı" toplandığını bilmek şarttır.

### A) Tahıllar (İç Bölge Ürünleri)
Ülkenin temel gıdasıdır. Gelişme döneminde ilkbahar yağmuru, olgunlaşma döneminde şiddetli yaz kuraklığı ve kavurucu güneş ister. Suyu hiç sevmez.
* **Buğday & Arpa:** Karadeniz Kıyısı Hariç her yerde yetişir! (Çünkü Karadeniz kıyısında yazları güneş değil yağmur vardır, buğday kafasını çıkaramaz, çürür). Türkiye'nin **Tüm Yüzölçümünde EN ÇOK ve EN YAYGIN** ekilen ürünü Buğdaydır. (Çünkü ülke tamamen karasaldır). Hasatta "Konya" tartılmasız liderdir ve Türkiye'nin Ambarıdır.
* **Mısır:** Normalde bol bol Suyu seven Karadeniz'in yöresel (karadenize has) doğal doğal yağmurla yetişen tahılıdır. Ancak... Son yıllarda Akdeniz (Çukurova Adana) ve İç Anadolu (Konya) çiftçisi tarlalarına "Damla Sulama" sistemleri kanalları döşemiş ve sırf yağ fabrikalarına Mısırı pahalıya satıp "parayı bulmak" için tarlalarına Suni olarak tonlarca SU basıp Mısır yetiştirmeye başlamışlardır. Şu an Türkiye Mısır üretiminde KARADENİZ SIFIRA YAKIN ALIRKEN, ADANA VE KONYA MISIR ÜRETİMİNDE LİDERDİR. (ÖSYM bu sulamayla kandırmacayı sorar).
* **Pirinç (Çeltik):** Suyun içinde bataklıkta (sıtma sivrisineği ortamında) yetişir. Sıtma hastalığı yaydığı için yetiştirilmesi **Sıkı Devlet Kontrolü/İzni** altındadır. Karadeniz değil MARMARA Bölgesi (**Edirne - Meriç Nehri Ergene Havzası**) %50'sini tek başına üretir. En çok nehir boylarındadır.

### B) Sanayi/Endüstri Bitkileri (Fabrikada İşlenenler)
Tarladan sofraya doğrudan yenmeyen, önce fabrikaya kütük gibi girip oradan eşya olarak çıkan çok pahalı (getirisi yüksek) ticari bitkilerdir. Türkiye'de en çok EGE Bölgesi ticari ürüne (Zühti) yönelmiştir.
* **Pamuk (Beyaz Altın):** Yetişmesi için yazın bolca şiddetli ışık, ısı ve su (damla sulama) ister. Pamuğu pamuk yapan güneşin kurutucu sıcağıdır. Karadeniz'de asla asla olamaz. Şu an ezici çoğunlukla **1. Şanlıurfa (GAP sahanı ile)**, 2. Çukurova (Adana), 3. Ege Havzaları. Iğdır'da mikroklimadan dolayı küçük bir alanda yetişir!
* **Şeker Pancarı:** Türkiye'nin geneline acayip yaygındır ancak Kıyılarda yoktur (Kıyıdaki köylü bu ucuza gidecek ürünü ekmez, yerine pamuk, çilek, portakal eker). Şeker pancarı söküldükten TAMPON 24 saat içinde Fabrikaya Sokulmalıdır (yoksa cıvık olur şeker oranı düşer, bozulur). Bu yüzden **Şeker Fabrikaları Tarlanın veya Tarla Fabrikanın Dibine KURULMAK ZORUNDADIR. (Hammaddeye Yakınlık Şartı).** Küspesi (Posa/Kabukları) ineklerin en sevdiği yemdir, o yüzden şeker fabrikasının yanıbaşı devasa inek / büyükbaş besi çiftliğiyle doludur. EGE ve MARMARA da bu fabrikadan fazla bulunmaz (Karlı değildir buralarda). Lider Konya.

### C) Meyveler, Ağaçlar (Ilıman/Sıcak Seven) - ÖSYM Favori Üçlüsü!
* **Zeytin:** Akdeniz iklimi neresiyse zeytin oradadır (Ege, Marmara Sahilleri (Sıvı Yağlık), Akdeniz ve Gaziantep (Sofralık)). Eğer bir yerde "kış aylarında sıcaklık eksiye düşüp donuyorsa (-5 derece don olayı vs)" orada zeytin KESİNLİKLE AĞACINDA DONAR ÖLÜR. Zeytinin tek şartı **KIŞ ILIKLIĞI** (Kışlar ılıman geçecek don olmayacak) dır. (Aynısı Turunçgil -Portakal / Limon- için de harfiyen geçerlidir). Ege Kıyıları ve Marmara (Balıkesir, Aydın, Muğla) dünya liderinden biridir zeytinde. NOT: Zeytin "yok (boş) yılı - var yılı" periyoduna girer, bir yıl dehşet çok çıkar diğer yıl ağaç küser. Buna "Periyodisite" denir.
* **Fındık:** Dünyada 1 numarayız. Karadeniz İkliminin bitkisidir (yıl boyu ılıman ve nem). Ordu ve Giresun (Doğu Karadeniz) ve Sakarya, Düzce (Batı Karadeniz).
* **Çay:** Dünyanın en yağmur seven ve yıkanmış (şarıl şarıl su yemiş/Güneşi en sevmeyen) toprağına ihtiyaç duyar. Türkiye'de SADECE VE SADECE **Doğu Karadeniz** (Bütünüyle Rize, birazcık Artvin ve şerit boyunca Giresun'a kadar). Cumhuriyet sonrası (Atatürk dönemi zihni derun) 1924 ten sonra dışarıdan mikroklima sahasına getirilmiş bir fidedir, yöre halkını kahve/tütün köleliğinden kurtarmıştır. Çay da şeker pancarı gibi toplandığı günün akşamı fırına (fabrikaya) girmek ZORUNDADIR.

### Özel Devlet Kontrollü Diğer Bitkiler
* **Kenevir (Uyuşturucu Otu):** Devletin sadece Sağlık ve çok dayanıklı Gemi Halatı (Tekstil) yapımında kullanılsın diye İZİN (Kota) ile ürettirdiği bitki. Esrar yapıldığı için kontrol çok sıkıdır. **Karadeniz - Samsun (Vezirköprü)**'de ağırlıklı ekilir.
* **Haşhaş:** Kapsülünden "Afyon sakızı / Morfin / Eroin" elde edilen aşırı tehlikeli bitki. Yine tıbbi üretim için BM kararıyla devlet çok ufak çaplı sımsıkı kontrolle ve denetim memuruyla ürettirir. İsminden anlaşılacağı üzere sadece "Afyonkarahisar" ve Uşak/Denizli hattında çok görülür.
* **Tütün:** Eskiden her yerde vardı ancak devlet "Kalitesiz Ürün Çıkıyor ve Piyasaya Zarar Veriyor" diye kota (kısıtlama) koydu. Sadece Ege ve Samsun/Bafra hattında "Yüksek Kaliteli / İhraçlık" Tütün ekimine izin var. (Sağlık veya uyarıcı ot bahanesi Yoktur tütünde, devlete göre sadece KAFASINA GÖRE KALİTEYİ DÜŞÜRMEK yasağı vardır).`,
            atlasLink: { layerId: 'agriculture' },
            mnemonics: [
                {
                    title: 'Türkiye\'nin Dünyada Lider Olduğu veya İhraç Ettiği Ürünler',
                    text: 'İNCİR, KAYISI, FINDIK, ÜZÜM, TÜTÜN (En Çok Satan Ürünlerimiz) (Küçük Hatırlatıcı Kuş: İKFÜT)'
                }
            ],
            warnings: [
                'Dikkat: Kış soğuklarına TAHAMMÜLÜ olmayan, kışın "Don olayı gördüm mü ölürüm" diyen bitkiler: Zeytin, İncir, Turunçgil, Muz. Bunlar kıyılara hapsolmuştur. / TAHAMMÜLÜ OLAN "dağa taşa kara vur yetişeyim" diyenler: Elma, Üzüm. Bunlar İç Anadolu dahi tüm ülkeyi kaplamıştır.'
            ],
            teacherNotes: [
                'Muz; Türkiye coğrafyasında doğal bir ürün değildir, sadece Mersin-Anamur ile Antalya-Alanya hattındaki küçücük minicik vadi (Mikroklima) sahasında, "aman soğuk vurmasın" diye dağların arkasında kalmış sera/bahçelerde devasa zorlukla ekilir. %100 Olarak Sadece O bölgededir.',
                'Fındık Karadeniz ürünüdür AMA Mısır bitkisinin üretimi Karadeniz\'de çok azdır çünkü Mısır\'ı Karadenizli köylü (dışarı satmak için değil) EKMEK YAPIP kendi YEMEK için bahçesine 3-5 tane eker. Satmaz.'
            ],
            keyPoints: [
                'Buğday, Şeker Pancarı = İç Karasal Bölgelerin hakimidir.',
                'Şeker Pancarı / Çay = Hasattan hemen sonra bozulur, fabrika tarlada YANINDA OLMALIDIR.',
                'İklim seçiciliği en sert bitkiler = Kıyıya en hapsolmuş bitkilerdir (Muz, Zeytin, Çay)',
                'Devlet Kararı = Tütün (Kalite için), Pirinç (Sıtma hastalığı), Haşhaş/Kenevir (Uyuşturucu Morfin)'
            ]
        },
        {
            id: 'hayvancilik',
            slug: 'turkiyede-hayvancilik-mera-ve-besi',
            title: '3. Hayvancılık',
            content: `Hayvancılık, Türkiye nüfusunu besleyen dev bir sektördür ama tıpkı tarım gibi hala geleneksel (ilkel) yönleri güçlüdür. Tarımın Ekstansif'i (ilkel Tarlacılık) varsa; Hayvancılığın ilkel olanı da \`Mera Hayvancılığı\`' dır. Gelişmiş, fabrika kapalı ortam süper yem verimli çeşidine de \`Besi / Ahır Hayvancılığı\` denir.

### Mera vs Besi (Ahır) Karşılaştırması
1. **Mera Hayvancılığı (Doğaya Salım / Otlak / İlkel / Ekstansif):** İhtiyarın eline sopayı alıp yüzlerce Sığır veya Koyunu dağa tepeye, çayıra / bozkıra otlatmaya salmasıdır. 
   - İklime göbekten bağlıdır! Kurak, kavurucu bir yaz geçer ve otlar yanıp kül olursa inekler aç kalır, o yıl üretilen Ets Sütü (Verim) yerle bir olur, dalgalanma yaşanır. Kışın ineklerin yiyecek bir şeyi kalmaz ahırda kuru saman yer sütü keser. Sadece kaba (ot) ile beslenir.
   - Karlı, büyük paralar getirmeyen, Erzurum Kars / Doğu ve İç Anadolu'nun dağ köylerinde halen süren klasik Anadolu çiftçi hayvancılığıdır.

2. **Besi ve Ahır Hayvancılığı (Fabrikasyon / Modern / İntansif):** İnekler dağa taşa salınmaz. 5 Yıldızlı otel gibi klimalı dev kapalı tesis atölyelerinde, genetiği sağlam safkan (Hollanda-Holstein vb vb) ıslah inekleri önlerinde bilimsel hazırlanmış protein ve enerji "Suni Yem/Sanayi Yem"lerle beslenerek adeta et ve süt fabrikası gibi bakılırlar.
   - İklime BAĞIMLILIK SIFIRDIR! Dışarıda Kıyamet Kopsa, cehennem olsa içerde klimalı süper beslenen hayvan devamlı süt verir, et verir. Verim devasa yüksektir ve yıllara göre dalgalanma "Olamaz" (ip gibidir). Tıpkı Sulu tarım gibi zenginliğin modernlik simgesidir.
   - Bu tesisleri kafa karıştırıp köyde sanmayın! Besi hayvancılığı Nüfusun Şişkin, Tüketimin devasa olduğu "MEGA KENTLERİN (İstanbul, İzmir, Ankara, Bursa) Dibine, Etine dolgun Para Verecek Büyük Pazar (Tüketici Piyasasına)" kurulurlar. Zengin Trakya ve Marmara çiftçisinin (Keskinoğlu, Sütaş, Torku vs düşünün köylüsünü bile zengin eder) asıl serveti buradadır.

---

### Hayvan Türleri ve Zirve Yaptıkları İklim & Bölgeler

**1. Küçükbaş Hayvancılık (Bozkırın Çocuğu):**
* Kendileri Karasal Bozkırın yavrularıdır. Otların diz boyuna gelmeden kurumasına "Bozkır" denildiğini öğrenmiştik. İnceden ufacık kuru otları ısıran, çok fazla suya ihtiyaç duymayan hayvan = **KOYUN VE KIL KEÇİSİ** 'dir. 
    * **Koyun (Merinos):** Türkiye'nin EN ÇOK (sayıca Milyon Milyon) beslenen hayvan türüdür (Nedeni ülkenin çoğunun Bozkır Karası iklim olması yeryüzünün düzlük bozkır olmasıdır). İç Anadolu'da (Konya Dağlarında) acayip yoğundur. (Dağlık zor yerlerde değil yayvan ovalarda rahat gezer).
    * **Kıl Keçisi:** Adı üstünde "Keçi" , dağa taşa çalıya tırmanır, çok inatçıdır. Koyunun aksine Eğim Sarp yamaç ve kayalık (Dağlık Orman) ve ağaçların uç dalları (Makiler) de yaşamayı sever. Türkiye'de tek bir mekanı vardır: Engebeli olan **Akdeniz Torosları, Teke ve Taşeli Platoları, Muğla (Menteşe)**. 
    * *Not: Kıl Keçisi ormanlara sürüler halinde dalıp bebek ağaç fidanlarını koparıp kök salmasını öldürdüğü için ve devleti sinir ettiği için "Devlet tarafından kota/Orman Yasası getirilerek Sayıları Kasıtlı Azaltılan (İmha edilen) Hayvandır!"* Devlet yerine Ankara Tiftik keçisini teşvik eder (Ankara-Tiftik, çok inatçı yaramaz değildir, tüyü kazağı / yünü harikadır).

**2. Büyükbaş Hayvancılık (Mera/Çayır Çocuğu):**
* Sığır, inek, manda gibi dev memelidir. Bu hayvan 100 litre su içip bir tarlayı yiyebilir, küçükbaşın kuruyan otlarında cılızlaşır gezemez. O nedenle BOZKIR da değil de, dağ tepelerindeki O Gür, Yeşerip Boya gelmiş dev Yağmurlu çayırlara = **Alpin Çayırlar**' a ihtiyaç duyar.
* Gür Yaz otlağı Çayırları = "Yaz Yağışlarının Düştüğü Türkiye deki Tek Nokta" olan **Erzurum - Kars - Ardahan** ile, 12 ay yağmur yiyen, yemyeşil olan ve mısır bahçesi ile kaplı gür yer **Doğu Karadeniz** Kıyı yaylalarıdır. 

**3. Arıcılık ve Kümes:**
* **Arıcılık:** Balarısı. İster ki; Dünyanın en çeşitli, milyon tane çiçeği bulunsun, engebeli olsun sanayi şehri (egzoz) olmasın ki tertemiz bal çıksın. Türkiye "Dağlık Engebeli ve Binlerce Endemik Bitkili (Çiçek şöleni)" olduğu için Arı cennettir, dünya 2.sidir Çin den sonra üretimde! Zirve İller: **Muğla (Çam balı Dünyaca ünlü)**, **Ordu-Giresun**, **Hakkari**.
* **Kümes Hayvancılığı (Tavuk/Yumurta):** Beyler, tavuk İklim seçmez. Üşüdüğünde veya yaz sıcağında açık doğada gezerek ticari yumurta yapılmaz. Tavuklar Kapalı, ısı devresi ayarlı 3 katlı hangar klimalı çitlerde, önüne sürekli sanayi protein doymuş yemi konularak makine gibi 24 saat ışıkla "Yumurtlatılır!". Bu sebeple Kümes Hayvancılığı **Kesinlikle İklim ve Bitki Örtüsünden ETKİLENMEZ.** Bu hangar/fabrikalar nüfusu en kalabalık yer neresiyse "Pazara Ulaşım ve Dağıtım Maliyeti Coped olsun diye" Pazar şehirlerinin dibine köylerine kurulur. ZİRVE İller: **Marmara Bölgesi, Balıkesir, Manisa, Bolu/Mudurnu, Sakarya.** (Hiç Doğu'ya Karsa gidip devasa beyaz tavuk yatırımı yapan iş adamına rastlamazsınız çünkü taşıyacak market / adam yok).`,
            mnemonics: [
                {
                    title: 'Hayvancılık Mekanları',
                    text: 'KOYUN = İç Anadolu (Bozkır) | KEÇİ = Akdeniz Torosları (Maki/Çalı) | SIĞIR = Erzurum Kars (Alpin Çayır) | TAVUK/Besi = Marmara-Ege (Pazar/Para/Beton)'
                }
            ],
            teacherNotes: [
                'ÖSYM "İklime ve bitki örtüsüne bağımlılık EN AZDIR" diye bir soru sorarsa şıklarda gözü kapalı ya KÜMES ya da BESİ/AHIR diye dolanan ahır şıklarını veyahut da direk şehirleri işaretleyin (İstanbul der Konya demez vs). "İklim şartlarının doğrudan etkili olduğu" sorusuna MERA/Büyükbaş ve Arıcılık yapıştırılır.',
                "İpekböcekçiliği dut yaprağını sever ve sinsi sinsi dut ağacındaki asimetrik kozalardan yetişir. Eski gücü kalmamıştır ancak hala Güneydoğu (Diyarbakır -1. sıra) ve Marmara'da(Bursa - tarihi) önemli bir paya sahiptir.",
                'Karadenizde kıyı balıkçılığının çok güçlü (>%80 Karadeniz) olmasının sebebi denizin verimli olmasından çok dağın ve denizin arasına sıkışan adamın "başka çaresinin bulunmayıp, tarım tarlası yetmediği için" mecburen gırgırla denize (Uzgur vs) atlamasıdır.'
            ],
            keyPoints: [
                'Doğal Bitki Örtüsünden ETKİLENMEYENLER: Kümes,  Ahır(Besi) ve İpek Böcekçiliği',
                'Türkiye de Besi En çok Marmara dadır ama Mera en fazla Doğu Anadolu',
                'Devlet Ormanı korumak için keçi ve çobanlarına para cezası / veya tiftiğe dönme teşviki vermektedir.'
            ],
            inlineQuizzes: [
                {
                    question: "Günümüzde Türkiye'nin toplam hayvancılık üretimi içerisinde \"Mera(Doğal/Saldım Çayıra)\" Hayvancılığının payının şiddetle azaltılarak, \"Besi (Ahır/Modern)\" hayvancılığının hızla payının devletçe artırılmasına çalışılmasının ULAŞILAMAYACAK tek sonucu aşağıdakilerden hangisidir?",
                    options: [
                        "Dış hava / hava durumu koşullarına (kuraklığa ve kar/soğuğuna) vb doğal iklime bağlılık biterek azalır.",
                        "Et ve süt üretimi veriminde yıllara/mevsimlere göre olan o inanılmaz dalgalanmalar (kuru yaz az et, yağmurlu yaz çok et olayı) durularak sabit ip gibi bir çizgiye gelir.",
                        "Hayvan başı verim (bir inekten elde edilen total fayda) ile hayvan sayı (mevcudu) arasındaki doğrudan tersi bir etkiye yol açarak inanılmaz bir ivme kazanılır, kısacası \"Koca memeli/ etli budlu kaliteli ithal mandıra Hollandalı sığırlar\" vb ıslaha geçiş artar kalite yükselir.",
                        "Türkiye geneli Et ve Süt üretimleri \"Ucuzlayarak\" vatandaşın hayvanları ot bedava olduğu için ve maliyet olmadığından dolayı ete ulaşımı bedava (veya eskiye nazaran inanılmaz cüzi ucuzluğa) hale gelir."
                    ],
                    correctOptionIndex: 3,
                    explanation: "Besi/Ahır hayvancılığı korkunç derecede kapitalist ve paraya dayalı MASRAFLI fabrikatördür. Klimalı hangar kapalı binalar, sürekli İthalatlı Dolar bazında Suni Yem / Sanayi yemi alınması mecburiyeti gibi nedenlerden dolayı Ahır Hayvancılığının girdi kalemi (Maliyeti) Mera hayvancılığına göre KAT BE KAT PAHALIDIR ve bu nedenle Ahır besisinde 'Tüketici Piyasasına Ucuzluk' diye bir kavram görülmesi imkansız/zıt bir durumdur."
                }
            ]
        },
        {
            id: 'ormancilik-balikcilik-seracilik',
            slug: 'ormancilik-balikcilik-ve-seracilik',
            title: '3. Ormancılık, Balıkçılık ve Seracılık',
            content: `## Ormancılık

Türkiye orman alanları açısından Avrupa'nın orta sıralarındadır. Toplam ülke yüzeyinin yaklaşık **%28-30'u** ormanlarla kaplıdır.

### Türkiye'nin Ormanlık Bölgeleri
* **İl bazında en geniş orman:** Antalya (1. sıra), Kastamonu, Bolu, İstanbul.
* **Bölge bazında en ormanlık:** Karadeniz Bölgesi (nem + yağış).
* **En az orman:** İç Anadolu ve Güneydoğu Anadolu (kurak iklim, step).

### Orman Ürünleri Sanayi
* **Kağıt-Karton:** Giresun (Türkiye Selüloz — SEKA), Kastamonu, Zonguldak Çaycuma, Muğla Dalaman, Mersin Taşucu.
* **Kereste-Mobilya:** Karabük, Bolu, Kastamonu.
* **Reçine:** Akdeniz bölgesi çam ormanları (Muğla, Antalya).

> [!WARNING]
> Kağıt fabrikaları su ve hammadde (orman) gerektirdiğinden **yalnızca ormanlık kıyı bölgelerine** kurulur. İç Anadolu ve GDA'da kağıt fabrikası olamaz!

### Ormanların Azalma Nedenleri
1. Orman yangınları (Akdeniz ve Ege: yaz kuraklığı)
2. Kaçak kesim
3. Aşırı otlatma (orman altı tahribi)
4. Tarım ve yapılaşma baskısı

---

## Balıkçılık

### Su Ürünleri Üretimi
* Türkiye denizlerinde **avcılık balıkçılığı** yapılmaktadır.
* **En fazla balık avı yapılan deniz: Karadeniz** (Türkiye balık üretiminin yaklaşık %65-70'i).
    * Karadeniz'de en çok avlanan balık: **Hamsi** (Aralık-Ocak zirvesi — Trabzon, Rize, Ordu).
    * Hamsi Türkiye'nin en çok avlanan balığıdır.

### Denizlere Göre Balıkçılık
| Deniz | Önemli Türler | Avlanma Miktarı |
|-------|--------------|-----------------|
| Karadeniz | Hamsi, İstavrit, Palamut | 1. sıra (%65-70) |
| Ege | Çipura, Levrek, Sardalya | 2. sıra |
| Akdeniz | Çipura, Orfoz, Barbunya | 3. sıra |
| Marmara | Lüfer, İstavrit | Az (kirliliğe bağlı) |

### Kültür Balıkçılığı (Aquakültür)
* Doğal ortamlarda çiftlik ortamında balık yetiştiriciliği.
* **Ege kıyıları (İzmir, Muğla):** Çipura ve Levrek yetiştiriciliğinde Türkiye 1. sıradadır.
* **İç su balıkçılığı:** Sakarya, Seyhan havzaları ve baraj göllerinde alabalık.

---

## Seracılık

Sera kültürü (kapalı ortamda tarım), mevsim dışında sebze-meyve üretimine olanak sağlar.

### Türkiye'de Seracılık
* **Antalya:** Türkiye'nin seracılık başkentidir. Özellikle **Kumluca ve Finike** ilçeleri.
    * Kışın tüm Türkiye'nin domates, biber, salatalığı Antalya seralarından çıkar.
    * Avrupa'ya ihracat: Türkiye sera sebzelerinde önemli ihracatçı.
* **Mersin (Erdemli):** İkinci büyük sera alanı.

### Seracılığın Gelişme Nedenleri
1. Kış aylarında bile sıcak iklim (Akdeniz kıyısı — don olmuyor)
2. Yoğun güneş ışığı (güneş ısıtması ile enerji tasarrufu)
3. Su kaynakları yeterliliği
4. Yakın liman (ihracat kolaylığı — Antalya ve Mersin limanları)`,
            keyPoints: [
                'En fazla orman: Antalya ili (1. sıra).',
                'Kağıt fabrikaları: Yalnızca ormanlık kıyı bölgelerine kurulur.',
                'En fazla balık: Karadeniz (%65-70, hamsi).',
                'Kültür balıkçılığı: Ege (çipura, levrek).',
                'Seracılık başkenti: Antalya (Kumluca, Finike).'
            ],
            inlineQuizzes: [
                {
                    question: "Türkiye'de avcılık yoluyla en fazla balık avlanan deniz ve en çok avlanan tür hangisidir?",
                    options: [
                        "Ege Denizi — Çipura",
                        "Karadeniz — Hamsi",
                        "Akdeniz — Levrek",
                        "Marmara Denizi — Lüfer"
                    ],
                    correctOptionIndex: 1,
                    explanation: "Türkiye'nin toplam balık avının yaklaşık %65-70'i Karadeniz'den yapılmaktadır. Karadeniz'de en çok avlanan balık hamsidir. Hamsi, kış aylarında sürüler halinde hareket ettiğinden avcılığı son derece yoğundur."
                }
            ]
        }
    ]
};
