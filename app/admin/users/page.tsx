import { readUsers, getSessionUser } from '@/lib/auth';
import UsersManager from './UsersManager';

export const dynamic = 'force-dynamic';

export default async function UsersPage() {
  const me = await getSessionUser();
  const users = (await readUsers()).map((u) => ({
    id: u.id,
    username: u.username,
    role: u.role,
    createdAt: u.createdAt,
  }));
  return (
    <>
      <h1 className="page-title">Users</h1>
      <p className="page-sub">Manage who can sign in to the admin panel.</p>
      <UsersManager users={users} meId={me?.sub || ''} meRole={me?.role || 'editor'} />
    </>
  );
}
