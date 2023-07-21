'use client'
import { colors } from '@/application/styles'
import { Container as Cont } from 'reactstrap'
import styled from 'styled-components'

export const Container = styled(Cont)`
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    span {
      font-size: 1.5rem;
      color: ${colors.redDark};
    }
  }

  div {
    display: flex;
    gap: 10px;

    svg {
      font-size: 1.5rem;
      color: ${colors.redDark};
      &:hover {
        opacity: 0.9;
      }
    }
  }

  @media (max-width: 575px) {
    padding: 20px 10px;
    
    p {
      font-size: 1rem;
      
      span {
        font-size: 1.1rem;
      }
    }

    div {
    display: flex;
    gap: 10px;

      svg {
        font-size: 1.2rem;
      }
    }
  }
`
