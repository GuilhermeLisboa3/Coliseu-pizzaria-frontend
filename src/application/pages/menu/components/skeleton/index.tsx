import { Product, Container } from './style'

import { PiShoppingCartSimple } from 'react-icons/pi'
import React from 'react'

export const Skeleton: React.FC = (): JSX.Element => {
  return (
    <>
      <Container>
        <ul>
          <Product>
            <div>
            </div>
            <span><PiShoppingCartSimple/></span>
          </Product>
          <Product>
            <div>
            </div>
            <span><PiShoppingCartSimple/></span>
          </Product>
          <Product>
            <div>
            </div>
            <span><PiShoppingCartSimple/></span>
          </Product>
        </ul>
      </Container>
      <Container>
        <ul>
          <Product>
            <div>
            </div>
            <span><PiShoppingCartSimple/></span>
          </Product>
          <Product>
            <div>
            </div>
            <span><PiShoppingCartSimple/></span>
          </Product>
          <Product>
            <div>
            </div>
            <span><PiShoppingCartSimple/></span>
          </Product>
        </ul>
      </Container>
    </>
  )
}
