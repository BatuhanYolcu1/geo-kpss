import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'KVKK Aydınlatma Metni',
    description: 'Geo-KPSS kişisel verilerin korunması hakkında aydınlatma metni.',
    robots: { index: false },
};

export default function KvkkPage() {
    return (
        <main className="min-h-screen bg-[#f7faf4] text-[#2c342e]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 pb-20">
                {/* Geri */}
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#59615a] hover:text-[#2c342e] transition-colors mb-8">
                    <ArrowLeft size={16} /> Ana Sayfa
                </Link>

                {/* Başlık */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-[#386948]/10 rounded-xl flex items-center justify-center">
                        <Shield size={20} className="text-[#386948]" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black text-[#2c342e]">KVKK Aydınlatma Metni</h1>
                        <p className="text-xs text-[#747d75] mt-0.5">Son güncelleme: Haziran 2026</p>
                    </div>
                </div>

                <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-6 sm:p-8 space-y-8 text-sm leading-relaxed text-[#2c342e]">

                    <Section title="1. Veri Sorumlusu">
                        <p>
                            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca kişisel verileriniz,
                            <strong> Geo-KPSS</strong> (bundan böyle &quot;Şirket&quot; veya &quot;biz&quot; olarak anılacaktır) tarafından
                            aşağıda açıklanan kapsamda işlenmektedir.
                        </p>
                        <p className="mt-2">İletişim: <a href="mailto:bthnylc1@gmail.com" className="text-[#386948] underline">bthnylc1@gmail.com</a></p>
                    </Section>

                    <Section title="2. İşlenen Kişisel Veriler">
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Kimlik ve iletişim bilgileri:</strong> Ad-soyad, e-posta adresi</li>
                            <li><strong>Hesap bilgileri:</strong> Şifrelenmiş parola, giriş tarihleri</li>
                            <li><strong>Kullanım verileri:</strong> Quiz sonuçları, flashcard ilerlemesi, istatistikler</li>
                            <li><strong>Ödeme bilgileri:</strong> İyzico altyapısı üzerinden işlenen kart bilgileri (kart numarası tarafımızca saklanmaz)</li>
                            <li><strong>Teknik veriler:</strong> IP adresi, tarayıcı türü, oturum bilgileri</li>
                        </ul>
                    </Section>

                    <Section title="3. Kişisel Verilerin İşlenme Amaçları">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Kullanıcı hesabının oluşturulması ve yönetilmesi</li>
                            <li>Hizmetin sunulması ve kişiselleştirilmesi</li>
                            <li>Ödeme işlemlerinin gerçekleştirilmesi ve abonelik yönetimi</li>
                            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                            <li>Güvenlik ve sahteciliğin önlenmesi</li>
                            <li>Müşteri desteğinin sağlanması</li>
                        </ul>
                    </Section>

                    <Section title="4. Hukuki Dayanak">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Sözleşmenin kurulması ve ifası (KVKK md. 5/2-c)</li>
                            <li>Hukuki yükümlülüğün yerine getirilmesi (KVKK md. 5/2-ç)</li>
                            <li>Meşru menfaat (KVKK md. 5/2-f)</li>
                            <li>Açık rıza (yalnızca pazarlama iletişimi için)</li>
                        </ul>
                    </Section>

                    <Section title="5. Kişisel Verilerin Aktarımı">
                        <p>Kişisel verileriniz;</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li><strong>İyzico Ödeme Hizmetleri A.Ş.</strong> — ödeme işlemleri için</li>
                            <li><strong>Supabase Inc.</strong> — veri tabanı altyapısı için (AB Standart Sözleşme Maddeleri kapsamında)</li>
                            <li><strong>Vercel Inc.</strong> — uygulama barındırma için</li>
                            <li>Yasal zorunluluk halinde yetkili kamu kurum ve kuruluşlarına</li>
                        </ul>
                    </Section>

                    <Section title="6. Saklama Süresi">
                        <p>
                            Kişisel verileriniz, hizmet ilişkisinin devamı süresince ve sona ermesinden itibaren
                            yasal yükümlülükler çerçevesinde (vergi kayıtları için 5 yıl, ticari kayıtlar için 10 yıl)
                            saklanır. Talep etmeniz halinde hesabınız ve verileriniz silinir.
                        </p>
                    </Section>

                    <Section title="7. KVKK Kapsamındaki Haklarınız">
                        <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                            <li>İşlenme amacını öğrenme ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                            <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri öğrenme</li>
                            <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
                            <li>KVKK md. 7 çerçevesinde silinmesini ya da yok edilmesini isteme</li>
                            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                            <li>Kanuna aykırı işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme</li>
                        </ul>
                        <p className="mt-3">
                            Başvurularınızı <a href="mailto:bthnylc1@gmail.com" className="text-[#386948] underline">bthnylc1@gmail.com</a> adresine iletebilirsiniz.
                            30 gün içinde yanıt verilecektir.
                        </p>
                    </Section>

                    <Section title="8. Çerezler (Cookies)">
                        <p>
                            Platformumuz oturum yönetimi için zorunlu çerezler kullanmaktadır. Analitik amaçlı
                            çerezler (Vercel Analytics) yalnızca anonim kullanım verileri toplar; kişisel veri
                            içermez. Tarayıcı ayarlarından çerezleri devre dışı bırakabilirsiniz.
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
            <h2 className="font-black text-base text-[#2c342e] mb-3 pb-2 border-b border-[#abb4ac]/30">{title}</h2>
            <div className="text-[#59615a]">{children}</div>
        </div>
    );
}
