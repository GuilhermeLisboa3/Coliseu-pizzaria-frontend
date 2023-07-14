'use client'
import { colors } from '@/application/styles'
import styled from 'styled-components'

export const Container = styled.button`
  display: block;
  background-color: ${colors.redDark};
  line-height: 3rem;
  color: ${colors.white};
  border-radius: 0.5rem;
  padding: 0 1rem;
  width: 60%;
  align-self: center;
  font-weight: 500;
  font-size: 1rem;
  height: 3rem;

  &:hover {
    opacity: 0.9;
  }
`
