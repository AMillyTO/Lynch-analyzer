# Lynch Analyzer — Magellan Research Terminal

A Peter Lynch-style stock analysis tool built with React + Vite.

## Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → New Project → import this repo
3. Vercel auto-detects Vite — just click Deploy
4. Your app is live at `your-project.vercel.app`

## Adding New Tickers

All stock data lives in `src/LynchAnalyzer.jsx` in the `PRELOADED` object.
Each ticker entry follows the same schema — ask Claude to research and add new ones.

## Stack

- React 18
- Vite 5
- No other dependencies — pure React inline styles
