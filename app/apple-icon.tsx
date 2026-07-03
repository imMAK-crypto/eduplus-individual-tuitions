import { ImageResponse } from 'next/og';

// Generated iOS home-screen icon (180×180).
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          color: '#ffffff',
          fontSize: 104,
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        <span>E</span>
        <span style={{ color: '#F5B204' }}>+</span>
      </div>
    ),
    { ...size }
  );
}
