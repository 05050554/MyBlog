import React, { useContext } from "react";
import AboutIntroduction from "./AboutIntroduction";
import Connect from "./Connect";
import { FontSizeContext, ThemeContext } from "../../GlobalTheme";

import { ContainBox, TitleBox, ItemPaper } from "../MuiCustomize";

const About = () => {
  const { fontSizeK, fontStyle } = useContext(FontSizeContext);
  const { theme } = useContext(ThemeContext);
  return (
    <ContainBox>
      <ItemPaper
        elevation={16}
        style={{
          fontSize: fontSizeK.fontH1,
          color: theme.foreground,
          backgroundColor: theme.paperColor,
        }}
      >
        <TitleBox> About Me</TitleBox>

        <AboutIntroduction />
        <TitleBox
          style={{
            fontWeight: fontStyle.bold,
          }}
        >
          {" "}
          Connect Me
        </TitleBox>
        <Connect />
      </ItemPaper>
    </ContainBox>
  );
};

export default About;
