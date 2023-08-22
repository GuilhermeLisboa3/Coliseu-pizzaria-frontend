'use client'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  h2 { 
    font-weight: 500;
  }
  ul {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    gap: 4rem;
  }

  @media (max-width: 767px) {
    ul {
      justify-content: center;
      align-items: center;
    }
  }
`

export const NotProduct = styled.p`
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
`
