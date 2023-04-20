import { AxiosAdapter } from '@/infra/http'
import { httpClientParams } from '@/tests/mocks'

import axios from 'axios'

jest.mock('axios')

describe('AxiosAdapter', () => {
  const fakeAxios = axios as jest.Mocked<typeof axios>
  const { method, body, url } = httpClientParams
  let sut: AxiosAdapter

  beforeEach(() => {
    sut = new AxiosAdapter()
  })

  it('should call axios with correct value', async () => {
    await sut.request({ method, body, url })

    expect(fakeAxios).toHaveBeenCalledWith({ method, data: body, url })
  })
})
