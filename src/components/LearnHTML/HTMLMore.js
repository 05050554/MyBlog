import React, { useContext } from "react";
import { FontSizeContext, ThemeContext } from "../../GlobalTheme";
import {
  ContainBox,
  TitleBox,
  ItemPaper,
  TextBox,
  ImgaeMod,
} from "../MuiCustomize";
import Divider from "@mui/material/Divider";
import HTMLAsync from "../Img/HTMLAsync.png";
import HTMLDefer from "../Img/HTMLDefer.png";
import HTMLCompare from "../Img/HTMLCompare.png";

export const HTMLLife = () => {
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
        <TitleBox> 【筆記】 HTML</TitleBox>
        <Divider />
        <ContainBox>
          <ImgaeMod src={HTMLDefer} alt="HTMLDefer" />
        </ContainBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          加上 defer 屬性後，瀏覽器會繼續解析、渲染畫面，而不會因為需要載入
          "script" 內的資源而卡在那邊等
        </TextBox>
        <ContainBox>
          <ImgaeMod src={HTMLAsync} alt="HTMLAsync" />
        </ContainBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          加上 async 屬性後，與 defer
          相同的是會在背景執行下載，但不同的是當下載完成會馬上暫停 DOM
          解析（若尚未解析完的話），並開始執行 JavaScript。
        </TextBox>
        <ContainBox>
          <ImgaeMod src={HTMLCompare} alt="HTMLCompare" />
        </ContainBox>

        <TextBox
          style={{
            fontSize: fontSizeK.fontH3,
          }}
        >
          效能的部分table這個東西，每次都會整個重新渲染，所以會導致效能降低
          <br />
          解決辦法:
          不要用table，用DataGrid比較好，同時map的時候要給key，每當重新渲染時會比對有沒有差別，並針對有改變的地方進行修改。
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};
