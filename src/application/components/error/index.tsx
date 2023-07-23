import { Container } from './style'
import { Button } from '@/application/components'

import React from 'react'

type Props = { error: string, reload: () => void }

export const Error: React.FC<Props> = ({ error, reload }): JSX.Element => {
  return (
  <Container>
    <span>{error}</span>
    <Button onClick={reload}>Tentar novamente</Button>
  </Container>
  )
}
