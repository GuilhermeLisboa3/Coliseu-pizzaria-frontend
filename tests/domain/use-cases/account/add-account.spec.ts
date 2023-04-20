import { type AddAccount, AddAccountUseCase } from '@/domain/use-cases/account'
import { type HttpClient } from '@/domain/contracts/http'
import { AccountParams, httpClientParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('AddAccountUseCase', () => {
  let sut: AddAccount
  const { url } = httpClientParams
  const { name, email, password } = AccountParams
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = AddAccountUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ name, email, password })

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'post', body: { name, email, password } })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
