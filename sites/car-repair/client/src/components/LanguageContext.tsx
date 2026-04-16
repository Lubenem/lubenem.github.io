import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from '@/lib/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (typeof import('@/lib/translations').content)['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import { content } from '@/lib/translations';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  // Simple auto-detect
  useEffect(() => {
    const browserLang = navigator.language;
    if (browserLang.includes('uk') || browserLang.includes('ua')) {
      setLang('ua');
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
