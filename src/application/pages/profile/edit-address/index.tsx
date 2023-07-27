'use client'
import { Input, Button } from '@/application/components'
import { Form } from './style'
import './style.css'

import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import React from 'react'

export const EditAddress: React.FC = (): JSX.Element => {
  return (
    <Modal ariaHideApp={false} isOpen={true} shouldCloseOnEsc={true} className='react-modal' overlayClassName='react-modal-overlay'>
      <button className='button-icon-close'><AiOutlineClose/></button>
      <Form>
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
