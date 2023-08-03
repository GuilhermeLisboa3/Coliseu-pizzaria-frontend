import { type HttpClient } from '@/domain/contracts/http'
import { type Cart } from '@/domain/models'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient<Cart>) => GetCart
type Output = Cart
export type GetCart = () => Promise<Output>

export const getCartUseCase: Setup = (url, httpClient) => async () => {
  const { statusCode, data } = await httpClient.request({ url, method: 'get' })
  switch (statusCode) {
    case 200: return data!
    case 401: throw new UnauthorizedError()
    default: throw new UnexpectedError()
  }
}
