# BuildYourIdea

Marketing site + lead-capture funnel for a solo AI Product Builder / Product Studio.
Built with Next.js (App Router), Tailwind CSS, and Prisma (SQLite by default).

## Positioning

"From idea to working product." The primary CTA everywhere is **Tell Me Your Idea**,
routing to a structured lead form (`#idea-form`) rather than a generic contact form.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS, custom dark theme, Framer Motion for subtle reveal animation
- **Database:** Prisma ORM against SQLite (`prisma/dev.db`) — swap `DATABASE_URL` for
  Postgres/MySQL in production, no code changes required
- **Email:** Nodemailer (SMTP) for new-lead notifications; falls back to console
  logging if SMTP env vars are unset, so no submission is ever silently lost
- **Admin:** `/admin/leads`, protected by HTTP Basic Auth (`proxy.ts`)

## Getting started

```bash
npm install
cp .env.example .env      # then fill in ADMIN_PASSWORD, SMTP, analytics IDs
npx prisma db push        # creates prisma/dev.db
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

- Point `DATABASE_URL` at a real Postgres/MySQL instance for production (SQLite is a
  single file and not safe for concurrent writes on most serverless hosts).
- Set `ADMIN_PASSWORD` to something strong.
- Configure SMTP credentials so lead notifications actually land in an inbox.
- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` / `NEXT_PUBLIC_META_PIXEL_ID` for ad tracking.
