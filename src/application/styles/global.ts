'use client'
import { colors } from './colors'

import { createGlobalStyle, keyframes } from 'styled-components'

export const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: var(--font-roboto);
  }

  *:focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.redDark};
  }

  input[type="password"], input[type="email"], input[type="text"] {
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    border: none;

    :focus {
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }
  }

  [disabled] {
    opacity: 0.9;
    cursor: not-allowed;
  }

`
