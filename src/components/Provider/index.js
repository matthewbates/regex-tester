import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

const colors = {
  darkBackground: "#101112",
  darkSecondary: "#2d333b",
  darkText: "#b7bcc0",
  lightBackground: "#ffffff",
  lightSecondary: "rgb(241,242,242)",
  lightText: "#000000",
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme" || "light"));

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const color =
    theme === "light" ? `${colors.lightText}` : `${colors.darkText}`;
  const background =
    theme === "light"
      ? `${colors.lightBackground}`
      : `${colors.darkBackground}`;
  const transition = "0.3s ease;";

  document.body.style.color = color;
  document.body.style.background = background;
  document.body.style.transition = transition;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
