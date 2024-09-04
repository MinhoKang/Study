"use client";

import { ThemeContext } from "@/context/themeContext";
import { useContext } from "react";
import style from "./themeToggleButton.module.css";

const ThemeToggleButton = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log("now theme is: ", theme);

  return (
    <div onClick={toggle} className={style.container}>
      <div
        className={style.toggle}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      />
    </div>
  );
};

export default ThemeToggleButton;
