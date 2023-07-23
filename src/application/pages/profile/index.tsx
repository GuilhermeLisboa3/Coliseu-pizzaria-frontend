import { Button, Error } from '@/application/components'
import { Container, Addresess } from './style'
import { SkeletonAddress, Address } from './components'
import { Default } from '@/application/layouts'
import { type ListAddresses } from '@/domain/use-cases/address'
import { type Address as AddressModel } from '@/domain/models'
import { AccountContext } from '@/application/contexts'

import { MdOutlineAdd } from 'react-icons/md'
import Link from 'next/link'
import React, { useState, useContext, useEffect } from 'react'

type Props = { listAddresses: ListAddresses }

export const Profile: React.FC<Props> = ({ listAddresses }): JSX.Element => {
  const { getCurrentAccount } = useContext(AccountContext)
  const [addresses, setAddresses] = useState<AddressModel[] | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)
  const [reload, setReload] = useState(true)

  useEffect(() => {
    setAddresses(undefined)
    listAddresses().then(addresses => setAddresses(addresses)).catch(error => setError(error.message))
  }, [reload])

  const handleReload = (): void => {
    setAddresses([])
    setError(undefined)
    setReload(!reload)
  }

  return (
  <Default>
    <Container>
      <h1>Olá, {getCurrentAccount().name}</h1>
      <p>Onde deseja receber seu pedido?</p>
      <Addresess>
        <Link href={'/profile/address'}><Button><><MdOutlineAdd/> Adicionar</></Button></Link>
        { error
          ? <Error error={error} reload={handleReload}/>
          : <>{ addresses
            ? addresses.map(address => (<Address key={address.id} address={address}/>))
            : <SkeletonAddress/>
            }</>
        }
      </Addresess>
    </Container>
  </Default>
  )
}
