import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    themeOrDefault(localStorage.getItem("theme")),
  );

  function themeOrDefault(theme: string | null): Theme {
    return theme === "light" || theme === "dark" ? theme : "light";
  }

  function reverseTheme(theme: string): Theme {
    return theme === "light" ? "dark" : "light";
  }

  function toggleTheme() {
    setTheme(reverseTheme(theme));
  }

  useEffect(() => {
    document.body.classList.remove(reverseTheme(theme));
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export { ThemeProvider, useTheme };
