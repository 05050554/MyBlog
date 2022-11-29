import React, { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import {
  ThemeContext,
  PositionContext,
  FontSizeContext,
} from "../../GlobalTheme";
import MaterialUISwitch from "../MuiCustomize";
import { IntroIconBtn } from "./IntroIconBtn";
const ContainerMod = () => {
  const { positionGridCenter } = useContext(PositionContext);
  const { fontSizeK, fontStyle } = useContext(FontSizeContext);
  const muiBox = (Describe, bold, italic) => {
   
    return bold ? (
      <Box sx={{ pb: 2 }} style={{ fontWeight: fontStyle.bold }}>
        {Describe}
      </Box>
    ) : italic ? (
      <Box sx={{ pb: 2 }} style={{ fontStyle: fontStyle.italic }}>
        {Describe}
      </Box>
    ) : (
      <Box
        sx={{ pb: 2 }}
        style={{ fontWeight: fontStyle.bold, fontStyle: fontStyle.italic }}
      >
        {Describe}
      </Box>
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        style={{
          fontSize: fontSizeK.fontH3,
          display: positionGridCenter.display,
          justifyItems: positionGridCenter.ji,
          padding: "3%",
        }}
      >
        {muiBox("Hello, This Is My FrontEnd Blog!", "bold", 0)}

        <Box sx={{ pb: 2 }}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>Wei</Avatar>
        </Box>
        {muiBox("Software Engineer / Frontend Engineer", 0, "italic")}
        {muiBox("鯊魚不往前游就會死，前端工程師也是如此。", 0, "italic")}

        <Box sx={{ pb: 2 }}>
          <IntroIconBtn />
        </Box>

        <ThemeButton />
      </Container>
    </React.Fragment>
  );
};

export default ContainerMod;

const ThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <MaterialUISwitch onChange={toggleTheme} />
    </>
  );
};
