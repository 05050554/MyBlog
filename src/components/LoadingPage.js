import React, { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ContainBox } from "./MuiCustomize";
import { PositionContext,FontSizeContext } from "../GlobalTheme";

export const LoadingPage = () => {
  const { positionGridCenter } = useContext(PositionContext);
  const { fontSizeK } = useContext(FontSizeContext);
  return (
    <ContainBox>
      <Box
        style={{
          display: positionGridCenter.display,
          justifyItems: positionGridCenter.ji,
        }}
      >
        <CircularProgress />
        <br />
        <p style={{fontSize:fontSizeK.fontH2}}>Loading... Please Wait...</p>
      </Box>
    </ContainBox>
  );
};
