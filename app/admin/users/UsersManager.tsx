'use client';

import { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createUserAction, deleteUserAction, changePasswordAction } from '../actions';
import type { FormState } from '@/lib/adminTypes';
import { PasswordField } from '../_components/PasswordField';

type U = { id: string; username: string; role: string; createdAt: string };
const initial: FormState = {};

export default function UsersManager({
  users,
  meId,
  meRole,
}: {
  users: U[];
  meId: string;
  meRole: string;
}) {
  const router = useRouter();
  const [createState, createAction, creating] = useActionState(createUserAction, initial);
  const [delState, delAction] = useActionState(deleteUserAction, initial);
  const [pwState, pwAction, pwPending] = useActionState(changePasswordAction, initial);

  // refresh the list after a successful create/delete
  useEffect(() => {
    if (createState.ok || delState.ok) router.refresh();
  }, [createState.savedAt, delState.savedAt, createState.ok, delState.ok, router]);

  const isAdmin = meRole === 'admin';
  const adminCount = users.filter((u) => u.role === 'admin').length;

  return (
    <div className="editor">
      <section className="a-section">
        <h2>Accounts</h2>
        {delState.error && <div className="a-alert err">{delState.error}</div>}
        <table className="a-users">
          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
              <th>Added</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>
                  {u.username}
                  {u.id === meId && <span className="hint"> (you)</span>}
                </td>
                <td>
                  <span className={`a-role ${u.role}`}>{u.role}</span>
                </td>
                <td>{new Date(u.createdAt).toLocaleDateString()}</td>
                <td style={{ textAlign: 'right' }}>
                  {isAdmin && !(u.role === 'admin' && adminCount <= 1) && (
                    <form action={delAction} style={{ display: 'inline' }}>
                      <input type="hidden" name="id" value={u.id} />
                      <button type="submit" className="a-mini danger">
                        Remove
                      </button>
                    </form>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {isAdmin && (
        <section className="a-section">
          <h2>Add a user</h2>
          <form action={createAction}>
            {createState.error && <div className="a-alert err">{createState.error}</div>}
            {createState.ok && <div className="a-alert ok">User created ✓</div>}
            <div className="a-row2">
              <div className="a-field">
                <label>Username</label>
                <input type="text" name="username" placeholder="e.g. teacher_priya" required />
              </div>
              <div className="a-field">
                <label>Role</label>
                <select name="role" defaultValue="editor">
                  <option value="editor">Editor — content only</option>
                  <option value="admin">Admin — full access</option>
                </select>
              </div>
            </div>
            <PasswordField name="password" label="Password" />
            <button type="submit" className="btn btn-red" disabled={creating}>
              {creating ? 'Adding…' : 'Add user'}
            </button>
          </form>
        </section>
      )}

      <section className="a-section">
        <h2>Change my password</h2>
        <form action={pwAction}>
          {pwState.error && <div className="a-alert err">{pwState.error}</div>}
          {pwState.ok && <div className="a-alert ok">Password updated ✓</div>}
          <PasswordField name="password" label="New password" />
          <button type="submit" className="btn btn-red" disabled={pwPending}>
            {pwPending ? 'Updating…' : 'Update password'}
          </button>
        </form>
      </section>
    </div>
  );
}
