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
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;