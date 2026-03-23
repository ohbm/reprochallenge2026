# OHBM-OSSIG Reproducibility Challenge Website

Static website for the OHBM-OSSIG Reproducibility Challenge, built with [Eleventy (11ty)](https://www.11ty.dev/), Nunjucks templates, plain CSS, and vanilla JavaScript.

## Local Deployment (Run Locally)

1. Install dependencies:

```bash
npm install
```

2. Start local development server:

```bash
npx @11ty/eleventy --serve
```

## Path Prefix for GitHub Pages

This site uses Eleventy URL helpers (`| url`) for internal links/assets.

- Root deploy (e.g. organization root pages):
  - `pathPrefix: "/"`
- Repository sub-path deploy (e.g. `https://<user>.github.io/<repo>/`):
  - set `pathPrefix` in `eleventy.config.js` to `"/<repo>/"`

## File Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── _includes/
│   │   └── base.njk
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── source-projects.js
│   ├── contact.njk
│   ├── index.njk
│   └── source-projects.njk
├── CONTEXT.md
├── eleventy.config.js
├── package.json
└── README.md
```

## Deployment

GitHub Actions workflow is defined in `.github/workflows/deploy.yml`:

- Trigger: push to `main`
- Build: `npx @11ty/eleventy`
- Deploy target: `gh-pages` branch
