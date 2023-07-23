import { Button } from '@/application/components'
import { Container, Addresess, Error } from './style'
import { Address, SkeletonAddress } from './components'
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
          <Address/>
          <SkeletonAddress/>
          <Error>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, maxime.</span>
            <Button>Tentar novamente</Button>
          </Error>
        </Addresess>
      </Container>
    </Default>
  )
}
