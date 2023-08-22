import { Container, NotProduct } from './style'
import { Product } from './product'
import { type Product as ProductModel } from '@/domain/models'

import React from 'react'

type Props = { categories: Array<{ id: string, name: string, products: ProductModel[] }> }

export const Category: React.FC<Props> = ({ categories }): JSX.Element => {
  return (
    <>
      {
        categories.length > 0
          ? categories.map((category) => (
            <Container key={category.id}>
              <h2>{category.name}</h2>
              <ul>
                { category.products.map(product => (
                  <Product key={product.id} product={product} categoryName={category.name}/>
                ))}
              </ul>
            </Container>
          ))
          : <NotProduct>Não tem produtos, volte mais tarde.</NotProduct>
      }
    </>
  )
}
