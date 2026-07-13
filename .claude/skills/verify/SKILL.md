---
name: verify
description: Build, run and drive the Eduplus site to verify changes at the HTTP surface.
---

# Verify — Eduplus Individual Tuitions (Next.js 16 app router)

## Build & launch
```powershell
npm run build                 # production build (Turbopack); middleware-deprecation + NFT trace warnings are pre-existing noise
npx next start -p 3111        # do NOT use `npm start` on Windows — its ${PORT:-3000} is bash-only and breaks under cmd
```
Server is ready when `http://localhost:3111/` returns 200 (takes ~2s).

## Drive (HTTP surface)
Public pages are statically prerendered, so `Invoke-WebRequest` HTML checks cover copy,
schema (JSON-LD inline), nav/footer links, and the SSR output of client components
(forms, fee estimator initial state — e.g. default receipt totals prove the compute ran).

Routes worth hitting: `/`, `/about`, `/programs`, `/exam-prep`, `/fees`, `/why`,
`/contact`, `/sitemap.xml`, `/opengraph-image`, plus a 404 probe.

## Gotchas
- Searching HTML for numbers like "4.8" false-positives on SVG path data — always print context.
- `$home` is a reserved automatic variable in PowerShell; use another name.
- No playwright/puppeteer in the repo — client-side interaction (sliders, pickers,
  modal open) can only be verified at SSR/markup level unless a browser is added.
- `/admin` routes are dynamic + auth-gated (middleware redirect to /admin/login).
