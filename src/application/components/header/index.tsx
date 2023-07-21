'use client'
import { Container, Section } from './style'
import logo from '@/application/assets/logo.png'

import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { PiShoppingCartSimple } from 'react-icons/pi'
import { usePathname } from 'next/navigation'

export const Header: React.FC = (): JSX.Element => {
  const path = usePathname()
  const pathName = (pathname: string): string => path === pathname ? 'active' : ''
  const [visible, setVisible] = useState(false)
  return (
  <Container>
    <Section $visible={visible}>
      <button onClick={() => setVisible(!visible)}>
        { visible ? <AiOutlineClose/> : <AiOutlineMenu/>}
      </button>
      <img src={logo.src} alt="logo" />
      <nav>
        <Link href={'/'} className={pathName('/')}>Home</Link>
        <Link href={'/'} className={pathName('/menu')}>Cardápio</Link>
      </nav>
      <div>
        <Link href={'#'}>
          <div>
            <PiShoppingCartSimple/>
            <span>4</span>
          </div>
        </Link>
        <Link href={'/profile'}><AiOutlineUser/></Link>
      </div>
    </Section>
  </Container>
  )
}
