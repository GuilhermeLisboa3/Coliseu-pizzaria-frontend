import { makeApiUrl } from '@/main/factories/infra/http'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/main/decorators'
import { type AddAddress, addAddressUseCase } from '@/domain/use-cases/address'

export const makeAddAddress = (): AddAddress =>
  addAddressUseCase(makeApiUrl('/address'), makeAuthorizeHttpClientDecorator())
