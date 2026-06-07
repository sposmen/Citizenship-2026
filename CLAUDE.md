# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A GitHub Pages app for practising the Canadian citizenship test. Source lives in `src/`, built with Vite + Yarn, deployed via GitHub Actions to the Pages branch.

## Branches

- **`main`** — source branch; all development happens here. GitHub Actions builds and auto-deploys to the Pages branch on every push to `main`.
- **`claude/canada-citizenship-quiz-app-TSMgj`** — GitHub Pages branch; contains only the built output from `dist/`. Never push to this branch manually.

**Never push hand-edited files to the Pages branch.** Push to `main` and let CI deploy.

## Running locally

```bash
yarn install     # first time only
yarn dev         # dev server at http://localhost:5173/Citizenship-2026/
yarn build       # production build → dist/
yarn preview     # preview the built dist/ locally
```

## Architecture

### Directory layout

```
├── src/
│   ├── index.html          # HTML shell — no inline CSS/JS
│   ├── css/
│   │   └── main.css        # all styles
│   ├── js/
│   │   ├── main.js         # entry point — wires everything together
│   │   ├── prng.js         # mulberry32 PRNG + shuffle
│   │   ├── state.js        # shared state object, pickQuestions, saveToURL
│   │   ├── quiz.js         # screen logic: startQuiz, renderQuestion, etc.
│   │   ├── tts.js          # Web Speech API (TTS)
│   │   ├── history.js      # localStorage history + draft persistence
│   │   └── pwa.js          # service worker registration + install prompt
│   └── data/
│       └── questions.js    # export const QUESTIONS = [...] (438 questions)
├── public/
│   ├── sw.js               # service worker (cache-first, citizenship-v3)
│   ├── manifest.json       # PWA manifest
│   └── icon.svg            # app icon
├── .github/
│   └── workflows/
│       └── deploy.yml      # build + deploy to Pages branch on main push
├── vite.config.js          # root:'src', publicDir:'../public', base:'/Citizenship-2026/'
├── package.json            # yarn scripts: dev / build / preview
├── yarn.lock               # lockfile — commit this
└── reference/
    ├── discover-canada-2021-official.epub
    └── discover-canada-2021-text.txt
```

### Module dependency order (no circular deps)

`prng.js` → `data/questions.js` → `state.js` → `tts.js` / `history.js` / `pwa.js` → `quiz.js` → `main.js`

### Screen flow

Start screen → Quiz screen (20 questions) → Result screen.

- `startQuiz(seed?)` — generates or accepts a seed, calls `pickQuestions(seed)`, resets state, shows quiz screen, writes hash to URL.
- `renderQuestion()` — renders current question; restores answered visual state on URL restore.
- `selectAnswer(idx, btn)` — locks in answer, updates score and `answers[]`, calls `saveToURL()`.
- `nextQuestion()` — increments `current`, calls `saveToURL()`, then either `renderQuestion()` or `showResults()`.
- `showStart()` — clears URL hash so reload returns to start screen.

### Seeded PRNG and URL state

`mulberry32(seed)` returns a deterministic RNG. `shuffle(arr, rng)` uses it instead of `Math.random()`.

URL hash format: `#s=<seed>&q=<currentIdx>&a=<ans0,ans1,...>`

- `s` — 32-bit integer seed; determines which 20 questions are picked and in which order, including option shuffling.
- `q` — current question index (0–19 during quiz, 20 on result screen).
- `a` — comma-separated user answer indices for answered questions.

`restoreFromURL()` runs on page load, rebuilds `quiz[]` and `answers[]` from the hash.

### Shared state

All modules share a single mutable object exported from `state.js`:

```js
export const state = { quiz, current, score, answers, answered, quizSeed, sessionSaved };
```

### window.* bindings

`main.js` exposes all onclick handlers on `window` so HTML `onclick="..."` attributes work with the bundled ES modules:

```js
window.startQuiz = startQuiz;
window.toggleTTS = toggleTTS;
// … etc.
```

### Question schema

```js
{
  q: "Question text",
  a: ["Option A", "Option B", "Option C", "Option D"],  // always 4 options
  correct: 0,   // 0-based index into a[]
  chapter: "Canada's History",
  hint: "Passage from Discover Canada matched by TF-IDF keyword scoring"
}
```

Options are shuffled at runtime inside `pickQuestions()`; `correct` is re-mapped after shuffling.

### Question pool

438 questions across 11 chapters (see `src/data/questions.js`). Chapters: Canada's History (98), Regions of Canada (77), Canadian Symbols (46), Who We Are (40), Rights & Responsibilities (38), Modern Canada (37), How Canada is Governed (31), Federal Elections (30), Holidays & Economy (19), Confederation (15), Victoria Cross & Honours (7).

## Source of truth for question content

All questions must be verifiable against `reference/discover-canada-2021-text.txt` (plain-text extraction of the official IRCC *Discover Canada* 2021 EPUB). The EPUB itself is at `reference/discover-canada-2021-official.epub`.

**Never correct a question based on current real-world facts** — the app intentionally matches the guide, not reality. Known deliberate discrepancies:

- Electoral districts: **308** (guide says 308; real-world is 338).
- Major political parties: **four** (Bloc Québécois, Conservative, Liberal, NDP).
- Electric light bulb is credited to Canadians Matthew Evans and Henry Woodward in the guide — any "NOT a Canadian invention" framing around this is wrong.

**Exclude time-sensitive facts** (current PM, Governor General, etc.) — they change between guide editions.

## localStorage keys

| Key | Purpose |
|---|---|
| `citizenship-quiz-history` | array of completed + abandoned sessions |
| `citizenship-quiz-draft` | URL hash of in-progress session |
| `citizenship-quiz-draft-started` | ISO timestamp when current draft started |
| `citizenship-tts` | `'1'` if TTS is enabled |
