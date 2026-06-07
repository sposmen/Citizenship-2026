# Canadian Citizenship Test Practice 2026

A free, browser-based practice simulator for the Canadian citizenship test. No login, no install — works entirely in the browser and is hosted on GitHub Pages.

## Features

- **20 random questions** drawn from a pool of 438, covering all major topics from the official *Discover Canada* study guide.
- **Pass/fail at 75%** (15/20 correct) — same threshold as the real test.
- **Session persistence** — the URL encodes a seed so reloading the page restores your exact questions, all answered questions with feedback, and your current position.
- **Question review** at the end of each session showing correct answers for every missed question.

## Question pool

438 questions across 11 chapters:

| Chapter | Questions |
|---|---|
| Canada's History | 98 |
| Regions of Canada | 77 |
| Canadian Symbols | 46 |
| Who We Are | 40 |
| Rights & Responsibilities | 38 |
| Modern Canada | 37 |
| How Canada is Governed | 31 |
| Federal Elections | 30 |
| Holidays & Economy | 19 |
| Confederation | 15 |
| Victoria Cross & Honours | 7 |

All questions are based on facts stated in the official *Discover Canada: The Rights and Responsibilities of Citizenship* guide (IRCC, 2021 edition, ISBN 978-0-660-39275-2). The guide is stored in `reference/` for cross-checking.

## Running locally

Requires [Node.js](https://nodejs.org/) 18+ and [Yarn](https://classic.yarnpkg.com/).

```bash
# 1. Install dependencies (first time only)
yarn install

# 2. Start the dev server with hot reload
yarn dev
# → http://localhost:5173/Citizenship-2026/

# 3. Build a production bundle
yarn build
# → output goes to dist/

# 4. Preview the production build locally
yarn preview
# → http://localhost:4173/Citizenship-2026/
```

The dev server (`yarn dev`) reflects code changes instantly without a page reload. Use `yarn preview` to test the minified production build before pushing.

## Accuracy policy

The app matches the **official guide**, not current real-world facts. Where the guide and reality differ (e.g. electoral districts: the guide says 308, reality is 338), the guide wins. Time-sensitive facts (current Prime Minister, Governor General, etc.) are intentionally excluded.
