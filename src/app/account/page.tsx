'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    Crown,
    User,
    Calendar,
    CreditCard,
    AlertTriangle,
    Check,
    Home,
    LogOut,
    ChevronRight,
} from 'lucide-react';
import { useUser } from '@/contexts/AuthContext';
import { createClient } from '@/lib/supabase/client';

interface SubscriptionStatus {
    plan: 'free' | 'pro_monthly' | 'pro_yearly';
    periodEnd: string | null;
    cancelAtPeriodEnd?: boolean;
}

const PLAN_LABELS: Record<string, string> = {
    free: 'Ücretsiz',
    pro_monthly: 'Pro — Aylık',
    pro_yearly: 'Pro — Yıllık',
};

export default function AccountPage() {
    const { user } = useUser();
    const [sub, setSub] = useState<SubscriptionStatus | null>(null);
    const [loadingSub, setLoadingSub] = useState(true);
    const [cancelling, setCancelling] = useState(false);
    const [cancelDone, setCancelDone] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const supabase = createClient();

    // Redirect if not logged in
    useEffect(() => {
        if (user === null) {
            window.location.href = '/auth/login?next=/account';
        }
    }, [user]);

    // Load subscription
    useEffect(() => {
        if (!user) return;
        fetch('/api/payment/status')
            .then(r => r.json())
            .then(data => setSub(data))
            .finally(() => setLoadingSub(false));
    }, [user]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        window.location.href = '/';
    };

    const handleCancel = async () => {
        setCancelling(true);
        try {
            const res = await fetch('/api/payment/cancel', { method: 'POST' });
            if (res.ok) {
                setCancelDone(true);
                setSub(prev => prev ? { ...prev, cancelAtPeriodEnd: true } : prev);
            }
        } finally {
            setCancelling(false);
            setShowConfirm(false);
        }
    };

    const formatDate = (iso: string | null) => {
        if (!iso) return '—';
        return new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const isPro = sub && sub.plan !== 'free';

    if (!user) return null;

    return (
        <main className="min-h-screen bg-[#f7faf4] text-[#2c342e]">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 pb-24">

                {/* Nav */}
                <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#59615a] hover:text-[#2c342e] transition-colors">
                        <ArrowLeft size={16} /> Ana Sayfa
                    </Link>
                    <button
                        onClick={handleSignOut}
                        className="inline-flex items-center gap-1.5 text-xs text-[#747d75] hover:text-rose-500 transition-colors"
                    >
                        <LogOut size={14} />
                        Çıkış Yap
                    </button>
                </div>

                <h1 className="text-2xl font-black text-[#2c342e] mb-8">Hesabım</h1>

                {/* Profile card */}
                <div className="bg-white border border-[#abb4ac]/40 rounded-2xl p-6 mb-4">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-[#386948]/10 rounded-2xl flex items-center justify-center shrink-0">
                            <User size={26} className="text-[#386948]" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-black text-[#2c342e] truncate">{user.email}</p>
                            <p className="text-xs text-[#747d75] mt-0.5">
                                Üye: {user.created_at ? formatDate(user.created_at) : '—'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Subscription card */}
                <div className={`bg-white border rounded-2xl p-6 mb-4 ${isPro ? 'border-[#386948]/40' : 'border-[#abb4ac]/40'}`}>
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isPro ? 'bg-[#386948]' : 'bg-[#f0f5ee]'}`}>
                                <Crown size={18} className={isPro ? 'text-white' : 'text-[#59615a]'} />
                            </div>
                            <div>
                                <p className="font-black text-[#2c342e] text-sm">Abonelik Planı</p>
                                <p className={`text-xs mt-0.5 font-bold ${isPro ? 'text-[#386948]' : 'text-[#747d75]'}`}>
                                    {loadingSub ? '...' : PLAN_LABELS[sub?.plan ?? 'free']}
                                </p>
                            </div>
                        </div>
                        {!loadingSub && !isPro && (
                            <Link
                                href="/pricing"
                                className="flex items-center gap-1 px-4 py-2 bg-[#386948] hover:bg-[#2b5d3c] rounded-xl text-white text-xs font-bold transition-colors"
                            >
                                Pro'ya Geç <ChevronRight size={14} />
                            </Link>
                        )}
                    </div>

                    {!loadingSub && isPro && (
                        <div className="space-y-3">
                            {/* Period end */}
                            <div className="flex items-center justify-between p-3 bg-[#f7faf4] rounded-xl">
                                <div className="flex items-center gap-2 text-sm text-[#59615a]">
                                    <Calendar size={15} className="text-[#386948]" />
                                    {sub?.cancelAtPeriodEnd ? 'Erişim sona erer' : 'Sonraki ödeme'}
                                </div>
                                <span className="text-sm font-bold text-[#2c342e]">{formatDate(sub?.periodEnd ?? null)}</span>
                            </div>

                            {/* Cancel status */}
                            {sub?.cancelAtPeriodEnd ? (
                                <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
                                    <AlertTriangle size={14} className="shrink-0 mt-0.5" />
                                    <span>Aboneliğiniz dönem sonunda iptal olacak. Dönem sonuna kadar Pro özelliklerine erişiminiz devam eder.</span>
                                </div>
                            ) : (
                                <>
                                    {cancelDone && (
                                        <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800">
                                            <Check size={14} />
                                            İptal işlemi alındı. Dönem sonuna kadar Pro özellikleri aktif.
                                        </div>
                                    )}
                                    {!cancelDone && (
                                        <button
                                            onClick={() => setShowConfirm(true)}
                                            className="w-full py-2.5 border border-[#abb4ac]/60 hover:border-rose-300 hover:text-rose-600 rounded-xl text-sm font-medium text-[#59615a] transition-colors"
                                        >
                                            Aboneliği İptal Et
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    )}

                    {!loadingSub && !isPro && (
                        <div className="mt-2">
                            <p className="text-xs text-[#747d75]">
                                Pro plan ile tüm quiz, sınav simülasyonu, harita katmanları ve daha fazlasına erişebilirsiniz.
                            </p>
                        </div>
                    )}
                </div>

                {/* Quick links */}
                <div className="bg-white border border-[#abb4ac]/40 rounded-2xl divide-y divide-[#abb4ac]/20 mb-4">
                    {[
                        { href: '/quiz', icon: <Home size={16} />, label: 'Quiz\'e git' },
                        { href: '/stats', icon: <Home size={16} />, label: 'İstatistiklerim' },
                        { href: '/pricing', icon: <CreditCard size={16} />, label: 'Fiyatlandırma' },
                    ].map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className="flex items-center justify-between px-5 py-3.5 hover:bg-[#f7faf4] transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                        >
                            <div className="flex items-center gap-3 text-sm text-[#59615a]">
                                {item.icon}
                                {item.label}
                            </div>
                            <ChevronRight size={15} className="text-[#abb4ac]" />
                        </Link>
                    ))}
                </div>

                {/* Legal links */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center mt-6 text-xs text-[#abb4ac]">
                    <Link href="/kvkk" className="hover:text-[#386948] transition-colors">KVKK</Link>
                    <Link href="/sozlesme" className="hover:text-[#386948] transition-colors">Satış Sözleşmesi</Link>
                    <Link href="/iade" className="hover:text-[#386948] transition-colors">İade Politikası</Link>
                </div>
            </div>

            {/* Cancel confirmation modal */}
            {showConfirm && (
                <div className="fixed inset-0 z-[2000] bg-black/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
                    <div className="bg-white rounded-3xl w-full max-w-sm p-6 shadow-2xl">
                        <div className="w-12 h-12 bg-rose-50 border border-rose-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <AlertTriangle size={22} className="text-rose-500" />
                        </div>
                        <h3 className="font-black text-[#2c342e] text-center text-lg mb-2">Aboneliği İptal Et?</h3>
                        <p className="text-sm text-[#59615a] text-center mb-6 leading-relaxed">
                            İptal etseniz bile <strong>{formatDate(sub?.periodEnd ?? null)}</strong> tarihine kadar
                            Pro özelliklerine erişiminiz devam eder.
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={handleCancel}
                                disabled={cancelling}
                                className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-2xl transition-colors text-sm disabled:opacity-60"
                            >
                                {cancelling ? 'İşleniyor...' : 'Evet, İptal Et'}
                            </button>
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="w-full py-3 border border-[#abb4ac]/60 hover:bg-[#f7faf4] text-[#2c342e] font-bold rounded-2xl transition-colors text-sm"
                            >
                                Vazgeç
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
