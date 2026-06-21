import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Brain, Map, BookOpen, Target, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'KPSS Coğrafya Konuları 2026 | Sınav Konuları ve Soru Dağılımı',
    description: 'KPSS Genel Kültür Coğrafya sınavında çıkan tüm konular, soru ağırlıkları ve örnek sorular. Fiziki coğrafya, beşeri coğrafya, ekonomik coğrafya ve coğrafi bölgeler.',
    keywords: ['kpss coğrafya konuları', 'kpss coğrafya soru dağılımı', 'kpss genel kültür coğrafya', 'kpss coğrafya konu anlatımı 2026'],
    alternates: { canonical: 'https://geo-kpss.vercel.app/rehber/kpss-cografya-konulari' },
};

const topics = [
    {
        title: 'Türkiye\'nin Coğrafi Konumu',
        weight: '%8-10',
        items: ['Matematiksel ve özel konum', 'Komşu ülkeler ve sınırlar', 'Konum avantajları', 'Saat farkları'],
        color: 'border-blue-200 bg-blue-50',
        badge: 'bg-blue-100 text-blue-700',
    },
    {
        title: 'Fiziki Coğrafya',
        weight: '%20-25',
        items: ['Yer şekilleri (dağlar, ovalar, platolar)', 'Akarsular ve göller', 'Kıyı tipleri', 'Toprak tipleri'],
        color: 'border-emerald-200 bg-emerald-50',
        badge: 'bg-emerald-100 text-emerald-700',
    },
    {
        title: 'İklim ve Bitki Örtüsü',
        weight: '%12-15',
        items: ['Türkiye iklim tipleri', 'Yağış ve sıcaklık dağılımı', 'Doğal bitki örtüsü', 'İklimi etkileyen faktörler'],
        color: 'border-sky-200 bg-sky-50',
        badge: 'bg-sky-100 text-sky-700',
    },
    {
        title: 'Nüfus ve Yerleşme',
        weight: '%10-12',
        items: ['Nüfus dağılımı ve yoğunluğu', 'Göç nedenleri ve türleri', 'Kentleşme süreci', 'Yerleşme tipleri'],
        color: 'border-violet-200 bg-violet-50',
        badge: 'bg-violet-100 text-violet-700',
    },
    {
        title: 'Ekonomik Coğrafya',
        weight: '%20-25',
        items: ['Tarım ve tarım bölgeleri', 'Hayvancılık türleri', 'Madenler ve enerji kaynakları', 'Sanayi ve ulaşım', 'Turizm'],
        color: 'border-amber-200 bg-amber-50',
        badge: 'bg-amber-100 text-amber-700',
    },
    {
        title: 'Coğrafi Bölgeler',
        weight: '%15-20',
        items: ['7 coğrafi bölge özellikleri', 'Bölge karşılaştırmaları', 'Bölge bölümleri', 'Bölgelerin ekonomisi'],
        color: 'border-rose-200 bg-rose-50',
        badge: 'bg-rose-100 text-rose-700',
    },
];

const faq = [
    {
        q: 'KPSS Coğrafya testinde kaç soru çıkar?',
        a: 'KPSS Lisans Genel Kültür testinde toplam 60 soru bulunur. Bu soruların yaklaşık 10-12\'si coğrafyadan gelmektedir. Soru sayısı yıldan yıla küçük farklılıklar gösterebilir.'
    },
    {
        q: 'KPSS Coğrafya\'da hangi konular daha çok çıkar?',
        a: 'Ekonomik coğrafya (tarım, madenler, sanayi) ve coğrafi bölgeler en fazla soru çıkan alanlardır. Bölge karşılaştırmaları, özellikle "en fazla – en az" tipinde sorular sıklıkla görülür.'
    },
    {
        q: 'KPSS Coğrafya ne kadar sürede bitirilir?',
        a: 'Yoğun tempo ile 45-60 günde tüm konular bitirilebilir. Temel konu anlatımını 30 günde tamamlayıp geriye kalan süreyi soru çözmeye ayırmanız önerilir.'
    },
    {
        q: 'KPSS Coğrafya için interaktif harita kullanmak faydalı mı?',
        a: 'Evet, özellikle dağ, nehir, göl gibi fiziki coğrafya konularında harita üzerinde çalışmak kalıcı öğrenmeyi destekler. Sadece metin ezberlemek yerine harita ile pekiştirmek başarıyı artırır.'
    },
];

