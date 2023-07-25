import { type EditAddress, editAddressUseCase } from '@/domain/use-cases/address'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, addressParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'

describe('aditAddressUseCase', () => {
  const { url } = httpClientParams
  const { complement, number, surname, active, id } = addressParams
  let sut: EditAddress
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 204, data: null })
  })

  beforeEach(() => {
    sut = editAddressUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ complement, number, surname, active, id })

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'put', body: { complement, number, surname, active, id } })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('should throw UnauthorizedError if HttpClient return 401', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 401 })

    const promise = sut({ complement, number, surname, active, id })

    await expect(promise).rejects.toThrow(new UnauthorizedError())
  })

  it('should throw UnauthorizedError if HttpClient return 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut({ complement, number, surname, active, id })

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should return undefined on success', async () => {
    const result = await sut({ id })

    expect(result).toBeUndefined()
  })
})
