# CLAUDE.md

Guidance for Claude Code and other AI coding assistants working on this Lead Bank prototype.

## Project Overview

This is a React, TypeScript, Vite, Tailwind CSS prototype for the Lead Bank BaaS-focused marketing site.

The app is intentionally a single-page prototype with state-based routing in `src/app/App.tsx`. It opens directly into the BaaS-focused landing page and navigation.

The live prototype is deployed on Netlify:

```text
https://lead-bank-30-prototype.netlify.app
```

## Commands

Use npm. The lockfile is `package-lock.json`.

```bash
npm install
npm run dev
npm run build
```

Vite usually serves locally at:

```text
http://localhost:5173/
```

## Important Files

- `src/app/App.tsx`: top-level app state, page selection, and conditional rendering.
- `src/app/components/BaasNav.tsx`: top navigation and popovers.
- `src/app/components/BaasHome.tsx`: home page section order and custom sections.
- `src/app/components/BaasHeroRotating.tsx`: rotating hero copy.
- `src/app/components/SiteFooter.tsx`: shared footer.
- `src/imports/`: Figma-exported sections and images. These files are large and often absolute-positioned.
- `src/styles/fonts.css`: Lead Sans font declaration.
- `netlify.toml`: Netlify build and SPA redirect configuration.

## Routing Model

There is no React Router route table. Page state is stored in `App.tsx`.

When adding or changing pages:

1. Add the page key to the `Page` union in `src/app/App.tsx`.
2. Add conditional rendering for the new page in `App.tsx`.
3. Add links in `Nav.tsx`, `BaasNav.tsx`, or `SiteFooter.tsx` as needed.
4. For in-page anchors/sections, pass `section` state and make the target component scroll to the correct element.

Do not assume URL paths like `/about` work. Navigation is currently handled through React state.

## Editing Guidance

- Prefer small, scoped changes in `src/app/components/` over editing Figma-exported files in `src/imports/`.
- Many Figma exports include their own nav/footer/menu elements. Global CSS in `App.tsx` intentionally hides those so the shared app chrome is consistent.
- Keep `dist/`, `node_modules/`, `.netlify/`, and environment files out of git.
- Preserve Lead Sans usage and existing `fontVariationSettings` patterns.
- Treat the BaaS-focused site as the single active experience. Do not reintroduce a chooser or parallel home page unless explicitly requested.
- The active home page uses `BaasNav`, `BaasHome`, and `BaasHeroRotating`.
- The app is a stakeholder prototype, so links may route to intentional stub pages instead of fully implemented pages.

## Visual/Interaction Expectations

- Buttons use the shared `.site-cta-button` hover treatment from `App.tsx`.
- Navigation dropdowns should feel consistent across Products, Use Cases, Developers, Banking, and Company.
- Products and Use Cases menus use BaaS-specific content by design.
- Avoid adding explanatory in-app text unless the user explicitly asks for it.

## Validation

Before handing off changes, run:

```bash
npm run build
```

The production build may warn about large chunks because this prototype includes many image-heavy Figma exports. That warning is expected unless the task is specifically about performance or bundle splitting.

## Deployment

Netlify is configured with:

```toml
[build]
command = "npm run build"
publish = "dist"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

Manual deploy:

```bash
npm run build
npx netlify deploy --prod --dir=dist
```

## GitHub Handoff

After cloning:

```bash
git clone https://github.com/jnanthak83/lead-bank-30-prototype.git
cd lead-bank-30-prototype
npm install
npm run dev
```

If Claude edits this repo, it should summarize changed files, run `npm run build`, and avoid committing generated build output.
