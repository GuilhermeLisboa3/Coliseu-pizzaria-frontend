import { Roboto } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalStyle } from '@/application/styles'
import { StyledComponentsRegistry } from '@/main/config'

import React from 'react'

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
          <GlobalStyle/>
          <StyledComponentsRegistry>
            { children }
          </StyledComponentsRegistry>
        </body>
      </html>
  )
}

export default RootLayout
