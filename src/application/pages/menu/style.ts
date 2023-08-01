'use client'
import { Container as Cont } from 'reactstrap'
import styled from 'styled-components'

export const Container = styled(Cont)`
  display: flex;
  flex-direction: column;
  flex: 1;

  h1 {
    font-weight: bold;
    text-align: center;
  }

  @media (max-width: 767px) {
    h1 {
      margin-top: 20px;
    }
  }
`
