'use client'
import { styled } from 'styled-components'
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto auto;
  gap: 10px;

  div {
    display: flex;
    gap: 20px;
  }

  div:nth-child(3) {
    margin-top: 10px;
    gap: 5px;
  }


  button {
    margin: 10px auto 20px;
  }

  @media (max-width: 510px) {
    margin: 10px;
    width: 95%;
  }
`
