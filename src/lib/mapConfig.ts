import type { LatLngBoundsExpression, LatLngTuple } from 'leaflet';

// ===== Turkey Map Configuration =====
export const TURKEY_CENTER: LatLngTuple = [39.0, 35.0];

export const TURKEY_BOUNDS: LatLngBoundsExpression = [
    [35.5, 25.5],  // Southwest corner
    [42.5, 45.0],  // Northeast corner
];

export const DEFAULT_ZOOM = 6;
export const MIN_ZOOM = 5;
export const MAX_ZOOM = 12;

// ===== Tile Layer Options =====
export const TILE_LAYERS = {
    default: {
        url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    },
    dark: {
        url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    },
    satellite: {
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    },
    terrain: {
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
    },
};

// ===== Layer Styles =====
export const getFeatureStyle = (layer: string, isHovered: boolean = false) => {
    const baseStyles: Record<string, object> = {
        mountains: {
            fillColor: '#8B4513',
            fillOpacity: 0.6,
            color: '#5D2E0C',
            weight: 2,
        },
        plains: {
            fillColor: '#22C55E',
            fillOpacity: 0.4,
            color: '#15803D',
            weight: 1,
        },
        plateaus: {
            fillColor: '#CA8A04',
            fillOpacity: 0.4,
            color: '#A16207',
            weight: 1,
        },
        rivers: {
            color: '#3B82F6',
            weight: 5,
            opacity: 0.9,
            interactive: true,
        },
        lakes: {
            fillColor: '#0EA5E9',
            fillOpacity: 0.6,
            color: '#0284C7',
            weight: 1,
        },
        regions: {
            fillColor: '#EC4899',
            fillOpacity: 0.15,
            color: '#BE185D',
            weight: 2,
            dashArray: '5, 5',
        },
    };

    const style = baseStyles[layer] || {};

    if (isHovered) {
        return {
            ...style,
            fillOpacity: (style as { fillOpacity?: number }).fillOpacity ?
                ((style as { fillOpacity: number }).fillOpacity + 0.2) : 0.8,
            weight: ((style as { weight?: number }).weight || 1) + 1,
        };
    }

    return style;
};

// ===== Marker Icon Configurations =====
export const MARKER_ICONS = {
    city: {
        color: '#8B5CF6',
        icon: 'building-2',
    },
    mountain: {
        color: '#8B4513',
        icon: 'mountain',
    },
    volcano: {
        color: '#DC2626',
        icon: 'flame',
    },
    mine: {
        color: '#6B7280',
        icon: 'pickaxe',
    },
    powerplant: {
        color: '#FBBF24',
        icon: 'zap',
    },
    note: {
        color: '#F59E0B',
        icon: 'sticky-note',
    },
};

// ===== Region Colors =====
export const REGION_COLORS: Record<string, string> = {
    'Marmara': '#3B82F6',
    'Ege': '#8B5CF6',
    'Akdeniz': '#F59E0B',
    'İç Anadolu': '#EF4444',
    'Karadeniz': '#22C55E',
    'Doğu Anadolu': '#6366F1',
    'Güneydoğu Anadolu': '#EC4899',
};
