"use client";

import ThemeToggleButton from "@/components/themeToggleButton";
import { createContext, ReactNode, useEffect, useState } from "react";

export const ThemeContext = createContext<any>(null);

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");

    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(() => getFromLocalStorage() || "light");

  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
