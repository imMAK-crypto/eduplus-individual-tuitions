'use client';

import { useActionState, useState } from 'react';
import { saveContentAction } from '../../actions';
import type { FormState } from '@/lib/adminTypes';
import { FaqList, SaveBar, type Faq } from '../../_components/fields';

export type ContactData = { faqs: Faq[] };

const initial: FormState = {};

export default function ContactEditor({ initial: data0 }: { initial: ContactData }) {
  const [d, setD] = useState<ContactData>(data0);
  const [state, action, pending] = useActionState(saveContentAction, initial);
  return (
    <form action={action} className="editor">
      <input type="hidden" name="key" value="contact" />
      <input type="hidden" name="data" value={JSON.stringify(d)} />
      <section className="a-section">
        <h2>FAQs</h2>
        <FaqList items={d.faqs} onChange={(v) => setD({ faqs: v })} />
      </section>
      <SaveBar pending={pending} state={state} />
    </form>
  );
}
