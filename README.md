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

## Deployment

GitHub Actions workflow is defined in `.github/workflows/deploy.yml`:

- Trigger: push to `main`
- Build: `npx @11ty/eleventy`
- Deploy target: `gh-pages` branch

## Repository

https://github.com/ohbm/reprochallenge2026

## Website

https://ohbm.github.io/reprochallenge2026/

## More Info

[OSSIG Website](https://ossig.netlify.app/challenge/)
