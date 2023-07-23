import { Container } from './style'

import React from 'react'

type Props = {
  children: string | JSX.Element
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<Props> = ({ children, disabled, type, onClick }): JSX.Element => {
  return (
    <>
      <Container disabled={disabled} type={type} onClick={onClick}>
        {children}
      </Container>
    </>
  )
}
