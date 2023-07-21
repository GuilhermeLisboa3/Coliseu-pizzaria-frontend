import { type HttpClient } from '@/domain/contracts/http'
import { InvalidCredentialsError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient) => ListAddresses
type Output = void
export type ListAddresses = () => Promise<Output>

export const listAddressesUseCase: Setup = (url, httpClient) => async () => {
  const { statusCode } = await httpClient.request({ url, method: 'get' })
  switch (statusCode) {
    case 401: throw new InvalidCredentialsError()
    default: return undefined
  }
}
