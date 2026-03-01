# BusinessBldrs Next.js

Marketing agency website for BusinessBldrs, built with Next.js 16, Tailwind CSS, and Neon PostgreSQL.

## Architecture

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Database**: Neon PostgreSQL via `@neondatabase/serverless` + Drizzle ORM
- **Auth**: NextAuth v5 (credentials-based admin auth)
- **Styling**: Tailwind CSS v3 + shadcn/ui (Radix UI components)
- **Email**: SendGrid
- **CRM**: HubSpot

## Project Structure

```
app/
  (marketing)/      # Public-facing marketing pages
  admin/            # Admin dashboard (protected)
  api/              # API routes
lib/
  db/
    index.ts        # Neon DB connection pool + Drizzle
    schema.ts       # Drizzle schema definitions
  storage.ts        # Data access layer
components/         # Shared React components
hooks/              # Custom React hooks
public/
  assets/           # Hardcoded component images (unique files only)
  attached_assets/  # CMS-managed media (source of truth for duplicates)
  portfolio-images/ # Portfolio case study images
```

## Key Configuration

- **Port**: 5000 (both dev and production)
- **Dev server**: `npm run dev` on port 5000
- **Database migrations**: `npm run db:push`

## Environment Variables / Secrets Required

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `AUTH_SECRET` | NextAuth session encryption secret (32+ chars) |
| `ADMIN_PASSWORD` | Shared admin login password |
| `ADMIN_EMAILS` | Comma-separated list of admin email addresses |
| `SENDGRID_API_KEY` | SendGrid for transactional email (optional) |
| `HUBSPOT_API_KEY` | HubSpot CRM integration (optional) |
| `FORM_TOKEN_SECRET` | Spam prevention for forms (optional) |

## Image Assets

- Duplicate files between `assets/` and `attached_assets/` were removed (kept in `attached_assets/` as CMS source of truth)
- Only 2 images >500KB exist (blog JPGs, already well-compressed — WebP not smaller)
- Admin login logo uses `next/image` with `priority` prop
- `lib/getQueryClient.ts` provides per-request QueryClient via `React.cache()` for server-side hydration
- All 8 public marketing pages use `HydrationBoundary` for SSR data prefetching
- Removed unused components: `carousel.tsx`, `chart.tsx`, `optimized-image.tsx`
- Removed unused packages: `react-icons`, `recharts`, `embla-carousel-react`

## Service Category Pages

Four service category master pages organize services under the "Plan, Produce, Promote, Protect" framework:
- `/services/plan` — StoryBrand Agency, Marketing Blueprint, AI Blueprint
- `/services/produce` — Branding & Logos, Website Design, Video Production, App Development, AI Development
- `/services/promote` — Marketing Services, SEO Services, Social Media, HubSpot CRM
- `/services/protect` — Managed Hosting, Maintenance, ADA Compliance

Components: `components/pages/services-plan.tsx`, `services-produce.tsx`, `services-promote.tsx`, `services-protect.tsx`
Routes: `app/(marketing)/services/plan/`, `produce/`, `promote/`, `protect/`
Homepage process cards link to these pages. Navigation mega-menu headers also link to them.
Each page follows a consistent layout pattern: dark two-column hero (text + photo), stats row, alternating service cards, benefits section, yellow CTA band.
These pages are listed in `darkHeroPages` and `scrollActivatedPages` in `navigation.tsx` for transparent nav behavior.

## Industry Pages

8 SEO-optimized industry landing pages using StoryBrand messaging, built with a shared template:
- Template: `components/pages/industry-page-template.tsx` (reusable component accepting industry-specific props)
- Routes: `app/(marketing)/industries/[slug]/page.tsx`
- Components: `components/pages/industries/[slug].tsx`

Industries with case studies:
- `/industries/automotive` — Bozard Ford Lincoln (285% more leads)
- `/industries/construction` — Hines (320% ROI), Breakwater Construction
- `/industries/manufacturing` — Rulon International (450% more leads)

Industries with portfolio items only:
- `/industries/education` — Citizens High School, Impact Early Education, etc.
- `/industries/healthcare` — Midtown Occupational Health, Main Street Medical Supply, etc.
- `/industries/accounting` — Level Accounting, Strategis CPAs, DuckettLadd
- `/industries/dental` — Bartram Dental, Bartram Dental Assisting School
- `/industries/consumer-goods` — Scoville Vodka, Fit Organic, 1st Products

Homepage industries section (`components/ui/industries-section.tsx`):
- "Churches & Ministries" links externally to ministrybuilders.com (new tab)
- "Your Industry" links to /request-quote
- All other cards link to their `/industries/[slug]` page
- All industry pages listed in `darkHeroPages` and `scrollActivatedPages` in navigation.tsx

## Free Marketing Audit Tool

Interactive lead-generation tool at `/marketing-audit`:
- Component: `components/pages/marketing-audit.tsx`
- Route: `app/(marketing)/marketing-audit/page.tsx`
- API: `app/api/audit-leads/route.ts` (POST — saves to DB + HubSpot)
- Step 1: Lead capture (name, email, optional domain) with honeypot + rate limiting
- Steps 2-6: Five quick questions mapped to Plan/Produce/Promote/Protect categories
- Results: Personalized scorecard with category ratings (Good/Needs Work/Critical) and specific recommendations linking to service pages
- Homepage hero button changed from "FREE RESOURCES" → "FREE MARKETING AUDIT" linking to `/marketing-audit`
- Listed in both `darkHeroPages` and `scrollActivatedPages` in navigation.tsx

## Deployment

- Target: Autoscale
- Build: `npm run build`
- Run: `npm run start`
