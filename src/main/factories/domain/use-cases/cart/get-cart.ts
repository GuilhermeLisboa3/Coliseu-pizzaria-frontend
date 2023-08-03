import { makeApiUrl } from '@/main/factories/infra/http'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/main/decorators'
import { type GetCart, getCartUseCase } from '@/domain/use-cases/cart'

export const makeGetCart = (): GetCart =>
  getCartUseCase(makeApiUrl('/cart'), makeAuthorizeHttpClientDecorator())
