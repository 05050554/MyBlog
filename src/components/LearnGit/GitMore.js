import React, { useContext } from "react";
import { FontSizeContext, ThemeContext } from "../../GlobalTheme";
import {
  ContainBox,
  TitleBox,
  ItemPaper,
  TextBox,
  ImgaeMod,
} from "../MuiCustomize";
import GitFlowPic from "../Img/GitFlow.webp";
import GitPP from "../Img/GitPP.webp";
import Divider from "@mui/material/Divider";

export const GitMommand = () => {
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
        <TitleBox> 【筆記】 Git 常用指令</TitleBox>
        <Divider />
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          建立分支 : git branch 分支名稱
          <br />
          <br />
          切換到分支 : git checkout 分支名稱
          <br />
          <br />
          推到分支 : git push --set-upstream origin 分支名稱
          <br />
          <br />
          加入到索引 : git add .<br />
          <br />
          寫commit : git commit -m "輸入要的東西"
          <br />
          <br />
          推送 : git push <br />
          <br />
          推到主支(master): git push origin master
          <br />
          <br />
          將分支合併到主支 : git merge 分支名稱 <br />
          <br />
          刪除分支 : git branch –d 分支名稱 <br />
          <br />
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};

export const GitFlow = () => {
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
        <TitleBox> 【筆記】 Git Flow</TitleBox>
        <Divider />

        <ContainBox>
          <ImgaeMod src={GitFlowPic} alt="GitFlowPic" />
        </ContainBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH3,
          }}
        >
          Master 分支
        </TextBox>
        <Divider />
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          主要是用來放穩定、隨時可上線的版本。這個分支的來源只能從別的分支合併過來，開發者不會直接
          Commit 到這個分支。因為是穩定版本，所以通常也會在這個分支上的 Commit
          上打上版本號標籤。
        </TextBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH3,
          }}
        >
          Develop 分支
        </TextBox>
        <Divider />
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          這個分支主要是所有開發的基礎分支，當要新增功能的時候，所有的 Feature
          分支都是從這個分支切出去的。而 Feature
          分支的功能完成後，也都會合併回來這個分支。
        </TextBox>

        <TextBox
          style={{
            fontSize: fontSizeK.fontH3,
          }}
        >
          Hotfix 分支
        </TextBox>
        <Divider />
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          當線上產品發生緊急問題的時候，會從 Master 分支開一個 Hotfix
          分支出來進行修復，Hotfix 分支修復完成之後，會合併回 Master
          分支，也同時會合併一份到 Develop 分支。 為什麼要合併回 Develop
          分支？如果不這麼做，等到時候 Develop 分支完成並且合併回 Master
          分支的時候，那個問題就又再次出現了。 那為什麼一開始不從 Develop
          分支切出來修？因為 Develop
          分支的功能可能尚在開發中，這時候硬是要從這裡切出去修再合併回 Master
          分支，只會造成更大的災難。
        </TextBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH3,
          }}
        >
          Release 分支
        </TextBox>
        <Divider />
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          當認為 Develop 分支夠成熟了，就可以把 Develop 分支合併到 Release
          分支，在這邊進行算是上線前的最後測試。測試完成後，Release
          分支將會同時合併到 Master 以及 Develop 這兩個分支上。Master
          分支是上線版本，而合併回 Develop 分支的目的，是因為可能在 Release
          分支上還會測到並修正一些問題，所以需要跟 Develop
          分支同步，免得之後的版本又再度出現同樣的問題。
        </TextBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH3,
          }}
        >
          Feature 分支
        </TextBox>
        <Divider />
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          當要開始新增功能的時候，就是使用 Feature 分支的時候了。Feature
          分支都是從 Develop 分支來的，完成之後會再併回 Develop 分支。
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};

export const GitPullFatch = () => {
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
        <TitleBox> 【筆記】 git pull 與 git fatch的差別</TitleBox>
        <Divider />
        <ContainBox>
          <ImgaeMod src={GitPP} alt="GitPP" />
        </ContainBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          git pull = git fetch + git merge
        </TextBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          git fetch是將遠程主機的最新内容拉到本地
        </TextBox>
        <TextBox
          style={{
            fontSize: fontSizeK.fontH4,
          }}
        >
          git pull
          是將遠程主機的最新内容拉下後直接合並，這樣可能會產生衝突，需要手動解决
        </TextBox>
      </ItemPaper>
    </ContainBox>
  );
};
