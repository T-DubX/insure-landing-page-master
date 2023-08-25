import {createGlobalStyle} from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {

    font-family: 'Karla', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
  }
  
  h1,
  h2,
  h3,
  h4 {
    font-family: 'DM Serif Display', serif;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.font};
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: unset;
    cursor: pointer;
    color: ${theme.colors.font};
  }
`