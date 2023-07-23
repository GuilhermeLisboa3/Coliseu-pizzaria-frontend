import { Container } from './style'
import { Button } from '@/application/components'

import React from 'react'

export const Error: React.FC = (): JSX.Element => {
  return (
  <Container>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, maxime.</span>
    <Button>Tentar novamente</Button>
  </Container>
  )
}
