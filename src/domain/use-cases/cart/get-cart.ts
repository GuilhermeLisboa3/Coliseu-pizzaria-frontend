import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => GetCart
type Output = void
export type GetCart = () => Promise<Output>

export const getCartUseCase: Setup = (url, httpClient) => async () => {
  await httpClient.request({ url, method: 'get' })
}
