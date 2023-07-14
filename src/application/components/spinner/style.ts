'use client'
import { colors } from '@/application/styles'

import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
    div {
      display: block;
      position: absolute;
      width: 24px;
      height: 24px;
      margin: 8px;
      border: 3px solid ${colors.white};
      border-radius: 50%;
      animation: ${spinner} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: ${colors.white} transparent transparent transparent;
  }
    div:nth-child(1) {
      animation-delay: -0.45s;
  }
    div:nth-child(2) {
      animation-delay: -0.3s;
  }
    div:nth-child(3) {
      animation-delay: -0.15s;
  }
`
