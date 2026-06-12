/**
 * iyzico API helper
 * Docs: https://dev.iyzipay.com/
 *
 * Ortam değişkenleri (.env.local):
 *   IYZICO_API_KEY=sandbox-...
 *   IYZICO_SECRET_KEY=sandbox-...
 *   IYZICO_BASE_URL=https://sandbox-api.iyzipay.com   (test)
 *                   https://api.iyzipay.com             (prod)
 */

import crypto from 'crypto';

export const IYZICO_BASE_URL =
    process.env.IYZICO_BASE_URL ?? 'https://sandbox-api.iyzipay.com';

const API_KEY = process.env.IYZICO_API_KEY ?? '';
const SECRET  = process.env.IYZICO_SECRET_KEY ?? '';

// ── Authorization header ─────────────────────────────────────────────────────
// iyzico HMAC-SHA256 imzası:
//   PKI_string = "apiKey:{key}&randomKey:{rnd}&signature:{HMAC(apiKey+rndKey+body)}"
export function buildAuthHeader(body: string): string {
    const rnd = crypto.randomBytes(12).toString('hex');
    const signature = crypto
        .createHmac('sha256', SECRET)
        .update(API_KEY + rnd + body)
        .digest('base64');
    const pki = `apiKey:${API_KEY}&randomKey:${rnd}&signature:${signature}`;
    return `IYZWS ${Buffer.from(pki).toString('base64')}`;
}

// ── POST helper ──────────────────────────────────────────────────────────────
export async function iyzicoPost<T>(path: string, payload: object): Promise<T> {
    const body = JSON.stringify(payload);
    const res = await fetch(`${IYZICO_BASE_URL}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': buildAuthHeader(body),
            'x-iyzi-rnd': crypto.randomBytes(12).toString('hex'),
            'x-iyzi-client-version': 'geo-kpss-nextjs/1.0',
        },
        body,
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`iyzico ${path} → HTTP ${res.status}: ${text}`);
    }

    return res.json() as Promise<T>;
}

// ── Plan fiyatları ───────────────────────────────────────────────────────────
export const PLANS = {
    pro_monthly: {
        label: 'Geo-KPSS Pro (Aylık)',
        price: '79.00',          // TL
        currency: 'TRY',
        periodType: 'MONTHLY',
        planRefCode: 'geo_kpss_pro_monthly',
    },
    pro_yearly: {
        label: 'Geo-KPSS Pro (Yıllık)',
        price: '588.00',         // 49 TL x 12
        currency: 'TRY',
        periodType: 'YEARLY',
        planRefCode: 'geo_kpss_pro_yearly',
    },
} as const;

export type PlanKey = keyof typeof PLANS;
