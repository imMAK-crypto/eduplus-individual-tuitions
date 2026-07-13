'use client';

import { useActionState, useState } from 'react';
import { saveContentAction } from '../actions';
import type { FormState } from '@/lib/adminTypes';
import { Text, Area, Toggle, StringList, SaveBar } from '../_components/fields';

export type SiteData = {
  name: string;
  tagline: string;
  url: string;
  phone: string;
  phoneRaw: string;
  whatsappRaw: string;
  email: string;
  addressShort: string;
  addressFull: string;
  plusCode: string;
  geo: { lat: number; lng: number };
  mapsLink: string;
  mapsEmbed: string;
  hours: string;
  hoursNote: string;
  areas: string[];
  foundedYear: string;
  waMsg: string;
  announce: { on: boolean; text: string; linkLabel: string };
  social: { instagram: string; facebook: string; youtube: string };
  listings: string[];
};

const initial: FormState = {};

export default function SiteEditor({ initial: data0 }: { initial: SiteData }) {
  const [d, setD] = useState<SiteData>(data0);
  const [state, action, pending] = useActionState(saveContentAction, initial);
  const f = (patch: Partial<SiteData>) => setD((p) => ({ ...p, ...patch }));

  return (
    <form action={action} className="editor">
      <input type="hidden" name="key" value="site" />
      <input type="hidden" name="data" value={JSON.stringify(d)} />

      <section className="a-section">
        <h2>Business</h2>
        <div className="a-row2">
          <Text label="Name" value={d.name} onChange={(v) => f({ name: v })} />
          <Text label="Tagline" value={d.tagline} onChange={(v) => f({ tagline: v })} />
        </div>
      </section>

      <section className="a-section">
        <h2>Contact</h2>
        <div className="a-row2">
          <Text label="Phone (display)" value={d.phone} onChange={(v) => f({ phone: v })} type="tel" />
          <Text label="Phone (dial)" value={d.phoneRaw} onChange={(v) => f({ phoneRaw: v })} hint="+91…" />
        </div>
        <div className="a-row2">
          <Text label="WhatsApp number" value={d.whatsappRaw} onChange={(v) => f({ whatsappRaw: v })} hint="countrycode+number, no +" />
          <Text label="Email" value={d.email} onChange={(v) => f({ email: v })} type="email" hint="leave blank to hide" />
        </div>
        <Text label="Default WhatsApp message" value={d.waMsg} onChange={(v) => f({ waMsg: v })} />
      </section>

      <section className="a-section">
        <h2>Hours &amp; trust</h2>
        <div className="a-row2">
          <Text label="Hours" value={d.hours} onChange={(v) => f({ hours: v })} />
          <Text label="Hours note" value={d.hoursNote} onChange={(v) => f({ hoursNote: v })} />
        </div>
        <div className="a-row2">
          <Text label="Founded year" value={d.foundedYear} onChange={(v) => f({ foundedYear: v })} />
          <div />
        </div>
      </section>

      <section className="a-section">
        <h2>Address &amp; map</h2>
        <Text label="Short address" value={d.addressShort} onChange={(v) => f({ addressShort: v })} />
        <Area label="Full address" value={d.addressFull} onChange={(v) => f({ addressFull: v })} />
        <div className="a-row2">
          <Text label="Plus code" value={d.plusCode} onChange={(v) => f({ plusCode: v })} />
          <div />
        </div>
        <div className="a-row2">
          <Text label="Latitude" value={String(d.geo.lat)} onChange={(v) => f({ geo: { ...d.geo, lat: Number(v) || 0 } })} />
          <Text label="Longitude" value={String(d.geo.lng)} onChange={(v) => f({ geo: { ...d.geo, lng: Number(v) || 0 } })} />
        </div>
        <Text label="Google Maps link" value={d.mapsLink} onChange={(v) => f({ mapsLink: v })} type="url" />
        <Text label="Map embed URL" value={d.mapsEmbed} onChange={(v) => f({ mapsEmbed: v })} type="url" />
      </section>

      <section className="a-section">
        <h2>Areas we serve</h2>
        <StringList label="Localities" values={d.areas} onChange={(v) => f({ areas: v })} />
      </section>

      <section className="a-section">
        <h2>Announcement bar</h2>
        <Toggle label="Show the announcement bar" value={d.announce.on} onChange={(v) => f({ announce: { ...d.announce, on: v } })} />
        <Text label="Text" value={d.announce.text} onChange={(v) => f({ announce: { ...d.announce, text: v } })} />
        <Text label="Call link label" value={d.announce.linkLabel} onChange={(v) => f({ announce: { ...d.announce, linkLabel: v } })} />
      </section>

      <section className="a-section">
        <h2>Social links</h2>
        <Text label="Instagram" value={d.social.instagram} onChange={(v) => f({ social: { ...d.social, instagram: v } })} type="url" />
        <Text label="Facebook" value={d.social.facebook} onChange={(v) => f({ social: { ...d.social, facebook: v } })} type="url" />
        <Text label="YouTube" value={d.social.youtube} onChange={(v) => f({ social: { ...d.social, youtube: v } })} type="url" />
      </section>

      <SaveBar pending={pending} state={state} />
    </form>
  );
}
