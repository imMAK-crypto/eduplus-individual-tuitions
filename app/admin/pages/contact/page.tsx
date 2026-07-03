import { readContent } from '@/lib/content';
import ContactEditor, { type ContactData } from './ContactEditor';

export const dynamic = 'force-dynamic';

export default async function ContactEditorPage() {
  const data = await readContent<ContactData>('contact');
  return (
    <>
      <h1 className="page-title">Contact page</h1>
      <p className="page-sub">Edit the contact-page FAQ list.</p>
      <ContactEditor initial={data} />
    </>
  );
}
