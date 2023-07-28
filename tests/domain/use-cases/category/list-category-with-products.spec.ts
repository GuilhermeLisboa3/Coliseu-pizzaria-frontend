import { type ListCategoryWithProducts, listCategoryWithProductsUseCase } from '@/domain/use-cases/category'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams } from '@/tests/mocks'
import { UnauthorizedError } from '@/domain/errors'

import { mock } from 'jest-mock-extended'

describe('listCategoryWithProductsUseCase', () => {
  const { url } = httpClientParams
  let sut: ListCategoryWithProducts
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 200, data: {} })
  })

  beforeEach(() => {
    sut = listCategoryWithProductsUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut()

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'get' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('should throw UnauthorizedError if HttpClient return 401', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 401 })

    const promise = sut()

    await expect(promise).rejects.toThrow(new UnauthorizedError())
  })
})
