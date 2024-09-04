"use client";

import { ReactNode, useContext, useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";
import style from "./themeProvider.module.css";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useContext(ThemeContext);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted)
    return (
      <div className={theme} style={{ width: "100vw", height: "100vh" }}>
        {children}
      </div>
    );

  return (
    <div className={theme} style={{ width: "100vw", height: "100vh" }}>
      {children}
    </div>
  );
};
