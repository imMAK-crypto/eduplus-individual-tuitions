# Eduplus website owner checklist

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
The home and About pages use branded illustrations until centre photos are available.

- [ ] Send 3–6 real photos (centre, a teacher with students, the building/signboard).
- [ ] Developer: swap `<BrandIllustration/>` for `next/image` (alt text + slots are ready).

## 3. Real reviews / testimonials
Share the verified Google Business Profile and its review link so families can find the right listing.

- [ ] Supply testimonials you have permission to publish and confirm the display names.

## 4. Programs / offerings to confirm
- [ ] **Home tuition** — do you visit homes, or only centre + online? (Site currently says centre + online.)
- [ ] **SAY / Improvement batches (+1/+2)** — now featured on home, /exam-prep and /programs; confirm batch dates each season.
- [ ] **Batch size** — add typical one-to-one / small-batch numbers if you'd like them shown.

## 5. Social + contact links
In [`lib/site.ts`](lib/site.ts) `social` (currently `#` placeholders — links are hidden-safe):

- [ ] Instagram, Facebook, YouTube URLs (also feed schema `sameAs`).

## 6. Search and measurement
- [ ] Confirm access to Google Search Console and Bing Webmaster Tools. Submit `https://www.eduplustuitions.in/sitemap.xml` in each.
- [ ] Confirm the public business name, address and phone before updating directories.
- [ ] Share the GA4 measurement ID and confirm the analytics settings with the owner.

## 7. Counsellor and tutors

- [ ] Supply the approved name, role, qualifications, experience and photo for each person.
- [ ] Confirm counselling eligibility, online availability, parent participation, consent and appointment arrangements.

---
_Built with honest defaults — nothing above blocks the site from going live; it just makes it more accurate and more "you"._
