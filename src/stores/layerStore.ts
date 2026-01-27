import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { LayerStore, LayerConfig, LayerCategory } from '@/types';

// Default layer configurations with semantic geography colors
const defaultLayers: LayerConfig[] = [
    // Physical Layers
    {
        id: 'mountains',
        name: 'Dağlar',
        nameEn: 'Mountains',
        category: 'physical',
        icon: 'mountain',
        color: '#b45309', // geo-mountain (amber-700)
        visible: false,
        legendItems: [
            { label: 'Volkanik Dağ', color: '#dc2626', shape: 'circle' }, // geo-volcano
            { label: 'Tektonik Dağ', color: '#b45309', shape: 'circle' }, // geo-mountain
        ],
    },
    {
        id: 'plains',
        name: 'Ovalar',
        nameEn: 'Plains',
        category: 'physical',
        icon: 'square',
        color: '#059669', // geo-plain (emerald-600)
        visible: false,
        legendItems: [
            { label: 'Ova', color: '#059669', shape: 'polygon' },
        ],
    },
    {
        id: 'plateaus',
        name: 'Platolar',
        nameEn: 'Plateaus',
        category: 'physical',
        icon: 'layers',
        color: '#d97706', // amber-600
        visible: false,
        legendItems: [
            { label: 'Plato', color: '#d97706', shape: 'polygon' },
        ],
    },
    {
        id: 'rivers',
        name: 'Akarsular',
        nameEn: 'Rivers',
        category: 'physical',
        icon: 'waves',
        color: '#0ea5e9', // geo-water (sky-500)
        visible: false,
        legendItems: [
            { label: 'Akarsu', color: '#0ea5e9', shape: 'line' },
        ],
    },
    {
        id: 'lakes',
        name: 'Göller',
        nameEn: 'Lakes',
        category: 'physical',
        icon: 'droplets',
        color: '#0284c7', // geo-water-dark (sky-600)
        visible: false,
        legendItems: [
            { label: 'Tatlı Su Gölü', color: '#0ea5e9', shape: 'polygon' },
            { label: 'Tuzlu Göl', color: '#0284c7', shape: 'polygon' },
        ],
    },

    // Economic Layers
    {
        id: 'mines',
        name: 'Madenler',
        nameEn: 'Mines',
        category: 'economic',
        icon: 'pickaxe',
        color: '#64748b', // geo-mine (slate-500)
        visible: false,
        legendItems: [
            { label: 'Demir', color: '#374151', shape: 'circle' },
            { label: 'Bor', color: '#14b8a6', shape: 'circle' },
            { label: 'Krom', color: '#8b5cf6', shape: 'circle' },
            { label: 'Bakır', color: '#f97316', shape: 'circle' },
        ],
    },
    {
        id: 'agriculture',
        name: 'Tarım Alanları',
        nameEn: 'Agriculture',
        category: 'economic',
        icon: 'wheat',
        color: '#059669', // geo-plain (emerald-600)
        visible: false,
        legendItems: [
            { label: 'Tahıl', color: '#eab308', shape: 'polygon' },
            { label: 'Pamuk', color: '#f8fafc', shape: 'polygon' },
            { label: 'Çay', color: '#15803d', shape: 'polygon' },
        ],
    },
    {
        id: 'industry',
        name: 'Sanayi Bölgeleri',
        nameEn: 'Industry',
        category: 'economic',
        icon: 'factory',
        color: '#475569', // slate-600
        visible: false,
        legendItems: [
            { label: 'Organize Sanayi', color: '#475569', shape: 'polygon' },
        ],
    },
    {
        id: 'powerplants',
        name: 'Enerji Santralleri',
        nameEn: 'Power Plants',
        category: 'economic',
        icon: 'zap',
        color: '#eab308', // geo-energy (yellow-500)
        visible: false,
        legendItems: [
            { label: 'Hidroelektrik', color: '#0ea5e9', shape: 'circle' },
            { label: 'Termik', color: '#64748b', shape: 'circle' },
            { label: 'Jeotermal', color: '#e11d48', shape: 'circle' },
            { label: 'Rüzgar', color: '#22d3ee', shape: 'circle' },
        ],
    },

    // Administrative Layers  
    {
        id: 'cities',
        name: 'Şehirler',
        nameEn: 'Cities',
        category: 'administrative',
        icon: 'building-2',
        color: '#7c3aed', // geo-city (violet-600)
        visible: true,
        legendItems: [
            { label: 'Büyükşehir', color: '#6d28d9', shape: 'circle' },
            { label: 'İl Merkezi', color: '#7c3aed', shape: 'circle' },
        ],
    },

    // Tourism Layers
    {
        id: 'unesco-sites',
        name: 'UNESCO Mirasları',
        nameEn: 'UNESCO World Heritage',
        category: 'tourism',
        icon: 'palmtree',
        color: '#e11d48', // rose-600
        visible: false,
        legendItems: [
            { label: 'Kültürel Miras', color: '#e11d48', shape: 'circle' },
            { label: 'Karma Miras', color: '#be123c', shape: 'circle' },
        ],
    },
    {
        id: 'national-parks',
        name: 'Milli Parklar',
        nameEn: 'National Parks',
        category: 'tourism',
        icon: 'map',
        color: '#15803d', // green-700
        visible: false,
        legendItems: [
            { label: 'Milli Park', color: '#15803d', shape: 'polygon' },
        ],
    },
];

export const useLayerStore = create<LayerStore>()(
    persist(
        (set, get) => ({
            layers: defaultLayers,
            activeLayerIds: ['cities'],

            toggleLayer: (layerId: string) => {
                set((state) => {
                    const layer = state.layers.find((l) => l.id === layerId);
                    if (!layer) return state;

                    const newVisible = !layer.visible;
                    const newLayers = state.layers.map((l) =>
                        l.id === layerId ? { ...l, visible: newVisible } : l
                    );
                    const newActiveIds = newVisible
                        ? [...state.activeLayerIds, layerId]
                        : state.activeLayerIds.filter((id) => id !== layerId);

                    return { layers: newLayers, activeLayerIds: newActiveIds };
                });
            },


            setAllLayersVisibility: (category: LayerCategory, visible: boolean) => {
                set((state) => {
                    const categoryLayerIds = state.layers
                        .filter((l) => l.category === category)
                        .map((l) => l.id);

                    const newLayers = state.layers.map((l) =>
                        l.category === category ? { ...l, visible } : l
                    );

                    const newActiveIds = visible
                        ? [...new Set([...state.activeLayerIds, ...categoryLayerIds])]
                        : state.activeLayerIds.filter((id) => !categoryLayerIds.includes(id));

                    return { layers: newLayers, activeLayerIds: newActiveIds };
                });
            },

            getActiveLayers: () => {
                const state = get();
                return state.layers.filter((l) => l.visible);
            },
        }),
        {
            name: 'geo-kpss-layers',
            version: 2,
            migrate: (persistedState: any, version: number) => {
                if (version < 2) {
                    // If old version, we need to ensure tourism layers are added
                    const state = persistedState as LayerStore;
                    const existingLayerIds = state.layers.map(l => l.id);
                    const missingLayers = defaultLayers.filter(l => !existingLayerIds.includes(l.id));

                    return {
                        ...state,
                        layers: [...state.layers, ...missingLayers],
                    };
                }
                return persistedState;
            },
        }
    )
);
