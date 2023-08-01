import { MakeMenu } from '@/main/factories/application/pages'
import { PrivateRoute } from '@/main/proxies'
import React from 'react'

const Page = (): JSX.Element => {
  return (
    <PrivateRoute>
      <MakeMenu/>
    </PrivateRoute>
  )
}

export default Page
