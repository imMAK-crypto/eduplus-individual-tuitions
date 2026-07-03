'use client';

import { useActionState } from 'react';
import { uploadImageAction } from '../actions';
import type { FormState } from '@/lib/adminTypes';

const initial: FormState & { url?: string } = {};

export default function MediaUploader() {
  const [state, action, pending] = useActionState(uploadImageAction, initial);
  return (
    <div className="editor">
      <section className="a-section">
        <h2>Upload an image</h2>
        <form action={action}>
          {state.error && <div className="a-alert err">{state.error}</div>}
          <div className="a-field">
            <input type="file" name="file" accept="image/*" required />
          </div>
          <button type="submit" className="btn btn-red" disabled={pending}>
            {pending ? 'Uploading…' : 'Upload'}
          </button>
        </form>

        {state.url && (
          <div style={{ marginTop: '1.2rem' }}>
            <div className="a-alert ok">Uploaded ✓</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={state.url}
              alt="Uploaded preview"
              style={{ maxWidth: 280, borderRadius: 12, border: '1px solid var(--g-200)' }}
            />
            <div className="a-field" style={{ marginTop: '.7rem' }}>
              <label>Image URL</label>
              <input type="text" readOnly value={state.url} onFocus={(e) => e.currentTarget.select()} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
