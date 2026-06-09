# Goose Electric Demo

This project is a TanStack React + Vite application built for Cloudflare Workers deployment.

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the local development server:

```bash
npm run dev
```

3. Open the browser at the URL shown in the terminal.

## Production build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured to deploy to Cloudflare Workers using `wrangler`.

### Manual deploy

```bash
npm install -g wrangler
wrangler publish
```

### GitHub Actions deploy

A workflow is configured at `.github/workflows/deploy.yml`.

You need the following GitHub secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

On push to `main`, the workflow will build and publish the app automatically.
