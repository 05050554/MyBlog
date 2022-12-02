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
        #React
      </LearnNavA>
      <LearnNavA href="/" theme={theme}>
        {" "}
        #CSS
      </LearnNavA>
      <LearnNavA href="/" theme={theme}>
        {" "}
        #JS
      </LearnNavA>
      <LearnNavA href="/" theme={theme}>
        {" "}
        #Git
      </LearnNavA>
      <LearnNavA href="/" theme={theme}>
        {" "}
        #HTML
      </LearnNavA>
      <LearnNavA href="/" theme={theme}>
        {" "}
        #Abbr.
      </LearnNavA>


    </Box>
  );
};

export default LearnNav;
