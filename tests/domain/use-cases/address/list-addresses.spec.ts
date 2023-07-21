import { type ListAddresses, listAddressesUseCase } from '@/domain/use-cases/address'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, addressParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'

describe('listAddressesUseCase', () => {
  const { url } = httpClientParams
  const { active, complement, id, neighborhood, number, street, surname, zipCode } = addressParams
  let sut: ListAddresses
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 200, data: [{ active, complement, id, neighborhood, number, street, surname, zipCode }] })
  })

  beforeEach(() => {
    sut = listAddressesUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut()

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'get' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('should throw InvalidCredentialsError if HttpClient return 401', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 401 })

    const promise = sut()

    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  it('should throw UnexpectedError if HttpClient return 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should return address if HttpClient return 200', async () => {
    const result = await sut()

    expect(result).toEqual([{ active, complement, id, neighborhood, number, street, surname, zipCode }])
  })
})
