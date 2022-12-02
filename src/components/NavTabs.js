import React, { useContext } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import About from "./About/About";
import { PositionContext, ThemeContext } from "../GlobalTheme";
import ReactList from "./LearnReact/ReactList";
import LearnNav from "./LearnMore/LearnNav";
const NavTabs = () => {
  const { theme } = useContext(ThemeContext);
  const { positionGridCenter } = useContext(PositionContext);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{ width: "100%", typography: "body1" }}
      style={{
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: "3%",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            indicatorColor={theme.mui}
          >
            <Tab
              style={{ color: theme.foreground }}
              label="學習新知"
              value="1"
            />
            <Tab style={{ color: theme.foreground }} label="關於我" value="2" />
            <Tab style={{ color: theme.foreground }} label="專案" value="3" />
          </TabList>
        </Box>
        <TabPanel
          style={{
            display: positionGridCenter.display,
            justifyItems: positionGridCenter.ji,
          }}
          value="1"
        >
          <LearnNav />
          <ReactList />
        </TabPanel>
        <TabPanel value="2">
          <About />
        </TabPanel>
        <TabPanel value="3">專案</TabPanel>
      </TabContext>
    </Box>
  );
};

export default NavTabs;
