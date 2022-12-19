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
import StyledComN from "../Img/stylecomN.webp";
import StyledComC from "../Img/stylecomC.webp";
export const CssLibraryCompare = () => {
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
        <TitleBox> 【筆記】 CSS library</TitleBox>

        <ThirdTitleBox> 共同優點</ThirdTitleBox>
        <Divider />
        <OneLineText>● Open-source.</OneLineText>
        <ThirdTitleBox>Ant Design</ThirdTitleBox>
        <Divider />
        <OneLineText>
          ● High-quality React components out of the box.
        </OneLineText>

        <OneLineText>● Written in TypeScript/ Supports Typescript.</OneLineText>

        <OneLineText>
          ● Powerful theme customization in every detail.
        </OneLineText>

        <OneLineText>● Internationalization support</OneLineText>
        <OneLineText>
          ● Great documentation <br />
        </OneLineText>

        <ThirdTitleBox> Material UI</ThirdTitleBox>
        <Divider />
        <OneLineText>● Premium themes available.</OneLineText>
        <OneLineText>● Not easy to customize.</OneLineText>
        <OneLineText>● Developed by Google.</OneLineText>

        <OneLineText>
          ● Lots of components. <br />
        </OneLineText>

        <ThirdTitleBox> Bootstrap</ThirdTitleBox>
        <Divider />
        <OneLineText>
          ● More control over form and function of each component.
        </OneLineText>
        <OneLineText>● Easy Responsiveness(RWD).</OneLineText>
        <OneLineText>● Great documentation.</OneLineText>
        <OneLineText>
          ● One of the oldest React library. <br />
        </OneLineText>
        <OneLineText>
          ● Mobile first. <br />
        </OneLineText>
      </ItemPaper>
    </ContainBox>
  );
};

export const CssFlex = () => {
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
        <TitleBox> 【筆記】 Flex : </TitleBox>
        <Divider />
        <SubTitleBox>Flex常見的語法有:</SubTitleBox>
        <ThirdTitleBox>
          1. display (注意：這裡如果沒設成flex，底下語法都無法使用喔!!!)
        </ThirdTitleBox>
        <ThirdTitleBox>2. flex-wrap</ThirdTitleBox>
        <OneLineText>● nowrap (預設值)</OneLineText>
        <OneLineText>● wrap (換行)</OneLineText>
        <OneLineText>● wrap-reverse (換行，且行順序反轉)</OneLineText>
        <ThirdTitleBox>3. flex-direction</ThirdTitleBox>
        <OneLineText>● row (預設值，由左至右，從上到下)</OneLineText>
        <OneLineText>
          ● row-reverse (排列方向和row一樣，但內元件順序會反轉)
        </OneLineText>
        <OneLineText>● column (先從上到下，再由左至右)</OneLineText>
        <OneLineText>
          ● column-reverse (排列方向和column一樣，但內元件順序會反轉)
        </OneLineText>
        <ThirdTitleBox>
          4. flex-flow (可以同時設定flex-direction和flex-wrap)
        </ThirdTitleBox>
        <ThirdTitleBox>5. justify-content(水平)</ThirdTitleBox>
        <OneLineText>● Flex-start (預設值)</OneLineText>
        <OneLineText>● Flex-end</OneLineText>
        <OneLineText>● Center</OneLineText>
        <OneLineText>● Space-around</OneLineText>
        <OneLineText>● Space-between</OneLineText>
        <OneLineText>● Space-evenly</OneLineText>

        <ThirdTitleBox>6. align-item(垂直)</ThirdTitleBox>
        <OneLineText>
          ● Stretch (預設值，要測試請記得內元素不能設定height)
        </OneLineText>
        <OneLineText>● flex-start</OneLineText>
        <OneLineText>● flex-end</OneLineText>
        <OneLineText>● center</OneLineText>
        <OneLineText>
          ● baseline (不管字體大小，baseline都是以「字體下方」去做對齊)
        </OneLineText>
        <ThirdTitleBox>7. align-content</ThirdTitleBox>
        <OneLineText>● stretch</OneLineText>
        <OneLineText>● flex-start</OneLineText>
        <OneLineText>● flex-end</OneLineText>
        <OneLineText>● center</OneLineText>
        <OneLineText>● space-around</OneLineText>
        <OneLineText>● space-between</OneLineText>
        <OneLineText>● space-evenly</OneLineText>
        <ThirdTitleBox>
          8.
          align-self(align-self和align-item的功能一樣，但它是針對「單一」對象)
        </ThirdTitleBox>
        <OneLineText>
          ● Stretch (預設值，要測試請記得內元素不能設定height)
        </OneLineText>
        <OneLineText>● flex-start</OneLineText>
        <OneLineText>● flex-end</OneLineText>
        <OneLineText>● center</OneLineText>
        <OneLineText>● baseline</OneLineText>
        <ThirdTitleBox>
          9. order
          (order預設值為0，它可以重新定義內元件的排列順序，順序會依照數值的大小排列)
        </ThirdTitleBox>
        <ThirdTitleBox>
          10. flex (flex-grow、flex-shrink、flex-basis)
        </ThirdTitleBox>
        <TextBox>
          文件物件模型（Document Object Model, DOM） React 做了一個 Virtual
          DOM。 Virtual DOM 是用 JS 打造的虛擬中界層，每當重繪時，就會先在
          Virtual DOM 中重繪，再用 diff 演算法比對它跟實際的 DOM
          有什麼不同，只要修改不同的地方就好，而且只重繪一次。
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};



export const CssStyledCom = () => {
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
        <TitleBox> 【筆記】 Styled-component</TitleBox>
        <Divider />
        <SubTitleBox>Install : </SubTitleBox>
        <OneLineText>npm install --save styled-components</OneLineText>

        <ThirdTitleBox>Normal:</ThirdTitleBox>
        <ContainBox>
            <ImgaeMod src={StyledComN} alt="StyledComN" />
          </ContainBox>
        <ThirdTitleBox>Customize:</ThirdTitleBox>
        <ContainBox>
            <ImgaeMod src={StyledComC} alt="StyledComC" />
          </ContainBox>
        
      </ItemPaper>
    </ContainBox>
  )
}
