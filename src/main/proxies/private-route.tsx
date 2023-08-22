'use client'
import { AccountContext } from '@/application/contexts'

import { useRouter } from 'next/navigation'
import { type ReactNode, useContext, useEffect } from 'react'

export type Props = { children: ReactNode }

export const PrivateRoute: React.FC<Props> = ({ children }): any => {
  const { getCurrentAccount } = useContext(AccountContext)
  const token = getCurrentAccount()?.accessToken
  const { push } = useRouter()

  useEffect(() => {
    if (!token) {
      push('/login')
    }
  }, [token, push])

  return (
    <>
      {!token && null}
      {token && children}
    </>
  )
}
