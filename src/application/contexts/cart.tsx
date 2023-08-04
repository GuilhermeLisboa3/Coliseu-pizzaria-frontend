import { type Cart } from '@/domain/models'
import { type GetCart } from '@/domain/use-cases/cart'

import React, { createContext, type ReactNode, useState, useEffect } from 'react'

export type ContextProps = {
  cart: Cart[]
}

export const CartContext = createContext<ContextProps>(null as any)

type ProviderProps = { children: ReactNode, getCart: GetCart }

export function CartProvider ({ children, getCart }: ProviderProps): any {
  const [cart] = useState<Cart[]>([])
  useEffect(() => {
    getCart()
  }, [])
  return <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
}
