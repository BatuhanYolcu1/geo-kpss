/**
 * POST /api/payment/webhook
 *
 * iyzico ödeme sonucunu buraya gönderir (callbackUrl).
 * Başarılıysa kullanıcının subscription kaydını oluşturur.
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { iyzicoPost } from '@/lib/iyzico';

interface IyzicoRetrieveResponse {
    status: string;
    errorCode?: string;
    errorMessage?: string;
    conversationId: string;       // "{userId}_{timestamp}"
    paymentStatus: 'SUCCESS' | 'FAILURE' | 'INIT_THREEDS' | 'CALLBACK_THREEDS';
    price: string;
    paidPrice: string;
    currency: string;
    paymentId: string;
    basketId: string;             // "geo_kpss_{plan}_{userId}"
}

// Supabase service role client — sadece sunucu tarafında kullanılır
function getServiceClient() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { autoRefreshToken: false, persistSession: false } }
    );
}

// Plan süresini hesapla
function getPeriodEnd(basketId: string): Date {
    const end = new Date();
    if (basketId.includes('pro_yearly')) {
        end.setFullYear(end.getFullYear() + 1);
    } else {
        end.setMonth(end.getMonth() + 1);
    }
    return end;
}

export async function POST(req: NextRequest) {
    try {
        const form = await req.formData();
        const token = form.get('token') as string | null;

        if (!token) {
            return NextResponse.redirect(
                `${process.env.NEXT_PUBLIC_SITE_URL}/pricing?error=no_token`
            );
        }

        // ── iyzico'dan sonucu doğrula ────────────────────────────────────────
        const result = await iyzicoPost<IyzicoRetrieveResponse>(
            '/payment/iyzipos/checkoutform/auth/ecommerce/detail',
            { locale: 'tr', token }
        );

        // basketId formatı: "geo_kpss_{plan}_{userId}"
        const parts = result.basketId?.split('_') ?? [];
        // geo_kpss_pro_monthly_{uuid} → plan = "pro_monthly"
        const userId = parts[parts.length - 1]; // UUID en sonda
        const plan = parts.slice(2, parts.length - 1).join('_'); // pro_monthly | pro_yearly

        const supabase = getServiceClient();

        // ── Başarısız ödeme ──────────────────────────────────────────────────
        if (result.paymentStatus !== 'SUCCESS') {
            // payments tablosuna başarısız kayıt
            await supabase.from('payments').insert({
                user_id: userId,
                amount_kurus: Math.round(parseFloat(result.paidPrice ?? '0') * 100),
                currency: result.currency ?? 'TRY',
                status: 'failed',
                iyzico_token: token,
                iyzico_payment_id: result.paymentId,
                error_message: result.errorMessage ?? 'Ödeme başarısız',
            });

            return NextResponse.redirect(
                `${process.env.NEXT_PUBLIC_SITE_URL}/pricing?error=payment_failed`
            );
        }

        // ── Başarılı ödeme ───────────────────────────────────────────────────
        const periodEnd = getPeriodEnd(result.basketId);

        // Önce eski aktif aboneliği sil (upsert benzeri)
        await supabase
            .from('subscriptions')
            .update({ status: 'expired' })
            .eq('user_id', userId)
            .eq('status', 'active');

        // Yeni abonelik oluştur
        const { error: subError } = await supabase.from('subscriptions').insert({
            user_id: userId,
            plan,
            status: 'active',
            period_start: new Date().toISOString(),
            period_end: periodEnd.toISOString(),
            iyzico_sub_ref: token,
        });

        if (subError) {
            console.error('[webhook] subscription insert hatası:', subError);
        }

        // Ödeme kaydı
        await supabase.from('payments').insert({
            user_id: userId,
            amount_kurus: Math.round(parseFloat(result.paidPrice) * 100),
            currency: result.currency,
            status: 'success',
            iyzico_token: token,
            iyzico_payment_id: result.paymentId,
        });

        // Kullanıcıyı başarı sayfasına yönlendir
        return NextResponse.redirect(
            `${process.env.NEXT_PUBLIC_SITE_URL}/pricing?success=1`
        );

    } catch (err) {
        console.error('[webhook] Beklenmeyen hata:', err);
        return NextResponse.redirect(
            `${process.env.NEXT_PUBLIC_SITE_URL}/pricing?error=server`
        );
    }
}
