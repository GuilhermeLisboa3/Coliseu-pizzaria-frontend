import { type DeleteCart, deleteCartUseCase } from '@/domain/use-cases/cart'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, productParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'
import { UnauthorizedError } from '@/domain/errors'

describe('deleteCartUseCase', () => {
  const { url } = httpClientParams
  const { id } = productParams
  let sut: DeleteCart
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 204, data: null })
  })

  beforeEach(() => {
    sut = deleteCartUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ id })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/${id}`, method: 'delete' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('should throw UnauthorizedError if HttpClient return 401', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 401 })

    const promise = sut({ id })

    await expect(promise).rejects.toThrow(new UnauthorizedError())
  })
})
