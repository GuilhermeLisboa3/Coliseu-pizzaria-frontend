'use client'
import { Container, Section } from './style'
import logo from '@/application/assets/logo.png'
import { CartContext } from '@/application/contexts'

import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { PiShoppingCartSimple } from 'react-icons/pi'
import { usePathname } from 'next/navigation'
import { Cart } from '../cart'

export const Header: React.FC = (): JSX.Element => {
  const { cart } = useContext(CartContext)
  const path = usePathname()
  const pathName = (pathname: string): string => path === pathname ? 'active' : ''
  const [visible, setVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  return (
  <>
    <Container $bgColor={path === '/'}>
      <Section $visible={visible}>
        <button onClick={() => setVisible(!visible)}>
          { visible ? <AiOutlineClose/> : <AiOutlineMenu/>}
        </button>
        <img src={logo.src} alt="logo" />
        <nav>
          <Link href={'/'} className={pathName('/')}>Home</Link>
          <Link href={'/menu'} className={pathName('/menu')}>Cardápio</Link>
        </nav>
        <div>
          <Link href={'#'}>
            <div onClick={() => setIsOpen(!isOpen)} data-testid='cart'>
              <PiShoppingCartSimple/>
              {
                cart && cart.length > 0
                  ? <span data-testid='cart-item-length'>{cart.length}</span>
                  : ''
              }
            </div>
          </Link>
          <Link href={'/profile'}><AiOutlineUser/></Link>
        </div>
      </Section>
    </Container>
    <Cart isOpen={isOpen} setIsOpen={setIsOpen}/>
  </>
  )
}
