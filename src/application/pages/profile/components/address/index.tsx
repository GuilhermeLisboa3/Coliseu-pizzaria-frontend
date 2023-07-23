import { Container } from './style'

import { TiEdit } from 'react-icons/ti'
import { RiDeleteBinLine } from 'react-icons/ri'
import React from 'react'

export const Address: React.FC = (): JSX.Element => {
  return (
    <Container>
      <div>
        <p>Casa</p>
        <p>Rua Antonio Rodrigues Braga 34, rua sem saida</p>
        <p>Vila constança, 02258090</p>
      </div>
      <div>
          <TiEdit/>
          <RiDeleteBinLine/>
      </div>
    </Container>
  )
}
