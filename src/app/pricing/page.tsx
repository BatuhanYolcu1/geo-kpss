'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    Check,
    X,
    Zap,
    Crown,
    ArrowRight,
    ChevronDown,
    Map,
    Brain,
    BookOpen,
    Sparkles,
    BarChart3,
    Timer,
    Shield,
    Headphones,
    Home,
} from 'lucide-react';
import { useUser } from '@/contexts/AuthContext';

const FREE_FEATURES = [
    { label: 'Quiz — günde 10 soru', included: true },
    { label: 'Ders notları (tüm üniteler)', included: true },
    { label: 'Flashcard (2 deste)', included: true },
    { label: 'Atlas — temel 3 katman', included: true },
    { label: 'Temel istatistikler', included: true },
    { label: 'Sınırsız quiz & tüm modlar', included: false },
    { label: 'Sınav simülasyonu', included: false },
    { label: 'Tüm atlas katmanları (12+)', included: false },
    { label: 'Tüm flashcard desteleri (10)', included: false },
    { label: 'Detaylı kategori analizleri', included: false },
    { label: 'Öncelikli destek', included: false },
];

const PRO_FEATURES = [
    { label: 'Sınırsız quiz & tüm modlar', included: true },
    { label: 'Ders notları (tüm üniteler)', included: true },
    { label: 'Tüm flashcard desteleri (10)', included: true },
    { label: 'Tüm atlas katmanları (12+)', included: true },
    { label: 'Sınav simülasyonu (tam KPSS formatı)', included: true },
    { label: 'Detaylı kategori analizleri', included: true },
    { label: 'Spaced Repetition algoritması', included: true },
    { label: 'Bölge & katman filtreleri', included: true },
    { label: 'Çapraz cihaz senkronizasyonu', included: true },
    { label: 'Öncelikli destek', included: true },
    { label: 'Yeni içerik erken erişim', included: true },
];

const FAQS = [
    {
        q: 'Ücretsiz plan ne kadar süreyle geçerli?',
        a: 'Ücretsiz plan süresiz geçerlidir. Her zaman temel özelliklere erişebilirsiniz.',
    },
    {
        q: 'İstediğim zaman iptal edebilir miyim?',
        a: 'Evet, aboneliğinizi istediğiniz zaman iptal edebilirsiniz. İptal sonrasında dönem sonuna kadar Pro özelliklerine erişiminiz devam eder.',
    },
    {
        q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
        a: 'Tüm kredi ve banka kartları (Visa, Mastercard, Troy) ile ödeme yapabilirsiniz. Taksit imkânı mevcuttur.',
    },
    {
        q: 'Yıllık plana geçersem para iadesi alabilir miyim?',
        a: 'İlk 14 gün içinde herhangi bir gerekçe göstermeksizin iade talep edebilirsiniz. Yasal cayma hakkınız kapsamındadır.',
    },
    {
        q: 'Öğrenci indirimi var mı?',
        a: 'Öğrenci belgesi ile özel indirim için destek hattımıza ulaşabilirsiniz.',
    },
];

