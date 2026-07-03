import { redirect } from 'next/navigation';
import { hasAnyUser } from '@/lib/auth';
import SetupForm from './SetupForm';

export const dynamic = 'force-dynamic';

export default async function SetupPage() {
  // Self-locking: once the first admin exists, this route redirects to login.
  if (await hasAnyUser()) redirect('/admin/login');
  return (
    <div className="auth-card">
      <div className="a-logo">
        Eduplus<span className="p">+</span>
      </div>
      <h1>Create your admin account</h1>
      <p className="sub">
        This is a one-time setup. Choose the username and password you’ll use to manage the site.
      </p>
      <SetupForm />
    </div>
  );
}
