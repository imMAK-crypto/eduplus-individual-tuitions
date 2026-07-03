import { ImageResponse } from 'next/og';

// Branded social share image — auto-attached to OpenGraph + Twitter for the site.
export const alt =
  'Eduplus Individual Tuitions — one-to-one coaching, LKG to Plus Two, online & offline, Ashokapuram Kozhikode';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
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
          <div style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.5 }}>
            One-to-one tuition,
          </div>
          <div style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.5 }}>
            LKG to Plus Two.
          </div>
          <div style={{ fontSize: 34, marginTop: 26, color: 'rgba(255,255,255,0.85)' }}>
            Online &amp; offline · CBSE · ICSE · Kerala State
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', fontSize: 30, color: 'rgba(255,255,255,0.9)' }}>
          <span>Ashokapuram, Kozhikode</span>
          <span style={{ margin: '0 16px', color: '#F5B204' }}>·</span>
          <span>Rated 4.8/5 since 2015</span>
          <span style={{ margin: '0 16px', color: '#F5B204' }}>·</span>
          <span style={{ color: '#F5B204', fontWeight: 700 }}>Book a free demo</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
