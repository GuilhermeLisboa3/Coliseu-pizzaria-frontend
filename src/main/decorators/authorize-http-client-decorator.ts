import { type HttpClient, type HttpRequest, type HttpResponse } from '@/domain/contracts/http'
import { type GetStorage } from '@/domain/contracts/cache'

export class AuthorizeHttpClientDecorator {
  constructor (private readonly getStorage: GetStorage, private readonly httpClient: HttpClient) {}

  async request (data: HttpRequest): Promise<HttpResponse> {
    const account = this.getStorage.get({ key: 'account' })
    if (account?.accessToken) {
      Object.assign(data, { headers: { ...data.headers, authorization: `Bearer: ${account.accessToken as string}` } })
    }
    return await this.httpClient.request(data)
  }
}
