const site = require('./content/site.json');

const canonical = new URL(site.url);
const legacyHosts = ['eduplustuitions.in', 'www.eduplustuitions.in', 'eduplus-individual-tuitions.vercel.app'];

function indexNowRewrite() {
  const key = process.env.INDEXNOW_KEY;
  return key && /^[a-zA-Z0-9-]{8,128}$/.test(key)
    ? [{ source: `/${key}.txt`, destination: '/api/indexnow/key' }]
    : [];
}

/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return legacyHosts.filter((host) => host !== canonical.hostname).map((host) => ({
      source: '/:path*',
      has: [{ type: 'host', value: host.replaceAll('.', '\\.') }],
      destination: `${canonical.origin}/:path*`,
      permanent: true,
    }));
  },
  async rewrites() {
    return indexNowRewrite();
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
