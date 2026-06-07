import { QUESTIONS } from '../data/questions.js';
import { mulberry32, shuffle } from './prng.js';

export const TOTAL = 20;
export const PASS  = 15;
export const LETTERS = ['A', 'B', 'C', 'D'];
export const HISTORY_KEY = 'citizenship-quiz-history';
export const DRAFT_KEY   = 'citizenship-quiz-draft';
export const TTS_KEY     = 'citizenship-tts';

export const state = {
  quiz: [],
  current: 0,
  score: 0,
  answers: [],
  answered: false,
  quizSeed: 0,
  sessionSaved: false,
};

export function pickQuestions(seed) {
  const rng = mulberry32(seed);
  const pool = shuffle(QUESTIONS, rng).slice(0, TOTAL);
  return pool.map(q => {
    const indexed = q.a.map((text, i) => ({ text, orig: i }));
    const shuffled = shuffle(indexed, rng);
    const newCorrect = shuffled.findIndex(x => x.orig === q.correct);
    return {
      q: q.q,
      a: shuffled.map(x => x.text),
      correct: newCorrect,
      chapter: q.chapter,
      hint: q.hint || '',
    };
  });
}

export function saveToURL() {
  const aStr = state.answers.map(ans => ans.userIdx).join(',');
  const hash = 's=' + state.quizSeed + '&q=' + state.current + (aStr ? '&a=' + aStr : '');
  history.replaceState(null, '', '#' + hash);
  try { localStorage.setItem(DRAFT_KEY, hash); } catch (e) {}
}

export function getPoolSize() {
  return QUESTIONS.length;
}
