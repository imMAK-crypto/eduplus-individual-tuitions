import fees from '@/content/fees.json';
import { SITE } from '@/lib/site';

export function hourlyTuitionOffer(tier: (typeof fees.tiers)[number]) {
  return {
    '@type': 'Offer',
    name: `Tuition · ${tier.range}`,
    url: `${SITE.url}/fees#${tier.id}`,
    description: `One-time admission fee ₹${fees.admissionFee}. Fees may vary for ICSE and IGCSE.`,
    price: tier.feePerHour,
    priceCurrency: 'INR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: tier.feePerHour,
      priceCurrency: 'INR',
      referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'HUR' },
    },
    offeredBy: { '@id': `${SITE.url}/#organization` },
  };
}
