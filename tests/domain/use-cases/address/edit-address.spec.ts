import { type EditAddress, editAddressUseCase } from '@/domain/use-cases/address'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, addressParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('aditAddressUseCase', () => {
  const { url } = httpClientParams
  const { complement, number, surname, active, id } = addressParams
  let sut: EditAddress
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = editAddressUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ complement, number, surname, active, id })

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'put', body: { complement, number, surname, active, id } })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
