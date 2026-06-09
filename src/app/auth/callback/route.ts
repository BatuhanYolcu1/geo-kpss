import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

/**
 * OAuth ve magic-link callback endpoint'i.
 * Supabase bu URL'e yönlendirir; code parametresini alıp session'a çevirir.
 */
export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get('code');
    const next = searchParams.get('next') ?? '/';

    if (code) {
        const supabase = await createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error) {
            return NextResponse.redirect(`${origin}${next}`);
        }
    }

    // Hata durumunda ana sayfaya yönlendir
    return NextResponse.redirect(`${origin}/?auth_error=1`);
}
