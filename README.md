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

- **Budget vs Actual Analysis Model** — `public/models/Budget_vs_Actual_Model_AagamJain.xlsx` is live and downloadable, built from your latest uploaded `.ods`. This is a **redacted copy**: the two client-level breakdown tabs (`Sheet12`, `Sheet4`, sales by individual client code) are removed before publishing; every other tab is untouched, formulas included. Your original `.ods` was never modified. **Actual vs verified scope:** you confirmed only January–May are genuine, company-reported actuals — June–December were added afterward as a self-directed modelling exercise. The site now reflects that split everywhere: the card's chart mutes the June–December actual bars, its metrics and `dataNote` show the May YTD figures (₹1,411.4L budget, ₹1,002.0L actual, -₹409.4L variance, 71% achievement) rather than the FY-wide 96%, and the Dwarka Gems experience entry carries the same May-scoped Financial Snapshot with an explicit note. Case Study 2 was updated to match.
- **CFI — FP&A Challenge** — now downloadable (you confirmed you have permission to distribute it). `public/models/CFI_FPA_Challenge_AagamJain.xlsx` is the original file, byte-for-byte, formulas included — so a recruiter who downloads it and opens it in Excel can see the actual FORECAST.ETS formulas and consolidation logic, not just the output values. The card still shows the real Week 1 / Week 2 / Week 3 breakdown as its visual instead of a raw sheet list.
- **Three-Statement Financial Model — TATA Steel Ltd** — replaces the old "Coming Soon" placeholder. Built from your uploaded workbook: a genuinely linked model (Data Sheet → HistoricalFS → Ratio Analysis / Forecasting, confirmed via the actual cell formulas) using 10 years of TATA Steel's historical financials sourced from Screener.in, a 30+ line ratio-analysis suite, and a 5-year Sales/EBITDA/EPS forecast built with Excel's `FORECAST()` function. `public/models/TATA_Steel_Financial_Model.xlsx` is the original file, unmodified and downloadable — this one uses public company data, so there's no confidentiality concern the way there is with the Dwarka Gems file.

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
