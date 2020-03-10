import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display');

  *{
    padding: 0;
    margin:0;
    outline:0;
    box-sizing:0;   
  }
  body{
    background: #353940;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root {
    height: 100%;  
  }
  input, button {
    font-family: 'Roboto', sans-serif;  
  }
  button {
      cursor: pointer;
  }
`;