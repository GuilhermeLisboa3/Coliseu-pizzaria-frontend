'use client'
import { colors } from '@/application/styles'
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

    aside {
      img {
      width: 100%;
      height: 600px; 
        @media (max-width: 838px) {
          display: none;
        }
      }
    }

    @media (max-width: 1102px) {
      width: 95%;
    }

    @media (max-width: 838px) {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
    }

    @media (max-width: 390px) {
      height: 500px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 300px;
        height: 160px;
        margin: 0 auto;
        cursor: pointer;
        @media (max-width: 390px) {
          width: 250px;
          height: 130px;
        }
      }
    }

    form {
      width: 70%;
      margin: 0 auto;

      @media (max-width: 838px) {
        width: 95%;
      }

      @media (max-width: 390px) {
        width: 90%;
      }

      button {
        margin: 2rem auto 0.7rem;
      }
    }

    p {
        text-align: center;
        font-weight: 400;
        color: ${colors.black};
        @media (max-width: 390px) {
          font-size: 0.9rem;
        }

        a {
          display: inline;
          color: ${colors.redDark};
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          &:hover {
            opacity: 0.9;
          }
        }
      }
  }
`
