import { state, TOTAL, PASS, LETTERS, DRAFT_KEY, pickQuestions, saveToURL } from './state.js';
import { speak } from './tts.js';
import {
  saveSession, saveDraftToHistory, clearDraft, checkForDraft, getDraft,
} from './history.js';

export function startQuiz(seed) {
  saveDraftToHistory();
  clearDraft();
  try { localStorage.setItem(DRAFT_KEY + '-started', new Date().toISOString()); } catch (e) {}

  state.quizSeed = (seed !== undefined) ? seed : (Math.floor(Math.random() * 0xFFFFFFFE) + 1);
  state.quiz     = pickQuestions(state.quizSeed);
  state.current  = 0;
  state.score    = 0;
  state.answers  = [];
  state.answered = false;
  state.sessionSaved = false;

  document.getElementById('start-screen').style.display  = 'none';
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display   = 'block';

  saveToURL();
  renderQuestion();
}

export function renderQuestion() {
  const q = state.quiz[state.current];
  const existingAns = state.answers[state.current];
  state.answered = !!existingAns;

  document.getElementById('progress-bar').style.width  = ((state.current / TOTAL) * 100) + '%';
  document.getElementById('q-counter').textContent     = `Question ${state.current + 1} of ${TOTAL}`;
  document.getElementById('chapter-tag').textContent   = q.chapter;
  document.getElementById('question-text').textContent = q.q;

  const fb = document.getElementById('feedback');
  fb.className = 'feedback';
  fb.textContent = '';

  const hintText = q.hint || '';
  document.getElementById('hint-box').classList.remove('visible');
  document.getElementById('hint-content').textContent = hintText;
  document.getElementById('hint-btn').style.display = hintText ? 'inline-block' : 'none';

  if (!existingAns) {
    const optText = q.a.map((opt, idx) => `${LETTERS[idx]}: ${opt}`).join('. ');
    speak(`${q.q}. ${optText}`);
  }

  const btnNext = document.getElementById('btn-next');
  btnNext.style.display = 'none';

  const opts = document.getElementById('options');
  opts.innerHTML = '';

  q.a.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="letter">${LETTERS[i]}</span><span>${text}</span>`;
    btn.onclick = () => selectAnswer(i, btn);
    opts.appendChild(btn);
  });

  if (existingAns) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);
    if (existingAns.right) {
      allBtns[existingAns.userIdx].classList.add('correct');
      fb.className = 'feedback correct';
      fb.textContent = '✓ Correct!';
    } else {
      allBtns[existingAns.userIdx].classList.add('wrong');
      allBtns[existingAns.correctIdx].classList.add('reveal-correct');
      fb.className = 'feedback wrong';
      fb.textContent = `✗ Incorrect. The correct answer is: ${q.a[q.correct]}`;
    }
    btnNext.style.display = 'block';
    btnNext.textContent = state.current + 1 < TOTAL ? 'Next →' : 'See Results';
  }
}

function selectAnswer(idx, btn) {
  if (state.answered) return;
  state.answered = true;

  const q = state.quiz[state.current];
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);

  const fb = document.getElementById('feedback');

  if (idx === q.correct) {
    btn.classList.add('correct');
    fb.className = 'feedback correct';
    fb.textContent = '✓ Correct!';
    state.score++;
    state.answers.push({ q: q.q, userIdx: idx, correctIdx: q.correct, opts: q.a, right: true });
  } else {
    btn.classList.add('wrong');
    allBtns[q.correct].classList.add('reveal-correct');
    fb.className = 'feedback wrong';
    fb.textContent = `✗ Incorrect. The correct answer is: ${q.a[q.correct]}`;
    state.answers.push({ q: q.q, userIdx: idx, correctIdx: q.correct, opts: q.a, right: false });
  }

  document.getElementById('btn-next').style.display = 'block';
  document.getElementById('btn-next').textContent =
    state.current + 1 < TOTAL ? 'Next →' : 'See Results';

  saveToURL();
}

export function nextQuestion() {
  window.speechSynthesis && window.speechSynthesis.cancel();
  state.current++;
  saveToURL();
  if (state.current < TOTAL) {
    renderQuestion();
  } else {
    showResults();
  }
}

export function showResults() {
  document.getElementById('quiz-screen').style.display   = 'none';
  document.getElementById('result-screen').style.display = 'block';

  const pct    = Math.round((state.score / TOTAL) * 100);
  const passed = state.score >= PASS;

  document.getElementById('result-icon').textContent   = passed ? '🎉' : '📚';
  document.getElementById('result-title').textContent  = passed ? 'You Passed!' : 'Not Passed';
  document.getElementById('result-title').className    = 'result-title ' + (passed ? 'pass' : 'fail');
  document.getElementById('score-display').textContent = `${state.score} / ${TOTAL}`;

  const bar = document.getElementById('pass-bar');
  bar.style.width = '0%';
  bar.className = 'pass-bar-fill ' + (passed ? 'pass' : 'fail');
  setTimeout(() => { bar.style.width = pct + '%'; }, 100);

  const vb = document.getElementById('verdict-box');
  vb.className = 'verdict-box ' + (passed ? 'pass' : 'fail');
  if (passed) {
    vb.innerHTML = `<strong>Congratulations!</strong> You scored <strong>${state.score}/20 (${pct}%)</strong>.<br>
      The passing score for the real Canadian citizenship test is 75% (15/20). You are ready! 🍁`;
  } else {
    vb.innerHTML = `You scored <strong>${state.score}/20 (${pct}%)</strong>.<br>
      You need at least <strong>15 correct answers</strong> to pass. Keep studying — you've got this! 📖`;
  }

  const list = document.getElementById('review-list');
  list.innerHTML = '';
  state.answers.forEach((ans, i) => {
    const hint = state.quiz[i] ? state.quiz[i].hint : '';
    const div = document.createElement('div');
    div.className = 'review-item ' + (ans.right ? 'correct' : 'wrong');
    div.innerHTML = `
      <div class="ri-q">${i + 1}. ${ans.q}</div>
      <div class="ri-ans">
        ${ans.right
          ? `<span>✓ ${ans.opts[ans.correctIdx]}</span>`
          : `Your answer: ${ans.opts[ans.userIdx]} &nbsp;|&nbsp; Correct: <span>${ans.opts[ans.correctIdx]}</span>`
        }
      </div>
      ${hint ? `<div class="ri-hint">📖 ${hint}<br><em>— Discover Canada, IRCC 2021</em></div>` : ''}`;
    list.appendChild(div);
  });

  document.getElementById('result-screen').scrollIntoView({ behavior: 'smooth' });

  if (!state.sessionSaved) {
    state.sessionSaved = true;
    saveSession();
  }
  clearDraft();
}

