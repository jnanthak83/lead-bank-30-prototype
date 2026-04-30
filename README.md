# Lead Bank Prototype

React/Vite prototype for the Lead Bank marketing site.

- Live site: https://lead-bank-30-prototype.netlify.app
- GitHub: https://github.com/jnanthak83/lead-bank-30-prototype
- Stack: React, TypeScript, Vite, Tailwind CSS, Motion

## Requirements

- Node.js 20 or newer
- npm

This project uses `package-lock.json`, so npm is the preferred package manager.

## Quick Start

```bash
git clone https://github.com/jnanthak83/lead-bank-30-prototype.git
cd lead-bank-30-prototype
npm install
npm run dev
```

Open the local URL Vite prints in the terminal. By default it is:

```text
http://localhost:5173/
```

## Available Commands

```bash
npm run dev
```

Starts the local Vite development server.

```bash
npm run build
```

Builds the production site into `dist/`.

## Project Structure

```text
src/
+-- app/
|   +-- App.tsx                 # page state and top-level routing
|   +-- components/             # custom site components
+-- assets/                     # shared images and fonts
+-- imports/                    # Figma-exported page sections and images
+-- main.tsx                    # React entry point
+-- styles/                     # global CSS, Tailwind, theme, fonts
```

Other useful files:

- `netlify.toml` controls Netlify build settings and SPA redirects.
- `src/styles/fonts.css` registers the Lead Sans font.
- `src/app/components/Nav.tsx` controls the top navigation and popovers.
- `src/app/components/SiteFooter.tsx` controls the footer columns and links.

## How Navigation Works

This is a single-page prototype. It does not use URL routes yet. The active page is stored in React state in `src/app/App.tsx`.

To add or change a page:

1. Add the page key to the `Page` type in `src/app/App.tsx`.
2. Render the page in the conditional layout inside `App`.
3. Add or update links in `src/app/components/Nav.tsx`.
4. Add or update footer links in `src/app/components/SiteFooter.tsx`.

Stub pages use `src/app/components/StubPage.tsx`. They are useful when navigation should work before the final content is ready.

## Current Page Areas

- Home
- BaaS platform overview
- Capabilities: Lend, Issue, Move, Store
- Banking: Business, Personal
- Use cases: Lending, Digital banking, Consumer payments, Credit builder, Business finances, Crypto
- Developers: API documentation, Change logs
- Company: About, Careers, Leadership team, Blog
- Legal: Privacy, Terms, Accessibility
- Account stubs: Console, Login

## Fonts and Assets

Lead Sans is committed at:

```text
src/assets/fonts/Lead_Sans_Variable.woff2
```

The font face is declared in:

```text
src/styles/fonts.css
```

Most large images and Figma-generated sections live in `src/imports/`. Keep those files committed because the prototype imports them directly.

## Deploying

The repo includes `netlify.toml`:

```toml
[build]
command = "npm run build"
publish = "dist"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

To deploy through the Netlify dashboard:

1. Create or open a Netlify site.
2. Connect this GitHub repo.
3. Use `npm run build` as the build command.
4. Use `dist` as the publish directory.

To deploy manually with the Netlify CLI:

```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

## Prototype Notes

- The app currently uses state-based navigation instead of URL routes.
- Some pages are intentional stubs so navigation never dead-ends.
- The production build can warn about large chunks because many image-heavy Figma exports are bundled.
- `dist/`, `node_modules/`, `.netlify/`, and environment files are intentionally ignored.
