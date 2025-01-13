import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme : dark)").matches,
    "isDarkMode"
  );

  useEffect(
    function () {
      const html = document.documentElement;

      if (isDarkMode) {
        html.classList.add("dark-mode");
        html.classList.remove("light-mode");
      }

      return () => {
        const html = document.documentElement;
        html.classList.remove("dark-mode");
        html.classList.add("light-mode");
      };
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside the DarkModeProvider");

  return context;
}

export { DarkModeProvider, useDarkMode };