export default function KpssCografyaKonulariPage() {
    return (
        <main className="min-h-screen bg-[#f7faf4]">
            <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs text-[#747d75] mb-8 flex-wrap">
                    <Link href="/" className="hover:text-[#386948]">Ana Sayfa</Link>
                    <ChevronRight size={12} />
                    <Link href="/rehber" className="hover:text-[#386948]">Rehber</Link>
                    <ChevronRight size={12} />
                    <span className="text-[#2c342e] font-semibold">KPSS Coğrafya Konuları</span>
                </nav>

                <header className="mb-10">
                    <h1 className="text-3xl sm:text-4xl font-black text-[#2c342e] mb-4 leading-tight">
                        KPSS Coğrafya Konuları<br />
                        <span className="text-[#386948]">ve Soru Dağılımı</span>
                    </h1>
                    <p className="text-[#59615a] text-base leading-relaxed">
                        KPSS Genel Kültür Coğrafya testinde çıkan konuların tam listesi, tahmini soru ağırlıkları ve çalışma önceliği. Sınava hazırlık sürecinde neye ne kadar zaman ayıracağını planlamak için bu rehberi kullan.
                    </p>
                </header>

                {/* Quick CTA */}
                <div className="flex flex-wrap gap-3 mb-10">
                    <Link href="/quiz" className="flex items-center gap-2 px-4 py-2 bg-[#386948] text-white rounded-xl text-sm font-bold hover:bg-[#2c5439] transition-colors">
                        <Brain size={15} />
                        Soru Çöz
                    </Link>
                    <Link href="/atlas" className="flex items-center gap-2 px-4 py-2 bg-white border border-[#abb4ac]/40 text-[#2c342e] rounded-xl text-sm font-bold hover:bg-[#f0f5ee] transition-colors">
                        <Map size={15} />
                        Haritayı Aç
                    </Link>
                    <Link href="/notes" className="flex items-center gap-2 px-4 py-2 bg-white border border-[#abb4ac]/40 text-[#2c342e] rounded-xl text-sm font-bold hover:bg-[#f0f5ee] transition-colors">
                        <BookOpen size={15} />
                        Ders Notları
                    </Link>
                </div>

                {/* Topic cards */}
                <section className="mb-12">
                    <h2 className="text-xl font-black text-[#2c342e] mb-5">Konu Başlıkları ve Ağırlıkları</h2>
                    <div className="space-y-4">
                        {topics.map((topic) => (
                            <div key={topic.title} className={`rounded-2xl border p-5 ${topic.color}`}>
                                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                                    <h3 className="font-black text-[#2c342e]">{topic.title}</h3>
                                    <span className={`text-xs font-black px-2.5 py-1 rounded-full ${topic.badge}`}>
                                        Tahmini {topic.weight}
                                    </span>
                                </div>
                                <ul className="space-y-1">
                                    {topic.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-[#2c342e]">
                                            <CheckCircle size={13} className="text-[#386948] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Study tips */}
                <section className="mb-12 bg-white border border-[#abb4ac]/40 rounded-2xl p-6">
                    <h2 className="text-xl font-black text-[#2c342e] mb-4 flex items-center gap-2">
                        <Target size={20} className="text-[#386948]" />
                        Çalışma Stratejisi
                    </h2>
                    <ol className="space-y-3">
                        {[
                            'Önce fiziki coğrafyayı öğren — diğer tüm konuların temeli.',
                            'Dağ, nehir, göl ve ovalar için mutlaka harita üzerinde çalış.',
                            'Coğrafi bölgeleri karşılaştırmalı öğren ("en fazla tarım arazisi", "en az nüfus" gibi).',
                            'Ekonomik coğrafyada hangi ürün nerede yetişir ezber yerine mantıkla öğren (iklim → ürün bağlantısı).',
                            'Son 2 haftayı tamamen soru çözmeye ayır.',
                        ].map((tip, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-[#2c342e]">
                                <span className="shrink-0 w-6 h-6 rounded-lg bg-[#386948] text-white flex items-center justify-center text-xs font-black">{i + 1}</span>
                                {tip}
                            </li>
                        ))}
                    </ol>
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
                            { href: '/rehber/turkiye-cografya-bolgeler', label: 'Türkiye\'nin 7 Coğrafi Bölgesi →' },
                            { href: '/rehber/turkiye-fiziki-cografya', label: 'Türkiye Fiziki Coğrafyası →' },
                            { href: '/rehber/kpss-cografya-nasil-calisilir', label: 'KPSS Coğrafya Nasıl Çalışılır? →' },
                        ].map(l => (
                            <Link key={l.href} href={l.href} className="text-sm font-semibold text-[#386948] hover:underline">{l.label}</Link>
                        ))}
                    </div>
                </section>
            </div>

            {/* JSON-LD FAQ Schema */}
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
