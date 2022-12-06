import React, { useContext } from "react";
import { FontSizeContext, ThemeContext } from "../../GlobalTheme";
import {
  ContainBox,
  TitleBox,
  ItemPaper,
  TextBox,
  ImgaeMod,
} from "../MuiCustomize";
import Divider from '@mui/material/Divider';
import LifeCycle from "../Img/LifeCycle.png";
import LifeEffect from "../Img/useEffect.png";
import LifeEffect2 from "../Img/useEffect2.png";
import JSXPic from "../Img/jsx.png";
import JSPic from "../Img/js.png";

export const Virtual = () => {
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
        <TitleBox> 【筆記】 Virtual DOM</TitleBox>
        <Divider/>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          文件物件模型（Document Object Model, DOM） React 做了一個 Virtual
          DOM。 Virtual DOM 是用 JS 打造的虛擬中界層，每當重繪時，就會先在
          Virtual DOM 中重繪，再用 diff 演算法比對它跟實際的 DOM
          有什麼不同，只要修改不同的地方就好，而且只重繪一次。
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};

export const JSX = () => {
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
        <TitleBox> 【筆記】 JSX</TitleBox>
        <Divider/>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          JS / ECMAScript 對 XML 的擴充語法 語法糖 (Syntatic
          Sugar)使用的話有助於精簡程式碼
          <br /> JSX:
          <br />
          <ImgaeMod src={JSXPic} alt="JSXPic" />
          <br />
          JS: <br />
          <span>
            <ImgaeMod src={JSPic} alt="JSPic" />
          </span>
          <br />
          JSX寫法: HTML 的 class 屬性在 JSX 須寫為 className (class 為 JSX
          保留字) 所有 tag 都須被閉合 (XML 的特性) 駝峰是命名 style 屬性要以 JS
          物件的格式設定 (JSON)
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};

export const ComponentLifeCycle = () => {
  const { fontSizeK, fontStyle } = useContext(FontSizeContext);
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
        <TitleBox> 【筆記】 Component Lifecycle</TitleBox>
        <Divider/>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          <ContainBox>
            <ImgaeMod src={LifeCycle} alt="LifeCycle" />
          </ContainBox>
          <br />
          (灰色地方 無法控制地帶 瀏覽器生命週期 )<br /> Mounting: 元件初始化{" "}
          <br />
          Updating: 元件更新
          <br /> Unmounting: 元件卸載 <br />
          <br />
          <span style={{ fontWeight: fontStyle.bold }}> constructor: </span>
          <br />
          es6 的 class 語法糖，初始化並建構物件，可以用來綁定 method，但可以透過
          arrow function 綁定 method ，因此也不一定需要用到 constructor <br />
          <br />
          <span style={{ fontWeight: fontStyle.bold }}>render: </span>
          <br />
          render 函式負責把你寫在 return statement 後的 JSX 渲染到頁面上，調用
          setState 函式或是更新父元件傳下去的 props
          都會造成重新渲染（re-render），重新渲染指的其實就是再跑一次 render
          function。
          <br />
          <br />{" "}
          <span style={{ fontWeight: fontStyle.bold }}>
            componentDidMount:{" "}
          </span>
          <br />
          render 函式執行完後就會調用
          componentDidMount，這也是我認為使用最多的生命週期（render除外），如
          ajax API 串接或綁定 DOM 事件都會在這個函式中執行。 <br />
          <br />
          <span style={{ fontWeight: fontStyle.bold }}>
            componentDidUpdate:
          </span>
          <br />
          顧名思義就是在狀態更新且重新渲染後被觸發的函式。在這可以處理call
          api動作，或是setState，促使重新 update
          <br />
          <br />{" "}
          <span style={{ fontWeight: fontStyle.bold }}>
            {" "}
            componentWillUnmount:{" "}
          </span>
          <br />
          component 要被移除的時候會執行此函式，可以做清除綁定
          eventlistener，或清除 cookie、local
          storage等機制，另外需要注意的事，在這裏執行 setState 是不會觸發
          re-render 的。
          <p style={{ fontWeight: fontStyle.bold }}>useEffect:</p>
          <ContainBox>
            <ImgaeMod src={LifeEffect} alt="LifeUseEffect" />
          </ContainBox>
          這個 effect 只會觸發一次 componentDidMount 只要在 useEffect
          中的第一個參數放在 return statement
          裡的函數將會是元件準備要卸載時會觸發的行為。
          <ContainBox>
            <ImgaeMod src={LifeEffect2} alt="LifeUseEffect2" />
          </ContainBox>
          第二個陣列參數中放值代表當該值改變後會再次觸發 useEffect，相當於
          componentDidUpdate
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};
