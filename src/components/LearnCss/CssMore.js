import React, { useContext } from 'react'
import { FontSizeContext, ThemeContext } from "../../GlobalTheme";
import {
  ContainBox,
  TitleBox,
  ItemPaper,
  TextBox,
  // ImgaeMod,
} from "../MuiCustomize";
import Divider from '@mui/material/Divider';
export const CssLibraryCompare = () => {
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
      <TitleBox> 【筆記】 CSS library</TitleBox>

      <TitleBox  style={{
          fontSize: fontSizeK.fontH3,
        }}> 共同優點</TitleBox>
      <Divider/>
      <TextBox
        style={{
          fontSize: fontSizeK.fontH4,
        }}
      >
       ● Open-source.
      </TextBox>
      <TitleBox  style={{
          fontSize: fontSizeK.fontH3,
        }}>Ant Design</TitleBox>
      <Divider/>
      <TextBox
        style={{
          fontSize: fontSizeK.fontH4,
        }}
      >
       ● High-quality React components out of the box.<br/>
       ● Written in TypeScript/ Supports Typescript.<br/>
       ● Powerful theme customization in every detail.<br/>
       ● Internationalization support<br/>
       ● Great documentation <br/>
      </TextBox>


      <TitleBox  style={{
          fontSize: fontSizeK.fontH3,
        }}> Material UI</TitleBox>
      <Divider/>
      <TextBox
        style={{
          fontSize: fontSizeK.fontH4,
        }}
      >
       ● Premium themes available.<br/>
       ● Not easy to customize.<br/>
       ● Developed by Google.<br/>
       ● Lots of components. <br/>
      </TextBox>

      <TitleBox  style={{
          fontSize: fontSizeK.fontH3,
        }}> Bootstrap</TitleBox>
      <Divider/>
      <TextBox
        style={{
          fontSize: fontSizeK.fontH4,
        }}
      >
       ● More control over form and function of each component.<br/>
       ● Easy Responsiveness(RWD).<br/>
       ● Great documentation.<br/>
       ● One of the oldest React library. <br/>
       ● Mobile first. <br/>
      </TextBox>

    </ItemPaper>
  </ContainBox>
  )
}
