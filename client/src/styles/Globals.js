import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

  #__next {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    font-size: 16px;
    background-color: #FFFFFF;
    font-family: 'Titillium Web', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

  input {
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    text-decoration: none;
  }

  
  button {
    border: none;
    background-color: transparent;
    color: inherit;
    font: inherit;
    text-decoration: none;
    cursor: pointer;
    overflow: visible;
  }
`;

export default GlobalStyle;