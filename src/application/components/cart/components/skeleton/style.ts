'use client'
import styled from 'styled-components'
import { colors, shimmer } from '@/application/styles'

export const Container = styled.div`
position: relative;
  width: 100%;
  height: 100px;
  padding-top: 20px;
  background: no-repeat;
  background-image:
    linear-gradient(to right, ${colors.shimmer}, ${colors.shimmer}),
    linear-gradient(to right, ${colors.shimmer}, ${colors.shimmer}),
    linear-gradient(to right, ${colors.shimmer}, ${colors.shimmer}),
    linear-gradient(to right, ${colors.shimmer}, ${colors.shimmer}),
    linear-gradient(to right, ${colors.shimmer}, ${colors.shimmer}),
    linear-gradient(to right, ${colors.shimmer}, ${colors.shimmer});
  background-position:
    left 10px top 18px,
    left 115px top 38px,
    left 115px top 65px,
    right 42px top 49px,
    right 0px top 49px,
    right 27px top 49px;
  background-size:
    100px 110px,
    100px 20px,
    100px 20px,
    23px 20px,
    23px 20px,
    9px 20px;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(to right, transparent, #F7F8FA, transparent);
    animation: ${shimmer} 1s infinite;
  }
`
