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
import ArrowFunc from "../Img/ArrowFunc.webp";
import TL from "../Img/TL.webp";
import mod from "../Img/mod.webp";
export const JSHistory = () => {
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
        <TitleBox> 【筆記】 JavaScript History</TitleBox>
        <Divider />

        <TitleBox
          style={{
            fontSize: fontSizeK.fontH3,
          }}
        >
          ES5(2009){" "}
        </TitleBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          嚴格模式(strict mode):
          <br />
          使用嚴格模式可以幫助穩定code、增加嚴謹程度。
          使用方法就是直接在JS文件最前面加上 "use strice"即可。
          <br />
          <br />
          Array/Object的方法: <br />
          Array.reduce()、Array.filter()、Array.map()、Array.forEach()、Object.difineProperty()、Object.keys()、Object.freeze()等等
          <br />
          <br />
          其他方法:
          <br />
          Date.now()、JSON.parse()、JSON.stringify()
        </TextBox>

        <TitleBox
          style={{
            fontSize: fontSizeK.fontH3,
          }}
        >
          ES6(2015){" "}
        </TitleBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          let和const:
          <br />
          在這版本之前，變數的命名都是使用 var，但是
          var會有hoisting和汙染環境變數的問題，所以在ES6的版本新增了 let 和
          const，由這兩個宣告的變數可以被限制在宣告的塊級作用域(scope
          block)裡，避免了 var的問題，且const
          宣告的變數是無法在之後被重新賦值的。 “ const ”—
          一般使用在識別值(identifier)不會被重新指定值。例如：宣告恆定不做改變的變數
          “let”— 一般使用在變數(variable)可能會被重新指定值。例如：在迴圈(for
          loop)中，一開始的變數宣告使用。
          <br />
          <br />
          箭頭函式 (Arrow Function)
          <ContainBox>
            <ImgaeMod src={ArrowFunc} alt="ArrowFunc" />
          </ContainBox>
          非同步語法-Promise:
          <br />
          <br />
          (call back Event handle)
          Promise可以用來處理非同步行為，例如：現在很多網站都是前後端分離，前端需要先確保拉取到後端資料之後，才能進行下一步，這是Promise在這裡最大的功用
          <br />
          1. Pedning：等待事情完成中，但不確定最終會順利完成或失敗
          <br />
          2. Resolved（或稱 Fulfilled）：代表順利完成了，並轉交結果
          <br />
          3. Rejectesd：代表失敗了，並告知失敗原因
          <br />
          <br />
          Template Literals (Template String):
          <br />
          <br />
          是一個新的字串語法，在先前的版本都要用+來串接變數和字串，ES6只需要用
          反引號 (`)就可以囉！這種方法可以讓可讀性更高。
          <br /> <br />
          函式參數的預設值
          <ContainBox>
            <ImgaeMod src={TL} alt="TL" />
          </ContainBox>
          解構賦值 :<br />
          <br />
          可以把陣列或物件中的東西獨立拿出來
          <br />
          <br />
          module：import/export :
          <ContainBox>
            <ImgaeMod src={mod} alt="mod" />
          </ContainBox>
        </TextBox>

        <TitleBox
          style={{
            fontSize: fontSizeK.fontH3,
          }}
        >
          ES7(ES2016){" "}
        </TitleBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          Array.includes(值) <br />
          <br />
          確認Array裡有沒有特定值
        </TextBox>

        <TitleBox
          style={{
            fontSize: fontSizeK.fontH3,
          }}
        >
          ES8 (ES2017){" "}
        </TitleBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          非同步語法：async/await <br />
          <br />
          非同步 Asynchronous : 
          <br />

          櫃檯店員本人一次只能做一件事情，但為了節省時間，店員將工作分配給其他同事，在下完指令後，店員就可以繼續幫你結帳和集點等，待結完帳，等同事們各自完成製作並告知後，店員依序把飲料交給你
          — 最終等待時間減少，也不會浪費閒置的資源 —
          這就是現實生活中非同步的情形
          <br />
          <br />
          同步 Synchronous :
          <br />
       
          同樣的餐點內容，若為同步處理，代表者這件事情做完，再做下一步。也就是說，A
          完成拿鐵後，店員才請 B
          準備黑咖啡、咖啡都做好了，櫃檯店員才能繼續幫你結帳。相對非同步來說，時間花費較多，也浪費了不少閒置資源。
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};
