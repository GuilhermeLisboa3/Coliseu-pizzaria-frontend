import { type HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => AddAccount
type Input = { name: string, email: string, password: string }
export type AddAccount = (input: Input) => Promise<void>

export const AddAccountUseCase: Setup = (url, httpClient) => async ({ email, name, password }) => {
  await httpClient.request({ url, method: 'post', body: { email, name, password } })
}
