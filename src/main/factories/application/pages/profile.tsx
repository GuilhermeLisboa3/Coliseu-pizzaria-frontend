'use client'
import { Profile } from '@/application/pages'
import { makeListAddresses, makeDeleteAddress } from '@/main/factories/domain/use-cases/address'

export const MakeProfile: React.FC = () => (
  <Profile listAddresses={makeListAddresses()} deleteAddress={makeDeleteAddress()}/>
)
