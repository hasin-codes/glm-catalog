import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'GLM Catalog — Community Hub for Z.ai & GLM';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
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
                        <div
                            style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '24px',
                                background: 'linear-gradient(135deg, #ffffff 0%, #a3a3a3 100%)',
                                marginRight: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 2L2 7L12 12L22 7L12 2Z"
                                    fill="#000"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2 17L12 22L22 17"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2 12L12 17L22 12"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
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
                                Z.ai Community Directory
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
                        The home for Z.ai enthusiasts. Explore rules, browse MCPs, and connect with the GLM
                        community.
                    </p>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
