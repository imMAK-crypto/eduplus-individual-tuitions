import { readContent } from '@/lib/content';
import SiteEditor, { type SiteData } from './SiteEditor';

export const dynamic = 'force-dynamic';

export default async function SiteSettingsPage() {
  const data = await readContent<SiteData>('site');
  return (
    <>
      <h1 className="page-title">Global settings</h1>
      <p className="page-sub">
        These details appear across the whole site — header, footer, contact, maps and SEO.
      </p>
      <SiteEditor initial={data} />
    </>
  );
}
