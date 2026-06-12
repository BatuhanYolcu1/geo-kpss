/**
 * GET /api/payment/status
 *
 * Kullanıcının aktif abonelik planını döner.
 * Response: { plan: 'free' | 'pro_monthly' | 'pro_yearly', periodEnd: string | null }
 */

import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function GET() {
    try {
        const cookieStore = await cookies();
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            { cookies: { getAll: () => cookieStore.getAll() } }
        );

        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({ plan: 'free', periodEnd: null });
        }

        const { data: sub } = await supabase
            .from('subscriptions')
            .select('plan, status, period_end, cancel_at_period_end')
            .eq('user_id', user.id)
            .eq('status', 'active')
            .maybeSingle();

        if (!sub) {
            return NextResponse.json({ plan: 'free', periodEnd: null });
        }

        // period_end geçmişte mi kontrol et
        if (sub.period_end && new Date(sub.period_end) < new Date()) {
            return NextResponse.json({ plan: 'free', periodEnd: null });
        }

        return NextResponse.json({
            plan: sub.plan,
            periodEnd: sub.period_end,
            cancelAtPeriodEnd: sub.cancel_at_period_end,
        });

    } catch (err) {
        console.error('[payment/status]', err);
        return NextResponse.json({ plan: 'free', periodEnd: null });
    }
}
