import { type AddCart, addCartUseCase } from '@/domain/use-cases/cart'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, productParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('addCartUseCase', () => {
  const { url } = httpClientParams
  const { id } = productParams
  let sut: AddCart
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = addCartUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ id })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/${id}`, method: 'post' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
