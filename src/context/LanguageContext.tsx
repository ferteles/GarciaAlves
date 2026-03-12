"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Language, Dictionary } from "@/i18n/dictionaries";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Carregar idioma do localStorage no mount
    const savedLang = localStorage.getItem("app_lang") as Language;
    if (savedLang && (savedLang === "pt" || savedLang === "en")) {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app_lang", lang);
  };

  const t = dictionaries[language];

  // Evita hydration mismatch guardando o render inicial
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: "pt", setLanguage, t: dictionaries.pt }}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
