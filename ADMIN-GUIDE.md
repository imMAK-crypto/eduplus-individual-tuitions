# Eduplus admin panel — how to edit your website

Your site now has a built-in admin panel. No code needed to change content.

## First-time setup (do this once)

1. Go to **`/admin`** (e.g. `https://yourdomain.com/admin`).
2. You’ll land on a **one-time setup** screen. Create your **username and password**.
   (Tip: click **Generate strong** for a secure password, and save it somewhere safe.)
3. That’s it — you’re signed in.

After the first account exists, the setup screen locks itself; everyone else signs in at
**`/admin/login`**.

## What you can edit

| Section | What it controls |
|---|---|
| **Global settings** | Phone, WhatsApp, email, hours, address & map, areas you serve, social links, and the announcement bar. These appear across the whole site and in SEO. |
| **Home page** | Hero headline & text, the exam-target section, and the FAQ list (add / edit / reorder / delete). |
| **Contact page** | The contact-page FAQ list. |
| **Media** | Upload photos and copy their link. |
| **Users** | Add or remove admins/editors and change your own password. |

- **Admin** = full access (including users). **Editor** = content only.
- You cannot delete the last admin account.

## Saving & publishing

- Click **Save changes** at the bottom of any editor.
- **Locally / on the server**, changes apply immediately.
- **In production (Vercel + Git publishing configured)**, saving commits the change to your
  repository, which automatically rebuilds and republishes the live site (about a minute).

## Security notes

- Passwords are stored hashed (bcrypt) — never in plain text.
- The admin area is blocked from search engines and requires sign-in.
- Sessions last 7 days; use **Log out** on a shared computer.

## For the developer — production wiring

Set these environment variables in Vercel:

- `AUTH_SECRET` — a long random string (already generated in local `.env`).
- `NEXT_PUBLIC_SITE_URL` — the real domain.
- For live publishing from the admin: `GITHUB_REPO` (`owner/name`), `GITHUB_TOKEN`, `GITHUB_BRANCH` (usually `main`).
- For image uploads: `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`.

`content/users.json` holds admin accounts. It is gitignored locally; in production it is created
by the first-run setup and committed to your **private** repo. Keep that repo private.
