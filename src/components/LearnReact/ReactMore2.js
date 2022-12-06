import React, { useContext } from "react";
import { FontSizeContext, ThemeContext } from "../../GlobalTheme";
import { ContainBox, TitleBox, ItemPaper, TextBox,ImgaeMod } from "../MuiCustomize";
import useCallbackPic from "../Img/useCallbackPic.png";
import Divider from '@mui/material/Divider';

export const UseCallbackCom = () => {
  const { fontSizeK } = useContext(FontSizeContext);
  const { theme } = useContext(ThemeContext);
  return (
    <ContainBox>
      <ItemPaper
        elevation={24}
        style={{
          fontSize: fontSizeK.fontH1,
          color: theme.foreground,
          backgroundColor: theme.paperColor,
        }}
      >
        <TitleBox> 【筆記】 useCallback</TitleBox>
        <Divider/>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          避免重新渲染，使 React 效能優化的 hook useCallback。
          減少子元件不必要的渲染 彌補 React.memo 的缺點
          <br />
          <br />
          ● useCallback: 記憶的是函式
          <br />
          <br />
          ●useMemo: 記憶的是函式執行後的回傳值
          <br />
          <br />
          語法:
          <br />
          <ContainBox>
            <ImgaeMod
              style={{ width: "100%", height: "60%" }}
              src={useCallbackPic}
              alt="useCallbackPic"
            />
          </ContainBox>
          <br />
          ● 第一個參數是 callback function
          <br />
          <br />
          ● 第二個參數是一個陣列，此陣列不作為傳到 callback function 的參數
          <br />
          <br />
          ● useCallback(callback):
          如果沒有加上這個陣列，每次都會重新執行函式去產生新的函式
          <br />
          <br />
          ● useCallback(callback, […someValues]):
          有加上一些元素值的話，當元素值改變時會重新更新回傳的函式
          <br />
          <br />
          ● useCallback: 記憶的是函式
          <br />
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};
