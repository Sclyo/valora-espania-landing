
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationKey, Translations } from '@/translations';

type Language = 'es' | 'en' | 'ca' | 'val' | 'gl' | 'eu';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
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
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('valoraLanguage') as Language;
    if (savedLanguage) return savedLanguage;
    
    // Default to Spanish instead of using browser language
    return 'es';
  });

  useEffect(() => {
    // Save language preference to localStorage when it changes
    localStorage.setItem('valoraLanguage', language);
  }, [language]);

  // Function to get translation for a key
  const t = (key: TranslationKey): string => {
    // Get the current language translations
    const currentTranslations = translations[language] as Translations;
    
    // If the key exists in the current language, return it
    if (currentTranslations && currentTranslations[key]) {
      return currentTranslations[key];
    }
    
    // Fallback to Spanish if translation is missing
    return translations.es[key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
