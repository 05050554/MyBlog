import React, { useContext } from "react";
import { ThemeContext } from "../../GlobalTheme";
import {
  ContainBox,
  TitleBox,
  ItemPaper,
  TextBox,
  OneLineText,
  //   ImgaeMod,
} from "../MuiCustomize";
import Divider from "@mui/material/Divider";
export const AbbrSPA = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContainBox>
      <ItemPaper
        elevation={24}
        style={{
          color: theme.foreground,
          backgroundColor: theme.paperColor,
        }}
      >
        <TitleBox> 【筆記】 SPA （Single-Page Applications）</TitleBox>
        <Divider />
        <br />
        <TextBox>
          現今前端框架React、vue、Angular都是用SPA（single-page
          applications），也就是所謂的單頁面應用程式。
          單頁面應用程式說白話一點就是把所有資料都放在同一個頁面，所以SPA不需要換頁，使用者可以在單一頁面裡瀏覽全部內容，也就是說只會一個index.html
          檔。
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};

export const AbbrSEO = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ContainBox>
      <ItemPaper
        elevation={24}
        style={{
          color: theme.foreground,
          backgroundColor: theme.paperColor,
        }}
      >
        <TitleBox> 【筆記】 SEO （Search Engine Optimization）</TitleBox>
        <Divider />
        <OneLineText>1. 尋找具有潛力的熱門與相關關鍵字。</OneLineText>
        <OneLineText>2. 建立與特定關鍵字相關且有用的資訊頁面。</OneLineText>
        <OneLineText>3. 確保網站能夠被爬蟲與使用者正常訪問。</OneLineText>
        <OneLineText>4. 與其他高品質網站建立相關連結。</OneLineText>
      </ItemPaper>
    </ContainBox>
  );
};