export function showStart() {
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display   = 'none';
  document.getElementById('start-screen').style.display  = 'block';
  history.replaceState(null, '', window.location.pathname + window.location.search);
  clearDraft();
  checkForDraft();
}

export function toggleHint() {
  const box = document.getElementById('hint-box');
  box.classList.toggle('visible');
  if (box.classList.contains('visible')) {
    speak(document.getElementById('hint-content').textContent);
  } else {
    window.speechSynthesis && window.speechSynthesis.cancel();
  }
}

export function resumeDraft() {
  const draft = getDraft();
  if (!draft) return;
  history.replaceState(null, '', '#' + draft);
  restoreFromURL();
}

export function restoreFromURL() {
  const hash = window.location.hash.slice(1);
  if (!hash) return false;

  const params = {};
  hash.split('&').forEach(part => {
    const eq = part.indexOf('=');
    if (eq > -1) params[part.slice(0, eq)] = part.slice(eq + 1);
  });

  const seed = parseInt(params.s, 10);
  if (!params.s || isNaN(seed)) return false;

  state.quizSeed = seed;
  state.quiz = pickQuestions(seed);

  const aIndices = params.a ? params.a.split(',').map(Number) : [];
  const q = params.q !== undefined ? parseInt(params.q, 10) : 0;

  state.answers = [];
  state.score   = 0;
  aIndices.forEach((userIdx, i) => {
    if (i >= state.quiz.length) return;
    const qObj  = state.quiz[i];
    const right = userIdx === qObj.correct;
    if (right) state.score++;
    state.answers.push({ q: qObj.q, userIdx, correctIdx: qObj.correct, opts: qObj.a, right });
  });

  state.current = (!isNaN(q) && q >= 0) ? Math.min(q, TOTAL) : 0;
  state.answered = state.answers.length > state.current;
  state.sessionSaved = (state.current >= TOTAL);

  if (state.current >= TOTAL) {
    document.getElementById('start-screen').style.display  = 'none';
    document.getElementById('quiz-screen').style.display   = 'none';
    showResults();
  } else {
    document.getElementById('start-screen').style.display  = 'none';
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display   = 'block';
    renderQuestion();
  }

  return true;
}
