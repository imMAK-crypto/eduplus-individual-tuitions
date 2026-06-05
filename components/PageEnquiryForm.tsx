'use client';

import { useRef, useState } from 'react';
import { CheckIcon, WhatsAppIcon } from '@/lib/icons';
import { waLink } from '@/lib/site';

export default function PageEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const studentRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const classRef = useRef<HTMLSelectElement | null>(null);
  const boardRef = useRef<HTMLSelectElement | null>(null);
  const subjRef = useRef<HTMLInputElement | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const err: Record<string, boolean> = {};
    if ((studentRef.current?.value || '').trim().length <= 1) err.student = true;
    if (!/\d{10}/.test((phoneRef.current?.value || '').replace(/\D/g, ''))) err.phone = true;
    if (!classRef.current?.value) err.class = true;
    if (!boardRef.current?.value) err.board = true;
    setErrors(err);
    if (Object.keys(err).length) return;
    setSubmitted(true);
  }

  if (submitted) {
    const msg = `Hi Eduplus! Enquiry:\nStudent: ${studentRef.current?.value}\nClass: ${classRef.current?.value} (${boardRef.current?.value})\nSubjects: ${subjRef.current?.value || '—'}\nPhone: ${phoneRef.current?.value}`;
    return (
      <div className="modal-success" style={{ padding: '1.5rem 0' }}>
        <div className="ok">
          <CheckIcon />
        </div>
        <h3>Thank you — enquiry received!</h3>
        <p>We'll call you back shortly. For an instant reply, continue on WhatsApp.</p>
        <a className="btn btn-green btn-lg" href={waLink(msg)} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="field-row">
        <div className={`field ${errors.student ? 'error' : ''}`}>
          <label htmlFor="p-student">
            Student Name <span className="req">*</span>
          </label>
          <input id="p-student" name="student" autoComplete="name" required ref={studentRef} />
          <div className="err">Please enter the student's name.</div>
        </div>
        <div className={`field ${errors.phone ? 'error' : ''}`}>
          <label htmlFor="p-phone">
            Parent Phone <span className="req">*</span>
          </label>
          <input
            id="p-phone"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 …"
            required
            ref={phoneRef}
          />
          <div className="err">Enter a valid 10-digit phone.</div>
        </div>
      </div>
      <div className="field-row">
        <div className={`field ${errors.class ? 'error' : ''}`}>
          <label htmlFor="p-class">
            Class <span className="req">*</span>
          </label>
          <select id="p-class" name="class" required ref={classRef} defaultValue="">
            <option value="">Select…</option>
            {Array.from({ length: 12 }).map((_, i) => (
              <option key={i + 1}>Class {i + 1}</option>
            ))}
          </select>
          <div className="err">Select a class.</div>
        </div>
        <div className={`field ${errors.board ? 'error' : ''}`}>
          <label htmlFor="p-board">
            Board <span className="req">*</span>
          </label>
          <select id="p-board" name="board" required ref={boardRef} defaultValue="">
            <option value="">Select…</option>
            <option>Kerala State</option>
            <option>CBSE</option>
            <option>ICSE</option>
          </select>
          <div className="err">Select a board.</div>
        </div>
      </div>
      <div className="field">
        <label htmlFor="p-subj">Subject(s) interested</label>
        <input id="p-subj" name="subjects" placeholder="e.g. Maths, Science" ref={subjRef} />
      </div>
      <div className="field">
        <label htmlFor="p-msg">Message (optional)</label>
        <textarea id="p-msg" name="message" placeholder="Anything you'd like us to know" />
      </div>
      <button type="submit" className="btn btn-red btn-block btn-lg">
        Request Callback
      </button>
      <p
        style={{
          textAlign: 'center',
          color: 'var(--g-500)',
          fontSize: '.82rem',
          marginTop: '.8rem',
        }}
      >
        Prefer to chat now?{' '}
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--green-600)', fontWeight: 700 }}
        >
          Message us on WhatsApp
        </a>
      </p>
    </form>
  );
}
