import { type SearchAddress, searchAddressUseCase } from '@/domain/use-cases/address'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, addressParams } from '@/tests/mocks'
import { FieldNotFoundError, UnauthorizedError, UnexpectedError } from '@/domain/errors'

import { mock } from 'jest-mock-extended'

describe('searchAddressUseCase', () => {
  const { url } = httpClientParams
  const { zipCode, neighborhood, street } = addressParams
  let sut: SearchAddress
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 200, data: { neighborhood, street } })
  })

  beforeEach(() => {
    sut = searchAddressUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ zipCode })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/${zipCode}`, method: 'get' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('should throw FieldNotFoundError if HttpClient return 400', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 400 })

    const promise = sut({ zipCode })

    await expect(promise).rejects.toThrow(new FieldNotFoundError('cep'))
  })

  it('should throw UnauthorizedError if HttpClient return 401', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 401 })

    const promise = sut({ zipCode })

    await expect(promise).rejects.toThrow(new UnauthorizedError())
  })

  it('should throw UnexpectedError if HttpClient return 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut({ zipCode })

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should return address on success', async () => {
    const result = await sut({ zipCode })

    expect(result).toEqual({ neighborhood, street })
  })
})
