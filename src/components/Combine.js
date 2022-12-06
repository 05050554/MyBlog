import React, { useContext, lazy, Suspense } from "react";
import Introduction from "./Introduction/Introduction";
import { TagIntroduction } from "./Introduction/Introduction";
import { ThemeContext, PositionContext, FontSizeContext } from "../GlobalTheme";
import { LoadingPage } from "../components/LoadingPage";
import LearnNav from "./LearnMore/LearnNav";
import Box from "@mui/material/Box";
const NavTabs = lazy(() => import("../components/NavTabs"));
const ReactList = lazy(() => import("./LearnReact/ReactList"));
const AbbrList = lazy(() => import("./LearnAbbr/AbbrList"));
const CssrList = lazy(() => import("./LearnCss/CssList"));
const GitList = lazy(() => import("./LearnGit/GitList"));
const HTMLList = lazy(() => import("./LearnHTML/HTMLList"));
const JSList = lazy(() => import("./LearnJS/JSList"));
const OtherList = lazy(() => import("./LearnOther/OtherList"));

export const CombineHome = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Suspense fallback={<LoadingPage />}>
      <div
        className="App"
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      >
        <Introduction />
      </div>
      <div
        style={{
          color: theme.contaonForont,
          backgroundColor: theme.containBack,
        }}
      >
        <NavTabs />
      </div>
    </Suspense>
  );
};

export const CombineReact = () => {
  const { theme } = useContext(ThemeContext);
  const { positionGridCenter, positionFlexCenter } =
    useContext(PositionContext);
  const { fontSizeK, fontStyle } = useContext(FontSizeContext);
  return (
    <Suspense fallback={<LoadingPage />}>
      <div
        className="App"
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      >
        <span
          style={{
            paddingTop: "2%",
            fontSize: fontSizeK.fontH1,
            display: positionGridCenter.display,
            justifyItems: positionGridCenter.ji,
            fontWeight: fontStyle.bold,
          }}
        >
          # React Part
        </span>
        <TagIntroduction />
      </div>

      <div
        style={{
          color: theme.contaonForont,
          backgroundColor: theme.containBack,
        }}
      >
        <Box
          sx={{ width: "100%" }}
          style={{
            display: positionFlexCenter.display,
            justifyContent: positionFlexCenter.jc,
            alignItems: positionFlexCenter.ai,
            paddingTop: "3%",
          }}
        >
          <LearnNav />
        </Box>

        <ReactList />
      </div>
    </Suspense>
  );
};

export const CombineCss = () => {
  const { theme } = useContext(ThemeContext);
  const { positionGridCenter,positionFlexCenter } = useContext(PositionContext);
  const { fontSizeK, fontStyle } = useContext(FontSizeContext);
  return (
    <Suspense fallback={<LoadingPage />}>
      <div
        className="App"
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      >
        <span
          style={{
            paddingTop: "2%",
            fontSize: fontSizeK.fontH1,
            display: positionGridCenter.display,
            justifyItems: positionGridCenter.ji,
            fontWeight: fontStyle.bold,
          }}
        >
          # CSS Part
        </span>
        <TagIntroduction />
      </div>
      <div
        style={{
          color: theme.contaonForont,
          backgroundColor: theme.containBack,
        }}
      >
        <Box
          sx={{ width: "100%" }}
          style={{
            display: positionFlexCenter.display,
            justifyContent: positionFlexCenter.jc,
            alignItems: positionFlexCenter.ai,
            paddingTop: "3%",
          }}
        >
          <LearnNav />
        </Box>
        <CssrList />
      </div>
    </Suspense>
  );
};

export const CombineAbbr = () => {
  const { theme } = useContext(ThemeContext);
  const { positionGridCenter,positionFlexCenter } = useContext(PositionContext);
  const { fontSizeK, fontStyle } = useContext(FontSizeContext);
  return (
    <Suspense fallback={<LoadingPage />}>
      <div
        className="App"
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      >
        <span
          style={{
            paddingTop: "2%",
            fontSize: fontSizeK.fontH1,
            display: positionGridCenter.display,
            justifyItems: positionGridCenter.ji,
            fontWeight: fontStyle.bold,
          }}
        >
          # Abbr. Part
        </span>
        <TagIntroduction />
      </div>
      <div
        style={{
          color: theme.contaonForont,
          backgroundColor: theme.containBack,
        }}
      >
        <Box
          sx={{ width: "100%" }}
          style={{
            display: positionFlexCenter.display,
            justifyContent: positionFlexCenter.jc,
            alignItems: positionFlexCenter.ai,
            paddingTop: "3%",
          }}
        >
          <LearnNav />
        </Box>
        <AbbrList />
      </div>
    </Suspense>
  );
};

