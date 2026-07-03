'use client';

import { useState } from 'react';

function score(pw: string) {
  let s = 0;
  if (pw.length >= 8) s++;
  if (pw.length >= 12) s++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;
  if (/\d/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return Math.min(s, 4);
}
const COLORS = ['#DE3436', '#F5B204', '#F5B204', '#86B915', '#6f9c10'];
const LABELS = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong'];

export function PasswordField({
  name = 'password',
  label = 'Password',
}: {
  name?: string;
  label?: string;
}) {
  const [pw, setPw] = useState('');
  const generate = () => {
    const chars = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%';
    const arr = crypto.getRandomValues(new Uint32Array(16));
    let p = '';
    for (const n of arr) p += chars[n % chars.length];
    setPw(p);
  };
  const sc = score(pw);
  return (
    <div className="a-field">
      <label>
        {label}
        <button
          type="button"
          className="a-mini"
          style={{ float: 'right' }}
          onClick={generate}
        >
          Generate strong
        </button>
      </label>
      <input
        type="text"
        name={name}
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        autoComplete="new-password"
        placeholder="At least 8 characters"
      />
      {pw && (
        <>
          <div className="pw-meter">
            <span style={{ width: `${(sc + 1) * 20}%`, background: COLORS[sc] }} />
          </div>
          <span className="hint">{LABELS[sc]}</span>
        </>
      )}
    </div>
  );
}
