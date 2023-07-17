import { type Authentication, authenticationUseCase } from '@/domain/use-cases/account'
import { type HttpClient } from '@/domain/contracts/http'
import { AccountParams, httpClientParams } from '@/tests/mocks'

import { mock } from 'jest-mock-extended'

describe('authenticationUseCase', () => {
  let sut: Authentication
  const { url } = httpClientParams
  const { email, password } = AccountParams
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = authenticationUseCase(url, httpClient)
  })

  it('should call HttpClient with correct values', async () => {
    await sut({ email, password })

    expect(httpClient.request).toHaveBeenCalledWith({ url, method: 'post', body: { email, password } })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
