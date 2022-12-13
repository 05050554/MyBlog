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
import useCallbackPic from "../Img/useCallbackPic.webp";
import ReduxPic from "../Img/ReduxPic.webp";
import ReduxStore from "../Img/ReduxStore.webp";
import ReduxPro from "../Img/ReduxPro.webp";
import ReduxPack from "../Img/ReduxPack.webp";
import ReduxTool from "../Img/ReduxTool.webp";
import ReduxFun from "../Img/ReduxFun.webp";
import HookPic from "../Img/HookPic.webp";


export const UseCallbackCom = () => {
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
        <TitleBox> 【筆記】 useCallback</TitleBox>
        <Divider />
        <TextBox>
          避免重新渲染，使 React 效能優化的 hook useCallback。
          減少子元件不必要的渲染 彌補 React.memo 的缺點
          <br />
          <SubTitleBox>● useCallback: 記憶的是函式</SubTitleBox>
          <SubTitleBox>●useMemo: 記憶的是函式執行後的回傳值</SubTitleBox>
          <br />
          語法:
          <br />
          <ContainBox>
            <ImgaeMod
              style={{ width: "100%", height: "60%" }}
              src={useCallbackPic}
              alt="useCallbackPic"
            />
          </ContainBox>
          <br />
          ● 第一個參數是 callback function
          <br />
          <br />
          ● 第二個參數是一個陣列，此陣列不作為傳到 callback function 的參數
          <br />
          <br />
          ● useCallback(callback):
          如果沒有加上這個陣列，每次都會重新執行函式去產生新的函式
          <br />
          <br />
          ● useCallback(callback, […someValues]):
          有加上一些元素值的話，當元素值改變時會重新更新回傳的函式
          <br />
          <br />
          ● useCallback: 記憶的是函式
          <br />
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};

export const LearnRedux = () => {
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
        <TitleBox> 【筆記】 Redux整理</TitleBox>
        <Divider />
        <ContainBox>
          <ImgaeMod
            style={{ width: "100%", height: "60%" }}
            src={ReduxPic}
            alt="ReduxPic"
          />
        </ContainBox>
        <SubTitleBox>簡單敘述Redux的流程</SubTitleBox>
        <TextBox>
          當使用者觸發了事件，事件就會透過action觸發，action管理和更新應用狀態的模式和工具庫，Reducer是把state的值做修改並存到放store中，而store同時也是存放多個reducer的地方，store也會把改變的state的值回傳到畫面上(UI上)
          在各個元件 state 改變的過程當中，Redux 不允許應用直接修改 state，
          而是要求使用載體 action 來描述 state 的變化，通過傳送 action 到 store
          來改變 state。
        </TextBox>
        <SubTitleBox>這裡敘述上面的最後兩個動作 :</SubTitleBox>
        <TextBox>
          Redux 提供了一個 store 統一倉儲庫 元件通過dispatch將 state 傳入
          store，不用通過其他元件 並且元件通過subscribe從 store 獲得到 state
          的改變。
        </TextBox>
        <ContainBox>
          <ImgaeMod
            style={{ width: "100%", height: "60%" }}
            src={ReduxStore}
            alt="ReduxStore"
          />
        </ContainBox>
        <Divider />
        <SubTitleBox>React Redux-toolkit 使用方法</SubTitleBox>
        <ThirdTitleBox>前言</ThirdTitleBox>
        <TextBox>
          Redux-toolkit的用意是在於把store切成小塊管理，之後再把每個slice產生的reducer合併成一個root
          ruducer後綁定給store
        </TextBox>
        <ThirdTitleBox>todosSlice.js裡</ThirdTitleBox>
        <TextBox>createSlice是在同一個方法裡產生state、action和reducer</TextBox>
        <ContainBox>
          <ImgaeMod
            style={{ width: "100%", height: "60%" }}
            src={ReduxTool}
            alt="ReduxTool"
          />
        </ContainBox>
        <ContainBox>
          <ImgaeMod
            style={{ width: "100%", height: "60%" }}
            src={ReduxPack}
            alt="ReduxPack"
          />
        </ContainBox>
        <ThirdTitleBox>store.js</ThirdTitleBox>
        <TextBox>顧名思義是放置許多Reducer的地方;</TextBox>
        <ThirdTitleBox>app.js</ThirdTitleBox>
        <TextBox>
          用provider把app包起來 不然牠吃不到store改變後的值，也無法使用redux
        </TextBox>
        <ContainBox>
          <ImgaeMod
            style={{ width: "100%", height: "60%" }}
            src={ReduxPro}
            alt="ReduxPro"
          />
        </ContainBox>
        <ThirdTitleBox>主程式.js (也就是要使用redux的程式)</ThirdTitleBox>
        <TextBox>1. import 你在slice裡創造出的方法</TextBox>
        <TextBox>2. event 使用dispatch(slice裡的方法) 就可以使用了</TextBox>
      </ItemPaper>
    </ContainBox>
  );
};

export const HookVSRedux = () => {
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
        <TitleBox> 【筆記】 React hook 與 Redux 的差別</TitleBox>
        <Divider />
        <ContainBox>
          <ImgaeMod
            style={{ width: "100%", height: "60%" }}
            src={HookPic}
            alt="HookPic"
          />
        </ContainBox>
        <TextBox>
          上圖表示在 React Hooks 元件的渲染過程，從途中可以看出， React hooks
          元件的每一次渲染都是一個獨立的韓式，會生成渲染區專屬的 props 和 state
          接著來看類元件中的渲染行為。
        </TextBox>
        <ContainBox>
          <ImgaeMod
            style={{ width: "100%", height: "60%" }}
            src={ReduxFun}
            alt="ReduxFun"
          />
        </ContainBox>
        <TextBox>
          類元件中在渲染開始的時候會再累元件的建構韓世忠生成一個 props 和 state
          所有的渲染過程都是在一個渲染函式中進行的，並且每一次渲染都不會去生成新的
          state 和 props ， 而是將值賦值給最開始被初始化的 this.props 和
          this.state 。
        </TextBox>
        <SubTitleBox>Redux 其他補充</SubTitleBox>
        <ThirdTitleBox>為何需要react-redux</ThirdTitleBox>
        <TextBox>
          因為react-redux可以將Redux中的store的，與元件中的state中串連起來，而且最重要的是，我們不再需要state這個React中的特性，完全使用Redux中的store(與裡面的state)來取代它，store內部會與React上層元件的state溝通，在合適的時刻進行重新渲染，我們只要專心把store與Redux處理好就行了。
        </TextBox>
        <TextBox>
          React元件中的state本身並沒有錯，只是它管不到的事情太多了，state與setState的設計在之前的章節已經說過了，它有一些特性:
        </TextBox>
        <TextBox>
          1. state本身是每個元件內部的私有資料，只能用於儲存單純的資料
        </TextBox>
        <TextBox>
          2.
          setState的執行有延時(delay)的特性，類似於異步，請參考這篇為何說setState方法是異步的
        </TextBox>
        <TextBox>
          3.
          setState方法無法完全掌控應用中所有元件的狀態，生命週期方法裡面其實對setState有一些限制，例如componentWillUpdate，當然render方法裡也不行。
        </TextBox>
        <TextBox>4. setState方法可能會引發不必要的渲染</TextBox>
        <TextBox>
          5. setState方法是一個高花費的執行過程，它與應用程式的執行效率有關
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};