export const CombineGit = () => {
  const { theme } = useContext(ThemeContext);
  const { positionGridCenter,positionFlexCenter } = useContext(PositionContext);
  const { fontSizeK, fontStyle } = useContext(FontSizeContext);
  return (
    <Suspense fallback={<LoadingPage />}>
      <div
        className="App"
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      >
        <span
          style={{
            paddingTop: "2%",
            fontSize: fontSizeK.fontH1,
            display: positionGridCenter.display,
            justifyItems: positionGridCenter.ji,
            fontWeight: fontStyle.bold,
          }}
        >
          # Git Part
        </span>
        <TagIntroduction />
      </div>
      <div
        style={{
          color: theme.contaonForont,
          backgroundColor: theme.containBack,
        }}
      >
        <Box
          sx={{ width: "100%" }}
          style={{
            display: positionFlexCenter.display,
            justifyContent: positionFlexCenter.jc,
            alignItems: positionFlexCenter.ai,
            paddingTop: "3%",
          }}
        >
          <LearnNav />
        </Box>
        <GitList />
      </div>
    </Suspense>
  );
};

export const CombineHTML = () => {
  const { theme } = useContext(ThemeContext);
  const { positionGridCenter,positionFlexCenter } = useContext(PositionContext);
  const { fontSizeK, fontStyle } = useContext(FontSizeContext);
  return (
    <Suspense fallback={<LoadingPage />}>
      <div
        className="App"
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      >
        <span
          style={{
            paddingTop: "2%",
            fontSize: fontSizeK.fontH1,
            display: positionGridCenter.display,
            justifyItems: positionGridCenter.ji,
            fontWeight: fontStyle.bold,
          }}
        >
          # HTML Part
        </span>
        <TagIntroduction />
      </div>
      <div
        style={{
          color: theme.contaonForont,
          backgroundColor: theme.containBack,
        }}
      >
        <Box
          sx={{ width: "100%" }}
          style={{
            display: positionFlexCenter.display,
            justifyContent: positionFlexCenter.jc,
            alignItems: positionFlexCenter.ai,
            paddingTop: "3%",
          }}
        >
          <LearnNav />
        </Box>
        <HTMLList />
      </div>
    </Suspense>
  );
};

export const CombineJS = () => {
  const { theme } = useContext(ThemeContext);
  const { positionGridCenter,positionFlexCenter } = useContext(PositionContext);
  const { fontSizeK, fontStyle } = useContext(FontSizeContext);
  return (
    <Suspense fallback={<LoadingPage />}>
      <div
        className="App"
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      >
        <span
          style={{
            paddingTop: "2%",
            fontSize: fontSizeK.fontH1,
            display: positionGridCenter.display,
            justifyItems: positionGridCenter.ji,
            fontWeight: fontStyle.bold,
          }}
        >
          # Java Script Part
        </span>
        <TagIntroduction />
      </div>
      <div
        style={{
          color: theme.contaonForont,
          backgroundColor: theme.containBack,
        }}
      >
        <Box
          sx={{ width: "100%" }}
          style={{
            display: positionFlexCenter.display,
            justifyContent: positionFlexCenter.jc,
            alignItems: positionFlexCenter.ai,
            paddingTop: "3%",
          }}
        >
          <LearnNav />
        </Box>
        <JSList />
      </div>
    </Suspense>
  );
};

export const CombineOther = () => {
  const { theme } = useContext(ThemeContext);
  const { positionGridCenter,positionFlexCenter } = useContext(PositionContext);
  const { fontSizeK, fontStyle } = useContext(FontSizeContext);
  return (
    <Suspense fallback={<LoadingPage />}>
      <div
        className="App"
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      >
        <span
          style={{
            paddingTop: "2%",
            fontSize: fontSizeK.fontH1,
            display: positionGridCenter.display,
            justifyItems: positionGridCenter.ji,
            fontWeight: fontStyle.bold,
          }}
        >
          # Other Part
        </span>
        <TagIntroduction />
      </div>
      <div
        style={{
          color: theme.contaonForont,
          backgroundColor: theme.containBack,
        }}
      >
        <Box
          sx={{ width: "100%" }}
          style={{
            display: positionFlexCenter.display,
            justifyContent: positionFlexCenter.jc,
            alignItems: positionFlexCenter.ai,
            paddingTop: "3%",
          }}
        >
          <LearnNav />
        </Box>
        <OtherList />
      </div>
    </Suspense>
  );
};
