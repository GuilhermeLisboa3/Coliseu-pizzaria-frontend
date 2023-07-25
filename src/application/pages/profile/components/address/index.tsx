import { Container } from './style'
import { type Address as AddressModel } from '@/domain/models'

import { TiEdit } from 'react-icons/ti'
import { RiDeleteBinLine } from 'react-icons/ri'
import React from 'react'

type Props = { address: AddressModel }

export const Address: React.FC<Props> = ({ address }): JSX.Element => {
  return (
    <Container $active={address.active} data-testid='address'>
      <div>
        <p>{address.surname}</p>
        <p>{address.street}, {address.number}, {address.complement}</p>
        <p>{address.neighborhood}, {address.zipCode}</p>
      </div>
      <div>
          <TiEdit/>
          <RiDeleteBinLine/>
      </div>
    </Container>
  )
}
