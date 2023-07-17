import { AccountParams } from '@/tests/mocks'
import { LocalStorageAdapter } from '@/infra/cache'
import { setCurrentAccountAdapter } from '@/main/adapters'

jest.mock('@/infra/cache/local-storage-adapter')
describe('currentAccount', () => {
  const { name, accessToken } = AccountParams
  const setSpy: jest.Mock = jest.fn()

  jest.mocked(LocalStorageAdapter).mockImplementation(jest.fn().mockImplementation(() => ({ set: setSpy })))

  describe('set()', () => {
    it('should call setCurrentAccountAdapter with correct values', () => {
      setCurrentAccountAdapter({ name, accessToken })

      expect(setSpy).toHaveBeenCalledWith({ key: 'account', value: { name, accessToken } })
    })
  })
})
