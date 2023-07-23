'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import '@splidejs/react-splide/css'
import { Roboto } from 'next/font/google'
import { GlobalStyle } from '@/application/styles'
import { StyledComponentsRegistry } from '@/main/config'
import { ToastContainer } from 'react-toastify'

import React from 'react'
import { AccountContext } from '@/application/contexts'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '@/main/adapters'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap'
})

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="pt-br" className={roboto.variable}>
        <body>
        <AccountContext.Provider value={{ setCurrentAccount: setCurrentAccountAdapter, getCurrentAccount: getCurrentAccountAdapter }}>
          <GlobalStyle/>
          <ToastContainer autoClose={3000} position='top-right' theme='colored'/>
          <StyledComponentsRegistry>
            { children }
          </StyledComponentsRegistry>
        </AccountContext.Provider>
        </body>
      </html>
  )
}

export default RootLayout
