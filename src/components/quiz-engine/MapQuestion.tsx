'use client';

import { useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, ChevronRight, Trophy, Sparkles, Navigation } from 'lucide-react';
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
    html: `<div style="width:${size}px;height:${size}px;background:${color};border:3px solid white;border-radius:50%;box-shadow:0 8px 16px rgba(0,0,0,0.5);"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
});

const targetIcon = L.divIcon({
    className: 'target-marker',
    html: `
        <div style="position:relative;">
            <div style="width:36px;height:36px;background:#10b981;border:4px solid white;border-radius:50%;box-shadow:0 0 20px rgba(16,185,129,0.5);display:flex;align-items:center;justify-content:center;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="position:absolute;top:-28px;left:50%;transform:translateX(-50%);background:#10b981;color:white;font-size:10px;font-weight:900;padding:4px 10px;border-radius:20px;white-space:nowrap;box-shadow:0 4px 12px rgba(0,0,0,0.3);letter-spacing:1px;border:1px solid rgba(255,255,10%,0.2);">HEDEF</div>
        </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
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
        <div className="relative w-full h-full animate-fade-in">
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
                                weight: 4,
                                dashArray: '8, 12',
                                opacity: 0.9,
                            }}
                        />
                        <Marker position={[userClick.lat, userClick.lng]} icon={createMarkerIcon(result?.rating === 'miss' ? '#f43f5e' : '#f59e0b', 32)} />
                        <Marker position={[question.targetLat, question.targetLng]} icon={targetIcon} />
                    </>
                )}
            </MapContainer>

            {/* Question HUD - Refined with Glass Premium */}
            {!answered && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[1000] w-full max-w-sm px-4">
                    <div className="glass-premium rounded-3xl p-6 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-5 relative overflow-hidden animate-slide-up">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600" />
                        <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                            <Navigation size={28} className="text-indigo-400 rotate-45" />
                        </div>
                        <div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">HARİTADA BULUN</div>
                            <div className="text-2xl font-black text-white tracking-tight">{question.targetName}</div>
                            {question.hint && (
                                <p className="text-xs text-indigo-400/80 font-medium mt-1">İpucu: {question.hint}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Result Modal - Integrated with the new design language */}
            {showFeedback && result && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 z-[1001] w-[calc(100%-2rem)] max-w-sm animate-modal-enter">
                    <div className="glass-premium rounded-[2rem] p-8 border-white/10 shadow-3xl relative overflow-hidden">
                        <div
                            className="absolute top-0 left-0 right-0 h-1.5"
                            style={{ backgroundColor: getRatingColor(result.rating) }}
                        />

                        <div
                            className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-xl rotate-3"
                            style={{ backgroundColor: getRatingColor(result.rating) + '20', borderColor: getRatingColor(result.rating), borderWidth: 2 }}
                        >
                            {result.rating === 'perfect' && <Sparkles size={32} className="text-emerald-400" />}
                            {result.rating === 'great' && <Trophy size={32} className="text-amber-400" />}
                            {result.rating === 'good' && <MapPin size={32} className="text-indigo-400" />}
                            {result.rating === 'miss' && <Navigation size={32} className="text-rose-400" />}
                        </div>

                        <h2 className="text-3xl font-black text-center text-white mb-2 tracking-tight">
                            {result.rating === 'perfect' && 'KUSURSUZ!'}
                            {result.rating === 'great' && 'HARİKA!'}
                            {result.rating === 'good' && 'BAŞARILI!'}
                            {result.rating === 'miss' && 'ÜZGÜNÜM!'}
                        </h2>

                        <div className="bg-white/5 rounded-2xl p-4 mb-6 border border-white/5 text-center">
                            <p className="text-slate-400 text-sm font-medium">
                                <span className="text-white font-black">{question.targetName}</span> noktasından
                                <br />
                                <span className="text-2xl font-black" style={{ color: getRatingColor(result.rating) }}>
                                    {result.distance.toFixed(1)} km
                                </span>
                                <br />
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">UZAKTAYDIN</span>
                            </p>
                        </div>

                        {result.points > 0 && (
                            <div className="text-center mb-6 flex flex-col items-center">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-1" style={{ color: getRatingColor(result.rating) }}>KAZANILAN</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-4xl font-black text-white">+{result.points}</span>
                                    <span className="text-slate-400 font-bold">PUAN</span>
                                </div>
                            </div>
                        )}

                        {/* Updated Did You Know Section */}
                        {question.didYouKnow && (
                            <div className="mb-8 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                                <div className="text-[10px] uppercase tracking-[0.2em] font-black text-indigo-400 mb-2 flex items-center gap-2">
                                    <Sparkles size={12} />
                                    BİLİYOR MUYDUNUZ?
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed font-medium italic">
                                    &quot;{question.didYouKnow}&quot;
                                </p>
                            </div>
                        )}

                        <button
                            onClick={onNext}
                            className="w-full py-5 bg-white text-slate-950 hover:bg-slate-100 rounded-2xl font-black transition-all flex items-center justify-center gap-3 shadow-xl group"
                        >
                            SIRADAKİ SORU
                            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
