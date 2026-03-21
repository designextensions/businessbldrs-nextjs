# SEO & Geo Audit Report — businessbldrs.com

**Audit Date:** March 21, 2026
**Pages Crawled:** 75 (surface + deep coverage across marketing pages, service pages, geo pages, articles, case studies, and resource pages)
**Tool:** SquirrelScan v0.0.38 (230+ rules, 21 categories)

---

## Overall Health Score: 45/100 (Grade F)

| Category | Score | Status |
|----------|-------|--------|
| Core SEO | 89 | Good |
| Crawlability | 97 | Good |
| Local SEO | 100 | Excellent |
| Mobile | 100 | Excellent |
| Social Media | 100 | Excellent |
| URL Structure | 100 | Excellent |
| Internationalization | 100 | Excellent |
| Legal Compliance | 100 | Excellent |
| Structured Data | 82 | Needs Work |
| Performance | 82 | Needs Work |
| Security | 81 | Needs Work |
| Links | 80 | Needs Work |
| Content | 76 | Needs Work |
| Images | 76 | Needs Work |
| Accessibility | 74 | Poor |
| E-E-A-T | 67 | Poor |
| Video | 44 | Critical |

**Summary:** 6,807 rules passed | 1,035 warnings | 426 failures

---

## Critical Issues Likely Causing Ranking Drops

### 1. HTML Pages Exceeding Googlebot's 2MB Crawl Limit (CRITICAL)
**Impact: Very High — Googlebot truncates content beyond 2MB, meaning large portions of your pages are invisible to Google.**

14 pages produce HTML exceeding 2.7MB, far over Googlebot's 2MB limit. This means Google is not seeing or indexing the full content of these pages. Affected pages include:
- `/resources` (main resource hub)
- `/resources/articles` (article listing)
- 12 individual blog article pages

**Why this matters for ranking:** If Google can't see your full page content, it can't properly rank you for the keywords on those pages. This is likely the single biggest contributor to ranking loss.

**Fix:** Implement pagination or server-side rendering optimizations to reduce HTML payload. Consider lazy-loading article content, using API-driven infinite scroll, or splitting the resources page into paginated sub-pages.

---

### 2. Massive Duplicate Title & Description Problem (HIGH)
**Impact: High — Google may be confused about which page to rank, diluting your search equity across duplicate pages.**

7 sets of duplicate titles affecting 24 pages, and 7 sets of duplicate descriptions affecting 24 pages:

| Duplicate Group | Pages Affected |
|----------------|---------------|
| "Full-Service Marketing Solutions" | /services, /marketing-services, /marketing-strategy-consulting |
| "Website Design & Development" | /website-design, /maintenance |
| "SEO Services St. Augustine" | /seo-services, /free-seo-audit |
| "Request a Free Marketing Quote" | /request-quote, /cost-calculator |
| "Marketing Case Studies & Results" | /portfolio + 5 individual case studies |
| Additional duplicates | Multiple StoryBrand and article pages |

**Why this matters:** When multiple pages share the same title and description, Google struggles to determine which page should rank. This causes keyword cannibalization — your own pages compete against each other.

**Fix:** Give each page a unique, descriptive title (under 60 characters) and description (120-160 characters) that reflects the specific content of that page.

---

### 3. E-E-A-T Signals Missing (HIGH)
**Impact: High — Google's quality guidelines increasingly reward Experience, Expertise, Authoritativeness, and Trustworthiness signals.**

