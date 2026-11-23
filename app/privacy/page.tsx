import { pageMetadata } from '@/lib/metadata';
import { analyticsAllowed } from '@/lib/analytics';
import Link from 'next/link';
import { SITE, telLink, waLink } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'Find out what Eduplus collects when you make a tuition enquiry, how it is used and how to ask us to update or remove your details.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <main id="main">
      {/* PAGE HERO */}
      <section className="page-hero" data-screen-label="Privacy hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Privacy</span>
          </div>
          <div style={{ maxWidth: '760px' }}>
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              Your privacy
            </span>
            <h1 className="display" style={{ margin: '.6rem 0 1rem' }}>
              Privacy <span className="underline-accent">Policy</span>
            </h1>
            <p className="lead">
              We keep this simple: we only use what you share to help your child, and we never sell
              your details.
            </p>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section" data-screen-label="Privacy body">
        <div className="container">
          <div className="legal prose">
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
              Our forms prepare your enquiry so you can open WhatsApp and send it to us directly.
              WhatsApp handles sent messages under its own privacy terms. The interactive Google Maps
              embed loads when you choose to open it.
            </p>

            {analyticsAllowed('/privacy') && (
              <>
                <h2>Website analytics</h2>
                <p>
                  Google Analytics helps us count page visits and use of the call, WhatsApp and enquiry
                  buttons. The measurement excludes counselling pages and does not include enquiry text
                  or form fields. Analytics can use browser cookies to measure visits.
                </p>
              </>
            )}

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
              Last updated 23 November 2026.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
