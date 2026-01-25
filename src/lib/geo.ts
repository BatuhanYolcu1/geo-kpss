/**
 * Geographic utility functions
 */

/**
 * Calculate distance between two coordinates using Haversine formula
 * @returns Distance in kilometers
 */
export function calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
): number {
    const R = 6371; // Earth's radius in kilometers

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

function toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}

/**
 * Calculate score based on distance deviation
 */
export function calculateScore(distanceKm: number): {
    points: number;
    rating: 'perfect' | 'great' | 'good' | 'miss';
    message: string;
} {
    if (distanceKm < 20) {
        return { points: 100, rating: 'perfect', message: 'Mükemmel! 🎯' };
    } else if (distanceKm < 50) {
        return { points: 50, rating: 'great', message: 'Harika! 🌟' };
    } else if (distanceKm < 100) {
        return { points: 20, rating: 'good', message: 'İyi! 👍' };
    } else {
        return { points: 0, rating: 'miss', message: 'Kaçırdın! 😅' };
    }
}

/**
 * Get rating color
 */
export function getRatingColor(rating: 'perfect' | 'great' | 'good' | 'miss'): string {
    switch (rating) {
        case 'perfect': return '#22c55e'; // green
        case 'great': return '#3b82f6'; // blue
        case 'good': return '#eab308'; // yellow
        case 'miss': return '#ef4444'; // red
    }
}
