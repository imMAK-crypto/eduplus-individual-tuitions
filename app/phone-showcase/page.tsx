'use client';

import { useEffect, useRef, useState } from 'react';

type Page = { nm: string; ds: string; src: string; pill: string };
const PAGES: Page[] = [
  { nm: 'Home', ds: 'Hero · programs · results · FAQ', src: '/', pill: 'Landing page' },
  { nm: 'About', ds: 'Story · mission · approach', src: '/about', pill: 'Who we are' },
  { nm: 'Programs', ds: 'Class 1–12 · all boards', src: '/programs', pill: 'Courses' },
  { nm: 'Fees', ds: 'Fee ladder · estimator', src: '/fees', pill: 'Fee structure' },
  { nm: 'Contact', ds: 'Enquiry · map · hours', src: '/contact', pill: 'Get in touch' },
];

export default function PhoneShowcasePage() {
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');

  useEffect(() => {
    document.body.classList.add('showcase-body', `sz-${size}`);
    return () => {
      document.body.classList.remove('showcase-body', 'sz-sm', 'sz-md', 'sz-lg');
    };
  }, [size]);

  return (
    <div className="wrap">
      <header className="head">
        <div className="kicker">Mobile Preview</div>
        <div className="sc-logo">
          <span className="e">E</span>
          <span className="d">d</span>
          <span className="u">u</span>
          <span className="p">p</span>
          <span className="l">l</span>
          <span className="u2">u</span>
          <span className="s">s</span>
          <span className="plus">+</span>
        </div>
        <h1>Every page, in your pocket</h1>
        <p>
          All four pages of the Eduplus site shown live inside real phone frames — exactly how
          parents in Ashokapuram will see them. Scroll inside any phone, or open a page full-screen.
        </p>
        <div className="bar">
          <div className="seg" role="group" aria-label="Frame size">
            <button
              className={size === 'sm' ? 'active' : ''}
              onClick={() => setSize('sm')}
            >
              Small
            </button>
            <button
              className={size === 'md' ? 'active' : ''}
              onClick={() => setSize('md')}
            >
              Medium
            </button>
            <button
              className={size === 'lg' ? 'active' : ''}
              onClick={() => setSize('lg')}
            >
              Large
            </button>
          </div>
          <a className="open" href="/" target="_blank" rel="noopener noreferrer">
            Open full site ↗
          </a>
        </div>
      </header>

      <div className="rail">
        {PAGES.map((p) => (
          <Device key={p.nm} page={p} />
        ))}
      </div>

      <p className="foot">
        Tip: each frame is the real, scrollable page. <br />
        Pages —{' '}
        <a href="/" target="_blank" rel="noopener noreferrer">
          Home
        </a>{' '}
        ·{' '}
        <a href="/about" target="_blank" rel="noopener noreferrer">
          About
        </a>{' '}
        ·{' '}
        <a href="/programs" target="_blank" rel="noopener noreferrer">
          Programs
        </a>{' '}
        ·{' '}
        <a href="/contact" target="_blank" rel="noopener noreferrer">
          Contact
        </a>
      </p>
    </div>
  );
}

function Device({ page }: { page: Page }) {
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 4000);
    return () => window.clearTimeout(t);
  }, []);

  const pin = () => {
    try {
      iframeRef.current?.contentWindow?.scrollTo(0, 0);
    } catch {}
  };

  return (
    <div className={`device ${loading ? 'loading' : ''}`}>
      <div className="phone">
        <span className="btn-s v1" />
        <span className="btn-s v2" />
        <span className="btn-s v3" />
        <span className="btn-s pwr" />
        <div className="screen">
          <span className="notch" />
          <span className="speaker" />
          <div className="screen-inner">
            <iframe
              ref={iframeRef}
              title={`${page.nm} page preview`}
              loading="lazy"
              src={page.src}
              onLoad={() => {
                setLoading(false);
                pin();
                [60, 200, 500, 1000, 1800].forEach((t) => window.setTimeout(pin, t));
              }}
            />
          </div>
          <span className="home-ind" />
        </div>
      </div>
      <div className="cap">
        <div className="nm">{page.nm}</div>
        <div className="ds">{page.ds}</div>
        <div className="pill">{page.pill}</div>
      </div>
    </div>
  );
}
