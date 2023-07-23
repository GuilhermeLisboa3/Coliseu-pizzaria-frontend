import { Container } from './style'
import { Footer, Header } from '@/application/components'
import React from 'react'

type Props = { children: JSX.Element }

export const Default: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
        {children}
      <Footer />
    </Container>
  )
}
