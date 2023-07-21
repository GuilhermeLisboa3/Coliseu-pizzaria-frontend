import { LocalStorageAdapter } from '@/infra/cache'

import 'jest-localstorage-mock'
import faker from 'faker'

describe('LocalStorageAdapter', () => {
  let sut: LocalStorageAdapter

  let key: string
  let value: object

  beforeAll(() => {
    key = faker.database.column()
    value = { any: faker.random.word() }
  })

  beforeEach(() => {
    sut = new LocalStorageAdapter()

    localStorage.clear()
  })

  describe('set()', () => {
    it('should call localStorage.setItem with correct values', async () => {
      sut.set({ key, value })

      expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
    })

    it('should call localStorage.removeItem if value is null', async () => {
      sut.set({ key, value: null as any })

      expect(localStorage.removeItem).toHaveBeenCalledWith(key)
    })
  })

  describe('get()', () => {
    it('should call localStorage.getItem with correct values', async () => {
      sut.get({ key })

      expect(localStorage.getItem).toHaveBeenCalledWith(key)
    })

    it('should return value', async () => {
      jest.spyOn(localStorage, 'getItem').mockReturnValueOnce(JSON.stringify(value))

      const result = sut.get({ key })

      expect(result).toEqual(value)
    })
  })
})
