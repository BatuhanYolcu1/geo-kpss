import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Mesafeli Satış Sözleşmesi',
    description: 'Geo-KPSS Pro aboneliğine ilişkin mesafeli satış sözleşmesi.',
    robots: { index: false },
};

const TODAY = 'Haziran 2026';
const PRICE_MONTHLY = '79,00 ₺';
const PRICE_YEARLY = '588,00 ₺';

export default function SozlesmePage() {
    return (
        <main className="min-h-screen bg-[#f7faf4] text-[#2c342e]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 pb-20">
                <Link href="/pricing" className="inline-flex items-center gap-2 text-sm text-[#59615a] hover:text-[#2c342e] transition-colors mb-8">
                    <ArrowLeft size={16} /> Fiyatlandırma
                </Link>

                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-[#386948]/10 rounded-xl flex items-center justify-center">
                        <FileText size={20} className="text-[#386948]" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black text-[#2c342e]">Mesafeli Satış Sözleşmesi</h1>
                        <p className="text-xs text-[#747d75] mt-0.5">Son güncelleme: {TODAY}</p>
                    </div>
                </div>

                <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-6 sm:p-8 space-y-8 text-sm leading-relaxed">

                    <Section title="MADDE 1 — TARAFLAR">
                        <Table rows={[
                            ['SATICI', 'Geo-KPSS'],
                            ['Hizmet', 'geo-kpss.vercel.app (ve bağlı alan adları)'],
                            ['İletişim', 'bthnylc1@gmail.com'],
                            ['ALICI', 'Ödeme adımında kimlik bilgilerini giren kişi ("Abone")'],
                        ]} />
                    </Section>

                    <Section title="MADDE 2 — KONU">
                        <p>
                            Bu sözleşme, Alıcı&apos;nın Geo-KPSS platformunda sunulan <strong>Pro abonelik planı</strong>nı
                            satın almasına ilişkin tarafların karşılıklı hak ve yükümlülüklerini belirler.
                            6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun ve
                            Mesafeli Sözleşmeler Yönetmeliği hükümlerine tabidir.
                        </p>
                    </Section>

                    <Section title="MADDE 3 — HİZMET ve FİYAT">
                        <Table rows={[
                            ['Pro (Aylık)', PRICE_MONTHLY + ' / ay', 'KDV dahil, otomatik yenileme yok'],
                            ['Pro (Yıllık)', PRICE_YEARLY + ' / yıl', 'KDV dahil, %38 tasarruf'],
                        ]} header={['Plan', 'Ücret', 'Not']} />
                        <p className="mt-3">
                            Ödeme, İyzico Ödeme Hizmetleri A.Ş. altyapısı üzerinden gerçekleştirilir.
                            Kart bilgileri tarafımızca saklanmaz.
                        </p>
                    </Section>

                    <Section title="MADDE 4 — CAYMA HAKKI">
                        <p>
                            Mesafeli Sözleşmeler Yönetmeliği madde 15/ğ uyarınca;
                            <strong> dijital içerik hizmetleri</strong> için, teslim başlamadan önce alıcının
                            onayı alınmak suretiyle ifaya başlanmışsa cayma hakkı kullanılamaz.
                        </p>
                        <p className="mt-2">
                            Abonelik satın alımında &quot;Ödemeyi Tamamla&quot; butonuna tıklayarak hizmetin
                            hemen başlamasına onay vermiş sayılırsınız. Bu nedenle ödeme başarıyla
                            tamamlandıktan sonra <strong>cayma hakkı uygulanmaz</strong>.
                        </p>
                        <p className="mt-2">
                            Ancak henüz hiç kullanmadıysanız ve ödeme gününden itibaren 14 takvim günü
                            geçmemişse, durum değerlendirmesi için
                            <a href="mailto:bthnylc1@gmail.com" className="text-[#386948] underline ml-1">bthnylc1@gmail.com</a> adresine
                            yazabilirsiniz.
                        </p>
                    </Section>

                    <Section title="MADDE 5 — İPTAL ve İADE">
                        <p>
                            Aboneliğinizi /account sayfasından istediğiniz zaman iptal edebilirsiniz.
                            İptal ettiğinizde mevcut dönem sonuna kadar Pro özelliklerine erişiminiz devam eder;
                            kalan süre için para iadesi yapılmaz.
                        </p>
                        <p className="mt-2">
                            İade politikasının tam detayı için:
                            <Link href="/iade" className="text-[#386948] underline ml-1">İptal ve İade Politikası</Link>
                        </p>
                    </Section>

                    <Section title="MADDE 6 — HİZMETİN KAPSAMI">
                        <p>Pro aboneliği aşağıdaki özellikleri içerir:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Tüm coğrafya sorularına sınırsız erişim</li>
                            <li>Detaylı istatistikler ve gelişim takibi</li>
                            <li>Sınırsız flashcard destesi</li>
                            <li>İnteraktif atlas gelişmiş özellikleri</li>
                            <li>Deneme sınavı oluşturma</li>
                            <li>Reklamsız kullanım</li>
                        </ul>
                    </Section>

                    <Section title="MADDE 7 — GİZLİLİK">
                        <p>
                            Kişisel verilerinizin işlenmesi hakkında detaylı bilgi için:
                            <Link href="/kvkk" className="text-[#386948] underline ml-1">KVKK Aydınlatma Metni</Link>
                        </p>
                    </Section>

                    <Section title="MADDE 8 — UYUŞMAZLIK">
                        <p>
                            Bu sözleşmeden doğabilecek uyuşmazlıklarda Türk hukuku uygulanır.
                            Türkiye&apos;deki Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.
                        </p>
                    </Section>

                    <Section title="MADDE 9 — YÜRÜRLÜK">
                        <p>
                            Alıcı, ödeme ekranındaki &quot;Mesafeli Satış Sözleşmesi&apos;ni okudum ve kabul
                            ediyorum&quot; onay kutusunu işaretleyerek bu sözleşmeyi kabul etmiş sayılır.
                        </p>
                    </Section>

                </div>
            </div>
        </main>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h2 className="font-black text-sm uppercase tracking-wide text-[#386948] mb-3 pb-2 border-b border-[#abb4ac]/30">{title}</h2>
            <div className="text-[#59615a]">{children}</div>
        </div>
    );
}

function Table({ rows, header }: { rows: string[][]; header?: string[] }) {
    return (
        <div className="overflow-x-auto rounded-xl border border-[#abb4ac]/30">
            <table className="w-full text-xs sm:text-sm">
                {header && (
                    <thead className="bg-[#f7faf4]">
                        <tr>
                            {header.map((h, i) => (
                                <th key={i} className="text-left px-4 py-2 font-bold text-[#2c342e]">{h}</th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className="border-t border-[#abb4ac]/20">
                            {row.map((cell, j) => (
                                <td key={j} className={`px-4 py-2.5 ${j === 0 ? 'font-semibold text-[#2c342e]' : 'text-[#59615a]'}`}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
