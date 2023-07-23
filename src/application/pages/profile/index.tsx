import { Button } from '@/application/components'
import { Container, Addresess } from './style'
import { SkeletonAddress } from './components'
import { Default } from '@/application/layouts'

import { MdOutlineAdd } from 'react-icons/md'
import Link from 'next/link'
import React from 'react'

export const Profile: React.FC = (): JSX.Element => {
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
