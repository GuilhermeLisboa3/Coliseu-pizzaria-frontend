'use client'
import { Button, Input } from '@/application/components'
import { Container } from './style'
import { Default } from '@/application/layouts'
import delivery from '@/application/assets/profile/entregadora.png'

import React from 'react'

export const AddAddress: React.FC = (): JSX.Element => {
  return (
  <Default>
    <Container>
      <section>
        <img src={delivery.src} alt="" />
        <form>
          <Input placeholder="Digite seu cep" type='text' name='cep' setState={() => {}}/>
          <Button>Buscar</Button>
        </form>
        <form>
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
      </section>
    </Container>
  </Default>
  )
}
