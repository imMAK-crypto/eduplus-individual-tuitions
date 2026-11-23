'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Interactions() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/phone-showcase' || pathname?.startsWith('/admin')) return;
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

    return () => {
      tabHandlers.forEach(({ el, type, handler }) => el.removeEventListener(type, handler));
    };
  }, [pathname]);

  return null;
}
