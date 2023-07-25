import { type DeleteAddress, deleteAddressUseCase } from '@/domain/use-cases/address'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, addressParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('deleteAddressUseCase', () => {
  const { url } = httpClientParams
  const { id } = addressParams
  let sut: DeleteAddress
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = deleteAddressUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ id })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/${id}`, method: 'delete' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
