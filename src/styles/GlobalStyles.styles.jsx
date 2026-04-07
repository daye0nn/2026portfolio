import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

ul,li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

:root {
  --black: #000;
  --white: #fff;
  --bg: #121212;
  --light: #f7f7f7;
  --blue: #3F72AF;
  --gray: #777;
  --light-gray: #e0e0e3;
  --text: #121212;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  background: var(--bg);
  color: var(--text);
  font-family: "Archivo", "pretendard", sans-serif;
}
`;

export default GlobalStyles;
