import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Map, Mountain, Brain, ChevronRight, Target } from 'lucide-react';

export const metadata: Metadata = {
    title: 'KPSS Coğrafya Rehberi 2026 | Konu Anlatımı ve Soru Tipleri',
    description: 'KPSS Coğrafya sınavına hazırlık için kapsamlı rehber. Türkiye fiziki coğrafyası, 7 coğrafi bölge, nüfus, ekonomi konuları ve soru çözüm teknikleri.',
    keywords: ['kpss coğrafya', 'kpss coğrafya konuları', 'türkiye coğrafyası kpss', 'kpss coğrafya rehberi'],
    alternates: { canonical: 'https://geo-kpss.vercel.app/rehber' },
};

const guides = [
    {
        href: '/rehber/kpss-cografya-konulari',
        icon: Target,
        title: 'KPSS Coğrafya Konuları',
        desc: 'Sınavda çıkan tüm konular, ağırlıkları ve örnek sorularla kapsamlı rehber.',
        tag: 'En Popüler',
        tagColor: 'bg-emerald-100 text-emerald-700',
    },
    {
        href: '/rehber/turkiye-cografya-bolgeler',
        icon: Map,
        title: 'Türkiye\'nin 7 Coğrafi Bölgesi',
        desc: 'Marmara\'dan Güneydoğu Anadolu\'ya her bölgenin özellikleri, karşılaştırma tabloları.',
        tag: 'Sık Çıkan',
        tagColor: 'bg-amber-100 text-amber-700',
    },
    {
        href: '/rehber/turkiye-fiziki-cografya',
        icon: Mountain,
        title: 'Türkiye Fiziki Coğrafyası',
        desc: 'Dağlar, nehirler, göller, ovalar ve platolar — ezber gerektiren tüm bilgiler.',
        tag: 'Temel Konu',
        tagColor: 'bg-blue-100 text-blue-700',
    },
    {
        href: '/rehber/kpss-cografya-nasil-calisilir',
        icon: Brain,
        title: 'KPSS Coğrafya Nasıl Çalışılır?',
        desc: '60 günde coğrafyayı bitirme planı, ezberleme teknikleri ve zaman yönetimi.',
        tag: 'Strateji',
        tagColor: 'bg-violet-100 text-violet-700',
    },
];

export default function RehberPage() {
    return (
        <main className="min-h-screen bg-[#f7faf4]">
            <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs text-[#747d75] mb-8">
                    <Link href="/" className="hover:text-[#386948]">Ana Sayfa</Link>
                    <ChevronRight size={12} />
                    <span className="text-[#2c342e] font-semibold">Rehber</span>
                </nav>

                <div className="mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#386948]/10 rounded-full mb-4">
                        <BookOpen size={13} className="text-[#386948]" />
                        <span className="text-xs font-bold text-[#386948] uppercase tracking-wider">KPSS Coğrafya Rehberi</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-[#2c342e] mb-4 leading-tight">
                        KPSS Coğrafya<br />
                        <span className="text-[#386948]">Hazırlık Rehberi</span>
                    </h1>
                    <p className="text-[#59615a] text-base leading-relaxed max-w-xl">
                        KPSS Genel Kültür Coğrafya testine hazırlık için ihtiyacın olan her şey — konu anlatımları, soru çözüm teknikleri ve çalışma planları.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                    {guides.map((g) => {
                        const Icon = g.icon;
                        return (
                            <Link
                                key={g.href}
                                href={g.href}
                                className="group bg-white border border-[#abb4ac]/40 rounded-2xl p-5 hover:border-[#386948]/40 hover:shadow-md transition-all duration-200"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="w-10 h-10 bg-[#f0f5ee] rounded-xl flex items-center justify-center group-hover:bg-[#386948]/10 transition-colors">
                                        <Icon size={18} className="text-[#386948]" />
                                    </div>
                                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${g.tagColor}`}>{g.tag}</span>
                                </div>
                                <h2 className="font-black text-[#2c342e] mb-1.5 group-hover:text-[#386948] transition-colors">{g.title}</h2>
                                <p className="text-sm text-[#59615a] leading-snug">{g.desc}</p>
                                <div className="flex items-center gap-1 mt-3 text-xs font-bold text-[#386948]">
                                    Oku <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="bg-[#386948] rounded-2xl p-6 text-white text-center">
                    <h3 className="text-lg font-black mb-2">Hazır mısın?</h3>
                    <p className="text-sm text-white/80 mb-4">460+ KPSS formatında soru, interaktif harita ve adaptif quiz seni bekliyor.</p>
                    <Link
                        href="/quiz"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#386948] rounded-xl font-bold text-sm hover:bg-[#f0f5ee] transition-colors"
                    >
                        Quiz&apos;e Başla <ChevronRight size={14} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
