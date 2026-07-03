import Link from 'next/link';

export const dynamic = 'force-dynamic';

const CARDS = [
  { href: '/admin/site', title: 'Global settings', desc: 'Phone, hours, rating, address, areas, social links, announcement bar.' },
  { href: '/admin/pages/home', title: 'Home page', desc: 'Hero headline & lead, exam-target text, and the FAQ list.' },
  { href: '/admin/pages/contact', title: 'Contact page', desc: 'The contact-page FAQ list.' },
  { href: '/admin/media', title: 'Media', desc: 'Upload photos to use across the site.' },
  { href: '/admin/users', title: 'Users', desc: 'Add or remove admins and change your password.' },
];

export default function Dashboard() {
  return (
    <>
      <h1 className="page-title">Dashboard</h1>
      <p className="page-sub">
        Edit your website content below. In production, saving publishes to your live site
        automatically.
      </p>
      <div className="a-grid">
        {CARDS.map((c) => (
          <Link key={c.href} href={c.href} className="a-card">
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
