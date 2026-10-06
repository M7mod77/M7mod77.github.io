# Mahmoud Elsallal — Portfolio

Personal portfolio of Mahmoud Elsallal, Frontend Developer in Cairo — selected work, experience and contact,
in a dark editorial design.

**Live site:** https://m7mod77.github.io/

## Tech stack

- Next.js (App Router, static export)
- TypeScript
- Tailwind CSS

Motion is CSS-only (scroll reveals via a single IntersectionObserver, scroll-driven parallax) and respects
`prefers-reduced-motion`. No runtime server, no environment variables.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # static site in ./out
```

Preview the exported site: `npx serve out`

## Structure

```
app/          layout, page, global styles, icon, Open Graph image, sitemap, robots
components/   header, hero, project showcases, sections, footer
content/      all copy and project data (profile.ts, projects.ts, career.ts)
assets/       portrait (imported by next/image)
public/       résumé PDF and project screenshots (/projects/<slug>/)
```

To update content, edit the files in `content/`. Screenshots go in `public/projects/<slug>/` and are listed in
`content/projects.ts`; a "Live demo" button only appears when a project has a `live` URL.

## Deployment

Every push to `main` builds the static export and deploys it to GitHub Pages via GitHub Actions
(`.github/workflows/deploy.yml`).
