'use client'
import { Default } from '@/application/layouts'
import { Container } from './style'
import { Skeleton } from './components'
import { type ListCategoryWithProducts } from '@/domain/use-cases/category'

import React, { useEffect } from 'react'

type Props = {
  listCategoryWithProducts: ListCategoryWithProducts
}

export const Menu: React.FC<Props> = ({ listCategoryWithProducts }): JSX.Element => {
  useEffect(() => { listCategoryWithProducts() }, [])

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
