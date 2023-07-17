import { type HttpClient } from '@/domain/contracts/http'
import { InvalidCredentialsError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient) => Authentication
type Input = { email: string, password: string }
type Output = void
export type Authentication = (input: Input) => Promise<Output>

export const authenticationUseCase: Setup = (url, httpClient) => async ({ email, password }) => {
  const { statusCode } = await httpClient.request({ url, method: 'post', body: { email, password } })

  switch (statusCode) {
    case 401: throw new InvalidCredentialsError()
    default: return undefined
  }
}
