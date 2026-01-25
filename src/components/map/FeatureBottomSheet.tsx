'use client';

import { X, MapPin, Mountain, Building2, Zap, Pickaxe, Ruler, Users, BookOpen, Droplets, Factory, Wheat } from 'lucide-react';
import type { GeoFeatureProperties } from '@/types';

interface FeatureBottomSheetProps {
    feature: GeoFeatureProperties | null;
    onClose: () => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
    physical: <Mountain size={20} className="text-amber-600" />,
    economic: <Factory size={20} className="text-indigo-600" />,
    city: <Building2 size={20} className="text-violet-600" />,
};

const categoryColors: Record<string, string> = {
    physical: 'from-amber-500 to-orange-600',
    economic: 'from-indigo-500 to-purple-600',
    city: 'from-violet-500 to-purple-600',
};

export default function FeatureBottomSheet({ feature, onClose }: FeatureBottomSheetProps) {
    if (!feature) return null;

    const gradientClass = categoryColors[feature.category] || 'from-slate-600 to-slate-800';

    // Collect all properties to show
    const properties: { icon: React.ReactNode; label: string; value: string }[] = [];

    if (feature.region) {
        properties.push({
            icon: <MapPin size={18} className="text-primary" />,
            label: 'Bölge',
            value: feature.region,
        });
    }

    if (feature.elevation) {
        properties.push({
            icon: <Mountain size={18} className="text-amber-600" />,
            label: 'Yükseklik',
            value: `${feature.elevation.toLocaleString('tr-TR')} m`,
        });
    }

    if (feature.population) {
        properties.push({
            icon: <Users size={18} className="text-violet-600" />,
            label: 'Nüfus',
            value: feature.population >= 1000000
                ? `${(feature.population / 1000000).toFixed(1)} milyon`
                : feature.population.toLocaleString('tr-TR'),
        });
    }

    if (feature.length) {
        properties.push({
            icon: <Ruler size={18} className="text-sky-600" />,
            label: 'Uzunluk',
            value: `${feature.length.toLocaleString('tr-TR')} km`,
        });
    }

    if (feature.area) {
        properties.push({
            icon: <Droplets size={18} className="text-sky-600" />,
            label: 'Alan',
            value: `${feature.area.toLocaleString('tr-TR')} km²`,
        });
    }

    if (feature.capacity) {
        properties.push({
            icon: <Zap size={18} className="text-yellow-600" />,
            label: 'Kapasite',
            value: `${feature.capacity} MW`,
        });
    }

    if (feature.mineral) {
        properties.push({
            icon: <Pickaxe size={18} className="text-slate-600" />,
            label: 'Maden',
            value: feature.mineral,
        });
    }

    if (feature.product) {
        properties.push({
            icon: <Wheat size={18} className="text-green-600" />,
            label: 'Ürün',
            value: feature.product,
        });
    }

    if (feature.sector) {
        properties.push({
            icon: <Factory size={18} className="text-indigo-600" />,
            label: 'Sektör',
            value: feature.sector,
        });
    }

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/30 z-[1000] transition-opacity"
                onClick={onClose}
            />

            {/* Bottom Sheet */}
            <div className="fixed bottom-0 left-0 right-0 z-[1001] animate-slide-up">
                <div className="bg-white dark:bg-slate-900 rounded-t-3xl shadow-2xl max-h-[70vh] overflow-hidden">
                    {/* Drag Handle */}
                    <div className="flex justify-center pt-3 pb-2">
                        <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full" />
                    </div>

                    {/* Header */}
                    <div className={`px-5 py-4 bg-gradient-to-r ${gradientClass} text-white relative`}>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                            aria-label="Kapat"
                        >
                            <X size={18} />
                        </button>

                        <div className="flex items-start gap-3 pr-10">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                                {categoryIcons[feature.category] || <MapPin size={24} />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-xl font-bold leading-tight truncate">{feature.name}</h2>
                                {feature.nameEn && (
                                    <p className="text-white/80 text-sm mt-0.5 truncate">{feature.nameEn}</p>
                                )}
                                <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 bg-white/20 rounded-lg text-sm font-medium">
                                    <span>{feature.type}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content - Scrollable */}
                    <div className="px-5 py-4 overflow-y-auto max-h-[45vh] space-y-4">
                        {/* Properties Grid */}
                        {properties.length > 0 && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {properties.map((prop, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl"
                                    >
                                        <div className="shrink-0">{prop.icon}</div>
                                        <div className="min-w-0">
                                            <p className="text-xs text-slate-500 dark:text-slate-400">{prop.label}</p>
                                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                                                {prop.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* KPSS Note */}
                        {feature.kpssNote && (
                            <div className="bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-200 dark:border-amber-700 rounded-xl p-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-800 flex items-center justify-center shrink-0">
                                        <BookOpen size={20} className="text-amber-600 dark:text-amber-300" />
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

                        {/* Products/Sectors */}
                        {feature.products && feature.products.length > 0 && (
                            <div>
                                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
                                    Önemli Sektörler
                                </p>
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
                    </div>

                    {/* Safe area padding for mobile */}
                    <div className="h-6 bg-white dark:bg-slate-900" />
                </div>
            </div>
        </>
    );
}
