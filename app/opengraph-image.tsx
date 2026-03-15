import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt = 'GLM Catalog — Instruction Library for GLM';
export const size = {
    width: 2400,
    height: 1260,
};

export const contentType = 'image/png';

export default async function Image() {
    const logoBuffer = readFileSync(join(process.cwd(), 'public', 'Logo.png'));
    const logoDataUrl = `data:image/png;base64,${logoBuffer.toString('base64')}`;

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000000',
                    fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Deep ambient glow — centered halo like a product reveal */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '1800px',
                        height: '1000px',
                        borderRadius: '50%',
                        background:
                            'radial-gradient(ellipse at center, rgba(100, 160, 255, 0.10) 0%, rgba(60, 100, 220, 0.06) 40%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />

                {/* Subtle top specular highlight */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-120px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '1200px',
                        height: '400px',
                        borderRadius: '50%',
                        background:
                            'radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 70%)',
                        filter: 'blur(20px)',
                    }}
                />

                {/* Main content column */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    {/* Logo in a glassy icon box */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '72px',
                            width: '144px',
                            height: '144px',
                            borderRadius: '36px',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.10)',
                            boxShadow:
                                '0 0 40px rgba(100,160,255,0.12), inset 0 1px 0 rgba(255,255,255,0.08)',
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={logoDataUrl}
                            alt="GLM Catalog"
                            style={{ width: '88px', height: '88px', objectFit: 'contain' }}
                        />
                    </div>

                    {/* Eyebrow pill badge */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '12px 36px',
                            borderRadius: '100px',
                            border: '1px solid rgba(100, 160, 255, 0.30)',
                            background: 'rgba(100, 160, 255, 0.08)',
                            marginBottom: '56px',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '30px',
                                fontWeight: '500',
                                color: 'rgba(120, 180, 255, 0.90)',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                            }}
                        >
                            Instruction Library for GLM
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        style={{
                            fontSize: '192px',
                            fontWeight: '700',
                            color: '#ffffff',
                            margin: 0,
                            letterSpacing: '-0.045em',
                            lineHeight: 1,
                            textAlign: 'center',
                        }}
                    >
                        GLM Catalog
                    </h1>

                    {/* Hairline divider */}
                    <div
                        style={{
                            width: '760px',
                            height: '1px',
                            background:
                                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent 100%)',
                            margin: '72px 0',
                        }}
                    />

                    {/* Description */}
                    <p
                        style={{
                            fontSize: '44px',
                            fontWeight: '400',
                            color: 'rgba(180, 190, 210, 0.80)',
                            margin: 0,
                            textAlign: 'center',
                            maxWidth: '1240px',
                            lineHeight: 1.6,
                            letterSpacing: '0.005em',
                        }}
                    >
                        Discover reusable rules, skills, and workflows that improve GLM outputs.
                    </p>
                </div>

                {/* Bottom-left domain tag */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '72px',
                        left: '104px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                    }}
                >
                    <div
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: 'rgba(100, 160, 255, 0.60)',
                        }}
                    />
                    <span
                        style={{
                            fontSize: '28px',
                            color: 'rgba(255,255,255,0.25)',
                            fontWeight: '400',
                            letterSpacing: '0.04em',
                        }}
                    >
                        glm.catalog
                    </span>
                </div>
            </div>
        ),
        { ...size }
    );
}