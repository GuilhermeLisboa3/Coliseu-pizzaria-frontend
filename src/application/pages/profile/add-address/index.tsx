'use client'
import { Button, Input } from '@/application/components'
import { Container } from './style'
import { Default } from '@/application/layouts'
import { type SearchAddress } from '@/domain/use-cases/address'
import { type Validator } from '@/application/validation'
import delivery from '@/application/assets/profile/entregadora.png'

import React, { useEffect, useState } from 'react'

type Props = { validation: Validator, searchAddress: SearchAddress }

export const AddAddress: React.FC<Props> = ({ validation, searchAddress }): JSX.Element => {
  const [showFormSearch] = useState(true)

  const [zipCode, setZipCode] = useState<string>('')
  const [zipCodeError, setZipCodeError] = useState<string | undefined>('')

  useEffect(() => { setZipCodeError(validation.validate('zipCode', { zipCode })) }, [zipCode])

  const handleSearchAddress = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    await searchAddress({ zipCode })
  }

  return (
  <Default>
    <Container>
      <section>
        <img src={delivery.src} alt="" />
        { showFormSearch
          ? <form onSubmit={handleSearchAddress}>
              <Input placeholder="Digite seu cep" type='text' name='cep' setState={setZipCode}/>
              <Button type='submit' disabled={!!zipCodeError}>Buscar</Button>
          </form>
          : <form>
              <div>
                <Input placeholder="Apelido" type='text' name='surname' setState={() => {}}/>
                <Input placeholder="Cep" type='text' name='cep' setState={() => {}}/>
                <Input placeholder="Numero" type='text' name='number' setState={() => {}}/>
              </div>
            <Input placeholder="Bairro" type='text' name='neighborhood' setState={() => {}}/>
            <Input placeholder="Rua" type='text' name='street' setState={() => {}}/>
            <Input placeholder="Complemento" type='text' name='complement' setState={() => {}}/>
            <Button>Salvar</Button>
          </form>
        }
      </section>
    </Container>
  </Default>
  )
}
