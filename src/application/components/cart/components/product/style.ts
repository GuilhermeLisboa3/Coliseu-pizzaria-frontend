'use client'
import styled from 'styled-components'
import { colors } from '@/application/styles'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;

  + div {
    border-top: 1px solid ${colors.redDark};
  }
  aside {
    width: 110px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 110px;
    }
  
    img.Sobremesas {
      width: 43px;
      height: 81px;
    }
  
    img.Bebidas {
      width: 30px;
      height: 90px;
    }
  }

  section {
    flex: 1;
    margin-left: 10px;
    p {
      margin: 0;
      font-weight: bold;
      font-size: 1.1rem;
    }

    span {
      font-size: 0.9rem;
      font-weight: bold;
      color: ${colors.redDark}
    }
  }

  div {
    display: flex;
    gap: 5px;
    align-items: center;
    font-weight: bold;
    color: ${colors.grayDark};
    padding: 0;

    svg {
      cursor: pointer;
    }
  }
`
