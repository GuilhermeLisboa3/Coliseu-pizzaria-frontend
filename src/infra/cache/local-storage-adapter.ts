import { type SetStorage } from '@/domain/contracts/cache'

export class LocalStorageAdapter {
  set ({ key, value }: SetStorage.Input): void {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
