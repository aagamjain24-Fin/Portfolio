# Aagam Jain — Portfolio

A production-ready, light-theme personal portfolio for a Finance / FP&A professional, built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion — including a Financial Models & Work Samples section backed by real Excel workbooks, and six detailed finance case studies.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** — light, professional palette (white/off-white surfaces, navy-charcoal text, a single muted teal accent)
- **Framer Motion** for entrance and scroll-reveal animation
- **lucide-react** for icons
- Fonts via `next/font/google`: **Plus Jakarta Sans** (single UI typeface) + **IBM Plex Mono** (data labels, tags)

## Getting started

```bash
npm install
npm run dev
```

## Resume

`public/Aagam_Jain_Resume.pdf` is already in place. "View Resume" (opens in a new tab) and "Download Resume" buttons appear in the navbar, hero, and contact section.

## Financial Models & Work Samples

Data lives in `lib/data.ts` under `financialModels`; rendered by `components/Models.tsx`.

- **Budget vs Actual Analysis Model** — `public/models/Budget_vs_Actual_Model_AagamJain.xlsx` is live and downloadable, built from your latest uploaded `.ods`. This is a **redacted copy**: the two client-level breakdown tabs (`Sheet12`, `Sheet4`, sales by individual client code) are removed before publishing; every other tab is untouched, formulas included. Your original `.ods` was never modified. The card's mini chart is a real SVG bar chart rendered from the workbook's own 12 monthly Budget/Actual figures — not a screenshot.
- **CFI — FP&A Challenge** — shown as a completed credential with a real Week 1 / Week 2 / Week 3 breakdown (group consolidation → FORECAST.ETS forecast → executive KPI dashboard), based on actually reading the attached workbook. **The workbook itself is not available for download.** The newly attached file no longer carries CFI's cover-page copyright notice, but it's still CFI's course-designed exercise, so I kept the same conservative default as before. If you've confirmed you're free to distribute it, tell me and I'll add the download.
- **Three-Statement Linked Financial Model** — still a "Coming Soon" placeholder. Add the real file and a `financialModels` entry when ready.

## Case Studies

Six case studies live in `lib/data.ts` under `caseStudies`, rendered by `components/CaseStudies.tsx`. Each opens a modal with Overview, Business/Finance Objective, My Work/Approach, Analysis Performed, Key Outputs, Skills Demonstrated, Tools Used, and — where relevant — a link to the related model in the Models section. All content is drawn from your CV and the two Excel workbooks; no invented figures or achievements.

## Editing content

All copy lives in **`lib/data.ts`**: profile, experience, expertise, tool groups, financial models, case studies, education, certifications.

## Section order

Hero → About → Experience → Financial Expertise → Tools & Technologies → Financial Models & Work Samples → Case Studies → Education → Certifications → Contact.

## Deploying to Vercel

Push to GitHub, import at [vercel.com/new](https://vercel.com/new) (Next.js auto-detected), deploy. No environment variables required.

## Notes

- No contact form wired to a backend — direct email/phone/LinkedIn/GitHub links only.
- CFA Level 1 is explicitly labeled "Currently Preparing."
- Motion respects `prefers-reduced-motion`.
