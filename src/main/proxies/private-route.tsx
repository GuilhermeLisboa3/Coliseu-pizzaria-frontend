'use client'
import { AccountContext } from '@/application/contexts'

import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export type Props = { children: JSX.Element }

export const PrivateRoute: React.FC<Props> = ({ children }): any => {
  const { getCurrentAccount } = useContext(AccountContext)
  const { push } = useRouter()

  return getCurrentAccount()?.accessToken ? children : push('/login')
}
