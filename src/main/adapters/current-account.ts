import { type Account } from '@/domain/models'
import { makeLocalStorageAdapter } from '@/main/factories/infra/cache'

export const setCurrentAccountAdapter = (account: Account): void => { makeLocalStorageAdapter().set({ key: 'account', value: account }) }
