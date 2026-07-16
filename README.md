# CasabeDelCaribe.com

One-page wholesale / distributor website for **Peña "Casabe del Caribe"** — authentic Dominican cassava bread, available for wholesale across Canada.

## What's here
- `index.html` — the complete self-contained site (all CSS, JS and images inline).
- `server.js` — tiny Node server that serves `index.html` on `$PORT` (for Railway).
- `package.json` — `npm start` runs the server.
- `railway.json` — Railway build/deploy config.

## Run locally
```bash
npm start
# open http://localhost:3000
```

## Deploy on Railway
1. Push this repo to GitHub.
2. In Railway: **New Project → Deploy from GitHub repo** → pick this repo.
3. Railway auto-detects Node, runs `npm start`, and assigns a public URL.
4. **Settings → Networking → Generate Domain** for a public link, or add the custom domain `CasabeDelCaribe.com`.

## Before going live
Edit `index.html` and replace the placeholders:
- Contact: `[ Your phone ]`, `[ your email ]`, WhatsApp number, `[Your Company]`.
- Activate the inquiry form: sign up free at https://formspree.io and replace `YOUR_FORM_ID`.
