import { Container } from './style'
import { Button } from '@/application/components'

import React from 'react'

type Props = { error: string }

export const Error: React.FC<Props> = ({ error }): JSX.Element => {
  return (
  <Container>
    <span>{error}</span>
    <Button >Tentar novamente</Button>
  </Container>
  )
}
