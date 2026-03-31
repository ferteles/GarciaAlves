"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Language, Dictionary } from "@/i18n/dictionaries";

export interface MenuItem {
  label: string;
  link: string;
}

export interface MenuData {
  items_pt: MenuItem[];
  items_en: MenuItem[];
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
  menuItems: MenuItem[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ 
  children, 
  initialMenu 
}: { 
  children: React.ReactNode,
  initialMenu?: MenuData 
}) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("app_lang") as Language;
    if (savedLang && (savedLang === "pt" || savedLang === "en")) {
      setLanguageState(savedLang);
      document.cookie = `NEXT_LOCALE=${savedLang}; path=/; max-age=31536000`;
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app_lang", lang);
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;
    // Refresh page if there's server components to re-fetch
    window.location.reload();
  };

  const t = dictionaries[language];

  // Dynamic menu items from Payload
  const menuItems = initialMenu 
    ? (language === "pt" ? initialMenu.items_pt : initialMenu.items_en)
    : [];

  // Evita hydration mismatch guardando o render inicial
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: "pt", setLanguage, t: dictionaries.pt, menuItems: initialMenu?.items_pt || [] }}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, menuItems }}>
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
