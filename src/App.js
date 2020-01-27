import React from 'react';

import './styles/variables.css';
import GlobalStyle from './styles/global';

import Header from './components/Header/'
import { Main } from './components/Main/'
import Form from './components/Form/'
import Input from './components/Input/'


function App() {
  return (
    <>
    <GlobalStyle />
    <Header />

    <Main>
      <Form>
        <Input placeholder="Search for a country" />
      </Form>
    </Main>
    </>
  );
}

export default App;
