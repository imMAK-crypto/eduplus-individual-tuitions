'use client';

import { useActionState } from 'react';
import { setupAction } from '../actions';
import type { FormState } from '@/lib/adminTypes';
import { PasswordField } from '../_components/PasswordField';

const initial: FormState = {};

export default function SetupForm() {
  const [state, action, pending] = useActionState(setupAction, initial);
  return (
    <form action={action}>
      {state.error && <div className="a-alert err">{state.error}</div>}
      <div className="a-field">
        <label>Username</label>
        <input type="text" name="username" autoComplete="username" placeholder="e.g. eduplus_admin" required />
        <span className="hint">3–20 characters · letters, numbers, underscore</span>
      </div>
      <PasswordField name="password" label="Password" />
      <div className="a-field">
        <label>Confirm password</label>
        <input type="password" name="confirm" autoComplete="new-password" required />
      </div>
      <button type="submit" className="btn btn-red btn-block btn-lg" disabled={pending}>
        {pending ? 'Creating…' : 'Create admin account'}
      </button>
    </form>
  );
}
