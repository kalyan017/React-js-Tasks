import React, { useContext } from "react";
import { Data } from "./UseContextHook";

export default function Third() {
  const { theme, setTheme } = useContext(Data);

  return (
    <button
      className="theme-btn"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}