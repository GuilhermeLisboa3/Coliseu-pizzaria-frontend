'use client'
import { Container } from './style'
import { type Product as ProductModel } from '@/domain/models'
import { CartContext } from '@/application/contexts'
import { formatPrice } from '@/application/utils'

import { PiShoppingCartSimple } from 'react-icons/pi'
import React, { useContext } from 'react'

type Props = { product: ProductModel, categoryName: string }

export const Product: React.FC<Props> = ({ product, categoryName }): JSX.Element => {
  const { addCartItem } = useContext(CartContext)
  return (
    <Container>
      <section>
        <img src={product.picture} alt={product.name} className={categoryName}/>
        <h3>{product.name}</h3>
        <hr />
        <p>{ product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}</p>
        <p>{formatPrice(product.price)}</p>
      </section>
      <span onClick={() => { addCartItem(product, categoryName) }} data-testid='product-add-cart'><PiShoppingCartSimple/></span>
    </Container>
  )
}
