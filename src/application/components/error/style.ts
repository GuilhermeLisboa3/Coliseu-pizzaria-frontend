'use client'
import { colors } from '@/application/styles'
import styled from 'styled-components'
export const Container = styled.div`
  margin: 10px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  span {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${colors.black};
  }

  button {
    width: auto;
    margin-top: 2rem;
  }
`
