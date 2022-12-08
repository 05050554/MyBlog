import React, { useContext } from "react";
import Box from "@mui/material/Box";
import {
  FontSizeContext,
  ThemeContext,
  PositionContext,
} from "../../GlobalTheme";
import styled from "styled-components";

const LearnNavA = styled.a`
  padding: 3%;
  color: ${(props) => props.theme.foreground};
  text-decoration: none;
`;

const LearnNav = () => {
  const { fontSizeK } = useContext(FontSizeContext);
  const { positionFlexCenter } = useContext(PositionContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      sx={{ border: "1px dashed grey", minWidth: "60%" }}
      style={{
        fontSize: fontSizeK.fontH3,
        display: positionFlexCenter.display,
        justifyContent: positionFlexCenter.jc,
        alignItems: positionFlexCenter.ai,
        flexWrap: positionFlexCenter.wrap,
      }}
    >
      <LearnNavA href="/" theme={theme}>
        {" "}
        #Home
      </LearnNavA>
      <LearnNavA href="/react" theme={theme}>
        {" "}
        #React
      </LearnNavA>
      <LearnNavA href="/css" theme={theme}>
        {" "}
        #CSS
      </LearnNavA>
      <LearnNavA href="/js" theme={theme}>
        {" "}
        #JS
      </LearnNavA>
      <LearnNavA href="/git" theme={theme}>
        {" "}
        #Git
      </LearnNavA>
      <LearnNavA href="/html" theme={theme}>
        {" "}
        #HTML
      </LearnNavA>
      <LearnNavA href="/abbr" theme={theme}>
        {" "}
        #Abbr.
      </LearnNavA>
      <LearnNavA href="/other" theme={theme}>
        {" "}
        #Others
      </LearnNavA>

    </Box>
  );
};

export default LearnNav;
