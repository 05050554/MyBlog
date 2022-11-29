import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { FontSizeContext, ThemeContext } from "../../GlobalTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Connect = () => {
  const { fontSizeK } = useContext(FontSizeContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      style={{
        fontSize: fontSizeK.fontH4,
      }}
    >
      有興趣聯絡我的，歡迎使用下列幾項方式:
      <br />
      <FontAwesomeIcon icon={faLinkedin} />
      <a
        href="https://www.linkedin.com/in/shiue-wei-tzou-44b369242/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: theme.foreground, textDecoration: "none" }}
      >
        {" "}
        LinkedIn
      </a>
      <span> : 如果本人持續有再找工作的話LinkedIn都會看。</span>
      <br />
      <FontAwesomeIcon icon={faEnvelope} />
      <a
        href="mailto: jason5366831@gmail.com"
        style={{ color: theme.foreground, textDecoration: "none" }}
      >
        {" "}
        Email
      </a>
      <span> : 可寄信至 jason5366831@gmail.com 這個信箱。</span>
    </Box>
  );
};

export default Connect;
