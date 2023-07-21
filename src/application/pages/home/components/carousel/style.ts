'use client'
import { colors } from '@/application/styles'
import styled from 'styled-components'

export const Container = styled.div`
  margin: auto auto;
  width: 1000px;
  height: 200px;

  .splide__pagination {
    bottom: -1.5rem;
    li {
      button {
        background: ${colors.redDark};
        opacity: 1;
      }
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Card = styled.div`
  border: 2px solid ${colors.grayLight};
  display: grid;
  grid-template-columns: 30% 70%;
  justify-content: center;
  width: 450px;
  height: 180px;
  padding: 0px 10px;
  gap: 10px;
  border-radius: 10px;

  div {
    width: 100%;
    border: none;
    padding: 0px;
    p {
      margin-bottom: 0;
    }
  }

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    svg {
      font-size: 7.5rem;
      color: ${colors.white};
      background-color: ${colors.grayLight};
      border-radius: 10px;
    }

    div {
      display: flex;
      flex-direction: row;
      gap: 2px;
      svg {
        color: #FFBE22;
        background-color: transparent;
        font-size: 1.1rem;
      }
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0px;
    hr {
      width: 100%;
      margin: 5px 0px;
    }
    p:nth-child(1) {
      text-align: left;
      font-weight: bold;

    }
  }

  @media (max-width: 465px) {
    width: 300px;
    height: 135px;
    padding: 10px;

    div:nth-child(1) {
      svg {
        font-size: 5.5rem;
      }

      div {
        svg {
          font-size: 0.9rem;
        }
      }
    }

    div:nth-child(2) {
      justify-content: flex-start;
      p {
        font-size: 0.9rem;
      }

      p:nth-child(1) {
        font-size: 1.1rem;
      }
    }
  }
`
