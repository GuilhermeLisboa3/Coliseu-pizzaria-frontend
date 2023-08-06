'use client'
import { AddAddress } from '@/application/pages'
import { makeAddAddress, makeSearchAddress } from '@/main/factories/domain/use-cases/address'
import { makeAddAddressValidation } from '@/main/factories/application/validation'

export const MakeAddAddress: React.FC = () => (
    <AddAddress validation={makeAddAddressValidation()} addAddress={makeAddAddress()} searchAddress={makeSearchAddress()}/>
)
