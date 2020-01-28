import styled from 'styled-components'

export const Input = styled.input.attrs({ type: 'text' })`
  font-size: 14px;
  font-weight: 600;
  border:0;

  &::placeholder{
    color: var(--color-dark-gray);
  }
`;