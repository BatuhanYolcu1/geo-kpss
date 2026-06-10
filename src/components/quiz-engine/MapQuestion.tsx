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
    const [showHint, setShowHint] = useState(false);

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
                className="w-full h-full cursor-crosshair bg-[#f1f5f9]"
                zoomControl={false}
                fadeAnimation={false}
                zoomAnimation={true}
                markerZoomAnimation={true}
                wheelPxPerZoomLevel={70}
                zoomSnap={0.1}
                zoomDelta={1}
                preferCanvas={true}
                inertia={true}
            >
                <TileLayer
                    url={BLIND_MAP_TILE.url}
                    attribution={BLIND_MAP_TILE.attribution}
                    updateWhenZooming={false}
                    updateWhenIdle={false}
                    keepBuffer={12}
                    noWrap={true}
                />

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

            {/* Right Side UI Stack (HUD & Results) */}
            <div className="fixed top-24 right-2 sm:top-28 sm:right-8 z-[1001] flex flex-col gap-3 sm:gap-4 pointer-events-none w-[min(calc(100vw-4rem),14rem)] sm:w-auto sm:max-w-sm">

                {/* Question HUD - Slim Capsule */}
                {!answered && (
                    <div className="bg-slate-950 rounded-[1.5rem] px-4 py-2.5 sm:px-5 sm:py-3 border-2 border-slate-800 shadow-2xl ring-1 ring-white/5 flex items-center gap-3 sm:gap-4 relative overflow-hidden animate-slide-up pointer-events-auto">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600" />
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-500 flex items-center justify-center shrink-0 shadow-lg">
                            <Navigation size={18} className="text-white rotate-45 sm:hidden" />
                            <Navigation size={22} className="text-white rotate-45 hidden sm:block" />
                        </div>
                        <div className="min-w-0 flex-1 pr-1">
                            <div className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.2em] leading-none mb-1">HARİTADA BULUN</div>
                            <div className="text-base sm:text-xl font-black text-white tracking-tighter leading-tight mb-1 truncate">
                                {question.targetName}
                            </div>

                            {question.hint && (
                                <div>
                                    {showHint ? (
                                        <p className="text-[11px] text-slate-300 font-bold animate-fade-in flex items-center gap-1.5 break-words">
                                            <span className="w-1 h-1 rounded-full bg-indigo-400 shrink-0 inline-block" />
                                            {question.hint}
                                        </p>
                                    ) : (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setShowHint(true);
                                            }}
                                            className="group flex items-center gap-1.5 text-[9px] font-black text-indigo-300 hover:text-white transition-colors"
                                        >
                                            <Sparkles size={10} className="text-amber-400" />
                                            İPUCU GÖSTER
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Result Modal - Integrated Stack */}
                {showFeedback && result && (
                    <div className="w-full animate-modal-enter pointer-events-auto">
                        <div className="bg-slate-950 border-2 border-white/20 rounded-2xl sm:rounded-[2rem] p-3 sm:p-6 shadow-[0_32px_64px_rgba(0,0,0,0.8)] relative overflow-hidden">
                            <div
                                className="absolute top-0 left-0 right-0 h-1"
                                style={{ backgroundColor: getRatingColor(result.rating) }}
                            />

                            {/* Mobile: inline row layout — icon + title + distance */}
                            <div className="flex items-center gap-2 mb-2 sm:hidden">
                                <div
                                    className="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center shadow-lg relative"
                                    style={{ backgroundColor: getRatingColor(result.rating) }}
                                >
                                    {result.rating === 'perfect' && <Sparkles size={18} className="text-white" />}
                                    {result.rating === 'great' && <Trophy size={18} className="text-white" />}
                                    {result.rating === 'good' && <MapPin size={18} className="text-white" />}
                                    {result.rating === 'miss' && <Navigation size={18} className="text-white" />}
                                </div>
                                <div className="min-w-0">
                                    <div className="text-sm font-black text-white uppercase italic leading-none" style={{ color: getRatingColor(result.rating) }}>
                                        {result.rating === 'perfect' && 'KUSURSUZ!'}
                                        {result.rating === 'great' && 'HARİKA!'}
                                        {result.rating === 'good' && 'BAŞARILI!'}
                                        {result.rating === 'miss' && 'ÜZGÜNÜM!'}
                                    </div>
                                    <div className="text-[10px] text-slate-400 font-bold mt-0.5">
                                        {result.distance.toFixed(1)} km uzakta
                                        {result.points > 0 && <span className="ml-1.5 text-emerald-400">+{result.points} puan</span>}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile: didYouKnow (compact) */}
                            {question.didYouKnow && (
                                <p className="sm:hidden text-[10px] text-slate-300 leading-relaxed italic mb-2 border-t border-white/10 pt-2">
                                    {question.didYouKnow}
                                </p>
                            )}

                            {/* Desktop: full layout */}
                            <div className="hidden sm:block">
                                <div
                                    className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-2xl relative"
                                    style={{ backgroundColor: getRatingColor(result.rating), transform: 'rotate(2deg)' }}
                                >
                                    <div className="absolute inset-0 bg-white/10 rounded-2xl animate-pulse" />
                                    {result.rating === 'perfect' && <Sparkles size={28} className="text-white relative z-10" />}
                                    {result.rating === 'great' && <Trophy size={28} className="text-white relative z-10" />}
                                    {result.rating === 'good' && <MapPin size={28} className="text-white relative z-10" />}
                                    {result.rating === 'miss' && <Navigation size={28} className="text-white relative z-10" />}
                                </div>
                                <h2 className="text-2xl font-black text-center text-white mb-3 tracking-tighter uppercase italic">
                                    {result.rating === 'perfect' && 'KUSURSUZ!'}
                                    {result.rating === 'great' && 'HARİKA!'}
                                    {result.rating === 'good' && 'BAŞARILI!'}
                                    {result.rating === 'miss' && 'ÜZGÜNÜM!'}
                                </h2>
                                <div className="bg-white/5 rounded-3xl p-4 mb-4 border border-white/10 text-center">
                                    <span className="text-indigo-400 block mb-1 text-[8px] uppercase tracking-[0.2em] font-black">MESAFE</span>
                                    <span className="text-2xl font-black block" style={{ color: getRatingColor(result.rating) }}>
                                        {result.distance.toFixed(1)} <span className="text-xs">km</span>
                                    </span>
                                </div>
                                {result.points > 0 && (
                                    <div className="text-center mb-5 flex flex-col items-center">
                                        <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30">
                                            <span className="text-2xl font-black text-emerald-400">+{result.points}</span>
                                            <span className="text-emerald-400/70 font-black text-[9px] uppercase tracking-widest">PUAN</span>
                                        </div>
                                    </div>
                                )}
                                {question.didYouKnow && (
                                    <div className="mb-6 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                                        <p className="text-xs text-slate-200 leading-relaxed font-bold italic">
                                            &quot;{question.didYouKnow}&quot;
                                        </p>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={onNext}
                                className="w-full py-2.5 sm:py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.02] text-white rounded-xl font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-xl"
                            >
                                SIRADAKİ
                                <ChevronRight size={16} className="sm:hidden" />
                                <ChevronRight size={20} className="hidden sm:block" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
