'use client'
import { Button, Error } from '@/application/components'
import { Container, Addresess } from './style'
import { SkeletonAddress, Address } from './components'
import { Default } from '@/application/layouts'
import { type EditAddress, type DeleteAddress, type ListAddresses } from '@/domain/use-cases/address'
import { type Address as AddressModel } from '@/domain/models'
import { AccountContext } from '@/application/contexts'
import { useError } from '@/application/hooks'
import { AddressContext } from '@/application/pages/profile/contexts'
import { type Validator } from '@/application/validation'

import { MdOutlineAdd } from 'react-icons/md'
import Link from 'next/link'
import React, { useState, useContext, useEffect } from 'react'
import { toast } from 'react-toastify'

type Props = { listAddresses: ListAddresses, deleteAddress: DeleteAddress, validation: Validator, updateAddress: EditAddress }

export const Profile: React.FC<Props> = ({ listAddresses, deleteAddress, validation, updateAddress }): JSX.Element => {
  const { getCurrentAccount } = useContext(AccountContext)
  const [addresses, setAddresses] = useState<AddressModel[] | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)
  const [reload, setReload] = useState(true)
  const [loading, setLoading] = useState(false)
  const handleError = useError(error => setError(error.message))
  const handleDeleteError = useError(error => toast.error(error.message))

  useEffect(() => {
    setAddresses(undefined)
    listAddresses().then(addresses => setAddresses(addresses)).catch(handleError)
  }, [reload])

  const handleReload = (): void => {
    setAddresses([])
    setError('')
    setReload(!reload)
  }

  const handleDelete = async (id: string): Promise<void> => {
    if (loading) return
    try {
      setLoading(true)
      await deleteAddress({ id })
      setAddresses(addresses?.filter(address => address.id !== id))
    } catch (error: any) {
      handleDeleteError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
  <AddressContext.Provider value={{ handleDelete, validation, updateAddress, reload: handleReload }}>
    <Default>
      <Container>
        <h1>Olá, {getCurrentAccount()?.name}</h1>
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
  </AddressContext.Provider>
  )
}
