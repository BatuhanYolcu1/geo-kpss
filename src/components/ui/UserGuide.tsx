'use client';

import React from 'react';
import {
    Layers,
    BookOpen,
    Zap,
    ChevronRight,
    Map as MapIcon,
    Sparkles,
    MousePointer2,
    Trophy
} from 'lucide-react';

export default function UserGuide() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-black tracking-[0.3em] mb-6 uppercase">
                    <Sparkles size={14} /> PLATFORM REHBERİ
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
                    Sistemi Nasıl <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400">Verimli Kullanırsınız?</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                    Statik öğrenmeyi bir kenara bırakın. Geo-KPSS'nin etkileşimli dünyasında
                    başarıya ulaşmak için takip etmeniz gereken 3 altın adım.
                </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 min-h-[600px]">
                {/* Step 1: Atlas (Large Bento Card) */}
                <div className="lg:col-span-8 group relative overflow-hidden rounded-[3rem] bg-slate-900/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500 flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(79,70,229,0.4)]">
                                <Layers size={32} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">
                                01. Katmanları Aktif Edin
                            </h3>
                            <p className="text-slate-400 text-xl font-medium max-w-md leading-relaxed">
                                Sol paneldeki <span className="text-white">Katman Kontrolü</span> üzerinden dağları, ovaları, madenleri veya antik kentleri saniyeler içinde haritaya dökün.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">
                                        {i === 4 ? '+12' : <MapIcon size={14} />}
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                                Dinamik Veri Setleri
                            </span>
                        </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute bottom-[-10%] right-[-5%] w-2/3 h-2/3 bg-indigo-500/10 blur-[80px] rounded-full group-hover:scale-110 transition-transform duration-700" />
                </div>

                {/* Step 2: Notes (Tall Bento Card) */}
                <div className="lg:col-span-4 group relative overflow-hidden rounded-[3rem] bg-slate-900/40 border border-white/5 hover:border-rose-500/30 transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                        <div className="w-16 h-16 rounded-2xl bg-rose-500 flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(244,63,94,0.4)]">
                            <BookOpen size={32} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">
                                02. Noktalara <br /> Odaklanın
                            </h3>
                            <p className="text-slate-400 text-lg font-medium leading-relaxed">
                                Her marker bir bilgi hazinesidir. <br />
                                <span className="text-white italic">"Bu yer neden önemli?"</span> <br />
                                sorusunun cevabını, o konuma tıklayarak KPSS formatındaki özel notlarla öğrenin.
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                            <span className="text-xs font-black text-rose-400 tracking-widest uppercase">Zengin İçerik</span>
                            <MousePointer2 className="text-white animate-bounce" size={20} />
                        </div>
                    </div>
                </div>

                {/* Step 3: Quiz (Wide Bento Card) */}
                <div className="lg:col-span-12 group relative overflow-hidden rounded-[3rem] bg-slate-900/40 border border-white/5 hover:border-amber-500/30 transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 p-12 md:flex items-center justify-between gap-12">
                        <div className="flex-1">
                            <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                                <Zap size={32} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                                03. Görsel Hafıza ile Test Edin
                            </h3>
                            <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed">
                                Sadece şıkları işaretlemeyin! <span className="text-white">Pinpoint Modu</span> ile size sorulan yeri haritadan bulun. Görsel hafızanız geliştikçe başarı oranınızın arttığını göreceksiniz.
                            </p>
                        </div>

                        <div className="mt-8 md:mt-0 flex flex-col items-center gap-4">
                            <div className="px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white font-black flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer group/btn">
                                HEMEN BAŞLA <ChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Trophy size={16} className="text-amber-500" />
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">100+ Akademik Soru</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Slogan */}
            <div className="mt-20 text-center">
                <p className="text-slate-500 font-bold italic opacity-40 text-xl tracking-tight">
                    "Çünkü coğrafya, bakarak değil dokunarak öğrenilir."
                </p>
            </div>
        </section>
    );
}
