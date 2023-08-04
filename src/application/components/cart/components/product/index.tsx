import { CartContext, type Cart } from '@/application/contexts'
import { Container } from './style'
import { formatPrice } from '@/application/utils'

import React, { useContext } from 'react'
import { IoMdRemoveCircleOutline, IoMdAddCircleOutline } from 'react-icons/io'

export type Props = { product: Cart }

export const Product: React.FC<Props> = ({ product }): JSX.Element => {
  const { addCartItem } = useContext(CartContext)
  return (
  <Container>
    <aside>
      <img src={ product.picture } className={product.categoryName} alt={product.name} />
    </aside>
    <section>
      <p>{ product.name }</p>
      <span>{ formatPrice(product.price) }</span>
    </section>
    <div>
      <IoMdRemoveCircleOutline/>
      <span>{ product.quantity }</span>
      <IoMdAddCircleOutline onClick={() => { addCartItem(product, product.categoryName) }} data-testid='add-cart'/>
    </div>
  </Container>
  )
}
