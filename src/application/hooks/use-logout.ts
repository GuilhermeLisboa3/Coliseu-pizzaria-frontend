import { AccountContext } from '@/application/contexts'

import { useRouter } from 'next/navigation'
import { useContext } from 'react'

type ResultType = () => void

export const useLogout = (): ResultType => {
  const { push } = useRouter()
  const { setCurrentAccount } = useContext(AccountContext)

  return (): void => {
    setCurrentAccount(undefined as any)
    push('/login')
  }
}
