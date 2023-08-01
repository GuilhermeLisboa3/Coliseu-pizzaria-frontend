import { Container } from './style'
import { Product } from './product'

import React from 'react'

export const Category: React.FC = (): JSX.Element => {
  return (
      <Container>
        <h2>Pizzas</h2>
        <ul>
          <Product/>
        </ul>
      </Container>
  )
}
