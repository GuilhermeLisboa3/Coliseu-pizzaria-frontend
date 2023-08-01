'use client'
import { Default } from '@/application/layouts'
import { Container, Product } from './style'

import { PiShoppingCartSimple } from 'react-icons/pi'
import React from 'react'

export const Menu: React.FC = (): JSX.Element => {
  return (
    <>
      <Default>
        <Container>
          <h1>Cardápio</h1>
          <div>
            <h2>Pizzas</h2>
            <ul>
              <Product>
                <section>
                  <img src='https://fast-food.s3.amazonaws.com/001bab08-675b-4a9b-bcbe-fe2221d95f27.png' alt="" />
                  <h3>Peperoni</h3>
                  <hr />
                  <p>Massa de pizza (farinha de trigo enriquecida com ferro e ácido fólico, água, azeite, sal e fermento biológico), muçarela vegetal,</p>
                  <p>R$ 40,00</p>
                </section>
                <span><PiShoppingCartSimple/></span>
              </Product>
            </ul>
          </div>
        </Container>
      </Default>
    </>
  )
}
