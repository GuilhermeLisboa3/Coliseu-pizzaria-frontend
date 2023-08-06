import { Container, FooterCart, HeaderCart } from './style'
import { Button } from '@/application/components'
import { CartContext } from '@/application/contexts'
import { Product, Skeleton } from './components'

import React, { useContext } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { formatPrice } from '@/application/utils'

type Props = { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }

export const Cart: React.FC<Props> = ({ isOpen, setIsOpen }): JSX.Element => {
  const { cart, error } = useContext(CartContext)
  const subtotal = cart ? cart.reduce((total, { quantity, price }) => total + price * quantity, 0) : 0
  const deliveryFee = cart?.length ? 5 : 0
  const total = subtotal + deliveryFee
  return (
    <Container $isOpen={isOpen}>
      <HeaderCart>
        <FiArrowRight onClick={() => setIsOpen(!isOpen)} data-testid='close-cart'/>
      </HeaderCart>
      <div className='itens' data-testid='itens'>
        {
          error || cart?.length === 0
            ? <span className='cart-empty'>Carrinho vazio</span>
            : <>
                {
                  cart
                    ? cart.map(product => (<Product key={product.id} product={product}/>))
                    : <Skeleton/>
                }
              </>
        }
      </div>
      <FooterCart>
        <div>
          <p>subtotal</p>
          <p>{ formatPrice(subtotal) }</p>
        </div>
        <div>
          <p>Taxa de entrega</p>
          <p>{ formatPrice(deliveryFee) }</p>
        </div>
        <hr />
        <div>
          <p>Total</p>
          <p>{ formatPrice(total) }</p>
        </div>
        <Button>Comprar</Button>
      </FooterCart>
    </Container>
  )
}
