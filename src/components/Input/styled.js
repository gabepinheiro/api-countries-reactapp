import styled from 'styled-components'

export const Input = styled.input.attrs({ type: 'text' })`
  &::placeholder{
    color: var(--color-dark-gray);
  }
`;