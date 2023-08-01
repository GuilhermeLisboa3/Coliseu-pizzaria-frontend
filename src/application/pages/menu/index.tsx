'use client'
import { Default } from '@/application/layouts'
import { Container } from './style'
import { Skeleton } from './components'

import React from 'react'

export const Menu: React.FC = (): JSX.Element => {
  return (
    <>
      <Default>
        <Container>
          <h1>Cardápio</h1>
          <Skeleton/>
        </Container>
      </Default>
    </>
  )
}
