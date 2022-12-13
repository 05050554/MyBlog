import React, { useContext } from "react";
import { FontSizeContext, ThemeContext } from "../../GlobalTheme";
import {
  ContainBox,
  TitleBox,
  ItemPaper,
  TextBox,
  ImgaeMod,
  SubTitleBox,
  ThirdTitleBox,
} from "../MuiCustomize";
import Divider from "@mui/material/Divider";
import ForwardProxy from "../Img/ForwardProxy.webp";
import ReverseProxy from "../Img/ReverseProxy.webp";
export const OtherProxy = () => {
  const { fontSizeK } = useContext(FontSizeContext);
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
        <TitleBox> 【筆記】 正向代理 與 反向代理</TitleBox>
        <Divider />
        <SubTitleBox>反向代理 (Reverse Proxy)</SubTitleBox>
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
        <SubTitleBox>正向代理 (Forward Proxy)</SubTitleBox>
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

export const Docker = () => {
  const { fontSizeK } = useContext(FontSizeContext);
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
        <TitleBox style={{ fontSize: fontSizeK.fontH1 }}>
          {" "}
          【筆記】 Docker
        </TitleBox>
        <Divider />
        <SubTitleBox> Docker 三元素</SubTitleBox>
        <ThirdTitleBox> 映像檔 Image :</ThirdTitleBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          Docker 映像檔是一個模板，用來重複產生容器實體
        </TextBox>
        <ThirdTitleBox> 容器 Container:</ThirdTitleBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          就像是用蛋糕模具烤出來的蛋糕本體，容器是用映像檔建立出來的執行實例。
        </TextBox>
        <ThirdTitleBox> 倉庫 Repository:</ThirdTitleBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          集中存放映像檔檔案的場所
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};
