/**
 * Next.js Middleware
 *
 * 1. Supabase oturum çerezlerini yeniler (session refresh)
 * 2. NEXT_PUBLIC_PAYWALL_ENABLED=true iken Pro sayfaları korur:
 *    - /exam  → ücretsiz kullanıcılar /pricing?upgrade=exam adresine yönlendirilir
 */

import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

/** Paywall aktif mi? Vercel ortamında ayrıca ayarlanabilir */
const PAYWALL_ENABLED = process.env.NEXT_PUBLIC_PAYWALL_ENABLED === 'true';

/** Bu path'ler Pro gerektirir — middleware seviyesinde yönlendirme */
const PRO_ONLY_PATHS = ['/exam'];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    let response = NextResponse.next({ request });

    // ── 1. Supabase oturum yenileme ─────────────────────────────────
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll: () => request.cookies.getAll(),
                setAll: (cookiesToSet) => {
                    cookiesToSet.forEach(({ name, value }) =>
                        request.cookies.set(name, value)
                    );
                    response = NextResponse.next({ request });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    // Oturumu sessizce yenile (hata olsa da devam et)
    const { data: { user } } = await supabase.auth.getUser().catch(() => ({ data: { user: null } }));

    // ── 2. Paywall kontrolü ─────────────────────────────────────────
    if (PAYWALL_ENABLED && PRO_ONLY_PATHS.some(p => pathname.startsWith(p))) {
        // Giriş yapmamış → önce login
        if (!user) {
            const url = request.nextUrl.clone();
            url.pathname = '/auth/login';
            url.searchParams.set('next', pathname);
            return NextResponse.redirect(url);
        }

        // Abonelik kontrolü — subscriptions tablosunu sorgula
        const { data: sub } = await supabase
            .from('subscriptions')
            .select('plan, status, period_end')
            .eq('user_id', user.id)
            .eq('status', 'active')
            .maybeSingle();

        const isPro = sub && sub.period_end && new Date(sub.period_end) > new Date();

        if (!isPro) {
            const url = request.nextUrl.clone();
            url.pathname = '/pricing';
            // Hangi özellikten geldiğini pricing sayfasına ilet
            const feature = PRO_ONLY_PATHS.find(p => pathname.startsWith(p))?.replace('/', '') ?? 'feature';
            url.searchParams.set('upgrade', feature);
            return NextResponse.redirect(url);
        }
    }

    return response;
}

export const config = {
    matcher: [
        /*
         * Şunlar hariç tüm path'leri eşleştir:
         * - _next/static (statik dosyalar)
         * - _next/image (resim optimizasyonu)
         * - favicon.ico, sitemap.xml, robots.txt, public klasörü
         */
        '/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
