import { makeApiUrl } from '@/main/factories/infra/http'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/main/decorators'
import { type EditAddress, editAddressUseCase } from '@/domain/use-cases/address'

export const makeEditAddress = (): EditAddress =>
  editAddressUseCase(makeApiUrl('/address'), makeAuthorizeHttpClientDecorator())
