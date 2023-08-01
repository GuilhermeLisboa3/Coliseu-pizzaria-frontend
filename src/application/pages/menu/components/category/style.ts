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
