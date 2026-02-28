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
public/             # Static assets
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

## Deployment

- Target: Autoscale
- Build: `npm run build`
- Run: `npm run start`
