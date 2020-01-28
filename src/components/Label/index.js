import styled from 'styled-components'

import  { Input } from '../Input/styled'

const Label = styled.label`
  width:480px;
  height: 55px;
  background: var(--color-base);
  line-height: 55px;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
  padding: 0 30px;
  display:block;
 
  
  svg{
    color: var(--color-dark-gray);
    margin-right: 20px;
  }

  /* ${Input}:focus & {
    border: 1px solid var(--color-dark-gray);
  } */
  :focus-within{
    border: 0.5px solid var(--color-dark-gray);
  }
`;

export default Label;