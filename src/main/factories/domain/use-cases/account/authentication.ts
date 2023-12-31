import { makeHttpClient, makeApiUrl } from '@/main/factories/infra/http'
import { type Authentication, authenticationUseCase } from '@/domain/use-cases/account'

export const makeAuthentication = (): Authentication =>
  authenticationUseCase(makeApiUrl('/login'), makeHttpClient())
