import { type GetStorage, type SetStorage } from '@/domain/contracts/cache'

export class LocalStorageAdapter {
  set ({ key, value }: SetStorage.Input): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.removeItem(key)
    }
  }

  get ({ key }: GetStorage.Input): GetStorage.Output {
    const value = localStorage.getItem(key)

    return JSON.parse(value!)
  }
}
