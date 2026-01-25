'use client';

import { Info, BookOpen, MapPin, Mountain, Building2, Zap, Pickaxe, Ruler, Users, Thermometer } from 'lucide-react';
import type { GeoFeatureProperties } from '@/types';

const typeIconMap: Record<string, React.ReactNode> = {
    'Büyükşehir': <Building2 size={14} />,
    'Başkent': <Building2 size={14} />,
    'İl': <Building2 size={14} />,
    'Volkanik Dağ': <Mountain size={14} className="text-red-500" />,
    'Tektonik Dağ': <Mountain size={14} className="text-amber-700" />,
    'Akarsu': <MapPin size={14} className="text-sky-500" />,
    'Tuzlu Göl': <MapPin size={14} className="text-sky-600" />,
    'Tatlı Su Gölü': <MapPin size={14} className="text-sky-400" />,
    'Hidroelektrik': <Zap size={14} className="text-sky-600" />,
    'Termik': <Zap size={14} className="text-slate-600" />,
    'Jeotermal': <Zap size={14} className="text-rose-500" />,
    'Rüzgar': <Zap size={14} className="text-cyan-500" />,
    'Demir': <Pickaxe size={14} className="text-slate-700" />,
    'Bor': <Pickaxe size={14} className="text-teal-500" />,
    'Krom': <Pickaxe size={14} className="text-violet-500" />,
    'Bakır': <Pickaxe size={14} className="text-orange-500" />,
    'Altın': <Pickaxe size={14} className="text-yellow-500" />,
};

export default function FeaturePopup({ feature }: { feature: GeoFeatureProperties }) {
    return (
        <div className="feature-popup min-w-[300px] max-w-[380px] font-sans">
            {/* Başlık */}
            <div className="p-4 bg-gradient-to-r from-primary to-geo-city text-white">
                <div className="flex items-start gap-3">
                    <div className="flex-1">
                        <h3 className="font-bold text-xl leading-tight">{feature.name}</h3>
                        {feature.nameEn && (
                            <p className="text-white/80 text-sm mt-0.5">{feature.nameEn}</p>
                        )}
                    </div>
                    <div className="px-3 py-1.5 bg-white/20 rounded-lg text-sm font-semibold flex items-center gap-1.5 shrink-0">
                        {typeIconMap[feature.type] || <Info size={14} />}
                        <span>{feature.type}</span>
                    </div>
                </div>
            </div>

            {/* İçerik */}
            <div className="p-4 space-y-4 bg-white dark:bg-slate-900">
                {/* Hızlı Bilgiler */}
                <div className="grid grid-cols-2 gap-3">
                    {feature.region && (
                        <div className="flex items-center gap-2 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <MapPin size={16} className="text-primary shrink-0" />
                            <div>
                                <p className="text-xs text-slate-500">Bölge</p>
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{feature.region}</p>
                            </div>
                        </div>
                    )}
                    {feature.elevation && (
                        <div className="flex items-center gap-2 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <Mountain size={16} className="text-geo-mountain shrink-0" />
                            <div>
                                <p className="text-xs text-slate-500">Yükseklik</p>
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{feature.elevation.toLocaleString('tr-TR')} m</p>
                            </div>
                        </div>
                    )}
                    {feature.population && (
                        <div className="flex items-center gap-2 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <Users size={16} className="text-geo-city shrink-0" />
                            <div>
                                <p className="text-xs text-slate-500">Nüfus</p>
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                                    {feature.population >= 1000000
                                        ? `${(feature.population / 1000000).toFixed(1)} milyon`
                                        : feature.population.toLocaleString('tr-TR')
                                    }
                                </p>
                            </div>
                        </div>
                    )}
                    {feature.length && (
                        <div className="flex items-center gap-2 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <Ruler size={16} className="text-geo-water shrink-0" />
                            <div>
                                <p className="text-xs text-slate-500">Uzunluk</p>
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{feature.length.toLocaleString('tr-TR')} km</p>
                            </div>
                        </div>
                    )}
                    {feature.area && (
                        <div className="flex items-center gap-2 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <Ruler size={16} className="text-geo-water shrink-0" />
                            <div>
                                <p className="text-xs text-slate-500">Alan</p>
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{feature.area.toLocaleString('tr-TR')} km²</p>
                            </div>
                        </div>
                    )}
                    {feature.capacity && (
                        <div className="flex items-center gap-2 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <Zap size={16} className="text-geo-energy shrink-0" />
                            <div>
                                <p className="text-xs text-slate-500">Kapasite</p>
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{feature.capacity}</p>
                            </div>
                        </div>
                    )}
                    {feature.mineral && (
                        <div className="flex items-center gap-2 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <Pickaxe size={16} className="text-geo-mine shrink-0" />
                            <div>
                                <p className="text-xs text-slate-500">Maden</p>
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{feature.mineral}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* KPSS Notu */}
                {feature.kpssNote && (
                    <div className="bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-200 dark:border-amber-700 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-800 flex items-center justify-center shrink-0">
                                <BookOpen size={18} className="text-amber-600 dark:text-amber-300" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-amber-700 dark:text-amber-300 mb-1">
                                    📚 KPSS Notu
                                </p>
                                <p className="text-base text-amber-900 dark:text-amber-100 leading-relaxed">
                                    {feature.kpssNote}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Önemli Sektörler */}
                {feature.products && feature.products.length > 0 && (
                    <div>
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Önemli Sektörler</p>
                        <div className="flex flex-wrap gap-2">
                            {feature.products.map((product, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg"
                                >
                                    {product}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* İklim */}
                {feature.climate && (
                    <div className="flex items-center gap-3 p-3 bg-sky-50 dark:bg-sky-900/20 rounded-xl">
                        <Thermometer size={18} className="text-sky-600" />
                        <div>
                            <p className="text-xs text-slate-500">İklim</p>
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{feature.climate}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
