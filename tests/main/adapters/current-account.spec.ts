import { AccountParams } from '@/tests/mocks'
import { LocalStorageAdapter } from '@/infra/cache'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters'

jest.mock('@/infra/cache/local-storage-adapter')
describe('currentAccount', () => {
  const { name, accessToken } = AccountParams
  const setSpy: jest.Mock = jest.fn()
  const getSpy: jest.Mock = jest.fn()

  jest.mocked(LocalStorageAdapter).mockImplementation(jest.fn().mockImplementation(() => ({ set: setSpy, get: getSpy })))

  describe('set()', () => {
    it('should call setCurrentAccountAdapter with correct values', () => {
      setCurrentAccountAdapter({ name, accessToken })

      expect(setSpy).toHaveBeenCalledWith({ key: 'account', value: { name, accessToken } })
    })
  })

  describe('get()', () => {
    it('should call getCurrentAccountAdapter with correct values', () => {
      getSpy.mockReturnValueOnce({ name, accessToken })

      const account = getCurrentAccountAdapter()

      expect(getSpy).toHaveBeenCalledWith({ key: 'account' })
      expect(account).toEqual({ name, accessToken })
    })
  })
})
