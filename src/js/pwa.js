let deferredInstallPrompt = null;

export function initPWA() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredInstallPrompt = e;
    document.getElementById('install-banner').classList.add('visible');
  });
  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    dismissInstall();
  });
}

export function installApp() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(() => {
    deferredInstallPrompt = null;
    dismissInstall();
  });
}

export function dismissInstall() {
  document.getElementById('install-banner').classList.remove('visible');
}
