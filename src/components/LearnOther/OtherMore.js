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
import ForwardProxy from "../Img/ForwardProxy.png";
import ReverseProxy from "../Img/ReverseProxy.png";
export const OtherMore = () => {
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
        <TitleBox> 【筆記】 正向代理 與 反向代理</TitleBox>
        <Divider />
        <TextBox
          style={{
            fontSize: fontSizeK.fontH2,
          }}
        >
          反向代理 (Reverse Proxy)
        </TextBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          代理伺服器替伺服器接收請求，而後轉發至伺服器
        </TextBox>
        <ContainBox>
          <ImgaeMod src={ReverseProxy} alt="ReverseProxy" />
        </ContainBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          反向代理的應用層面很廣，且可以帶來眾多好處，其中包括但不限於內容緩存、流量清洗、隱藏IP位置、負載均衡等。
        </TextBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH2,
          }}
        >
          正向代理 (Forward Proxy)
        </TextBox>
        <ContainBox>
          <ImgaeMod src={ForwardProxy} alt="ForwardProxy" />
        </ContainBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          代理「用戶」發送請求的是正向代理，代理「伺服器」接收請求的是反向代理。
          舉例 : VPN
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};
