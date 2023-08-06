'use client'
import { Home } from '@/application/pages'
import { CartProvider } from '@/application/contexts'
import { makeAddCartItem, makeDeleteCartItem, makeGetCart } from '@/main/factories/domain/use-cases/cart'
import React from 'react'

const Page = (): JSX.Element => {
  return (
    <>
      <CartProvider getCart={makeGetCart()} addCartItem={makeAddCartItem()} deleteCartItem={makeDeleteCartItem()}>
        <Home/>
      </CartProvider>
    </>
  )
}

export default Page
