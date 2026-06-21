import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Brain, Map } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Türkiye\'nin 7 Coğrafi Bölgesi | KPSS Coğrafya Rehberi 2026',
    description: 'Türkiye\'nin 7 coğrafi bölgesi: Marmara, Ege, Akdeniz, İç Anadolu, Karadeniz, Doğu Anadolu, Güneydoğu Anadolu. Özellikleri, karşılaştırma tablosu ve KPSS soru tipleri.',
    keywords: ['türkiyenin 7 coğrafi bölgesi', 'coğrafi bölgeler kpss', 'marmara bölgesi', 'ege bölgesi kpss', 'karadeniz bölgesi'],
    alternates: { canonical: 'https://geo-kpss.vercel.app/rehber/turkiye-cografya-bolgeler' },
};

const regions = [
    {
        name: 'Marmara Bölgesi',
        color: 'bg-blue-50 border-blue-200',
        badge: 'bg-blue-100 text-blue-700',
        highlights: ['En kalabalık bölge (nüfus)', 'Sanayi üretiminde 1.', 'İstanbul, Bursa, Edirne', 'Ergene Ovası — tarım'],
        kpss: 'Nüfus yoğunluğu, sanayi payı ve İstanbul\'un önemi sıkça çıkar.',
    },
    {
        name: 'Ege Bölgesi',
        color: 'bg-sky-50 border-sky-200',
        badge: 'bg-sky-100 text-sky-700',
        highlights: ['Zeytinyağı üretiminde 1.', 'İncir, üzüm, pamuk', 'Dışa açık vadiler (en uzun kıyı)', 'İzmir — Türkiye\'nin 3. kenti'],
        kpss: 'Tarım ürünleri (zeytin, üzüm, tütün) ve kıyı tipi soruları.',
    },
    {
        name: 'Akdeniz Bölgesi',
        color: 'bg-orange-50 border-orange-200',
        badge: 'bg-orange-100 text-orange-700',
        highlights: ['En uzun kıyı şeridine sahip', 'Turizm gelirleri 1.', 'Sera tarımı (narenciye, muz)', 'Toros Dağları — kuzey sınır'],
        kpss: 'Turizm gelirleri, sera tarımı ve narenciye bölgesi soruları.',
    },
    {
        name: 'İç Anadolu Bölgesi',
        color: 'bg-amber-50 border-amber-200',
        badge: 'bg-amber-100 text-amber-700',
        highlights: ['Buğday üretimi 1.', 'Tuz Gölü ve Konya Ovası', 'Ankara — başkent', 'En az yağış alan bölge'],
        kpss: 'Tarım (tahıllar), Tuz Gölü özellikleri ve karasal iklim soruları.',
    },
    {
        name: 'Karadeniz Bölgesi',
        color: 'bg-emerald-50 border-emerald-200',
        badge: 'bg-emerald-100 text-emerald-700',
        highlights: ['En fazla yağış alan bölge', 'Fındık üretiminde 1.', 'Çay, mısır, tütün', 'Dağlar kıyıya paralel'],
        kpss: 'En fazla yağış, fındık üretimi ve eğimli arazi sorularında çıkar.',
    },
    {
        name: 'Doğu Anadolu Bölgesi',
        color: 'bg-rose-50 border-rose-200',
        badge: 'bg-rose-100 text-rose-700',
        highlights: ['En büyük yüzölçümü', 'En yüksek ova (Erzurum-Kars)', 'En soğuk bölge', 'Fırat ve Dicle\'nin kaynağı'],
        kpss: 'Yüzölçümü, yükseklik, iklim ve hayvancılık soruları.',
    },
    {
        name: 'Güneydoğu Anadolu Bölgesi',
        color: 'bg-violet-50 border-violet-200',
        badge: 'bg-violet-100 text-violet-700',
        highlights: ['En küçük bölge', 'GAP projesi', 'Pamuk ve fıstık', 'En az yağış (Marmara ile birlikte)'],
        kpss: 'GAP projesi, baraj sayısı ve pamuk üretimi sorularında çıkar.',
    },
];

const comparisons = [
    { label: 'En kalabalık', value: 'Marmara' },
    { label: 'En seyrek nüfuslu', value: 'Doğu Anadolu' },
    { label: 'En büyük yüzölçüm', value: 'Doğu Anadolu' },
    { label: 'En küçük yüzölçüm', value: 'G.D. Anadolu' },
    { label: 'En fazla yağış', value: 'Karadeniz' },
    { label: 'En az yağış', value: 'İç Anadolu' },
    { label: 'En fazla turizm geliri', value: 'Akdeniz' },
    { label: 'En fazla sanayi', value: 'Marmara' },
    { label: 'Buğday üretimi 1.', value: 'İç Anadolu' },
    { label: 'Fındık üretimi 1.', value: 'Karadeniz' },
    { label: 'Zeytin üretimi 1.', value: 'Ege' },
];

