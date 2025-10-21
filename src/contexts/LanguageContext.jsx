import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Varsayılan dil localStorage'dan alınır, yoksa 'en'
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  // Dil değiştirme fonksiyonu
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  // Dil değiştiğinde HTML lang attribute’unu güncelle
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // localStorage senkronizasyonunu garanti altına al
  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang && storedLang !== language) {
      setLanguage(storedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
