import type { Metadata } from 'next';
import Link from 'next/link';
import { ClockIcon, PhoneIcon, PinIcon, PlusIcon, WhatsAppIcon } from '@/lib/icons';
import { SITE, breadcrumbLd, telLink, waLink } from '@/lib/site';
import PageEnquiryForm from '@/components/PageEnquiryForm';

export const metadata: Metadata = {
  title: 'Contact & Admissions',
  description:
    'Contact Eduplus Individual Tuitions in Ashokapuram, Kozhikode. Call, WhatsApp or send an enquiry to book a free demo class — one-to-one tuition LKG–12, online & offline. Behind Rajendra Hospital, Kozhikode 673001.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Eduplus Individual Tuitions — Ashokapuram, Kozhikode',
    description:
      'Call, WhatsApp or enquire to book a free demo class. One-to-one tuition LKG–12, online & offline, behind Rajendra Hospital, Kozhikode 673001.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CONTACT_FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a.replace(/<[^>]+>/g, '').replace(/\[[^\]]*\]/g, '').replace(/\s+/g, ' ').trim(),
      },
    })),
  };
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd('Contact', '/contact')) }}
      />
      {/* PAGE HERO */}
      <section className="page-hero" data-screen-label="Contact hero">
        <div className="container">
          <div className="crumbs reveal">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Contact</span>
          </div>
          <div style={{ maxWidth: '760px' }}>
            <span className="eyebrow reveal" style={{ color: 'var(--blue)' }}>
              Get in touch
            </span>
            <h1 className="display reveal" style={{ margin: '.6rem 0 1rem' }}>
              Let's talk about your <span className="underline-accent">child's</span> learning.
            </h1>
            <p className="lead reveal">
              Call us, message on WhatsApp, or send the form below. We'll get back quickly and help
              you book a free demo class — no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section
        className="section"
        style={{ paddingTop: 'clamp(2rem,5vw,3rem)' }}
        data-screen-label="Contact options"
      >
        <div className="container">
          <div className="contact-grid">
            {/* left: methods */}
            <div className="reveal">
              <div className="cc-list">
                <a className="cc" href={telLink}>
                  <span
                    className="ic"
                    style={{ background: 'var(--red-50)', color: 'var(--red)' }}
                  >
                    <PhoneIcon />
                  </span>
                  <span>
                    <span className="t1">Call us</span>
                    <span className="t2">{SITE.phone}</span>
                  </span>
                </a>
                <a className="cc" href={waLink()} target="_blank" rel="noopener noreferrer">
                  <span
                    className="ic"
                    style={{ background: 'var(--green-50)', color: 'var(--green-600)' }}
                  >
                    <WhatsAppIcon />
                  </span>
                  <span>
                    <span className="t1">WhatsApp</span>
                    <span className="t2">Fastest reply — tap to chat</span>
                  </span>
                </a>
                <a
                  className="cc"
                  href={SITE.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className="ic"
                    style={{ background: 'var(--blue-50)', color: 'var(--blue)' }}
                  >
                    <PinIcon />
                  </span>
                  <span>
                    <span className="t1">Visit the centre</span>
                    <span className="t2">{SITE.addressFull}</span>
                  </span>
                </a>
                <div className="cc">
                  <span
                    className="ic"
                    style={{ background: 'var(--yellow-50)', color: '#9a7100' }}
                  >
                    <ClockIcon />
                  </span>
                  <span style={{ flex: 1 }}>
                    <span className="t1">Opening hours</span>
                    <table className="hours-table">
                      <tbody>
                        <tr>
                          <td>Monday – Saturday</td>
                          <td>10:00 AM – 8:00 PM</td>
                        </tr>
                        <tr>
                          <td>Sunday</td>
                          <td>By appointment</td>
                        </tr>
                      </tbody>
                    </table>
                    <span className="t2" style={{ display: 'block', marginTop: '.4rem' }}>
                      Flexible morning &amp; evening batches — online &amp; offline.
                    </span>
                  </span>
                </div>
              </div>

              <div
                className="map-wrap reveal"
                style={{ marginTop: '1.4rem', minHeight: '280px' }}
              >
                <iframe
                  title="Map to Eduplus, Ashokapuram, Kozhikode"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={SITE.mapsEmbed}
                  style={{ minHeight: '280px' }}
                />
              </div>
            </div>

            {/* right: form */}
            <div className="form-card reveal" id="enquire">
              <h3>Send an enquiry</h3>
              <p className="sub">
                Fill this in and we'll call you back to arrange a free demo class.
              </p>
              <PageEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section"
        style={{ background: 'var(--soft)' }}
        data-screen-label="Contact FAQ"
      >
        <div className="container">
          <div className="sh center reveal">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              Before you ask
            </span>
            <h2>
              Quick <span className="underline-accent">answers</span>
            </h2>
          </div>
          <div className="faq">
            {CONTACT_FAQ.map((f, i) => (
              <div key={i} className="qa">
                <button className="q" aria-expanded="false">
                  {f.q}
                  <span className="ic">
                    <PlusIcon />
                  </span>
                </button>
                <div className="a">
                  <p dangerouslySetInnerHTML={{ __html: f.a }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const CONTACT_FAQ: { q: string; a: string }[] = [
  {
    q: 'How soon will you reply?',
    a: 'WhatsApp gets the fastest response during working hours. Callback requests are usually returned the same day.',
  },
  {
    q: 'Is the demo class really free?',
    a: 'Yes — your first demo class is free with no obligation to continue.',
  },
  {
    q: 'Do you offer online tuition?',
    a: 'Yes — every programme runs both offline at our Ashokapuram centre and live online, with the same one-to-one attention.',
  },
  {
    q: 'How do I pay the fees, and what do they cost?',
    a: 'Fees depend on the class, board and batch type (one-to-one, small batch, online or offline). Message or call us and we’ll share current fees and set up a free demo.',
  },
];
