import React from 'react';

import './styles/variables.css';
import GlobalStyle from './styles/global';

import Header from './components/Header/'
import { Main } from './components/Main/'


function App() {
  return (
    <>
    <GlobalStyle />
    <Header />

    <Main>
      <h2>Hello!</h2>
    </Main>
    </>
  );
}

export default App;
