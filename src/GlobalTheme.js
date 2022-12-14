import React, { useState } from "react";

const themesColor = {
  light: {
    foreground: "#000000",
    background: "#f6fac5",
    containBack: "#efefef",
    paperColor:"white",
    mui:"primary"
  },
  dark: {
    foreground: "#ffffff",
    background: "#415a77",
    containBack: "#6d8eb5",
    paperColor:"#013069",
    mui:"secondary"

  },
};

export const ThemeContext = React.createContext({
  theme: themesColor.light,
  toggleTheme: () => {},
});

const themesPosition = {
  flexCenter: {
    display: "flex",
    jc: "center",
    ai: "center",
    font: "30px",
    padding: "5rem",
    wrap:"wrap",
  },
  gridCenter: {
    display: "grid",
    ji: "center",
  },
};

export const PositionContext = React.createContext({
  positionFlexCenter: themesPosition.flexCenter,
  positionGridCenter: themesPosition.gridCenter,
});

const themeFontSize = {
  size: {
    fontH1: "32px",
    fontH2: "26px",
    fontH3: "22px",
    fontH4: "20px",
    fontH5: "14px",
    fontH6: "10px",
  },
  style: {
    italic: "italic",
    bold: "bold",
  },
};

export const FontSizeContext = React.createContext({
  fontSizeK: themeFontSize.size,
  fontStyle: themeFontSize.style,
});

const GlobalTheme = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  const theme = dark ? themesColor.dark : themesColor.light;

  const defaultValue = {
    toggleTheme,
    theme,
  };
  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default GlobalTheme;
