import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: var(--color-base);
  box-shadow: var(--box-shadow);
  border-radius: 5px;
  & > div {
    padding: 20px;

    & > h3{
      margin-bottom: 10px;
    }
  }
`;

const CardCountry = (props) => {
  const { flag, name, population, region, capital } = props.country
  return (
    <Container>
      <img src={flag} alt={`Flag ${name}`} />
      <div>
        <h3>{name}</h3>
        <p><strong>Population: </strong>{population}</p>
        <p><strong>Region: </strong>{region}</p>
        <p><strong>Capital: </strong>{capital}</p>
      </div>
    </Container >
  )
}

export default CardCountry;