import { type HttpClient } from '@/domain/contracts/http'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient) => DeleteCartItem
type Output = void
type Input = { id: string }
export type DeleteCartItem = (input: Input) => Promise<Output>

export const deleteCartItemUseCase: Setup = (url, httpClient) => async ({ id }) => {
  const { statusCode } = await httpClient.request({ url: `${url}/${id}`, method: 'delete' })
  switch (statusCode) {
    case 204: return undefined
    case 401: throw new UnauthorizedError()
    default: throw new UnexpectedError()
  }
}
