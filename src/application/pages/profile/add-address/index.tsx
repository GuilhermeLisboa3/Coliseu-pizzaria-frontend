'use client'
import { Button, Input, Spinner } from '@/application/components'
import { Container } from './style'
import { Default } from '@/application/layouts'
import { type AddAddress as AddAddressUC, type SearchAddress } from '@/domain/use-cases/address'
import { type Validator } from '@/application/validation'
import delivery from '@/application/assets/profile/entregadora.png'

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type Props = { validation: Validator, searchAddress: SearchAddress, addAddress: AddAddressUC }

export const AddAddress: React.FC<Props> = ({ validation, searchAddress, addAddress }): JSX.Element => {
  const [showFormSearch, setShowFormSearch] = useState(true)
  const [lodding, setLodding] = useState(false)

  const [zipCode, setZipCode] = useState<string>('')
  const [zipCodeError, setZipCodeError] = useState<string | undefined>('')
  const [neighborhood, setNeighborhood] = useState<string>('')
  const [street, setStreet] = useState<string>('')
  const [number, setNumber] = useState('')
  const [numberError, setNumberError] = useState<string | undefined>('')
  const [surname, setSurname] = useState('')
  const [surnameError, setSurnameError] = useState<string | undefined>('')
  const [complement, setComplement] = useState('')

  useEffect(() => { setZipCodeError(validation.validate('zipCode', { zipCode })) }, [zipCode])
  useEffect(() => setNumberError(validation.validate('number', { number })), [number])
  useEffect(() => setSurnameError(validation.validate('surname', { surname })), [surname])

  const handleSearchAddress = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    if (lodding || zipCodeError) return
    try {
      setLodding(true)
      const { neighborhood, street } = await searchAddress({ zipCode })
      setNeighborhood(neighborhood)
      setStreet(street)
      setShowFormSearch(false)
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLodding(false)
    }
  }

  const handlAddAddress = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    if (lodding || surnameError || numberError) return
    setLodding(true)
    await addAddress({ surname, complement, neighborhood, zipCode, number: Number(number), street })
  }

  return (
  <Default>
    <Container>
      <section>
        <img src={delivery.src} alt="" />
        { showFormSearch
          ? <form onSubmit={handleSearchAddress} data-testid='search-form'>
              <Input placeholder="Digite seu cep" type='text' name='cep' setState={setZipCode}/>
              <Button type='submit' disabled={!!zipCodeError}>{ lodding ? <Spinner/> : 'Buscar'}</Button>
          </form>
          : <form onSubmit={handlAddAddress} data-testid='add-form'>
              <div>
                <Input placeholder="Apelido" type='text' name='surname' setState={setSurname}/>
                <Input placeholder="Cep" type='text' name='cep' setState={setZipCode} value={zipCode} readOnly/>
                <Input placeholder="Número" type='text' name='number' setState={setNumber}/>
              </div>
            <Input placeholder="Bairro" type='text' name='neighborhood' setState={setNeighborhood} value={neighborhood} readOnly/>
            <Input placeholder="Rua" type='text' name='street' setState={setStreet} value={street} readOnly/>
            <Input placeholder="Complemento" type='text' name='complement' setState={setComplement}/>
            <Button type='submit' disabled={!!numberError || !!surnameError}>{ lodding ? <Spinner/> : 'Salvar'}</Button>
          </form>
        }
      </section>
    </Container>
  </Default>
  )
}
