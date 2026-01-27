import { NoteUnit } from '@/types/notes';

export const curriculum: NoteUnit[] = [
    {
        id: 'unit-00',
        title: 'Türkiye\'nin Coğrafi Konumu',
        icon: 'Globe',
        sections: [
            {
                id: 'cografi-konum-tam',
                slug: 'turkiyenin-cografi-konumu',
                title: 'Türkiye\'nin Coğrafi Konumu (Matematik & Özel)',
                content: `Türkiye'nin dünya üzerindeki yeri iki başlık altında incelenir: Matematik (Mutlak) Konum ve Özel (Göreceli) Konum.

### 1. Matematik (Mutlak) Konum
Türkiye; **36°-42° Kuzey Enlemleri** ile **26°-45° Doğu Boylamları** arasında yer alır.

**Enlemin Sonuçları (Kuzey Yarım Küre & Orta Kuşak):**
- **Orta Kuşakta Olmamızın Sonuçları (A-B-C-D):**
    - **A**kdeniz İklim kuşağındayız.
    - **B**atı Rüzgarları etkilidir.
    - **C**ephe Yağışları görülür.
    - **D**ört Mevsim belirgin yaşanır.
- **Kuzey Yarım Kürede Olmamızın Sonuçları:**
    - Güneyden esen rüzgarlar sıcaklığı artırırken, kuzeyden esenler azaltır.
    - Bakı yönü her zaman GÜNEY'dir.
    - Gölge yönü her zaman KUZEY'dir.
- **Enlem Etkisi (Güneyden Kuzeye):** Güneş ışınlarının açısı küçülür, sıcaklık azalır, gölge boyu uzar, çizgisel hız azalır, yerçekimi artar.

**Boylamın Sonuçları:**
- En doğusu (Iğdır) ile en batısı (Gökçeada) arasında **19 boylam (76 dakika)** zaman farkı vardır.
- Türkiye genelinde **+3. Saat Dilimi (45° Doğu - Iğdır)** ortak saat olarak kullanılır.

### 2. Özel (Göreceli) Konum
Türkiye'nin denizlere, kıtalara, komşulara, yer şekillerine ve jeopolitik öneme sahip noktalarına göre konumudur.
- **Üç Tarafı Denizlerle Çevrili:** Yarımada özelliği, denizellik.
- **Yükselti:** Ortalama yükselti **1132m**'dir ve batıdan doğuya artar. Bu durum doğuya gidildikçe sıcaklığın azalmasına ve karın yerde kalma süresinin uzamasına neden olur.
- **Jeopolitik Önem:** İstanbul ve Çanakkale Boğazları, enerji koridoru (TANAP, Türk Akımı), Asya-Avrupa köprüsü.
- **Genç Oluşum:** Deprem riskinin yüksek olması, sıcak su kaynaklarının (jeotermal) zenginliği.`,
                mnemonics: [
                    {
                        title: 'Orta Kuşak Kanıtları',
                        text: 'A-B-C-D (Akdeniz İklimi, Batı Rüzgarları, Cephe Yağışları, Dört Mevsim)'
                    }
                ],
                warnings: [
                    'Sıcaklığın kuzeye gidildikçe azalması enlemle; ancak bir dağın yamacı boyunca azalması yükseltiyle (özel konum) açıklanır.',
                    'Türkiye Dönenceler dışındadır; bu yüzden güneş ışınları asla dik gelmez, gölge boyu asla sıfır olmaz.'
                ],
                teacherNotes: [
                    'Sorularda "Aynı anda farklı iklim özelliklerinin yaşanması" özel konumdur (yer şekilleri kısa mesafede değişir).',
                    '"Yıl içinde dört mevsimin belirgin yaşanması" ise matematik konumdur (orta kuşak).'
                ],
                keyPoints: [
                    '36-42 K / 26-45 D',
                    'Orta Kuşak: Akdeniz, Batı Rüzgarı, Cephe, 4 Mevsim',
                    'Bakı: Güney, Gölge: Kuzey',
                    'Doğu-Batı: 76 dakika fark',
                    'Ortalama yükselti: 1132m (Batı -> Doğu artar)'
                ]
            }
        ]
    },
    {
        id: 'unit-01',
        title: 'Türkiye\'nin Yer Şekilleri',
        icon: 'Mountain',
        sections: [
            {
                id: 'jeolojik-gecmis',
                slug: 'turkiyenin-jeolojik-gecmisi',
                title: 'Jeolojik Geçmiş ve Tektonizma',
                content: `Türkiye, jeolojik zamanlar boyunca farklı evrelerden geçmiş, büyük oranda genç oluşumlu bir ülkedir.

### Jeolojik Zamanlar
- **1. Zaman (Paleozoik):** Masif araziler oluştu (Zonguldak, Menteşe, Yıldız Dağları). **Taşkömürü** yatakları bu dönemde oluşmuştur.
- **2. Zaman (Mezozoik):** Tethys Denizi dibinde tortulanma oldu. Türkiye büyük oranda deniz altındaydı.
- **3. Zaman (Tersiyer):** Türkiye arazisi büyük oranda kara haline geldi. **Alp-Himalaya kıvrım sistemi** (Toroslar ve Kuzey Anadolu Dağları) oluştu. **Linyit, Petrol, Tuz ve Bor** yatakları bu dönemdedir.
- **4. Zaman (Kuvaterner):** Egeid karası çöktü (Ege Denizi oluştu). Boğazlar oluştu. Anadolu toptan yükseldi (Epirojenez). Bugün Türkiye'nin ortalama yükseltisinin fazla olmasının ana nedeni budur.

### Tektonizma ve Depremler
Türkiye 3 ana fay hattı üzerindedir:
1. **KAF (Kuzey Anadolu Fay Hattı):** Saros Körfezi'nden Aras Vadisi'ne kadar.
2. **DAF (Doğu Anadolu Fay Hattı):** Hatay'dan Bingöl/Karlıova'ya kadar.
3. **BAF (Batı Anadolu Fay Hattı):** Ege Bölgesi'ndeki horst-graben sistemleri.`,
                atlasLink: { coords: { lat: 39.0, lng: 35.0, zoom: 6 } },
                keyPoints: [
                    'Genç ülkeler; deprem riski yüksek, jeotermal kaynak zengini, akarsuları aşındırma gücü fazladır.',
                    'Linyit: 3. Zaman, Taşkömürü: 1. Zaman.',
                    'Ege Denizi ve Boğazlar: 4. Zaman.'
                ]
            },
            {
                id: 'daglar-olusum',
                slug: 'turkiyenin-daglari',
                title: 'Dağlar ve Oluşum Şekilleri',
                content: `Türkiye'nin dağları oluşum kökenlerine göre üç ana gruba ayrılır.

### 1. Kıvrımlı Dağlar (Orojenez)
Yan basınçlarla esnek tabakaların kıvrılmasıyla oluşur. Üstte kalan kısma **Antiklinal**, altta kalana **Senklinal** denir.
- **Kuzey Anadolu Dağları:** Kaçkarlar, Küre, Ilgaz, Bolu.
- **Toroslar:** Bolkarlar, Aladağlar, Geyik Dağları.

### 2. Kırıklı Dağlar (Orojenez)
Sertleşmiş tabakaların kırılmasıyla oluşur. Üste çıkan kısım **Horst**, altta kalan çöküntü alanı **Graben**'dir.
- **Ege'dekiler:** Kaz, Madra, Yunt, Bozdağlar, Aydın, Menteşe.
- **Akdeniz'deki Tek Örnek:** Nur (Amanos) Dağları.

### 3. Volkanik Dağlar
Magmanın yüzeye çıkmasıyla oluşur.
- **İç Anadolu:** Erciyes, Hasan Dağı, Melendiz, Karadağ, Karacadağ.
- **Doğu Anadolu:** Ağrı (En yüksek), Tendürek, Süphan, Nemrut.
- **Ege:** Kula Tepeleri (En genç volkanlar).
- **Güneydoğu Anadolu:** Karacadağ (Kalkan volkan özelliği).`,
                atlasLink: { layerId: 'mountains' },
                mnemonics: [
                    {
                        title: 'Ege Kırıklı Dağlar',
                        text: 'KAZ - MADRA - YUNT - BOZDAĞLAR - AYDIN - MENTEŞE'
                    }
                ],
                teacherNotes: [
                    'Dağların uzanışının sonuçları: Karadeniz ve Akdeniz\'de kıyı ile iç kesim arası ulaşım zordur (Geçitlerle sağlanır), iklim içeri giremez, kıyı boyu falez fazladır.',
                    'Ege\'de ise denizellik içeri girebilir, ulaşım kolaydır, kıyı girintili çıkıntılıdır.'
                ],
                keyPoints: [
                    'En yüksek dağ: Ağrı (Volkanik)',
                    'Tek kalkan volkan: Karacadağ (GDA)',
                    'Horse/Graben: Ege\'de yaygın',
                    'Antiklinal/Senklinal: Karadeniz/Akdeniz'
                ]
            },
            {
                id: 'ovalar-platolar',
                slug: 'ovalar-ve-platolar',
                title: 'Ovalar ve Platolar',
                content: `### Türkiye'nin Ovaları
Ovalar oluşumlarına göre Delta, Tektonik ve Karstik olarak ayrılır.

**1. Delta Ovaları (Kıyı Ovaları):** Akarsuların taşıdığı alüvyonları denize döküldüğü yerde biriktirmesiyle oluşur. 
- **Çukurova (Seyhan/Ceyhan) - En Büyük**, Bafra ve Çarşamba (Karadeniz), Selçuk ve Efes (Ege).
- Delta oluşumu için; kıyının sığ olması, gel-gitin az olması ve akarsuyun bol alüvyon taşıması gerekir.

**2. Karstik Ovalar (Polye):** Kalkerli arazilerde erime sonucu oluşur. 
- **Teffeni, Acıpayam, Korkuteli, Elmalı, Kestel (TAKKE).** Batı Toroslarda yaygındır.

**3. Tektonik Ovalar:** Fay hatları üzerindeki çöküntü alanlarıdır. Türkiye'nin en yaygın ova tipidir. Konya, Malatya, Iğdır gibi.

---

### Türkiye'nin Platoları
Çevresine göre yüksekte kalmış, akarsularla yarılmış düzlüklerdir.
- **Karstik Platolar:** Teke ve Taşeli (Akdeniz). Nüfus azdır, tarım zordur (Arıcılık ve keçi besiciliği yapılır).
- **Volkanik (Lav) Platolar:** Erzurum, Kars, Ardahan. Yaz yağışları görülür, büyükbaş hayvancılık gelişmiştir.
- **Aşınım Platoları:** Çatalca-Kocaeli (En alçak plato). Sanayi ve ticaret merkezi.
- **Tabaka Düzlüğü Platoları:** Haymana, Cihanbeyli, Obruk, Bozok (İç Anadolu) ve Gaziantep-Şanlıurfa (GDA). Tahıl tarımı ve küçükbaş hayvancılık yaygındır.`,
                atlasLink: { layerId: 'plateaus' },
                mnemonics: [
                    {
                        title: 'Karstik Ovalar',
                        text: 'TAKKE - (Teffeni, Acıpayam, Korkuteli, Elmalı, Kestel)'
                    }
                ],
                keyPoints: [
                    'En büyük delta: Çukurova',
                    'En büyük tektonik ova: Konya Ovası',
                    'Sanayi platoları: Çatalca-Kocaeli',
                    'Keçi/Arıcılık platoları: Teke-Taşeli',
                    'Mera/Büyükbaş platoları: Erzurum-Kars'
                ]
            },
            {
                id: 'akarsular-goller',
                slug: 'akarsular-ve-goller',
                title: 'Akarsular ve Göller',
                content: `### Akarsular
Türkiye akarsularının genel özellikleri:
- **Akış hızları** ve **aşındırma güçleri** fazladır (Denge profiline ulaşmamışlardır).
- **Hidroelektrik potansiyelleri** yüksektir.
- **Debileri** (akımları) düşüktür ve rejimleri düzensizdir (Karadeniz hariç).
- Ulaşıma elverişli değildirler (Sadece Bartın Çayı'nın ağzında küçük tonajlı ulaşım).

**Havzalarına Göre Bazı Akarsular:**
- **Basra Körfezi'ne:** Fırat (En uzunumuz), Dicle.
- **Hazar Denizi'ne (Kapalı):** Aras, Kura.
- **Karadeniz'e:** Kızılırmak (Sınırlarımız içindeki en uzun), Yeşilırmak, Sakarya.
- **Ege'ye:** Büyük ve Küçük Menderes, Gediz.

---

### Göller
Oluşumlarına göre Doğal ve Yapay (Baraj) göller olarak ayrılır.

**Doğal Göller:**
- **Tektonik Göller:** Tuz Gölü, Sapanca, İznik, Manyas, Beyşehir, Burdur, Hazar.
- **Karstik Göller:** Salda (Türkiye'nin Maldivleri), Kestel, Avlan.
- **Volkanik Göller:** Nemrut (Kaldera), Meke (Maarr - Dünyanın Nazar Boncuğu).
- **Buzul (Sirk) Gölleri:** Uludağ, Kaçkar, Toroslar üzerinde küçük yüksek rakımlı göller.
- **Karma Oluşumlu:** Van Gölü (Hem volkanik set hem tektonik).

**Set Gölleri:**
- **Heyelan Set:** Tortum, Sera, Abant, Yedigöller (Karadeniz yaygın).
- **Volkan Set:** Erçek, Nazik, Haçlı, Balık, Çıldır (Doğu Anadolu yaygın).
- **Alüvyal Set:** Köyceğiz, Bafa (Çamiçi), Mogan, Eymir.`,
                atlasLink: { layerId: 'lakes' },
                warnings: [
                    'Gidiyeni (lake outlet) olan göllerin suları tatlıdır. Gidiyeni olmayanların suyu sodalı, tuzlu veya acıdır.',
                    'Beyşehir Gölü en büyük tatlı su gölümüzdür.'
                ],
                keyPoints: [
                    'En büyük göl: Van Gölü (Sodalı)',
                    'En sığ büyük göl: Tuz Gölü (Yazın kuruma riski)',
                    'En büyük baraj: Atatürk Barajı',
                    'Kızılırmak: En uzun yerli nehir',
                    'Fırat: En yüksek enerji potansiyeli'
                ]
            },
            {
                id: 'dis-kuvvetler-kiyi',
                slug: 'dis-kuvvetler-ve-kiyi-tipleri',
                title: 'Dış Kuvvetler ve Kıyı Tipleri',
                content: `Türkiye'de yer şekillerini şekillendiren dış güçlerin başında **AKARSULAR** gelir.

### Diğer Dış Güçler
- **Karstik Şekiller:** Lapya (en küçük), Dolin, Uvala, Polye (en büyük erime şekli). Mağara, Düden, Obruk. Biriktirme şekilleri: Sarkıt, Dikit, Sütun, Traverten (Pamukkale).
- **Rüzgarlar:** En etkili olduğu yer İç Anadolu ve GDA (Bitki örtüsü cılız). Mantar kaya, Tafoni, Lös (rüzgar taşıdığı toprak).
- **Buzullar:** Etkisi en az olan dış güçtür. Sadece yüksek dağlarda (2200m+ ) görülür.

### Kıyı Tipleri
1. **Boyuna Kıyı Tipi:** Dağların kıyıya paralel uzandığı Akdeniz ve Karadeniz'de görülür. Falez (yalıyar) çoktur.
2. **Enine Kıyı Tipi:** Dağların kıyıya dik uzandığı Ege kıyılarında görülür. Körfez ve koy fazladır.
3. **Ria Kıyı Tipi:** Eski akarsu vadilerinin deniz altında kalması. İstanbul ve Çanakkale Boğazları, Haliç, Gökova (Muğla).
4. **Dalmaçya Kıyı Tipi:** Dağların kıyıya paralel olduğu yerlerde denizin yükselmesiyle adacıklar oluşması. Antalya Kaş-Finike arası.
5. **Kalanklı Kıyı:** Karstik erime sonucu oluşan dar ve derin koylar. Mersin-Silifke kıyıları.`,
                examAnalysis: 'ÖSYM; Türkiye\'de fiyort ve skyer tipi kıyıların GÖRÜLMEME nedenini çok sorar. Cevap: Matematik konum (Enlem - Kutup kuşağına uzağız).',
                keyPoints: [
                    'Ria: Boğazlar ve Haliç',
                    'Dalmaçya: Kaş-Finike',
                    'Enine: Ege',
                    'Boyuna: Karadeniz-Akdeniz',
                    'Buzul etkisi en az'
                ]
            }
        ]
    },
    {
        id: 'unit-02',
        title: 'Türkiye\'nin İklimi',
        icon: 'CloudRain',
        sections: [
            {
                id: 'iklim-elemanlari',
                slug: 'iklim-elemanlari-sicaklik-ruzgar-yagis',
                title: 'İklim Elemanları (Sıcaklık, Rüzgar, Yağış)',
                content: `### 1. Sıcaklık
Türkiye'de sıcaklık üzerinde Enlem, Yükselti, Denizellik-Karasallık ve Bakı etkilidir.
- **En Sıcak Yerler:** Yazın GDA (Sıcak rüzgarlar ve şiddetli buharlaşma nedeniyle), Kışın Akdeniz (Enlem ve Denizellik).
- **En Soğuk Yerler:** Kuzeydoğu Anadolu (Erzurum-Kars) (Enlem + Yükselti + Karasallık).

### 2. Basınç ve Rüzgarlar
Türkiye'yi etkileyen basınç merkezleri:
- **İzlanda Alçak B:** Kışın ılık ve yağışlı hava getirir.
- **Sibirya Yüksek B:** Kışın sert soğuk ve ayaz getirir.
- **Asor Yüksek B:** Tüm yıl etkili, yazın kuraklık getirir.
- **Basra Alçak B:** Yazın sıcaklık ve samyeli rüzgarını getirir.

**Yerel Rüzgarlar (Kayıp Sakal):**
- **Kuzeyden (Soğuk):** **Ka**rayel, **Yı**ldız, **P**oyraz.
- **Güneyden (Sıcak):** **Sa**myeli (Keşişleme), **Kı**ble, **L**odos.

### 3. Nem ve Yağış
- **Maksimum Nem:** Sıcaklıkla doğru orantılıdır (Yazın GDA, kışın Akdeniz).
- **Mutlak Nem:** Deniz kenarlarında fazladır.
- **Bağıl Nem:** Yağış ihtimalidir. Karadeniz'de her zaman yüksektir.

**Yağış Oluşum Tipleri:**
- **Yamaç (Orografik):** Dağların kıyıya paralel olduğu Karadeniz ve Akdeniz'de.
- **Konveksiyonel (Yükselim):** İç Anadolu'da (Kırkikindi yağışları) ve Erzurum-Kars'ta.
- **Cephe (Frontal):** Türkiye genelinde kışın görülür (Matematik konum - Orta kuşak kanıtı).`,
                mnemonics: [
                    {
                        title: 'Yerel Rüzgarlar',
                        text: 'KAYIP SAKAL (Karayel, Yıldız, Poyraz | Samyeli, Kıble, Lodos)'
                    }
                ],
                teacherNotes: [
                    'Lodos, güneybatıdan eser. Isıtıcı etkisinden dolayı karları hızla eritip sellere neden olabilir. "Soba zehirlenmelerine" yol açan rüzgardır.',
                    'Fön Rüzgarı: Bir dağ yamacından aşağı inen havanın her 100 metrede 1 derece ısınmasıdır. Rize çevresinde Turunçgil yetişmesini sağlar (Mikroklima).'
                ],
                keyPoints: [
                    'En çok yağış alan yer: Rize',
                    'En az yağış alan yer: Tuz Gölü çevresi ve Iğdır',
                    'Siberia YB: Soğuk ve kuru',
                    'Azore YB: En kararlı sistem',
                    'Fön rüzgarı sıcak ve kurutucudur'
                ]
            },
            {
                id: 'iklim-tipleri-bitki',
                slug: 'iklim-tipleri-ve-bitki-ortusu-turkiye',
                title: 'İklim Tipleri ve Bitki Örtüsü',
                content: `Türkiye'de 4 ana iklim tipi ve bunlara ait bitki örtüsü görülür.

### 1. Karadeniz İklimi
- **Her Mevsim Yağışlı:** Yağış rejimi en düzenli olan iklimdir.
- **En Fazla Yağış:** Sonbaharda.
- **Bitki Örtüsü:** Orman (Geniş yapraklı ve karışık).
- **Toprak Tipi:** Kahverengi Orman Toprağı.

### 2. Akdeniz İklimi
- **Yazlar Sıcak ve Kurak, Kışlar Ilık ve Yağışlı.**
- **En Fazla Yağış:** Kışın.
- **Bitki Örtüsü:** Maki (Kısa boylu çalılık - Zeytin, Zakkum, Mersin). Makilerin tahrip edilmesiyle **Garig** oluşur.
- **Toprak Tipi:** Terra Rosa (Kırmızı toprak - Demir oksit zengin).

### 3. Step (Bozkır) İklimi / Karasal İklim
- **Yazlar Sıcak-Kurak, Kışlar Soğuk-Karlı.**
- **En Fazla Yağış:** İlkbaharda.
- **Bitki Örtüsü:** Bozkır (Eşek dikeni, Yavşan otu). Ormanların tahrip edilmesiyle oluşan bozkırlara **Antropojen Bozkır** denir.
- **Toprak Tipi:** Kestane veya Kahverengi Step Toprağı.

### 4. Sert Karasal İklim (Erzurum-Kars-Ardahan)
- **Kışlar Çok Uzun ve Sert, Yazlar Serin.**
- **En Fazla Yağış:** Yazın.
- **Bitki Örtüsü:** Çayır (Alpin Çayırlar). Büyükbaş hayvancılık için idealdir.
- **Toprak Tipi:** Çernezyom (Kara Toprak - Dünyanın en verimli ama iklim yüzünden tarımın zor olduğu toprağı).`,
                mnemonics: [
                    {
                        title: 'Yağışın Mevsimlere Dağılışı (E Çizimi)',
                        text: 'İç Anadolu (İlkbahar) -> Karadeniz (Sonbahar) -> Akdeniz (Kış) -> Erzurum/Kars (Yaz)'
                    }
                ],
                examAnalysis: 'ÖSYM; sığla ağacı, datça hurması gibi sadece Türkiye\'de yetişen (Endemik) bitkileri ve eski zamanlardan kalma (Relikt) bitkileri sormayı sever. Sığla yağı kozmetikte kullanılır.',
                keyPoints: [
                    'Endemik: Sadece bir bölgeye has.',
                    'Relikt: Kalıntı bitki.',
                    'Maki: Akdeniz',
                    'Çayır: Sert Karasal',
                    'Bozkır: İç Anadolu'
                ]
            }
        ]
    },
    {
        id: 'unit-03',
        title: 'Beşeri Coğrafya (Nüfus)',
        icon: 'Users',
        sections: [
            {
                id: 'nufus-ozellikleri',
                slug: 'turkiye-nufusunun-yapisi-ve-dagilisi',
                title: 'Nüfusun Yapısı, Hareketleri ve Dağılışı',
                content: `Türkiye nüfusu dinamik, gençleşen ama yaşlanma eğilimine giren bir yapıya sahiptir.

### Nüfusun Dağılışını Etkileyen Faktörler
1. **Doğal Faktörler:** İklim, Yer Şekilleri (Dağlık yerlerde nüfus azdır), Su Kaynakları.
2. **Beşeri Faktörler:** Sanayi, Tarım, Ulaşım, Ticaret, Turizm, Madenler.

**Seyrek Nüfuslu Yerler:** Yıldız Dağları, Teke ve Taşeli Platoları (yer şekilleri ve karstik yapı), Hakkari (dağlık), Tuz Gölü çevresi (kuraklık).
**Yoğun Nüfuslu Yerler:** Marmara Denizi çevresi, Kıyı Ege, Antalya çevresi, Çukurova, Doğu Karadeniz Kıyıları (tarım ve iklim avantajı).

### Nüfus Piramitleri ve Artış Oranı
- Türkiye'nin nüfus artış hızı son yıllarda belirgin şekilde düşmektedir (Modernleşme, eğitim düzeyi artışı).
- Nüfus piramidi tabanı daralmaktadır (Doğum oranları azalıyor).
- Bağımlı nüfus: 0-14 yaş (Genç bağımlı) ve 65+ yaş (Yaşlı bağımlı).

### Göçler
- **İç Göçler:** Genelde kırdan kente veya az gelişmiş kentten gelişmiş kente doğrudur.
- **Mevsimlik Göçler:** Tarım işçileri (Çukurova-Pamuk, Ordu-Fındık), Turizm personeli, Yaylacılık faaliyetleri.`,
                examAnalysis: 'Nüfus yoğunluğu ile ilgili sorulara dikkat: "Aritmetik Nüfus Yoğunluğu" toplam nüfus / yüzölçümü; "Fizyolojik Nüfus Yoğunluğu" toplam nüfus / tarım alanıdır. Tarım alanı az olan dağlık yerlerde fizyolojik yoğunluk yüksektir.',
                keyPoints: [
                    'Nüfusun en az olduğu il: Bayburt (2023 verisiyle değişebilir, günceli kontrol et)',
                    'Kentleşme oranı %90 üzerindedir',
                    'Hizmet sektörü en çok çalışana sahiptir',
                    'Nüfus artış hızı azalıyor fakat toplam nüfus hala artıyor'
                ]
            }
        ]
    },
    {
        id: 'unit-04',
        title: 'Ekonomik Coğrafya',
        icon: 'TrendingUp',
        sections: [
            {
                id: 'tarim-hayvancilik-ekonomi',
                slug: 'ekonomik-cografya-tarim-ve-hayvancilik',
                title: 'Tarım, Hayvancılık ve Ormancılık',
                content: `### 1. Tarımda Verimi Artıran Faktörler
- **Sulama:** En büyük sorun ve verim artırıcıdır. GAP ile GDA'da üretim patlamıştır.
- **Gübreleme, Makineleşme, Tohum Islahı.**
- **Nadas:** Toprağın bir yıl ekilip bir yıl dinlendirilmesidir. Verim düşüktür. Sulama artarsa nadas azalır.

### 2. Önemli Tarım Ürünleri
- **Zeytin-Turunçgil-Pamuk:** Kış ılıklığı ister.
- **Tahıllar (Buğday-Arpa):** İç Anadolu (Konya ambarıdır).
- **Şeker Pancarı:** Fabrikası tarlaya yakın olmalıdır (Küspesi hemen bozulur). Kıyı bölgelerde ekonomik değeri daha yüksek ürünler ekildiği için tercih edilmez.
- **Çay:** Sadece Doğu Karadeniz (Mikroklima).
- **Fındık:** Karadeniz iklim kuşağı. Dünya birincisiyiz.

### 3. Hayvancılık
- **Küçükbaş (Koyun):** Bozkır bitki örtüsü (İç Anadolu ve GDA).
- **Büyükbaş (Mera):** Erzurum-Kars (Yaz yağışları - Alpin çayırlar).
- **Büyükbaş (Besis/Ahır):** Modern hayvancılıktır. Marmara ve Ege'de pazarlama ve tüketici nüfus nedeniyle yaygındır.
- **Kümes Hayvancılığı:** Tüketici nüfusa yakınlık (Büyük şehir çevreleri).
- **Arıcılık:** Muğla, Ordu, Hakkari, Rize gibi dağlık ve çiçek çeşitliliği olan yerlerde.`,
                atlasLink: { layerId: 'agriculture' },
                mnemonics: [
                    {
                        title: 'Devlet Kontrolünde Olanlar',
                        text: 'PİKE HAT-Ş (Pirinç, Kenevir, Haşhaş, Tütün, Şeker Pancarı)'
                    }
                ],
                teacherNotes: [
                    'Sıcaklık ve sulama imkanları nedeniyle Çukurova\'da yılda 2 hatta 3 ürün alınabilir.',
                    'Kıl keçisi ormanlara zarar verdiği için devlet kontrolünde yetiştirilir (Teke-Taşeli).'
                ],
                keyPoints: [
                    'Pamuk: Şanlıurfa 1. sırada',
                    'Mısır: Eskiden Karadeniz yiyordu, şimdi Akdeniz satıyor (Sulama ile Konya\'da da çok)',
                    'Ayçiçeği: Ergene (Marmara) 1.',
                    'İpek Böcekçiliği: Diyarbakır ve Bursa'
                ]
            },
            {
                id: 'madenler-enerji-ekonomi',
                slug: 'ekonomik-cografya-madenler-ve-enerji-kaynaklari',
                title: 'Madenler ve Enerji Kaynakları',
                content: `### 1. Önemli Madenler
- **Bor:** Balıkesir (Susuurluk/Bigadiç), Eskişehir (Kırka). Dünya rezervinin %70'inden fazlası.
- **Demir:** Sivas (Divriği), Malatya (Hekimhan). Demir-çelik fabrikaları kömüre yakınlık (Karadeniz) veya liman (İskenderun) nedeniyle farklı yere kurulmuştur.
- **Bakır:** Kastamonu (Küre), Artvin (Murgul), Elazığ (Maden).
- **Krom:** Muğla (Fethiye/Köyceğiz), Elazığ (Guleman). Paslanmaz çelik yapımında.
- **Boksit (Alüminyum):** Konya (Seydişehir).

### 2. Enerji Kaynakları
**Yenilenemez (Fosil):**
- **Taşkömürü:** Zonguldak (1. Zaman). Çatalağzı Termik Santrali.
- **Linyit:** Türkiye'nin hemen her yerinde var (3. Zaman kanıtı). Manisa-Soma, Kütahya, Kahramanmaraş-Afşin-Elbistan.
- **Doğalgaz:** Kısıtlıdır. Kırklareli-Hamitabat. Isınma ve elektrikte çok kullanılır.

**Yenilenebilir:**
- **Hidroelektrik:** Doğu Anadolu lider (Yükselti ve eğim).
- **Rüzgar:** Ege (İzmir, Balıkesir) lider.
- **Güneş:** Güneydoğu ve İç Anadolu potansiyeli yüksek. Karadeniz en az (Bulutluluk).
- **Jeotermal:** Denizli-Sarayköy, Aydın-Germencik. Fay hatlarıyla paraleldir.`,
                atlasLink: { layerId: 'powerplants' },
                mnemonics: [
                    {
                        title: 'Bakır Rezervleri',
                        text: 'KADER (Kastamonu, Artvin, Diyarbakır, Elazığ, Rize)'
                    }
                ],
                warnings: [
                    'Nükleer güç santrali inşaatı Mersin-Akkuyu\'da devam etmektedir. İkinci santral Sinop\'a planlanmaktadır. Deniz kenarı seçilme sebebi soğutma suyu ihtiyacıdır.'
                ],
                keyPoints: [
                    'Maden çeşitliliği en fazla: Yukarı Fırat (Elazığ)',
                    'Bor mineralleri jet yakıtı ve cam sanayiinde kritik',
                    'Linyit en yaygın enerji kaynağımız',
                    'Taşkömürü demiri eritmek için kullanılır'
                ]
            },
            {
                id: 'sanayi-ulasim-ticaret-turizm',
                slug: 'sanayi-ulasim-ticaret-ve-turizm',
                title: 'Sanayi, Ulaşım, Ticaret ve Turizm',
                content: `### 1. Sanayi
Sanayi kuruluşlarının yer seçiminde Hammaddeye yakınlık, Enerji kaynağına yakınlık, Ulaşım ve Pazarlama olanakları etkilidir.
- **Otomotiv:** Marmara (Kocaeli, Bursa) - Ulaşım ve pazar odaklı.
- **Petrol Rafinerileri:** Batman (Hammadde), İzmir-İzmit-Kırıkkale (Ulaşım/Pazar).

### 2. Ulaşım
- **Karayolu:** Türkiye'de yük ve yolcu taşımacılığında %90 ile 1. sıradadır. Dağların uzanışı nedeniyle yollar doğu-batı yönünde kolay, kuzey-güney yönünde zordur (Geçitler: Zigana, Kop, Sertavul, Gülek).
- **Demiryolu:** Maliyeti düşüktür. Limanlarla iç kesimleri bağlar. Dağlık yerlere (Doğu Karadeniz, Hakkari, Menteşe) gitmez.
- **Denizyolu:** En ucuz ulaşım türüdür. En büyük ithalat limanı İstanbul, en büyük ihracat limanı İzmir'dir (Yeni verilerle Mersin de kritik).

### 3. Ticaret ve Turizm
- **Dış Ticaret:** En çok ithalat yaptığımız Çin/Rusya/Almanya; en çok ihracat yaptığımız Almanya/ABD/Irak (Sıralama değişebilir). İhracatımızın %90'ı sanayi ürünüdür.
- **Turizm:** Türkiye bir turizm cennetidir. Sadece yaz turizmi değil; Kış (Uludağ, Palandöken), Sağlık (Kaplıcalar), Kültür (Efes, Kapadokya, Göbeklitepe) ve Yayla turizmi gelişmiştir.`,
                atlasLink: { layerId: 'industry' },
                keyPoints: [
                    'Hinterland: Bir limanın geri bölgesiyle olan ulaşım bağı. Sinop hinterlandı dardır, gelişmemiştir.',
                    'İhracat (Sattığımız): Beyaz eşya, fındık, tekstil, bor, mermer.',
                    'İthalat (Aldığımız): Petrol, doğal gaz, tıbbi cihaz, tropikal meyve.',
                    'UNESCO Miras Alanları: Göbeklitepe, Efes, Nemrut Heykelleri, Safranbolu Evleri.'
                ]
            }
        ]
    }
];
