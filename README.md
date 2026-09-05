# Aagam Jain — Portfolio

A production-ready personal portfolio for a Finance / FP&A professional, built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling, with a custom design-token palette in `tailwind.config.ts`
- **Framer Motion** for entrance and scroll-reveal animation
- **lucide-react** for icons
- Fonts loaded via `next/font/google`: **Fraunces** (display serif), **Inter** (body), **IBM Plex Mono** (data/numeric labels)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding your resume

Drop your PDF into `public/Aagam_Jain_Resume.pdf`. The "Download Resume" buttons in the navbar and hero already point to `/Aagam_Jain_Resume.pdf`, so no code changes are needed. You can then delete `public/PLACE_RESUME_HERE.txt`.

## Editing content

All copy — profile info, experience, projects, education, certifications — lives in one place: **`lib/data.ts`**. Update that file and every section re-renders with the new content; no need to touch component markup for text changes.

## Project structure

```
app/
  layout.tsx        — fonts, SEO/OG metadata, root shell
  page.tsx           — assembles all sections
  globals.css        — base styles, ledger-grid background, focus states
components/
  Navbar.tsx          Hero.tsx            HeroBackground.tsx
  About.tsx           Experience.tsx      Expertise.tsx
  Tools.tsx           Projects.tsx        Education.tsx
  Certifications.tsx  Contact.tsx         Footer.tsx
  ui/
    Reveal.tsx         — scroll-triggered fade/slide wrapper
    SectionHeading.tsx — shared section title component
lib/
  data.ts             — single source of truth for all site content
public/
  Aagam_Jain_Resume.pdf  (add this yourself)
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Deploy.

## Notes

- The contact section links directly to email, phone, LinkedIn and GitHub — there is no contact form wired to a backend, so nothing appears to work that doesn't.
- All experience, project, education and certification content reflects only what was provided; no metrics, achievements or certifications were invented. CFA Level 1 is explicitly labeled "Currently Preparing."
- Motion respects `prefers-reduced-motion`.
