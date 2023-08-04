import { type GetCart, getCartUseCase } from '@/domain/use-cases/cart'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, productParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'

describe('getCartUseCase', () => {
  const { url } = httpClientParams
  const { id, available, categoryId, description, name, picture, price } = productParams
  let sut: GetCart
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({
      statusCode: 200,
      data: { id, accountId: id, products: [{ id, available, categoryId, description, name, picture, price, quantity: 2, categoryName: name }] }
    })
  })

  beforeEach(() => {
    sut = getCartUseCase(url, httpClient)
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

  it('should throw UnexpectedError if HttpClient return 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should return cart with products on success', async () => {
    const result = await sut()

    expect(result).toEqual({ id, accountId: id, products: [{ id, available, categoryId, description, name, picture, price, quantity: 2, categoryName: name }] })
  })
})
