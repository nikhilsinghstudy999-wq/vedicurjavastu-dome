let scriptLoaded = false;
let scriptLoading = false;

const TRANSLATE_CDN = 'https://cdn.staticfile.net/translate.js/3.18.66/translate.js';

function loadTranslate(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') { resolve(); return; }
    const w = window as any;
    if (w.translate?.language) { scriptLoaded = true; resolve(); return; }
    if (scriptLoading) {
      const check = setInterval(() => {
        if (scriptLoaded || w.translate?.language) { clearInterval(check); scriptLoaded = true; resolve(); }
      }, 100);
      return;
    }
    scriptLoading = true;
    const script = document.createElement('script');
    script.src = TRANSLATE_CDN;
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      scriptLoading = false;
      const t = w.translate;
      if (!t) { resolve(); return; }
      t.language.setLocal('english');
      t.service.use('client.edge');
      t.ignore.class.push('translated');
      resolve();
    };
    script.onerror = () => { scriptLoading = false; resolve(); };
    document.body.appendChild(script);
  });
}

export async function translatePage(): Promise<void> {
  if (typeof window === 'undefined') return;
  const saved = localStorage.getItem('language');
  if (!saved || saved === 'en') return;

  await loadTranslate();
  const t = (window as any).translate;
  if (!t?.changeLanguage) return;

  t.changeLanguage(saved === 'hi' ? 'hindi' : 'english');
  await new Promise(r => setTimeout(r, 200));
  t.execute();
}

export async function changeLanguage(lang: string): Promise<void> {
  // Not used directly
}
