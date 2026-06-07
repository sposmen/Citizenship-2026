import { HISTORY_KEY, DRAFT_KEY, TOTAL, PASS, state } from './state.js';

export function saveSession() {
  const entry = {
    date: new Date().toISOString(),
    seed: state.quizSeed,
    score: state.score,
    total: TOTAL,
    hash: window.location.hash,
    incomplete: false,
  };
  const hist = getHistory().filter(e => e.seed !== state.quizSeed);
  hist.unshift(entry);
  if (hist.length > 50) hist.pop();
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(hist)); } catch (e) {}
}

export function saveDraftToHistory() {
  const draft = getDraft();
  if (!draft) return;
  const params = parseHash(draft);
  const seed = parseInt(params.s, 10);
  const q    = parseInt(params.q, 10);
  if (isNaN(seed) || isNaN(q) || q >= TOTAL) return;
  const nAns = params.a ? params.a.split(',').length : 0;
  if (nAns === 0) return;
  const startedStr = localStorage.getItem(DRAFT_KEY + '-started');
  const entry = {
    date: startedStr || new Date().toISOString(),
    seed,
    answered: nAns,
    total: TOTAL,
    hash: '#' + draft,
    incomplete: true,
  };
  const hist = getHistory().filter(e => e.seed !== seed);
  hist.unshift(entry);
  if (hist.length > 50) hist.pop();
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(hist)); } catch (e) {}
}

export function getHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; } catch { return []; }
}

export function getDraft() {
  try { return localStorage.getItem(DRAFT_KEY); } catch { return null; }
}

export function clearDraft() {
  try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
  try { localStorage.removeItem(DRAFT_KEY + '-started'); } catch (e) {}
  const box = document.getElementById('resume-box');
  if (box) box.style.display = 'none';
}

export function checkForDraft(onResume) {
  const draft = getDraft();
  if (!draft) return;
  const params = parseHash(draft);
  const seed = parseInt(params.s, 10);
  const q    = parseInt(params.q, 10);
  if (isNaN(seed) || isNaN(q) || q >= TOTAL) return;
  const startedStr = localStorage.getItem(DRAFT_KEY + '-started');
  const whenStr = startedStr
    ? new Date(startedStr).toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit' })
    : '';
  const box = document.getElementById('resume-box');
  box.innerHTML = `<button class="btn-secondary" style="width:100%" onclick="window.resumeDraft()">
    ↩ Resume practice — Q${Math.min(q + 1, TOTAL)} of ${TOTAL}${whenStr ? ' · started ' + whenStr : ''}
  </button>`;
  box.style.display = 'block';
}

export function toggleHistory() {
  document.getElementById('history-panel').classList.contains('open')
    ? closeHistory()
    : openHistory();
}

export function openHistory() {
  renderHistory();
  document.getElementById('history-panel').classList.add('open');
  document.getElementById('history-overlay').classList.add('open');
}

export function closeHistory() {
  document.getElementById('history-panel').classList.remove('open');
  document.getElementById('history-overlay').classList.remove('open');
}

export function renderHistory() {
  const list = document.getElementById('history-list');
  const hist = getHistory();

  let draftHtml = '';
  const draft = getDraft();
  if (draft) {
    const dp = parseHash(draft);
    const dq = parseInt(dp.q, 10);
    if (!isNaN(dq) && dq < TOTAL) {
      const nAns = dp.a ? dp.a.split(',').length : 0;
      const startedStr = localStorage.getItem(DRAFT_KEY + '-started');
      const d = startedStr ? new Date(startedStr) : null;
      const dateStr = d ? d.toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
      const timeStr = d ? d.toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit' }) : '';
      draftHtml = `<a href="#${draft}" class="history-entry" onclick="window.closeHistory()">
        <div class="he-date">${dateStr}${timeStr ? ' · ' + timeStr : ''}</div>
        <div class="he-score ongoing">↩ In progress · Q${dq + 1}/${TOTAL} · ${nAns} answered</div>
      </a>`;
    }
  }

  if (!hist.length && !draftHtml) {
    list.innerHTML = '<p class="history-empty">No sessions yet.<br>Complete a quiz to see your history here.</p>';
    return;
  }

  list.innerHTML = draftHtml + hist.map(entry => {
    const d = new Date(entry.date);
    const dateStr = d.toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' });
    const timeStr = d.toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit' });
    if (entry.incomplete) {
      return `<a href="${entry.hash}" class="history-entry" onclick="window.closeHistory()">
        <div class="he-date">${dateStr} · ${timeStr}</div>
        <div class="he-score ongoing">↩ Incomplete · ${entry.answered}/${entry.total} answered</div>
      </a>`;
    }
    const pct    = Math.round((entry.score / entry.total) * 100);
    const passed = entry.score >= PASS;
    return `<a href="${entry.hash}" class="history-entry" onclick="window.closeHistory()">
      <div class="he-date">${dateStr} · ${timeStr}</div>
      <div class="he-score ${passed ? 'pass' : 'fail'}">${entry.score}/${entry.total} · ${pct}% · ${passed ? '✓ Pass' : '✗ Fail'}</div>
    </a>`;
  }).join('');
}

export function clearHistory() {
  if (!confirm('Clear all practice history?')) return;
  try { localStorage.removeItem(HISTORY_KEY); } catch (e) {}
  renderHistory();
}

function parseHash(hash) {
  const params = {};
  hash.split('&').forEach(part => {
    const eq = part.indexOf('=');
    if (eq > -1) params[part.slice(0, eq)] = part.slice(eq + 1);
  });
  return params;
}
