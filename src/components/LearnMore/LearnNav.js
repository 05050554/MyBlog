import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { FontSizeContext, ThemeContext } from "../../GlobalTheme";

const LearnNav = () => {
  const { fontSizeK } = useContext(FontSizeContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      sx={{ p: 2, border: "1px dashed grey", width: "60%" }}
      style={{
        fontSize: fontSizeK.fontH2,
      }}
    >
      <a href="/" style={{ padding: "3%", color: theme.foreground }}>
        {" "}
        #React
      </a>
      <a href="/" style={{ padding: "3%", color: theme.foreground }}>
        {" "}
        #CSS
      </a>
      <a href="/" style={{ padding: "3%", color: theme.foreground }}>
        {" "}
        #JavaScript
      </a>
      <a href="/" style={{ padding: "3%", color: theme.foreground }}>
        {" "}
        #Github
      </a>
      <a href="/" style={{ padding: "3%", color: theme.foreground }}>
        {" "}
        #Github
      </a>
      <a href="/" style={{ padding: "3%", color: theme.foreground }}>
        {" "}
        #HTML
      </a>
      <a href="/" style={{ padding: "3%", color: theme.foreground }}>
        {" "}
        #Abbreviation
      </a>
    </Box>
  );
};

export default LearnNav;
