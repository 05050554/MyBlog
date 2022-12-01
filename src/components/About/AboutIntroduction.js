import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { FontSizeContext } from "../../GlobalTheme";

const AboutIntroduction = () => {
  const { fontSizeK } = useContext(FontSizeContext);

  return (
    <Box
      style={{
        fontSize: fontSizeK.fontH4,
      }}
    >
      我是Wei，雲林科技大學資訊工程碩士班畢業，
      研究部分主要是做高光譜影像處理，
      是利用高光譜的特性去進行瑕疵檢測，
      是利用 Python 搭配深度學習，
      進行咖啡豆瑕疵即時檢測，
      在碩士期間專注於自己的高光譜訊號及影像處裡與AI領域。
      只要是對工作有幫助的都會主動地去學習，
      其他時間會去主動學習網頁前端的東西，
      框架的部分主要是學 React，
      CSS 的部分常使用 Material-UI、Bootstrap 和 antd 這三個，
      後端的東西也有稍微的去了解。
      個人喜歡學習新的事物與了解新的技術，
      每次到實驗室都會跟同學互相分享學習到的新技術，
      也會開小專案來練習，從專案中去釐清自己不太了解的部分，
      希望能在未來的工作中不斷地增進自己的經驗與技術。
    </Box>
  );
};

export default AboutIntroduction;
