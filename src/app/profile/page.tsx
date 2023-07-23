import { MakeProfile } from '@/main/factories/application/pages'
import { PrivateRoute } from '@/main/proxies'
import React from 'react'

const Page = (): JSX.Element => {
  return (
    <PrivateRoute>
      <MakeProfile/>
    </PrivateRoute>
  )
}

export default Page
