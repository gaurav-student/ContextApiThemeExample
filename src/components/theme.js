import { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();

const themes = {
  dark: {
    backgroundColor: "black",
    color: "white"
  },
  light: {
    backgroundColor: "white",
    color: "black"
  }
};
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDark", JSON.stringify(!isDark));
  };
  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
