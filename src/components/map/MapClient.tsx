'use client';

import { useRef, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, GeoJSON, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import React from 'react';
import { useLayerStore } from '@/stores/layerStore';
import { useUserStore } from '@/stores/userStore';
import {
    TURKEY_CENTER,
    TURKEY_BOUNDS,
    DEFAULT_ZOOM,
    MIN_ZOOM,
    MAX_ZOOM,
    TILE_LAYERS,
    getFeatureStyle,
} from '@/lib/mapConfig';
import LayerControl from './LayerControl';
import FeaturePopupCard from './FeaturePopupCard';
import ContextMenu from './ContextMenu';
import GeoNoteMarkers from './GeoNoteMarkers';
import SearchBar from './SearchBar';
import { useRegionStore } from './RegionFilter';
import type { GeoFeatureProperties } from '@/types';

// Import ALL GeoJSON data
import citiesData from '@/data/geojson/cities.json';
import mountainsData from '@/data/geojson/mountains.json';
import riversData from '@/data/geojson/rivers.json';
import lakesData from '@/data/geojson/lakes.json';
import minesData from '@/data/geojson/mines.json';
import powerplantsData from '@/data/geojson/powerplants.json';
import plainsData from '@/data/geojson/plains.json';
import plateausData from '@/data/geojson/plateaus.json';
import industryData from '@/data/geojson/industry.json';
import agricultureData from '@/data/geojson/agriculture.json';

// Fix Leaflet default icon issue
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom marker icons
const createCustomIcon = (color: string, size: number = 24) => {
    return L.divIcon({
        className: 'custom-marker',
        html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.4);
        cursor: pointer;
      "></div>
    `,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
    });
};

// Layer data mapping
const layerDataMap: Record<string, { data: unknown; type: 'point' | 'line' | 'polygon' }> = {
    cities: { data: citiesData, type: 'point' },
    mountains: { data: mountainsData, type: 'point' },
    rivers: { data: riversData, type: 'line' },
    lakes: { data: lakesData, type: 'point' },
    mines: { data: minesData, type: 'point' },
    powerplants: { data: powerplantsData, type: 'point' },
    plains: { data: plainsData, type: 'point' },
    plateaus: { data: plateausData, type: 'point' },
    industry: { data: industryData, type: 'point' },
    agriculture: { data: agricultureData, type: 'point' },
};

// Layer color mapping
const layerColorMap: Record<string, string> = {
    cities: '#7c3aed',
    mountains: '#b45309',
    rivers: '#0ea5e9',
    lakes: '#0284c7',
    mines: '#64748b',
    powerplants: '#eab308',
    plains: '#059669',
    plateaus: '#d97706',
    industry: '#475569',
    agriculture: '#15803d',
};

// Map event handler
function MapEventHandler({
    onContextMenu,
    onMapClick,
}: {
    onContextMenu: (lat: number, lng: number, x: number, y: number) => void;
    onMapClick: (e: L.LeafletMouseEvent) => void;
}) {
    useMapEvents({
        contextmenu: (e) => {
            e.originalEvent.preventDefault();
            onContextMenu(e.latlng.lat, e.latlng.lng, e.originalEvent.clientX, e.originalEvent.clientY);
        },
        click: (e) => {
            const target = e.originalEvent.target as HTMLElement;
            if (!target.closest('.leaflet-interactive')) {
                onMapClick(e);
            }
        },
    });
    return null;
}

// FlyTo component for search
function FlyToLocation({ lat, lng, zoom }: { lat: number | null; lng: number | null; zoom?: number }) {
    const map = useMap();

    React.useEffect(() => {
        if (lat !== null && lng !== null) {
            map.flyTo([lat, lng], zoom || 10, { duration: 1.5 });
        }
    }, [map, lat, lng, zoom]);

    return null;
}

// Popup position tracker
function PopupPositionTracker({
    lat,
    lng,
    onPositionChange
}: {
    lat: number | null;
    lng: number | null;
    onPositionChange: (pos: { x: number; y: number } | null) => void;
}) {
    const map = useMap();

    React.useEffect(() => {
        const updatePosition = () => {
            if (lat === null || lng === null) {
                onPositionChange(null);
                return;
            }
            const point = map.latLngToContainerPoint([lat, lng]);
            const container = map.getContainer();
            const rect = container.getBoundingClientRect();
            onPositionChange({ x: rect.left + point.x, y: rect.top + point.y });
        };

        updatePosition();
        map.on('move', updatePosition);
        map.on('zoom', updatePosition);
        return () => {
            map.off('move', updatePosition);
            map.off('zoom', updatePosition);
        };
    }, [map, lat, lng, onPositionChange]);

    return null;
}

// Check if feature matches region filter
function matchesRegionFilter(featureRegion: string | undefined, selectedRegions: string[]): boolean {
    // If all 7 regions selected, show everything (default state)
    if (selectedRegions.length === 7) return true;

    // If no regions selected, show nothing
    if (selectedRegions.length === 0) return false;

    // If feature has no region info, always show it
    if (!featureRegion) return true;

    // Check each selected region
    for (const selected of selectedRegions) {
        // Direct match or partial match (for regions like "İç Anadolu/Karadeniz")
        if (featureRegion === selected) return true;
        if (featureRegion.includes(selected)) return true;
        if (selected.includes(featureRegion)) return true;

        // Handle "/" separated regions like "Marmara/İç Anadolu"
        const parts = featureRegion.split('/').map(p => p.trim());
        if (parts.some(p => p === selected || selected.includes(p) || p.includes(selected))) {
            return true;
        }
    }

    return false;
}

export default function MapClient() {
    const mapRef = useRef<L.Map>(null);
    const layers = useLayerStore((state) => state.layers);
    const darkMode = useUserStore((state) => state.darkMode);
    const selectedRegions = useRegionStore((state) => state.selectedRegions);

    const [contextMenu, setContextMenu] = React.useState<{ x: number; y: number; lat: number; lng: number } | null>(null);
    const [selectedFeature, setSelectedFeature] = React.useState<GeoFeatureProperties | null>(null);
    const [selectedPosition, setSelectedPosition] = React.useState<{ lat: number; lng: number } | null>(null);
    const [popupScreenPos, setPopupScreenPos] = React.useState<{ x: number; y: number } | null>(null);
    const [flyToTarget, setFlyToTarget] = React.useState<{ lat: number; lng: number; zoom?: number } | null>(null);

    // Deep Linking from URL Params
    const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    const toggleLayer = useLayerStore(state => state.toggleLayer);

    React.useEffect(() => {
        if (!searchParams) return;

        const layerParam = searchParams.get('layer');
        const focusParam = searchParams.get('focus');
        const latParam = searchParams.get('lat');
        const lngParam = searchParams.get('lng');
        const zoomParam = searchParams.get('zoom');

        // 1. Handle Layer Toggle
        if (layerParam) {
            const layer = layers.find(l => l.id === layerParam);
            if (layer && !layer.visible) {
                toggleLayer(layerParam);
            }
        }

        // 2. Handle Focus/Popup
        if (focusParam && layerParam) {
            const layerInfo = layerDataMap[layerParam];
            if (layerInfo) {
                const geojsonData = layerInfo.data as GeoJSON.FeatureCollection;
                const feature = geojsonData.features.find(f => (f.properties as Record<string, string>).id === focusParam);
                if (feature && feature.geometry.type === 'Point') {
                    const coords = feature.geometry.coordinates as [number, number];
                    setSelectedFeature(feature.properties as GeoFeatureProperties);
                    setSelectedPosition({ lat: coords[1], lng: coords[0] });
                    setFlyToTarget({ lat: coords[1], lng: coords[0], zoom: 12 });
                }
            }
        }

        // 3. Handle Direct Coordinates
        if (latParam && lngParam && !focusParam) {
            const lat = parseFloat(latParam);
            const lng = parseFloat(lngParam);
            const zoom = zoomParam ? parseFloat(zoomParam) : 10;
            if (!isNaN(lat) && !isNaN(lng)) {
                setFlyToTarget({ lat, lng, zoom });
            }
        }
    }, [searchParams, layers, toggleLayer]);

    const activeLayers = layers.filter((l) => l.visible);

    const handleContextMenu = useCallback((lat: number, lng: number, x: number, y: number) => {
        setContextMenu({ x, y, lat, lng });
    }, []);

    const closeContextMenu = useCallback(() => {
        setContextMenu(null);
    }, []);

    const handleFeatureClick = useCallback((feature: GeoFeatureProperties, lat: number, lng: number) => {
        setSelectedFeature(feature);
        setSelectedPosition({ lat, lng });
    }, []);

    const closePopup = useCallback(() => {
        setSelectedFeature(null);
        setSelectedPosition(null);
        setPopupScreenPos(null);
    }, []);

    const handleMapClick = useCallback(() => {
        closePopup();
    }, [closePopup]);

    // Handle search result selection
    const handleSearchSelect = useCallback((result: { lat: number; lng: number }) => {
        setFlyToTarget({ lat: result.lat, lng: result.lng, zoom: 10 });
        // Reset flyTo after animation
        setTimeout(() => setFlyToTarget(null), 2000);
    }, []);

    const tileLayer = darkMode ? TILE_LAYERS.dark : TILE_LAYERS.default;

    return (
        <>
            {/* Search Bar - Top Center */}
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[1000] w-full max-w-md px-4">
                <SearchBar onSelectResult={handleSearchSelect} />
            </div>

            <MapContainer
                ref={mapRef}
                center={TURKEY_CENTER}
                zoom={DEFAULT_ZOOM}
                minZoom={MIN_ZOOM}
                maxZoom={MAX_ZOOM}
                maxBounds={TURKEY_BOUNDS}
                maxBoundsViscosity={1.0}
                className="w-full h-full"
                zoomControl={false}
                zoomDelta={0.5}
                zoomSnap={0.25}
                wheelPxPerZoomLevel={120}
                wheelDebounceTime={80}
            >
                <TileLayer url={tileLayer.url} attribution={tileLayer.attribution} />
                <MapEventHandler onContextMenu={handleContextMenu} onMapClick={handleMapClick} />
                <PopupPositionTracker lat={selectedPosition?.lat ?? null} lng={selectedPosition?.lng ?? null} onPositionChange={setPopupScreenPos} />

                {/* FlyTo for search */}
                {flyToTarget && <FlyToLocation lat={flyToTarget.lat} lng={flyToTarget.lng} />}

                {/* Render active layers with region filter */}
                {activeLayers.map((layer) => {
                    const layerInfo = layerDataMap[layer.id];
                    if (!layerInfo) return null;

                    const geojsonData = layerInfo.data as GeoJSON.FeatureCollection;
                    const color = layerColorMap[layer.id] || '#666';

                    if (layerInfo.type === 'point') {
                        return geojsonData.features.map((feature) => {
                            const geometry = feature.geometry;
                            if (geometry.type !== 'Point') return null;
                            const coords = geometry.coordinates as [number, number];
                            const props = feature.properties as GeoFeatureProperties;

                            // Region filter
                            if (!matchesRegionFilter(props.region, selectedRegions)) return null;

                            return (
                                <Marker
                                    key={props.id}
                                    position={[coords[1], coords[0]]}
                                    icon={createCustomIcon(color, 22)}
                                    opacity={layer.opacity}
                                    eventHandlers={{
                                        click: (e) => {
                                            e.originalEvent.stopPropagation();
                                            handleFeatureClick(props, coords[1], coords[0]);
                                        },
                                    }}
                                />
                            );
                        });
                    }

                    if (layerInfo.type === 'line') {
                        return (
                            <GeoJSON
                                key={layer.id}
                                data={geojsonData}
                                style={() => ({ ...getFeatureStyle(layer.id), opacity: layer.opacity })}
                                onEachFeature={(feature, leafletLayer) => {
                                    const props = feature.properties as GeoFeatureProperties;
                                    leafletLayer.on('click', (e) => {
                                        e.originalEvent?.stopPropagation();
                                        handleFeatureClick(props, e.latlng.lat, e.latlng.lng);
                                    });
                                }}
                            />
                        );
                    }

                    return null;
                })}

                <GeoNoteMarkers />
            </MapContainer>

            <LayerControl />
            <FeaturePopupCard feature={selectedFeature} position={popupScreenPos} onClose={closePopup} />

            {contextMenu && (
                <ContextMenu x={contextMenu.x} y={contextMenu.y} lat={contextMenu.lat} lng={contextMenu.lng} onClose={closeContextMenu} />
            )}
        </>
    );
}
