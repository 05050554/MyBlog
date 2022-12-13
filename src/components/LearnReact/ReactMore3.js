import React, { useContext } from "react";
import { ThemeContext } from "../../GlobalTheme";
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
import RouterUR from "../Img/RouterUR.webp";
import RouterUN from "../Img/RouterUN.webp";
import RouterSw from "../Img/RouterSw.webp";
import RouterNav from "../Img/RouterNav.webp";
import RouterApp from "../Img/RouterApp.webp";

export const ReactRouter = () => {
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
        <TitleBox> 【筆記】 React router version 6</TitleBox>
        <Divider />
        <SubTitleBox>V5 V6 差別:</SubTitleBox>
        <TextBox>
          BrowserRouter需要包在下述的最外層
          如果有server回應request，則使用BrowserRouter；如果使用靜態文件server，則使用HashRouter。
        </TextBox>
        <ThirdTitleBox>Switch 被 Routes 取代</ThirdTitleBox>
        <ContainBox>
          <ImgaeMod src={RouterSw} alt="RouterSw" />
        </ContainBox>
        <TextBox>
          props 被 element 取代 不需要 exact 這個東西了，取而代之 Router
          會抓做相似的url去渲染
        </TextBox>
        <ThirdTitleBox>useHistory 被 useNavigate 取代</ThirdTitleBox>
        <ContainBox>
          <ImgaeMod src={RouterUN} alt="RouterUN" />
        </ContainBox>
        <SubTitleBox>使用方法:</SubTitleBox>
        <ThirdTitleBox>app.js</ThirdTitleBox>
        <ContainBox>
          <ImgaeMod src={RouterApp} alt="RouterApp" />
        </ContainBox>
        <TextBox>
          上述的是Router將/api這個網址賦予給 Api 這個component
          其中index是默認首頁的意思
        </TextBox>
        <ThirdTitleBox>Navbar.js</ThirdTitleBox>
        <ContainBox>
          <ImgaeMod src={RouterNav} alt="RouterNav" />
        </ContainBox>
        <TextBox>上述的是點下去之後會連到/api這個地方</TextBox>
        <ThirdTitleBox>Tip:</ThirdTitleBox>
        <TextBox>
          如果to那邊直接寫`to="api"`這樣你點第二次的話會變成/api/api這個網址
        </TextBox>

        <SubTitleBox>useRoutes:</SubTitleBox>
        <TextBox>
          其中 "Outlet" 可以想像成下面的element會取代"Outlet"的位置
        </TextBox>
        <ContainBox>
          <ImgaeMod src={RouterUR} alt="RouterUR" />
        </ContainBox>
      </ItemPaper>
    </ContainBox>
  );
};
