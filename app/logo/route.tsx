import { ImageResponse } from 'next/og';

// Stable, hash-free brand logo URL (/logo) referenced by JSON-LD `logo`.
// 256×256 satisfies Google's ≥112px organization-logo requirement.
export const runtime = 'nodejs';

export function GET() {
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
          fontSize: 150,
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        <span>E</span>
        <span style={{ color: '#F5B204' }}>+</span>
      </div>
    ),
    { width: 256, height: 256 }
  );
}
