import { AddAccountUseCase } from '@/domain/use-cases/account'
import { type HttpClient } from '@/domain/contracts/http'

import { mock } from 'jest-mock-extended'

describe('AddAccountUseCase', () => {
  it('should call HttpClient with correct values', async () => {
    const url = 'any_url'
    const httpClient = mock<HttpClient>()

    const sut = AddAccountUseCase(url, httpClient)

    await sut({ name: 'any_name', email: 'any_email', password: 'any_password' })

    expect(httpClient.request).toHaveBeenCalledWith({ url: 'any_url', method: 'post', body: { name: 'any_name', email: 'any_email', password: 'any_password' } })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
