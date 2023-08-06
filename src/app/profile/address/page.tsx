'use client'
import { MakeAddAddress } from '@/main/factories/application/pages'
import { PrivateRoute } from '@/main/proxies'
import { CartProvider } from '@/application/contexts'
import { makeAddCartItem, makeDeleteCartItem, makeGetCart } from '@/main/factories/domain/use-cases/cart'
import React from 'react'

const Page = (): JSX.Element => {
  return (
    <CartProvider getCart={makeGetCart()} addCartItem={makeAddCartItem()} deleteCartItem={makeDeleteCartItem()}>
      <PrivateRoute>
        <MakeAddAddress/>
      </PrivateRoute>
    </CartProvider>
  )
}

export default Page
