# Aagam Jain — Portfolio

A production-ready, light-theme personal portfolio for a Finance / FP&A professional, built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion — including a dedicated Financial Models & Work Samples section backed by a real Excel workbook.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** — light, professional palette (white/off-white surfaces, navy-charcoal text, a single muted teal accent) defined in `tailwind.config.ts`
- **Framer Motion** for entrance and scroll-reveal animation
- **lucide-react** for icons
- Fonts via `next/font/google`: **Plus Jakarta Sans** (single UI typeface) + **IBM Plex Mono** (data labels, tags)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding your resume

Drop your PDF into `public/Aagam_Jain_Resume.pdf`. The "Download Resume" buttons in the navbar, hero, and contact section already point to `/Aagam_Jain_Resume.pdf`.

## Financial Models & Work Samples

This section (`components/Models.tsx`, data in `lib/data.ts` under `financialModels`) is built from your actual uploaded workbooks:

- **Budget vs Actual Financial Model** — `public/models/Budget_vs_Actual_Model_AagamJain.xlsx` is live and downloadable. This is a **redacted copy** of your original `.ods`: the two client-level breakdown tabs (`Sheet12`, `Sheet4`, which list sales by individual client code) were removed before publishing, since that's a level of Dwarka Gems' business data more granular than the aggregate dashboards. Every other tab — `Overall_MONTHLY_SALES`, `Categorywise_Variance`, `Dashboard`, `YTM_Dashboard`, `Analysis`, and both `QTY_SOLD_BudVSAct` tabs — is untouched, formulas included. Your original `.ods` was never modified. **Double-check you're comfortable with this level of detail being public** — if you'd rather redact further (or not at all), say so and I'll rebuild the file.
- **CFI — FP&A Challenge** — shown as a completed credential with an accurate sheet list and description, but **the workbook itself is not available for download or preview on the site**. Its cover page carries a CFI Education Inc. copyright notice that prohibits redistribution, so a public "Download Excel" button would violate that license. If you want it downloadable, you'd need CFI's written permission first.
- **Three-Statement Linked Financial Model** — placeholder card marked "Coming Soon." Add the real file and update its `financialModels` entry (add `filePath`, `status: "available"`, `sheets`, etc.) once you have it — the component already knows how to render an available model, so no redesign is needed.

The Budget vs Actual model card's mini chart is a real SVG bar chart rendered from the workbook's own 12 monthly Budget/Actual figures (see `budgetVsActualChart` in `lib/data.ts`) — not a screenshot, so it stays sharp on any screen.

## Editing content

All copy — profile info, experience, projects, financial models, education, certifications — lives in **`lib/data.ts`**. Update that file and every section re-renders with the new content.

## Project structure

```
app/
  layout.tsx        — fonts, SEO/OG metadata, root shell
  page.tsx           — assembles all sections
  globals.css        — base styles, faint grid backdrop, focus states
components/
  Navbar.tsx          Hero.tsx            HeroBackground.tsx
  About.tsx           Experience.tsx      Models.tsx
  Expertise.tsx       Tools.tsx           Projects.tsx
  Education.tsx       Certifications.tsx  Contact.tsx
  Footer.tsx
  ui/
    Reveal.tsx         — scroll-triggered fade/slide wrapper
    SectionHeading.tsx — shared section title component
lib/
  data.ts             — single source of truth for all site content
public/
  Aagam_Jain_Resume.pdf        (add this yourself)
  models/
    Budget_vs_Actual_Model_AagamJain.xlsx   (redacted copy, see above)
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Deploy.

## Notes

- The contact section links directly to email, phone, LinkedIn and GitHub — there is no contact form wired to a backend, so nothing appears to work that doesn't.
- All experience, project, model, education and certification content reflects only what was provided or found in your actual workbooks; no metrics, achievements or certifications were invented. CFA Level 1 is explicitly labeled "Currently Preparing."
- Motion respects `prefers-reduced-motion`.
