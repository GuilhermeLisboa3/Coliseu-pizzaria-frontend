import { type HttpClient } from '@/domain/contracts/http'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'
import { type Address } from '@/domain/models'

type Setup = (url: string, httpClient: HttpClient<Address[]>) => ListAddresses
type Output = Address[]
export type ListAddresses = () => Promise<Output>

export const listAddressesUseCase: Setup = (url, httpClient) => async () => {
  const { statusCode, data } = await httpClient.request({ url, method: 'get' })
  switch (statusCode) {
    case 200: return data!
    case 401: throw new UnauthorizedError()
    case 403: throw new UnauthorizedError()
    default: throw new UnexpectedError()
  }
}
