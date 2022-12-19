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
import RouterUR from "../Img/RouterUR.webp";
import RouterUN from "../Img/RouterUN.webp";
import RouterSw from "../Img/RouterSw.webp";
import RouterNav from "../Img/RouterNav.webp";
import RouterApp from "../Img/RouterApp.webp";
import ReVsNe from "../Img/revsne.webp";
import FunVsClaPic from "../Img/funvscla.webp";
import FunVsClaWr from "../Img/funvsclawr.webp";

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

export const ReaVsNex = () => {
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
        <TitleBox> 【筆記】 Next vs React</TitleBox>
        <Divider />

        <SubTitleBox>React Next 比較 : </SubTitleBox>
        <ContainBox>
          <ImgaeMod src={ReVsNe} alt="ReVsNe" />
        </ContainBox>
        <ThirdTitleBox>CSR (Client Side Rendering)</ThirdTitleBox>
        <TextBox>
          CSR
          如同其名，是將渲染資料的所有過程都交由瀏覽器端處理，使用者在瀏覽網站時，第一次跟伺服器請求的
          HTML 檔裡面幾乎不包含任何的內容，伺服器並沒有傳入資料到
          HTML。接著，後續會再透過載入的 bundle，也就是 JavaScript 的檔案，再讓
          JS 執行 AJAX 跟伺服器請求資料，最後將資料渲染到畫面上。
        </TextBox>
        <ThirdTitleBox>SSR(Server Side Rendering)</ThirdTitleBox>
        <TextBox>
          保有 SPA 換頁時不會閃爍的優點，還可以讓伺服器動態地注入資料到 HTML
          的檔案中，讓瀏覽器端第一次請求拿到的 HTML 就已經包含所有的資料，因此
          google 爬蟲也就可以順利地爬到網站中的內容。
        </TextBox>
        <ThirdTitleBox>SSG (Static Side Generation)</ThirdTitleBox>
        <TextBox>
          SSG 意味著所有的內容都在 bulid
          的時候都打包進入檔案中，所以使用者在瀏覽網站時，就可以拿到完整的 HTML
          檔案。優點除了可以有利於 SEO 之外，還有因為每次使用者拿到的 HTML
          內容都不會變，所以還可以讓 HTML 被 cache 在 CDN
          上，很適合用在資料變動較小的網站中，像是部落格、產品介紹頁這種應用中。
          <br />
          但使用 SSG
          這項技術時，除了必須考量到頁面資料更新頻率的問題，再者要衡量隨著應用越來越大時，打包的時間也會隨之增長。
        </TextBox>
        <Divider />
        <ThirdTitleBox>React 優點:</ThirdTitleBox>
        <OneLineText>
          ● 比 Next.js 更容易學習：它基於
          JavaScript，並且有大量文檔可以幫助您快速入門。使用 Next.js，你需要學習
          React，然後是 Next.js。
        </OneLineText>
        <OneLineText>
          ● 允許您重用組件：每個 React
          應用程序都由可重用的組件組成，您可以混合搭配以構建 Web 應用程序。
        </OneLineText>
        <OneLineText>
          ● 附帶預打包的腳本：使用 Create React App 等工具，React.js
          允許您以最少的配置快速啟動項目。
        </OneLineText>
        <OneLineText>
          ● 強大的用戶社區： React 在 Github 上有 182,000
          顆星，以及一個由數千名用戶創建內容以幫助其他人使用該庫構建項目的社區。
        </OneLineText>

        <ThirdTitleBox>React 缺點:</ThirdTitleBox>
        <OneLineText>
          ● 不如 Next.js 對 SEO 友好：使用 React 創建的單頁應用程序不適合
          SEO，因為加載它們通常需要更長的時間，而 Next.js 在構建時考慮了 SEO。
        </OneLineText>
        <OneLineText>
          ● JSX 可能令人反感：雖然 JSX 擴展了 React
          的功能，但對於可能不熟悉它的新開發人員來說，它可能會令人望而生畏。
        </OneLineText>
        <OneLineText>
          ● 與 Next.js 相比性能較低：與使用 Next.js 構建的類似 Web
          應用程序相比，React 應用程序通常需要更長的時間才能成為交互式應用程序。
        </OneLineText>
        <OneLineText>
          ● 註:SEO是一連串改善網站自然排名的工作，簡稱搜尋引擎優化(Search Engine
          Optimization)。網站的排名越高，越容易讓使用者看到以及點擊
        </OneLineText>

        <ThirdTitleBox>Next 優點:</ThirdTitleBox>
        <OneLineText>
          ● 開箱即用的 SSR：您不需要像使用 React 和 CRA
          那樣創建服務器端渲染應用程序的額外配置。
        </OneLineText>
        <OneLineText>
          ● 減少對構建工具的擺弄：在Next.js
          中，您無需擔心額外的工具和捆綁程序，因為所有內容都包含在其初始配置中。
        </OneLineText>
        <OneLineText>
          ● 比 React 更適合 SEO： SSR 使基於 Next 構建的 Web
          應用程序可以更快地抓取和訪問，從而提高搜索引擎排名。
        </OneLineText>
        <OneLineText>
          ● 圖像優化： Next.js 帶有一個用於優化圖像的 API。該工具獲取您在 Web
          應用程序上使用的每張圖像並優化其大小以將它們提供給客戶
        </OneLineText>
        <OneLineText>
          ● 支持第三方 API： Next.js 支持 API
          Routes，可用於處理用戶身份驗證、表單提交、數據庫查詢，甚至自定義 Slack
          命令。
        </OneLineText>
        <ThirdTitleBox>Next 缺點:</ThirdTitleBox>
        <OneLineText>
          ● 需要 Node.js 進行動態路由：與 React 不同，Next.js
          並不容易支持動態路由，而且設置起來可能很複雜。
        </OneLineText>
        <OneLineText>
          ● 大型網站的構建時間長：開發人員抱怨 Next.js
          花費了很多時間來構建網站，雖然有一些解決方法，但它會阻止一些用戶。
        </OneLineText>
        <OneLineText>
          ● 潛在的框架鎖定：如果您在沒有學習基礎知識的情況下直接使用
          Next.js，您可能會被鎖定，並且在必要時無法更改為新框架。
        </OneLineText>
        <TextBox></TextBox>
      </ItemPaper>
    </ContainBox>
  );
};



