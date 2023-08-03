import { type HttpClient } from '@/domain/contracts/http'
import { UnauthorizedError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient) => DeleteCart
type Output = void
type Input = { id: string }
export type DeleteCart = (input: Input) => Promise<Output>

export const deleteCartUseCase: Setup = (url, httpClient) => async ({ id }) => {
  const { statusCode } = await httpClient.request({ url: `${url}/${id}`, method: 'delete' })
  switch (statusCode) {
    case 401: throw new UnauthorizedError()
  }
}
