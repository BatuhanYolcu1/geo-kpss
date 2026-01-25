'use client';

import { useEffect, useCallback, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useQuizStore } from '@/stores/quizStore';
import { getRatingColor } from '@/lib/geo';
import { TURKEY_CENTER, TURKEY_BOUNDS, MIN_ZOOM, MAX_ZOOM } from '@/lib/mapConfig';

// Fix Leaflet default icon
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// No Labels Tile Layer (CartoDB Voyager No Labels)
const BLIND_MAP_TILE = {
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
};

// Custom marker icons
const createMarkerIcon = (color: string, size: number = 28) => {
    return L.divIcon({
        className: 'custom-quiz-marker',
        html: `
            <div style="
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border: 3px solid white;
                border-radius: 50%;
                box-shadow: 0 4px 12px rgba(0,0,0,0.4);
            "></div>
        `,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
    });
};

// Target marker (pulsing)
const createTargetIcon = () => {
    return L.divIcon({
        className: 'target-marker',
        html: `
            <div style="position: relative;">
                <div style="
                    width: 32px;
                    height: 32px;
                    background: #22c55e;
                    border: 3px solid white;
                    border-radius: 50%;
                    box-shadow: 0 4px 12px rgba(34,197,94,0.5);
                    animation: pulse 1.5s ease-in-out infinite;
                "></div>
                <div style="
                    position: absolute;
                    top: -8px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #22c55e;
                    color: white;
                    font-size: 12px;
                    font-weight: bold;
                    padding: 2px 8px;
                    border-radius: 8px;
                    white-space: nowrap;
                ">HEDEF</div>
            </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
    });
};

// Click handler component
function MapClickHandler({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) {
    useMapEvents({
        click: (e) => {
            onMapClick(e.latlng.lat, e.latlng.lng);
        },
    });
    return null;
}

// Center on target when new question
function CenterOnStart() {
    const map = useMap();

    useEffect(() => {
        map.setView(TURKEY_CENTER, 6);
    }, [map]);

    return null;
}

export default function QuizMap() {
    const mapRef = useRef<L.Map>(null);
    const {
        isPlaying,
        targetLocation,
        showFeedback,
        userClick,
        lastRating,
        submitAnswer,
    } = useQuizStore();

    const handleMapClick = useCallback((lat: number, lng: number) => {
        if (!isPlaying || showFeedback || !targetLocation) return;
        submitAnswer(lat, lng);
    }, [isPlaying, showFeedback, targetLocation, submitAnswer]);

    return (
        <MapContainer
            ref={mapRef}
            center={TURKEY_CENTER}
            zoom={6}
            minZoom={MIN_ZOOM}
            maxZoom={MAX_ZOOM}
            maxBounds={TURKEY_BOUNDS}
            maxBoundsViscosity={1.0}
            className="w-full h-full cursor-crosshair"
            zoomControl={false}
        >
            {/* Blind Map Tile - No Labels */}
            <TileLayer url={BLIND_MAP_TILE.url} attribution={BLIND_MAP_TILE.attribution} />

            <CenterOnStart />

            {/* Click Handler */}
            {isPlaying && !showFeedback && (
                <MapClickHandler onMapClick={handleMapClick} />
            )}

            {/* Show feedback elements */}
            {showFeedback && userClick && targetLocation && (
                <>
                    {/* Dashed line between user click and target */}
                    <Polyline
                        positions={[
                            [userClick.lat, userClick.lng],
                            [targetLocation.lat, targetLocation.lng],
                        ]}
                        pathOptions={{
                            color: getRatingColor(lastRating || 'miss'),
                            weight: 3,
                            dashArray: '10, 10',
                            opacity: 0.8,
                        }}
                    />

                    {/* User's click marker (Red/Orange) */}
                    <Marker
                        position={[userClick.lat, userClick.lng]}
                        icon={createMarkerIcon(lastRating === 'miss' ? '#ef4444' : '#f97316', 24)}
                    />

                    {/* Target marker (Green with label) */}
                    <Marker
                        position={[targetLocation.lat, targetLocation.lng]}
                        icon={createTargetIcon()}
                    />
                </>
            )}
        </MapContainer>
    );
}
