import { type HttpClient } from '@/domain/contracts/http'
import { FieldInUseError, UnexpectedError } from '@/domain/errors'

type Setup = (url: string, httpClient: HttpClient) => AddAccount
type Input = { name: string, email: string, password: string }
export type AddAccount = (input: Input) => Promise<void>

export const AddAccountUseCase: Setup = (url, httpClient) => async ({ email, name, password }) => {
  const { statusCode } = await httpClient.request({ url, method: 'post', body: { email, name, password } })

  switch (statusCode) {
    case 200: return undefined
    case 400: throw new FieldInUseError('email')
    default: throw new UnexpectedError()
  }
}
