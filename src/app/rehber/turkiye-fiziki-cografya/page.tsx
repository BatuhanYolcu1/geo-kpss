import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Brain, Map } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Türkiye Fiziki Coğrafyası | Dağlar, Nehirler, Göller — KPSS 2026',
    description: 'Türkiye\'nin fiziki coğrafyası: başlıca dağlar, nehirler, göller, ovalar ve platolar. KPSS\'de çıkan ezber bilgileri ve harita çalışması için kapsamlı rehber.',
    keywords: ['türkiye fiziki coğrafyası', 'türkiye dağları kpss', 'türkiye nehirleri', 'türkiye gölleri kpss', 'fiziki coğrafya konu anlatımı'],
    alternates: { canonical: 'https://geo-kpss.vercel.app/rehber/turkiye-fiziki-cografya' },
};

const mountains = [
    { name: 'Ağrı Dağı', alt: '5.137 m', note: 'Türkiye\'nin en yüksek dağı, Doğu Anadolu' },
    { name: 'Kaçkar Dağları', alt: '3.937 m', note: 'Karadeniz Bölgesi, Doğu Karadeniz Dağları' },
    { name: 'Erciyes Dağı', alt: '3.917 m', note: 'İç Anadolu, Kayseri; sönmüş volkan' },
    { name: 'Süphan Dağı', alt: '4.058 m', note: 'Van Gölü kuzeyinde, Doğu Anadolu' },
    { name: 'Toros Dağları', alt: '3.000+ m', note: 'Akdeniz Bölgesi\'nin kuzey sınırı' },
    { name: 'Uludağ', alt: '2.543 m', note: 'Marmara Bölgesi, Bursa; kayak merkezi' },
];

const rivers = [
    { name: 'Fırat (Euphrates)', length: '~1.263 km (TR)', note: 'Türkiye\'nin en uzun nehri, Atatürk Barajı' },
    { name: 'Kızılırmak', length: '~1.182 km', note: 'Tamamen Türkiye\'de; en uzun iç nehir' },
    { name: 'Sakarya', length: '~824 km', note: 'İç Anadolu kaynaklı, Karadeniz\'e dökülür' },
    { name: 'Yeşilırmak', length: '~519 km', note: 'Karadeniz Bölgesi' },
    { name: 'Seyhan & Ceyhan', length: '~560 km', note: 'Akdeniz Bölgesi, Adana' },
    { name: 'Dicle (Tigris)', length: '~523 km (TR)', note: 'Mezopotamya\'nın iki büyük nehrinden biri' },
];

const lakes = [
    { name: 'Van Gölü', area: '3.713 km²', note: 'Türkiye\'nin en büyük gölü; sodalı, acı su' },
    { name: 'Tuz Gölü', area: '1.500 km²', note: 'Türkiye\'nin 2. büyük gölü; yüksek tuzluluk' },
    { name: 'Beyşehir Gölü', area: '656 km²', note: 'Türkiye\'nin en büyük tatlı su gölü' },
    { name: 'Eğirdir Gölü', area: '468 km²', note: 'Isparta; tatlı su, balıkçılık' },
    { name: 'İznik Gölü', area: '308 km²', note: 'Marmara Bölgesi; tektonik kökenli' },
    { name: 'Sapanca Gölü', area: '45 km²', note: 'İstanbul\'un içme suyu kaynağı' },
];

const plains = [
    { name: 'Konya Ovası', region: 'İç Anadolu', note: 'Türkiye\'nin en büyük ovası' },
    { name: 'Çukurova', region: 'Akdeniz', note: 'Seyhan-Ceyhan delta ovası, pamuk' },
    { name: 'Ergene Ovası', region: 'Marmara (Trakya)', note: 'Tahıl ve ayçiçeği tarımı' },
    { name: 'Harran Ovası', region: 'G.D. Anadolu', note: 'GAP sulamasıyla pamuk' },
    { name: 'Gediz ve Büyük Menderes Ovaları', region: 'Ege', note: 'Zeytin, üzüm, pamuk' },
];

