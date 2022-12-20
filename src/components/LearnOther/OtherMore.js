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
  OneLineText,
} from "../MuiCustomize";
import Divider from "@mui/material/Divider";
import ForwardProxy from "../Img/ForwardProxy.webp";
import ReverseProxy from "../Img/ReverseProxy.webp";
import MVC from "../Img/MVC.webp";
import Webpack1 from "../Img/webpack1.webp";
import Webpack2 from "../Img/webpack2.webp";
import Webpack3 from "../Img/webpack3.webp";
import Speed from "../Img/speed.webp";
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

export const OtherMVC = () => {
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
        <TitleBox> 【筆記】 MVC架構</TitleBox>
        <Divider />
        <ThirdTitleBox>分成 Model、View、Controller</ThirdTitleBox>
        <ContainBox>
          <ImgaeMod src={MVC} alt="MVC" />
        </ContainBox>
      </ItemPaper>
    </ContainBox>
  );
};

export const OtherWebpack = () => {
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
        <TitleBox> 【筆記】 Webpack</TitleBox>
        <Divider />
        <ContainBox>
          <ImgaeMod src={Webpack1} alt="Webpack1" />
        </ContainBox>
        <TextBox>
          Webpack 是一個 JavaScript 應用程式的「模組打包工具」。
        </TextBox>
        <OneLineText> npm install webpack webpack-cli --save-dev</OneLineText>
        <ThirdTitleBox>webpack.config.js:</ThirdTitleBox>
        <ContainBox>
          <ImgaeMod src={Webpack2} alt="Webpack2" />
        </ContainBox>
        <TextBox>
          entry : 專案進入點
          <br />
          output:顧名思義，輸出檔案
        </TextBox>
        <ThirdTitleBox> package.json</ThirdTitleBox>
        <ContainBox>
          <ImgaeMod src={Webpack3} alt="Webpack3" />
        </ContainBox>
        <OneLineText>執行 : </OneLineText>
        <OneLineText>npm run build</OneLineText>
      </ItemPaper>
    </ContainBox>
  );
};

export const OtherSpeedUp = () => {
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
        <TitleBox> 【筆記】 瀏覽器加速:</TitleBox>
        <Divider />
        <SubTitleBox>1. code spliting</SubTitleBox>
        <TextBox>
          與其一次下載一整包檔案，不如等到這些 code
          會被使用上時（或者說當這些畫面，進入視窗範圍時），才去下載，藉此提升網站的
          initial load performance 。大致上的做法是：把 code 分成數個檔案，常見
          bundlers 例如 Webpack、Browserify 都有支援這種做法，他們可以創造出數個
          bundle 檔（原本是只有一包），然後採用一種叫做 Lazy load 的策略做
          bundle 的動態載入。
        </TextBox>
        <SubTitleBox>2. image lazy loading</SubTitleBox>
        <TextBox>
          通常圖片載入都是最花時間的
          <ContainBox>
            <ImgaeMod src={Speed} alt="Speed" />
          </ContainBox>
          所有 Lazy loading 的圖片都必須用 Placeholder
          撐開圖片載入完時所需的空間，避免載入完成時影響網頁的排版，如果事先知道圖片大小，可以直接在
          img 元素加上 width、height 屬性，在圖片另外包一層 Container
          來確保圖片顯示的空間也是常見的作法。
        </TextBox>
        <SubTitleBox>3. Intersection Observer API</SubTitleBox>
        <TextBox>
          偵測元素是否已經進入「可視範圍」這件事情是有其痛點的。 Intersection
          Obeserver API 的誕生解決了這方面的問題：
          「能方便地自動觀察目標元素是否進入或離開父層（或其外層）元素或瀏覽器的
          viewport」
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};
