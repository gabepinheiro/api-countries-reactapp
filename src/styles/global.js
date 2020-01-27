import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
  margin:0;
  padding:0;
  outline:0;
  box-sizing: border-box;
}

html, body, #root{
  height: 100%;  
}

body{
  background-color: var(--color-bgc);
  -webkit-font-smothing: antialiased;
}

body, input, button{
  font-family: 'Nunito Sans', sans-serif;
}

a{
  text-decoration:none;
}

ul, ol, li{
  list-style: none;
}
`;

export default GlobalStyle;