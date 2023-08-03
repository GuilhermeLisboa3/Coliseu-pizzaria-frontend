import { type HttpClient } from '@/domain/contracts/http'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient) => GetCart
type Output = void
export type GetCart = () => Promise<Output>

export const getCartUseCase: Setup = (url, httpClient) => async () => {
  const { statusCode } = await httpClient.request({ url, method: 'get' })
  switch (statusCode) {
    case 200: return undefined
    case 401: throw new UnauthorizedError()
    default: throw new UnexpectedError()
  }
}