import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const ToggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
    console.log(theme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
    localStorage.setItem("darkMode", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
