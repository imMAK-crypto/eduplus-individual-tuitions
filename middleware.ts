import { NextResponse, type NextRequest } from 'next/server';
import { verifySession, SESSION_COOKIE } from '@/lib/session';

// Gate everything under /admin behind a valid session, except the login and
// first-run setup pages. Runs on the edge — uses jose-only session verify.
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
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

export const config = { matcher: ['/admin', '/admin/:path*'] };
