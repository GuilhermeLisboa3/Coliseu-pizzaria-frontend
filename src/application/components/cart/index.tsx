import { Container, FooterCart, HeaderCart } from './style'
import { Button } from '@/application/components'
import { Product, Skeleton } from './components'

import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export const Cart: React.FC = (): JSX.Element => {
  return (
    <Container $open={true}>
      <HeaderCart>
        <FiArrowRight/>
      </HeaderCart>
      <div className='itens'>
        <Product/>
        <Product/>
        <Skeleton/>
      </div>
      <FooterCart>
        <div>
          <p>subtotal</p>
          <p>R$ 40,00</p>
        </div>
        <div>
          <p>Taxa de entrega</p>
          <p>R$ 5,00</p>
        </div>
        <hr />
        <div>
          <p>Total</p>
          <p>R$ 45,00</p>
        </div>
        <Button>Comprar</Button>
      </FooterCart>
    </Container>
  )
}
