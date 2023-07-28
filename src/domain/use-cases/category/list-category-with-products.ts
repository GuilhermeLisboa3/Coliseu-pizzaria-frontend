import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => ListCategoryWithProducts
type Output = void
export type ListCategoryWithProducts = () => Promise<Output>

export const listCategoryWithProductsUseCase: Setup = (url, httpClient) => async () => {
  await httpClient.request({ url, method: 'get' })
}
