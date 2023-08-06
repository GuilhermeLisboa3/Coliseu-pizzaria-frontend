'use client'
import { type Product } from '@/domain/models'
import { type DeleteCartItem, type AddCartItem, type GetCart } from '@/domain/use-cases/cart'

import React, { createContext, type ReactNode, useState, useEffect } from 'react'

export type Cart = { id: string, name: string, description: string, price: number, available: string, picture: string, categoryId: string, quantity: number, categoryName: string }

export type ContextProps = {
  cart: Cart[] | undefined
  addCartItem: (input: Product, categoryName: string) => Promise<void>
  deleteCartItem: (id: string) => Promise<void>
}

export const CartContext = createContext<ContextProps>(null as any)

type ProviderProps = { children: ReactNode, getCart: GetCart, addCartItem: AddCartItem, deleteCartItem: DeleteCartItem }

export function CartProvider ({ children, getCart, addCartItem, deleteCartItem }: ProviderProps): any {
  const [cart, setCart] = useState<Cart[] | undefined>(undefined)
  useEffect(() => {
    getCart().then(cart => setCart(cart.products)).catch((error: any) => console.error(error.message))
  }, [])

  const handlerAddCartItem = async (product: Product, categoryName: string): Promise<void> => {
    try {
      const addCart = cart!
      await addCartItem({ id: product.id })
      const findProductIndex = cart!.findIndex(productCart => productCart.id === product.id)
      if (findProductIndex >= 0) addCart[findProductIndex].quantity += 1
      else addCart.push({ ...product, quantity: 1, categoryName })
      setCart([...addCart])
    } catch (error) {}
  }

  const handlerDeleteCartItem = async (id: string): Promise<void> => {
    try {
      const deleteCart = cart!
      await deleteCartItem({ id })
      const findProductIndex = cart!.findIndex(productCart => productCart.id === id)
      if (deleteCart[findProductIndex].quantity <= 1) deleteCart.splice(findProductIndex, 1)
      else deleteCart[findProductIndex].quantity -= 1
      setCart([...deleteCart])
    } catch (error) {}
  }
  return <CartContext.Provider value={{ cart, addCartItem: handlerAddCartItem, deleteCartItem: handlerDeleteCartItem }}>{children}</CartContext.Provider>
}
