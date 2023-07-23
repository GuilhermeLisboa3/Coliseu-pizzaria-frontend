'use client'
import { colors } from '@/application/styles'
import styled from 'styled-components'

export const Container = styled.section`
  margin: 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  border: 2px solid ${colors.grayLight};
  border-radius: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .active {
    border: 2px solid ${colors.redDark};
  }

  div {
    margin: 0;
    box-shadow: none;
    border: none;
    padding: 10px;
    p {
      margin-bottom: 0;
    }
  }

  div:nth-child(1) {
    display: flex;
    flex-direction: column;

    p {
      font-size: 1.1rem;
      color: ${colors.grayDark};
      font-weight: 400;
    }

    p:nth-child(1) {
      color: ${colors.black};
      font-size: 1.8rem;
      font-weight: bolder;
    }
  }

  div:nth-child(2) {
    display: flex;
    svg {
      font-size: 2rem;
      color: ${colors.redDark}; 
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 502px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 10px;
    div {
      padding: 0;
    }
    div:nth-child(1) {
      width: 100%;
      align-items: flex-start;
    }
  }

  @media (max-width: 422px) {
    div:nth-child(1) {
      p {
        font-size: 0.9rem;
        font-weight: 500;
      }

      p:nth-child(1) {
        font-size: 1.6rem;
      }
    }
    div:nth-child(2) {
      svg {
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 353px) {
    text-align: center;
    align-items: center;
    gap: 10px;
    div:nth-child(1) {
      align-items: center;
    }
  }
`
