import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import fr from "./fr.json";
import en from "./en.json";

export type Language = "fr" | "en";

const translations = { fr, en } as const;

type Translations = typeof fr;

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getStoredLanguage(): Language | null {
  try {
    return window.localStorage.getItem("subflow-language") === "en" ? "en" : null;
  } catch {
    return null;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start in French so the client matches the prerendered HTML,
  // then switch to the stored preference once hydrated.
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const stored = getStoredLanguage();
    if (stored) setLanguageState(stored);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("subflow-language", language);
    } catch {
      // Storage unavailable (private mode); the choice just won't persist.
    }
    document.documentElement.lang = language;
  }, [language]);

  const value: LanguageContextValue = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
