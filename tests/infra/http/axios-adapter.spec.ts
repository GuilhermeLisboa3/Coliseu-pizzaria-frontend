import { AxiosAdapter } from '@/infra/http'
import { httpClientParams } from '@/tests/mocks'

import axios from 'axios'

jest.mock('axios')

describe('AxiosAdapter', () => {
  const fakeAxios = axios as jest.Mocked<typeof axios>
  const { method, body, url, statusCode, data } = httpClientParams
  let sut: AxiosAdapter

  beforeAll(() => {
    fakeAxios.request.mockResolvedValue({ status: statusCode, data })
  })

  beforeEach(() => {
    sut = new AxiosAdapter()
  })

  it('should call axios with correct value', async () => {
    await sut.request({ method, body, url })

    expect(fakeAxios.request).toHaveBeenCalledWith({ method, data: body, url })
    expect(fakeAxios.request).toHaveBeenCalledTimes(1)
  })

  it('should return correct response', async () => {
    const response = await sut.request({ method, body, url })

    expect(response.statusCode).toBe(statusCode)
    expect(response.data).toBe(data)
  })
})
