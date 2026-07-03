'use client';

import type { FormState } from '@/lib/adminTypes';

export function Text({
  label,
  value,
  onChange,
  hint,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
  type?: string;
}) {
  return (
    <div className="a-field">
      <label>
        {label}
        {hint && <span className="hint"> — {hint}</span>}
      </label>
      <input type={type} value={value ?? ''} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export function Area({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}) {
  return (
    <div className="a-field">
      <label>
        {label}
        {hint && <span className="hint"> — {hint}</span>}
      </label>
      <textarea value={value ?? ''} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="a-toggle">
      <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} /> {label}
    </label>
  );
}

export function StringList({
  label,
  values,
  onChange,
}: {
  label: string;
  values: string[];
  onChange: (v: string[]) => void;
}) {
  const set = (i: number, v: string) => onChange(values.map((x, j) => (j === i ? v : x)));
  return (
    <div className="a-field">
      <label>{label}</label>
      <div className="a-strlist">
        {values.map((v, i) => (
          <span key={i} className="chip-edit">
            <input value={v} onChange={(e) => set(i, e.target.value)} />
            <button
              type="button"
              className="a-mini danger"
              onClick={() => onChange(values.filter((_, j) => j !== i))}
            >
              ×
            </button>
          </span>
        ))}
        <button type="button" className="a-mini" onClick={() => onChange([...values, ''])}>
          + Add
        </button>
      </div>
    </div>
  );
}

export type Faq = { q: string; a: string };

export function FaqList({ items, onChange }: { items: Faq[]; onChange: (v: Faq[]) => void }) {
  const set = (i: number, patch: Partial<Faq>) =>
    onChange(items.map((it, j) => (j === i ? { ...it, ...patch } : it)));
  const move = (i: number, d: number) => {
    const j = i + d;
    if (j < 0 || j >= items.length) return;
    const c = [...items];
    [c[i], c[j]] = [c[j], c[i]];
    onChange(c);
  };
  return (
    <div>
      {items.map((it, i) => (
        <div key={i} className="a-list-item">
          <div className="a-item-head">
            <span className="n">Q{i + 1}</span>
            <span style={{ display: 'flex', gap: '.3rem' }}>
              <button type="button" className="a-mini" onClick={() => move(i, -1)} disabled={i === 0}>
                ↑
              </button>
              <button
                type="button"
                className="a-mini"
                onClick={() => move(i, 1)}
                disabled={i === items.length - 1}
              >
                ↓
              </button>
              <button
                type="button"
                className="a-mini danger"
                onClick={() => onChange(items.filter((_, j) => j !== i))}
              >
                Delete
              </button>
            </span>
          </div>
          <div className="a-field">
            <input
              type="text"
              value={it.q}
              onChange={(e) => set(i, { q: e.target.value })}
              placeholder="Question"
            />
          </div>
          <div className="a-field">
            <textarea
              value={it.a}
              onChange={(e) => set(i, { a: e.target.value })}
              placeholder="Answer"
            />
          </div>
        </div>
      ))}
      <button type="button" className="a-mini" onClick={() => onChange([...items, { q: '', a: '' }])}>
        + Add question
      </button>
    </div>
  );
}

export function SaveBar({ pending, state }: { pending: boolean; state: FormState }) {
  return (
    <div className="save-bar">
      <button type="submit" className="btn btn-red" disabled={pending}>
        {pending ? 'Saving…' : 'Save changes'}
      </button>
      {state?.ok && (
        <span className="status ok">
          Saved{state.mode === 'git' ? ' — publishing to live site…' : ''} ✓
        </span>
      )}
      {state?.error && <span className="status err">{state.error}</span>}
    </div>
  );
}
