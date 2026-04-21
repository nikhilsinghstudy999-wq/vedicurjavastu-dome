'use client';
import { useEffect } from 'react';

export function TranslateLoader() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ((window as any).translate) {
      initTranslate();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.staticfile.net/translate.js/3.18.66/translate.js';
    script.async = true;
    script.onload = initTranslate;
    document.body.appendChild(script);

    function initTranslate() {
      const t = (window as any).translate;
      if (!t) return;
      t.language.setLocal('english');
      t.service.use('client.edge');
      t.setAutoDiscriminateLocalLanguage();
      t.ignore.class.push('notranslate');
      t.ignore.class.push('ignore-translate');
      t.listener.start();
      t.execute();
    }
  }, []);
  return null;
}
