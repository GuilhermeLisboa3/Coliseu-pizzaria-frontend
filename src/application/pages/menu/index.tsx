'use client'
import { Default } from '@/application/layouts'
import { Container } from './style'
import { Skeleton, Category } from './components'
import { type Product } from '@/domain/models'
import { type ListCategoryWithProducts } from '@/domain/use-cases/category'
import { useError } from '@/application/hooks'

import React, { useEffect, useState } from 'react'
import { Error } from '@/application/components'

type Props = {
  listCategoryWithProducts: ListCategoryWithProducts
}

export const Menu: React.FC<Props> = ({ listCategoryWithProducts }): JSX.Element => {
  const [categories, setCategories] = useState<Array<{ id: string, name: string, products: Product[] }> | undefined>(undefined)
  const [reload, setReload] = useState(false)
  const [error, setError] = useState('')
  const handleError = useError(error => setError(error.message))

  const handleReload = (): void => {
    setCategories(undefined)
    setError('')
    setReload(!reload)
  }

  useEffect(() => {
    listCategoryWithProducts().then(category => setCategories(category)).catch(error => handleError(error))
  }, [reload])

  return (
    <>
      <Default>
        <Container>
          <h1 data-testid='title-menu'>Cardápio</h1>
          {
            error
              ? <Error error={error} reload={handleReload}/>
              : <>
              { categories
                ? <Category categories={categories}/>
                : <Skeleton/>
              }
            </>
          }
        </Container>
      </Default>
    </>
  )
}
