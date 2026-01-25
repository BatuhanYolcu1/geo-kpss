'use client';

import { X, MapPin, Mountain, Building2, Zap, Pickaxe, Ruler, Users, BookOpen, Droplets, Factory, Wheat, ArrowUp } from 'lucide-react';
import type { GeoFeatureProperties } from '@/types';

interface FeaturePopupCardProps {
    feature: GeoFeatureProperties | null;
    position: { x: number; y: number } | null;
    onClose: () => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
    physical: <Mountain size={18} className="text-amber-400" />,
    economic: <Factory size={18} className="text-indigo-400" />,
    city: <Building2 size={18} className="text-violet-400" />,
};

const typeColors: Record<string, string> = {
    'Volkanik Dağ': 'bg-red-500/20 text-red-300',
    'Kıvrım Dağ': 'bg-amber-500/20 text-amber-300',
    'Kırık Dağ (Horst)': 'bg-orange-500/20 text-orange-300',
    'Tektonik Göl': 'bg-sky-500/20 text-sky-300',
    'Karstik Göl': 'bg-cyan-500/20 text-cyan-300',
    'Hidroelektrik': 'bg-blue-500/20 text-blue-300',
    'Termik (Linyit)': 'bg-slate-500/20 text-slate-300',
    'Nükleer': 'bg-green-500/20 text-green-300',
    'Akarsu': 'bg-sky-500/20 text-sky-300',
    'default': 'bg-indigo-500/20 text-indigo-300',
};

export default function FeaturePopupCard({ feature, position, onClose }: FeaturePopupCardProps) {
    if (!feature || !position) return null;

    const badgeColor = typeColors[feature.type] || typeColors['default'];

    return (
        <div
            className="fixed z-[1000] pointer-events-auto"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -100%) translateY(-20px)',
            }}
        >
            {/* Glassmorphism Card */}
            <div className="w-[340px] bg-slate-900/95 backdrop-blur-md border border-indigo-500/30 rounded-xl shadow-xl shadow-black/30 overflow-hidden animate-popup">

                {/* Header */}
                <div className="px-4 py-3 border-b border-slate-700/50">
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                                {categoryIcons[feature.category] || <MapPin size={18} className="text-slate-400" />}
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-base font-bold text-white leading-tight truncate">
                                    {feature.name}
                                </h3>
                                {feature.nameEn && (
                                    <p className="text-slate-400 text-xs mt-0.5 truncate">{feature.nameEn}</p>
                                )}
                                <span className={`inline-block mt-1.5 text-xs font-medium px-2 py-0.5 rounded-full ${badgeColor}`}>
                                    {feature.type}
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors shrink-0"
                            aria-label="Kapat"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>

                {/* Details Grid */}
                <div className="px-4 py-3 grid grid-cols-2 gap-3">
                    {feature.region && (
                        <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-indigo-400 shrink-0" />
                            <div className="min-w-0">
                                <p className="text-[10px] text-slate-500 uppercase tracking-wide">Bölge</p>
                                <p className="text-sm text-white truncate">{feature.region}</p>
                            </div>
                        </div>
                    )}
                    {feature.elevation && (
                        <div className="flex items-center gap-2">
                            <ArrowUp size={14} className="text-amber-400 shrink-0" />
                            <div className="min-w-0">
                                <p className="text-[10px] text-slate-500 uppercase tracking-wide">Yükseklik</p>
                                <p className="text-sm text-white">{feature.elevation.toLocaleString('tr-TR')} m</p>
                            </div>
                        </div>
                    )}
                    {feature.length && (
                        <div className="flex items-center gap-2">
                            <Ruler size={14} className="text-sky-400 shrink-0" />
                            <div className="min-w-0">
                                <p className="text-[10px] text-slate-500 uppercase tracking-wide">Uzunluk</p>
                                <p className="text-sm text-white">{feature.length.toLocaleString('tr-TR')} km</p>
                            </div>
                        </div>
                    )}
                    {feature.area && (
                        <div className="flex items-center gap-2">
                            <Droplets size={14} className="text-sky-400 shrink-0" />
                            <div className="min-w-0">
                                <p className="text-[10px] text-slate-500 uppercase tracking-wide">Alan</p>
                                <p className="text-sm text-white">{feature.area.toLocaleString('tr-TR')} km²</p>
                            </div>
                        </div>
                    )}
                    {feature.population && (
                        <div className="flex items-center gap-2">
                            <Users size={14} className="text-violet-400 shrink-0" />
                            <div className="min-w-0">
                                <p className="text-[10px] text-slate-500 uppercase tracking-wide">Nüfus</p>
                                <p className="text-sm text-white">
                                    {feature.population >= 1000000
                                        ? `${(feature.population / 1000000).toFixed(1)}M`
                                        : feature.population.toLocaleString('tr-TR')}
                                </p>
                            </div>
                        </div>
                    )}
                    {feature.capacity && (
                        <div className="flex items-center gap-2">
                            <Zap size={14} className="text-yellow-400 shrink-0" />
                            <div className="min-w-0">
                                <p className="text-[10px] text-slate-500 uppercase tracking-wide">Kapasite</p>
                                <p className="text-sm text-white">{feature.capacity} MW</p>
                            </div>
                        </div>
                    )}
                    {feature.mineral && (
                        <div className="flex items-center gap-2">
                            <Pickaxe size={14} className="text-slate-400 shrink-0" />
                            <div className="min-w-0">
                                <p className="text-[10px] text-slate-500 uppercase tracking-wide">Maden</p>
                                <p className="text-sm text-white truncate">{feature.mineral}</p>
                            </div>
                        </div>
                    )}
                    {feature.product && (
                        <div className="flex items-center gap-2">
                            <Wheat size={14} className="text-green-400 shrink-0" />
                            <div className="min-w-0">
                                <p className="text-[10px] text-slate-500 uppercase tracking-wide">Ürün</p>
                                <p className="text-sm text-white truncate">{feature.product}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* KPSS Note */}
                {feature.kpssNote && (
                    <div className="px-4 pb-4">
                        <div className="bg-indigo-900/30 border-l-4 border-indigo-500 pl-3 pr-3 py-2.5 rounded-r-lg">
                            <div className="flex items-center gap-1.5 mb-1">
                                <BookOpen size={12} className="text-indigo-400" />
                                <span className="text-[10px] font-semibold text-indigo-400 uppercase tracking-wide">
                                    KPSS Notu
                                </span>
                            </div>
                            <p className="text-sm text-slate-200 leading-relaxed">
                                {feature.kpssNote}
                            </p>
                        </div>
                    </div>
                )}

                {/* Pointer Arrow */}
                <div
                    className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full"
                    style={{
                        width: 0,
                        height: 0,
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderTop: '10px solid rgba(15, 23, 42, 0.95)',
                    }}
                />
            </div>
        </div>
    );
}
