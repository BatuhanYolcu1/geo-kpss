/**
 * POST /api/payment/checkout
 *
 * Body: { plan: 'pro_monthly' | 'pro_yearly' }
 *
 * Akış:
 *  1. Kullanıcı giriş kontrolü (Supabase session)
 *  2. iyzico Initialize CheckoutForm çağrısı
 *  3. Dönen checkoutFormContent (HTML snippet) + token frontend'e
 */

import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { iyzicoPost, PLANS, type PlanKey } from '@/lib/iyzico';

interface IyzicoInitResponse {
    status: string;
    errorCode?: string;
    errorMessage?: string;
    token: string;
    checkoutFormContent: string;
    tokenExpireTime: number;
}

export async function POST(req: NextRequest) {
    try {
        // ── 1. Auth ──────────────────────────────────────────────────────────
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

        // ── 2. Plan kontrolü ─────────────────────────────────────────────────
        const { plan } = (await req.json()) as { plan: PlanKey };
        const planConfig = PLANS[plan];
        if (!planConfig) {
            return NextResponse.json({ error: 'Geçersiz plan.' }, { status: 400 });
        }

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3001';
        const conversationId = `${user.id}_${Date.now()}`;

        // ── 3. iyzico Initialize CheckoutForm ────────────────────────────────
        const payload = {
            locale: 'tr',
            conversationId,
            price: planConfig.price,
            paidPrice: planConfig.price,
            currency: planConfig.currency,
            basketId: `geo_kpss_${plan}_${user.id}`,
            paymentGroup: 'SUBSCRIPTION',
            callbackUrl: `${siteUrl}/api/payment/webhook`,
            enabledInstallments: [1, 2, 3, 6, 9],
            buyer: {
                id: user.id,
                name: user.user_metadata?.full_name?.split(' ')[0] ?? 'Kullanıcı',
                surname: user.user_metadata?.full_name?.split(' ').slice(1).join(' ') ?? '',
                gsmNumber: '+905000000000',   // iyzico zorunlu — kullanıcıdan alınabilir
                email: user.email ?? '',
                identityNumber: '00000000000', // TC no — iyzico sandbox'ta fake kabul eder
                registrationAddress: 'Türkiye',
                ip: req.headers.get('x-forwarded-for') ?? '127.0.0.1',
                city: 'İstanbul',
                country: 'Turkey',
            },
            shippingAddress: {
                contactName: user.user_metadata?.full_name ?? 'Kullanıcı',
                city: 'İstanbul',
                country: 'Turkey',
                address: 'Türkiye',
            },
            billingAddress: {
                contactName: user.user_metadata?.full_name ?? 'Kullanıcı',
                city: 'İstanbul',
                country: 'Turkey',
                address: 'Türkiye',
            },
            basketItems: [
                {
                    id: planConfig.planRefCode,
                    name: planConfig.label,
                    category1: 'Eğitim',
                    itemType: 'VIRTUAL',
                    price: planConfig.price,
                },
            ],
        };

        const result = await iyzicoPost<IyzicoInitResponse>(
            '/payment/iyzipos/checkoutform/initialize/auth/ecommerce',
            payload
        );

        if (result.status !== 'success') {
            console.error('[checkout] iyzico hata:', result.errorMessage);
            return NextResponse.json(
                { error: result.errorMessage ?? 'Ödeme başlatılamadı.' },
                { status: 502 }
            );
        }

        return NextResponse.json({
            token: result.token,
            checkoutFormContent: result.checkoutFormContent,
            tokenExpireTime: result.tokenExpireTime,
        });

    } catch (err) {
        console.error('[checkout] Beklenmeyen hata:', err);
        return NextResponse.json({ error: 'Sunucu hatası.' }, { status: 500 });
    }
}
