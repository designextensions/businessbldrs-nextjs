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
- `lib/queryClient.ts` exports `makeQueryClient()` and `getQueryClientSingleton()` — creates per-request QueryClient on server, browser singleton on client. No module-level singleton (prevents cross-request cache leakage and hydration mismatches)
- `components/providers.tsx` uses `useState(getQueryClientSingleton)` to initialize QueryClient
- Admin components use `useQueryClient()` hook for cache invalidation (not module import)
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

## SEO Configuration

- **Title template**: `app/layout.tsx` uses `template: "%s | Business Builders"` — individual page titles should NOT include "| Business Builders" suffix
- **Canonical tags**: Server-side via `alternates: { canonical: "..." }` in each page.tsx metadata + client-side fallback in `seo-head.tsx`
- **Sitemap**: `app/sitemap.ts` with grouped timestamps (CORE_UPDATED, SERVICE_UPDATED, etc.) and consistent priority hierarchy
- **Structured data**: Organization + LocalBusiness JSON-LD in layout.tsx (global); FAQ + Service schemas rendered server-side in each `page.tsx` file using `generateFAQSchema()` and `generateServiceSchema()` from `lib/structured-data.ts`. NO JSON-LD `<script>` tags should be in client components (`"use client"`) to prevent hydration duplication.
- **Search Atlas**: Dynamic optimization script in layout.tsx `<head>` (UUID: 30c4130f-316d-48cb-b424-e6f82719c0ef, loads from seo.businessbldrs.com)
- **OG images**: Dynamic per-page OG images via `app/api/og/route.tsx` (Edge runtime, `next/og` ImageResponse). Each page calls `getOgImageUrl(title, description)` from `lib/og-utils.ts` to generate a unique 1200x630 branded image with dark charcoal background, yellow accent, page title, and description. Home page retains the static `public/og-image.jpg`. Dynamic pages (articles, team members) use their CMS image if available, falling back to the generated OG image.

## Nonprofit Marketing Grant Page

Annual $50,000 marketing grant for 501(c)(3) nonprofits and churches:
- Route: `/grant` — `app/(marketing)/grant/page.tsx`
- Component: `components/pages/grant.tsx` (client component)
- API: `app/api/grant-application/route.ts` (POST — saves to DB via createContact + HubSpot sync + SendGrid email notification)
- Package: brand kit, messaging framework, website redesign, 1yr hosting, 1yr updates, email templates, social templates, 12 custom posts
- Form: honeypot spam protection + IP rate limiting (5/10min)
- FAQ structured data (FAQPage) rendered server-side in page.tsx
- Listed in `darkHeroPages` and `scrollActivatedPages` in navigation.tsx

## Promotions Page

Aggregation page at `/promotions` listing active grants and giveaways:
- Route: `app/(marketing)/promotions/page.tsx`
- Component: `components/pages/promotions.tsx`
- Cards link to `/grant`, `/sws`, and `/giveaway`
- Listed under Resources dropdown in navigation (desktop + mobile)
- Added to `lightBackgroundPages` in `navigation.tsx`

## Hydration Notes

- Homepage (`components/pages/home.tsx`) uses `next/dynamic` (NOT `React.lazy()`) for code-splitting sections. `React.lazy()` is incompatible with Next.js App Router SSR and causes tree mismatches.
- `suppressHydrationWarning` is applied to `<html>` and `<body>` in `app/layout.tsx` — this is standard for Next.js apps where browser extensions or proxy environments modify root attributes.
- The nested `<footer>` wrapper was removed from `home.tsx` — `MegaFooter` already returns its own `<footer>` element.
- accessiBe widget is disabled (license expired) — re-enable in `app/layout.tsx` after license renewal.
- The Replit dev preview proxy modifies SSR HTML before React hydrates, causing unavoidable hydration mismatch errors in development. A scoped `window.reportError` interceptor in `app/layout.tsx` suppresses this specific error — it only runs in development mode AND only on Replit domains. It does NOT ship to production.
- The `<Toaster>` component in `components/providers.tsx` is rendered client-only (via `mounted` state guard) to prevent SSR hydration mismatches from Radix UI portal elements.
- Dynamic route pages (`resources/articles/[slug]`, `team/[slug]`) use `dynamicParams = true` to avoid NoFallbackError for slugs not in `generateStaticParams`.

## SEO Audit (SquirrelScan)

SquirrelScan CLI (v0.0.38) is installed for repeatable SEO audits.

**Configuration:** `squirrel.toml` (project root) — configured for `businessbldrs.com` domain with full coverage mode.

**Reproduce audits:**
```bash
# Quick health check (25 pages, ~30s)
squirrel audit https://businessbldrs.com -C quick --format llm -o seo-audit-quick-report.txt

# Surface audit (50 pages, ~60s)
squirrel audit https://businessbldrs.com -C surface -m 50 --format llm -o seo-audit-surface-report.txt

# Deep audit (75 pages, ~90s — max before Cloudflare rate limiting)
squirrel audit https://businessbldrs.com -C surface -m 75 --format llm -o seo-audit-full-report.txt

# Compare against previous audit (regression detection)
squirrel report --regression-since businessbldrs.com --format llm
```

**Latest audit results (March 2026):** Score 45/100 (Grade F). Full findings in `SEO-AUDIT-FINDINGS.md`. Raw data in `seo-audit-*-report.txt` files.

**Key issues (partially fixed by Task #5):**
- ~~Oversized HTML (>2MB)~~ — Fixed: `getBlogArticleSummaries()` and `getFeaturedBlogArticleSummaries()` exclude `content` field from blog queries on `/resources` and `/resources/articles` pages
- ~~Duplicate metadata (24 pages)~~ — Fixed: All pages now use unique titles/descriptions. 12+ new `seoConfig` entries centralized in `lib/seo-config.ts`. Removed hardcoded " | Business Builders" suffix from all page titles (layout template handles it)
- ~~Title/description length violations~~ — Fixed: All titles ≤40 chars (≤60 with suffix), all descriptions 120-160 chars
- ~~Missing E-E-A-T signals~~ — Fixed (Task #6): Article JSON-LD on blog pages, WebPage schema `url` on free-seo-audit/storybrand-framework, VideoObject JSON-LD on storybrand-agency, heading hierarchy fixed across 8+ pages, thin content expanded on 4 pages, Contact link in footer
- ~~Invalid JSON-LD~~ — Fixed (Task #6): case-study-schema already valid; WebPage schemas now include `url` field
- 35 orphan pages, keyword stuffing, CLS/image issues (pending Task #7)

## Deployment

- Target: Autoscale
- Build: `npm run build`
- Run: `npm run start`
- `artifacts/` and `attached_assets/` directories are excluded from git (`.gitignore`) to keep the deployment layer lean. The mockup sandbox (`artifacts/mockup-sandbox/`) exists locally for dev only and its 258MB `node_modules/` must never ship in production.
- The `"use client"` directive is required on `components/ui/hero-section.tsx` (uses React hooks)
