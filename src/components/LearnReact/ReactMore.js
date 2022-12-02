import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  PositionContext,
  FontSizeContext,
  ThemeContext,
} from "../../GlobalTheme";

export const Virtual = () => {
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
          【筆記】 Virtual DOM
        </Box>
        <Box
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          文件物件模型（Document Object Model, DOM） React 做了一個 Virtual
          DOM。 Virtual DOM 是用 JS 打造的虛擬中界層，每當重繪時，就會先在
          Virtual DOM 中重繪，再用 diff 演算法比對它跟實際的 DOM
          有什麼不同，只要修改不同的地方就好，而且只重繪一次。
        </Box>
      </Paper>
    </Box>
  );
};
