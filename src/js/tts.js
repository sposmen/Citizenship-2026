import { TTS_KEY, LETTERS, state, TOTAL } from './state.js';

let ttsEnabled = false;

export function initTTS() {
  if (!('speechSynthesis' in window)) {
    const btn = document.getElementById('tts-btn');
    if (btn) btn.style.display = 'none';
    return;
  }
  ttsEnabled = localStorage.getItem(TTS_KEY) === '1';
  updateTTSBtn();
}

export function toggleTTS() {
  if (!('speechSynthesis' in window)) return;
  ttsEnabled = !ttsEnabled;
  try { localStorage.setItem(TTS_KEY, ttsEnabled ? '1' : '0'); } catch (e) {}
  updateTTSBtn();
  if (!ttsEnabled) {
    window.speechSynthesis.cancel();
  } else if (state.quiz.length && state.current < TOTAL && !state.answered) {
    const q = state.quiz[state.current];
    const optText = q.a.map((opt, idx) => `${LETTERS[idx]}: ${opt}`).join('. ');
    speak(`${q.q}. ${optText}`);
  }
}

function updateTTSBtn() {
  const btn = document.getElementById('tts-btn');
  if (!btn) return;
  if (ttsEnabled) {
    btn.textContent = '🔊';
    btn.title = 'Audio on — tap to mute';
    btn.classList.add('active');
  } else {
    btn.textContent = '🔇';
    btn.title = 'Read question aloud';
    btn.classList.remove('active');
  }
}

export function speak(text) {
  if (!ttsEnabled || !text || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-CA';
  utter.rate = 0.92;
  // Small delay helps iOS Safari start reliably
  setTimeout(() => window.speechSynthesis.speak(utter), 80);
}
