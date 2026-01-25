'use client';

import { useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, ChevronRight, Trophy } from 'lucide-react';
import type { MapQuestion as MQType } from '@/types/quiz';
import { calculateDistance, calculateScore, getRatingColor } from '@/lib/geo';
import { TURKEY_CENTER, TURKEY_BOUNDS, MIN_ZOOM, MAX_ZOOM } from '@/lib/mapConfig';

// Fix Leaflet icon
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Blind map tile
const BLIND_MAP_TILE = {
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png',
    attribution: '© OpenStreetMap © CARTO',
};

// Marker icons
const createMarkerIcon = (color: string, size: number = 28) => L.divIcon({
    className: 'custom-quiz-marker',
    html: `<div style="width:${size}px;height:${size}px;background:${color};border:3px solid white;border-radius:50%;box-shadow:0 4px 12px rgba(0,0,0,0.4);"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
});

const targetIcon = L.divIcon({
    className: 'target-marker',
    html: `<div style="position:relative;"><div style="width:32px;height:32px;background:#22c55e;border:3px solid white;border-radius:50%;box-shadow:0 4px 12px rgba(34,197,94,0.5);"></div><div style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#22c55e;color:white;font-size:11px;font-weight:bold;padding:2px 6px;border-radius:6px;white-space:nowrap;">HEDEF</div></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
});

function ClickHandler({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) {
    useMapEvents({ click: (e) => onMapClick(e.latlng.lat, e.latlng.lng) });
    return null;
}

interface Props {
    question: MQType;
    onAnswer: (isCorrect: boolean, points: number, explanation?: string) => void;
    showFeedback: boolean;
}

export default function MapQuestion({ question, onAnswer, showFeedback }: Props) {
    const [userClick, setUserClick] = useState<{ lat: number; lng: number } | null>(null);
    const [result, setResult] = useState<{ distance: number; points: number; rating: 'perfect' | 'great' | 'good' | 'miss' } | null>(null);
    const [answered, setAnswered] = useState(false);

    const handleMapClick = useCallback((lat: number, lng: number) => {
        if (answered) return;

        setUserClick({ lat, lng });
        setAnswered(true);

        const distance = calculateDistance(lat, lng, question.targetLat, question.targetLng);
        const { points, rating } = calculateScore(distance);

        setResult({ distance, points, rating });

        const isCorrect = points > 0;
        onAnswer(isCorrect, points, `${distance.toFixed(1)} km uzakta`);
    }, [answered, question, onAnswer]);

    return (
        <div className="relative w-full h-full">
            <MapContainer
                center={TURKEY_CENTER}
                zoom={6}
                minZoom={MIN_ZOOM}
                maxZoom={MAX_ZOOM}
                maxBounds={TURKEY_BOUNDS}
                maxBoundsViscosity={1.0}
                className="w-full h-full cursor-crosshair"
                zoomControl={false}
            >
                <TileLayer url={BLIND_MAP_TILE.url} attribution={BLIND_MAP_TILE.attribution} />

                {!answered && <ClickHandler onMapClick={handleMapClick} />}

                {userClick && (
                    <>
                        <Polyline
                            positions={[[userClick.lat, userClick.lng], [question.targetLat, question.targetLng]]}
                            pathOptions={{
                                color: getRatingColor(result?.rating || 'miss'),
                                weight: 3,
                                dashArray: '10, 10',
                                opacity: 0.8,
                            }}
                        />
                        <Marker position={[userClick.lat, userClick.lng]} icon={createMarkerIcon(result?.rating === 'miss' ? '#ef4444' : '#f97316', 24)} />
                        <Marker position={[question.targetLat, question.targetLng]} icon={targetIcon} />
                    </>
                )}
            </MapContainer>

            {/* Question HUD */}
            {!answered && (
                <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[1000]">
                    <div className="px-6 py-4 bg-slate-900/95 backdrop-blur-md border border-indigo-500/30 rounded-2xl shadow-xl">
                        <div className="flex items-center gap-3">
                            <MapPin size={24} className="text-indigo-400" />
                            <div>
                                <div className="text-xs text-slate-400 uppercase tracking-wide">Bul</div>
                                <div className="text-xl font-bold text-white">{question.targetName}</div>
                            </div>
                        </div>
                        {question.hint && (
                            <p className="text-xs text-slate-500 mt-2">İpucu: {question.hint}</p>
                        )}
                    </div>
                </div>
            )}

            {/* Result Modal */}
            {showFeedback && result && (
                <div className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl p-6 max-w-sm mx-4 animate-popup">
                        <div
                            className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: getRatingColor(result.rating) + '20', borderColor: getRatingColor(result.rating), borderWidth: 2 }}
                        >
                            {result.rating === 'perfect' && <span className="text-3xl">🎯</span>}
                            {result.rating === 'great' && <span className="text-3xl">🌟</span>}
                            {result.rating === 'good' && <span className="text-3xl">👍</span>}
                            {result.rating === 'miss' && <span className="text-3xl">😅</span>}
                        </div>

                        <h2 className="text-2xl font-bold text-center text-white mb-2">
                            {result.rating === 'perfect' && 'Mükemmel!'}
                            {result.rating === 'great' && 'Harika!'}
                            {result.rating === 'good' && 'İyi!'}
                            {result.rating === 'miss' && 'Kaçırdın!'}
                        </h2>

                        <p className="text-center text-slate-400 mb-4">
                            <span className="font-bold text-white">{question.targetName}</span>
                            <br />
                            Fark: <span className="font-bold" style={{ color: getRatingColor(result.rating) }}>
                                {result.distance.toFixed(1)} km
                            </span>
                        </p>

                        {result.points > 0 && (
                            <div className="text-center mb-6">
                                <span className="text-3xl font-bold" style={{ color: getRatingColor(result.rating) }}>
                                    +{result.points}
                                </span>
                                <span className="text-slate-400 ml-2">puan</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
