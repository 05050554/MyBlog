import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { FontSizeContext, ThemeContext } from "../../GlobalTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const LinkA = styled.a`
  color: ${(props) => props.theme.foreground};
  text-decoration: none;
`;

const ConnectSpan = styled.span``;

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
      <LinkA
        href="https://www.linkedin.com/in/shiue-wei-tzou-44b369242/"
        target="_blank"
        rel="noopener noreferrer"
        theme={theme}
      >
        {" "}
        LinkedIn
      </LinkA>
      <ConnectSpan> : 如果本人持續有再找工作的話LinkedIn都會看。</ConnectSpan>
      <br />
      <FontAwesomeIcon icon={faEnvelope} />
      <LinkA href="mailto: jason5366831@gmail.com" theme={theme}>
        {" "}
        Email
      </LinkA>
      <ConnectSpan> : 可寄信至 jason5366831@gmail.com 這個信箱。</ConnectSpan>
    </Box>
  );
};

export default Connect;
