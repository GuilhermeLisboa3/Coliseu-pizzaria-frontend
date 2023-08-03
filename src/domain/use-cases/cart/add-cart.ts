import { type HttpClient } from '@/domain/contracts/http'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient) => AddCart
type Output = void
type Input = { id: string }
export type AddCart = (input: Input) => Promise<Output>

export const addCartUseCase: Setup = (url, httpClient) => async ({ id }) => {
  const { statusCode } = await httpClient.request({ url: `${url}/${id}`, method: 'post' })
  switch (statusCode) {
    case 200: return undefined
    case 401: throw new UnauthorizedError()
    default: throw new UnexpectedError()
  }
}
