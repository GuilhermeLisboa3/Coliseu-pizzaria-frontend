import { type GetCart, getCartUseCase } from '@/domain/use-cases/cart'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('getCartUseCase', () => {
  const { url } = httpClientParams
  let sut: GetCart
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = getCartUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut()

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'get' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
