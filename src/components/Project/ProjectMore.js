import React, { useContext } from "react";
import { FontSizeContext, ThemeContext } from "../../GlobalTheme";
import {
  ContainBox,
  TitleBox,
  ItemPaper,
  TextBox,
  ContainMiddleBox,
  ImgaeMod,
} from "../MuiCustomize";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CoverV2 from "../Img/CoverV2.webp";
import CoverV1 from "../Img/CoverV1.webp";
import OrderSystemPic from "../Img/OrderSystem.webp";

export const HsiplV1 = () => {
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
        <TitleBox> 【Side Project】 HSIPL Web Version 1</TitleBox>
        <Divider />

        <Box id="container" style={{ display: "flex", paddingTop: "5%" }}>
          <ContainMiddleBox style={{ width: "40%" }}>
            <ImgaeMod
              style={{ width: "100%", height: "60%" }}
              src={CoverV1}
              alt="CoverV1"
            ></ImgaeMod>
          </ContainMiddleBox>
          <ContainMiddleBox
            style={{
              width: "60%",
              fontSize: fontSizeK.fontH4,
              paddingLeft: "5%",
            }}
          >
            本專案是我碩士的實驗室的網站，
            類型是一頁式網站，
            框架為React，
            我負責的地方有美術規劃、切版、JS部分等，
            利用Docker與Nginx進行網站架設。
            目前實驗室使用的為該版本。
            
          </ContainMiddleBox>
        </Box>
      </ItemPaper>
    </ContainBox>
  );
};

export const OrderSystem = () => {
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
        <TitleBox> 【Side Project】 Order System</TitleBox>
        <Divider />

        <Box id="container" style={{ display: "flex", paddingTop: "5%" }}>
          <ContainMiddleBox style={{ width: "40%" }}>
            <ImgaeMod
              style={{ width: "100%", height: "60%" }}
              src={OrderSystemPic}
              alt="OrderSystemPic"
            ></ImgaeMod>
          </ContainMiddleBox>
          <ContainMiddleBox
            style={{
              width: "60%",
              fontSize: fontSizeK.fontH4,
              paddingLeft: "5%",
            }}
          >
            此專案前端的部分是使用 React js，我負責的有切版、邏輯處理、串接 API
            等。 詳細內容可以去我的 Github 看(05050554 ZOU,XUE-WEI)是我本人
          
          </ContainMiddleBox>
       
        </Box>
      </ItemPaper>
    </ContainBox>
  );
};

export const HsiplV2 = () => {
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
        <TitleBox> 【Side Project】 HSIPL Web Version 2</TitleBox>
        <Divider />

        <Box id="container" style={{ display: "flex", paddingTop: "5%" }}>
          <ContainMiddleBox style={{ width: "40%" }}>
            <ImgaeMod
              style={{ width: "100%", height: "60%" }}
              src={CoverV2}
              alt="CoverV2"
            ></ImgaeMod>
          </ContainMiddleBox>
          <ContainMiddleBox
            style={{
              width: "60%",
              fontSize: fontSizeK.fontH4,
              paddingLeft: "5%",
            }}
          >
            本專案是我碩士的實驗室的網站，
            類型是一頁式網站，
            框架為React，
            與第一版不同的是此有連接資料庫，
            可以在管理介面進行CRUD的動作，
            無須動Code的部分。
          </ContainMiddleBox>
        </Box>
      </ItemPaper>
    </ContainBox>
  );
};
