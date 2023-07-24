import { makeApiUrl } from '@/main/factories/infra/http'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/main/decorators'
import { type SearchAddress, searchAddressUseCase } from '@/domain/use-cases/address'

export const makeSearchAddress = (): SearchAddress =>
  searchAddressUseCase(makeApiUrl('/address'), makeAuthorizeHttpClientDecorator())
