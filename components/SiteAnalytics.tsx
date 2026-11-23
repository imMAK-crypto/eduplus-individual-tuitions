'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { GA_ID, analyticsAllowed } from '@/lib/analytics';

export default function SiteAnalytics() {
  const pathname = usePathname();
  const lastPage = useRef<string | null>(null);
  const allowed = analyticsAllowed(pathname);

  useEffect(() => {
    Object.assign(window, { [`ga-disable-${GA_ID}`]: !allowed });
    if (!allowed) lastPage.current = null;
  }, [allowed]);

  useEffect(() => {
    if (!allowed || lastPage.current === pathname) return;
    const { gtag } = window as Window & { gtag?: (...args: unknown[]) => void };
    if (!gtag) return;
    gtag('event', 'page_view', { page_location: window.location.origin + pathname, page_referrer: '' });
    lastPage.current = pathname;
  }, [allowed, pathname]);

  if (!allowed) return null;

  return (
    <>
      <Script
        id="ga4"
        strategy="afterInteractive"
        onReady={() => {
          if (lastPage.current === pathname) return;
          const { gtag } = window as Window & { gtag?: (...args: unknown[]) => void };
          gtag?.('event', 'page_view', { page_location: window.location.origin + pathname, page_referrer: '' });
          if (gtag) lastPage.current = pathname;
        }}
      >
        {`window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);};gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false});`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
    </>
  );
}
