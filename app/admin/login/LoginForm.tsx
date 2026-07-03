'use client';

import { useActionState } from 'react';
import { loginAction } from '../actions';
import type { FormState } from '@/lib/adminTypes';

const initial: FormState = {};

export default function LoginForm({ next }: { next: string }) {
  const [state, action, pending] = useActionState(loginAction, initial);
  return (
    <form action={action}>
      {state.error && <div className="a-alert err">{state.error}</div>}
      <input type="hidden" name="next" value={next} />
      <div className="a-field">
        <label>Username</label>
        <input type="text" name="username" autoComplete="username" required autoFocus />
      </div>
      <div className="a-field">
        <label>Password</label>
        <input type="password" name="password" autoComplete="current-password" required />
      </div>
      <button type="submit" className="btn btn-red btn-block btn-lg" disabled={pending}>
        {pending ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  );
}
