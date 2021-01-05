import React, {useState, useEffect, createContext} from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
  function ls() {
    let localData = localStorage.getItem("isLightTheme");

    return localData ? JSON.parse(localData) : true;
  }

  const [isLightTheme, setIsLight] = useState(ls());
  const [dark] = useState({
    bg: "hsl(209, 23%, 22%)",
    text: "white",
    element: "#2b3945",
    mainbg: "hsl(207, 26%, 17%)",
    shadow: "0 0 8px hsla(0, 0%, 11%, 0.8)",
  });
  const [light] = useState({
    text: "#111517",
    inp: "#858585",
    mainbg: "#fafafa",
    bg: "#fff",
    shadow: "0 0 8px hsla(0, 0%, 50%, 0.365)",
  });

  let toggleTheme = () => {
    return setIsLight(!isLightTheme);
  };

  useEffect(() => {
    localStorage.setItem("isLightTheme", JSON.stringify(isLightTheme));

    let by = document.body;

    by.style.background = `${isLightTheme ? light.mainbg : dark.mainbg}`;
  }, [isLightTheme, light.mainbg, dark.mainbg]);

  return (
    <ThemeContext.Provider
      value={{isLightTheme, setIsLight, dark, light, toggleTheme}}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
