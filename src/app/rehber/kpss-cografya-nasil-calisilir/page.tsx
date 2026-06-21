import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Brain, BookOpen, Target, Clock, TrendingUp, Map as MapIcon } from 'lucide-react';

export const metadata: Metadata = {
    title: 'KPSS Coğrafya Nasıl Çalışılır? | 60 Günlük Çalışma Planı 2026',
    description: 'KPSS Coğrafya çalışma planı, ezberleme teknikleri ve zaman yönetimi. 60 günde coğrafyayı bitirecek haftalık program ve doğru kaynak seçimi.',
    keywords: ['kpss coğrafya nasıl çalışılır', 'kpss coğrafya çalışma planı', 'kpss coğrafya çalışma programı', 'kpss coğrafya ezberleme'],
    alternates: { canonical: 'https://geo-kpss.vercel.app/rehber/kpss-cografya-nasil-calisilir' },
};

const plan = [
    {
        period: '1. Hafta',
        title: 'Coğrafi Konum & Fiziki Temel',
        tasks: [
            'Türkiye\'nin matematiksel ve özel konumu',
            'Yer şekilleri: dağlar, ovalar, platolar',
            'Akarsular: hangi denize dökülüyor, önemli barajlar',
            'Günlük: 15 dk harita, 15 dk soru çözme',
        ],
        color: 'border-blue-200 bg-blue-50',
        num: 'bg-blue-500',
    },
    {
        period: '2. Hafta',
        title: 'İklim & Bitki Örtüsü',
        tasks: [
            'Türkiye iklim tipleri ve dağılımı',
            'Yağış rejimleri: en fazla / en az yağış alan yerler',
            'Doğal bitki örtüsü: orman, step, maki',
            'Göller: büyüklük sırası, tatlı/tuzlu ayrımı',
        ],
        color: 'border-sky-200 bg-sky-50',
        num: 'bg-sky-500',
    },
    {
        period: '3. Hafta',
        title: 'Nüfus & Yerleşme',
        tasks: [
            'Nüfus dağılımı ve yoğunluk haritası',
            'Göç türleri ve nedenleri',
            'Kentleşme: neden bazı şehirler büyüdü',
            'Kır ve kent yerleşme tipleri',
        ],
        color: 'border-violet-200 bg-violet-50',
        num: 'bg-violet-500',
    },
    {
        period: '4. Hafta',
        title: 'Tarım & Hayvancılık',
        tasks: [
            'Hangi ürün hangi bölgede yetişir (iklim–ürün mantığı)',
            'Buğday, mısır, çay, fındık, zeytin, pamuk bölgeleri',
            'Hayvancılık türleri: büyükbaş, küçükbaş, arıcılık',
            'Tarım bölgelerini harita üzerinde çalış',
        ],
        color: 'border-amber-200 bg-amber-50',
        num: 'bg-amber-500',
    },
    {
        period: '5. Hafta',
        title: 'Madenler, Enerji & Sanayi',
        tasks: [
            'Hangi maden nerede çıkarılır (Zonguldak kömür, Ergani bakır...)',
            'HES, RES, Jeotermal — hangi bölgede fazla',
            'Sanayi bölgeleri ve OSB\'ler',
            'Ulaşım ağı: demiryolu, karayolu, liman',
        ],
        color: 'border-orange-200 bg-orange-50',
        num: 'bg-orange-500',
    },
    {
        period: '6. Hafta',
        title: 'Turizm & 7 Coğrafi Bölge Özeti',
        tasks: [
            'Turizm türleri: kültür, termal, yayla, deniz',
            '7 bölgenin karşılaştırmalı özeti ("en fazla/az" tablosu)',
            'Bölge bölümleri ve ekonomik özellikler',
            'Genel tekrar + zayıf konu tespiti',
        ],
        color: 'border-emerald-200 bg-emerald-50',
        num: 'bg-emerald-500',
    },
    {
        period: '7–8. Hafta',
        title: 'Soru Çözme & Tekrar',
        tasks: [
            'Günde min. 30 çoktan seçmeli soru',
            'Çözülemeyen soruları not al, konuyu tekrar çalış',
            'Adaptif quiz ile eksik alanlara odaklan',
            'Denemeler: tüm Genel Kültür birlikte çöz',
        ],
        color: 'border-rose-200 bg-rose-50',
        num: 'bg-rose-500',
    },
];

