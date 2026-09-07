# ADA compliance cluster (built 2026-09-07, NOT LIVE)

Target keyword: "ada website compliance florida" (SEO-AUDIT-2026-08.md: Easy difficulty, High opportunity, commercial intent).
Goal: new $79 to $629/month ADA subscribers from Florida search traffic, with no ongoing time from Jay.

## What is in the repo (needs a Replit publish to go live)

- `app/(marketing)/ada-compliance-florida/page.tsx` + `components/pages/ada-compliance-florida.tsx`: Florida service page. FAQ + Service schema, same Stripe checkout links as /ada-accessibility.
- `app/sitemap.ts`: new entry.
- `components/ui/navigation.tsx`: path added to dark-hero and scroll-activated lists.
- `components/pages/ada-accessibility.tsx`: one cross-link to the Florida page in the bottom CTA.

## What goes in the database (needs one SQL run or two admin API posts)

- `insert-articles.sql`: both posts, published, author Jay Owen, category Website Compliance.
- `articles-payload.json`: same two posts for `POST /api/admin/articles` if you prefer the API.
- Post 1 (dated 2026-09-08): ada-website-compliance-florida-2026
- Post 2 (dated 2026-09-15): ada-website-demand-letter-florida

Both posts link to each other, to /ada-compliance-florida, to /ada-accessibility, and to the Feb 27 lawsuit article. The Feb article should get a link back to the Florida page (edit in admin, one sentence).

## To publish

1. Commit and push the repo changes, then Publish from Replit (deploys are manual there).
2. Run `insert-articles.sql` against Neon, or post the two payloads to the admin API.
3. Verify https://businessbldrs.com/ada-compliance-florida and both article URLs return 200 and appear in /sitemap.xml.
4. Submit the three URLs in Google Search Console.

## Facts used

All lawsuit figures come from the Action News Jax analysis already cited on the Feb 27 article and the /ada-accessibility page. The accessiBe FTC settlement ($1M, 2025) is also already on the site. No new statistics were introduced.
