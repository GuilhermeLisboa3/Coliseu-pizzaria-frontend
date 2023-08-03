import { type DeleteCart, deleteCartUseCase } from '@/domain/use-cases/cart'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, productParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('deleteCartUseCase', () => {
  const { url } = httpClientParams
  const { id } = productParams
  let sut: DeleteCart
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = deleteCartUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ id })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/${id}`, method: 'delete' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
