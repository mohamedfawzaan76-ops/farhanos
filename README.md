# FarhanOS

A standalone, fictional prank website for Mohamed Farhan.

## What it is

FarhanOS is a premium dark futuristic “founder operating system” that initially behaves like a serious SaaS dashboard. It uses fictional metrics, projects and telemetry, then progressively becomes more suspicious until the final playful reveal.

The visual direction is inspired by the public-facing positioning of the Fera Digital portfolio: design × technology × business, a founder dashboard feel, restrained typography, dark surfaces and lime accents.

## Run locally

No build step is required.

```bash
python -m http.server 4173
```

Open `http://localhost:4173`.

You can also just open `index.html` directly in a modern browser.

## Deploy to Vercel

1. Upload this folder to a Git repository.
2. Import the repository into Vercel.
3. Framework preset: **Other**.
4. Build command: leave empty.
5. Output directory: leave empty.
6. Deploy.

The included `vercel.json` keeps it as a static deployment.

## Files

- `index.html` — complete app markup
- `styles.css` — responsive premium dark UI
- `app.js` — boot sequence, navigation, fake telemetry, escalating interactions and reveal
- `vercel.json` — Vercel static configuration

## Prank flow

1. Serious boot sequence.
2. Legit-looking founder dashboard.
3. Projects / metrics / idea vault.
4. Small suspicious messages.
5. Clicking around increases the “suspicion” level.
6. Deep diagnostics or enough interaction triggers the reveal.
7. Reveal says the whole thing is fictional and gives Farhan a playful roast.

All data is fictional. No credentials, APIs, tracking or external backend are required.
