import { type HttpClient } from '@/domain/contracts/http'
import { FieldNotFoundError, UnauthorizedError, UnexpectedError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient) => SearchAddress
type Input = { zipCode: string }
type Output = void
export type SearchAddress = (input: Input) => Promise<Output>

export const searchAddressUseCase: Setup = (url, httpClient) => async ({ zipCode }) => {
  const { statusCode } = await httpClient.request({ url: `${url}/${zipCode}`, method: 'post' })
  switch (statusCode) {
    case 200: return undefined
    case 400: throw new FieldNotFoundError('cep')
    case 401: throw new UnauthorizedError()
    default: throw new UnexpectedError()
  }
}
