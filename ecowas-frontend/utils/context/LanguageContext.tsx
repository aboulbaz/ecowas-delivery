import React, { createContext, useState, useContext } from 'react';
import { LANGUAGES } from 'utils/constants';

interface LanguageContextProps {
  language: LANGUAGES;
  setLanguage: (newLanguage: LANGUAGES) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState<LANGUAGES>(LANGUAGES.EN);

  const updateLanguage = (newLanguage: LANGUAGES) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguageContext = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguageContext };