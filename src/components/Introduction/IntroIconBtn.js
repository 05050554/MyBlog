import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeContext } from "../../GlobalTheme";
export const IntroIconBtn = () => {
  const { theme } = useContext(ThemeContext);

  const openNewPage = (url, iconName) => {
    window.open(url, "Wei" + { iconName });
  };

  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        aria-label="delete"
        onClick={() => openNewPage("https://github.com/05050554", "Github")}
        
      >
        <GitHubIcon
          style={{
            color: theme.foreground,
          }}
        />
      </IconButton>
      <IconButton
        onClick={() =>
          openNewPage(
            "https://www.linkedin.com/in/shiue-wei-tzou-44b369242/",
            "Linked"
          )
        }
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{
            color: theme.foreground,
          }}
        />
      </IconButton>
    </Stack>
  );
};
