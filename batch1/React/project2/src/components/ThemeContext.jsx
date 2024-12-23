// light , dark if value of state variable is light then apply bg-color white else apply bg-black
import React, { useContext } from "react";

export const ThemeContext = React.createContext();

// create context with default value of light
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      console.log(theme);
      return prevTheme === "light" ? "dark" : "light";
    });
  };
  //   if bg is white then the color of text will be black else should be white
  const themeStyles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "black" : "white",
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
