import { Container } from './style'

import React from 'react'
import Link from 'next/link'
import { AiOutlineCopyrightCircle, AiOutlineGithub } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'

export const Footer: React.FC = (): JSX.Element => {
  return (
  <Container>
    <p>
      <AiOutlineCopyrightCircle/>
      <span>Coliseu</span> pizzaria
    </p>

    <div>
      <Link href={'https://www.instagram.com/guime.lisboa/'} target={'_blank'}>
        <BsInstagram/>
      </Link>

      <Link href={'https://www.linkedin.com/in/guilhermegon%C3%A7alveslisboa/'} target={'_blank'}>
        <BiLogoLinkedin/>
      </Link>

      <Link href={'https://github.com/GuilhermeLisboa3'} target={'_blank'}>
        <AiOutlineGithub/>
      </Link>
    </div>
  </Container>
  )
}
