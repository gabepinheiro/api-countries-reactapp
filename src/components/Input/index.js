import React from 'react'

import * as S from './styled'

function Input( { placeholder, ...props } ){
  return (
    <S.Input placeholder={placeholder} {...props} />
  )
}

export default Input;
