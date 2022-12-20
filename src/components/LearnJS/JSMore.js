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
  OneLineText,
} from "../MuiCustomize";
import Divider from "@mui/material/Divider";
import ArrowFunc from "../Img/ArrowFunc.webp";
import TL from "../Img/TL.webp";
import mod from "../Img/mod.webp";
import EventLoop1 from "../Img/eveloo.webp";
import EventLoop2 from "../Img/eveloo2.webp";
export const JSHistory = () => {
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
        <TitleBox> 【筆記】 JavaScript History</TitleBox>
        <Divider />
        <SubTitleBox>ES5(2009) </SubTitleBox>
        <ThirdTitleBox>嚴格模式(strict mode):</ThirdTitleBox>
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
        <SubTitleBox>ES6(2015) </SubTitleBox>
        <ThirdTitleBox>let和const:</ThirdTitleBox>
        <br />
        在這版本之前，變數的命名都是使用 var，但是
        var會有hoisting和汙染環境變數的問題，所以在ES6的版本新增了 let 和
        const，由這兩個宣告的變數可以被限制在宣告的塊級作用域(scope
        block)裡，避免了 var的問題，且const 宣告的變數是無法在之後被重新賦值的。
        “ const ”—
        一般使用在識別值(identifier)不會被重新指定值。例如：宣告恆定不做改變的變數
        “let”— 一般使用在變數(variable)可能會被重新指定值。例如：在迴圈(for
        loop)中，一開始的變數宣告使用。
        <br />
        <br />
        <ThirdTitleBox>箭頭函式 (Arrow Function)</ThirdTitleBox>
        <ContainBox>
          <ImgaeMod src={ArrowFunc} alt="ArrowFunc" />
        </ContainBox>
        <ThirdTitleBox>非同步語法-Promise:</ThirdTitleBox>
        <br />
        <br />
        (call back Event handle)
        Promise可以用來處理非同步行為，例如：現在很多網站都是前後端分離，前端需要先確保拉取到後端資料之後，才能進行下一步，這是Promise在這裡最大的功用
        <br />
        <OneLineText>
          1. Pedning：等待事情完成中，但不確定最終會順利完成或失敗
        </OneLineText>
        <OneLineText>
          2. Resolved（或稱 Fulfilled）：代表順利完成了，並轉交結果
        </OneLineText>
        <OneLineText>3. Rejectesd：代表失敗了，並告知失敗原因</OneLineText>
        <ThirdTitleBox>Template Literals (Template String):</ThirdTitleBox>
        <br />
        是一個新的字串語法，在先前的版本都要用+來串接變數和字串，ES6只需要用
        反引號 (`)就可以囉！這種方法可以讓可讀性更高。
        <br /> <br />
        <ThirdTitleBox>函式參數的預設值</ThirdTitleBox>
        <ContainBox>
          <ImgaeMod src={TL} alt="TL" />
        </ContainBox>
        <ThirdTitleBox>
          解構賦值 :<br />
        </ThirdTitleBox>
        <br />
        可以把陣列或物件中的東西獨立拿出來
        <br />
        <br />
        module：import/export :
        <ContainBox>
          <ImgaeMod src={mod} alt="mod" />
        </ContainBox>
        <SubTitleBox>ES7(ES2016) </SubTitleBox>
        <TextBox>
          Array.includes(值) <br />
          <br />
          確認Array裡有沒有特定值
        </TextBox>
        <SubTitleBox>ES8 (ES2017) </SubTitleBox>
        <TextBox>
          <ThirdTitleBox>非同步語法：async/await</ThirdTitleBox>
          <ThirdTitleBox>非同步 Asynchronous :</ThirdTitleBox>
          櫃檯店員本人一次只能做一件事情，但為了節省時間，店員將工作分配給其他同事，在下完指令後，店員就可以繼續幫你結帳和集點等，待結完帳，等同事們各自完成製作並告知後，店員依序把飲料交給你
          — 最終等待時間減少，也不會浪費閒置的資源 —
          這就是現實生活中非同步的情形
          <br />
          <ThirdTitleBox>同步 Synchronous :</ThirdTitleBox>
          <br />
          同樣的餐點內容，若為同步處理，代表者這件事情做完，再做下一步。也就是說，A
          完成拿鐵後，店員才請 B
          準備黑咖啡、咖啡都做好了，櫃檯店員才能繼續幫你結帳。相對非同步來說，時間花費較多，也浪費了不少閒置資源。
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};

export const JSEventLoop = () => {
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
        <TitleBox> 【筆記】 Event Loop</TitleBox>
        <Divider />
        <TextBox>
          JavaScript
          是單線程的程式語言，所有的程式碼片段都會在堆疊中（stack）被執行，而且一次只會執行一個程式碼片段
        </TextBox>
        <TextBox>
          可以說它是依附著瀏覽器而存在的一個事件監聽器，用以控管各項任務順暢執行。當瀏覽器現階段有空閒時，才將排隊中的額外事件安排進去執行
        </TextBox>
        <ContainBox>
          <ImgaeMod src={EventLoop1} alt="EventLoop1" />
        </ContainBox>
        <ThirdTitleBox>Call stack</ThirdTitleBox>
        <TextBox>
          一個後進先出（ LIFO = Last In, First Out）的執行堆疊（call
          stack）。會依序執行函式：從全域（Global Scope）的主程式（main
          program）開始，逐一把各個函式推（push）至執行堆疊的最上方，並從最後進入的函式開始執行。當函式結束後（reurn），會將此函式抽離（pop
          off）堆疊。
        </TextBox>
        <ThirdTitleBox>Web APIs</ThirdTitleBox>
        <TextBox>
          瀏覽器提供了很多不同的
          API（例如：DOM、AJAX、Timeout），讓我們能夠同時（concurrently）處理多項任務。當完成
          Web APIs 的內部函式後（如 setTimeout()），便將任務傳遞至工作佇列。
        </TextBox>
        <ThirdTitleBox>Callback Queue</ThirdTitleBox>
        <TextBox>
          這是一個先進先出（ FIFO = First In, First Out）的工作佇列（callback
          queue） 。會接收從 Web APIs 來的任務，並透過 Event Loop
          的監控，當堆疊中沒有執行項目時，便把佇列中的內容拉進堆疊中執行。
        </TextBox>
        <ContainBox>
          <ImgaeMod src={EventLoop2} alt="EventLoop2" />
        </ContainBox>
        <ThirdTitleBox>Event loop onClick :</ThirdTitleBox>

        <a href="https://www.youtube.com/watch?v=TLwMAvqLT2M&ab_channel=PJCHENder">
          https://www.youtube.com/watch?v=TLwMAvqLT2M&ab_channel=PJCHENder
        </a>
      </ItemPaper>
    </ContainBox>
  );
};
