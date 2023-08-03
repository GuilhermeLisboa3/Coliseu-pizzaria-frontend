import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => AddCart
type Output = void
type Input = { id: string }
export type AddCart = (input: Input) => Promise<Output>

export const addCartUseCase: Setup = (url, httpClient) => async ({ id }) => {
  await httpClient.request({ url: `${url}/${id}`, method: 'post' })
}
