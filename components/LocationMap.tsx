'use client';

import { useState } from 'react';
import { PinIcon } from '@/lib/icons';
import { SITE } from '@/lib/site';

export default function LocationMap() {
  const [active, setActive] = useState(false);
  return active ? (
    <iframe title="Map of the Eduplus centre in Ashokapuram, Kozhikode" src={SITE.mapsEmbed} referrerPolicy="no-referrer" />
  ) : (
    <div className="map-preview">
      <PinIcon />
      <p>{SITE.addressFull}</p>
      <button className="btn btn-outline" onClick={() => setActive(true)}>Load Google Maps</button>
      <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer">Open directions</a>
    </div>
  );
}
