import React, { useContext } from "react";
import AboutIntroduction from "./AboutIntroduction";
import Connect from "./Connect";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  PositionContext,
  FontSizeContext,
  ThemeContext,
} from "../../GlobalTheme";

const About = () => {
  const { positionFlexCenter } = useContext(PositionContext);
  const { fontSizeK, fontStyle } = useContext(FontSizeContext);
  const { theme } = useContext(ThemeContext);
  return (
    <Box
      style={{
        display: positionFlexCenter.display,
        justifyContent: positionFlexCenter.jc,
        alignItems: positionFlexCenter.ai,
        padding: "3%",
      }}
    >
      <Paper
        elevation={2}
        style={{
          fontSize: fontSizeK.fontH1,

          width: "80%",
          padding: "3%",
          color: theme.foreground,
          backgroundColor: theme.paperColor,
        }}
      >
        <Box style={{ paddingBottom: "2%", fontWeight: fontStyle.bold }}>
          {" "}
          About Me
        </Box>

        <AboutIntroduction />
        <Box
          style={{
            paddingBottom: "2%",
            paddingTop: "3%",
            fontWeight: fontStyle.bold,
          }}
        >
          {" "}
          Connect Me
        </Box>
        <Connect />
      </Paper>
    </Box>
  );
};

export default About;
