'use client'
import { Input, Button } from '@/application/components'
import { Form } from './style'
import './style.css'

import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import React from 'react'

type Props = { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }

export const EditAddress: React.FC<Props> = ({ isOpen, setIsOpen }): JSX.Element => {
  return (
    <Modal ariaHideApp={false} isOpen={isOpen} shouldCloseOnEsc={false} className='react-modal' overlayClassName='react-modal-overlay'>
      <button className='button-icon-close' onClick={() => { setIsOpen(false) }} data-testid='close-modal'><AiOutlineClose/></button>
      <Form data-testid='edit-form'>
        <div>
          <Input placeholder="Apelido" type='text' name='surname' setState={() => {}}/>
          <Input placeholder="Número" type='text' name='number' setState={() => {}}/>
        </div>
          <Input placeholder="Complemento" type='text' name='complement' setState={() => {}}/>
          <Button>Salvar</Button>
      </Form>
    </Modal>
  )
}