export default function TurkiyeBolgelerPage() {
    return (
        <main className="min-h-screen bg-[#f7faf4]">
            <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs text-[#747d75] mb-8 flex-wrap">
                    <Link href="/" className="hover:text-[#386948]">Ana Sayfa</Link>
                    <ChevronRight size={12} />
                    <Link href="/rehber" className="hover:text-[#386948]">Rehber</Link>
                    <ChevronRight size={12} />
                    <span className="text-[#2c342e] font-semibold">7 Coğrafi Bölge</span>
                </nav>

                <header className="mb-10">
                    <h1 className="text-3xl sm:text-4xl font-black text-[#2c342e] mb-4 leading-tight">
                        Türkiye&apos;nin<br />
                        <span className="text-[#386948]">7 Coğrafi Bölgesi</span>
                    </h1>
                    <p className="text-[#59615a] text-base leading-relaxed">
                        KPSS&apos;de en fazla soru çıkan konulardan biri. Her bölgenin temel özellikleri, karşılaştırma tablosu ve sınavda hangi tipte sorularla karşılaşacağın bu rehberde.
                    </p>
                </header>

                <div className="flex flex-wrap gap-3 mb-10">
                    <Link href="/quiz?mode=multiple_choice" className="flex items-center gap-2 px-4 py-2 bg-[#386948] text-white rounded-xl text-sm font-bold hover:bg-[#2c5439] transition-colors">
                        <Brain size={15} />
                        Bölge Soruları
                    </Link>
                    <Link href="/atlas" className="flex items-center gap-2 px-4 py-2 bg-white border border-[#abb4ac]/40 text-[#2c342e] rounded-xl text-sm font-bold hover:bg-[#f0f5ee] transition-colors">
                        <Map size={15} />
                        Haritada Gör
                    </Link>
                </div>

                {/* Region cards */}
                <section className="mb-12">
                    <h2 className="text-xl font-black text-[#2c342e] mb-5">Bölge Bölge Özellikler</h2>
                    <div className="space-y-4">
                        {regions.map((r) => (
                            <div key={r.name} className={`rounded-2xl border p-5 ${r.color}`}>
                                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                                    <h3 className="font-black text-[#2c342e]">{r.name}</h3>
                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${r.badge}`}>KPSS</span>
                                </div>
                                <ul className="space-y-1 mb-3">
                                    {r.highlights.map((h) => (
                                        <li key={h} className="text-sm text-[#2c342e] flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-[#386948] shrink-0" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs text-[#59615a] italic border-t border-black/5 pt-2">{r.kpss}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Comparison table */}
                <section className="mb-12">
                    <h2 className="text-xl font-black text-[#2c342e] mb-5">Karşılaştırma Tablosu</h2>
                    <div className="bg-white border border-[#abb4ac]/40 rounded-2xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-[#f0f5ee] border-b border-[#abb4ac]/30">
                                    <th className="text-left px-4 py-3 font-black text-[#2c342e]">Özellik</th>
                                    <th className="text-left px-4 py-3 font-black text-[#386948]">Cevap</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisons.map((c, i) => (
                                    <tr key={c.label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f7faf4]'}>
                                        <td className="px-4 py-2.5 text-[#2c342e]">{c.label}</td>
                                        <td className="px-4 py-2.5 font-bold text-[#386948]">{c.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Internal links */}
                <section className="border-t border-[#abb4ac]/30 pt-8">
                    <h2 className="text-sm font-black text-[#747d75] uppercase tracking-widest mb-4">İlgili Rehberler</h2>
                    <div className="flex flex-col gap-2">
                        {[
                            { href: '/rehber/kpss-cografya-konulari', label: 'KPSS Coğrafya Konuları →' },
                            { href: '/rehber/turkiye-fiziki-cografya', label: 'Türkiye Fiziki Coğrafyası →' },
                            { href: '/rehber/kpss-cografya-nasil-calisilir', label: 'KPSS Coğrafya Nasıl Çalışılır? →' },
                        ].map(l => (
                            <Link key={l.href} href={l.href} className="text-sm font-semibold text-[#386948] hover:underline">{l.label}</Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
