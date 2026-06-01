import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Geo-KPSS — KPSS 2026 Coğrafya Hazırlık Platformu';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '1200px',
                    height: '630px',
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#f7faf4',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background blob top-left */}
                <div style={{
                    position: 'absolute', top: '-120px', left: '-120px',
                    width: '500px', height: '500px',
                    background: 'radial-gradient(circle, #b9efc5 0%, transparent 70%)',
                    borderRadius: '50%',
                }} />
                {/* Background blob bottom-right */}
                <div style={{
                    position: 'absolute', bottom: '-100px', right: '-100px',
                    width: '400px', height: '400px',
                    background: 'radial-gradient(circle, #e9f0e8 0%, transparent 70%)',
                    borderRadius: '50%',
                }} />

                {/* Content */}
                <div style={{
                    position: 'relative', zIndex: 10,
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '64px 80px',
                    height: '100%',
                }}>
                    {/* Top: Logo + badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{
                                width: '52px', height: '52px',
                                background: '#386948', borderRadius: '14px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '28px',
                            }}>
                                🗺️
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '28px', fontWeight: 900, color: '#2c342e', letterSpacing: '-0.5px' }}>GEO-KPSS</span>
                                <span style={{ fontSize: '12px', fontWeight: 700, color: '#386948', letterSpacing: '3px', textTransform: 'uppercase' }}>KPSS 2026</span>
                            </div>
                        </div>
                        <div style={{
                            padding: '10px 20px',
                            background: '#386948',
                            borderRadius: '999px',
                            color: '#e8ffe9',
                            fontSize: '14px',
                            fontWeight: 700,
                        }}>
                            Ücretsiz Hazırlık
                        </div>
                    </div>

                    {/* Middle: Main headline */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <h1 style={{
                            margin: 0,
                            fontSize: '72px',
                            fontWeight: 900,
                            color: '#2c342e',
                            lineHeight: 1.05,
                            letterSpacing: '-2px',
                        }}>
                            Coğrafyayı
                            <br />
                            <span style={{ color: '#386948' }}>Yaşayarak</span> Öğren.
                        </h1>
                        <p style={{
                            margin: 0,
                            fontSize: '22px',
                            color: '#59615a',
                            fontWeight: 400,
                            maxWidth: '620px',
                            lineHeight: 1.5,
                        }}>
                            İnteraktif haritalar, 239+ quiz sorusu ve kapsamlı ders notlarıyla KPSS 2026&apos;ya hazırlan.
                        </p>
                    </div>

                    {/* Bottom: Stats */}
                    <div style={{ display: 'flex', gap: '16px' }}>
                        {[
                            { value: '100%', label: 'Müfredat' },
                            { value: '12+', label: 'Harita Katmanı' },
                            { value: '239+', label: 'Quiz Sorusu' },
                            { value: '80+', label: 'Flashcard' },
                        ].map((stat) => (
                            <div key={stat.label} style={{
                                flex: 1,
                                padding: '20px 24px',
                                background: 'white',
                                border: '1px solid rgba(171,180,172,0.5)',
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '4px',
                            }}>
                                <span style={{ fontSize: '28px', fontWeight: 900, color: '#386948' }}>{stat.value}</span>
                                <span style={{ fontSize: '13px', color: '#747d75', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
