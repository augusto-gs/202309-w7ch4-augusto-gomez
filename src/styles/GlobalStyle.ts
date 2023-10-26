import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

html {
font-family: Roboto
}

body {
font-size: 1.5rem;
margin: 0; }


h1, h2, h3, h4, h5, h6 {
margin: 0;
}

.container {
  padding: 10px
}
`;

export default GlobalStyle;
