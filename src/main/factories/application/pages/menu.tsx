'use client'
import { Menu } from '@/application/pages'
import { makeListCategoryWithProducts } from '@/main/factories/domain/use-cases/category'

export const MakeMenu: React.FC = () => (
  <Menu listCategoryWithProducts={makeListCategoryWithProducts()}/>
)