const techniques = [
    {
        icon: MapIcon,
        title: 'Harita ile Çalış',
        desc: 'Sadece metin okumak yetmez. Dağ, nehir ve gölleri haritada bul, üstüne yaz. Görsel bellek yazılı ezberden çok daha uzun süreli.',
    },
    {
        icon: TrendingUp,
        title: 'Karşılaştırmalı Öğren',
        desc: '"Türkiye\'nin en büyük gölü Van Gölü" yerine şunu ezberle: Van > Tuz > Beyşehir. Sıralama soruları bu şekilde kazanılır.',
    },
    {
        icon: Brain,
        title: 'Mantık Kur, Ezberleme',
        desc: 'Karadeniz en fazla yağış alır → fındık, çay, mısır yetişir. İklim-ürün bağlantısını kurduğunda hangi ürünün nerede yetişeceğini tahmin edebilirsin.',
    },
    {
        icon: Clock,
        title: 'Kısa Sık Tekrar',
        desc: '1 saatlik tek seans yerine 3 × 20 dakika daha etkili. Her gün 15 dakika harita sorusu, 15 dakika adaptif quiz yap.',
    },
];

const faq = [
    {
        q: 'KPSS Coğrafya için kaç soru çözmem gerekir?',
        a: 'Minimum 400-500 soru çözmeniz önerilir. Konu anlatımına 30-40 gün ayırdıktan sonra kalan sürede her gün en az 20-30 soru çözün. Yanlışlarınızı mutlaka gözden geçirin.',
    },
    {
        q: 'Coğrafyada harita çalışmak zorunlu mu?',
        a: 'Fiziki coğrafya (dağlar, nehirler, göller) ve bölge soruları için harita şart. Soru kökünde "hangi bölgede", "nerede" gibi ifadeler varsa haritasız ezber çok zayıf kalır.',
    },
    {
        q: 'KPSS Coğrafya zor mudur?',
        a: 'Diğer Genel Kültür derslerine (tarih, vatandaşlık) kıyasla orta düzeyde. Konu yelpazesi geniş ama sorular genellikle aynı noktalara (bölge karşılaştırmaları, tarım ürünleri) odaklanır.',
    },
    {
        q: 'Hangi yayınevinin kitabını kullansam?',
        a: 'Seçtiğiniz yayınevinden bağımsız olarak konu anlatımını okuyun, ardından çok sayıda kaynak soru çözün. Tek bir kaynakla sınırlı kalmayın; farklı soru bankalarından pratik yapın.',
    },
];

