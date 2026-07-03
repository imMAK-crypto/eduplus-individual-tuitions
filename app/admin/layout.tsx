import type { Metadata } from 'next';
import './admin.css';
import { getSessionUser } from '@/lib/auth';
import AdminShell from './AdminShell';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();
  // login + setup render bare (no session); everything else gets the shell.
  if (!user) return <div className="admin-bare">{children}</div>;
  return <AdminShell user={user}>{children}</AdminShell>;
}
