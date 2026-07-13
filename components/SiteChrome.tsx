'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE, NAV, telLink, waLink, validIndianPhone, type NavKey } from '@/lib/site';
import {
  Logo,
  PhoneIcon,
  WhatsAppIcon,
  PinIcon,
  GlobeIcon,
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
  '/exam-prep': 'exam',
  '/fees': 'fees',
  '/why': 'why',
  '/contact': 'contact',
};

function pageKey(path: string | null): NavKey {
  if (!path) return 'home';
  return PAGE_FROM_PATH[path] || 'home';
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pageKey(pathname);
  const isShowcase = pathname === '/phone-showcase' || !!pathname?.startsWith('/admin');

  const [announceHidden, setAnnounceHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPrefill, setModalPrefill] = useState<{
    klass?: string;
    subjects?: string;
    mode?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [mode, setMode] = useState<'Offline' | 'Online' | ''>('');
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const studentRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const classRef = useRef<HTMLSelectElement | null>(null);
  const boardRef = useRef<HTMLSelectElement | null>(null);
  const subjRef = useRef<HTMLInputElement | null>(null);
  const timeRef = useRef<HTMLInputElement | null>(null);
  const topicRef = useRef<HTMLInputElement | null>(null);

  // sticky header scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // remember a dismissed announcement across visits
  useEffect(() => {
    try {
      if (localStorage.getItem('eduplus-announce-hidden')) setAnnounceHidden(true);
    } catch {
      /* storage disabled — just show it */
    }
  }, []);

  // focus trap for whichever overlay is open (modal or mobile menu)
  useEffect(() => {
    const sel = modalOpen ? '.modal' : menuOpen ? '.mobile-menu' : null;
    if (!sel) return;
    const container = document.querySelector<HTMLElement>(sel);
    if (!container) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const f = container.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])'
      );
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modalOpen, menuOpen]);

  // Esc closes the mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

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
        mode: t.dataset.mode || undefined,
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

  // reset + apply prefill values once modal mounts/opens (no stale data on reopen)
  useEffect(() => {
    if (!modalOpen) return;
    if (studentRef.current) studentRef.current.value = '';
    if (phoneRef.current) phoneRef.current.value = '';
    if (timeRef.current) timeRef.current.value = '';
    if (topicRef.current) topicRef.current.value = '';
    if (classRef.current) classRef.current.value = modalPrefill.klass || '';
    if (subjRef.current) subjRef.current.value = modalPrefill.subjects || '';
    setMode(modalPrefill.mode === 'Online' || modalPrefill.mode === 'Offline' ? modalPrefill.mode : '');
    setErrors({});
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
    const err: Record<string, boolean> = {};
    if (student.trim().length <= 1) err.student = true;
    if (!validIndianPhone(phone)) err.phone = true;
    if (!klass) err.class = true;
    if (!board) err.board = true;
    if (!mode) err.mode = true;
    setErrors(err);
    if (Object.keys(err).length) return;
    setSubmitted(true);
    // hand the lead straight to WhatsApp (their real inbox) — user-gesture, so allowed
    try {
      window.open(waLink(successMsg()), '_blank', 'noopener,noreferrer');
    } catch {
      /* popup blocked — the success screen still offers the same link */
    }
  }

  if (isShowcase) return <>{children}</>;

  function successMsg() {
    const student = studentRef.current?.value || '';
    const phone = phoneRef.current?.value || '';
    const klass = classRef.current?.value || '';
    const board = boardRef.current?.value || '';
    const subj = subjRef.current?.value || '';
    const time = timeRef.current?.value || '';
    const topic = topicRef.current?.value || '';
    return `Hi Eduplus! Demo request:\nStudent: ${student}\nClass: ${klass} (${board})\nMode: ${mode || '—'}\nSubjects: ${subj || '—'}\nTopic: ${topic || '—'}\nPreferred time: ${time || '—'}\nPhone: ${phone}`;
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      {/* Announcement */}
      {!announceHidden && SITE.announce?.on && (
        <div className="announce">
          <span>
            {SITE.announce.text} ·{' '}
            <a href={telLink}>
              {SITE.announce.linkLabel} {SITE.phone}
            </a>
          </span>
          <button
            className="close"
            aria-label="Dismiss announcement"
            onClick={() => {
              setAnnounceHidden(true);
              try {
                localStorage.setItem('eduplus-announce-hidden', '1');
              } catch {
                /* storage disabled — dismissal just won't persist */
              }
            }}
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
                <Link
                  key={n.key}
                  href={n.href}
                  className={n.key === active ? 'active' : undefined}
                  aria-current={n.key === active ? 'page' : undefined}
                >
                  {n.label}
                </Link>
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
            <Link key={n.key} href={n.href} onClick={() => setMenuOpen(false)}>
              {n.label}
            </Link>
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
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/programs">Programs</Link></li>
                <li><Link href="/exam-prep">Exam Prep</Link></li>
                <li><Link href="/fees">Fee Structure</Link></li>
                <li><Link href="/why">Why Eduplus</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>Programs</h4>
              <ul>
                <li><Link href="/programs">Foundation (LKG–4)</Link></li>
                <li><Link href="/programs">Middle (5–7)</Link></li>
                <li><Link href="/programs">High School (8–10)</Link></li>
                <li><Link href="/programs">Plus One / Plus Two</Link></li>
                <li><Link href="/exam-prep">SAY &amp; Improvement (+1/+2)</Link></li>
                <li><Link href="/programs#exam-prep">Exam-target batches</Link></li>
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
            <span>
              © {new Date().getFullYear()} {SITE.name}. All rights reserved. ·{' '}
              <Link href="/privacy">Privacy</Link>
            </span>
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
                      <option>LKG</option>
                      <option>UKG</option>
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
                <div className={`field ${errors.mode ? 'error' : ''}`}>
                  <label id="f-mode-label">
                    Class mode <span className="req">*</span>
                  </label>
                  <div className="mode-pick" role="radiogroup" aria-labelledby="f-mode-label">
                    <button
                      type="button"
                      role="radio"
                      aria-checked={mode === 'Offline'}
                      className={`mp-btn ${mode === 'Offline' ? 'on' : ''}`}
                      onClick={() => setMode('Offline')}
                    >
                      <PinIcon /> Offline · at centre
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={mode === 'Online'}
                      className={`mp-btn mp-online ${mode === 'Online' ? 'on' : ''}`}
                      onClick={() => setMode('Online')}
                    >
                      <GlobeIcon /> Online · live class
                    </button>
                  </div>
                  <div className="err">Choose offline or online.</div>
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
                  <label htmlFor="f-topic">Topic</label>
                  <input
                    id="f-topic"
                    name="topic"
                    placeholder="e.g. Algebra doubts, SSLC revision, SAY exam"
                    ref={topicRef}
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
