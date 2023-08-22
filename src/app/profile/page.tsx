'use client'
import { MakeProfile } from '@/main/factories/application/pages'
import { CartProvider } from '@/application/contexts'
import { makeAddCartItem, makeDeleteCartItem, makeGetCart } from '@/main/factories/domain/use-cases/cart'
import { PrivateRoute } from '@/main/proxies'
import React from 'react'

const Page = (): JSX.Element => {
  return (
  <PrivateRoute>
    <CartProvider getCart={makeGetCart()} addCartItem={makeAddCartItem()} deleteCartItem={makeDeleteCartItem()}>
        <MakeProfile/>
    </CartProvider>
  </PrivateRoute>
  )
}

export default Page
