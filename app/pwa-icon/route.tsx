import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

// Larger brand icons for the web manifest: /pwa-icon?size=192 | 512.
// Same E+ mark as app/icon.tsx, scaled up.
export async function GET(req: NextRequest) {
  const size = req.nextUrl.searchParams.get('size') === '512' ? 512 : 192;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0563CE',
          borderRadius: size * 0.22,
          color: '#ffffff',
          fontSize: size * 0.6,
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        <span>E</span>
        <span style={{ color: '#F5B204' }}>+</span>
      </div>
    ),
    { width: size, height: size }
  );
}
