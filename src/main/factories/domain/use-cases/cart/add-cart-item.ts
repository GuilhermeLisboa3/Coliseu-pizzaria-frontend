import { makeApiUrl } from '@/main/factories/infra/http'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/main/decorators'
import { type AddCartItem, addCartItemUseCase } from '@/domain/use-cases/cart'

export const makeAddCartItem = (): AddCartItem =>
  addCartItemUseCase(makeApiUrl('/cart-item'), makeAuthorizeHttpClientDecorator())