export const FunVsCla = () => {
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
        <TitleBox> 【筆記】 Functional Component v.s Class Component</TitleBox>
        <Divider />
        <ThirdTitleBox>Class Component</ThirdTitleBox>
        <OneLineText>● 需繼承React.Component</OneLineText>
        <OneLineText>● 具有生命週期，可以針對某些情境決定是否渲染，ex shouldComponentUpdate()</OneLineText>
        <OneLineText>● 具有state (Stateful component)</OneLineText>
        <OneLineText>● 需要實作render方法</OneLineText>
        <OneLineText>● 擁有this</OneLineText>
        <OneLineText>● 每次都可以拿到最新的this.props，因為this隨時都在變化</OneLineText>
        <ThirdTitleBox>Functional Component</ThirdTitleBox>
        <OneLineText>● 沒有生命週期 （React Hook useEffect 出現後，就有生命週期了！）</OneLineText>
        <OneLineText>● 沒有state（Stateless），所以被稱為無狀態組件（但React Hook useState出現後就可以有state了！）</OneLineText>
        <OneLineText>● 可以用arrow function 宣告或是一般的function</OneLineText>
        <OneLineText>● 沒有this</OneLineText>
        <OneLineText>● 編譯更快（因為不用將class轉換成es5</OneLineText>
        <OneLineText>● props會一直是原本傳進來的那個，而不會跟著更新，閉包的概念</OneLineText>
        <ContainBox>
            <ImgaeMod
              style={{ width: "100%", height: "60%" }}
              src={FunVsClaPic}
              alt="FunVsClaPic"
            />
          </ContainBox>
        <ThirdTitleBox>寫法比較:</ThirdTitleBox>
        <ContainBox>
            <ImgaeMod
              style={{ width: "100%", height: "60%" }}
              src={FunVsClaWr}
              alt="FunVsClaWr"
            />
          </ContainBox>
      </ItemPaper>
    </ContainBox>
  )
}
