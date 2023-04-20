import { type HttpResponse, type HttpRequest } from '@/domain/contracts/http'

import axios, { type AxiosResponse } from 'axios'

export class AxiosAdapter {
  async request ({ method, url, body, headers }: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({ url, method, data: body, headers })
    } catch (error: any) { axiosResponse = error.response }
    return { statusCode: axiosResponse.status, data: axiosResponse.data }
  }
}
