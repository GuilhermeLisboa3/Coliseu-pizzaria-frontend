import { type HttpClient } from '@/domain/contracts/http'
import { UnauthorizedError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient) => EditAddress
type Input = { id: string, surname?: string, number?: number, complement?: string, active?: boolean }
type Output = void
export type EditAddress = (input: Input) => Promise<Output>

export const editAddressUseCase: Setup = (url, httpClient) => async ({ id, active, complement, number, surname }) => {
  const { statusCode } = await httpClient.request({ url, method: 'put', body: { id, active, complement, number, surname } })
  switch (statusCode) {
    case 204: return undefined
    case 401: throw new UnauthorizedError()
  }
}