Four critical E-E-A-T gaps detected:
- **No author attribution** on any content pages (blog articles have no bylines)
- **No discoverable Contact page** (the crawler couldn't find a clearly labeled "Contact" page)
- **No discoverable Privacy Policy page** (exists in sitemap but not linked prominently enough)
- **No datePublished** metadata on content pages (Google can't determine freshness)

**Why this matters:** Google's Helpful Content updates heavily penalize sites lacking trust signals. Without author names, publication dates, and clearly accessible contact/privacy pages, Google considers your content less trustworthy than competitors who have them.

**Fix:** Add author bylines to all articles, add visible publication/update dates, ensure Contact and Privacy Policy are linked from the main navigation or footer in a standard discoverable way.

---

### 4. Orphan Pages & Weak Internal Linking (HIGH)
**Impact: High — Pages without incoming links are poorly crawled and rarely ranked.**

- **35 orphan pages** have fewer than 2 incoming internal links
- **12 pages** have only 1 internal link pointing to them
- Key orphan pages include: `/marketing-audit`, `/st-augustine`, `/jacksonville`, `/ministry-blueprint`, `/marketing-plan-builder`, geo-targeting pages, and industry pages

**Why this matters:** Google uses internal links to discover and understand page importance. Pages with few internal links get crawled less frequently and are seen as less important. Your geo-targeting pages (St. Augustine, Jacksonville, etc.) are especially hurt — they need strong internal linking to rank in local searches.

**Fix:** Add contextual internal links from service pages and blog posts to geo-targeting pages. Create a hub-and-spoke linking structure where service pages link to geo pages and vice versa. Ensure industry pages are linked from the main services section.

---

### 5. Keyword Stuffing Detected (MEDIUM-HIGH)
**Impact: Medium-High — Google may penalize pages with unnaturally high keyword density.**

Keyword density issues on 58 out of 75 pages audited:
- "SEO" at 5.3% density on SEO service pages (recommended max: 2-3%)
- "website" at 4.3% on web design pages
- "StoryBrand" at 3.9% across StoryBrand pages
- "design" at 3.6% across multiple pages

**Why this matters:** Google's algorithm detects unnatural keyword repetition and may reduce rankings for over-optimized pages. This is a common cause of gradual ranking loss over time.

**Fix:** Rewrite content to use more natural language and synonyms. Reduce repetitive keyword use, vary phrasing, and focus on topical depth rather than keyword density.

---

### 6. Invalid Structured Data (JSON-LD Errors) (MEDIUM)
**Impact: Medium — Broken structured data means you're missing rich snippet opportunities in search results.**

7 pages have invalid JSON-LD:
- `/free-seo-audit` and `/storybrand-framework`: WebPage schema missing required `url` field
- Case study pages (`/case-studies/all-pro-dad`, `/case-studies/bozard-ford-lincoln`, `/case-studies/breakwater-construction`, etc.): Article schema missing required `image` and `publisher` fields

5 pages with video content have no VideoObject schema (/, /about, /grant, /storybrand-agency, /testimonials), missing video rich snippet opportunities.

**Fix:** Add the `url` property to WebPage schemas, add `image` and `publisher` to Article schemas on case study pages. Add VideoObject JSON-LD schema to all pages with embedded video.

---

### 7. Image Optimization & CLS Issues (MEDIUM)
**Impact: Medium — Affects Core Web Vitals, which is a direct Google ranking factor.**

- **111 images** missing width/height attributes across all 75 pages (causes Cumulative Layout Shift)
- **9 images** exceed 200KB file size (up to 458KB for a single PNG)
- **52 below-fold images** lack lazy loading
- **5+ images** missing alt text entirely
- **LCP images** on 11 pages lack preload hints

**Why this matters:** Core Web Vitals (CLS, LCP) are direct ranking signals. Missing image dimensions cause layout shifts that hurt CLS scores. Large images slow page loads, hurting LCP.

**Fix:** Add explicit width/height to all `<img>` tags. Compress oversized images and convert PNGs to WebP. Add `loading="lazy"` to below-fold images. Add preload hints for above-fold hero images. Add descriptive alt text to all images.

---

### 8. Page Weight & Performance (MEDIUM)
**Impact: Medium — Heavy pages load slowly, hurting user experience and rankings.**

- Total tracked resources: **6,787KB** (nearly 7MB — very heavy)
- Pages lack proper Cache-Control max-age headers
- 2 critical render-blocking request chains (CSS + JS)
- Slow server response (642ms TTFB) on some article pages

**Fix:** Implement proper cache headers with max-age. Code-split JavaScript bundles. Optimize CSS delivery. Consider CDN caching for static assets.

---

### 9. Thin Content Pages (MEDIUM)
**Impact: Medium — Google may classify thin pages as low-quality, dragging down overall site quality.**

4 pages fall below the 300-word minimum:
- `/marketing-audit` — 178 words
- `/marketing-plan-builder` — 206 words
- `/events` — 273 words
- `/tools` — 118 words

Additionally, `/tools` is missing an H1 tag entirely.

**Fix:** Expand content on these pages to at least 500+ words with valuable, relevant information. Add an H1 tag to the tools page.

---

### 10. Accessibility Issues (MEDIUM — Indirect SEO Impact)
**Impact: Medium — While not a direct ranking factor, accessibility overlaps with technical SEO and user experience signals.**

381 errors and 342 warnings across accessibility rules:
- 73 of 75 pages missing `<main>` landmark (affects screen readers AND Google's content parsing)
- Buttons and form inputs without accessible names
- Color contrast issues across all pages
- No skip-link for bypassing repetitive navigation
- Heading hierarchy skips (H1 → H3, H4 after H2)

**Fix:** Add `<main>` wrapper to page content. Add aria-labels to social media icon links and form buttons. Fix heading hierarchy to be sequential. Add skip navigation link.

---

## Geo / Local SEO Assessment

**Local SEO Score: 100/100** — Your local SEO structured data is well-implemented:
- LocalBusiness schema with correct NAP (Name, Address, Phone)
- GeoCoordinates properly set for St. Augustine
- Opening hours specified
- Geo-targeting pages exist for St. Augustine, Jacksonville, Palm Coast, Ponte Vedra, Orange Park, Gainesville, and Daytona Beach

**However, geo pages have critical issues:**
- Most geo pages are **orphan pages** with very few internal links
- Geo page meta descriptions are too long (172-189 characters, exceeding the 160 char recommendation)
- Geo page titles are too long (exceed 60 character recommendation)

**Fix:** Strengthen internal linking to geo pages. Shorten meta descriptions to under 160 characters. Add unique, locally-relevant content to differentiate geo pages from each other.

---

## Broken Links

- 1 broken external link (404): `techopedia.com` definition page (from article about web app development phases)
- 1 rate-limited external link (429): Instagram profile link (appears on all 75 pages — likely fine, just Instagram rate-limiting the crawler)
- 1 HTTP link downgrade: `bobbear.com` link in fraud/scams article (insecure, missing rel="noopener")

**Fix:** Remove or update the broken Techopedia link. Fix the HTTP link to use HTTPS or remove it.

---

## Security Issues (Indirect SEO Impact)

- No Content-Security-Policy header
- No X-Frame-Options header (clickjacking vulnerability)
- Public forms without CAPTCHA protection
- 20 HTTP URLs redirect to HTTPS (minor redirect overhead)

**Fix:** Add security headers via Next.js configuration or middleware. Consider adding CAPTCHA to public forms.

---

## Prioritized Action Plan

### Immediate (Highest Impact on Rankings)
1. **Fix HTML size on /resources and article pages** — This is the #1 priority. Implement pagination or content splitting to get under 2MB.
2. **Fix duplicate titles and descriptions** — Give all 24 affected pages unique metadata.
3. **Add author bylines and datePublished** to all blog articles and content pages.
4. **Fix invalid JSON-LD structured data** on case studies and service pages.

### Short-Term (1-2 Weeks)
5. **Strengthen internal linking** to orphan pages, especially geo-targeting and industry pages.
6. **Add width/height attributes** to all images to fix CLS.
7. **Reduce keyword density** on pages flagged for stuffing.
8. **Add VideoObject schema** to pages with video content.
9. **Expand thin content pages** to 500+ words.

### Medium-Term (2-4 Weeks)
10. **Compress and optimize images** — convert large PNGs to WebP, add lazy loading.
11. **Add `<main>` landmark** to all pages.
12. **Add aria-labels** to social media links and form elements.
13. **Implement cache headers** with proper max-age values.
14. **Add skip-link navigation** for accessibility.
15. **Fix heading hierarchy** across all affected pages.

### Ongoing
16. **Re-audit monthly** to track improvements and catch regressions.
17. **Monitor Core Web Vitals** via Google Search Console.
18. **Build internal linking** into content creation workflow.

---

## Raw Audit Reports

The following machine-readable audit reports are saved in the project root for reference:
- `seo-audit-quick-report.txt` — 25-page quick audit
- `seo-audit-surface-report.txt` — 50-page surface audit
- `seo-audit-full-report.txt` — 75-page deep audit (broadest coverage achieved)

**Note:** A full 200+ page audit was attempted but timed out due to Cloudflare protection on the live site. The 75-page audit covers all unique page templates, service pages, geo pages, article samples, case studies, and resource pages — providing comprehensive coverage of the site's SEO health.
