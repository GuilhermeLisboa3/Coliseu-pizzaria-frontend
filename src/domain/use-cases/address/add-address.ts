import { type HttpClient } from '@/domain/contracts/http'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'
import { type Address } from '@/domain/models'

type Setup = (url: string, httpClient: HttpClient<Address>) => AddAddress
type Input = { zipCode: string, surname: string, neighborhood: string, street: string, number: number, complement: string }
type Output = Address
export type AddAddress = (input: Input) => Promise<Output>

export const addAddressUseCase: Setup = (url, httpClient) => async (input) => {
  const { statusCode, data } = await httpClient.request({ url, method: 'post', body: input })
  switch (statusCode) {
    case 200: return data!
    case 401: throw new UnauthorizedError()
    default: throw new UnexpectedError()
  }
}
