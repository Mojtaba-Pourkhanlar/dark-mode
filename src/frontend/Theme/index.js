import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
  const toggle = localStorage.getItem("toggle");

  if (!toggle) {
    localStorage.setItem("toggle", "dark");
    return "dark";
  } else {
    return toggle;
  }
};

const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(getTheme);

  const toggleFunction = () => {
    if (toggle === "dark") {
      setToggle("light");
    } else {
      setToggle("dark");
    }
  };

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("toggle", toggle);
    };
    refreshTheme();
  }, [toggle]);

  return(
    <ThemeContext.Provider value={{toggle, setToggle,toggleFunction}}>
        {children}
    </ThemeContext.Provider>
  )
};

export {ThemeContext, ThemeProvider}
