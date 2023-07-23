'use client'
import { Profile } from '@/application/pages'
import { makeListAddresses } from '@/main/factories/domain/use-cases/address'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters'
import { AccountContext } from '@/application/contexts'

export const MakeProfile: React.FC = () => (
  <AccountContext.Provider value={{ setCurrentAccount: setCurrentAccountAdapter, getCurrentAccount: getCurrentAccountAdapter }}>
    <Profile listAddresses={makeListAddresses()}/>
  </AccountContext.Provider>
)
