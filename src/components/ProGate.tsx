'use client';

/**
 * ProGate — Pro gerektiren içerikleri sarmalar.
 *
 * - isPro=true  → children aynen render edilir
 * - isPro=false → tam sayfa upgrade ekranı gösterilir
 * - loading     → iskelet gösterilir
 *
 * Kullanım:
 *   <ProGate feature="Sınav Simülasyonu">
 *     <ExamContent />
 *   </ProGate>
 */

import Link from 'next/link';
import { Crown, Zap, Lock, Check } from 'lucide-react';
import { usePlan } from '@/lib/plan';

interface ProGateProps {
    children: React.ReactNode;
    /** Gösterilecek özellik adı — upgrade ekranında kullanılır */
    feature?: string;
    /** Kart overlay modu — tam sayfa değil, kart üzerine kilit */
    mode?: 'fullpage' | 'overlay';
}

const PRO_BULLETS = [
    'Sınırsız quiz & tüm modlar',
    'Sınav simülasyonu (tam KPSS formatı)',
    'Tüm atlas katmanları (12+)',
    'Tüm flashcard desteleri (10)',
    'Detaylı kategori analizleri',
];

export function ProGate({ children, feature = 'Bu özellik', mode = 'fullpage' }: ProGateProps) {
    const { isPro, loading } = usePlan();

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f7faf4] flex items-center justify-center">
                <div className="w-8 h-8 border-3 border-[#386948]/30 border-t-[#386948] rounded-full animate-spin" />
            </div>
        );
    }

    if (isPro) return <>{children}</>;

    // ── Overlay modu (küçük kart üstü kilit) ────────────────────────
    if (mode === 'overlay') {
        return (
            <div className="relative">
                {/* Bulanık içerik */}
                <div className="pointer-events-none select-none opacity-40 blur-[2px]">{children}</div>
                {/* Kilit overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/60 backdrop-blur-sm rounded-3xl">
                    <div className="w-10 h-10 bg-[#386948] rounded-2xl flex items-center justify-center shadow-lg">
                        <Lock size={18} className="text-white" />
                    </div>
                    <span className="text-xs font-black text-[#2c342e]">Pro</span>
                    <Link
                        href="/pricing"
                        className="mt-1 px-4 py-1.5 bg-[#386948] hover:bg-[#2b5d3c] text-white text-xs font-bold rounded-xl transition-colors"
                    >
                        Kilidi Aç
                    </Link>
                </div>
            </div>
        );
    }

    // ── Full-page modu ───────────────────────────────────────────────
    return (
        <main className="min-h-screen bg-[#f7faf4] flex items-center justify-center px-4">
            {/* Arka plan blob */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#b9efc5]/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#e9f0e8]/40 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 w-full max-w-md">
                {/* Kart */}
                <div className="bg-gradient-to-b from-[#2c342e] to-[#1a2420] rounded-3xl p-8 shadow-2xl shadow-[#386948]/20 border border-[#386948]/30 text-center">
                    {/* Glow çizgisi */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#386948] to-transparent rounded-t-3xl" />

                    {/* İkon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#386948] to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-xl shadow-[#386948]/40">
                        <Crown size={28} className="text-white" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/20 border border-amber-400/30 rounded-full text-amber-300 text-xs font-black mb-4">
                        <Zap size={11} className="fill-amber-300" />
                        PRO ÖZELLIK
                    </div>

                    <h1 className="text-2xl font-black text-white mb-2">
                        {feature}
                    </h1>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                        Bu özelliği kullanmak için Pro aboneliğine geçmen gerekiyor.
                    </p>

                    {/* Bullet listesi */}
                    <ul className="text-left space-y-2 mb-7">
                        {PRO_BULLETS.map((b, i) => (
                            <li key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                                <Check size={14} className="text-emerald-400 shrink-0" />
                                {b}
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <Link
                        href="/pricing"
                        className="block w-full py-4 bg-gradient-to-r from-[#386948] to-emerald-500 hover:from-[#2b5d3c] hover:to-[#386948] rounded-2xl font-black text-white text-sm transition-all shadow-xl shadow-[#386948]/30 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Pro&apos;ya Geç — 79 ₺/ay
                    </Link>

                    <Link href="/" className="block mt-4 text-xs text-slate-500 hover:text-slate-400 transition-colors">
                        Ana sayfaya dön
                    </Link>
                </div>
            </div>
        </main>
    );
}
