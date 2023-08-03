import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => DeleteCart
type Output = void
type Input = { id: string }
export type DeleteCart = (input: Input) => Promise<Output>

export const deleteCartUseCase: Setup = (url, httpClient) => async ({ id }) => {
  await httpClient.request({ url: `${url}/${id}`, method: 'delete' })
}
