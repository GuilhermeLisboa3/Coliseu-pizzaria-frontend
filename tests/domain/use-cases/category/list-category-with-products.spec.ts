import { type ListCategoryWithProducts, listCategoryWithProductsUseCase } from '@/domain/use-cases/category'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('listCategoryWithProductsUseCase', () => {
  const { url } = httpClientParams
  let sut: ListCategoryWithProducts
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = listCategoryWithProductsUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut()

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'get' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
