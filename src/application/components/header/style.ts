'use client'
import { colors } from '@/application/styles'
import { Container as Cont } from 'reactstrap'
import styled from 'styled-components'

type Props = { visible: boolean }

export const Container = styled.header`
  background-color: ${colors.primary};
  padding: 10px 0px;

  @media (max-width: 576px) {
    padding: 10px;
  }
`

export const Section = styled(Cont)<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 130px;
    padding: 10px;
  }

  button {
    display: none;
  }

  nav {
    display: flex;
    a {
      letter-spacing: 1px;
      font-size: 1rem;
      font-weight: 500;
      color: ${colors.black};
      text-decoration: none;

      + a {
        margin-left: 2rem;
      }
    }
    a.active:after {
      content: '';
      display: block;
      height: 2px;
      width: 1rem;
      transition: 0.5s;
      background: ${colors.redDark};
    }
    a.active:hover::after {
      width: 2rem;
    }
  }
  
  div {
    display: flex;
    gap: 10px;
    svg {
      font-size: 1.8rem;
      color: ${colors.black};
      &:hover {
        color: ${colors.redDark};
      }
    }
  }


  @media (max-width: 768px) {
    height: 78px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    button {
      display: block;
      z-index: 2;
      background-color: transparent;
      font-size: 1.6rem;
    }
    img {
      display: none;
    }
    nav {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: fixed;
      width: 100%;
      height: ${props => (props.visible ? '100%' : '0')};
      overflow: hidden;
      top: 0;
      left: 0;
      z-index: 1;
      background-color: ${colors.white};
      transition: 0.5s;

      a {
        letter-spacing: 2px;
        font-size: 1.5rem;
        margin: 1rem 0;

        + a {
          margin-left: 0;
        }
      }
    }
  }

`
