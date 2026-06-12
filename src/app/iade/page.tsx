import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
    title: 'İptal ve İade Politikası',
    description: 'Geo-KPSS Pro aboneliği için iptal ve iade koşulları.',
    robots: { index: false },
};

export default function IadePage() {
    return (
        <main className="min-h-screen bg-[#f7faf4] text-[#2c342e]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 pb-20">
                <Link href="/pricing" className="inline-flex items-center gap-2 text-sm text-[#59615a] hover:text-[#2c342e] transition-colors mb-8">
                    <ArrowLeft size={16} /> Fiyatlandırma
                </Link>

                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-[#386948]/10 rounded-xl flex items-center justify-center">
                        <RefreshCw size={20} className="text-[#386948]" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black text-[#2c342e]">İptal ve İade Politikası</h1>
                        <p className="text-xs text-[#747d75] mt-0.5">Son güncelleme: Haziran 2026</p>
                    </div>
                </div>

                <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-6 sm:p-8 space-y-8 text-sm leading-relaxed">

                    {/* Özet banner */}
                    <div className="bg-[#386948]/5 border border-[#386948]/20 rounded-xl p-4">
                        <p className="text-[#386948] font-semibold text-sm">Kısaca</p>
                        <ul className="mt-2 space-y-1 text-[#59615a]">
                            <li>✓ İstediğiniz zaman iptal edebilirsiniz — dönem sonuna kadar erişim devam eder.</li>
                            <li>✓ Teknik sorun veya çift ödeme durumunda tam iade yapılır.</li>
                            <li>✗ Kalan süre için otomatik iade yapılmaz.</li>
                        </ul>
                    </div>

                    <Section title="1. Aboneliği İptal Etme">
                        <p>
                            Pro aboneliğinizi <Link href="/account" className="text-[#386948] underline">Hesabım → Abonelik</Link> bölümünden
                            &quot;Aboneliği İptal Et&quot; butonuna tıklayarak istediğiniz zaman iptal edebilirsiniz.
                        </p>
                        <p className="mt-2">
                            İptal ettiğinizde:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Mevcut abonelik döneminin sonuna kadar Pro özelliklerine erişiminiz devam eder.</li>
                            <li>Dönem bittiğinde hesabınız otomatik olarak Ücretsiz plana geçer.</li>
                            <li>Verileriniz (istatistikler, notlar) silinmez; yalnızca Pro özelliklerine erişim kısıtlanır.</li>
                        </ul>
                    </Section>

                    <Section title="2. Para İadesi Yapılmayan Durumlar">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Abonelik döneminin bir kısmını kullandıktan sonra iptal edilmesi</li>
                            <li>&quot;Aboneliği unuttum&quot; gerekçesi (ödeme sonrası hatırlatma e-postası gönderilir)</li>
                            <li>Kısmi kullanım (&quot;birkaç gün baktım&quot; vb.)</li>
                            <li>Fiyat değişikliği öncesi satın alma</li>
                        </ul>
                    </Section>

                    <Section title="3. Tam İade Yapılan Durumlar">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <strong>Çift ödeme:</strong> Teknik hata nedeniyle aynı dönem için iki kez ücretlendirme yapılmışsa,
                                fazla ödenen tutar 5-7 iş günü içinde iade edilir.
                            </li>
                            <li>
                                <strong>Hizmet kullanılamaması:</strong> Ödeme tarihinden itibaren 72 saat boyunca platforma
                                erişim sağlanamamışsa ve sorun tarafımızdan kaynaklanıyorsa tam iade yapılır.
                            </li>
                            <li>
                                <strong>Yetkisiz ödeme:</strong> Kartınızın izinsiz kullanıldığını düşünüyorsanız
                                bankanızla ve bizimle eş zamanlı iletişime geçin.
                            </li>
                        </ul>
                    </Section>

                    <Section title="4. İade Süreci">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>
                                <a href="mailto:bthnylc1@gmail.com" className="text-[#386948] underline">bthnylc1@gmail.com</a> adresine
                                &quot;İade Talebi&quot; konusuyla yazın.
                            </li>
                            <li>E-postanıza kayıtlı e-posta adresinizi ve ödeme tarihini ekleyin.</li>
                            <li>Talebiniz 2 iş günü içinde değerlendirilir ve size yanıt verilir.</li>
                            <li>Onaylanan iadeler 5-10 iş günü içinde kartınıza yansır.</li>
                        </ol>
                    </Section>

                    <Section title="5. Cayma Hakkı">
                        <p>
                            Dijital içerik hizmetleri için cayma hakkı ve istisnaları hakkında detaylı bilgi almak için:
                        </p>
                        <Link href="/sozlesme" className="inline-flex items-center gap-1 text-[#386948] underline mt-2">
                            Mesafeli Satış Sözleşmesi — Madde 4
                        </Link>
                    </Section>

                    <Section title="6. İletişim">
                        <p>
                            Sorularınız için:
                        </p>
                        <div className="mt-3 p-4 bg-[#f7faf4] rounded-xl border border-[#abb4ac]/30">
                            <p className="font-semibold text-[#2c342e]">Geo-KPSS Destek</p>
                            <a href="mailto:bthnylc1@gmail.com" className="text-[#386948] underline">bthnylc1@gmail.com</a>
                            <p className="text-[#747d75] text-xs mt-1">Yanıt süresi: 1-2 iş günü</p>
                        </div>
                    </Section>

                </div>
            </div>
        </main>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h2 className="font-black text-base text-[#2c342e] mb-3 pb-2 border-b border-[#abb4ac]/30">{title}</h2>
            <div className="text-[#59615a]">{children}</div>
        </div>
    );
}
