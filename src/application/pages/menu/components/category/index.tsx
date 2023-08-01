import { Container } from './style'
import { Product } from './product'
import { type Product as ProductModel } from '@/domain/models'

import React from 'react'

type Props = { categories: Array<{ id: string, name: string, products: ProductModel[] }> }

export const Category: React.FC<Props> = ({ categories }): JSX.Element => {
  return (
    <>
      {
        categories.map((category) => (
          <Container key={category.id}>
            <h2>{category.name}</h2>
            <ul>
              { category.products.map(product => (
                <Product key={product.id} product={product}/>
              ))}
            </ul>
          </Container>
        ))
      }
    </>
  )
}
