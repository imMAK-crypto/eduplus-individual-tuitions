import LocationMap from '@/components/LocationMap';
import FaqItem from '@/components/FaqItem';
import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '@/lib/icons';
import { jsonLd, SITE, breadcrumbLd, telLink, waLink } from '@/lib/site';
import PageEnquiryForm from '@/components/PageEnquiryForm';
import contactContent from '@/content/contact.json';

export const metadata = pageMetadata({
  title: 'Contact & Directions in Ashokapuram',
  description: 'Find Eduplus behind Rajendra Hospital in Ashokapuram, Kozhikode. Get directions, check centre hours, or call or WhatsApp us to book a free demo class.',
  path: '/contact',
  imageTitle: 'Contact & admissions',
  imageSubtitle: 'Call · WhatsApp · free demo class',
});

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
        dangerouslySetInnerHTML={{ __html: jsonLd(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd('Contact', '/contact')) }}
      />
      {/* PAGE HERO */}
      <section className="page-hero" data-screen-label="Contact hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span>Contact</span>
          </div>
          <div style={{ maxWidth: '760px' }}>
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              Get in touch
            </span>
            <h1 className="display" style={{ margin: '.6rem 0 1rem' }}>
              Let's talk about your <span className="underline-accent">child's</span> learning.
            </h1>
            <p className="lead">
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
            <div>
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
                          <td>Monday – Friday</td>
                          <td>2:00 PM – 7:00 PM</td>
                        </tr>
                        <tr>
                          <td>Saturday &amp; Sunday</td>
                          <td>7:00 AM – 6:30 PM</td>
                        </tr>
                      </tbody>
                    </table>
                    <span className="t2" style={{ display: 'block', marginTop: '.4rem' }}>
                      Open all 7 days — flexible batches, online &amp; offline.
                    </span>
                  </span>
                </div>
              </div>

              <div
                className="map-wrap"
                style={{ marginTop: '1.4rem' }}
              >
                <LocationMap />
              </div>
            </div>

            {/* right: form */}
            <div className="form-card" id="enquire">
              <h3>Send an enquiry</h3>
              <p className="sub">
                Prepare a WhatsApp message asking for a callback or a free demo class.
              </p>
              <PageEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="planning-your-visit">
        <div className="container">
          <div className="legal prose">
            <h2 id="planning-your-visit">Plan a visit to the Ashokapuram centre</h2>
            <p>
              Use {SITE.addressFull} as the destination when planning your route. If Maps brings you to
              the hospital instead of the building behind it, call <a href={telLink}>{SITE.phone}</a> for
              help finding the entrance. Contact the centre before your first visit to agree on a time.
            </p>
            <p>Open driving directions from a nearby area, or edit the starting point in Maps.</p>
            <ul className="bullets">
              {SITE.areas.filter((area) => area !== 'Ashokapuram' && area !== 'Kozhikode city').map((area) => (
                <li key={area}>
                  <a href={`https://www.google.com/maps/dir/?${new URLSearchParams({
                    api: '1', origin: `${area}, Kozhikode`, destination: SITE.addressFull, travelmode: 'driving',
                  })}`} target="_blank" rel="noopener noreferrer">Directions from {area}</a>
                </li>
              ))}
            </ul>
            <h2>What to include when you contact us</h2>
            <p>
              Tell us the class, board, subject and whether you prefer the centre or an online lesson.
              Mention any upcoming exam so we can discuss the time available. You can compare the{' '}
              <Link href="/programs">programs by class</Link> and check <Link href="/fees">hourly fees</Link>
              {' '}first. For a remote demo, use the <Link href="/guides/online-tuition-demo-checklist">online demo checklist</Link>.
            </p>
            <p>
              For <Link href="/counselling">student counselling</Link>, ask about appointment availability,
              eligibility and session format. A short appointment enquiry is enough for first contact.
            </p>
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
          <div className="sh center">
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              Before you ask
            </span>
            <h2>
              Quick <span className="underline-accent">answers</span>
            </h2>
          </div>
          <div className="faq">
            {CONTACT_FAQ.map((f, i) => (
              <FaqItem key={i} q={f.q} answerHtml={f.a} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const CONTACT_FAQ: { q: string; a: string }[] = contactContent.faqs;
