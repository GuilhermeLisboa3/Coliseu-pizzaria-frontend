'use client'
import { Input, Button, Spinner } from '@/application/components'
import { AddressContext } from '@/application/pages/profile/contexts'
import { Form } from './style'
import { type Address } from '@/domain/models'
import './style.css'

import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import React, { useState, useEffect, useContext } from 'react'
import { toast } from 'react-toastify'
import { useError } from '@/application/hooks'

type Props = { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, address: Address }

export const EditAddress: React.FC<Props> = ({ isOpen, setIsOpen, address }): JSX.Element => {
  const { validation, updateAddress, reload } = useContext(AddressContext)
  const handleDeleteError = useError(error => toast.error(error.message))

  const [loading, setLoading] = useState(false)
  const [number, setNumber] = useState(address.number)
  const [numberError, setNumberError] = useState<string | undefined>('')
  const [surname, setSurname] = useState(address.surname)
  const [surnameError, setSurnameError] = useState<string | undefined>('')
  const [complement, setComplement] = useState(address.complement)
  const [active, setActive] = useState<boolean>(address.active)

  useEffect(() => setNumberError(validation.validate('number', { number })), [number])
  useEffect(() => setSurnameError(validation.validate('surname', { surname })), [surname])

  const handleEditAddress = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (loading || surnameError || numberError) return
      setLoading(true)
      await updateAddress({ id: address.id, number: Number(number), surname, complement, active })
      setIsOpen(false)
      reload()
    } catch (error: any) {
      handleDeleteError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal ariaHideApp={false} isOpen={isOpen} shouldCloseOnEsc={false} className='react-modal' overlayClassName='react-modal-overlay'>
      <button className='button-icon-close' onClick={() => { setIsOpen(false) }} data-testid='close-modal'><AiOutlineClose/></button>
      <Form data-testid='edit-form' onSubmit={handleEditAddress}>
        <div>
          <Input placeholder="Apelido" type='text' name='surname' value={surname} setState={setSurname}/>
          <Input placeholder="Número" type='text' name='number' value={number} setState={setNumber}/>
        </div>
          <Input placeholder="Complemento" type='text' name='complement' value={complement} setState={setComplement}/>
        <div>
          <input type="checkbox" name="active" id='active' data-testid='active' defaultChecked={address.active} onChange={ e => {
            setActive(!address.active)
          }}/>
          <label htmlFor="active">Definir como principal</label>
        </div>
          <Button type='submit' disabled={!!numberError || !!surnameError}>{ loading ? <Spinner/> : 'Salvar'}</Button>
      </Form>
    </Modal>
  )
}
