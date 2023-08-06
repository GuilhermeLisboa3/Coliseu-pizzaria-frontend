'use client'
import { Profile } from '@/application/pages'
import { makeListAddresses, makeDeleteAddress, makeEditAddress } from '@/main/factories/domain/use-cases/address'
import { makeEditAddressValidation } from '@/main/factories/application/validation'

export const MakeProfile: React.FC = () => (
    <Profile
    listAddresses={makeListAddresses()}
    deleteAddress={makeDeleteAddress()}
    validation={makeEditAddressValidation()}
    updateAddress={makeEditAddress()}
    />
)
