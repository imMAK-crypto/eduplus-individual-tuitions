import { ImageResponse } from 'next/og';

// Generated brand favicon — served at /icon (referenced by manifest + JSON-LD logo).
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: 14,
          color: '#ffffff',
          fontSize: 38,
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
