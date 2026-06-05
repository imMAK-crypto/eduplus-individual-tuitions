'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SITE, NAV, telLink, waLink, type NavKey } from '@/lib/site';
import {
  Logo,
  PhoneIcon,
  WhatsAppIcon,
  PinIcon,
  ClockIcon,
  MenuIcon,
  XIcon,
  CheckIcon,
  HeartIcon,
  IgIcon,
  FbIcon,
  YtIcon,
} from '@/lib/icons';

const PAGE_FROM_PATH: Record<string, NavKey> = {
  '/': 'home',
  '/about': 'about',
  '/programs': 'programs',
  '/contact': 'contact',
};

function pageKey(path: string | null): NavKey {
  if (!path) return 'home';
  return PAGE_FROM_PATH[path] || 'home';
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pageKey(pathname);
  const isShowcase = pathname === '/phone-showcase';

  const [announceHidden, setAnnounceHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPrefill, setModalPrefill] = useState<{ klass?: string; subjects?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const studentRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const classRef = useRef<HTMLSelectElement | null>(null);
  const boardRef = useRef<HTMLSelectElement | null>(null);
  const subjRef = useRef<HTMLInputElement | null>(null);
  const timeRef = useRef<HTMLInputElement | null>(null);
  const msgRef = useRef<HTMLTextAreaElement | null>(null);

  // sticky header scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // body class for action-bar padding
  useEffect(() => {
    if (isShowcase) return;
    document.body.classList.add('has-actionbar');
    return () => document.body.classList.remove('has-actionbar');
  }, [isShowcase]);

  // global modal opener — listens for any [data-open-modal] click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest('[data-open-modal]') as HTMLElement | null;
      if (!t) return;
      e.preventDefault();
      lastFocusedRef.current = document.activeElement as HTMLElement;
      setMenuOpen(false);
      setSubmitted(false);
      setErrors({});
      setModalPrefill({
        klass: t.dataset.class || undefined,
        subjects: t.dataset.subjects || undefined,
      });
      setModalOpen(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // body scroll lock when modal or menu open
  useEffect(() => {
    document.body.style.overflow = modalOpen || menuOpen ? 'hidden' : '';
  }, [modalOpen, menuOpen]);

  // apply prefill values once modal mounts/opens
  useEffect(() => {
    if (!modalOpen) return;
    if (modalPrefill.klass && classRef.current) classRef.current.value = modalPrefill.klass;
    if (modalPrefill.subjects && subjRef.current) subjRef.current.value = modalPrefill.subjects;
    const t = setTimeout(() => firstFieldRef.current?.focus(), 120);
    return () => clearTimeout(t);
  }, [modalOpen, modalPrefill]);

  // Esc closes modal
  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  function closeModal() {
    setModalOpen(false);
    lastFocusedRef.current?.focus?.();
  }

  function submitEnquiry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const student = studentRef.current?.value || '';
    const phone = phoneRef.current?.value || '';
    const klass = classRef.current?.value || '';
    const board = boardRef.current?.value || '';
    const subj = subjRef.current?.value || '';
    const err: Record<string, boolean> = {};
    if (student.trim().length <= 1) err.student = true;
    if (!/\d{10}/.test(phone.replace(/\D/g, ''))) err.phone = true;
    if (!klass) err.class = true;
    if (!board) err.board = true;
    setErrors(err);
    if (Object.keys(err).length) return;
    setSubmitted(true);
  }

  if (isShowcase) return <>{children}</>;

  function successMsg() {
    const student = studentRef.current?.value || '';
    const phone = phoneRef.current?.value || '';
    const klass = classRef.current?.value || '';
    const board = boardRef.current?.value || '';
    const subj = subjRef.current?.value || '';
    return `Hi Eduplus! Demo request:\nStudent: ${student}\nClass: ${klass} (${board})\nSubjects: ${subj || '—'}\nPhone: ${phone}`;
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      {/* Announcement */}
      {!announceHidden && (
        <div className="announce">
          <span>
            🎓 Admissions open for 2026–27 · Personal attention, real results ·{' '}
            <a href={telLink}>Call {SITE.phone}</a>
          </span>
          <button
            className="close"
            aria-label="Dismiss announcement"
            onClick={() => setAnnounceHidden(true)}
          >
            <XIcon />
          </button>
        </div>
      )}

      {/* Sticky header */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
        <nav className="nav" aria-label="Primary">
          <div className="container nav-inner">
            <Logo />
            <div className="nav-links">
              {NAV.map((n) => (
                <a
                  key={n.key}
                  href={n.href}
                  className={n.key === active ? 'active' : undefined}
                  aria-current={n.key === active ? 'page' : undefined}
                >
                  {n.label}
                </a>
              ))}
            </div>
            <div className="nav-cta">
              <a className="icon-btn" href={telLink} aria-label={`Call ${SITE.phone}`}>
                <PhoneIcon />
              </a>
              <button className="btn btn-red" data-open-modal>
                Book a Free Demo
              </button>
            </div>
            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="mm-top">
          <Logo />
          <button className="hamburger" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <XIcon />
          </button>
        </div>
        <nav className="mm-links" aria-label="Mobile">
          {NAV.map((n) => (
            <a key={n.key} href={n.href} onClick={() => setMenuOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="mm-actions">
          <a className="btn btn-red btn-block" href={telLink}>
            <PhoneIcon /> Call Now
          </a>
          <a
            className="btn btn-green btn-block"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
          <button className="btn btn-outline btn-block" data-open-modal>
            Book a Free Demo
          </button>
        </div>
        <div className="mm-addr">
          <PinIcon />
          <span>
            {SITE.addressFull}
            <br />
            <strong>{SITE.hours}</strong>
          </span>
        </div>
      </div>

      {/* Page content goes between header and footer */}
      {children}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="foot-grid">
            <div className="foot-col">
              <Logo mono />
              <p className="foot-desc">
                Personalised tuition that goes beyond the classroom — {SITE.addressShort}.
              </p>
              <div className="socials">
                <a href={SITE.social.instagram} aria-label="Instagram">
                  <IgIcon />
                </a>
                <a href={SITE.social.facebook} aria-label="Facebook">
                  <FbIcon />
                </a>
                <a href={SITE.social.youtube} aria-label="YouTube">
                  <YtIcon />
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
            <div className="foot-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/programs">Programs</a></li>
                <li><a href="/#results">Results</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>Programs</h4>
              <ul>
                <li><a href="/programs">Primary (1–4)</a></li>
                <li><a href="/programs">Middle (5–7)</a></li>
                <li><a href="/programs">High School (8–10)</a></li>
                <li><a href="/programs">Plus One / Plus Two</a></li>
                <li><a href="/programs">Entrance Foundation</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>Visit / Contact</h4>
              <ul className="foot-contact">
                <li>
                  <PinIcon />
                  <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer">
                    {SITE.addressFull}
                  </a>
                </li>
                <li>
                  <PhoneIcon />
                  <a href={telLink}>{SITE.phone}</a>
                </li>
                <li>
                  <WhatsAppIcon />
                  <a href={waLink()} target="_blank" rel="noopener noreferrer">
                    WhatsApp us
                  </a>
                </li>
                <li>
                  <ClockIcon />
                  <span>{SITE.hours}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 {SITE.name}. All rights reserved.</span>
            <span className="made">
              Made in Kozhikode <HeartIcon />
            </span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        className="wa-float"
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      {/* Mobile action bar */}
      <nav className="action-bar" aria-label="Quick contact">
        <a className="call" href={telLink}>
          <PhoneIcon /> Call
        </a>
        <a className="wa" href={waLink()} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> WhatsApp
        </a>
      </nav>

      {/* Modal */}
      <div
        className={`modal-overlay ${modalOpen ? 'open' : ''}`}
        role="presentation"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <div className="modal-head">
            <div>
              <h3 id="modalTitle">Book a Free Demo Class</h3>
              <p>One-to-one or small batch · no obligation. We'll call you back.</p>
            </div>
            <button className="close" aria-label="Close" onClick={closeModal}>
              <XIcon />
            </button>
          </div>
          <div className="modal-body">
            {!submitted ? (
              <form onSubmit={submitEnquiry} noValidate>
                <div className="field-row">
                  <div className={`field ${errors.student ? 'error' : ''}`}>
                    <label htmlFor="f-student">
                      Student Name <span className="req">*</span>
                    </label>
                    <input
                      id="f-student"
                      name="student"
                      autoComplete="name"
                      required
                      ref={(el) => {
                        studentRef.current = el;
                        firstFieldRef.current = el;
                      }}
                    />
                    <div className="err">Please enter the student's name.</div>
                  </div>
                  <div className={`field ${errors.phone ? 'error' : ''}`}>
                    <label htmlFor="f-phone">
                      Parent Phone <span className="req">*</span>
                    </label>
                    <input
                      id="f-phone"
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
                    <label htmlFor="f-class">
                      Class <span className="req">*</span>
                    </label>
                    <select id="f-class" name="class" required ref={classRef} defaultValue="">
                      <option value="">Select…</option>
                      {Array.from({ length: 12 }).map((_, i) => (
                        <option key={i + 1}>Class {i + 1}</option>
                      ))}
                    </select>
                    <div className="err">Select a class.</div>
                  </div>
                  <div className={`field ${errors.board ? 'error' : ''}`}>
                    <label htmlFor="f-board">
                      Board <span className="req">*</span>
                    </label>
                    <select id="f-board" name="board" required ref={boardRef} defaultValue="">
                      <option value="">Select…</option>
                      <option>Kerala State</option>
                      <option>CBSE</option>
                      <option>ICSE</option>
                    </select>
                    <div className="err">Select a board.</div>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="f-subj">Subject(s) interested</label>
                  <input id="f-subj" name="subjects" placeholder="e.g. Maths, Science" ref={subjRef} />
                </div>
                <div className="field">
                  <label htmlFor="f-time">Preferred time (optional)</label>
                  <input id="f-time" name="time" placeholder="e.g. Weekday evenings" ref={timeRef} />
                </div>
                <div className="field">
                  <label htmlFor="f-msg">Message (optional)</label>
                  <textarea
                    id="f-msg"
                    name="message"
                    placeholder="Anything you'd like us to know"
                    ref={msgRef}
                  />
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
                  Prefer to chat?{' '}
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
            ) : (
              <div className="modal-success">
                <div className="ok">
                  <CheckIcon />
                </div>
                <h3>Request received — thank you!</h3>
                <p>
                  We'll call you back shortly to arrange{' '}
                  {(studentRef.current?.value?.split(' ')[0] || 'your child') + "'s"} free demo
                  class. For an instant reply, message us on WhatsApp.
                </p>
                <a
                  className="btn btn-green btn-lg"
                  href={waLink(successMsg())}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> Continue on WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
