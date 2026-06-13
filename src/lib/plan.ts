'use client';

/**
 * usePlan() — kullanıcının mevcut abonelik planını döner.
 *
 * NEXT_PUBLIC_PAYWALL_ENABLED=false iken herkes "pro" görünür
 * (geliştirme modunda hiçbir şey kilitlenmez).
 * iyzico onayı gelince env'e =true yaz, otomatik devreye girer.
 */

import { useState, useEffect } from 'react';

export type Plan = 'free' | 'pro_monthly' | 'pro_yearly';

export interface PlanState {
    plan: Plan;
    isPro: boolean;
    loading: boolean;
}

const PAYWALL_ENABLED = process.env.NEXT_PUBLIC_PAYWALL_ENABLED === 'true';

// Module-level cache — aynı oturumda defalarca fetch etme
let cached: PlanState | null = null;

export function usePlan(): PlanState {
    const [state, setState] = useState<PlanState>(
        cached ?? { plan: 'free', isPro: false, loading: true }
    );

    useEffect(() => {
        // Paywall kapalıysa herkes pro
        if (!PAYWALL_ENABLED) {
            const openState: PlanState = { plan: 'pro_yearly', isPro: true, loading: false };
            cached = openState;
            setState(openState);
            return;
        }

        // Cache varsa tekrar fetch etme
        if (cached) {
            setState(cached);
            return;
        }

        fetch('/api/payment/status')
            .then(r => r.json())
            .then((data: { plan: Plan }) => {
                const newState: PlanState = {
                    plan: data.plan ?? 'free',
                    isPro: data.plan !== 'free',
                    loading: false,
                };
                cached = newState;
                setState(newState);
            })
            .catch(() => {
                const fallback: PlanState = { plan: 'free', isPro: false, loading: false };
                setState(fallback);
            });
    }, []);

    return state;
}

/** Cache'i temizle — örneğin ödeme sonrası yeniden yüklemek için */
export function clearPlanCache() {
    cached = null;
}
