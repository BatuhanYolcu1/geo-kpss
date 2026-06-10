'use client';

import { MapPin, Check } from 'lucide-react';
import { create } from 'zustand';

// Region store
interface RegionFilterState {
    selectedRegions: string[];
    toggleRegion: (region: string) => void;
    selectAll: () => void;
    clearAll: () => void;
}

export const TURKEY_REGIONS = [
    { id: 'marmara', name: 'Marmara', color: '#3B82F6' },
    { id: 'ege', name: 'Ege', color: '#8B5CF6' },
    { id: 'akdeniz', name: 'Akdeniz', color: '#F59E0B' },
    { id: 'karadeniz', name: 'Karadeniz', color: '#22C55E' },
    { id: 'ic-anadolu', name: 'İç Anadolu', color: '#EF4444' },
    { id: 'dogu-anadolu', name: 'Doğu Anadolu', color: '#6366F1' },
    { id: 'guneydogu-anadolu', name: 'Güneydoğu Anadolu', color: '#EC4899' },
];

export const useRegionStore = create<RegionFilterState>((set) => ({
    selectedRegions: TURKEY_REGIONS.map(r => r.name), // All selected by default

    toggleRegion: (region: string) => set((state) => ({
        selectedRegions: state.selectedRegions.includes(region)
            ? state.selectedRegions.filter(r => r !== region)
            : [...state.selectedRegions, region]
    })),

    selectAll: () => set({ selectedRegions: TURKEY_REGIONS.map(r => r.name) }),

    clearAll: () => set({ selectedRegions: [] }),
}));

interface RegionFilterProps {
    compact?: boolean;
}

export default function RegionFilter({ compact = false }: RegionFilterProps) {
    const { selectedRegions, toggleRegion, selectAll, clearAll } = useRegionStore();
    const allSelected = selectedRegions.length === TURKEY_REGIONS.length;

    if (compact) {
        return (
            <div className="flex flex-wrap gap-1.5">
                {TURKEY_REGIONS.map(region => {
                    const isSelected = selectedRegions.includes(region.name);
                    return (
                        <button
                            key={region.id}
                            onClick={() => toggleRegion(region.name)}
                            className={`
                                px-2 py-1 text-xs font-medium rounded-lg transition-all
                                ${isSelected
                                    ? 'text-white'
                                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}
                            `}
                            style={isSelected ? { backgroundColor: region.color } : undefined}
                        >
                            {region.name.split(' ')[0]}
                        </button>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-indigo-400" />
                    <span className="text-sm font-semibold text-white">Bölge Filtresi</span>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={selectAll}
                        className="text-xs text-indigo-400 hover:text-indigo-300"
                    >
                        Tümü
                    </button>
                    <span className="text-slate-600">|</span>
                    <button
                        onClick={clearAll}
                        className="text-xs text-slate-400 hover:text-slate-300"
                    >
                        Temizle
                    </button>
                </div>
            </div>

            {/* Region Chips */}
            <div className="grid grid-cols-2 gap-2">
                {TURKEY_REGIONS.map(region => {
                    const isSelected = selectedRegions.includes(region.name);
                    return (
                        <button
                            key={region.id}
                            onClick={() => toggleRegion(region.name)}
                            className={`
                                flex items-center gap-2 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all
                                ${isSelected
                                    ? 'text-white shadow-lg'
                                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'}
                            `}
                            style={isSelected ? {
                                backgroundColor: region.color,
                                boxShadow: `0 4px 14px -3px ${region.color}50`
                            } : undefined}
                        >
                            <div
                                className={`w-3 h-3 rounded-full border-2 flex items-center justify-center
                                    ${isSelected ? 'border-white/50 bg-white/20' : 'border-slate-600'}`}
                                style={!isSelected ? { borderColor: region.color } : undefined}
                            >
                                {isSelected && <Check size={8} className="text-white" />}
                            </div>
                            <span className="truncate">{region.name}</span>
                        </button>
                    );
                })}
            </div>

            {/* Active count */}
            <p className="text-xs text-slate-500 text-center">
                {selectedRegions.length} / {TURKEY_REGIONS.length} bölge seçili
            </p>
        </div>
    );
}
