import { type AddCart, addCartUseCase } from '@/domain/use-cases/cart'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, productParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'

describe('addCartUseCase', () => {
  const { url } = httpClientParams
  const { id } = productParams
  let sut: AddCart
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 200, data: {} })
  })

  beforeEach(() => {
    sut = addCartUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ id })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/${id}`, method: 'post' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('should throw UnauthorizedError if HttpClient return 401', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 401 })

    const promise = sut({ id })

    await expect(promise).rejects.toThrow(new UnauthorizedError())
  })

  it('should throw UnexpectedError if HttpClient return 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut({ id })

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should return true on success', async () => {
    const result = await sut({ id })

    expect(result).toBeTruthy()
  })
})
