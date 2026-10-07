# fatemehAOmabad.github.io

My personal portfolio website — a single-page React + TypeScript site built with Vite.

## Stack

- React + TypeScript
- Vite
- Plain CSS (no framework) — dark, "modern tech" theme

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build -> dist/
npm run preview   # preview the production build
npm run lint      # ESLint
```

## Content

All editable copy — name, bio, skills, experience, projects, email — lives in
[`src/content.ts`](src/content.ts). Edit that file rather than the components
to update the page.

The profile photo is read from `src/content.ts` → `profile.photo`, pointing at
`src/assets/profile.png`. Swap that file (keeping the same name, or updating
the import) to change it.

Section order, anchor ids, nav labels, and heading numbering (01, 02, ...) are
all derived from the single list in [`src/sections.ts`](src/sections.ts) —
reorder or add a section there rather than editing numbers by hand.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and deploys it to GitHub Pages. In the repo settings,
set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**
(one-time setup) and the site will publish to `https://fatemehaomabad.github.io/`
on every push.
