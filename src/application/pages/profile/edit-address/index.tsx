'use client'
import { Input, Button } from '@/application/components'
import { AddressContext } from '@/application/pages/profile/contexts'
import { Form } from './style'
import { type Address } from '@/domain/models'
import './style.css'

import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import React, { useState, useEffect, useContext } from 'react'

type Props = { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, address: Address }

export const EditAddress: React.FC<Props> = ({ isOpen, setIsOpen, address }): JSX.Element => {
  const { validation } = useContext(AddressContext)

  const [number, setNumber] = useState(address.number)
  const [, setNumberError] = useState<string | undefined>('')
  const [surname, setSurname] = useState(address.surname)
  const [, setSurnameError] = useState<string | undefined>('')
  const [complement, setComplement] = useState(address.complement)

  useEffect(() => setNumberError(validation.validate('number', { number })), [number])
  useEffect(() => setSurnameError(validation.validate('surname', { surname })), [surname])

  return (
    <Modal ariaHideApp={false} isOpen={isOpen} shouldCloseOnEsc={false} className='react-modal' overlayClassName='react-modal-overlay'>
      <button className='button-icon-close' onClick={() => { setIsOpen(false) }} data-testid='close-modal'><AiOutlineClose/></button>
      <Form data-testid='edit-form'>
        <div>
          <Input placeholder="Apelido" type='text' name='surname' value={surname} setState={setSurname}/>
          <Input placeholder="Número" type='text' name='number' value={number} setState={setNumber}/>
        </div>
          <Input placeholder="Complemento" type='text' name='complement' value={complement} setState={setComplement}/>
          <Button>Salvar</Button>
      </Form>
    </Modal>
  )
}
