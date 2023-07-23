import { Button } from '@/application/components'
import { Container, Addresess, Error, Skeleton } from './style'
import { Default } from '@/application/layouts'

import { MdOutlineAdd } from 'react-icons/md'
import { TiEdit } from 'react-icons/ti'
import { RiDeleteBinLine } from 'react-icons/ri'
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
          <section>
            <div>
              <p>Casa</p>
              <p>Rua Antonio Rodrigues Braga 34, rua sem saida</p>
              <p>Vila constança, 02258090</p>
            </div>
            <div>
                <TiEdit/>
                <RiDeleteBinLine/>
            </div>
          </section>
          <Skeleton/>
          <Error>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, maxime.</span>
            <Button>Tentar novamente</Button>
          </Error>
        </Addresess>
      </Container>
    </Default>
  )
}
