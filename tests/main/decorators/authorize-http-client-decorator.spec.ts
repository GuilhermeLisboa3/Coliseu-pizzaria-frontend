import { httpClientParams } from '@/tests/mocks'
import { AuthorizeHttpClientDecorator } from '@/main/decorators'
import { type GetStorage } from '@/domain/contracts/cache'
import { type HttpClient } from '@/domain/contracts/http'

import { mock } from 'jest-mock-extended'

describe('AuthorizeHttpClientDecorator', () => {
  let sut: AuthorizeHttpClientDecorator

  const { url, method, body, headers } = httpClientParams

  const getStorage = mock<GetStorage>()
  const httpClient = mock<HttpClient>()

  beforeEach(() => {
    sut = new AuthorizeHttpClientDecorator(getStorage, httpClient)
  })

  it('should call GetStorage with correct value', async () => {
    await sut.request({ url, method, body, headers })

    expect(getStorage.get).toHaveBeenCalledWith({ key: 'account' })
  })

  it('should not add headers if GetStorage is invalid', async () => {
    getStorage.get.mockReturnValueOnce(null)

    await sut.request({ url, method })

    expect(httpClient.request).toHaveBeenCalledWith({ url, method })
  })
})