export default function TurkiyeFizikoPage() {
    return (
        <main className="min-h-screen bg-[#f7faf4]">
            <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs text-[#747d75] mb-8 flex-wrap">
                    <Link href="/" className="hover:text-[#386948]">Ana Sayfa</Link>
                    <ChevronRight size={12} />
                    <Link href="/rehber" className="hover:text-[#386948]">Rehber</Link>
                    <ChevronRight size={12} />
                    <span className="text-[#2c342e] font-semibold">Fiziki Coğrafya</span>
                </nav>

                <header className="mb-10">
                    <h1 className="text-3xl sm:text-4xl font-black text-[#2c342e] mb-4 leading-tight">
                        Türkiye<br />
                        <span className="text-[#386948]">Fiziki Coğrafyası</span>
                    </h1>
                    <p className="text-[#59615a] text-base leading-relaxed">
                        Dağlar, nehirler, göller ve ovalar — KPSS&apos;de en çok ezber gerektiren kısım. Bu listeyi harita ile birlikte çalış, not al, tekrar et.
                    </p>
                </header>

                <div className="flex flex-wrap gap-3 mb-10">
                    <Link href="/quiz" className="flex items-center gap-2 px-4 py-2 bg-[#386948] text-white rounded-xl text-sm font-bold hover:bg-[#2c5439] transition-colors">
                        <Brain size={15} />
                        Soru Çöz
                    </Link>
                    <Link href="/atlas" className="flex items-center gap-2 px-4 py-2 bg-white border border-[#abb4ac]/40 text-[#2c342e] rounded-xl text-sm font-bold hover:bg-[#f0f5ee] transition-colors">
                        <Map size={15} />
                        Haritada Bul
                    </Link>
                </div>

                {/* Mountains */}
                <section className="mb-10">
                    <h2 className="text-xl font-black text-[#2c342e] mb-1">Başlıca Dağlar</h2>
                    <p className="text-xs text-[#747d75] mb-4">En yüksekten en alçağa sıralı değil — KPSS&apos;de öne çıkanlar</p>
                    <div className="bg-white border border-[#abb4ac]/40 rounded-2xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-[#f0f5ee] border-b border-[#abb4ac]/20">
                                    <th className="text-left px-4 py-2.5 font-black text-[#2c342e]">Dağ</th>
                                    <th className="text-left px-4 py-2.5 font-black text-[#386948]">Yükseklik</th>
                                    <th className="text-left px-4 py-2.5 font-black text-[#2c342e] hidden sm:table-cell">Not</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mountains.map((m, i) => (
                                    <tr key={m.name} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f7faf4]'}>
                                        <td className="px-4 py-2.5 font-semibold text-[#2c342e]">{m.name}</td>
                                        <td className="px-4 py-2.5 text-[#386948] font-bold whitespace-nowrap">{m.alt}</td>
                                        <td className="px-4 py-2.5 text-[#59615a] text-xs hidden sm:table-cell">{m.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Rivers */}
                <section className="mb-10">
                    <h2 className="text-xl font-black text-[#2c342e] mb-1">Başlıca Nehirler</h2>
                    <p className="text-xs text-[#747d75] mb-4">Kızılırmak tamamen Türkiye&apos;de olan en uzun nehirdir; Fırat toplam uzunlukta önde</p>
                    <div className="bg-white border border-[#abb4ac]/40 rounded-2xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-[#f0f5ee] border-b border-[#abb4ac]/20">
                                    <th className="text-left px-4 py-2.5 font-black text-[#2c342e]">Nehir</th>
                                    <th className="text-left px-4 py-2.5 font-black text-[#386948] hidden sm:table-cell">Uzunluk</th>
                                    <th className="text-left px-4 py-2.5 font-black text-[#2c342e]">Not</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rivers.map((r, i) => (
                                    <tr key={r.name} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f7faf4]'}>
                                        <td className="px-4 py-2.5 font-semibold text-[#2c342e] whitespace-nowrap">{r.name}</td>
                                        <td className="px-4 py-2.5 text-[#386948] font-bold whitespace-nowrap hidden sm:table-cell">{r.length}</td>
                                        <td className="px-4 py-2.5 text-[#59615a] text-xs">{r.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Lakes */}
                <section className="mb-10">
                    <h2 className="text-xl font-black text-[#2c342e] mb-1">Başlıca Göller</h2>
                    <p className="text-xs text-[#747d75] mb-4">Büyüklük sırası ve tatlı/tuzlu ayrımı KPSS&apos;de çok çıkar</p>
                    <div className="bg-white border border-[#abb4ac]/40 rounded-2xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-[#f0f5ee] border-b border-[#abb4ac]/20">
                                    <th className="text-left px-4 py-2.5 font-black text-[#2c342e]">Göl</th>
                                    <th className="text-left px-4 py-2.5 font-black text-[#386948] hidden sm:table-cell">Alan</th>
                                    <th className="text-left px-4 py-2.5 font-black text-[#2c342e]">Not</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lakes.map((l, i) => (
                                    <tr key={l.name} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f7faf4]'}>
                                        <td className="px-4 py-2.5 font-semibold text-[#2c342e] whitespace-nowrap">{l.name}</td>
                                        <td className="px-4 py-2.5 text-[#386948] font-bold whitespace-nowrap hidden sm:table-cell">{l.area}</td>
                                        <td className="px-4 py-2.5 text-[#59615a] text-xs">{l.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Plains */}
                <section className="mb-12">
                    <h2 className="text-xl font-black text-[#2c342e] mb-4">Başlıca Ovalar</h2>
                    <div className="space-y-3">
                        {plains.map((p) => (
                            <div key={p.name} className="bg-white border border-[#abb4ac]/40 rounded-xl p-4 flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#386948] shrink-0 mt-1.5" />
                                <div>
                                    <span className="font-black text-[#2c342e] text-sm">{p.name}</span>
                                    <span className="mx-2 text-[#abb4ac]">—</span>
                                    <span className="text-xs text-[#747d75]">{p.region}</span>
                                    <p className="text-xs text-[#59615a] mt-0.5">{p.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-[#386948] rounded-2xl p-6 text-white text-center mb-10">
                    <p className="font-black mb-2">Bu bilgileri harita üzerinde pekiştir</p>
                    <p className="text-sm text-white/80 mb-4">Geo KPSS atlasında dağ, nehir ve gölleri bulup tıklayarak öğren.</p>
                    <Link href="/atlas" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#386948] rounded-xl font-bold text-sm hover:bg-[#f0f5ee] transition-colors">
                        Haritayı Aç <ChevronRight size={14} />
                    </Link>
                </div>

                {/* Internal links */}
                <section className="border-t border-[#abb4ac]/30 pt-8">
                    <h2 className="text-sm font-black text-[#747d75] uppercase tracking-widest mb-4">İlgili Rehberler</h2>
                    <div className="flex flex-col gap-2">
                        {[
                            { href: '/rehber/kpss-cografya-konulari', label: 'KPSS Coğrafya Konuları →' },
                            { href: '/rehber/turkiye-cografya-bolgeler', label: 'Türkiye\'nin 7 Coğrafi Bölgesi →' },
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
