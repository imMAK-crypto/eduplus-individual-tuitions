'use client';

import { useActionState, useState } from 'react';
import { saveContentAction } from '../../actions';
import type { FormState } from '@/lib/adminTypes';
import { Text, Area, StringList, FaqList, SaveBar, type Faq } from '../../_components/fields';

export type HomeData = {
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    examLink: string;
    chips: string[];
  };
  exam: { tag: string; title: string; accent: string; lead: string };
  faqs: Faq[];
};

const initial: FormState = {};

export default function HomeEditor({ initial: data0 }: { initial: HomeData }) {
  const [d, setD] = useState<HomeData>(data0);
  const [state, action, pending] = useActionState(saveContentAction, initial);
  const hero = (patch: Partial<HomeData['hero']>) => setD((p) => ({ ...p, hero: { ...p.hero, ...patch } }));
  const exam = (patch: Partial<HomeData['exam']>) => setD((p) => ({ ...p, exam: { ...p.exam, ...patch } }));

  return (
    <form action={action} className="editor">
      <input type="hidden" name="key" value="home" />
      <input type="hidden" name="data" value={JSON.stringify(d)} />

      <section className="a-section">
        <h2>Hero</h2>
        <Text label="Eyebrow" value={d.hero.eyebrow} onChange={(v) => hero({ eyebrow: v })} />
        <Text label="Headline" value={d.hero.title} onChange={(v) => hero({ title: v })} />
        <Text label="Accent phrase" value={d.hero.accent} onChange={(v) => hero({ accent: v })} hint="the part of the headline that gets the yellow underline" />
        <Area label="Lead paragraph" value={d.hero.lead} onChange={(v) => hero({ lead: v })} />
        <div className="a-row2">
          <Text label="Primary button" value={d.hero.ctaPrimary} onChange={(v) => hero({ ctaPrimary: v })} />
          <Text label="Secondary button" value={d.hero.ctaSecondary} onChange={(v) => hero({ ctaSecondary: v })} />
        </div>
        <Text label="Exam link text" value={d.hero.examLink} onChange={(v) => hero({ examLink: v })} />
        <StringList label="Feature chips" values={d.hero.chips} onChange={(v) => hero({ chips: v })} />
      </section>

      <section className="a-section">
        <h2>Exam-target section</h2>
        <Text label="Tag" value={d.exam.tag} onChange={(v) => exam({ tag: v })} />
        <Text label="Heading" value={d.exam.title} onChange={(v) => exam({ title: v })} />
        <Text label="Accent phrase" value={d.exam.accent} onChange={(v) => exam({ accent: v })} />
        <Area label="Lead paragraph" value={d.exam.lead} onChange={(v) => exam({ lead: v })} />
      </section>

      <section className="a-section">
        <h2>FAQs</h2>
        <FaqList items={d.faqs} onChange={(v) => setD((p) => ({ ...p, faqs: v }))} />
      </section>

      <SaveBar pending={pending} state={state} />
    </form>
  );
}
