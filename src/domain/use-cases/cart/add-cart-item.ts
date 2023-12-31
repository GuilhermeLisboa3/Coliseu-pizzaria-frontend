import { type HttpClient } from '@/domain/contracts/http'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient) => AddCartItem
type Output = boolean
type Input = { id: string }
export type AddCartItem = (input: Input) => Promise<Output>

export const addCartItemUseCase: Setup = (url, httpClient) => async ({ id }) => {
  const { statusCode } = await httpClient.request({ url: `${url}/${id}`, method: 'post' })
  switch (statusCode) {
    case 200: return true
    case 401: throw new UnauthorizedError()
    default: throw new UnexpectedError()
  }
}
