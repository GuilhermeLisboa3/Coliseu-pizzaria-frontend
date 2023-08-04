import { type GetCart } from '@/domain/use-cases/cart'

import React, { createContext, type ReactNode, useState, useEffect } from 'react'

export type Cart = { id: string, name: string, description: string, price: number, available: string, picture: string, categoryId: string, quantity: number, categoryName: string }

export type ContextProps = {
  cart: Cart[] | undefined
}

export const CartContext = createContext<ContextProps>(null as any)

type ProviderProps = { children: ReactNode, getCart: GetCart }

export function CartProvider ({ children, getCart }: ProviderProps): any {
  const [cart, setCart] = useState<Cart[] | undefined>(undefined)
  useEffect(() => {
    getCart().then(cart => setCart(cart.products))
  }, [])
  return <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
}
