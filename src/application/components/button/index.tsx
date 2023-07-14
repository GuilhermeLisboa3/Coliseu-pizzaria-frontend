import { Container } from './style'

import React from 'react'

type Props = {
  children: string | JSX.Element
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button: React.FC<Props> = ({ children, disabled, type }): JSX.Element => {
  return (
    <>
      <Container disabled={disabled} type={type}>
        {children}
      </Container>
    </>
  )
}
