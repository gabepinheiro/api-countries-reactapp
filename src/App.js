import React, { useState, useEffect } from 'react';

import api from './services/api'

import './styles/variables.css';
import GlobalStyle from './styles/global';

import Header from './components/Header/';

import { Main } from './components/Main/';
import SectionCountries from './components/SectionCountries/';

import Form from './components/Form/';
import Input from './components/Input/';
import Label from './components/Label/';
import FilterRegion from './components/FilterRegion/'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import CardCountry from './components/CardCountry/'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const loadRequest = async () => {
      const response = await api.get('all');

      setCountries([...response.data]);

    }
    loadRequest();

  }, []);
  console.log(countries)
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
          <FilterRegion />
        </Form>
        <SectionCountries>
          {countries.map(country => <CardCountry country={country} />)}
        </SectionCountries>
      </Main>
    </>
  );
}

export default App;