export default function PricingPage() {
    const { user } = useUser();
    const [yearly, setYearly] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [checkoutHtml, setCheckoutHtml] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const formRef = useRef<HTMLDivElement>(null);

    const monthlyPrice = 79;
    const yearlyMonthly = 49;
    const yearlyTotal = yearlyMonthly * 12; // 588
    const currentPrice = yearly ? yearlyMonthly : monthlyPrice;

    // URL parametrelerinden başarı/hata mesajı oku
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('success') === '1') {
            setSuccessMsg('🎉 Pro üyeliğin aktif! Tüm özelliklere erişebilirsin.');
            window.history.replaceState({}, '', '/pricing');
        } else if (params.get('error')) {
            const errMap: Record<string, string> = {
                payment_failed: 'Ödeme başarısız oldu. Lütfen tekrar deneyin.',
                no_token: 'Ödeme doğrulanamadı.',
                server: 'Sunucu hatası oluştu.',
            };
            setErrorMsg(errMap[params.get('error')!] ?? 'Bir hata oluştu.');
            window.history.replaceState({}, '', '/pricing');
        }
    }, []);

    // iyzico form HTML'i gelince DOM'a enjekte et ve submit et
    useEffect(() => {
        if (!checkoutHtml || !formRef.current) return;
        formRef.current.innerHTML = checkoutHtml;
        const script = formRef.current.querySelector('script');
        if (script) {
            const newScript = document.createElement('script');
            newScript.src = script.src;
            document.head.appendChild(newScript);
        }
    }, [checkoutHtml]);

    const handleCheckout = async () => {
        if (!user) { window.location.href = '/auth/register?next=/pricing'; return; }

        setLoading(true);
        setErrorMsg(null);
        try {
            const res = await fetch('/api/payment/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ plan: yearly ? 'pro_yearly' : 'pro_monthly' }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error ?? 'Ödeme başlatılamadı.');
            setCheckoutHtml(data.checkoutFormContent);
        } catch (err: unknown) {
            setErrorMsg(err instanceof Error ? err.message : 'Bir hata oluştu.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#f7faf4] text-[#2c342e]">
            {/* Background blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#b9efc5]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#e9f0e8]/40 rounded-full blur-[120px]" />
            </div>

            {/* iyzico checkout form konteyneri */}
        {checkoutHtml && (
            <div className="fixed inset-0 z-[2000] bg-[#2c342e]/60 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-[#abb4ac]/40">
                        <span className="font-black text-[#2c342e]">Güvenli Ödeme</span>
                        <button onClick={() => setCheckoutHtml(null)} className="text-[#59615a] hover:text-rose-500 transition-colors">✕</button>
                    </div>
                    <div ref={formRef} className="p-4 min-h-[400px]" />
                </div>
            </div>
        )}

        {/* Başarı / hata banner */}
        {successMsg && (
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[1500] px-6 py-3 bg-emerald-600 text-white rounded-2xl shadow-xl font-bold text-sm text-center max-w-sm">
                {successMsg}
                <button onClick={() => setSuccessMsg(null)} className="ml-3 opacity-70 hover:opacity-100">✕</button>
            </div>
        )}
        {errorMsg && (
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[1500] px-6 py-3 bg-rose-600 text-white rounded-2xl shadow-xl font-bold text-sm text-center max-w-sm">
                {errorMsg}
                <button onClick={() => setErrorMsg(null)} className="ml-3 opacity-70 hover:opacity-100">✕</button>
            </div>
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-20">
                {/* Nav */}
                <div className="flex items-center justify-between py-6">
                    <Link href="/" className="flex items-center gap-2 text-[#59615a] hover:text-[#2c342e] transition-colors text-sm font-medium">
                        <Home size={16} />
                        <span className="hidden sm:inline">Ana Sayfa</span>
                    </Link>
                    {user ? (
                        <Link href="/stats" className="flex items-center gap-2 px-4 py-2 bg-[#386948]/10 border border-[#386948]/20 rounded-full text-sm font-bold text-[#386948] hover:bg-[#386948]/20 transition-colors">
                            <BarChart3 size={15} />
                            İstatistiklerim
                        </Link>
                    ) : (
                        <Link href="/auth/login" className="flex items-center gap-2 px-4 py-2 bg-white border border-[#abb4ac]/40 rounded-full text-sm font-medium text-[#2c342e] hover:border-[#386948]/40 transition-colors">
                            Giriş Yap
                        </Link>
                    )}
                </div>

                {/* Hero */}
                <div className="text-center pt-6 pb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#386948]/10 border border-[#386948]/20 rounded-full text-sm font-bold text-[#386948] mb-6">
                        <Zap size={14} className="fill-[#386948]" />
                        KPSS 2026 Hazırlığı
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
                        Sınava hazırlan,<br />
                        <span className="bg-gradient-to-r from-[#386948] to-emerald-500 bg-clip-text text-transparent">
                            sınırları kaldır.
                        </span>
                    </h1>
                    <p className="text-lg text-[#59615a] max-w-xl mx-auto">
                        Coğrafya dersinde köklü bir fark yaratmak isteyenler için — sınırsız erişim, tek platform.
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <span className={`text-sm font-bold transition-colors ${!yearly ? 'text-[#2c342e]' : 'text-[#747d75]'}`}>Aylık</span>
                    <button
                        onClick={() => setYearly(v => !v)}
                        className={`relative w-14 h-7 rounded-full transition-colors ${yearly ? 'bg-[#386948]' : 'bg-[#abb4ac]/50'}`}
                    >
                        <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${yearly ? 'translate-x-8' : 'translate-x-1'}`} />
                    </button>
                    <span className={`text-sm font-bold transition-colors ${yearly ? 'text-[#2c342e]' : 'text-[#747d75]'}`}>
                        Yıllık
                        <span className="ml-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-black rounded-full">%38 İNDİRİM</span>
                    </span>
                </div>

                {/* Plan Cards */}
                <div className="grid sm:grid-cols-2 gap-6 mb-16">
                    {/* Free Card */}
                    <div className="bg-white border border-[#abb4ac]/40 rounded-3xl p-8 flex flex-col">
                        <div className="mb-6">
                            <div className="w-11 h-11 bg-[#f0f5ee] rounded-2xl flex items-center justify-center mb-4">
                                <Brain size={22} className="text-[#59615a]" />
                            </div>
                            <h2 className="text-xl font-black text-[#2c342e] mb-1">Ücretsiz</h2>
                            <p className="text-sm text-[#59615a]">Başlangıç için ideal</p>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-black text-[#2c342e]">0 ₺</span>
                            <span className="text-[#747d75] text-sm ml-2">/ sonsuza dek</span>
                        </div>

                        <ul className="space-y-3 mb-8 flex-1">
                            {FREE_FEATURES.map((f, i) => (
                                <li key={i} className={`flex items-start gap-3 text-sm ${f.included ? 'text-[#2c342e]' : 'text-[#abb4ac] line-through'}`}>
                                    {f.included
                                        ? <Check size={16} className="text-[#386948] mt-0.5 shrink-0" />
                                        : <X size={16} className="text-[#abb4ac] mt-0.5 shrink-0" />
                                    }
                                    {f.label}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href={user ? '/quiz' : '/auth/register'}
                            className="w-full py-3.5 border-2 border-[#abb4ac]/60 hover:border-[#386948]/40 rounded-2xl text-center font-bold text-[#2c342e] hover:bg-[#f0f5ee] transition-all text-sm"
                        >
                            {user ? 'Devam Et' : 'Ücretsiz Başla'}
                        </Link>
                    </div>

                    {/* Pro Card */}
                    <div className="relative bg-gradient-to-b from-[#2c342e] to-[#1a2420] border border-[#386948]/40 rounded-3xl p-8 flex flex-col overflow-hidden shadow-2xl shadow-[#386948]/20">
                        {/* Glow */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#386948] to-transparent" />
                        <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-xs font-black text-white shadow-lg">
                                EN POPÜLER
                            </span>
                        </div>

                        <div className="mb-6">
                            <div className="w-11 h-11 bg-[#386948] rounded-2xl flex items-center justify-center mb-4">
                                <Crown size={22} className="text-white" />
                            </div>
                            <h2 className="text-xl font-black text-white mb-1">Pro</h2>
                            <p className="text-sm text-slate-400">Tam potansiyelini ortaya çıkar</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-black text-white">{currentPrice} ₺</span>
                                <span className="text-slate-400 text-sm mb-1">/ ay</span>
                            </div>
                            {yearly && (
                                <p className="text-xs text-emerald-400 font-bold mt-1">
                                    Yıllık {yearlyTotal} ₺ — {monthlyPrice * 12 - yearlyTotal} ₺ tasarruf
                                </p>
                            )}
                            {!yearly && (
                                <p className="text-xs text-slate-500 mt-1">
                                    Yıllık ödemede <span className="text-emerald-400 font-bold">{yearlyMonthly} ₺/ay</span>
                                </p>
                            )}
                        </div>

                        <ul className="space-y-3 mb-8 flex-1">
                            {PRO_FEATURES.map((f, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                                    <Check size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                                    {f.label}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={handleCheckout}
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-[#386948] to-emerald-500 hover:from-[#2b5d3c] hover:to-[#386948] rounded-2xl font-black text-white transition-all text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#386948]/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-wait"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Yükleniyor...</span>
                            ) : (
                                <><Zap size={18} className="fill-white" />{yearly ? `Pro'ya Geç — ${yearlyTotal} ₺/yıl` : `Pro'ya Geç — ${monthlyPrice} ₺/ay`}</>
                            )}
                        </button>

                        <p className="text-center text-xs text-slate-500 mt-3">
                            14 gün içinde tam iade garantisi
                        </p>
                    </div>
                </div>

                {/* Feature Icons Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
                    {[
                        { icon: <Map size={20} className="text-indigo-500" />, label: '12+ Harita Katmanı', bg: 'bg-indigo-50' },
                        { icon: <Brain size={20} className="text-emerald-600" />, label: '330+ Quiz Sorusu', bg: 'bg-emerald-50' },
                        { icon: <Timer size={20} className="text-amber-600" />, label: 'Tam Sınav Simülasyonu', bg: 'bg-amber-50' },
                        { icon: <Sparkles size={20} className="text-violet-600" />, label: '250+ Flashcard', bg: 'bg-violet-50' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-[#abb4ac]/40 rounded-2xl p-4 flex items-center gap-3">
                            <div className={`w-9 h-9 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}>
                                {item.icon}
                            </div>
                            <span className="text-xs font-bold text-[#2c342e] leading-snug">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-16 text-sm text-[#59615a]">
                    {[
                        { icon: <Shield size={16} className="text-[#386948]" />, text: 'SSL ile şifreli ödeme' },
                        { icon: <Check size={16} className="text-[#386948]" />, text: '14 gün iade garantisi' },
                        { icon: <Headphones size={16} className="text-[#386948]" />, text: 'Türkçe destek' },
                        { icon: <BookOpen size={16} className="text-[#386948]" />, text: 'KVKK uyumlu' },
                    ].map((b, i) => (
                        <div key={i} className="flex items-center gap-2">
                            {b.icon}
                            <span className="font-medium">{b.text}</span>
                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-black text-center mb-8 text-[#2c342e]">Sık Sorulan Sorular</h2>
                    <div className="space-y-3">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="bg-white border border-[#abb4ac]/40 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <span className="font-bold text-[#2c342e] text-sm pr-4">{faq.q}</span>
                                    <ChevronDown
                                        size={18}
                                        className={`text-[#59615a] shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {openFaq === i && (
                                    <div className="px-5 pb-5 text-sm text-[#59615a] leading-relaxed border-t border-[#abb4ac]/30 pt-4">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center bg-gradient-to-br from-[#2c342e] to-[#1a2420] rounded-3xl p-10 sm:p-14 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#386948] to-transparent" />
                    <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                        Sınava hazır mısın?
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm">
                        Şimdiye kadar Geo-KPSS ile hazırlanan adaylar coğrafya notlarını ortalama 12 puan artırdı.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={handleCheckout}
                            disabled={loading}
                            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#386948] to-emerald-500 hover:from-[#2b5d3c] hover:to-[#386948] rounded-2xl font-black text-white transition-all shadow-xl shadow-[#386948]/30 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-wait"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Yükleniyor...</span>
                            ) : (
                                <><Zap size={18} className="fill-white" />Pro'yu Dene<ArrowRight size={18} /></>
                            )}
                        </button>
                        <Link
                            href={user ? '/quiz' : '/auth/register'}
                            className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl font-bold text-white transition-all text-sm"
                        >
                            Ücretsiz Başla
                        </Link>
                    </div>
                </div>

                {/* Legal footer */}
                <div className="mt-12 pt-8 border-t border-[#abb4ac]/30 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#747d75]">
                        <Link href="/kvkk" className="hover:text-[#386948] transition-colors">KVKK Aydınlatma Metni</Link>
                        <span className="text-[#abb4ac]">·</span>
                        <Link href="/sozlesme" className="hover:text-[#386948] transition-colors">Mesafeli Satış Sözleşmesi</Link>
                        <span className="text-[#abb4ac]">·</span>
                        <Link href="/iade" className="hover:text-[#386948] transition-colors">İptal ve İade Politikası</Link>
                        <span className="text-[#abb4ac]">·</span>
                        <a href="mailto:bthnylc1@gmail.com" className="hover:text-[#386948] transition-colors">Destek</a>
                    </div>
                    <p className="text-xs text-[#abb4ac] mt-3">
                        Ödemeler İyzico Ödeme Hizmetleri A.Ş. altyapısıyla güvence altındadır.
                    </p>
                </div>
            </div>
        </main>
    );
}
