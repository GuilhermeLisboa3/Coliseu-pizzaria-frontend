import { Product, Container } from './style'

import { PiShoppingCartSimple } from 'react-icons/pi'
import React from 'react'

export const Skeleton: React.FC = (): JSX.Element => {
  return (
    <>
      <Container data-testid='skeleton'>
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
      <Container data-testid='skeleton'>
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
