import { Button } from '@/application/components'
import { Container, Addresess } from './style'
import { SkeletonAddress } from './components'
import { Default } from '@/application/layouts'
import { type ListAddresses } from '@/domain/use-cases/address'

import { MdOutlineAdd } from 'react-icons/md'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = { listAddresses: ListAddresses }

export const Profile: React.FC<Props> = ({ listAddresses }): JSX.Element => {
  useState(() => {
    listAddresses()
  })
  return (
    <Default>
      <Container>
        <h1>Olá, Guilherme</h1>
        <p>Onde deseja receber seu pedido?</p>
        <Addresess>
          <Link href={'/profile/address'}><Button><><MdOutlineAdd/> Adicionar</></Button></Link>
          <SkeletonAddress/>
        </Addresess>
      </Container>
    </Default>
  )
}
