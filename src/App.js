import React from 'react';

import './styles/variables.css';
import GlobalStyle from './styles/global';

import Header from './components/Header/';
import { Main } from './components/Main/';
import Form from './components/Form/';
import Input from './components/Input/';
import Label from './components/Label/';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <>
    <GlobalStyle />
    <Header />

    <Main>
      <Form>
        <Label>
           <FontAwesomeIcon icon={faSearch} />
          <Input placeholder="Search for a country..." />
        </Label>
      </Form>
    </Main>
  </>
  );
}

export default App;
