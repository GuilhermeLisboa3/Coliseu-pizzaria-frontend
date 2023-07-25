import { type DeleteAddress, deleteAddressUseCase } from '@/domain/use-cases/address'
import { type HttpClient } from '@/domain/contracts/http'
import { httpClientParams, addressParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'
import { UnauthorizedError, UnexpectedError } from '@/domain/errors'

describe('deleteAddressUseCase', () => {
  const { url } = httpClientParams
  const { id } = addressParams
  let sut: DeleteAddress
  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    httpClient.request.mockResolvedValue({ statusCode: 204, data: null })
  })

  beforeEach(() => {
    sut = deleteAddressUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ id })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/${id}`, method: 'delete' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('should throw UnauthorizedError if HttpClient return 401', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 401 })

    const promise = sut({ id })

    await expect(promise).rejects.toThrow(new UnauthorizedError())
  })

  it('should throw UnexpectedError if HttpClient return 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut({ id })

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should return undefined on success', async () => {
    const result = await sut({ id })

    expect(result).toBeUndefined()
  })
})
