
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en' | 'ca' | 'val' | 'gl' | 'eu';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage or use browser language or default to Spanish
    const savedLanguage = localStorage.getItem('valoraLanguage') as Language;
    if (savedLanguage) return savedLanguage;
    
    const browserLanguage = navigator.language.split('-')[0];
    if (['es', 'en', 'ca', 'val', 'gl', 'eu'].includes(browserLanguage)) {
      return browserLanguage as Language;
    }
    
    return 'es'; // Default to Spanish
  });

  useEffect(() => {
    // Save language preference to localStorage when it changes
    localStorage.setItem('valoraLanguage', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
