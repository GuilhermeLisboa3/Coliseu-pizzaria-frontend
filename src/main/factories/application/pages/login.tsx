'use client'
import { Login } from '@/application/pages'
import { makeAuthentication } from '@/main/factories/domain/use-cases/account'
import { makeLoginValidation } from '@/main/factories/application/validation'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters'
import { AccountContext } from '@/application/contexts'

export const MakeLogin: React.FC = () => (
  <AccountContext.Provider value={{ setCurrentAccount: setCurrentAccountAdapter, getCurrentAccount: getCurrentAccountAdapter }}>
    <Login authentication={makeAuthentication()} validation={makeLoginValidation()}/>
  </AccountContext.Provider>
)
