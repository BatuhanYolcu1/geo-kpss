'use client';

import React from 'react';
import {
    Layers,
    BookOpen,
    Zap,
    LineChart,
    Search,
    MapPin,
    Trophy
} from 'lucide-react';

const steps = [
    {
        id: 'step-1',
        title: 'Katmanlı Atlas',
        description: 'Sol menüden istediğiniz coğrafi katmanı (dağlar, madenler, unesco vb.) aktif edin. Türkiye\'yi detaylıca keşfedin.',
        icon: Layers,
        color: 'text-indigo-400',
        bgColor: 'bg-indigo-500/10',
        borderColor: 'border-indigo-500/20'
    },
    {
        id: 'step-2',
        title: 'Zengin Notlar',
        description: 'Her bir marker\'a tıklayarak o yer hakkında özel hazırlanmış KPSS notlarını ve kritik kodlamaları anında okuyun.',
        icon: BookOpen,
        color: 'text-rose-400',
        bgColor: 'bg-rose-500/10',
        borderColor: 'border-rose-500/20'
    },
    {
        id: 'step-3',
        title: 'Quiz Motoru',
        description: 'Sadece test çözmeyin! Harita üzerinde yer belirleme (pinpointing) ve eşleştirme modlarıyla görsel hafızanızı güçlendirin.',
        icon: Zap,
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10',
        borderColor: 'border-amber-500/20'
    },
    {
        id: 'step-4',
        title: 'Performans Takibi',
        description: 'Hangi konuda daha çok yanlış yaptığınızı panelinizden görün. Eksiklerinize göre çalışmanızı şekillendirin.',
        icon: LineChart,
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/20'
    }
];

export default function UserGuide() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black tracking-[0.2em] mb-4 uppercase">
                    Nasıl Kullanılır?
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                    Sistemi <span className="text-indigo-500">Kullanma</span> Klavuzu
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                    Geo-KPSS sadece bir harita değil, kapsamlı bir öğrenme motorudur. İşte ilk defa gelenler için sistemin çalışma mantığı:
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div
                            key={step.id}
                            className={`group p-8 rounded-[2rem] bg-slate-900/40 border ${step.borderColor} transition-all duration-500 hover:scale-[1.02] hover:bg-slate-900/60 shadow-xl relative overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="text-6xl font-black italic">0{index + 1}</span>
                            </div>

                            <div className={`w-14 h-14 rounded-2xl ${step.bgColor} flex items-center justify-center ${step.color} mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                                <Icon size={28} strokeWidth={2.5} />
                            </div>

                            <h3 className="text-xl font-black text-white mb-3 tracking-tight">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                {step.description}
                            </p>

                            <div className="mt-6 flex items-center gap-2 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                <div className={`h-1 flex-1 rounded-full ${step.bgColor}`} />
                                <div className={`w-2 h-2 rounded-full ${step.bgColor} animate-pulse`} />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Call to Action Helper */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <Search size={16} /> Detaylı Arama
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <MapPin size={16} /> Etkileşimli Konumlar
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <Trophy size={16} /> Puan Tablosu
                </div>
            </div>
        </section>
    );
}
