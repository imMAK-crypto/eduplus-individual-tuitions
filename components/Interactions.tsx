'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Wires the scroll-reveal, count-up, tabs, accordion, and hero parallax
 * after each navigation. Pure DOM — targets the same class/data attributes
 * the design system uses, so the React markup can stay framework-agnostic.
 */
export default function Interactions() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/phone-showcase' || pathname?.startsWith('/admin')) return;
    /* ----- scroll reveal (rAF + rect check) ----- */
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal,[data-stagger]')
    );
    const checkReveal = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (let i = els.length - 1; i >= 0; i--) {
        const el = els[i];
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          el.classList.add('in');
          els.splice(i, 1);
        }
      }
      if (!els.length) {
        window.removeEventListener('scroll', onScrollReveal);
        window.removeEventListener('resize', onScrollReveal);
      }
    };
    let revealTicking = false;
    const onScrollReveal = () => {
      if (!revealTicking) {
        revealTicking = true;
        requestAnimationFrame(() => {
          revealTicking = false;
          checkReveal();
        });
      }
    };
    window.addEventListener('scroll', onScrollReveal, { passive: true });
    window.addEventListener('resize', onScrollReveal, { passive: true });
    checkReveal();

    // safety net — force visible after 1.6s in case transitions froze mid-flight
    const safetyTimer = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.reveal,[data-stagger]').forEach((e) => {
        e.style.transition = 'none';
        e.classList.add('in');
        void e.offsetHeight;
      });
    }, 1600);

    /* ----- tabs (with roving tabindex + arrow-key nav) ----- */
    const tabGroups = Array.from(document.querySelectorAll<HTMLElement>('[data-tabs]'));
    const tabHandlers: { el: HTMLElement; type: string; handler: (e: Event) => void }[] = [];
    tabGroups.forEach((group) => {
      const tabs = Array.from(group.querySelectorAll<HTMLButtonElement>('.tab'));
      const panels = group.querySelectorAll<HTMLElement>('.tab-panel');
      const activate = (t: HTMLButtonElement, focus = false) => {
        tabs.forEach((x) => {
          x.classList.remove('active');
          x.setAttribute('aria-selected', 'false');
          x.setAttribute('tabindex', '-1');
        });
        panels.forEach((p) => p.classList.remove('show'));
        t.classList.add('active');
        t.setAttribute('aria-selected', 'true');
        t.setAttribute('tabindex', '0');
        const panelId = t.dataset.tab;
        if (panelId) group.querySelector<HTMLElement>(`#${panelId}`)?.classList.add('show');
        if (focus) t.focus();
      };
      tabs.forEach((t, i) => {
        // initialise roving tabindex
        t.setAttribute('tabindex', t.classList.contains('active') ? '0' : '-1');
        const onClick = () => activate(t);
        const onKey = (e: Event) => {
          const ke = e as KeyboardEvent;
          let next = -1;
          if (ke.key === 'ArrowRight' || ke.key === 'ArrowDown') next = (i + 1) % tabs.length;
          else if (ke.key === 'ArrowLeft' || ke.key === 'ArrowUp') next = (i - 1 + tabs.length) % tabs.length;
          else if (ke.key === 'Home') next = 0;
          else if (ke.key === 'End') next = tabs.length - 1;
          if (next >= 0) {
            e.preventDefault();
            activate(tabs[next], true);
          }
        };
        t.addEventListener('click', onClick);
        t.addEventListener('keydown', onKey);
        tabHandlers.push({ el: t, type: 'click', handler: onClick });
        tabHandlers.push({ el: t, type: 'keydown', handler: onKey });
      });
    });

    /* ----- accordion ----- */
    const accordion = Array.from(document.querySelectorAll<HTMLButtonElement>('.qa .q'));
    const accordionHandlers: { el: HTMLElement; handler: (e: Event) => void }[] = [];
    accordion.forEach((q) => {
      const handler = () => {
        const qa = q.closest<HTMLElement>('.qa');
        if (!qa) return;
        const a = qa.querySelector<HTMLElement>('.a');
        if (!a) return;
        const open = qa.classList.contains('open');
        if (open) {
          qa.classList.remove('open');
          a.style.maxHeight = '';
          q.setAttribute('aria-expanded', 'false');
        } else {
          qa.classList.add('open');
          a.style.maxHeight = a.scrollHeight + 'px';
          q.setAttribute('aria-expanded', 'true');
        }
      };
      q.addEventListener('click', handler);
      accordionHandlers.push({ el: q, handler });
    });

    /* ----- count-up ----- */
    const nums = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const runCount = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.count || '0');
      const dur = 1400;
      const start = performance.now();
      const suf = el.dataset.suffix || '';
      if (reduce) {
        el.innerHTML = target + (suf ? `<span class="suf">${suf}</span>` : '');
        return;
      }
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(target * eased);
        el.innerHTML = val + (suf ? `<span class="suf">${suf}</span>` : '');
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const remaining = nums.slice();
    const checkCount = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (let i = remaining.length - 1; i >= 0; i--) {
        const r = remaining[i].getBoundingClientRect();
        if (r.top < vh * 0.85 && r.bottom > 0) {
          runCount(remaining[i]);
          remaining.splice(i, 1);
        }
      }
      if (!remaining.length) {
        window.removeEventListener('scroll', onScrollCount);
      }
    };
    let countTicking = false;
    const onScrollCount = () => {
      if (!countTicking) {
        countTicking = true;
        requestAnimationFrame(() => {
          countTicking = false;
          checkCount();
        });
      }
    };
    if (nums.length) {
      window.addEventListener('scroll', onScrollCount, { passive: true });
      checkCount();
    }

    /* ----- hero parallax ----- */
    let parallaxCleanup: (() => void) | null = null;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const v = document.querySelector<HTMLElement>('.hero-visual');
      if (v) {
        const blobs = v.querySelectorAll<HTMLElement>('.blob');
        const onMove = (e: PointerEvent) => {
          const r = v.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          blobs.forEach((b, i) => {
            const f = (i + 1) * 6;
            b.style.transform = `translate(${x * f}px,${y * f}px)`;
          });
        };
        const onLeave = () => {
          blobs.forEach((b) => {
            b.style.transform = '';
          });
        };
        v.addEventListener('pointermove', onMove);
        v.addEventListener('pointerleave', onLeave);
        parallaxCleanup = () => {
          v.removeEventListener('pointermove', onMove);
          v.removeEventListener('pointerleave', onLeave);
        };
      }
    }

    /* ----- cleanup ----- */
    return () => {
      window.clearTimeout(safetyTimer);
      window.removeEventListener('scroll', onScrollReveal);
      window.removeEventListener('resize', onScrollReveal);
      window.removeEventListener('scroll', onScrollCount);
      tabHandlers.forEach(({ el, type, handler }) => el.removeEventListener(type, handler));
      accordionHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler));
      parallaxCleanup?.();
    };
  }, [pathname]);

  return null;
}
