# Eduplus SEO operations

## Production

The canonical site is https://www.eduplustuitions.in. The apex and the original
`eduplus-individual-tuitions.vercel.app` hostname redirect to the same path on
the canonical host. The canonical HTTPS origin is defined in
`content/site.json`. Build and test changes with `npm run build`.

- Sitemap: https://www.eduplustuitions.in/sitemap.xml
- Crawler rules: https://www.eduplustuitions.in/robots.txt
- Site summary: https://www.eduplustuitions.in/llms.txt
- Study guides: https://www.eduplustuitions.in/guides

## Google and Bing

- In [Google Search Console](https://search.google.com/search-console), verify
  the domain property via DNS. For the HTTPS www URL-prefix property, the
  alternate verification method is `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel.
- In [Bing Webmaster Tools](https://www.bing.com/webmasters), import the verified
  site or use `NEXT_PUBLIC_BING_VERIFICATION` for meta-tag verification.
- Submit the canonical sitemap to both tools. Inspect the counselling page, the
  study guide hub and the Malayalam page after publishing. Use the dashboards
  to check indexing, search queries, and field Core Web Vitals as data arrives.

## IndexNow

The production project uses `INDEXNOW_KEY` and serves its verification file at
`/<key>.txt`. Submit changed URLs once the deployment is live. With no URL
arguments, the command submits all canonical URLs in the live sitemap.

```sh
vercel env run -e production -- npm run indexnow
vercel env run -e production -- npm run indexnow -- /counselling /guides
```

HTTP 200 acknowledges the submission. HTTP 202 means key validation is pending.
IndexNow informs participating engines about changes. Check indexing in the
search engine's dashboard.

## Conversion measurement

Set `NEXT_PUBLIC_GA_ID` only when the owner supplies the intended GA4 property.
In the GA4 data stream, disable Enhanced Measurement and advertising features.
The site emits page views and the events `click_to_call`, `click_whatsapp` and
`prepare_whatsapp_enquiry` with the path only. Counselling, admin and showcase
pages are excluded. The last event measures preparation of a WhatsApp message.
The visitor still has to send it to Eduplus. Verify events in GA4 Realtime and
choose the contact events the owner wants to mark as key events.

## Local profile and credentials

- Confirm the exact pin against the entrance at Pootholi Building, behind
  Rajendra Hospital, Ashokapuram, Kozhikode 673001. Replace the address-search
  URL with a verified business profile link when available.
- Claim or verify the [Google Business Profile](https://business.google.com/)
  under the owner's account. Confirm the public name, primary category,
  address, phone (+91 70123 70310), website and hours. Update existing
  [Justdial](https://www.justdial.com/Kozhikode/Eduplus-Tuitions-Behind-Rajendra-Nursing-Home-Balan-K-Nair-Road-Kozhikode-HO/0495PX495-X495-211116145336-D9C3_BZDET)
  and [Quickerala](https://www.quickerala.com/calicut/ashokapuram/eduplus/291423)
  entries to match once confirmed.
- Add the exact Maps review link when available. Invite actual families to
  leave honest feedback. Google excludes business-controlled
  [self-serving review rich results](https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful).
- In Admin → Global settings, add the verified business email and real
  social-profile URLs. Add confirmed directories to `content/site.json` under
  `listings` after the records match.
- Get permission to use real centre and staff photos. Obtain the approved names,
  roles and qualifications for tutors and the counsellor. For counselling,
  also confirm eligible ages, access for non-tuition students, online session
  availability, parent participation, consent and the appointment process.
- Ask the owner before arranging outreach to nearby schools, parent groups,
  or local publications.

## Maintenance

Recheck sitemap URLs, titles, descriptions and site speed after major changes.
Review the official examination notices linked by each guide when a new cycle
begins. Add a sitemap modification date when a page has a real publication or
substantial update date. Keep translated pages self-canonical and update both
language links when adding a translation.
