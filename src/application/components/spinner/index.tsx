import { Container } from './style'

import React from 'react'

export const Spinner = (): JSX.Element => {
  return (
  <>
    <Container data-testid='spinner'><div></div><div></div><div></div><div></div></Container>
  </>
  )
}
