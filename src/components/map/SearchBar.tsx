'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Search, X, MapPin, Mountain, Waves, Droplets, Building2, Pickaxe, Zap, Wheat, Factory, Palmtree, Trees, Camera } from 'lucide-react';

// Import all data
import citiesData from '@/data/geojson/cities.json';
import mountainsData from '@/data/geojson/mountains.json';
import riversData from '@/data/geojson/rivers.json';
import lakesData from '@/data/geojson/lakes.json';
import minesData from '@/data/geojson/mines.json';
import powerplantsData from '@/data/geojson/powerplants.json';
import plainsData from '@/data/geojson/plains.json';
import plateausData from '@/data/geojson/plateaus.json';
import agricultureData from '@/data/geojson/agriculture.json';
import industryData from '@/data/geojson/industry.json';
import tourismData from '@/data/geojson/tourism.json';

interface SearchResult {
    id: string;
    name: string;
    type: string;
    category: string;
    region?: string;
    lat: number;
    lng: number;
}

interface SearchBarProps {
    onSelectResult: (result: SearchResult) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
    cities: <Building2 size={16} className="text-violet-500" />,
    mountains: <Mountain size={16} className="text-amber-600" />,
    rivers: <Waves size={16} className="text-sky-500" />,
    lakes: <Droplets size={16} className="text-sky-600" />,
    mines: <Pickaxe size={16} className="text-slate-500" />,
    powerplants: <Zap size={16} className="text-yellow-500" />,
    plains: <MapPin size={16} className="text-emerald-500" />,
    plateaus: <MapPin size={16} className="text-amber-500" />,
    agriculture: <Wheat size={16} className="text-green-600" />,
    industry: <Factory size={16} className="text-slate-600" />,
    'unesco-sites': <Camera size={16} className="text-rose-500" />,
    'national-parks': <Trees size={16} className="text-green-700" />,
};

// Build search index from all data
function buildSearchIndex(): SearchResult[] {
    const results: SearchResult[] = [];

    const datasets = [
        { data: citiesData, category: 'cities' },
        { data: mountainsData, category: 'mountains' },
        { data: riversData, category: 'rivers' },
        { data: lakesData, category: 'lakes' },
        { data: minesData, category: 'mines' },
        { data: powerplantsData, category: 'powerplants' },
        { data: plainsData, category: 'plains' },
        { data: plateausData, category: 'plateaus' },
        { data: agricultureData, category: 'agriculture' },
        { data: industryData, category: 'industry' },
        { data: tourismData, category: 'unesco-sites', filter: (p: Record<string, unknown>) => (p.type as string)?.includes('UNESCO') },
        { data: tourismData, category: 'national-parks', filter: (p: Record<string, unknown>) => (p.type as string)?.includes('Milli Park') },
    ];

    for (const { data, category, filter } of datasets) {
        const features = (data as { features: Array<{ properties: Record<string, unknown>; geometry: { type: string; coordinates: number[] | number[][] } }> }).features;

        for (const feature of features) {
            const props = feature.properties;
            const geom = feature.geometry;

            if (filter && !filter(props)) continue;

            let lat = 0, lng = 0;
            if (geom.type === 'Point') {
                const coords = geom.coordinates as number[];
                lng = coords[0];
                lat = coords[1];
            } else if (geom.type === 'LineString') {
                const coords = geom.coordinates as number[][];
                const mid = Math.floor(coords.length / 2);
                lng = coords[mid][0];
                lat = coords[mid][1];
            }

            results.push({
                id: props.id as string,
                name: props.name as string,
                type: props.type as string,
                category,
                region: props.region as string | undefined,
                lat,
                lng,
            });
        }
    }

    return results;
}

export default function SearchBar({ onSelectResult }: SearchBarProps) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Build search index once
    const searchIndex = useMemo(() => buildSearchIndex(), []);

    // Filter results based on query
    const results = useMemo(() => {
        if (!query.trim() || query.length < 2) return [];

        const normalizedQuery = query.toLowerCase().replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c');

        return searchIndex
            .filter((item) => {
                const normalizedName = item.name.toLowerCase().replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c');
                const normalizedType = item.type.toLowerCase().replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c');
                return normalizedName.includes(normalizedQuery) || normalizedType.includes(normalizedQuery);
            })
            .slice(0, 10);
    }, [query, searchIndex]);

    // Handle click outside to close
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = useCallback((result: SearchResult) => {
        onSelectResult(result);
        setQuery('');
        setIsOpen(false);
        inputRef.current?.blur();
    }, [onSelectResult]);

    const handleClear = useCallback(() => {
        setQuery('');
        inputRef.current?.focus();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full max-w-md">
            {/* Search Input */}
            <div className={`
                flex items-center gap-2 px-4 py-2.5 
                bg-slate-900/90 backdrop-blur-md 
                border rounded-xl shadow-lg
                transition-all duration-200
                ${isFocused ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-slate-700'}
            `}>
                <Search size={18} className="text-slate-400 shrink-0" />
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => {
                        setIsFocused(true);
                        if (query.length >= 2) setIsOpen(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Şehir, dağ, nehir ara..."
                    className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none text-sm"
                />
                {query && (
                    <button onClick={handleClear} className="text-slate-400 hover:text-white p-1">
                        <X size={16} />
                    </button>
                )}
            </div>

            {/* Results Dropdown */}
            {isOpen && results.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-xl overflow-hidden z-50 max-h-80 overflow-y-auto">
                    {results.map((result) => (
                        <button
                            key={result.id}
                            onClick={() => handleSelect(result)}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 transition-colors text-left border-b border-slate-800 last:border-b-0"
                        >
                            <div className="shrink-0">
                                {categoryIcons[result.category] || <MapPin size={16} />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-white text-sm font-medium truncate">{result.name}</p>
                                <p className="text-slate-400 text-xs truncate">
                                    {result.type} {result.region && `• ${result.region}`}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            )}

            {/* No Results */}
            {isOpen && query.length >= 2 && results.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-xl p-4 z-50">
                    <p className="text-slate-400 text-sm text-center">Sonuç bulunamadı</p>
                </div>
            )}
        </div>
    );
}
