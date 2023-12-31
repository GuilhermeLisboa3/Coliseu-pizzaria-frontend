'use client'
import { Container } from './style'
import { type Address as AddressModel } from '@/domain/models'
import { AddressContext } from '@/application/pages/profile/contexts'
import { EditAddress } from '../../edit-address'

import { TiEdit } from 'react-icons/ti'
import { RiDeleteBinLine } from 'react-icons/ri'
import React, { useContext, useState } from 'react'

type Props = { address: AddressModel }

export const Address: React.FC<Props> = ({ address }): JSX.Element => {
  const { handleDelete } = useContext(AddressContext)
  const [OpenModal, setOpenModal] = useState(false)
  return (
    <>
      <Container $active={address.active} data-testid='address'>
        <div>
          <p>{address.surname}</p>
          <p>{address.street}, {address.number}, {address.complement}</p>
          <p>{address.neighborhood}, {address.zipCode}</p>
        </div>
        <div>
            <TiEdit onClick={() => { setOpenModal(true) }} data-testid='icon-edit'/>
            <RiDeleteBinLine onClick={() => { handleDelete(address.id) }} data-testid='icon-delete'/>
        </div>
      </Container>
      <EditAddress isOpen={OpenModal} setIsOpen={setOpenModal} address={address}/>
    </>
  )
}
