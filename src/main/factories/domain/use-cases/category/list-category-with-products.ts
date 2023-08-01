import { makeApiUrl } from '@/main/factories/infra/http'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/main/decorators'
import { type ListCategoryWithProducts, listCategoryWithProductsUseCase } from '@/domain/use-cases/category'

export const makeListCategoryWithProducts = (): ListCategoryWithProducts =>
  listCategoryWithProductsUseCase(makeApiUrl('/categories'), makeAuthorizeHttpClientDecorator())
