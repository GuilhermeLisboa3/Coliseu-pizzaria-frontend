import { type SearchAddress, searchAddressUseCase } from '@/domain/use-cases/address'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, addressParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('searchAddressUseCase', () => {
  const { url } = httpClientParams
  const { zipCode } = addressParams
  let sut: SearchAddress
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = searchAddressUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ zipCode })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/${zipCode}`, method: 'post' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
