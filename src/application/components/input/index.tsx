import { Container } from './style'

import React from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  setState: any
}

export const Input: React.FC<Props> = ({ name, placeholder, value, setState, type, ...props }): JSX.Element => {
  return (
  <>
    <Container>
      <input
      {...props}
      placeholder=" "
      id={name}
      autoComplete="off"
      type={type}
      value={value}
      data-testid={name}
      onChange={e => { setState(e.target.value) } }
      />
      <label htmlFor={name}>{ placeholder }</label>
    </Container>
  </>
  )
}
