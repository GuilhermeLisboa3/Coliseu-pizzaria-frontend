'use client'
import { colors } from '@/application/styles'
import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.redDark};
  height: 100vh;

  main {
    background-color: ${colors.primary};
    display: grid;
    grid-template-columns: 50% 50%;
    width: 1100px;
    height: 600px;
    padding: 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      img {
      width: 100%;
      height: 600px; 
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      width: 300px;
      height: 160px;
      margin: 0 auto;
      cursor: pointer;
    }
    form {
      width: 70%;
      margin: 0 auto;

      button {
        display: block;
        background-color: ${colors.redDark};
        line-height: 3rem;
        color: ${colors.white};
        border-radius: 0.5rem;
        padding: 0 1rem;
        width: 60%;
        align-self: center;
        font-weight: 500;
        font-size: 1rem;
        height: 3rem;
        margin: 2rem auto 0.7rem;

        &:hover {
          opacity: 0.9;
        }
      }
    }

    p {
        text-align: center;
        font-weight: 400;
        color: ${colors.black};

        Link {
          color: ${colors.redDark};
          font-weight: 500;
          cursor: pointer;
          &:hover {
            opacity: 0.9;
          }
        }
      }
  }
`

export const Hyperlink = styled(Link)`
  color: ${colors.redDark};
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`
