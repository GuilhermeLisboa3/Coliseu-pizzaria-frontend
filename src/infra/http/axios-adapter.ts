import { type HttpRequest } from '@/domain/contracts/http'

import axios from 'axios'

export class AxiosAdapter {
  async request ({ method, url, body, headers }: HttpRequest): Promise<void> {
    await axios({ url, method, data: body, headers })
  }
}
