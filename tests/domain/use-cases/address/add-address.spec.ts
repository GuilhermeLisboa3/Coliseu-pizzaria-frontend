import { type AddAddress, addAddressUseCase } from '@/domain/use-cases/address'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, addressParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'

describe('addAddressUseCase', () => {
  const { url } = httpClientParams
  const { zipCode, complement, neighborhood, number, street, surname } = addressParams
  let sut: AddAddress
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 200, data: null })
  })

  beforeEach(() => {
    sut = addAddressUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ zipCode, complement, neighborhood, number, street, surname })

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'post', body: { zipCode, complement, neighborhood, number, street, surname } })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('should throw UnauthorizedError if HttpClient return 401', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 401 })

    const promise = sut({ zipCode, complement, neighborhood, number, street, surname })

    await expect(promise).rejects.toThrow(new UnauthorizedError())
  })

  it('should throw UnexpectedError if HttpClient return 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut({ zipCode, complement, neighborhood, number, street, surname })

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
