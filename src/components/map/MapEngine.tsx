'use client';

import dynamic from 'next/dynamic';
import { useUserStore } from '@/stores/userStore';

// Dynamic import for Leaflet components (SSR disabled)
const MapWithNoSSR = dynamic(() => import('./MapClient'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-screen bg-slate-900 flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-slate-400 text-lg">Harita Yükleniyor...</p>
                <p className="text-slate-500 text-sm mt-1">Türkiye Coğrafya Haritası</p>
            </div>
        </div>
    ),
});

export default function MapEngine() {
    return (
        <div className="map-container">
            <MapWithNoSSR />
        </div>
    );
}
