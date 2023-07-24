import { type AddAddress, addAddressUseCase } from '@/domain/use-cases/address'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, addressParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('addAddressUseCase', () => {
  const { url } = httpClientParams
  const { zipCode, complement, neighborhood, number, street, surname } = addressParams
  let sut: AddAddress
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = addAddressUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ zipCode, complement, neighborhood, number, street, surname })

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'post', body: { zipCode, complement, neighborhood, number, street, surname } })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
