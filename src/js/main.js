import '../css/main.css';
import { getPoolSize } from './state.js';
import { initPWA, installApp, dismissInstall } from './pwa.js';
import { initTTS, toggleTTS } from './tts.js';
import {
  toggleHistory, openHistory, closeHistory, clearHistory,
} from './history.js';
import {
  startQuiz, nextQuestion, showStart, toggleHint, resumeDraft, restoreFromURL,
} from './quiz.js';
import { checkForDraft } from './history.js';

// Expose all onclick handlers on window (HTML uses onclick="...")
window.startQuiz    = startQuiz;
window.nextQuestion = nextQuestion;
window.showStart    = showStart;
window.toggleHint   = toggleHint;
window.resumeDraft  = resumeDraft;
window.toggleTTS    = toggleTTS;
window.installApp   = installApp;
window.dismissInstall = dismissInstall;
window.toggleHistory = toggleHistory;
window.openHistory  = openHistory;
window.closeHistory = closeHistory;
window.clearHistory = clearHistory;

// Populate pool counts in start screen
const poolSize = getPoolSize();
document.getElementById('pool-size').textContent  = poolSize;
document.getElementById('pool-count').textContent = poolSize + ' official-style questions';

initPWA();
initTTS();

window.addEventListener('hashchange', () => {
  if (!restoreFromURL()) {
    document.getElementById('quiz-screen').style.display   = 'none';
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('start-screen').style.display  = 'block';
  }
});

if (!restoreFromURL()) checkForDraft();
