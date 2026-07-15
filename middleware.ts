import { NextResponse, type NextRequest } from 'next/server';
import { verifySession, SESSION_COOKIE } from '@/lib/session';
import { SITE } from '@/lib/site';

// Canonical host (e.g. eduplustuitions.in) and its www/non-www twin. Requests
// arriving on the twin get a 301 so search engines see exactly one host.
// Any other host (localhost, preview deploys) is left untouched.
const CANONICAL = new URL(SITE.url);
const TWIN_HOST = CANONICAL.host.startsWith('www.')
  ? CANONICAL.host.slice(4)
  : `www.${CANONICAL.host}`;

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const host = (req.headers.get('host') || '').toLowerCase();
  if (host === TWIN_HOST) {
    return NextResponse.redirect(
      `${CANONICAL.origin}${pathname}${req.nextUrl.search}`,
      301
    );
  }

  if (!pathname.startsWith('/admin')) return NextResponse.next();

  // Gate everything under /admin behind a valid session, except the login and
  // first-run setup pages. Runs on the edge — uses jose-only session verify.
  const isOpen = pathname === '/admin/login' || pathname === '/admin/setup';

  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const session = token ? await verifySession(token) : null;

  if (!isOpen && !session) {
    const url = req.nextUrl.clone();
    url.pathname = '/admin/login';
    url.search = pathname && pathname !== '/admin' ? `?next=${encodeURIComponent(pathname)}` : '';
    return NextResponse.redirect(url);
  }

  if (isOpen && session) {
    const url = req.nextUrl.clone();
    url.pathname = '/admin';
    url.search = '';
    return NextResponse.redirect(url);
  }

  const res = NextResponse.next();
  res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  res.headers.set('Cache-Control', 'no-store');
  return res;
}

export const config = {
  // Everything except Next's static assets — the host redirect must cover all
  // real pages; the admin gate then applies only to /admin paths.
  matcher: ['/((?!_next/static|_next/image).*)'],
};
