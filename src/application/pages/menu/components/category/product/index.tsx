import { Container } from './style'

import { PiShoppingCartSimple } from 'react-icons/pi'
import React from 'react'
import { type Product as ProductModel } from '@/domain/models'
import { formatPrice } from '@/application/utils'

type Props = { product: ProductModel }

export const Product: React.FC<Props> = ({ product }): JSX.Element => {
  return (
    <Container>
      <section>
        <img src={product.picture} alt={product.name} />
        <h3>{product.name}</h3>
        <hr />
        <p>{ product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}</p>
        <p>{formatPrice(product.price)}</p>
      </section>
      <span><PiShoppingCartSimple/></span>
    </Container>
  )
}
