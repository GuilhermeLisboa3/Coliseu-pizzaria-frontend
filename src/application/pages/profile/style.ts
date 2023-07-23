'use client'
import { colors } from '@/application/styles'
import { Container as Cont } from 'reactstrap'
import styled from 'styled-components'

export const Container = styled(Cont)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0;
  }
  p {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media (max-width: 502px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`

export const Addresess = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 800px;
  margin: 0 auto;

  a {
    text-decoration: none;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px;
        gap: 3px;
        svg {
          font-size: 1.1rem;
          color: ${colors.white}
        }
      }
  }

  @media (max-width: 991px) {
    width: 100%;
  }
`
