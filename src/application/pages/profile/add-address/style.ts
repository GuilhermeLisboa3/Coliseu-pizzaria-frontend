'use client'
import { colors } from '@/application/styles'
import { Container as Cont } from 'reactstrap'
import styled from 'styled-components'

export const Container = styled(Cont)`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 250px;
    }

    form {
      width: 500px;
      background: ${colors.white};
      display: flex;
      flex-direction: column;
      padding: 0 2.5rem;
      border-radius: 10px;
      margin-top: 20px;
  
      div {
        display: flex;
        gap: 20px;
      }
  
      button {
        margin: 20px
      }
    }
  }


  @media (max-width: 500px) {
    form {
      width: 100%;
    }
  }

  @media (max-width: 380px) {
    form {
      div {
        flex-direction: column;
        gap: 0;
      }
    }
  }

`
