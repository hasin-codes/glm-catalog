import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

// Image metadata
export const alt = 'GLM Catalog — Instruction Library for GLM';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    const logoBuffer = readFileSync(join(process.cwd(), 'public', 'logo.png'));
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
                    backgroundColor: '#0a0a0a',
                    backgroundImage: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage:
                            'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.05) 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '60px 80px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '32px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        boxShadow: '0 24px 64px rgba(0, 0, 0, 0.8)',
                        position: 'relative',
                    }}
                >
                    {/* Logo Section */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '40px',
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={logoDataUrl}
                            alt="GLM Catalog"
                            style={{
                                width: '100px',
                                height: '100px',
                                marginRight: '32px',
                            }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h1
                                style={{
                                    fontSize: '84px',
                                    fontWeight: '900',
                                    color: 'white',
                                    margin: 0,
                                    letterSpacing: '-0.04em',
                                    lineHeight: 1,
                                }}
                            >
                                GLM Catalog
                            </h1>
                            <span
                                style={{
                                    fontSize: '32px',
                                    color: '#a3a3a3',
                                    marginTop: '12px',
                                    fontWeight: '600',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Instruction Library for GLM
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <p
                        style={{
                            fontSize: '40px',
                            color: '#d4d4d4',
                            margin: 0,
                            textAlign: 'center',
                            maxWidth: '850px',
                            lineHeight: 1.5,
                            fontWeight: '500',
                        }}
                    >
                        Discover reusable rules, skills, and workflows that improve GLM outputs.
                    </p>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
