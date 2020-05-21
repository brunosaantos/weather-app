import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}
  html,
  body {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
`;
