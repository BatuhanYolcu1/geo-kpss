'use client';

import { useState } from 'react';
import {
    Layers,
    Mountain,
    Waves,
    Droplets,
    Building2,
    Map,
    Pickaxe,
    Wheat,
    Factory,
    Zap,
    ChevronDown,
    PanelLeftClose,
    PanelLeft,
    Moon,
    Sun,
    MapPin,
} from 'lucide-react';
import { useLayerStore } from '@/stores/layerStore';
import { useUserStore } from '@/stores/userStore';
import RegionFilter from './RegionFilter';
import type { LayerCategory, LayerConfig } from '@/types';

const iconMap: Record<string, React.ReactNode> = {
    mountain: <Mountain size={20} />,
    square: <Layers size={20} />,
    layers: <Layers size={20} />,
    waves: <Waves size={20} />,
    droplets: <Droplets size={20} />,
    'building-2': <Building2 size={20} />,
    map: <Map size={20} />,
    pickaxe: <Pickaxe size={20} />,
    wheat: <Wheat size={20} />,
    factory: <Factory size={20} />,
    zap: <Zap size={20} />,
};

const categoryConfig: Record<LayerCategory, { name: string; description: string; icon: React.ReactNode; color: string }> = {
    physical: {
        name: 'Fiziki Coğrafya',
        description: 'Dağlar, ovalar, akarsular, göller',
        icon: <Mountain size={22} />,
        color: '#059669',
    },
    economic: {
        name: 'Beşeri ve Ekonomik',
        description: 'Madenler, tarım, sanayi, enerji',
        icon: <Factory size={22} />,
        color: '#d97706',
    },
    administrative: {
        name: 'İdari Bölümler',
        description: 'İller ve coğrafi bölgeler',
        icon: <Building2 size={22} />,
        color: '#7c3aed',
    },
};

interface LayerItemProps {
    layer: LayerConfig;
    onToggle: () => void;
}

function LayerItem({ layer, onToggle }: LayerItemProps) {
    return (
        <div className="mb-2">
            <button
                onClick={onToggle}
                className={`layer-toggle w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${layer.visible
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 border-l-4 border-l-indigo-600 shadow-sm'
                    : 'hover:bg-gray-100 dark:hover:bg-slate-800 border-l-4 border-l-transparent'
                    }`}
            >
                <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${layer.color}25`, color: layer.color }}
                >
                    {iconMap[layer.icon] || <Layers size={20} />}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-bold text-base text-gray-900 dark:text-white">{layer.name}</p>
                </div>
                <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${layer.visible
                        ? 'bg-indigo-600 border-indigo-600'
                        : 'border-gray-400 dark:border-slate-500'
                        }`}
                >
                    {layer.visible && (
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                            <path
                                d="M2 6L5 9L10 3"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </div>
            </button>
        </div>
    );
}

interface CategorySectionProps {
    category: LayerCategory;
    layers: LayerConfig[];
}

function CategorySection({ category, layers }: CategorySectionProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const toggleLayer = useLayerStore((state) => state.toggleLayer);

    const config = categoryConfig[category];
    const activeCount = layers.filter((l) => l.visible).length;

    return (
        <div className="mb-4">
            {/* Kategori Başlığı */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
                <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${config.color}20`, color: config.color }}
                >
                    {config.icon}
                </div>
                <div className="flex-1 text-left">
                    <h3 className="font-bold text-base text-gray-900 dark:text-white">{config.name}</h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-slate-400">{config.description}</p>
                </div>
                {activeCount > 0 && (
                    <span
                        className="px-2.5 py-1 text-sm font-bold rounded-full text-white"
                        style={{ backgroundColor: config.color }}
                    >
                        {activeCount}
                    </span>
                )}
                <ChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform ${isExpanded ? '' : '-rotate-90'}`}
                />
            </button>

            {/* Katman Listesi */}
            {isExpanded && (
                <div className="mt-2 px-2">
                    {layers.map((layer) => (
                        <LayerItem
                            key={layer.id}
                            layer={layer}
                            onToggle={() => toggleLayer(layer.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function LayerControl() {
    const layers = useLayerStore((state) => state.layers);
    const sidebarOpen = useUserStore((state) => state.sidebarOpen);
    const toggleSidebar = useUserStore((state) => state.toggleSidebar);
    const darkMode = useUserStore((state) => state.darkMode);
    const toggleDarkMode = useUserStore((state) => state.toggleDarkMode);

    const physicalLayers = layers.filter((l) => l.category === 'physical');
    const economicLayers = layers.filter((l) => l.category === 'economic');
    const administrativeLayers = layers.filter((l) => l.category === 'administrative');

    const totalActive = layers.filter((l) => l.visible).length;

    return (
        <>
            {/* Sol Menü */}
            <aside
                className={`sidebar bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 rounded-r-3xl shadow-2xl transition-transform duration-300 flex flex-col ${sidebarOpen ? '' : '-translate-x-full'
                    }`}
            >
                {/* Başlık */}
                <div className="p-5 border-b border-gray-200 dark:border-slate-700 bg-gradient-to-r from-indigo-600 to-purple-600">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg">
                                <MapPin size={26} className="text-white" />
                            </div>
                            <div>
                                <h1 className="font-bold text-xl text-white">Geo-KPSS</h1>
                                <p className="text-sm text-white/80">Türkiye Coğrafya Haritası</p>
                            </div>
                        </div>
                        <button
                            onClick={toggleSidebar}
                            className="p-2.5 hover:bg-white/20 rounded-xl transition-colors text-white"
                            title="Menüyü Kapat"
                        >
                            <PanelLeftClose size={22} />
                        </button>
                    </div>

                    {/* Aktif Katman Sayısı */}
                    <div className="flex items-center gap-2 mt-4 px-3 py-2.5 bg-white/20 rounded-xl">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-sm font-semibold text-white">
                            {totalActive} katman aktif
                        </span>
                    </div>
                </div>

                {/* Katman Kategorileri */}
                <div className="flex-1 overflow-y-auto px-3 py-4 bg-gray-50 dark:bg-slate-900">
                    {/* Bölge Filtresi */}
                    <div className="mb-4 p-3 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700">
                        <RegionFilter />
                    </div>

                    <CategorySection category="physical" layers={physicalLayers} />
                    <CategorySection category="economic" layers={economicLayers} />
                    <CategorySection category="administrative" layers={administrativeLayers} />
                </div>

                {/* Alt Kısım - Tema Değiştirici */}
                <div className="p-4 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                    <div className="flex items-center justify-between px-2">
                        <span className="text-base font-semibold text-gray-700 dark:text-slate-300">Tema</span>
                        <button
                            onClick={toggleDarkMode}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-colors font-medium"
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                            <span className="text-sm">{darkMode ? 'Açık Mod' : 'Koyu Mod'}</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Menü Kapalıyken Açma Butonu */}
            {!sidebarOpen && (
                <button
                    onClick={toggleSidebar}
                    className="fixed top-4 left-4 z-[1000] p-3.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-xl hover:scale-105 transition-transform"
                    title="Menüyü Aç"
                >
                    <PanelLeft size={24} className="text-gray-700 dark:text-white" />
                </button>
            )}
        </>
    );
}
