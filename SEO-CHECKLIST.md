# SEO / AEO Checklist — eduplustuitions.in

Everything in code is done. This file lists what must be done **outside the code**
(owner / deployment actions) and how to operate the SEO features.

## 1. Deployment (do once)

- [ ] Point the domain: canonical host is **`eduplustuitions.in`** (no www).
      Add both `eduplustuitions.in` and `www.eduplustuitions.in` in Vercel —
      the app 301-redirects www → apex by itself (middleware), Vercel will too.
- [ ] Set env vars in Vercel (Production):
  - `NEXT_PUBLIC_SITE_URL=https://eduplustuitions.in`  ← every SEO URL derives from this
  - `NEXT_PUBLIC_GSC_VERIFICATION=<token>` (from Search Console, step 2)
  - `NEXT_PUBLIC_GA_ID=G-XXXXXXX` (optional — enables Google Analytics 4)
  - `INDEXNOW_KEY=<any 32-char hex string>` (e.g. output of `openssl rand -hex 16`)
  - plus the existing `AUTH_SECRET`, admin vars, etc.

## 2. Google Search Console + Bing (do once — highest value after deploy)

- [ ] https://search.google.com/search-console → add property `eduplustuitions.in`
      (domain property via DNS TXT, or URL-prefix via the meta-tag token above).
- [ ] Submit sitemap: `https://eduplustuitions.in/sitemap.xml`
- [ ] https://www.bing.com/webmasters → add site (can import from GSC in 2 clicks),
      submit the same sitemap. **Bing powers ChatGPT search & Copilot answers.**

## 3. IndexNow (after every deploy / big content change)

```bash
curl -X POST https://eduplustuitions.in/api/indexnow -H "x-indexnow-secret: $INDEXNOW_KEY"
```
Instantly notifies Bing/Copilot/ChatGPT-search indexing of all page URLs.

## 4. Google Business Profile (owner — the #1 local ranking factor)

- [ ] Claim/create the profile at https://business.google.com for
      "Eduplus Individual Tuitions", Pootholi Building, behind Rajendra Hospital,
      Ashokapuram, Kozhikode 673001 — category **"Tutoring service"**.
- [ ] Use EXACTLY the same name, address and phone (+91 70123 70310) as the website.
- [ ] Add the website link, hours (Mon–Fri 2–7 PM, Sat–Sun 7 AM–6:30 PM), photos.
- [ ] Ask happy parents for Google reviews — reviews decide the local 3-pack.
- [ ] Once ≥5 real reviews exist, tell the developer the live rating/count so an
      `aggregateRating` can be added to the site schema (never fabricate it).

## 5. Citations & socials (owner)

- [ ] Existing: Justdial ✓, Quickerala ✓ — update both to the new domain
      `eduplustuitions.in` and verify NAP (name/address/phone) matches exactly.
- [ ] Add listings: Sulekha, UrbanPro (big for tuition), Asklaila — same NAP.
- [ ] Real Instagram / Facebook / YouTube URLs → enter them in **Admin → Global
      settings** (currently `#` placeholders). They auto-flow into `sameAs` schema.
- [ ] Add a real email in Admin → Global settings (currently empty).

## 6. Facts to confirm (currently claimed on the site)

- [ ] Founded **2015** (site copy + schema say "since 2015")
- [ ] Exact map pin / Plus Code `7Q8J+F3` and geo `11.2481, 75.7947`
- [ ] Opening hours as above

## What's already implemented in code (for reference)

- Canonical domain + www→apex 301 (middleware), per-page canonicals
- 9 local-SEO landing pages (`/tuition-in-nadakkavu|eranhipalam|mankavu|chevayur`,
  `/home-tuition-calicut`, `/sslc-tuition-kozhikode`, `/plus-two-tuition-kozhikode`,
  `/cbse-tuition-kozhikode`, `/online-tuition-kerala`) — unique copy, FAQs,
  Service/FAQ/Breadcrumb/WebPage(Speakable) schema, footer-linked, in sitemap
- Org schema: EducationalOrganization+LocalBusiness with geo, hours, offer catalog
- Course schema with courseMode Online/Onsite; fee Offer schema; FAQPage everywhere
- AEO: `/llms.txt`, AI-crawler allows in robots.txt (GPTBot, ClaudeBot, Perplexity,
  Google-Extended, Bingbot, …), Speakable schema, geo meta tags (IN-KL/ICBM)
- Malayalam FAQ block on home + Malayalam keywords
- Per-page OG share images (`/og?title=…`), PWA icons 192/512
- Sitemap with honest lastModified (bump `CONTENT_UPDATED` in `lib/site.ts` when
  copy changes), GA4 via env, IndexNow endpoint

## Content roadmap (next wins, when ready)

1. A simple blog/answers section targeting question queries ("What is the SAY exam
   in Kerala?", "SSLC grace marks", "Plus Two improvement exam dates 2026–27") —
   the strongest AI-Overview citation magnet for this niche.
2. More locality pages once students actually come from there (Palazhi, Medical
   College, Vellayil…) — only with genuinely unique copy.
3. Real photos of the centre (Google loves them on GBP + site).
