'use client'
import { Default } from '@/application/layouts'
import { Container } from './style'
import { Skeleton, Category } from './components'
import { type Product } from '@/domain/models'
import { type ListCategoryWithProducts } from '@/domain/use-cases/category'

import React, { useEffect, useState } from 'react'

type Props = {
  listCategoryWithProducts: ListCategoryWithProducts
}

export const Menu: React.FC<Props> = ({ listCategoryWithProducts }): JSX.Element => {
  const [categories, setCategories] = useState<Array<{ id: string, name: string, products: Product[] }>>([])
  useEffect(() => {
    listCategoryWithProducts().then(category => setCategories(category))
  }, [])

  return (
    <>
      <Default>
        <Container>
          <h1 data-testid='title-menu'>Cardápio</h1>
          { categories.length > 0
            ? <Category categories={categories}/>
            : <Skeleton/>
          }
        </Container>
      </Default>
    </>
  )
}
