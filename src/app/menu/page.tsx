'use client'
import { MakeMenu } from '@/main/factories/application/pages'
import { CartProvider } from '@/application/contexts'
import { makeAddCartItem, makeDeleteCartItem, makeGetCart } from '@/main/factories/domain/use-cases/cart'
import React from 'react'
import { PrivateRoute } from '@/main/proxies'

const Page = (): JSX.Element => {
  return (
    <PrivateRoute>
      <CartProvider getCart={makeGetCart()} addCartItem={makeAddCartItem()} deleteCartItem={makeDeleteCartItem()}>
        <MakeMenu/>
      </CartProvider>
    </PrivateRoute>
  )
}

export default Page
