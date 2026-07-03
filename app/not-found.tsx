import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main">
      <section className="section">
        <div className="container err-page">
          <div className="code">
            4<span>0</span>4
          </div>
          <h1>This page took a study break.</h1>
          <p>
            The page you’re looking for moved or never existed. Let’s get you back to learning —
            one-to-one, LKG to Plus Two.
          </p>
          <div className="err-actions">
            <Link className="btn btn-red btn-lg" href="/">
              Back to home
            </Link>
            <Link className="btn btn-outline btn-lg" href="/programs">
              See our programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
