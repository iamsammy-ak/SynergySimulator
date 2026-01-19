# M&A Merger Simulator

A web-based financial modeling tool for simulating merger and acquisition transactions. Built with React and TypeScript, runs entirely client-side.

## Features

- **Transaction Modeling**: Calculate acquisition premiums, cash/stock mix, and new share issuance
- **Pro Forma Analysis**: Model combined company financials including synergies
- **Accretion/Dilution**: Analyze EPS impact and determine if deal is accretive or dilutive
- **Ownership Structure**: Calculate post-merger ownership splits
- **Valuation Metrics**: Enterprise value and estimated IRR calculations
- **Debt Financing**: Model impact of acquisition financing on returns

## Getting Started

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Usage

1. Enter acquirer and target company financials
2. Set merger assumptions (premium, cash/stock split, synergies)
3. Configure debt financing terms
4. View real-time analysis of the transaction

## Technology

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Hosting**: Deploy to Vercel, Netlify, or GitHub Pages (free)
- **Architecture**: 100% client-side, no backend required

## Deployment

This app can be deployed for free on:
- Vercel: `vercel --prod`
- Netlify: Drag and drop the `dist` folder
- GitHub Pages: Push to gh-pages branch

## License

MIT - Free to use for educational and commercial purposes
