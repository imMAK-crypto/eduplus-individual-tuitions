import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, telLink, waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Eduplus Individual Tuitions, Ashokapuram, Kozhikode collects and uses the information you share through this website and enquiry forms.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main id="main">
      {/* PAGE HERO */}
      <section className="page-hero" data-screen-label="Privacy hero">
        <div className="container">
          <div className="crumbs reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Privacy</span>
          </div>
          <div style={{ maxWidth: '760px' }}>
            <span className="eyebrow reveal" style={{ color: 'var(--blue)' }}>
              Your privacy
            </span>
            <h1 className="display reveal" style={{ margin: '.6rem 0 1rem' }}>
              Privacy <span className="underline-accent">Policy</span>
            </h1>
            <p className="lead reveal">
              We keep this simple: we only use what you share to help your child, and we never sell
              your details.
            </p>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section" data-screen-label="Privacy body">
        <div className="container">
          <div className="legal prose reveal">
            <h2>What we collect</h2>
            <p>
              When you use our enquiry or “Book a Free Demo” forms, you may share your name, phone
              number, your child’s class and board, subjects of interest and any message you write.
              We collect only what you choose to give us.
            </p>

            <h2>How we use it</h2>
            <ul className="bullets">
              <li>To call or message you back and arrange a free demo class.</li>
              <li>To understand your child’s needs and recommend the right tuition.</li>
              <li>To respond to questions you send us by phone, WhatsApp or the forms.</li>
            </ul>

            <h2>How your enquiry is sent</h2>
            <p>
              Our forms open WhatsApp with your enquiry pre-filled so you can send it to us
              directly. Messages you send over WhatsApp are handled under WhatsApp’s own privacy
              terms. This website does not run advertising or third-party tracking cookies.
            </p>

            <h2>Sharing</h2>
            <p>
              We do not sell or rent your information. We share it only with our own teachers and
              staff who need it to help your child, and where required by law.
            </p>

            <h2>Keeping and removing your data</h2>
            <p>
              We keep enquiry details only as long as needed to help you. You can ask us to update
              or delete your information at any time — just contact us.
            </p>

            <h2>Contact us</h2>
            <p>
              Questions about your privacy? Call{' '}
              <a href={telLink} style={{ color: 'var(--blue)', fontWeight: 700 }}>
                {SITE.phone}
              </a>{' '}
              or{' '}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--green-600)', fontWeight: 700 }}
              >
                message us on WhatsApp
              </a>
              . {SITE.name}, {SITE.addressFull}.
            </p>

            <p style={{ color: 'var(--g-500)', fontSize: '.88rem', marginTop: '1.6rem' }}>
              Last updated: July 2026.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
