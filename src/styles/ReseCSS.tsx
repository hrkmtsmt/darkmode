import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
/*
  Reset CSS by 'The new CSS Reset'
  https://github.com/elad2412/the-new-css-reset
*/
*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
  all: unset;
  display: revert;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
ol,
ul {
  list-style: none;
}
img {
  max-width: 100%;
}
table {
  border-collapse: collapse;
}
textarea {
  white-space: revert;
}

`;
