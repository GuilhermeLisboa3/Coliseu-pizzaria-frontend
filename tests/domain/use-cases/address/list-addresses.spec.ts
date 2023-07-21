import { type ListAddresses, listAddressesUseCase } from '@/domain/use-cases/address'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('listAddressesUseCase', () => {
  const { url } = httpClientParams
  let sut: ListAddresses
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = listAddressesUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut()

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'get' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
