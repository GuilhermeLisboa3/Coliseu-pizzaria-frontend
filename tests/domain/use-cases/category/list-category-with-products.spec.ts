import { type ListCategoryWithProducts, listCategoryWithProductsUseCase } from '@/domain/use-cases/category'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, productParams } from '@/tests/mocks'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'

import { mock } from 'jest-mock-extended'

describe('listCategoryWithProductsUseCase', () => {
  const { url } = httpClientParams
  const { available, description, id, name, picture, price } = productParams
  let sut: ListCategoryWithProducts
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 200, data: [{ id: '1', name: 'name', products: [{ available, description, id, name, picture, price }] }] })
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

  it('should throw UnauthorizedError if HttpClient return 403', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 403 })

    const promise = sut()

    await expect(promise).rejects.toThrow(new UnauthorizedError())
  })

  it('should throw UnauthorizedError if HttpClient return 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should return categories with products on success', async () => {
    const result = await sut()

    expect(result).toEqual([{
      id: '1', name: 'name', products: [{ available, description, id, name, picture, price }]
    }])
  })
})
