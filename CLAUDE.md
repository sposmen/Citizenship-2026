# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A zero-dependency, single-page GitHub Pages app for practising the Canadian citizenship test. No build step, no package manager, no framework — just `index.html` + `questions.js`.

## Running locally

Open `index.html` directly in a browser, or serve it with any static file server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

There are no tests, no linter, and no CI pipeline. Validation is done manually in the browser.

## Architecture

Two files do all the work:

- **`index.html`** — the entire SPA: CSS, HTML structure (three screens), and all JS logic inline in a `<script>` block at the bottom.
- **`questions.js`** — declares the global `const QUESTIONS = [...]` array loaded before `index.html`'s inline script.

### Screen flow

Start screen → Quiz screen (20 questions) → Result screen. Functions:

- `startQuiz(seed?)` — generates or accepts a seed, calls `pickQuestions(seed)`, resets state, shows quiz screen, writes hash to URL.
- `renderQuestion()` — renders current question; if `answers[current]` already exists (restored session), it re-applies the answered visual state.
- `selectAnswer(idx, btn)` — locks in answer, updates score and `answers[]`, calls `saveToURL()`.
- `nextQuestion()` — increments `current`, calls `saveToURL()`, then either `renderQuestion()` or `showResults()`.
- `showStart()` — clears URL hash so reload returns to start screen.

### Seeded PRNG and URL state

`mulberry32(seed)` returns a deterministic RNG. `shuffle(arr, rng)` uses it instead of `Math.random()`. This makes the quiz fully reproducible from a seed.

URL hash format: `#s=<seed>&q=<currentIdx>&a=<ans0,ans1,...>`

- `s` — 32-bit integer seed; determines which 20 questions are picked and in which order, including option shuffling.
- `q` — current question index (0–19 during quiz, 20 on result screen).
- `a` — comma-separated user answer indices for all answered questions (only answered ones).

`restoreFromURL()` runs on page load, rebuilds `quiz[]` and `answers[]` from the hash, and drops the user back at the exact question and visual state they left.

### Question schema

```js
{
  q: "Question text",
  a: ["Option A", "Option B", "Option C", "Option D"],  // always 4 options
  correct: 0,   // 0-based index into a[]
  chapter: "Canada's History"
}
```

Options are shuffled at runtime inside `pickQuestions()`; `correct` is re-mapped after shuffling, so `correct` in `questions.js` always refers to the original `a[]` order.

### Question pool

438 questions across 11 chapters (see `questions.js`). Chapters: Canada's History (98), Regions of Canada (77), Canadian Symbols (46), Who We Are (40), Rights & Responsibilities (38), Modern Canada (37), How Canada is Governed (31), Federal Elections (30), Holidays & Economy (19), Confederation (15), Victoria Cross & Honours (7).

## Source of truth for question content

All questions must be verifiable against `reference/discover-canada-2021-text.txt` (plain-text extraction of the official IRCC *Discover Canada* 2021 EPUB). The EPUB itself is at `reference/discover-canada-2021-official.epub`.

**Never correct a question based on current real-world facts** — the app intentionally matches the guide, not reality. Known deliberate discrepancies:

- Electoral districts: **308** (guide says 308; real-world is 338).
- Major political parties: **four** (Bloc Québécois, Conservative, Liberal, NDP).
- Electric light bulb is credited to Canadians Matthew Evans and Henry Woodward in the guide — any "NOT a Canadian invention" framing around this is wrong.

**Exclude time-sensitive facts** (current PM, Governor General, etc.) — they change between guide editions.

## Branches

- `claude/canada-citizenship-quiz-app-TSMgj` — live GitHub Pages branch (source for the public site).
- `main` — stable base, kept fast-forward in sync with the Pages branch.

Always develop on the Pages branch, then fast-forward `main`:

```bash
git checkout main
git merge --ff claude/canada-citizenship-quiz-app-TSMgj
git push -u origin main
```
