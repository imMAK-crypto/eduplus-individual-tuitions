import { redirect } from 'next/navigation';
import { hasAnyUser } from '@/lib/auth';
import LoginForm from './LoginForm';

export const dynamic = 'force-dynamic';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  if (!(await hasAnyUser())) redirect('/admin/setup');
  const { next } = await searchParams;
  return (
    <div className="auth-card">
      <div className="a-logo">
        Eduplus<span className="p">+</span>
      </div>
      <h1>Admin sign in</h1>
      <p className="sub">Sign in to manage your website content.</p>
      <LoginForm next={next || ''} />
    </div>
  );
}
