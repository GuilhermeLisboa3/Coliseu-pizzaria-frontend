import { type HttpClient } from '@/domain/contracts/http'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'
import { type Product } from '@/domain/models'

type Setup = (url: string, httpClient: HttpClient<Array<{ id: string, name: string, products: Product[] }>>) => ListCategoryWithProducts
type Output = Array<{ id: string, name: string, products: Product[] }>
export type ListCategoryWithProducts = () => Promise<Output>

export const listCategoryWithProductsUseCase: Setup = (url, httpClient) => async () => {
  const { statusCode, data } = await httpClient.request({ url, method: 'get' })
  switch (statusCode) {
    case 200: return data!
    case 401: throw new UnauthorizedError()
    default: throw new UnexpectedError()
  }
}
