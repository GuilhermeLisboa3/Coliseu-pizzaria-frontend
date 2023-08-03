import { Container } from './style'

import React from 'react'
import { IoMdRemoveCircleOutline, IoMdAddCircleOutline } from 'react-icons/io'

export const Product: React.FC = (): JSX.Element => {
  return (
  <Container>
    <aside>
      <img src="https://fast-food.s3.amazonaws.com/59445d5c-e73f-4d7c-a2e5-30d61ce5aa18.png" className='Bebidas' alt="" />
    </aside>
    <section>
      <p>Peperoni</p>
      <span>R$ 40,00</span>
    </section>
    <div>
      <IoMdRemoveCircleOutline/>
      <span>8</span>
      <IoMdAddCircleOutline/>
    </div>
  </Container>
  )
}