export default function KpssCografyaNasilCalisilirPage() {
    return (
        <main className="min-h-screen bg-[#f7faf4]">
            <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs text-[#747d75] mb-8 flex-wrap">
                    <Link href="/" className="hover:text-[#386948]">Ana Sayfa</Link>
                    <ChevronRight size={12} />
                    <Link href="/rehber" className="hover:text-[#386948]">Rehber</Link>
                    <ChevronRight size={12} />
                    <span className="text-[#2c342e] font-semibold">Nasıl Çalışılır?</span>
                </nav>

                <header className="mb-10">
                    <h1 className="text-3xl sm:text-4xl font-black text-[#2c342e] mb-4 leading-tight">
                        KPSS Coğrafya<br />
                        <span className="text-[#386948]">Nasıl Çalışılır?</span>
                    </h1>
                    <p className="text-[#59615a] text-base leading-relaxed">
                        60 günlük haftalık plan, doğru çalışma teknikleri ve sıkça sorulan sorular. Coğrafyayı ezberlemek yerine anlamak çok daha az zamanda çok daha fazla soru çözmeni sağlar.
                    </p>
                </header>

                <div className="flex flex-wrap gap-3 mb-10">
                    <Link href="/quiz?mode=adaptive" className="flex items-center gap-2 px-4 py-2 bg-[#386948] text-white rounded-xl text-sm font-bold hover:bg-[#2c5439] transition-colors">
                        <Brain size={15} />
                        Adaptif Quiz
                    </Link>
                    <Link href="/notes" className="flex items-center gap-2 px-4 py-2 bg-white border border-[#abb4ac]/40 text-[#2c342e] rounded-xl text-sm font-bold hover:bg-[#f0f5ee] transition-colors">
                        <BookOpen size={15} />
                        Ders Notları
                    </Link>
                </div>

                {/* Techniques */}
                <section className="mb-12">
                    <h2 className="text-xl font-black text-[#2c342e] mb-5 flex items-center gap-2">
                        <Target size={20} className="text-[#386948]" />
                        Doğru Çalışma Teknikleri
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {techniques.map((t) => {
                            const Icon = t.icon;
                            return (
                                <div key={t.title} className="bg-white border border-[#abb4ac]/40 rounded-2xl p-5">
                                    <div className="w-9 h-9 bg-[#f0f5ee] rounded-xl flex items-center justify-center mb-3">
                                        <Icon size={17} className="text-[#386948]" />
                                    </div>
                                    <h3 className="font-black text-[#2c342e] mb-1.5">{t.title}</h3>
                                    <p className="text-sm text-[#59615a] leading-relaxed">{t.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* 8-week plan */}
                <section className="mb-12">
                    <h2 className="text-xl font-black text-[#2c342e] mb-2">60 Günlük Çalışma Planı</h2>
                    <p className="text-sm text-[#59615a] mb-5">Günde 1–1.5 saat ayırarak 8 haftada tüm konuları bitirip soru pratiği yapabilirsin.</p>
                    <div className="space-y-4">
                        {plan.map((p, i) => (
                            <div key={p.period} className={`rounded-2xl border p-5 ${p.color}`}>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className={`w-7 h-7 rounded-lg ${p.num} text-white flex items-center justify-center text-xs font-black shrink-0`}>{i + 1}</span>
                                    <div>
                                        <span className="text-xs font-bold text-[#747d75]">{p.period}</span>
                                        <h3 className="font-black text-[#2c342e]">{p.title}</h3>
                                    </div>
                                </div>
                                <ul className="space-y-1 pl-10">
                                    {p.tasks.map(t => (
                                        <li key={t} className="text-sm text-[#2c342e] flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-[#386948] shrink-0" />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-12">
                    <h2 className="text-xl font-black text-[#2c342e] mb-5">Sık Sorulan Sorular</h2>
                    <div className="space-y-4">
                        {faq.map((item) => (
                            <div key={item.q} className="bg-white border border-[#abb4ac]/40 rounded-2xl p-5">
                                <h3 className="font-bold text-[#2c342e] mb-2">{item.q}</h3>
                                <p className="text-sm text-[#59615a] leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Internal links */}
                <section className="border-t border-[#abb4ac]/30 pt-8">
                    <h2 className="text-sm font-black text-[#747d75] uppercase tracking-widest mb-4">İlgili Rehberler</h2>
                    <div className="flex flex-col gap-2">
                        {[
                            { href: '/rehber/kpss-cografya-konulari', label: 'KPSS Coğrafya Konuları →' },
                            { href: '/rehber/turkiye-cografya-bolgeler', label: 'Türkiye\'nin 7 Coğrafi Bölgesi →' },
                            { href: '/rehber/turkiye-fiziki-cografya', label: 'Türkiye Fiziki Coğrafyası →' },
                        ].map(l => (
                            <Link key={l.href} href={l.href} className="text-sm font-semibold text-[#386948] hover:underline">{l.label}</Link>
                        ))}
                    </div>
                </section>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faq.map(f => ({
                            '@type': 'Question',
                            name: f.q,
                            acceptedAnswer: { '@type': 'Answer', text: f.a },
                        })),
                    }),
                }}
            />
        </main>
    );
}
