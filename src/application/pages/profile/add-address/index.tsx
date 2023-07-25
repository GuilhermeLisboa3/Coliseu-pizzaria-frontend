'use client'
import { Button, Input, Spinner } from '@/application/components'
import { Container } from './style'
import { Default } from '@/application/layouts'
import { type SearchAddress } from '@/domain/use-cases/address'
import { type Validator } from '@/application/validation'
import delivery from '@/application/assets/profile/entregadora.png'

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type Props = { validation: Validator, searchAddress: SearchAddress }

export const AddAddress: React.FC<Props> = ({ validation, searchAddress }): JSX.Element => {
  const [showFormSearch, setShowFormSearch] = useState(true)
  const [lodding, setLodding] = useState(false)

  const [zipCode, setZipCode] = useState<string>('')
  const [zipCodeError, setZipCodeError] = useState<string | undefined>('')
  const [neighborhood, setNeighborhood] = useState<string>('')
  const [street, setStreet] = useState<string>('')

  useEffect(() => { setZipCodeError(validation.validate('zipCode', { zipCode })) }, [zipCode])

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
          : <form data-testid='add-form'>
              <div>
                <Input placeholder="Apelido" type='text' name='surname' setState={() => {}}/>
                <Input placeholder="Cep" type='text' name='cep' setState={setZipCode} value={zipCode} readOnly/>
                <Input placeholder="Numero" type='text' name='number' setState={() => {}}/>
              </div>
            <Input placeholder="Bairro" type='text' name='neighborhood' setState={setNeighborhood} value={neighborhood} readOnly/>
            <Input placeholder="Rua" type='text' name='street' setState={setStreet} value={street} readOnly/>
            <Input placeholder="Complemento" type='text' name='complement' setState={() => {}}/>
            <Button>Salvar</Button>
          </form>
        }
      </section>
    </Container>
  </Default>
  )
}
