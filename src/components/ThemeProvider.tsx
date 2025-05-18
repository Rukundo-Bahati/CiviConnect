
import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light" | "system";
export type LanguageCode = "en" | "rw";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultLanguage?: LanguageCode;
  storageKey?: string;
  languageStorageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  language: "en",
  setLanguage: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultLanguage = "en",
  storageKey = "ces-ui-theme",
  languageStorageKey = "ces-ui-language",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  
  const [language, setLanguage] = useState<LanguageCode>(
    () => (localStorage.getItem(languageStorageKey) as LanguageCode) || defaultLanguage
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    language,
    setLanguage: (lang: LanguageCode) => {
      localStorage.setItem(languageStorageKey, lang);
      setLanguage(lang);
    }
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
    
  // Return only theme-related properties
  return {
    theme: context.theme,
    setTheme: context.setTheme
  };
};

export const useLanguage = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useLanguage must be used within a ThemeProvider");
    
  // Return only language-related properties
  return {
    language: context.language,
    setLanguage: context.setLanguage
  };
};
