'use client'
import styled from 'styled-components'
import { colors } from '@/application/styles'

export const Container = styled.div<{ $isOpen: boolean }>`
  width: ${props => props.$isOpen ? '400px' : '0'};
  overflow: hidden;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  transition: 0.3s;
  background: ${colors.white};
  box-shadow: 0px 2px 3px -1px ${colors.black}; 
  z-index: 3;
  display: flex;
  flex-direction: column;

  div.itens {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0px 20px 35px 15px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (max-width: 375px) {
    width: ${props => props.$isOpen ? '100%' : '0'};
  }
`

export const HeaderCart = styled.div`
  display: flex;
  gap: 30px;
  font-weight: bolder;
  margin-bottom: 10px;
  padding: 15px;
  svg {
    font-size: 1.6rem;
    cursor: pointer;
  }
  p{
    margin: 0;
    font-size: 1.2rem;
  }
`

export const FooterCart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  p{
    margin: 0;
    font-weight: bold;
    font-size: 1.1rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    margin: 10px auto 0;
  }
`
