import { Container } from './style'

import { PiShoppingCartSimple } from 'react-icons/pi'
import React from 'react'

export const Product: React.FC = (): JSX.Element => {
  return (
    <Container>
      <section>
        <img src='https://fast-food.s3.amazonaws.com/001bab08-675b-4a9b-bcbe-fe2221d95f27.png' alt="" />
        <h3>Peperoni</h3>
        <hr />
        <p>Massa de pizza (farinha de trigo enriquecida com ferro e ácido fólico, água, azeite, sal e fermento biológico), muçarela vegetal,</p>
        <p>R$ 40,00</p>
      </section>
      <span><PiShoppingCartSimple/></span>
    </Container>
  )
}
