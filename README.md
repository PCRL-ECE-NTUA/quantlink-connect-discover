# QRBITLink

Landing site for QRBITLink, QRBIT's satellite QKD mission planning software tool.

Live site: https://pcrl-ece-ntua.github.io/quantlink-connect-discover/

## Local development

Requires Node.js and npm.

```sh
npm install
npm run dev     # dev server on http://localhost:8080
npm run build   # production build into dist/
npm test        # unit tests (Vitest)
```

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

Pushes to `main` are built and deployed to GitHub Pages by `.github/workflows/deploy.yml`.
