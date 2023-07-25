import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => EditAddress
type Input = { id: string, surname?: string, number?: number, complement?: string, active?: boolean }
type Output = void
export type EditAddress = (input: Input) => Promise<Output>

export const editAddressUseCase: Setup = (url, httpClient) => async ({ id, active, complement, number, surname }) => {
  await httpClient.request({ url, method: 'put', body: { id, active, complement, number, surname } })
}
