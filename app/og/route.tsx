import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

// Parameterised social-share image: /og?title=...&sub=...
// Used by interior + landing pages so every URL shares with its own card
// (the root opengraph-image.tsx stays the default for the home page).
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = (searchParams.get('title') || 'Eduplus Individual Tuitions').slice(0, 90);
  const sub = (searchParams.get('sub') || 'One-to-one tuition · LKG to Plus Two').slice(0, 110);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '76px 84px',
          background: 'linear-gradient(135deg, #0a1b3d 0%, #0457b4 68%, #0563CE 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 46, fontWeight: 800 }}>
          <span style={{ color: '#DE3436' }}>E</span>
          <span>duplus</span>
          <span style={{ color: '#F5B204' }}>+</span>
          <span style={{ fontSize: 24, fontWeight: 700, marginLeft: 18, letterSpacing: 6, opacity: 0.8 }}>
            BEYOND CLASSROOM
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: title.length > 45 ? 58 : 72,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 32, marginTop: 26, color: 'rgba(255,255,255,0.85)' }}>{sub}</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', fontSize: 30, color: 'rgba(255,255,255,0.9)' }}>
          <span>Ashokapuram, Kozhikode</span>
          <span style={{ margin: '0 16px', color: '#F5B204' }}>·</span>
          <span>Since 2015</span>
          <span style={{ margin: '0 16px', color: '#F5B204' }}>·</span>
          <span style={{ color: '#F5B204', fontWeight: 700 }}>Free demo class</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
