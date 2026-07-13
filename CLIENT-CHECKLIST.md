# Eduplus website — client checklist before launch

Everything below is **content or account info only you have**. The site is fully built and works
today with safe, honest defaults; fill these in to make it 100% yours. Items are grouped by where
they live in the code so your developer can drop them in quickly.

## 1. Confirm the facts we sourced from your Google/Justdial/Quickerala listings
These appear in the copy **and** in the site's structured data (SEO). Confirm or correct in
[`lib/site.ts`](lib/site.ts):

- [ ] **Founded 2015** (`foundedYear`) — drives "since 2015" + the "years teaching" counter everywhere.
- [ ] **Exact map pin** (`geo.lat`, `geo.lng`) — currently approximate for Ashokapuram.
- [ ] **Phone number** (`phone` / `phoneRaw` / `whatsappRaw`) — confirm the WhatsApp + call number is correct.
- [ ] **Business email** (`email`, currently blank so it's hidden) — add to show it + include in schema.
- [ ] **Opening hours** (`hours` = "Mon–Fri 2 PM – 7 PM · Sat & Sun 7 AM – 6:30 PM") — correct if needed.
- [ ] **Fee structure** (`content/fees.json`) — per-hour rates ₹150–₹350 + ₹500 admission are live on `/fees`; confirm ICSE/IGCSE variations.
- [ ] **Areas served** (`areas`) — we listed Ashokapuram, Nadakkavu, Eranhipalam, Mankavu, Chevayur, Kozhikode city. Add/replace real ones.

## 2. Real photos
The hero + about illustrations are branded placeholders labelled "Photos coming soon".

- [ ] Send 3–6 real photos (centre, a teacher with students, the building/signboard).
- [ ] Developer: swap `<BrandIllustration/>` for `next/image` (alt text + slots are ready).

## 3. Real reviews / testimonials
We link to your **Google reviews** instead of showing invented quotes (honest + trusted).

- [ ] Optional: pick 3 favourite Google reviews to feature on-site → we'll add Review schema too.

## 4. Programs / offerings to confirm
- [ ] **NEET / JEE foundation** — is this actually offered? (Currently shown on /programs.)
- [ ] **Home tuition** — do you visit homes, or only centre + online? (Site currently says centre + online.)
- [ ] **SAY / Improvement batches (+1/+2)** — now featured on home, /exam-prep and /programs; confirm batch dates each season.
- [ ] **Batch size** — add typical one-to-one / small-batch numbers if you'd like them shown.

## 5. Social + contact links
In [`lib/site.ts`](lib/site.ts) `social` (currently `#` placeholders — links are hidden-safe):

- [ ] Instagram, Facebook, YouTube URLs (also feed schema `sameAs`).

## 6. Go-live / deployment (developer, in Vercel)
- [ ] Set **`NEXT_PUBLIC_SITE_URL`** to the real domain → fixes canonical, sitemap, OG, JSON-LD URLs.
- [ ] Set **`NEXT_PUBLIC_GSC_VERIFICATION`** to the Google Search Console token, then verify + submit `/sitemap.xml`.
- [ ] Confirm registered business name + add a real "last updated" date on `/privacy` if required.
- [ ] Optional: add analytics (GA4 / Vercel Analytics) and a Malayalam page variant.

---
_Built with honest defaults — nothing above blocks the site from going live; it just makes it more accurate and more "you"._
