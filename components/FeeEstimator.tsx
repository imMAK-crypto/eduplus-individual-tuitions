'use client';

import { useState } from 'react';
import { waLink } from '@/lib/site';
import { WhatsAppIcon } from '@/lib/icons';
import fees from '@/content/fees.json';

const inr = (n: number) => '₹' + n.toLocaleString('en-IN');

/**
 * Interactive fee estimator — pick a class group and weekly hours, get an
 * itemised, receipt-style estimate with a prefilled WhatsApp handoff.
 * Pure client widget; the authoritative numbers live in content/fees.json.
 */
export default function FeeEstimator() {
  const [tierId, setTierId] = useState('t1');
  const [hrs, setHrs] = useState(5);
  const tier = fees.tiers.find((t) => t.id === tierId) || fees.tiers[0];

  const weekly = tier.feePerHour * hrs;
  const monthly = weekly * 4; // ≈ 4 weeks — an estimate, clearly labelled
  const firstMonth = monthly + fees.admissionFee;

  const waMsg =
    `Hi Eduplus! Fee enquiry:\n` +
    `Class group: ${tier.range}\n` +
    `Rate: ${inr(tier.feePerHour)}/hour\n` +
    `Planned hours: ~${hrs} hrs/week\n` +
    `Estimated monthly: ${inr(monthly)}\n` +
    `Please confirm my exact fee and a free demo slot.`;

  return (
    <div className="fee-est">
      {/* left: controls */}
      <div className="fe-controls">
        <div className="fe-field">
          <span className="fe-label" id="fe-tier-label">
            1 · Choose the class group
          </span>
          <div className="fe-tiers" role="radiogroup" aria-labelledby="fe-tier-label">
            {fees.tiers.map((t) => (
              <button
                key={t.id}
                type="button"
                role="radio"
                aria-checked={t.id === tier.id}
                className={`fe-tier ${t.id === tier.id ? 'on' : ''}`}
                onClick={() => setTierId(t.id)}
              >
                <span className="ft-r">{t.range.replace('Class ', '')}</span>
                <span className="ft-f">
                  {inr(t.feePerHour)}
                  <em>/hr</em>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="fe-field">
          <label className="fe-label" htmlFor="fe-hrs">
            2 · Hours per week — <strong>{hrs} {hrs === 1 ? 'hour' : 'hours'}</strong>
          </label>
          <input
            id="fe-hrs"
            className="fe-range"
            type="range"
            min={1}
            max={14}
            step={1}
            value={hrs}
            onChange={(e) => setHrs(Number(e.target.value))}
            aria-valuetext={`${hrs} hours per week`}
          />
          <div className="fe-scale" aria-hidden="true">
            <span>1 hr</span>
            <span>7 hrs</span>
            <span>14 hrs</span>
          </div>
        </div>
      </div>

      {/* right: receipt */}
      <div className="fe-receipt" aria-live="polite">
        <div className="fr-head">
          <span className="fr-brand">EDUPLUS · FEE ESTIMATE</span>
          <span className="fr-sub">{tier.range}</span>
        </div>
        <dl className="fr-lines">
          <div className="fr-line">
            <dt>Rate per hour</dt>
            <dd>{inr(tier.feePerHour)}</dd>
          </div>
          <div className="fr-line">
            <dt>Hours × week</dt>
            <dd>{hrs} hrs</dd>
          </div>
          <div className="fr-line">
            <dt>Weekly</dt>
            <dd>{inr(weekly)}</dd>
          </div>
          <div className="fr-line em">
            <dt>Monthly (≈ 4 weeks)</dt>
            <dd>{inr(monthly)}</dd>
          </div>
          <div className="fr-line">
            <dt>Admission (one-time)</dt>
            <dd>{inr(fees.admissionFee)}</dd>
          </div>
          <div className="fr-line total">
            <dt>First month total</dt>
            <dd>{inr(firstMonth)}</dd>
          </div>
        </dl>
        <p className="fr-note">* Estimate only. Fee may vary for ICSE / IGCSE syllabus.</p>
        <div className="fr-cta">
          <a
            className="btn btn-green btn-block"
            href={waLink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Confirm exact fee on WhatsApp
          </a>
          <button
            type="button"
            className="btn btn-outline btn-block"
            data-open-modal
            data-class={tier.classes[0]}
          >
            Book a free demo first
          </button>
        </div>
      </div>
    </div>
  );
}
