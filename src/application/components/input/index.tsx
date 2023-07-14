import { Container } from './style'

import React from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: React.FC<Props> = ({ name, placeholder, value, ...props }): JSX.Element => {
  return (
  <>
    <Container>
      <input {...props} placeholder=" " id={name} autoComplete="off" type='text' value={value}/>
      <label htmlFor={name}>{ placeholder }</label>
    </Container>
  </>
  )
}
