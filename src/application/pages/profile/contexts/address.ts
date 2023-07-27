import { type Validator } from '@/application/validation'
import { type EditAddress } from '@/domain/use-cases/address'
import { createContext } from 'react'

type Props = {
  handleDelete: (id: string) => Promise<void>
  updateAddress: EditAddress
  reload: () => void
  validation: Validator
}

export const AddressContext = createContext<Props>(null as any)
