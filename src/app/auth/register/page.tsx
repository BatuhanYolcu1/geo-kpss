'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Mail, Lock, ArrowRight, GraduationCap, Eye, EyeOff } from 'lucide-react';

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Şifre en az 6 karakter olmalıdır.');
            return;
        }
        setIsLoading(true);
        setError(null);

        const supabase = createClient();
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${window.location.origin}/auth/callback`,
            },
        });

        if (error) {
            setError(
                error.message.includes('already registered') || error.message.includes('User already registered')
                    ? 'Bu e-posta adresi zaten kayıtlı.'
                    : error.message.includes('signup_disabled') || error.message.includes('Signups not allowed')
                    ? 'Kayıt şu an devre dışı.'
                    : error.message.includes('email_address_not_authorized')
                    ? 'Bu e-posta adresi yetkili değil.'
                    : error.message.includes('rate_limit') || error.message.includes('rate limit')
                    ? 'Çok fazla istek gönderildi. Birkaç dakika bekleyip tekrar deneyin.'
                    : `Kayıt başarısız: ${error.message}`
            );
        } else {
            // Supabase session'ı anında oluşturur — direkt anasayfaya yönlendir
            router.push('/?welcome=1');
        }
        setIsLoading(false);
    };

    const handleGoogleLogin = async () => {
        setIsGoogleLoading(true);
        setError(null);
        const supabase = createClient();
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });
        if (error) {
            setError('Google ile kayıt başarısız. Tekrar deneyin.');
            setIsGoogleLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#f7faf4] flex items-center justify-center p-6">
            {/* Arka plan blob */}
            <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#b9efc5]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#e9f0e8]/50 rounded-full blur-3xl" />
            </div>

            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2.5 group">
                        <div className="w-10 h-10 rounded-xl bg-white border border-[#abb4ac]/40 flex items-center justify-center overflow-hidden shadow-sm">
                            <img src="/tr-circle-flag.svg" alt="Türkiye" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                            <span className="font-black text-lg tracking-tight text-[#2c342e] block">GEO-KPSS</span>
                            <span className="text-[9px] font-bold text-[#386948] tracking-[0.2em] uppercase">KPSS 2026</span>
                        </div>
                    </Link>
                    <h1 className="text-2xl font-black text-[#2c342e] mt-6 mb-1">Ücretsiz hesap oluştur</h1>
                    <p className="text-sm text-[#59615a]">İlerlemenizi kaydet, her cihazdan devam et.</p>
                </div>

                <div className="bg-white border border-[#abb4ac]/40 rounded-3xl p-8 shadow-sm">
                    {/* Google ile kayıt */}
                    <button
                        onClick={handleGoogleLogin}
                        disabled={isGoogleLoading}
                        className="w-full flex items-center justify-center gap-3 py-3.5 border border-[#abb4ac]/60 hover:border-[#386948]/40 hover:bg-[#f0f5ee] rounded-2xl transition-all duration-200 font-semibold text-[#2c342e] text-sm mb-6 disabled:opacity-60"
                    >
                        {isGoogleLoading ? (
                            <div className="w-4 h-4 border-2 border-[#386948]/30 border-t-[#386948] rounded-full animate-spin" />
                        ) : (
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                        )}
                        Google ile devam et
                    </button>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex-1 h-px bg-[#abb4ac]/40" />
                        <span className="text-xs text-[#747d75] font-medium">veya e-posta ile</span>
                        <div className="flex-1 h-px bg-[#abb4ac]/40" />
                    </div>

                    {/* Hata mesajı */}
                    {error && (
                        <div className="mb-4 px-4 py-3 bg-rose-50 border border-rose-200 rounded-xl text-sm text-rose-700 font-medium">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-[#59615a] mb-1.5 uppercase tracking-wider">
                                E-posta
                            </label>
                            <div className="relative">
                                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#747d75]" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    placeholder="adın@örnek.com"
                                    className="w-full pl-11 pr-4 py-3.5 bg-[#f7faf4] border border-[#abb4ac]/50 hover:border-[#386948]/40 focus:border-[#386948] focus:outline-none rounded-xl text-sm text-[#2c342e] placeholder-[#abb4ac] transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-[#59615a] mb-1.5 uppercase tracking-wider">
                                Şifre <span className="normal-case text-[#747d75] font-normal">(en az 6 karakter)</span>
                            </label>
                            <div className="relative">
                                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#747d75]" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-12 py-3.5 bg-[#f7faf4] border border-[#abb4ac]/50 hover:border-[#386948]/40 focus:border-[#386948] focus:outline-none rounded-xl text-sm text-[#2c342e] placeholder-[#abb4ac] transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(v => !v)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#747d75] hover:text-[#2c342e] transition-colors"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-[#386948] hover:bg-[#2b5d3c] text-white rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60 shadow-sm shadow-[#386948]/20 mt-2"
                        >
                            {isLoading ? (
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>Hesap Oluştur <ArrowRight size={16} /></>
                            )}
                        </button>

                        <p className="text-[10px] text-[#747d75] text-center leading-relaxed">
                            Kaydolarak KPSS hazırlığına ücretsiz başlıyorsunuz. İstediğiniz zaman misafir olarak da devam edebilirsiniz.
                        </p>
                    </form>
                </div>

                <div className="text-center mt-6 space-y-2">
                    <p className="text-sm text-[#59615a]">
                        Zaten hesabın var mı?{' '}
                        <Link href="/auth/login" className="text-[#386948] font-bold hover:underline">
                            Giriş yap
                        </Link>
                    </p>
                    <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#747d75] hover:text-[#2c342e] transition-colors">
                        <GraduationCap size={13} />
                        Giriş yapmadan devam et
                    </Link>
                </div>
            </div>
        </main>
    );
}
