/**
 * POST /api/payment/cancel
 *
 * Aboneliği dönem sonunda iptal eder (hemen kesmez).
 */

import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export async function POST() {
    try {
        const cookieStore = await cookies();
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            { cookies: { getAll: () => cookieStore.getAll() } }
        );

        const { data: { user }, error: authError } = await supabase.auth.getUser();
        if (authError || !user) {
            return NextResponse.json({ error: 'Giriş yapmanız gerekiyor.' }, { status: 401 });
        }

        // Service role ile güncelle
        const service = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!,
            { auth: { autoRefreshToken: false, persistSession: false } }
        );

        const { error } = await service
            .from('subscriptions')
            .update({ cancel_at_period_end: true })
            .eq('user_id', user.id)
            .eq('status', 'active');

        if (error) {
            console.error('[cancel]', error);
            return NextResponse.json({ error: 'İptal işlemi başarısız.' }, { status: 500 });
        }

        return NextResponse.json({ success: true });

    } catch (err) {
        console.error('[cancel] Beklenmeyen hata:', err);
        return NextResponse.json({ error: 'Sunucu hatası.' }, { status: 500 });
    }
}
