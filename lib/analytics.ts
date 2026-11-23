export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function analyticsAllowed(path: string): boolean {
  return Boolean(GA_ID && /^G-[A-Z0-9]+$/.test(GA_ID)) &&
    !/^\/(?:admin|api|(?:ml\/)?counselling|phone-showcase)(?:\/|$)/.test(path);
}

export function trackContact(event: 'click_to_call' | 'click_whatsapp' | 'prepare_whatsapp_enquiry') {
  if (!analyticsAllowed(window.location.pathname)) return;
  const { origin, pathname } = window.location;
  const { gtag } = window as Window & {
    gtag?: (command: 'event', event: string, options: Record<string, string>) => void;
  };
  gtag?.('event', event, { page_location: origin + pathname, page_referrer: '' });
}
