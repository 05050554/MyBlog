import React, { useContext } from "react";
import { FontSizeContext, ThemeContext } from "../../GlobalTheme";
import {
  ContainBox,
  TitleBox,
  ItemPaper,
  ContainMiddleBox,
  ImgaeMod,
  LearnMoreBox,
} from "../MuiCustomize";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CoverV2 from "../Img/CoverV2.webp";
import CoverV1 from "../Img/CoverV1.webp";
import OrderSystemPic from "../Img/OrderSystem.webp";
import { LinkA } from "../About/Connect";

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

        <Box
          id="container"
          style={{
            display: "flex",
            paddingTop: "5%",
            fontSize: fontSizeK.fontH4,
          }}
        >
          <ContainMiddleBox style={{ width: "40%" }}>
            <ImgaeMod
              style={{ width: "100%", height: "60%" }}
              src={CoverV1}
              alt="CoverV1"
            ></ImgaeMod>
          </ContainMiddleBox>
          <Box
            style={{
              display: "grid",
              width: "60%",
            }}
          >
            <ContainMiddleBox
              style={{
                paddingLeft: "5%",
              }}
            >
              本專案是我碩士的實驗室的網站，也是我第一個專案， 是一頁式的靜態網站， 框架為React，
              我負責的地方有美術規劃、切版、JS部分等，
              利用Docker與Nginx進行網站架設。 目前實驗室使用的為該版本。
            </ContainMiddleBox>
            <LearnMoreBox>
              <LinkA
                href="http://140.125.45.162:3000/"
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
              >
                {" "}
                Learn More
              </LinkA>
            </LearnMoreBox>
          </Box>
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

        <Box
          id="container"
          style={{
            display: "flex",
            paddingTop: "5%",
            fontSize: fontSizeK.fontH4,
          }}
        >
          <ContainMiddleBox style={{ width: "40%" }}>
            <ImgaeMod
              style={{ width: "100%", height: "60%" }}
              src={OrderSystemPic}
              alt="OrderSystemPic"
            ></ImgaeMod>
          </ContainMiddleBox>
          <Box
            style={{
              display: "grid",
              width: "60%",
            }}
          >
            <ContainMiddleBox
              style={{
                paddingLeft: "5%",
              }}
            >
              此專案前端的部分是使用 React js，我負責的有切版、邏輯處理、串接
              API、CRUD，進行資料處裡，與畫面呈現 等。 詳細內容可以去我的 Github 看(05050554
              ZOU,XUE-WEI)是我本人
            </ContainMiddleBox>
            <LearnMoreBox>
              <LinkA
                href="https://github.com/hsipl/order_system/pull/57"
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
              >
                {" "}
                Learn More
              </LinkA>
            </LearnMoreBox>
          </Box>
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

        <Box
          id="container"
          style={{
            display: "flex",
            paddingTop: "5%",
            fontSize: fontSizeK.fontH4,
          }}
        >
          <ContainMiddleBox style={{ width: "40%" }}>
            <ImgaeMod
              style={{ width: "100%", height: "60%" }}
              src={CoverV2}
              alt="CoverV2"
            ></ImgaeMod>
          </ContainMiddleBox>
          <Box
            style={{
              display: "grid",
              width: "60%",
            }}
          >
            <ContainMiddleBox
              style={{
                paddingLeft: "5%",
              }}
            >
              本專案是我碩士的實驗室的網站， 類型是一頁式網站， 框架為React，
              與第一版不同的是此有連接資料庫， 可以在管理介面進行CRUD的動作，
              無須動Code的部分，使網站共容易維護。
            </ContainMiddleBox>
            <LearnMoreBox>
              <LinkA
                href="https://github.com/05050554/HSIPL_Web_V2"
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
              >
                {" "}
                Learn More
              </LinkA>
            </LearnMoreBox>
          </Box>
        </Box>
      </ItemPaper>
    </ContainBox>
  );
};
