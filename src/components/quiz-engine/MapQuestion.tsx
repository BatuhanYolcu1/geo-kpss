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
    onNext: () => void;
    showFeedback: boolean;
}

export default function MapQuestion({ question, onAnswer, onNext, showFeedback }: Props) {
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

            {/* Result Modal - Repositioned to bottom right for map visibility */}
            {showFeedback && result && (
                <div className="fixed bottom-6 right-6 z-[1001] w-full max-w-[280px] animate-in slide-in-from-bottom-4 duration-300">
                    <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-2xl p-5 shadow-2xl">
                        <div
                            className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: getRatingColor(result.rating) + '20', borderColor: getRatingColor(result.rating), borderWidth: 2 }}
                        >
                            {result.rating === 'perfect' && <span className="text-2xl">🎯</span>}
                            {result.rating === 'great' && <span className="text-2xl">🌟</span>}
                            {result.rating === 'good' && <span className="text-2xl">👍</span>}
                            {result.rating === 'miss' && <span className="text-2xl">😅</span>}
                        </div>

                        <h2 className="text-xl font-bold text-center text-white mb-1">
                            {result.rating === 'perfect' && 'Mükemmel!'}
                            {result.rating === 'great' && 'Harika!'}
                            {result.rating === 'good' && 'İyi!'}
                            {result.rating === 'miss' && 'Kaçırdın!'}
                        </h2>

                        <p className="text-center text-slate-400 text-sm mb-3">
                            <span className="font-bold text-white">{question.targetName}</span>
                            <br />
                            Mesafe: <span className="font-bold" style={{ color: getRatingColor(result.rating) }}>
                                {result.distance.toFixed(1)} km
                            </span>
                        </p>

                        {result.points > 0 && (
                            <div className="text-center mb-4">
                                <span className="text-2xl font-bold" style={{ color: getRatingColor(result.rating) }}>
                                    +{result.points}
                                </span>
                                <span className="text-slate-400 text-xs ml-1">puan</span>
                            </div>
                        )}

                        {/* Öğrenme Molası (Did you know?) */}
                        {question.didYouKnow && (
                            <div className="mb-5 p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                <div className="text-[10px] uppercase tracking-wider font-bold text-indigo-400 mb-1 flex items-center gap-1">
                                    <Trophy size={10} />
                                    Öğrenme Molası
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed italic">
                                    &quot;{question.didYouKnow}&quot;
                                </p>
                            </div>
                        )}

                        <button
                            onClick={onNext}
                            className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm"
                        >
                            Sıradaki Soru <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
