'use client'
import { type Product } from '@/domain/models'
import { type AddCartItem, type GetCart } from '@/domain/use-cases/cart'

import React, { createContext, type ReactNode, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export type Cart = { id: string, name: string, description: string, price: number, available: string, picture: string, categoryId: string, quantity: number, categoryName: string }

export type ContextProps = {
  cart: Cart[] | undefined
  addCartItem: (input: Product, categoryName: string) => Promise<void>
}

export const CartContext = createContext<ContextProps>(null as any)

type ProviderProps = { children: ReactNode, getCart: GetCart, addCartItem: AddCartItem }

export function CartProvider ({ children, getCart, addCartItem }: ProviderProps): any {
  const [cart, setCart] = useState<Cart[] | undefined>(undefined)
  useEffect(() => {
    getCart().then(cart => setCart(cart.products)).catch((error: any) => toast.error(error.message))
  }, [])

  const handlerAddCartItem = async (product: Product, categoryName: string): Promise<void> => {
    await addCartItem({ id: product.id })
  }
  return <CartContext.Provider value={{ cart, addCartItem: handlerAddCartItem }}>{children}</CartContext.Provider>
}