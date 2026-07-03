'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Brand intro splash. Renders on first hit of the session, fades out
 * after the letter-stagger animation completes. Skips on subsequent
 * pages within the same session (sessionStorage flag). An inline
 * head script also hides it pre-hydration on revisits to avoid a flash.
 */
export default function IntroSplash() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<'show' | 'fading' | 'done'>('show');

  useEffect(() => {
    if (pathname?.startsWith('/admin')) {
      setPhase('done');
      return;
    }
    try {
      if (sessionStorage.getItem('eduplus-intro-shown')) {
        setPhase('done');
        return;
      }
      sessionStorage.setItem('eduplus-intro-shown', '1');
    } catch {
      /* private mode / disabled storage — just show it */
    }
    const t1 = window.setTimeout(() => setPhase('fading'), 1350);
    const t2 = window.setTimeout(() => setPhase('done'), 1980);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`intro-splash ${phase === 'fading' ? 'fade-out' : ''}`}
      aria-hidden="true"
    >
      <div className="intro-logo">
        <span className="intro-word">
          <span className="c1">E</span>
          <span className="c2">d</span>
          <span className="c3">u</span>
          <span className="c4">p</span>
          <span className="c5">l</span>
          <span className="c6">u</span>
          <span className="c7">s</span>
          <span className="plus">+</span>
        </span>
        <span className="intro-sub">Beyond Classroom</span>
      </div>
    </div>
  );
}
