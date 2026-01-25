'use client';

import { X, MapPin, Mountain, Droplets, Factory, Zap, Pickaxe, Wheat, Building2 } from 'lucide-react';
import type { GeoFeatureProperties } from '@/types';

interface FeatureModalProps {
    feature: GeoFeatureProperties | null;
    onClose: () => void;
}

const typeIcons: Record<string, React.ReactNode> = {
    'İl': <Building2 size={20} />,
    'Dağ': <Mountain size={20} />,
    'Göl': <Droplets size={20} />,
    'Akarsu': <Droplets size={20} />,
    'Ova': <MapPin size={20} />,
    'Plato': <MapPin size={20} />,
    'Maden': <Pickaxe size={20} />,
    'Santral': <Zap size={20} />,
    'Organize Sanayi': <Factory size={20} />,
    'Tarım Alanı': <Wheat size={20} />,
};

export default function FeatureModal({ feature, onClose }: FeatureModalProps) {
    if (!feature) return null;

    const icon = typeIcons[feature.type] || <MapPin size={20} />;

    return (
        <div className="fixed inset-0 z-[2000] pointer-events-none flex items-center justify-center">
            {/* Backdrop - only for clicking */}
            <div
                className="absolute inset-0 pointer-events-auto"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div className="relative pointer-events-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden max-w-md w-full mx-4 animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="p-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                {icon}
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">{feature.name}</h2>
                                <span className="text-sm opacity-90">{feature.type}</span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        {feature.region && (
                            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-xl">
                                <p className="text-xs text-gray-500 dark:text-slate-400">Bölge</p>
                                <p className="font-bold text-gray-900 dark:text-white">{feature.region}</p>
                            </div>
                        )}
                        {feature.population && (
                            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-xl">
                                <p className="text-xs text-gray-500 dark:text-slate-400">Nüfus</p>
                                <p className="font-bold text-gray-900 dark:text-white">
                                    {(feature.population / 1000000).toFixed(1)}M
                                </p>
                            </div>
                        )}
                        {feature.elevation && (
                            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-xl">
                                <p className="text-xs text-gray-500 dark:text-slate-400">Yükseklik</p>
                                <p className="font-bold text-gray-900 dark:text-white">{feature.elevation}m</p>
                            </div>
                        )}
                        {feature.area && (
                            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-xl">
                                <p className="text-xs text-gray-500 dark:text-slate-400">Alan</p>
                                <p className="font-bold text-gray-900 dark:text-white">
                                    {feature.area.toLocaleString('tr-TR')} km²
                                </p>
                            </div>
                        )}
                        {feature.length && (
                            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-xl">
                                <p className="text-xs text-gray-500 dark:text-slate-400">Uzunluk</p>
                                <p className="font-bold text-gray-900 dark:text-white">{feature.length} km</p>
                            </div>
                        )}
                        {feature.capacity && (
                            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-xl">
                                <p className="text-xs text-gray-500 dark:text-slate-400">Kapasite</p>
                                <p className="font-bold text-gray-900 dark:text-white">{feature.capacity} MW</p>
                            </div>
                        )}
                        {feature.mineral && (
                            <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-xl">
                                <p className="text-xs text-gray-500 dark:text-slate-400">Maden</p>
                                <p className="font-bold text-gray-900 dark:text-white">{feature.mineral}</p>
                            </div>
                        )}
                    </div>

                    {/* KPSS Note */}
                    {feature.kpssNote && (
                        <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 border-2 border-amber-300 dark:border-amber-600 rounded-xl">
                            <p className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
                                📚 KPSS Notu
                            </p>
                            <p className="text-amber-900 dark:text-amber-200 leading-relaxed">
                                {feature.kpssNote}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
