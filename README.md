# Lead Bank Prototype

React/Vite prototype for the Lead Bank site.

Live site: https://lead-bank-30-prototype.netlify.app

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is emitted to `dist/`.

## Deploy

This repo includes `netlify.toml` with:

- Build command: `npm run build`
- Publish directory: `dist`

Connect the repo in Netlify or deploy manually with:

```bash
npx netlify-cli deploy --prod --dir=dist
```
