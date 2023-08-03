import { makeApiUrl } from '@/main/factories/infra/http'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/main/decorators'
import { type DeleteCartItem, deleteCartItemUseCase } from '@/domain/use-cases/cart'

export const makeDeleteCartItem = (): DeleteCartItem =>
  deleteCartItemUseCase(makeApiUrl('/cart-item'), makeAuthorizeHttpClientDecorator())
