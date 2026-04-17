"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Language, Dictionary } from "@/i18n/dictionaries";

export interface MenuItem {
  label: string;
  link: string;
}

export interface NavItem {
  label_pt: string;
  label_en: string;
  link: string;
}

export interface MenuData {
  navItems: NavItem[];
}

export interface FooterData {
  title_pt: string;
  title_en: string;
  description_pt: string;
  description_en: string;
  email: string;
  phone: string;
  address_line1_pt: string;
  address_line2_pt: string;
  address_line3_pt: string;
  address_line1_en: string;
  address_line2_en: string;
  address_line3_en: string;
  socialLinks: { platform: string; url: string }[];
}

export interface WhatsAppData {
  active: boolean;
  phoneNumber: string;
  message_pt: string;
  message_en: string;
  label_pt: string;
  label_en: string;
}

export interface LocalizedFooter {
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string[];
  socialLinks: { platform: string; url: string }[];
}

export interface LocalizedWhatsApp {
  active: boolean;
  phoneNumber: string;
  message: string;
  label: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
  menuItems: MenuItem[];
  footer: LocalizedFooter | null;
  whatsapp: LocalizedWhatsApp | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ 
  children, 
  initialMenu,
  initialFooter,
  initialWhatsApp
}: { 
  children: React.ReactNode,
  initialMenu?: MenuData,
  initialFooter?: FooterData,
  initialWhatsApp?: WhatsAppData
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
  const menuItems: MenuItem[] = initialMenu?.navItems 
    ? initialMenu.navItems.map((item: any) => ({
        label: language === "pt" ? item.label_pt : item.label_en,
        link: item.link
      }))
    : [];

  // Localized footer data
  const footer: LocalizedFooter | null = initialFooter ? {
    title: language === 'pt' ? initialFooter.title_pt : initialFooter.title_en,
    description: language === 'pt' ? initialFooter.description_pt : initialFooter.description_en,
    email: initialFooter.email,
    phone: initialFooter.phone,
    address: language === 'pt' 
      ? [initialFooter.address_line1_pt, initialFooter.address_line2_pt, initialFooter.address_line3_pt] 
      : [initialFooter.address_line1_en, initialFooter.address_line2_en, initialFooter.address_line3_en],
    socialLinks: initialFooter.socialLinks || [],
  } : null;

  // Localized WhatsApp data
  const whatsapp: LocalizedWhatsApp | null = initialWhatsApp ? {
    active: !!initialWhatsApp.active,
    phoneNumber: initialWhatsApp.phoneNumber || (initialWhatsApp as any).phone_number || "",
    message: language === 'pt' ? (initialWhatsApp.message_pt || "") : (initialWhatsApp.message_en || ""),
    label: language === 'pt' ? (initialWhatsApp.label_pt || "") : (initialWhatsApp.label_en || ""),
  } : null;

  // Evita hydration mismatch guardando o render inicial
  if (!mounted) {
    const defaultFooter: LocalizedFooter | null = initialFooter ? {
       title: initialFooter.title_pt,
       description: initialFooter.description_pt,
       email: initialFooter.email,
       phone: initialFooter.phone,
       address: [
         initialFooter.address_line1_pt || "", 
         initialFooter.address_line2_pt || "", 
         initialFooter.address_line3_pt || ""
       ],
       socialLinks: initialFooter.socialLinks || [],
    } : null;

    const defaultWhatsApp: LocalizedWhatsApp | null = initialWhatsApp ? {
       active: !!initialWhatsApp.active,
       phoneNumber: initialWhatsApp.phoneNumber || (initialWhatsApp as any).phone_number || "",
       message: initialWhatsApp.message_pt || "",
       label: initialWhatsApp.label_pt || "",
    } : null;

    return (
      <LanguageContext.Provider value={{ 
        language: "pt", 
        setLanguage, 
        t: dictionaries.pt, 
        menuItems: initialMenu?.navItems?.map((item: any) => ({
          label: item.label_pt,
          link: item.link
        })) || [], 
        footer: defaultFooter,
        whatsapp: defaultWhatsApp
      }}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, menuItems, footer, whatsapp }}>
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
