import React from "react";
import { useTheme } from "./ThemeContext";
function ToggleTheme() {
  //   const theme = useTheme();
  //   console.log(theme);
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle Theme
        {theme == "light" ? "dark" : "light"}
      </button>
    </div>
  );
}

export default ToggleTheme;
