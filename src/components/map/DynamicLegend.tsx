'use client';

import { useLayerStore } from '@/stores/layerStore';
import type { LayerConfig } from '@/types';

function LegendItem({
    label,
    color,
    shape = 'circle',
}: {
    label: string;
    color: string;
    shape?: 'circle' | 'line' | 'polygon';
}) {
    return (
        <div className="flex items-center gap-3 py-1.5">
            {shape === 'circle' && (
                <div
                    className="w-4 h-4 rounded-full border-2 border-white shadow shrink-0"
                    style={{ backgroundColor: color }}
                />
            )}
            {shape === 'line' && (
                <div
                    className="w-6 h-1 rounded shrink-0"
                    style={{ backgroundColor: color }}
                />
            )}
            {shape === 'polygon' && (
                <div
                    className="w-4 h-4 rounded border-2 border-white shadow shrink-0"
                    style={{ backgroundColor: color, opacity: 0.8 }}
                />
            )}
            <span className="text-sm font-semibold text-gray-800 dark:text-slate-200">{label}</span>
        </div>
    );
}

function LayerLegend({ layer }: { layer: LayerConfig }) {
    if (!layer.legendItems || layer.legendItems.length === 0) {
        return null;
    }

    return (
        <div className="py-3 border-b border-gray-200 dark:border-slate-700 last:border-0">
            <div className="flex items-center gap-2 mb-2">
                <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: layer.color }}
                />
                <span className="font-bold text-sm text-gray-900 dark:text-white">{layer.name}</span>
            </div>
            <div className="ml-5 space-y-1">
                {layer.legendItems.map((item, index) => (
                    <LegendItem
                        key={`${layer.id}-${index}`}
                        label={item.label}
                        color={item.color}
                        shape={item.shape}
                    />
                ))}
            </div>
        </div>
    );
}

export default function DynamicLegend() {
    const layers = useLayerStore((state) => state.layers);
    const activeLayers = layers.filter((l) => l.visible);

    if (activeLayers.length === 0) {
        return null;
    }

    return (
        <div className="legend-panel bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-xl p-4">
            <h3 className="font-bold text-base mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                Lejant
            </h3>
            <div className="divide-y divide-gray-200 dark:divide-slate-700">
                {activeLayers.map((layer) => (
                    <LayerLegend key={layer.id} layer={layer} />
                ))}
            </div>
        </div>
    );
}
