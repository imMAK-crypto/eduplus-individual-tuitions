'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logoutAction } from './actions';
import type { SessionPayload } from '@/lib/session';

const LINKS = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/site', label: 'Global settings' },
  { href: '/admin/pages/home', label: 'Home page' },
  { href: '/admin/pages/contact', label: 'Contact page' },
  { href: '/admin/media', label: 'Media' },
  { href: '/admin/users', label: 'Users' },
];

export default function AdminShell({
  user,
  children,
}: {
  user: SessionPayload;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="admin-shell">
      <aside className="admin-side">
        <div className="a-brand">
          Eduplus<span className="p">+</span>
        </div>
        {LINKS.map((l) => {
          const active = l.href === '/admin' ? pathname === '/admin' : pathname.startsWith(l.href);
          return (
            <Link key={l.href} href={l.href} className={`nav ${active ? 'active' : ''}`}>
              {l.label}
            </Link>
          );
        })}
        <div className="a-spacer" />
        <div className="a-user">
          Signed in as
          <strong>
            {user.username} · {user.role}
          </strong>
        </div>
        <form action={logoutAction}>
          <button type="submit" className="nav" style={{ width: '100%', textAlign: 'left' }}>
            Log out
          </button>
        </form>
        <Link href="/" className="nav" target="_blank">
          View site ↗
        </Link>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
