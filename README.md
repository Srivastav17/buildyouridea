# Buildia

Marketing site + lead-capture funnel for a solo AI Product Builder / Product Studio.
Built with Next.js (App Router), Tailwind CSS, and Prisma (Postgres).

**Live:** https://builidea.com
**Admin:** https://builidea.com/admin/leads

## Positioning

"From idea to working product." The primary CTA everywhere is **Tell Me Your Idea**,
routing to a structured lead form (`#idea-form`) rather than a generic contact form.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS, custom dark theme, Framer Motion for subtle reveal animation
- **Database:** Prisma ORM against Postgres. Production runs on Neon (provisioned via
  the Vercel Storage → Neon integration); locally you can point `DATABASE_URL` at any
  Postgres instance
- **Email:** Nodemailer (SMTP) for new-lead notifications; falls back to console
  logging if SMTP env vars are unset, so no submission is ever silently lost
- **Admin:** `/admin/leads`, protected by HTTP Basic Auth (`proxy.ts`)

## Getting started

```bash
npm install
cp .env.example .env      # then fill in DATABASE_URL, ADMIN_PASSWORD, SMTP, analytics IDs
npx prisma db push        # syncs the schema to your Postgres database
npm run dev
```

Visit `http://localhost:3000`. The admin dashboard is at `http://localhost:3000/admin/leads`
(default credentials `admin` / `change-me-now` — **change these in `.env` before deploying**).

## Environment variables

See `.env.example` for the full list:

- `DATABASE_URL` — Prisma connection string
- `ADMIN_USER` / `ADMIN_PASSWORD` — Basic Auth for `/admin/*`
- `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASSWORD` / `LEAD_NOTIFICATION_EMAIL` /
  `LEAD_FROM_EMAIL` — outbound email on new lead submission
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 (loaded only if set)
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel (loaded only if set)
- `NEXT_PUBLIC_SITE_URL` — used for canonical/OG metadata

## Lead capture flow

1. `components/LeadForm.tsx` collects the structured brief (idea, audience, stage,
   goal, budget, contact info) and fires `form_started` / `form_submitted` analytics
   events plus a honeypot field for basic bot filtering.
2. `app/api/leads/route.ts` validates the payload server-side, stores it via Prisma,
   and fires an async email notification.
3. UTM parameters and referrer/landing-page are captured client-side on first touch
   (`lib/utm.ts`) and persisted to `localStorage` so attribution survives multi-page
   sessions from ad traffic.
4. `/admin/leads` lists every submission with inline status updates (New → Reviewing →
   Contacted → Qualified → Proposal Sent → Won/Lost) via `PATCH /api/admin/leads/[id]`.

## Analytics events

Fired via `lib/analytics.ts` (`trackEvent`), mapped to both GA4 and Meta Pixel:

- `landing_page_view`
- `cta_click`
- `form_started`
- `form_submitted`

## Deploying

Deployed on Vercel, connected to a Neon Postgres database (provisioned via the
Vercel Storage → Neon marketplace integration, which sets `DATABASE_URL` /
`DATABASE_URL_UNPOOLED` automatically). To redeploy:

```bash
vercel --prod
```

Still to configure for full production readiness:

- **SMTP credentials** (`SMTP_HOST`/`SMTP_PORT`/`SMTP_USER`/`SMTP_PASSWORD`) — without
  these, new-lead notifications only get logged server-side (visible via `vercel logs`),
  not emailed. Set them in the Vercel dashboard (Project → Settings → Environment
  Variables) or via `vercel env add`.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` / `NEXT_PUBLIC_META_PIXEL_ID` for ad tracking.
- `NEXT_PUBLIC_SITE_URL` — set to the production domain once you attach a custom one.
- A custom domain (Project → Settings → Domains) — the current URL is a `vercel.app`
  subdomain.

`ADMIN_USER` / `ADMIN_PASSWORD` are already set as production secrets on Vercel.
