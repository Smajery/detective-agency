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
    min-height: 100%;
    overflow-x: hidden;
  }

  body {
    font-size: 16px;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    font-family: 'Titillium Web', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    color: inherit;
  }

  ul, li {
    list-style: none;
  }

  input, textarea {
    background: none;
    color: inherit;
    font: inherit;
    text-decoration: none;
  }

  select {
    background-color: transparent;
    color: inherit;
    font: inherit;
    text-decoration: none;
    cursor: pointer;
    //appearance: none;
    //-webkit-appearance: none;
    //-moz-appearance: none;
  }


  button {
    background-color: transparent;
    color: inherit;
    font: inherit;
    text-decoration: none;
    cursor: pointer;
    overflow: visible;
  }
  
  h1 {
    font-size: 31.25px;
  }
  
  h2 {
    font-size: 25px;
  }
  
  h3 {
    font-size: 20px;
  }
  
  h4 {
    font-size: 16px;
  }
  
  h5 {
    font-size: 12.80px;
  }
  
  h6 {
    font-size: 10.24px;
  }
`;

export default GlobalStyle;